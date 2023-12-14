import { createRouter, createWebHistory } from 'vue-router'
import indexvue from '../AuthPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexvue
    },
    {
      path: '/status',
      name: 'status',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not found",
      component:() => import('../AuthPage/NotFound.vue')
    },
  ]
})

export default router
