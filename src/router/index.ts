import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Vitrine from '../pages/Vitrine.vue'
import Ajouter from '../pages/Ajouter.vue'
import Modifier from '../pages/Modifier.vue'
import Emprunter from '../pages/Emprunter.vue'
import AffichageEmp from '../pages/AffichageEmp.vue'
// import Rendre from '../pages/Rendre.vue'


// import Menu from '../components/Menu.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/vitrine'
  },
  {
    path: '/home',
    redirect: '/vitrine'
  },
  {
    path: '/vitrine',
    name: 'Vitrine',
    component: Vitrine
  },
  {
    path: '/ajouter',
    name: 'Ajouter',
    component: Ajouter
  },
  {
    path: '/modifier/:id',
    name: 'Modifier',
    component: Modifier
  },
  {
    path: '/emprunter',
    name: 'Emprunter',
    component: Emprunter
  },
  {
    path: '/affichage',
    name: 'AffichageEmp',
    component: AffichageEmp
  },
  //   {
  //   path: '/rendre',
  //   name: 'Rendre',
  //   component: Rendre
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
