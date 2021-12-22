<template>
  <div>
    <ion-app>
    <ion-menu side="start" menu-id="usermenu" content-id="usermenucontent">
    <ion-header>
      <ion-toolbar color="primary">
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item router-link='/home'><ion-icon slot="start" name="Vitrine"></ion-icon>Vitrine</ion-item>
        <ion-item router-link='/emprunter'><ion-icon slot="start" name="Emprunter"></ion-icon>Emprunter</ion-item>
        <ion-item router-link='/affichage'><ion-icon slot="start" name="AffichageEmp"></ion-icon>Les empreints</ion-item>
      </ion-list>
    </ion-content>
    </ion-menu>
      <ion-header translucent>
        <ion-toolbar color="">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title color="primary-contrast">Bibliothèque</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <router-view>
          <ion-button color="success" routerLink="/ajouter">Ajouter</ion-button>
          <ion-item v-for="(livre, i) in livres" :key="i">
            <ion-card>
              <img :src="livre.image" />
              <ion-card-header>
                <ion-card-subtitle>{{ livre.isbn }}</ion-card-subtitle>
                <ion-card-title>{{ livre.titre }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ livre.resume }}
              </ion-card-content>
              <router-link
                  :to="{ name: 'Modifier', 
                  params: { 
                    id: livre.id,
                    title:livre.title,
                    isbn:livre.isbn,
                    anneeEdition:livre.anneeEdition,
                    resume:livre.resume,
                    nbreExemplaire:livre.nbreExemplaire,
                    image:livre.image,

                    } }"><ion-button color="danger">Modifier</ion-button> </router-link>
              <ion-button color="danger" @click="deleteData(livre.id, i)"
                >supprimer</ion-button
              >

            </ion-card>
          </ion-item>
        </router-view>
      </ion-content>
    </ion-app>
  </div>
</template>

<script lang="ts">
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { defineComponent} from "vue";
import axios from "axios";

// import Menu from '../components/Menu.vue';

// const baseURL = "http://localhost:3000/livres/";

export default defineComponent({
  name: "Vitrine",
  components: {
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonCard,
    IonCardContent,
    IonItem,
    IonIcon,
    IonButton,
  },
  data() {
    return { livres: [] };
  },

  created() {
    try {
      axios.get("http://127.0.0.1:8000/api/book").then((response) => {
        this.livres = response.data;
      });
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    deleteData(idl: any, i: number) {
      axios.delete("http://127.0.0.1:8000/api/book/" + idl).then((response) => {
        console.log(response);
        this.livres.splice(i, 1);
      });
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
