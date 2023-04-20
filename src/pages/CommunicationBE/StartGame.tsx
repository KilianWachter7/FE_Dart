import { IonButton } from '@ionic/react'
import React from 'react'
import { Websocket } from './Websocket'
import "./StartGame.css"

export const StartGame = (props) => {
  console.log("Aufruf StartGame")

  const bodyTypeConversation = () => {
    let hvScore = 299
    switch (props.points) {
      case "301": hvScore = 301;
        break;
      case "501": hvScore = 501;
        break;
      default: hvScore = 300
        break;
    }

    let hvDoublIn = false
    if (props.doubleIn == "Yes") {
      hvDoublIn = true
    }
    let hvDoublOut = false
    if (props.doubleOut == "Yes") {
      hvDoublOut = true
    }
    return JSON.stringify({"spielmodus": hvScore, "double_in": hvDoublIn, "double_out": hvDoublOut})
  }

  const apiCallAddPlayer = () => {
    props.player.map((value) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"name": value})
    };
    fetch('http://127.0.0.1:5001/api/addplayer', requestOptions)
        .then(response => response.json());
    })
  }

  const apiCallSelectGameMode = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyTypeConversation()
    };    
    fetch('http://127.0.0.1:5001/api/changegamemode', requestOptions)
        .then(response => response.json());
  }

  const apiCallStartDetection = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://127.0.0.1:5001/api/startdetect', requestOptions)
        .then(response => response.json());
  }

  const apiCallSubmitThrow = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:5001/api/submitthrow', requestOptions)
        .then(response => response.json());
  }

  apiCallSelectGameMode()
  apiCallAddPlayer()
  apiCallStartDetection()

  return (
    <div>
      <IonButton onClick={() => apiCallSubmitThrow()}>Submit Throw</IonButton>
      <div className='boxVirtualDartBoard'>
        <div className='virtualDartBoard'>
          <Websocket />
        </div>
      </div>
    </div>
  )
}
