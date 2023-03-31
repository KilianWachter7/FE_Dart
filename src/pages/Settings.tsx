import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { io } from "socket.io-client";



export const Settings = () => {
  const [zahl, setZahl] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>KW</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Hello KW</p>
      </IonContent>
    </IonPage>
  )
}
