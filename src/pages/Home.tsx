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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      calculateContentHeight();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  const apiCallSubmitThrow = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:5001/api/submitthrow",
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
      console.log("Home padding", stingtoInt);
      return stingtoInt;
    }
    return 2;
  };

  const calculateContentHeight = async () => {
    const hvv = await calculateContentPadding();
    if (elementRef.current) {
      const height = elementRef.current.getBoundingClientRect().height;
      const hv = height - hvv;
      console.log("Home height", height, "height - padding", hv);

      setHeightContent(hv);
    }
  };

  //  ########

  // ########

  console.log("Aufruf Home");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            <IonGrid>
              <IonRow style={{ display: "flex", alignItems: "center" }}>
                <IonCol>Dart Game</IonCol>
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
        <InitialiseGame heightContent={heightContent} />
      </IonContent>
    </IonPage>
  );
};
