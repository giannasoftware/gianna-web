import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/CartView'
import { document } from 'postcss'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      // enterClass: 'animate__animated animate__fadeInLeft',
      // leaveClass: 'animate__animated animate_fadeOutRight',
      title: 'Gianna - Homepage'
    }
  },
  {
    path: '/history',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/shop',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue'),
    props: true,
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/shop/:name/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleProduct.vue'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
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
    component: Cart,
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight',
      title: 'Homepage title'
    }
  },
  {
    path:'/checkout',
    name: 'checkout',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Checkout'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/press',
    name: 'press',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogPosts'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/account/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/account/create-account',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  }, 
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqViews'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  }, {
    path: '/faq/:title',
    name: 'faq',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleFaq'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/account/forget-password',
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgetPassword'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  },
  {
    path: '/:patMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/PageNotFound'),
    meta:{
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate_fadeOutRight'
    }
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition){
    return {top:0}
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from)=>{
  document.title = to.meta.title
})

export default router
