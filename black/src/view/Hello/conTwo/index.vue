<t<template>
  <div class="m-box ad2">
    <a v-for="item in imag1">
      <img :src="item.PictureWebp" lazy="loaded" style="width: 100%">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'contetBar',
    data () {
    return {
    }
  },
  props: ['imag1']
  }
</script>

<style>
  .ad2{
    width: 100%;
  }
  .ad2 a{
    width: 100%;
    display: block;
    margin-top: 10px;
  }
  .ad2 a img{
    width: 100%;
  }
</style>

