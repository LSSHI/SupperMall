<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control class="tab-control" :tabData="['流行','新款','精品']"/>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import homeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";



  import {getMutiData} from 'network/home'

  export default {
    name: "Home",
    components:{
      FeatureView,
      NavBar,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl
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
.home-nav {
  color: #f6f6f6;
  background-color: var(--color-tint);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}
  #home{
    padding-top: 44px;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
