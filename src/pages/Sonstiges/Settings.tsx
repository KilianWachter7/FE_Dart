import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonItem, IonLabel, IonList, IonInput } from '@ionic/react'
import React, { useState } from 'react'
import "./Settings.css"


export const Settings = () => {
  const [currentRequest, setCurrentRequest] = useState("No Response");
  const [currentPOSTRequest, setCurrentPOSTRequest] = useState("");

  const testt = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
}

  const apiGETSettingsCall = (callOption) => {
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:5001/api/${callOption}`, requestOptions)
    .then(response => response.text())
    .then(result => setCurrentRequest(result))
    .catch(error => {
      console.log('error', error)
      setCurrentRequest(`GET failure: ${error}`)
  });
  }

  const apiPOSTSettingsCall = (callOption) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: currentPOSTRequest,
      };
      fetch(`http://localhost:5001/api/${callOption}`, requestOptions)
      .then(response => response.text())
      .then(() => setCurrentRequest(`POST proceeded: ${currentPOSTRequest}`))
      .catch(error => {
        console.log('error', error)
        setCurrentRequest(`POST failure: ${error}`)
      });
  }

  const apiGETcallOptions = ["getinfos", "setcams", "calibrate", "submitthrow", "startdetect", "stopdetect"]
  const apiPOSTcallOptions = ["changegamemode", "addplayer"]

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
      <IonList>
        <IonItem className='headline'>
          <IonLabel>GET Requests</IonLabel>
        </IonItem>
        {apiGETcallOptions.map((value) =>
          <IonItem key={value}>
            <IonButton onClick={() => apiGETSettingsCall(value)}>{value}</IonButton>
          </IonItem>
        )}
      </IonList>

        <IonList>
        <IonItem className='headline'>
          <IonLabel>POST Requests</IonLabel>
        </IonItem>
        {apiPOSTcallOptions.map((value) =>
          <IonItem key={value}>
            <IonLabel>
              <IonButton onClick={() => apiPOSTSettingsCall(value)}>{value}</IonButton>
            </IonLabel>
            <IonInput id={`${value}`} key={value} placeholder={"POST parameter"} onIonInput={(e: any) => {
              if (value == "addplayer") {
              setCurrentPOSTRequest(JSON.stringify({name: `${e.target.value}`}))
              } else {
              setCurrentPOSTRequest(e.target.value)}
              }}></IonInput>
          </IonItem>
        )}
      </IonList>
      <IonList>
        <IonItem className='headline'>
          <IonLabel>Response</IonLabel>
        </IonItem>
          {/* {currentRequest != "" && <div className='presentAPIResult'>
          <pre>{JSON.stringify(testt, null, 4)}</pre>
          </div>} */}
          {currentRequest != "" && <div className='presentAPIResult'>{currentRequest}
          </div>}
        </IonList>
      </IonContent>
    </IonPage>
  )
}
