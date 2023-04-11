import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import "./CurrentStanding.css"

export const CurrentStanding = (props) => {
    // name={"Kilian"} currentScore={301} am_zug={false} last_3={[20,3,7]} average={20.2}
    const multiplier = ["Test","", "D ", "T "]


  return (
    <div>
        <IonCard id={props.am_zug ? "currentPlayer" : "notCurrentPlayer"}>
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
        <IonCardSubtitle>{props.currentScore}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonGrid fixed={true}>
      <IonRow>
        {props.last3Point[0] != null && <IonCol>{multiplier[props.last3Multiplier[0]]}{props.last3Point[0]}</IonCol>}
        {props.last3Point[1] != null && <IonCol>{multiplier[props.last3Multiplier[1]]}{props.last3Point[1]}</IonCol>}
        {props.last3Point[2] != null && <IonCol>{multiplier[props.last3Multiplier[2]]}{props.last3Point[2]}</IonCol>}
        </IonRow>
      </IonGrid>
      Avaridge: {props.average}
      </IonCardContent>
    </IonCard>
    </div>
  );
}
