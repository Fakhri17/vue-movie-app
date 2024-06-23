import { createRouter, createWebHistory } from 'vue-router'
// import { IStaticMethods } from "preline/preline";
import HomeView from '../views/HomeView.vue'



// Define the IStaticMethods type from preline/preline for window
/**
 * @typedef {import("preline/preline").IStaticMethods} IStaticMethods
 */

// Declare the global window interface for IStaticMethods
/** @type {IStaticMethods} */
window.HSStaticMethods = window.HSStaticMethods || {};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router
