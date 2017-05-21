<template>
  <div class="image6">
    <a v-for="item in eicon1" style="flex: 1; width: 90px">
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
    name: 'eiconBar1',
    data () {
    return {
    }
  },
  props: ['eicon1']
  }
</script>

