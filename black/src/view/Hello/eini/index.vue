<template>
  <div>
    <div class="m-box ad6" v-if=" eini.length != 0">
      <div class="ov-5">
        <img :src="eini.Records[0].PictureWebp" style="width:100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'einiBar',
    data () {
    return {
    }
  },
  props: ['eini']
  }
</script>


