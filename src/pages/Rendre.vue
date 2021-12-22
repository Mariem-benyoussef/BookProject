<template>
  <ion-app>
    <ion-header :translucent="true">
        <ion-toolbar color="primary">
          <ion-title color="primary-contrast">Bibliothèque</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content fullscreen></ion-content>
  </ion-app>
</template>
<script>
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,


} from '@ionic/vue';
import { defineComponent } from 'vue';
//import axios from 'axios';


export default defineComponent({
  name: 'Rendre',
  components: {
    IonApp,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,

  }
})
</script>