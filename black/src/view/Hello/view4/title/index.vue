<template>
  <div>
    <div class="product" v-if="beconList.length != 0">
      <img :src="beconList[0].Records[0].PictureWebp">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'beconcBar',
    data () {
    return {
    }
  },
  props: ['beconList']
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


