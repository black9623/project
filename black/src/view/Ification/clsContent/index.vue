<template>
  <div>
    <div class="cls-con">
      <p v-for="item in slideName">{{item.SlideName}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'class',
    data () {
    return {
    }
  },
  props: ['slideName']
  }
</script>

<style lang="less">
  .cls-con{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    width: 100%;
    p{
      padding: 2px 10px;
      line-height: 25px;
      border: 1px solid #e5e5e5;
      margin: 10px 6px 0 6px;
    }
  }
</style>
