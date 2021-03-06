import {
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import ExploreContainer from "../components/addcc";
import "./Tab1.css";
import "../components/cc.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='text-center container-fluid'>
        <IonToolbar className='soft-edge-bar'>
          <IonTitle>
            <IonLabel>Kart Ekle</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
