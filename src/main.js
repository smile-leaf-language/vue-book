import Vue from "vue";

import App from "./App.vue"
import router from "./router"
//设置是否是生产环境  否   不是
Vue.config.productionTip = false;

//轮播图使用
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
* mainjs  --  vue根实例
* 引入根组件、路由 全局性的在根实例进行注入使用
* 轮播图控件 全局公用的第三方控件插件可在这里引入使用 推荐在入口文件  也可以在根组件进行引入使用不太推荐因为根组件主要处理组件性的  这样代码业务清晰些
* 一般情况下import Vue from "vue"只是runtime部分的vue 不能编译模版，但是此引入的Vue在alias配置成了runtime+compiler
* App引入或者声明，然后注册使用
* */

