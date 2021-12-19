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
  const [number, setNumber] = useState<number>();

  return (
    <div className="container-fluid my-4">
      <IonList>
        <IonItemDivider>Default Input with Placeholder</IonItemDivider>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItemDivider>
          Input with clear button when there is a value
        </IonItemDivider>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Enter Input"
            onIonChange={(e) => setText(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider>Number type input</IonItemDivider>
        <IonItem>
          <IonInput
            type="number"
            value={number}
            placeholder="Enter Number"
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
      </IonList>
      <IonItem className="soft-edge bg-tertiary">
        <IonLabel position="floating">Floating Label</IonLabel>
        <IonInput
          max="9999999999999999"
          maxlength={16}
          type="number"
          value={text}
          clearInput
        ></IonInput>
      </IonItem>
    </div>
  );
};

export default ExploreContainer;
