import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import { StartGame } from "./CommunicationBE/StartGame";
import "./InitialiseGame.css";
import { Websocket } from "./CommunicationBE/Websocket";

export const InitialiseGame = (props) => {
  // console.log("Aufruf InitialiseGame", props);
  const [newInitialisierung, setNewInitialisierung] = useState(false);
  const [joinGame, setJoinGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [player, setPlayer] = useState(["Player1"]);
  const [score, setScore] = useState("301");
  const [sets, setSets] = useState("1");
  const [legs, setLegs] = useState("1");
  const [doubleOut, setDoubleOut] = useState("Yes");

  const sendDataToParent = () => {
    const data = `Mode: ${score} S: ${sets} L: ${legs}`;
    props.onChildData(data);
  };

  const addPlayer = () => {
    setPlayer([...player, `Player${player.length + 1}`]);
  };

  const removeLastPlayer = () => {
    setPlayer(player.slice(0, -1));
  };

  const popoverPoints = {
    header: "Points to Score",
    message: "Choose the Points you want to play",
  };

  const popoverSets = {
    header: "Sets",
    message: "How many sets do you want to play?",
  };

  const popoverLegs = {
    header: "Legs",
    message: "How many legs do you want to play?",
  };

  const popoverDoubleOut = {
    header: "Double Out",
    message: "Do you want to stop the game with a double?",
  };

  const setCurrentPlayer = (index, name) => {
    var newArray = [...player];
    newArray[index] = name;
    setPlayer(newArray);
  };

  const settings = [
    {
      name: "Points",
      value: ["301", "501"],
      var: score,
      func: setScore,
      message: popoverPoints,
    },
    {
      name: "Sets",
      value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      var: sets,
      func: setSets,
      message: popoverSets,
    },
    {
      name: "Legs",
      value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      var: legs,
      func: setLegs,
      message: popoverLegs,
    },
    {
      name: "Double Out",
      value: ["Yes", "No"],
      var: doubleOut,
      func: setDoubleOut,
      message: popoverDoubleOut,
    },
  ];

  return (
    <div>
      {!newInitialisierung && !startGame && !joinGame && (
        <IonButton onClick={() => setNewInitialisierung(true)}>
          New Game
        </IonButton>
      )}
      {!joinGame && !newInitialisierung && !startGame && (
        <IonButton onClick={() => setJoinGame(true)}>
          Join Current Game
        </IonButton>
      )}
      {joinGame && <Websocket heightContent={props.heightContent} />}
      {newInitialisierung && (
        <>
          <IonButton
            onClick={() => {
              sendDataToParent();
              setStartGame(true);
              setNewInitialisierung(false);
            }}
            disabled={false}
          >
            Start Game
          </IonButton>

          <IonList>
            <IonItem className="headline">
              <IonLabel>Settings</IonLabel>
            </IonItem>
            {settings.map((valueSettings, indexSettings) => (
              <IonItem key={indexSettings}>
                <IonLabel>{valueSettings.name}</IonLabel>
                <IonSelect
                  value={valueSettings.var}
                  onIonChange={(ev) => valueSettings.func(ev.detail.value)}
                  interfaceOptions={valueSettings.message}
                  interface="alert"
                >
                  {valueSettings.value.map((valueValue, indexValue) => (
                    <IonSelectOption key={indexValue} value={valueValue}>
                      {valueValue}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            ))}
          </IonList>
          <br></br>
          <IonButton
            onClick={() => addPlayer()}
            disabled={player.length > 15 ? true : false}
          >
            Add Player
          </IonButton>
          <IonButton
            onClick={() => removeLastPlayer()}
            disabled={player.length < 2 ? true : false}
          >
            Remove Player
          </IonButton>

          <IonList>
            <IonItem className="headline">
              <IonLabel>Player</IonLabel>
            </IonItem>
            {player.map((value, index) => (
              <IonItem key={index}>
                <IonLabel>Name{index + 1}:</IonLabel>
                <IonInput
                  id={`${index}`}
                  key={index}
                  placeholder={value}
                  onIonInput={(e: any) =>
                    setCurrentPlayer(index, e.target.value)
                  }
                ></IonInput>
              </IonItem>
            ))}
          </IonList>
        </>
      )}
      {startGame && (
        <StartGame
          heightContent={props.heightContent}
          player={player}
          points={score}
          sets={sets}
          legs={legs}
          doubleOut={doubleOut}
        />
      )}
    </div>
  );
};
