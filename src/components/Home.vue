<template>
    <div>
      <Header>首页</Header>
      <div class="content">
        <Loading v-if="loading"></Loading>
        <template v-else>
          <Swiper :swiperSlides="sliders"></Swiper>
          <div class="container">
            <h3>热门图书</h3>
            <ul>
              <li v-for="hot in hotBooks">
                <img :src="hot.bookCover">
                <b>{{hot.bookName}}</b>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
</template>
<script>
  import Header from '../base/Header.vue';
  import Swiper from '../base/Swiper.vue';
  import {getAll} from '../api';
  import Loading from "../base/Loading.vue"
    export default {
      created(){
        this.getData();
      },
      data() {
        return {sliders: [],hotBooks:[],loading:true}
      },
      methods: {
        async getData(){
          let [sliders,hotBooks] = await getAll();// [sliders,books]
          this.sliders = sliders;
          this.hotBooks = hotBooks;
          // .... 轮播图和热门图书已经获取完成
          this.loading = false;
        }
      },
      computed: {},
      components: {
        Header,
        Swiper,
        Loading
      }
    }
</script>
<style scoped lang="less">
  h3{color: #999;padding: 5px 0}
  .container{
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img{width: 100%}
      }
    }
  }
</style>
