import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
} from "@ionic/react";
import React, { useState } from "react";
import "./Settings.css";

export const Settings = () => {
  const [currentRequest, setCurrentRequest] = useState({});
  const [currentPOSTRequest, setCurrentPOSTRequest] = useState("");

  const apiGETSettingsCall = (callOption) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:5001/api/${callOption}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCurrentRequest(result))
      .catch((error) => {
        console.log("error", error);
        setCurrentRequest(error);
      });
  };

  const apiPOSTSettingsCall = (callOption) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: currentPOSTRequest,
    };
    fetch(`http://localhost:5001/api/${callOption}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCurrentRequest(result))
      .catch((error) => {
        console.log("error", error);
        setCurrentRequest({ error });
      });
  };

  const apiGETcallOptions = [
    "getinfos",
    "setcams",
    "calibrate",
    "submitthrow",
    "startdetect",
    "stopdetect",
  ];
  const apiPOSTcallOptions = ["changegamemode", "addplayer"];

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
          <IonItem className="headline">
            <IonLabel>GET Requests</IonLabel>
          </IonItem>
          {apiGETcallOptions.map((value) => (
            <IonItem key={value}>
              <IonButton onClick={() => apiGETSettingsCall(value)}>
                {value}
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        <IonList>
          <IonItem className="headline">
            <IonLabel>POST Requests</IonLabel>
          </IonItem>
          {apiPOSTcallOptions.map((value) => (
            <IonItem key={value}>
              <IonLabel>
                <IonButton onClick={() => apiPOSTSettingsCall(value)}>
                  {value}
                </IonButton>
              </IonLabel>
              <IonInput
                id={`${value}`}
                key={value}
                placeholder={"POST parameter"}
                onIonInput={(e: any) => {
                  if (value == "addplayer") {
                    setCurrentPOSTRequest(
                      JSON.stringify({ name: `${e.target.value}` })
                    );
                  } else {
                    setCurrentPOSTRequest(e.target.value);
                  }
                }}
              ></IonInput>
            </IonItem>
          ))}
        </IonList>
        <IonList>
          <IonItem className="headline">
            <IonLabel>Response</IonLabel>
          </IonItem>
          {currentRequest != null && (
            <div className="presentAPIResult">
              <pre>{JSON.stringify(currentRequest, null, 2)}</pre>
            </div>
          )}
          {/* {currentRequest != "" && <div className='presentAPIResult'>{currentRequest}</div>} */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
