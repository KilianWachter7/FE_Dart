import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import "./CurrentStanding.css"

export const CurrentStanding = (props) => {
    // name={"Kilian"} currentScore={301} am_zug={false} last_3={[20,3,7]} average={20.2}
    // {message.settings.playerCounter > 0 && <CurrentStanding id={"eins"} name={message.player0.spieler} currentScore={message.player0.spielstand} last3Point={message.player0.last_3} coordinaten={message.player0.cords} average={message.player0.average} />}

    const multiplier = ["Test","", "D ", "T "]

  return (
    <div>
        <IonCard id={true ? "currentPlayer" : "notCurrentPlayer"}>
        
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
        <IonCardSubtitle>{props.currentScore}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonGrid fixed={true}>
      <IonRow>
        {props.last3Point[0][0] != null && <IonCol>{multiplier[props.last3Point[0][1]]}{props.last3Point[0][0]}</IonCol>}
        {props.last3Point[1][0] != null && <IonCol>{multiplier[props.last3Point[1][1]]}{props.last3Point[1][0]}</IonCol>}
        {props.last3Point[2][0] != null && <IonCol>{multiplier[props.last3Point[2][1]]}{props.last3Point[2][0]}</IonCol>}
        </IonRow>
      </IonGrid>
      Avaridge: {props.average}
      </IonCardContent>
    </IonCard>
    </div>
  );
}
