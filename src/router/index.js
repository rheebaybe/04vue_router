import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/home.vue'
import company from '../components/company.vue'
import product from '../components/product.vue'
import qa from '../components/qa.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/company',
    name: 'company',
    component: company
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/qa',
    name: 'qa',
    component: qa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
