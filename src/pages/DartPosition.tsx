import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'

export const DartPosition = () => {
  
  return (


        <svg width="20" height="20">
        <line x1="0" y1="0" x2="20" y2="20" stroke="white" strokeWidth="6" strokeLinecap='round'/>
        <line x1="20" y1="0" x2="0" y2="20" stroke="white" strokeWidth="6" />
        <line x1="2" y1="2" x2="18" y2="18" stroke="red" strokeWidth="2" strokeLinecap='round'/>
        <line x1="18" y1="2" x2="2" y2="18" stroke="red" strokeWidth="2" />
        </svg>
        
        
  //       <svg width="20" height="20">

  //  <defs> 
  //   <line id="line1" x1="0" x2="20" y1="0" y2="20" /> 
  //  </defs> 
  //  <use className="stroke"></use> 
  //  <use className="line"></use> 
  // </svg>  

  )
}
