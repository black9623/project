<template>
  <div>
    <div class="m-box ad5">
      <a v-for="item in list.Records">
        <img :src="item.PictureWebp" lazy="loaded">
        <div class="desc5">
          <p class="title">{{item.SlideName}}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeBar',
    data () {
    return {
    }
  },
  props: ['list']
  }
</script>
<style>
  .ad5{
    width: 100%;
    display: -webkit-flex;
    background: #ffffff;
  }
  .ad5 a{
    width: 25%;
    flex: 1;
  }
  .ad5 a img{
    width: 100%;
  }
  .ad5 .title{
    line-height: 22px;
  }
</style>


