<template>
  <div>
    <div class="m-box ad6" v-if=" eini2.length != 0">
      <div class="ov-5">
        <img :src="eini2.Records[0].PictureWebp" style="width:100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'einiBar2',
    data () {
    return {
    }
  },
  props: ['eini2']
  }
</script>


