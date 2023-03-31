import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/pages/search/index'),
  },
]

const router  = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})


export default router
