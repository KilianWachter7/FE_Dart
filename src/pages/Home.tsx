import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'
import { InitialiseGame } from './InitialiseGame';

export const Home = () => {

  const reloadPage = () => {
    window.location.reload();  
  }

  console.log("Aufruf Home")
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            <IonGrid>
              <IonRow style={{display: 'flex', alignItems: 'center'}}>
                <IonCol>Dart Game</IonCol>
                <IonCol size="auto">
                  <IonButton onClick={() => reloadPage()}>Exit</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <InitialiseGame /> 
      </IonContent>
    </IonPage>
  )
}
