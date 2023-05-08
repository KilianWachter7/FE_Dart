import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { Websocket } from "./Websocket";
import "./StartGame.css";

export const StartGame = (props) => {
  let hostname = location.hostname;
  console.log("Aufruf StartGame", props);
  const [gameStart, setGameStart] = useState(false);
  const [images, setImages] = useState("");
  const [bilder, setBilder] = useState([]);

  const bodyTypeConversation = () => {
    const convertStingToNumber = (value) => {
      return Number(value);
    };

    let hvSets = convertStingToNumber(props.sets);
    let hvLegs = convertStingToNumber(props.legs);
    let hvScore = convertStingToNumber(props.points);

    let hvDoublOut = false;
    if (props.doubleOut == "Yes") {
      hvDoublOut = true;
    }
    return JSON.stringify({
      spielmodus: hvScore,
      sets: hvSets,
      legs: hvLegs,
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
        `http://${hostname}:5001/api/addplayer`,
        requestOptions
      ).then((response) => response.json());
    });
  };

  const convertBaseBilder = (data) => {
    const test = data.split(", ");
    const test2 = test.map((value) => value.replace(/\[b'|b'|'\]|'/g, ""));
    setBilder(test2);
  };

  const apiCallGetCamera = async () => {
    console.log("apiCallGetCamera1", images);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(0),
    };
    fetch(`http://${hostname}:5001/api/getpictures`, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.log("data", data);
        // setImages(JSON.parse(data.replace(/'/g, '"')));
        setImages(data);
        convertBaseBilder(data);
      });

    console.log("apiCallGetCamera2", images);
  };

  // const apiCallGetCamera = async () => {
  //   console.log("apiCallGetCamera1", images);
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(0),
  //   };
  //   fetch(`http://${hostname}:5001/api/getpictures`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBilder(data);
  //       console.log(data);
  //     });
  // };

  const apiCallSelectGameMode = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyTypeConversation(),
    };
    fetch(
      `http://${hostname}:5001/api/changegamemode`,
      requestOptions
    ).then((response) => response.json());
  };

  const apiCallStartDetection = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://${hostname}:5001/api/startgame`,
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
        <>
          <IonButton
            onClick={() => {
              setGameStart(true);
              start();
            }}
          >
            Start
          </IonButton>
          <IonButton
            onClick={() => {
              apiCallGetCamera();
            }}
          >
            Calibrate Camera
          </IonButton>
          {/* <img src={`data:image/jpeg;base64,${bilder}`} /> */}
          {bilder.map((value) => (
            <div style={{ width: "200px" }}>
              <img src={`data:image/jpeg;base64,${value}`} />
            </div>
          ))}
          {/* {images != null &&
            images.map((value) => (
              <img src={`data:image/jpeg;base64,${value}`} />
            ))}
          <h1>{images}</h1> */}
          {/* {bilder.map((bild, index) => (
            <img key={index} src={bild} alt={`Bild ${index}`} />
          ))}
          <h1>{bilder}</h1> */}
        </>
      )}
    </div>
  );
};
