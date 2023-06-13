import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/CartView'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue'),
    props: true
  },
  {
    path: '/shop/:name',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProduct.vue'),
    // beforeEnter(to){
    //   const name = parseInt(to.params.int)
    //   const localShopItems = shopItemsJSON.items;
    //   const exist = localShopItems.some(item => item.name === name)

    //   if(!exist) return {name: 'not-found', params: { pathMatch:to.path.substring(1).split('/')}, query: to.query, hash: to.has}
    // }
  },
  {
    path:'/shop/cart',
    name: 'cart',
    component: Cart
  },
  {
    path:'/checkout',
    name: 'checkout',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Checkout')
  },
  {
    path: '/press',
    name: 'press',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogPosts')
  },
  {
    path: '/account/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
  {
    path: '/account/create-account',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp')
  },
  {
    path: '/account/forget-password',
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgetPassword')
  },
  {
    path: '/:patMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/PageNotFound')
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition){
    return {top:0}
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
