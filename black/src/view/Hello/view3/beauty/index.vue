<template>
  <div>
    <div class="m-box da-title">{{beaut.Title}}</div>
    <div class="lists">
      <div class="li" v-for="items in beaut.Products">
        <a>
          <img :src="items.PicturesWebp" lazy="loaded">
          <p class="name">{{items.Subject}}</p>
          <p class="price">￥{{items.FinalPrice}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'beautBar',
    data () {
    return {
    }
  },
  props: ['beaut']
  }
</script>

<style lang="less">
  .da-title{
    font-size: 12px;
    line-height: 25px;
  }
  .lists{
    display: flex;
    flex-wrap: wrap;
  }
  .lists .li{
    width: 46%;
    float: left;
    margin: 5px;
    background: #fff;
  a{
    width: 100%;
    display: block;
    margin: 0 auto;
  img{
    width: 100%;
  }
  .name{
    margin-top: 10px;
  }
  .price{
    margin-top: 10px;
    padding-bottom: 5px;
  }
  p{
    padding: 0 .33rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
  }
  }
</style>
