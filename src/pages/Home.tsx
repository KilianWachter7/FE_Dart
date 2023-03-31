import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'

export const Home = () => {
  const [newGame, setNewGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [player, setPlayer] = useState("1");
  const [score, setScore] = useState("1");

  const customAlertOptions = {
    header: 'Numbers of Player',
    message: 'Choose the number of Player',
    translucent: true
  };

  const customPopoverOptions = {
    header: 'Points to Score',
    message: 'Choose the Points you want to play'
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Dart Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {!newGame && <IonButton onClick={() => setNewGame(true)}>New Game</IonButton>}
      {newGame && <><IonButton onClick={() => setStartGame(true)} disabled={score === "1" && player === "1" ? true : false}>Start Game</IonButton> 
    <IonList>
      <IonItem>
        <IonLabel>Numbers of Player</IonLabel>
        <IonSelect onIonChange={(ev) => setPlayer(ev.detail.value)} interfaceOptions={customAlertOptions} interface="alert" placeholder="Select Player">
          <IonSelectOption value="2">2</IonSelectOption>
          <IonSelectOption value="3">3</IonSelectOption>
          <IonSelectOption value="4">4</IonSelectOption>
        </IonSelect>
      </IonItem>
          
      <IonItem>
        <IonLabel>Points</IonLabel>
        <IonSelect onIonChange={(ev) => setScore(ev.detail.value)} interfaceOptions={customPopoverOptions} interface="alert" placeholder="Select Points">
          <IonSelectOption value="301">301</IonSelectOption>
          <IonSelectOption value="501">501</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  </>}
      </IonContent>
    </IonPage>
  )
}
