import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { CurrentStanding } from './CurrentStanding'
import { VirtualDartBoard } from "./VirtaulDartBoard";

export interface gameInfo {
  player0: {
    spieler: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [[], [], []],
    finish_weg: [],
    average: Number
  },
  player1: {
    spieler: String,
    id: Number,
    spielstand: Number,
    last_3: [[], [], []],
    cords: [],
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
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<gameInfo>();

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
      setMessage(data);
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {message ? (<div>
        <VirtualDartBoard result={message.player0.last_3} coordinates={message.player0.cords}/>
        <p>Received message: {JSON.stringify(message)}</p>
        {message.settings.playerCounter > 0 && <CurrentStanding id={"eins"} name={message.player0.spieler} currentScore={message.player0.spielstand} last3Point={message.player0.last_3} coordinaten={message.player0.cords} average={message.player0.average} />}
        {message.settings.playerCounter > 1 && <CurrentStanding id={"zwei"} name={message.player1.spieler} currentScore={message.player1.spielstand} last3Point={message.player1.last_3} coordinaten={message.player1.cords} average={message.player1.average} />}
        {/* {message.settings.playerCounter > 2 && <CurrentStanding id={"drei"} name={message.player2.spieler} currentScore={message.player2.spielstand} last3Point={message.player2.last_3} coordinaten={message.player2.cords} average={message.player2.average} />}
        {message.settings.playerCounter > 3 && <CurrentStanding id={"vier"} name={message.player3.spieler} currentScore={message.player3.spielstand} last3Point={message.player3.last_3} coordinaten={message.player3.cords} average={message.player3.average} />} */}
        </div>
      ) : (
        <p>Waiting for WebSocket message...</p>
      )}
    </div>
  );
};
