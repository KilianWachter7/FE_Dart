import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { InitialiseGame } from "./InitialiseGame";

export const Home = () => {
  let hostname = location.hostname;
  const [gameInfo, setGameInfo] = useState("");
  const handleChildData = (data) => {
    setGameInfo(data);
  };

  useEffect(() => {
    function handleResize() {
      calculateContentHeight();
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reloadPage = () => {
    window.location.reload();
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://${hostname}:5001/api/resetgaminfo`,
      requestOptions
    ).then((response) => response.json());
  };

  const apiCallSubmitThrow = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://${hostname}:5001/api/submitthrow`,
      requestOptions
    ).then((response) => response.json());
  };

  const elementRef = useRef<HTMLIonContentElement>(null);
  const [heightContent, setHeightContent] = useState<number>();

  const calculateContentPadding = () => {
    var element = document.getElementById("testCSS");
    if (element != null) {
      var style = window.getComputedStyle(element);
      var width = style.getPropertyValue("--padding-top");
      var stingtoInt = +width.substring(0, width.length - 2);
      return stingtoInt;
    }
    return 2;
  };

  const calculateContentHeight = async () => {
    const hvv = await calculateContentPadding();
    if (elementRef.current) {
      const height = elementRef.current.getBoundingClientRect().height;
      const hv = height - hvv;
      if (height != 0) {
        setHeightContent(hv);
      }
    }
  };

  calculateContentHeight();

  // console.log("Aufruf Home", heightContent);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            <IonGrid>
              <IonRow style={{ display: "flex", alignItems: "center" }}>
                <IonCol>Dart Game</IonCol>
                <IonCol>{gameInfo}</IonCol>
                <IonCol size="auto">
                  <IonButton onClick={() => apiCallSubmitThrow()}>
                    Submit Throw
                  </IonButton>
                  <IonButton onClick={() => reloadPage()}>Exit</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={elementRef} id={"testCSS"} className="ion-padding">
        <InitialiseGame
          onChildData={handleChildData}
          heightContent={heightContent}
        />
      </IonContent>
    </IonPage>
  );
};
