<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control class="tab-control"
                 :tabData="['流行','新款','精品']"
                 @tabClick="tabClick"/>
    <good-list :goodsData="showGoods"/>

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


  import {getMutiData,getGoodsData} from 'network/home'

  export default {
    name: "Home",
    components: {
      FeatureView,
      NavBar,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {
            page: 0, list: []
          },
          'new': {
            page: 0, list: []
          },
          'sell': {
            page: 0, list: []
          }
        },
        currentType: 'pop',
      }
    },
    created() {
      //获取轮播数据
      this.getMutiData();
      //获取流行，新品，精品
      this.getGoodsData('pop');
      this.getGoodsData('new');
      this.getGoodsData('sell');
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    methods: {

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      getMutiData() {
        getMutiData().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getGoodsData(type) {
        let page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
          console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = this.goods[type].page + 1;
        });
      }
    }
  };
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
    z-index: 9;
  }
</style>
