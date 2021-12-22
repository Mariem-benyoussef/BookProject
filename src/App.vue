<template>
  <ion-app>
    <ion-router-outlet id="usermenucontent" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

//import the Menu
import menu from '../components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet

  }
});
</script>