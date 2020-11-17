<template>
    <div class="tab-control">
      <div v-for="(item,index) in tabData" class="tab-control-item"
           :class="{active:index===currentIndex}" @click="tabClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
      data() {
          return{
            currentIndex: 0,
          }
      },
      props:{
        tabData:{
            type: Array,
            default(){
              return [];
            }
          }
      },
      methods:{
        tabClick(index) {
          this.currentIndex = index;
          this.$emit('tabClick', index)
        }
      },
    }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 44px;
    height: 44px;
    font-size: 14px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .active span{
    border-bottom: 2px solid #ff5777;
  }
  .tab-control-item span{
    padding: 5px;
  }

</style>
