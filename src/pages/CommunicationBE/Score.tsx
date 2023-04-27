import React, { useRef, useEffect, useState } from "react";
import { VirtualDartBoard } from "../PlayerStanding/VirtaulDartBoard";
import { gameInfo } from "./Websocket";

// interface Props {
//   message: {
//     [key: string]: {
//       cords: number[];
//       last_3: number[];
//       currentPlayer: Number;
//     },
//   };
// }

interface Props {
  message: gameInfo;
  heightContent: number;
}

export const Score: React.FC<Props> = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const giveMeTheCurrentPlayer = () => {
    const cP = props.message?.settings.currentPlayer;

    if (props.message != null)
      for (const [key, value] of Object.entries(props.message)) {
        if (value) {
          for (const [keyy, valuee] of Object.entries(value)) {
            if (keyy == "id" && valuee == cP) {
              return key;
            }
          }
        }
      }
  };

  const lastThreeCurrentPlayer = () => {
    const currentPlayer = giveMeTheCurrentPlayer();
    if (props.message)
      for (const [key, value] of Object.entries(props.message)) {
        if (key == currentPlayer) {
          return value.last_3;
        }
      }
  };

  const lastThreeCoordsCurrentPlayer = () => {
    const currentPlayer = giveMeTheCurrentPlayer();
    if (props.message)
      for (const [key, value] of Object.entries(props.message)) {
        if (key == currentPlayer) {
          return value.cords;
        }
      }
  };

  return (
    <div>
      {props.message ? (
        <div>
          <div
            className="boxVirtualDartBoard"
            style={{ height: props.heightContent }}
          >
            <div
              className="virtualDartBoard"
              style={{ maxWidth: props.heightContent }}
            >
              <VirtualDartBoard
                currenElementWidth={props.heightContent}
                result={lastThreeCurrentPlayer()}
                coordinates={lastThreeCoordsCurrentPlayer()}
                maxBEcoordsX={props.message.settings.x_max}
                maxBEcoordsY={props.message.settings.y_max}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
