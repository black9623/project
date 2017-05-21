<template>
  <div class="image6">
    <a v-for="item in eicon" style="flex: 1; width: 90px">
      <img :src="item.PictureWebp" style="width: 100%">
      <div class="desc6">
        <p class="title">{{item.SlideName}}</p>
        <p class="c_999">{{item.Description}}</p>
      </div>
    </a>
  </div>

</template>

<script>
  export default {
    name: 'eiconBar',
    data () {
    return {
    }
  },
  props: ['eicon']
  }
</script>


<style>
  .image6{
    display: -webkit-box;
    background: #fff;
    overflow-y: scroll;
    margin-top: -3px;
    padding-bottom: 5px;
  }
  .image6 a,.image6 img{
    display: block;
    width: 90px;
  }
</style>
