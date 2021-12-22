<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
      <ion-buttons>
        <ion-back-button defaultHref="/vitrine" color="primary"></ion-back-button>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-list>
      <ion-item>
        <ion-label>Titre</ion-label>
        <ion-input v-model="titre" placeholder="titre"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>isbn</ion-label>
        <ion-input v-model="isbn" placeholder="isbn"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Année d'édition</ion-label>
        <ion-input v-model="anneeEdition" placeholder="année d'édition"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Résumé</ion-label>
        <ion-input v-model="resume" placeholder="résumé"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Nombre d'exemplaire</ion-label>
        <ion-input v-model="nbrExemplaire" placeholder="nombre d'exemplaire"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Image</ion-label>
        <ion-input v-model="image" placeholder="Entrer l'URL d'image"></ion-input>
      </ion-item>
      <ion-button color="success" size="medium" @click="updateData(this.$route.params.id)">Modifier</ion-button>
    </ion-list>
  </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
// const baseURL = "http://localhost:3000/livres/";

export default defineComponent({
  name:'Modifier',
  components: { 
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
},
    data(){
    return{
        titre:this.$route.params.title,
        isbn:this.$route.params.isbn,
        anneeEdition:this.$route.params.anneeEdition,
        resume:this.$route.params.resume,
        nbrExemplaire:this.$route.params.nbreExemplaire,
        image:this.$route.params.image,
    }
    
  },
    methods:
{
  updateData(id){
    axios.put("http://127.0.0.1:8000/api/book/"+id,
              { 
                title:this.titre,
                isbn:this.isbn,
                anneeEdition:this.anneeEdition,
                resume:this.resume,
                nbreExemplaire:this.nbrExemplaire,
                image:this.image,
                test:false,
              }).then(()=>{
                  this.$router.push({path: '/modifier'});
              });

  }

},

});
</script>

<style scoped>
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
</style>