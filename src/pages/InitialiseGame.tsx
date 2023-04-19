import { IonList, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, IonInput } from '@ionic/react'
import React, { useState } from 'react'
import { StartGame } from './CommunicationBE/StartGame'
import "./InitialiseGame.css"

export const InitialiseGame = () => {
  console.log("Aufruf InitialiseGame")
  const [newInitialisierung, setNewInitialisierung] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [player, setPlayer] = useState(["Player1"]);
  const [score, setScore] = useState(301);
  const [doubleIn, setDoubleIn] = useState(false);
  const [doubleOut, setDoubleOut] = useState(true);

  const addPlayer = () => {
    setPlayer([...player, `Player${player.length + 1}`])
  }

  const removeLastPlayer = () => {
    setPlayer(player.slice(0, -1))
  }

  const popoverPoints = {
    header: 'Points to Score',
    message: 'Choose the Points you want to play'
  };

  const popoverDoubleIn = {
    header: 'Double In',
    message: 'Do you want to start the game with a double?'
  };

  const popoverDoubleOut = {
    header: 'Double Out',
    message: 'Do you want to stop the game with a double?'
  };

  const setCurrentPlayer = (index, name) => {
    var newArray = [...player]
    newArray[index] = name
    setPlayer(newArray)
  }

  return (
  <div>
    {!newInitialisierung && !startGame && <IonButton onClick={() => setNewInitialisierung(true)}>New Game</IonButton>}
    {newInitialisierung &&
    <>
      <IonButton onClick={() => {
        setStartGame(true)
        setNewInitialisierung(false)}} disabled={false}>Start Game</IonButton>

      <IonButton onClick={() => addPlayer()} disabled={player.length > 3 ? true : false}>Add Player</IonButton>
      <IonButton onClick={() => removeLastPlayer() } disabled={player.length < 2 ? true : false}>Remove Player</IonButton>
    
      <IonList>
        <IonItem className='headline'>
          <IonLabel>Settings</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Points</IonLabel>
          <IonSelect value={301} onIonChange={(ev) => setScore(ev.detail.value)} interfaceOptions={popoverPoints} interface="alert" placeholder="Select Points">
            <IonSelectOption value={301}>301</IonSelectOption>
            <IonSelectOption value={501}>501</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Double In</IonLabel>
          <IonSelect value={false} onIonChange={(ev) => setDoubleIn(ev.detail.value)} interfaceOptions={popoverDoubleIn} interface="alert" placeholder="Select Double In">
            <IonSelectOption value={true}>Yes</IonSelectOption>
            <IonSelectOption value={false}>No</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Double Out</IonLabel>
          <IonSelect value={true} onIonChange={(ev) => setDoubleOut(ev.detail.value)} interfaceOptions={popoverDoubleOut} interface="alert" placeholder="Select Double Out">
          <IonSelectOption value={true}>Yes</IonSelectOption>
            <IonSelectOption value={false}>No</IonSelectOption>
          </IonSelect>
        </IonItem>
        </IonList>
      
        <IonList>
        <IonItem className='headline'>
          <IonLabel>Player</IonLabel>
        </IonItem>
        {player.map((value, index) =>
          <IonItem key={index}>
            <IonLabel>Name{index + 1}:</IonLabel>
            <IonInput id={`${index}`} key={index} placeholder={value} onIonInput={(e: any) => setCurrentPlayer(index, e.target.value)}></IonInput>
          </IonItem>
          )}
        </IonList>  

    </>}
    {startGame && <StartGame player={player} points={score} doubleIn={doubleIn} doubleOut={doubleOut}/>}
  </div>
  )
}
