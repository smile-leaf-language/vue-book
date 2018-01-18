import Vue from "vue";
import VueRouter from "vue-router";

//页面组件
import Home from "../components/Home.vue";
import List from "../components/List.vue"
import Detail from "../components/Detail.vue"
import Add from "../components/Add.vue"
import Collect from "../components/Collect.vue"

Vue.use(VueRouter);

//路由映射
let routes = [
  {path:"/",redirect:"/home"},
  {path:"/home",component:Home,meta:{keepAlive:true,title:'首页'}},
  {path:"/list",component:List},
  {path:'/detail/:bid',component:Detail,name:"detail"},//后面需要设计动态路由    待定
  {path:"/add",component:Add},
  {path:"/Collect",component:Collect},
  {path:"*",redirect:"/home"}
]
//new VueRouter

export default new VueRouter({
  routes
})
//routes：routes 简写成  routes


