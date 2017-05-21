<template>
  <div class="image6">
    <a v-for="item in eicon2" style="flex: 1; width: 90px">
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
    name: 'eiconBar2',
    data () {
    return {
    }
  },
  props: ['eicon2']
  }
</script>

