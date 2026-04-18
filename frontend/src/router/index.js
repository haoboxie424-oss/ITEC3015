import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // This will be your welcome/landing page
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // This is where Member 2 will build the charts
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      // This is where Member 1 will build the movie table
      component: () => import('../views/ManageMoviesView.vue')
    }
  ],
})

export default router