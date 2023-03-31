import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { IonRouterOutlet, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from '@ionic/react'
import { home, apps, settings, gameController } from 'ionicons/icons'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { Backend } from './pages/Backend'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

export const App: React.FunctionComponent<RouteComponentProps> = props => {

  return (
    <IonPage id="main">
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={Settings} exact />
          <Route path="/backend" component={Backend} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={gameController} />
            <IonLabel>Game On</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="backend" href="/backend">
            <IonIcon icon={settings} />
            <IonLabel>Backend</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}
