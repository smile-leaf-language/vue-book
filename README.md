## 项目支持less
## icon图标
- 添加
  icon-add
- 后退
  icon-fanhui
- 首页
  icon-shouye
- 列表页
  icon-liebiaoyemian
- 收 藏
  icon-shoucang

## 服务端跨域
```
res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
```


## 需要完成的接口
- /hot GET 获取热门图书
- /book GET 获取所有图书 返回数组
- /book?id=x GET 获取某一本图书 返回对象
- /book?id=x DELETE 删除某一本图书 返回空对象
- /book?id=x reqbody(修改的内容) PUT 修改某一本图书 返回修改后的那一项
- /book reqbody(添加的内容) POST 增加图书 返回增加后的那一项


## 轮播图README
```
//import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)

//data example
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
```

