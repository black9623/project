<template>
  <div class="m-box nav-box">
    <div class="nav-list">
      <router-link  v-for="item in data" :to="item.Link+'/'+item.NavID" class="nav-item" active-class="on">{{item.Title}}</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navBar',
    data () {
    return {}
  },
  props: ['data']
  }
</script>

<style lang="less">
  .nav-box{
    width: 100%;
    height: .35rem;
    overflow-x: auto;
    margin-top: -15px;
    background: #ffffff;
    .nav-list{
      width: 100%;
      height: 100%;
      display: -webkit-box;
      .nav-item{
        color: #000;
        display: block;
        padding: 0 .1rem;
        line-height: .35rem;
        position: relative;
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
  }

</style>
