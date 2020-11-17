
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'login',
    component:()=>import('./../views/login/login')
  },{
    path:'/login',
    name:'login',
    component:()=>import('./../views/login/login')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('./../views/login/register')
  },
  {
    path:'/personal',
    name:'personal',
    component:()=>import ('./../components/men/personal')
  },
  {
    path:'/set',
    name:'set',
    component:()=>import ('./../components/men/set')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import ('./../components/home/home.vue'),
    children:[{
      path:'/',
      redirect:'inland',
      component:()=>import ('./../components/home/inland.vue')
    },{
      path:'inland',
      name:'inland',
      component:()=>import ('./../components/home/inland.vue')
    },{
      path:'overseas',
      name:'overseas',
      component:()=>import ('./../components/home/overseas.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
