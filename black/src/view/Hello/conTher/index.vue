<template>
  <div class="m-box box1" v-if = 'imag2.length != 0'>
    <div class="box-title">{{imag2.Channel.Name}}</div>
    <div class="aD9">
      <div class="left">
        <img :src="imag2.Records[0].PictureWebp" lazy="loaded">
        <img :src="imag2.Records[1].PictureWebp" lazy="loaded">
      </div>
      <div class="right">
        <img :src="imag2.Records[2].PictureWebp" lazy="loaded">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contentBar2',
    data () {
    return {
    }
  },
  props: ['imag2']
  }
</script>

<style>
  .box1{
    width: 100%;
    height: auto;
  }
  .box-title{
    width: 100%;
    height: 100%;
    font-size: 12px;
    line-height: 35px;
    border-bottom: 1px solid #eeeeee;
    background: #ffffff;
  }
  .aD9{
    width: 100%;
    display: block;
    overflow: hidden;
  }
  .aD9 div{
    flex: 1;
    float: left;
  }
  .aD9 .left{
    width: 52%;
  }
  .aD9 .right{
    width: 48%;
  }
  .aD9 img{
    width: 100%;
    display: block;
  }
</style>
