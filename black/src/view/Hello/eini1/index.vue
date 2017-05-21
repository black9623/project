<template>
  <div>
    <div class="m-box ad6" v-if=" eini1.length != 0">
      <div class="ov-5">
        <img :src="eini1.Records[0].PictureWebp" style="width:100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'einiBar1',
    data () {
    return {
    }
  },
  props: ['eini1']
  }
</script>


