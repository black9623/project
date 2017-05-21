<template>
  <div class="cls-img">
      <img :src="pict">
  </div>
</template>

<script>
  export default {
    name: 'class',
    data () {
    return {
      }
    },
  props: ['pict']
  }
</script>

<style lang="less">
  .cls-img{
    width: 100%;
    img{
      width: 100%;
      display: block;
    }
  }
</style>
