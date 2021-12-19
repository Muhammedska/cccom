import "./bootstrap.min.css";
import "./cc.css";
import "../theme/variables.css";
import sqlite3 from 'sqlite3';
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
  IonButton,
} from "@ionic/react";

let db = new sqlite3.Database('./cc.db');
const ExploreContainer: React.FC = () => {
  const [text, setText] = useState<string>();
  const [cvv, setCvv] = useState<string>();
  const [valid, setValid] = useState<string>();
  const [number, setNumber] = useState<number>();
  function ccadd(){
    
  };
  function ccclear(){
    setCvv('');
    setText('');
    setValid('');
  }
  return (
    <div className="container-fluid my-4">
      <IonItem className="soft-edge bg-tertiary" color="tertiary">
        <IonLabel position="floating">Kart Numarası</IonLabel>
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
      <IonItem className="soft-edge bg-tertiary" color="tertiary">
        <IonLabel position="floating">CVV Numarası</IonLabel>
        <IonInput
          max="999"
          autocomplete="cc-number"
          onIonChange={(e) => setCvv(e.detail.value!)}
          maxlength={3}
          value={cvv}
          clearInput
        ></IonInput>
      </IonItem>
      <br></br>
      <IonItem className="soft-edge bg-tertiary" color="tertiary">
        <IonLabel position="floating">Valid Date</IonLabel>
        <IonInput
          max="999"
          autocomplete="cc-number"
          onIonChange={(e) => setValid(e.detail.value!)}
          maxlength={6}
          value={valid}
          clearInput
        ></IonInput>
      </IonItem>
      <br/>
      <IonGrid>
        <IonRow className="bg-transparent">
          <IonCol>
            <IonButton className='width-100' color='danger' onClick={()=>{
              ccclear();
            }}> Temizle </IonButton>
          </IonCol>
          <IonCol>
            <IonButton className='width-100' > Kart Ekle </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
