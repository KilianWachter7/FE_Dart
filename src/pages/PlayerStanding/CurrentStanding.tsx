import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import "./CurrentStanding.css"

export const CurrentStanding = (props) => {
  const multiplier = ["Test", " ", "D ", "T "]
  var array = [[26, null], [26, null], [26, null]]
  var arrayFinish = [[26, null], [26, null], [26, null]]


  console.log("currentstanding", props)
  
  const hv = (arr, tohandle) => {
    console.log("A.leng", arr.length)
    for (let i = 0; i < arr.length; i++) {
  console.log("currentstanding for loop", tohandle[i])

      if (tohandle[i] != null) {
        arr[i] = tohandle[i]
      } else {
        arr[i] = [26, null]
      }
    }
    return arr
  }

  const hvVariable = hv(array, props.last3Point)
  const hvVariableFinish = hv(arrayFinish, props.finish)

  console.log("hvVariable", hvVariable)

  return (
    <div>
        <IonCard id={props.currentPlayer == props.id ? "currentPlayer" : "notCurrentPlayer"}>
        
      {/* <IonCardHeader>
        <h1><span id='score'>{props.currentScore}</span> <span id='name'>{props.name}</span></h1>
      </IonCardHeader> */}

      <IonCardContent>
      <h1><span id='score'>{props.currentScore}</span> <span id='name'>{props.name}</span></h1>
      <IonGrid fixed={true}>
        <IonRow>
        <IonCol size="auto">
            <div id={"column"} >Current throw:</div>
          </IonCol>
        {/* {hvVariable == undefined ? <></> : hvVariable.map((test) => test[0] != null && <IonCol><div id={"scoreValues"}>{multiplier[test[1]] && test[0]}</div></IonCol>)} */}
        {hvVariable == undefined ? <></> : hvVariable.map((test) => (test[0] != 26 && test[1] != null) ? <IonCol><div id={"scoreValues"}>{multiplier[test[1]] + test[0]}</div></IonCol> : <IonCol><div id={"noScoreValues"}>-</div></IonCol>)}

        </IonRow>
        {hvVariableFinish[0] == 26 &&
        <IonRow>
        <IonCol size="auto">
            <div id={"column"}>Finish Way:</div>
          </IonCol>
        {hvVariableFinish == undefined ? <></> : hvVariableFinish.map((test) => (test[0] != 26 && test[1] != null) ? <IonCol><div id={"scoreValues"}>{multiplier[test[1]] + test[0]}</div></IonCol> : <IonCol><div id={"noScoreValues"}>-</div></IonCol>)}

        {/* {props.finish.map((test) => test != null && test[0] != null && <IonCol><div id={"scoreValues"}>{multiplier[test[1]]}{test[0]}</div></IonCol>)} */}
        </IonRow>
}
      </IonGrid>
      Avaridge: {props.average}
      </IonCardContent>
    </IonCard>
    </div>
  );
}
