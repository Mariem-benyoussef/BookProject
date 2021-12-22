<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button color="primary" default-href="home"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-label>Titre</ion-label>
        <ion-input v-model="titre"></ion-input>
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
      <ion-button color="success" size="medium" @click="createData()">Ajouter</ion-button>
    </ion-list>
  </ion-content>
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

// const baseURL = "http://127.0.0.1:8000/api/book/";

export default defineComponent({
  name: 'Ajouter',
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
    titre:'',
    isbn:'',
    anneeEdition:'',
    resume:'',
    nbrExemplaire:0,
    image:'',
    succed:'',
    failed:'',
  }
},

methods:{

async createData(){
  if ((this.titre!="")&(this.isbn!="")&(this.anneeEdition!="")&(this.resume=!"")&(this.nbrExemplaire!="")&(this.image=!"")){
    axios.post("http://127.0.0.1:8000/api/book/",
      {
        title:this.titre,
        isbn:this.isbn,
        anneeEdition:this.anneeEdition,
        resume:this.resume,
        nbreExemplaire:this.nbrExemplaire,
        image:this.image,
        test:false,
      }).then(()=>{
        this.$router.push({path: '/ajouter'});
        console.log(this.succed);
        alert("Ajouté avec succès");
    });
  }
  else
    {
    console.log(this.failed);
    alert("les champs doivent etre non vide !");
    }
},


// async createData(){
//   if ((this.titre=="")||(this.isbn=="")||(this.anneeEdition=="")||(this.resume=="")||(this.nbrExemplaire=="")||(this.image=="")){
//     alert("les champs doivent etre non vide !");}
//     else{
//     axios.post(baseURL,
//       {
//         titre:this.titre,
//         isbn:this.isbn,
//         anneeEdition:this.anneeEdition,
//         resume:this.resume,
//         nbrExemplaire:this.nbrExemplaire,
//         image:this.image,
//         test:false,
//       }).then(()=>{
//         this.$router.push({path: '/ajouter'});
//         this.test=true;
//         alert("Ajouté avec succès");
//     });
//   }
 
// },

},

});
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
    ion-toolbar{
      color: grey;
    }
  </style>