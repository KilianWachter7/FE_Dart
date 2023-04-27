import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { Websocket } from "./Websocket";
import "./StartGame.css";

export const StartGame = (props) => {
  console.log("Aufruf StartGame", props);
  const [gameStart, setGameStart] = useState(false);

  const bodyTypeConversation = () => {
    let hvScore = 299;
    switch (props.points) {
      case "301":
        hvScore = 301;
        break;
      case "501":
        hvScore = 501;
        break;
      default:
        hvScore = 300;
        break;
    }

    let hvDoublIn = false;
    if (props.doubleIn == "Yes") {
      hvDoublIn = true;
    }
    let hvDoublOut = false;
    if (props.doubleOut == "Yes") {
      hvDoublOut = true;
    }
    return JSON.stringify({
      spielmodus: hvScore,
      // double_in: hvDoublIn,
      double_out: hvDoublOut,
    });
  };

  const apiCallAddPlayer = () => {
    props.player.map((value) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: value }),
      };
      fetch(
        "http://127.0.0.1:5001/api/addplayer",
        requestOptions
      ).then((response) => response.json());
    });
  };

  const apiCallSelectGameMode = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyTypeConversation(),
    };
    fetch(
      "http://127.0.0.1:5001/api/changegamemode",
      requestOptions
    ).then((response) => response.json());
  };

  const apiCallStartDetection = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://127.0.0.1:5001/api/startgame",
      requestOptions
    ).then((response) => response.json());
  };

  const start = () => {
    apiCallSelectGameMode();
    apiCallAddPlayer();
    apiCallStartDetection();
  };

  return (
    <div>
      {gameStart ? (
        <Websocket heightContent={props.heightContent} />
      ) : (
        <IonButton
          onClick={() => {
            setGameStart(true);
            start();
          }}
        >
          Start game really
        </IonButton>
      )}
    </div>
  );
};
