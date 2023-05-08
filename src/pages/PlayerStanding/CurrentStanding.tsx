import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import "./CurrentStanding.css";

export const CurrentStanding = (props) => {
  const multiplier = ["Test", " ", "D ", "T "];
  var array = [
    [26, null],
    [26, null],
    [26, null],
  ];
  var arrayFinish = [
    [26, null],
    [26, null],
    [26, null],
  ];

  const hv = (arr, tohandle) => {
    for (let i = 0; i < arr.length; i++) {
      if (tohandle[i] != null) {
        arr[i] = tohandle[i];
      } else {
        arr[i] = [26, null];
      }
    }
    return arr;
  };

  const hvVariable = hv(array, props.last3Point);
  const hvVariableFinish = hv(arrayFinish, props.finish);

  return (
    <div>
      <IonCard
        id={
          props.currentPlayer == props.id ? "currentPlayer" : "notCurrentPlayer"
        }
      >
        {/* <IonCardHeader>
        <h1><span id='score'>{props.currentScore}</span> <span id='name'>{props.name}</span></h1>
      </IonCardHeader> */}

        <IonCardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h1>
              <span id="score">{props.currentScore}</span>{" "}
              <span id="name">{props.name}</span>
            </h1>
            <div>
              <IonGrid>
                <IonRow>
                  <IonCol size="auto">
                    <h1>S:{props.sets}</h1>
                  </IonCol>
                  <IonCol size="auto">
                    <h1>L:{props.legs}</h1>
                  </IonCol>
                  <IonCol size="auto">
                    <h1>
                      {"\u00F8"}:{props.average}
                    </h1>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <IonGrid fixed={true}>
            <IonRow>
              <IonCol size="auto">
                <div id={"column"}>Current throw:</div>
              </IonCol>
              {/* {hvVariable == undefined ? <></> : hvVariable.map((test) => test[0] != null && <IonCol><div id={"scoreValues"}>{multiplier[test[1]] && test[0]}</div></IonCol>)} */}
              {hvVariable == undefined ? (
                <></>
              ) : (
                hvVariable.map((test) =>
                  test[0] != 26 && test[1] != null ? (
                    <IonCol>
                      <div id={"scoreValues"}>
                        {multiplier[test[1]] + test[0]}
                      </div>
                    </IonCol>
                  ) : (
                    <IonCol>
                      <div id={"noScoreValues"}>-</div>
                    </IonCol>
                  )
                )
              )}
            </IonRow>
            {props.finish[0] != null && (
              <IonRow>
                <IonCol size="auto">
                  <div id={"column"}>Finish Way:</div>
                </IonCol>
                {props.finish.map((value) => (
                  <IonCol>
                    <div id={"scoreValues"}>{value}</div>
                  </IonCol>
                ))}

                {/* {props.finish.map((test) => test != null && test[0] != null && <IonCol><div id={"scoreValues"}>{multiplier[test[1]]}{test[0]}</div></IonCol>)} */}
              </IonRow>
            )}
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};
