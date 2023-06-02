import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue')
  },
  {
    path: '/shop/:name',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProduct.vue')
  },
  {
    path: '/press',
    name: 'press',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProduct.vue')
  },
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition){
    return {top:0}
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
