<template>
  <div style="background: #ffffff">
    <div class="cls-title">
      <router-link to="/Chassification/clifIndex" class="p-title" active-class="on">分类</router-link>
      <router-link to="/Chassification/brand" class="p-title" active-class="on">品牌</router-link>
    </div>
    <div>
      <router-view></router-view>
      <footerBar></footerBar>
    </div>
  </div>

</template>

<script>
import '@/static/css/reset.css'
import footerBar from '@/components/Footer/footer.vue'

export default {
  name: 'class',
  data () {
  return {
  }
  },
  components: {
    footerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .cls-title{
    width: 40%;
    display: -webkit-flex;
    margin: -60px auto 0;
  .p-title{
    flex: 1;
    line-height: 35px;
    position: relative;
    color: #000;
  &.on:after {
     content: '';
     display: block;
     width: 80%;
     height: 3px;
     position: absolute;
     bottom: 0;
     left: 10%;
     background: #000000;
   }
  }
  }
</style>

