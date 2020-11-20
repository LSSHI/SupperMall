<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content"
            :probe-type-number="3"
            :is-pull-upLoad="true"
            @scrollPosition="scrollPosition"
            @pullingUp="pullingUp"
            ref="scroll">
      <home-swiper :banner="banner"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :tabData="['流行','新款','精品']"
                   @tabClick="tabClick"/>
      <goods-list :goodsData="showGoods"/>
    <ul>
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
      <li>分类列表21</li>
      <li>分类列表22</li>
      <li>分类列表23</li>
      <li>分类列表24</li>
      <li>分类列表25</li>
      <li>分类列表26</li>
      <li>分类列表27</li>
      <li>分类列表28</li>
      <li>分类列表29</li>
      <li>分类列表30</li>
      <li>分类列表31</li>
      <li>分类列表32</li>
      <li>分类列表33</li>
      <li>分类列表34</li>
      <li>分类列表35</li>
      <li>分类列表36</li>
      <li>分类列表37</li>
      <li>分类列表38</li>
      <li>分类列表39</li>
      <li>分类列表40</li>
      <li>分类列表41</li>
      <li>分类列表42</li>
      <li>分类列表43</li>
      <li>分类列表44</li>
      <li>分类列表45</li>
      <li>分类列表46</li>
      <li>分类列表47</li>
      <li>分类列表48</li>
      <li>分类列表49</li>
      <li>分类列表50</li>
      <li>分类列表51</li>
      <li>分类列表52</li>
      <li>分类列表53</li>
      <li>分类列表54</li>
      <li>分类列表55</li>
      <li>分类列表56</li>
      <li>分类列表57</li>
      <li>分类列表58</li>
      <li>分类列表59</li>
      <li>分类列表60</li>
      <li>分类列表61</li>
      <li>分类列表62</li>
      <li>分类列表63</li>
      <li>分类列表64</li>
      <li>分类列表65</li>
      <li>分类列表66</li>
      <li>分类列表67</li>
      <li>分类列表68</li>
      <li>分类列表69</li>
      <li>分类列表70</li>
      <li>分类列表71</li>
      <li>分类列表72</li>
      <li>分类列表73</li>
      <li>分类列表74</li>
      <li>分类列表75</li>
      <li>分类列表76</li>
      <li>分类列表77</li>
      <li>分类列表78</li>
      <li>分类列表79</li>
      <li>分类列表80</li>
      <li>分类列表81</li>
      <li>分类列表82</li>
      <li>分类列表83</li>
      <li>分类列表84</li>
      <li>分类列表85</li>
      <li>分类列表86</li>
      <li>分类列表87</li>
      <li>分类列表88</li>
      <li>分类列表89</li>
      <li>分类列表90</li>
      <li>分类列表91</li>
      <li>分类列表92</li>
      <li>分类列表93</li>
      <li>分类列表94</li>
      <li>分类列表95</li>
      <li>分类列表96</li>
      <li>分类列表97</li>
      <li>分类列表98</li>
      <li>分类列表99</li>
      <li>分类列表100</li>
    </ul>
    </scroll>
    <home-top-img class="home-top-img"
                  v-show="isShow" @click.native="backTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";


  import homeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import HomeTopImg from "./childComps/HomeTopImg";


  import {getMutiData,getGoodsData} from 'network/home'

  export default {
    name: "Home",
    components: {
      HomeTopImg,
      FeatureView,
      NavBar,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      HomeTopImg
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
        isShow: false
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

          //结束上拉加载更多
          this.$refs.scroll.scrollFinish();
        });
      },
      scrollPosition(position) {
        this.isShow = (-position.y) > 1000;
      },
      backTop() {
        this.$refs.scroll.backTop(0, 0);
      },
      pullingUp() {
        this.getGoodsData(this.currentType);
        console.log("上拉加载更多");
        // this.$refs.scroll.scrollFinish();
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
    position: relative;
    /*padding-top: 44px;*/
    height: 100vh;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;

    overflow: hidden;
  }
  .home-top-img{
    position: absolute;
    right: 8px;
    bottom: 52px;
  }
</style>
