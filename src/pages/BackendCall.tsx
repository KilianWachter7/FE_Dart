import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react'
import React, { useRef, useState } from 'react'
import { VirtualDartBoard } from './VirtaulDartBoard'
import { Websocket } from "./Websocket"
import { DartPosition } from './DartPosition'
import "./BackendCall.css"

export const BackendCall = () => {
  const [zahl, setZahl] = useState(0);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const currentWindowWidth = windowSize.current[0]
  // const coordBullsEye = currentWindowWidth / 2 - 16
  const coordBullsEye = 100
  const xCoordDart = coordBullsEye - 10
  const yCoordDart = coordBullsEye - 10


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
      <div className='boxVirtualDartBoard'>
        <div className='virtualDartBoard'>
          {/* <VirtualDartBoard result={["D12", "T13", "B"]}/> */}
          <Websocket />
        </div>
        {/* <div className='dartPosition' style={{top: xCoordDart, left: yCoordDart}}>
          <DartPosition />
        </div> */}
      </div>
      </IonContent>
    </IonPage>
  )
}
