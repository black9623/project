<template>
  <div>
    <div class="product" v-if="banne.length != 0">
      <img :src="banne[0].Records[0].PictureWebp">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'banneBar',
    data () {
    return {
    }
  },
  props: ['banne']
  }
</script>

<style>
  .product{
    width: 100%;
  }
  .product img{
    width: 100%;
    display: block;
  }
</style>


