import "./bootstrap.min.css";
import "./cc.css";
import "../theme/variables.css";
import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
} from "@ionic/react";

const ExploreContainer: React.FC = () => {
  const [text, setText] = useState<string>();
  const [cvv, setCvv] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <div className="container-fluid my-4">
      
      <IonItem className="soft-edge bg-tertiary" color='tertiary'>
        <IonLabel position="floating" >Kart Numarası</IonLabel>
        <IonInput
          max="9999999999999999"
          autocomplete="cc-number"
          onIonChange={(e) => setText(e.detail.value!)}
          maxlength={16}
          value={text}
          clearInput
        ></IonInput>
      </IonItem>
      <br />
      <IonItem className="soft-edge bg-tertiary" color='tertiary'>
        <IonLabel position="floating" >CVV Numarası</IonLabel>
        <IonInput
          max="999"
          autocomplete="cc-number"
          onIonChange={(e) => setCvv(e.detail.value!)}
          maxlength={3}
          value={cvv}
          clearInput
        ></IonInput>
      </IonItem>
    </div>
  );
};

export default ExploreContainer;
