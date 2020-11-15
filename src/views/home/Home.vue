<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import homeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getMutiData} from 'network/home'

  export default {
    name: "Home",
    components:{
      NavBar,
      homeSwiper,
      RecommendView
    },
    data(){
      return{
        banner: [],
        recommend: []
      }
    },
    created() {
      getMutiData().then(res=>{
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
.home-nav{
  color: #f6f6f6;
  background-color:var(--color-tint)
}
</style>
