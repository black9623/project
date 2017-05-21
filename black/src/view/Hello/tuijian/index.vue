<template>
  <div class="m-box AD3" v-if=' tjhw.length !=0'>
    <div class="h1-titel cle">{{tjhw.Channel.Name}}</div>
    <div class="image3">
      <a class="fl" v-for="item in tjhw.Records"><img :src="item.PictureWebp" lazy="loaded" style="height: 102px"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tjBar',
    data () {
    return {
    }
  },
  props: ['tjhw']
  }
</script>

<style>
  .AD3{
    background: #ffffff;
  }
  .h1-titel{
    line-height: 35px;
    border-bottom: 1px solid #eeeeee;
  }
  .image3{
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .image3 a{
    display: block;
    width: 50%;
  }
  .image3 a img{
    width: 100%;
  }
</style>
