import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { CurrentStanding } from './CurrentStanding'


export interface gameInfo {
  game:{
  Spielmodus: Number;
  double_out: Boolean;
  double_in: Boolean;
  numberOfPlayers: Number;
  currentPlayer: Number;
};
player1:
{
  name: String;
  currentScore: Number;
  am_zug: Boolean;
  last3Point: [];
  last3Multiplier: [];
  average: Number;
};
player2:
{
  name: String;
  currentScore: Number;
  am_zug: Boolean;
  last3Point: [];
  last3Multiplier: [];
  average: Number;
};
player3:
{
  name: String;
  currentScore: Number;
  am_zug: Boolean;
  last3Point: [];
  last3Multiplier: [];
  average: Number;
};
player4:
{
  name: String;
  currentScore: Number;
  am_zug: Boolean;
  last3Point: [];
  last3Multiplier: [];
  average: Number;
}}


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
        {/* <h1>{message}</h1> */}
        <p>Received message: {JSON.stringify(message)}</p>
        {message.game.numberOfPlayers > 0 && <CurrentStanding id={"eins"} name={message.player1.name} currentScore={message.player1.currentScore} am_zug={message.player1.am_zug} last3Point={message.player1.last3Point} last3Multiplier={message.player1.last3Multiplier} average={message.player1.average} />}
        {message.game.numberOfPlayers > 1 && <CurrentStanding id={"zwei"} name={message.player2.name} currentScore={message.player2.currentScore} am_zug={message.player2.am_zug} last3Point={message.player2.last3Point} last3Multiplier={message.player2.last3Multiplier} average={message.player2.average} />}
        {message.game.numberOfPlayers > 2 && <CurrentStanding id={"drei"} name={message.player3.name} currentScore={message.player3.currentScore} am_zug={message.player3.am_zug} last3Point={message.player3.last3Point} last3Multiplier={message.player3.last3Multiplier} average={message.player3.average} />}
        {message.game.numberOfPlayers > 3 && <CurrentStanding id={"vier"} name={message.player4.name} currentScore={message.player4.currentScore} am_zug={message.player4.am_zug} last3Point={message.player4.last3Point} last3Multiplier={message.player4.last3Multiplier} average={message.player4.average} />}
        </div>
      ) : (
        <p>Waiting for WebSocket message...</p>
      )}
    </div>
  );
};
