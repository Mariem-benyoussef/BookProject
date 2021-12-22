<template>
  <ion-app>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title color="primary-contrast">Bibliothèque</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
        <ion-item>
          <ion-label>Elève</ion-label>
          <ion-select
            placeholder="Sélectionnez-en un"
            v-model="selectedPupil"
          >
            <ion-select-option
              v-for="(eleve,i) in eleves"
              :key="i" :value="eleve.name"
            >{{ eleve.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      <br/>
      <br/>
      <br/>
      <h3>L'élève sélectionné est : {{selectedPupil}}</h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <ion-item>
        <ion-label>Livre</ion-label>
        <ion-select
          placeholder="Sélectionnez-en un"
          v-model="selectedBook"
        >
          <ion-select-option
            v-for="(livre,i) in livres"
            :key="i" :value="livre.id"
          >{{ livre.title }}
          </ion-select-option>
        </ion-select>
      </ion-item>
      <br/>
      <br/>
      <br/>
      <h3>ID du livre voulu est : {{selectedBook}}</h3>
      <br/>
      <br/>
      <br/>
    <ion-button size="large" expand="block" color="success" @click="emprunt()">EMPRUNTER</ion-button>
    </ion-content>
  </ion-app>
</template>
<script>
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonSelect,


} from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';


// const baseURLpupil="http://localhost:3002/eleves/";
// const baseURLbook="http://localhost:3000/livres/";
// const baseURLemprunt="http://localhost:3003/emprunts/"


export default defineComponent({
  name: 'Emprunter',
  components: {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonSelect,


  },
  data() {
    return {
      eleves :[],
      livres:[],
      selectedPupil: '',
      selectedBook:'',
      titre:'',
      nom:'',
    };
    
  },

created(){
  try{
    axios
        .get("http://127.0.0.1:8000/api/user/")
        .then((response) => {
          this.eleves = response.data;
        });
    axios
        .get("http://127.0.0.1:8000/api/book/")
        .then((response) => {
          this.livres = response.data;
        });
  }

  catch (e) {
      console.error("l'erreur est" + e);
    }
},

methods:{

emprunt(){
        axios.post("http://127.0.0.1:8000/api/emprunt/",
          {
        book:this.selectedBook,
        pupil:this.selectedPupil,
          }).then(()=>{
        this.$router.push('emprunter');
        alert("Emprunté avec succès!");
          });
          
// }
// else {
//   alert("Livre non disponible!")
//   }
},
}
})
</script>
<style>
    :root {
      --ion-safe-area-top: 20px;
      --ion-safe-area-bottom: 22px;
    }
    ion-title{
      color: blue;
      text-align: center;
    }
    ion-list{
      text-align:center
    }
    ion-item{
      font-size: 1.4em;
      font-weight: bold;
    }
    h3{
      text-align: center;
      color: orange;
    }
  </style>