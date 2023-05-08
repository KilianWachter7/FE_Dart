import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import { VirtualDartBoard } from "../PlayerStanding/VirtaulDartBoard";
import { CurrentStanding } from "../PlayerStanding/CurrentStanding";
// import "./StartGame.css";
import { Score } from "./Score";
import { settings } from "ionicons/icons";

export interface gameInfo {
  // player0: {
  //   name: String;
  //   id: Number;
  //   spielstand: Number;
  //   last_3: [[], [], []];
  //   cords: [[], [], []];
  //   finish_weg: [];
  //   average: Number;
  // };
  // player1: {
  //   name: String;
  //   id: Number;
  //   spielstand: Number;
  //   last_3: [[], [], []];
  //   cords: [[], [], []];
  //   finish_weg: [];
  //   average: Number;
  // };
  // player3: {
  //   name: String;
  //   id: Number;
  //   spielstand: Number;
  //   last_3: [[], [], []];
  //   cords: [[], [], []];
  //   finish_weg: [];
  //   average: Number;
  // };
  // player2: {
  //   name: String;
  //   id: Number;
  //   spielstand: Number;
  //   last_3: [[], [], []];
  //   cords: [[], [], []];
  //   finish_weg: [];
  //   average: Number;
  // };
  // settings: {
  //   spielmodus: Number;
  //   double_in: Boolean;
  //   double_out: Boolean;
  //   currentPlayer: Number;
  //   playerCounter: number;
  //   x_max: Number;
  //   y_max: Number;
  // };
  [key: string]: {
    name: String;
    id: number;
    spielstand: Number;
    last_3: [[], [], []];
    cords: [[], [], []];
    finish_weg: [];
    average: Number;
    spielmodus: Number;
    double_in: Boolean;
    double_out: Boolean;
    currentPlayer: Number;
    playerCounter: number;
    x_max: Number;
    y_max: Number;
    sets: Number;
    legs: Number;
  };
}

export const Websocket = (props) => {
  // console.log("Aufruf Websocket", props);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<gameInfo>();
  const cc = { cors: { origin: "http://localhost:3000" } };
  let hostname = location.hostname;

  useEffect(() => {
    const socket = io(`http://${hostname}:5001/`, {
      transports: ["websocket"],
      // cors: { origin: "http://localhost:3000" },
    });

    // test

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("data", (data) => {
      setMessage(JSON.parse(data));
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  // ########

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPortrait = screenWidth < 768; // Breakpoint for portrait orientation
  const containerStyle = {
    display: "flex",
  };
  const divStyle = {
    flex: "1",
    maxWidth: isPortrait ? "100%" : "auto",
    align: "center",
  };
  const divStyle2 = {
    maxWidth: isPortrait
      ? "100%"
      : `${window.innerWidth - props.heightContent - 32}px`,
  };

  return (
    <div>
      {message ? (
        <div
          style={{
            display: "flex",
            flexDirection: isPortrait ? "column" : "row",
          }}
        >
          <div style={divStyle2}>
            {Object.entries(message).map(([key, value]) => {
              if (key !== "settings") {
                return (
                  <CurrentStanding
                    id={value.id}
                    currentPlayer={message.settings.currentPlayer}
                    name={value.name}
                    currentScore={value.spielstand}
                    finish={value.finish_weg}
                    last3Point={value.last_3}
                    coordinaten={value.cords}
                    average={value.average}
                    sets={value.sets}
                    legs={value.legs}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div style={divStyle}>
            {isPortrait ? (
              <Score heightContent={screenWidth - 32} message={message} />
            ) : (
              <Score heightContent={props.heightContent} message={message} />
            )}
          </div>
        </div>
      ) : (
        <p>Waiting for WebSocket message... {message}</p>
      )}
    </div>
  );
};
