<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
        name: "Scroll",
      data() {
          return {
            bScroll: null,
          }
      },
      props:{
        probeTypeNumber: {
          type: Number,
          default: 0
        },
        isPullUpLoad:{
          type: Boolean,
          default: true
        }
      },
      methods:{
        backTop(x,y,time=300) {
          this.bScroll.scrollTo(x, y, time);
        },
        scrollFinish() {
          this.bScroll.finishPullUp();
        }
      },
      mounted() {
        this.bScroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeTypeNumber,
          pullUpLoad: this.isPullUpLoad
        }),
          this.bScroll.on('scroll', (position) => {
            this.$emit('scrollPosition', position);
          });
        this.bScroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
        })
      }
    }
</script>

<style scoped>

</style>
