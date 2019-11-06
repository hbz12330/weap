import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from 
"./components/HelloWorld.vue"
import home from "./components/tabbar/home.vue"
import goodd from "./components/goods/goodlist.vue"
import goodinfo from "./components/goods/goodinfo.vue"
import login from "./components/home/login.vue"
import regst from "./components/home/regst.vue"
import shopcart from "./components/home/shopCart.vue"
import me from "./components/home/geren.vue"
import rcm from './components/goods/recommend.vue'
import seac from './components/search/search.vue'
import order from './components/home/order.vue'
Vue.use(Router)
export default new Router({
  routes: [
   {path:'/',redirect:"/home"},
   {path:"/home",component:home},
   {path:"/goodlist",component:goodd},
   {path:"/goodinfo",component:goodinfo},
   {path:"/login",component:login},
   {path:"/regst",component:regst},
  {path:"/shopcart",component:shopcart},
  {path:"/me",component:me},
  {path:"/rcm",component:rcm},
  {path:"/seac",component:seac},
  {path:"/order",component:order}
  ]
})
