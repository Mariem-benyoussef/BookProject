<template>
  <div>
    <ion-app>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-title color="primary-contrast">Bibliothèque</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <h3>Les Livres empruntés:</h3>
        <ion-list
          v-for="(emprunt,i) in emprunts" :key="i">
          <ion-item>{{emprunt.book}}</ion-item>
          <ion-item>{{emprunt.pupil}}</ion-item>
          <ion-item><ion-button @click="rendre(emprunt.id)">RENDRE</ion-button></ion-item>
        </ion-list>
        <h3>Les Livres rendus:</h3>
        <ion-list
          v-for="(rendre,i) in rendres" :key="i">
          <ion-item>{{rendre.book}}</ion-item>
          <ion-item>{{rendre.pupil}}</ion-item>
        </ion-list>
      </ion-content>
    </ion-app>
  </div>
</template>

<script lang="ts">
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,

} from "@ionic/vue";
import { defineComponent} from "vue";
import axios from "axios";



export default defineComponent({
  name: "AffichageEmp",
  components: {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

  },
  data() {
    return {emprunts:[],
    rendres: []}
  },

  created() {
    try {
      axios.get("http://127.0.0.1:8000/api/emprunt").then((response) => {
        this.emprunts = response.data;
      });
      axios.get("http://127.0.0.1:8000/api/rendre").then((response) => {
        this.rendres = response.data;
      });
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    rendre(id: any){
      axios.put("http://127.0.0.1:8000/api/rendre/"+id).then(res=>{
        console.log(res.data);
      })
    },



  },
});
</script>

<style>
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}
ion-title {
  text-align: center;
}

</style>

