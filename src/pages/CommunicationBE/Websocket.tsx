import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { VirtualDartBoard } from "../PlayerStanding/VirtaulDartBoard";

export interface gameInfo {
  player0: {
    name: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [[], [], []],
    finish_weg: [],
    average: Number
  },
  player1: {
    name: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [[], [], []],
    finish_weg: [],
    average: Number
  },
  player3: {
    name: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [[], [], []],
    finish_weg: [],
    average: Number
  },
  player4: {
    name: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [[], [], []],
    finish_weg: [],
    average: Number
  },
  settings: {
    spielmodus: Number,
    double_in: Boolean,
    double_out: Boolean,
    currentPlayer: Number,
    playerCounter: number,
    x_max: Number,
    y_max: Number
  }
}

export const Websocket = () => {
  console.log("Aufruf Websocket")

  const [currentPlayer, setCurrentPlayer] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<gameInfo>();
  // const [message, setMessage] = useState();

  useEffect(() => {
    const socket = io("localhost:5001/", {
      transports: ["websocket"],
      // cors: {
      //   origin: "http://localhost:3000/",
      // },
    });


    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("data", (data) => {
      console.log("Received data from WebSocket server: ", data);
      console.log("Parse", JSON.parse(data))
      setMessage(JSON.parse(data))
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const giveMeTheCurrentPlayer = () => {
  const cP = message?.settings.currentPlayer

  if(message != null)
  for (const [key, value] of Object.entries(message)) {
    for (const [keyy, valuee] of Object.entries(value)) {
      if (keyy == "id" && valuee == cP) {
        return key
      }
    }
  }
};

const lastThreeCurrentPlayer = () => {
  const currentPlayer = giveMeTheCurrentPlayer()
  if (message)
  for (const [key, value] of Object.entries(message)) {
    if (key == currentPlayer) {
      return value.last_3
    }
  }
}
const lastThreeCoordsCurrentPlayer = () => {
  const currentPlayer = giveMeTheCurrentPlayer()
  if (message)
  for (const [key, value] of Object.entries(message)) {
    if (key == currentPlayer) {
      return value.cords
    }
  }
}

  return (
    <div>
      {message ? (<div>

        {/* {message.player0 == null ? <></> : <VirtualDartBoard result={lastThreeCurrentPlayer()} coordinates={lastThreeCoordsCurrentPlayer()} maxBEcoordsX={message.settings.x_max} maxBEcoordsY={message.settings.y_max}/>} */}
        <VirtualDartBoard result={lastThreeCurrentPlayer()} coordinates={lastThreeCoordsCurrentPlayer()} maxBEcoordsX={message.settings.x_max} maxBEcoordsY={message.settings.y_max}/>
        
      {/* <VirtualDartBoard result={lastThreeCurrentPlayer()} coordinates={lastThreeCoordsCurrentPlayer()} maxBEcoordsX={message.settings.x_max} maxBEcoordsY={message.settings.y_max}/> */}
        
        <p>Received message: {JSON.stringify(message)}</p>
        {/* {message.settings.playerCounter > 0 && <CurrentStanding id={"eins"} name={message.player0.name} currentScore={message.player0.spielstand} last3Point={message.player0.last_3} coordinaten={message.player0.cords} average={message.player0.average} />} */}
        {/* {message.settings.playerCounter > 1 && <CurrentStanding id={"zwei"} name={message.player1.name} currentScore={message.player1.spielstand} last3Point={message.player1.last_3} coordinaten={message.player1.cords} average={message.player1.average} />} */}
        {/* {message.settings.playerCounter > 2 && <CurrentStanding id={"drei"} name={message.player2.name} currentScore={message.player2.spielstand} last3Point={message.player2.last_3} coordinaten={message.player2.cords} average={message.player2.average} />}
        {message.settings.playerCounter > 3 && <CurrentStanding id={"vier"} name={message.player3.name} currentScore={message.player3.spielstand} last3Point={message.player3.last_3} coordinaten={message.player3.cords} average={message.player3.average} />} */}
        </div>
      ) : (
        <p>Waiting for WebSocket message... {message}</p>
      )}
    </div>
  );
};
