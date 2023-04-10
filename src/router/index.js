import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/inicio.vue";
import BBSAsk from "../views/materias.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/',
      component: Login,
    },
    {
      name: 'home',
      path:'/home',
      component:Home,
    },
    {
      name: 'ask',
      path: '/ask',
      component: BBSAsk,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'registrar',
      path: '/registrar',
      component: Register,
    },
  ]
})

export default router

