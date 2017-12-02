import Vue from "vue";

import App from "./App.vue"
import router from "./router"
//设置是否是生产环境  否   不是
Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)

new Vue({
  el:"#app",
  router,
  template:"<App />",
  components:{
    App
  }
})

/*
* mainjs  --
* 引入根组件、路由 全局性的进行注入使用
* 轮播图控件 全局公用的也可在这里引入使用   也可以在根组件进行引入注入
* */

