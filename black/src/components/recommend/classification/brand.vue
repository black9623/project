<template>
  <div style="background: #ffffff">
    <div class="barn-cont" v-if="barlist.length !=0">
      <dl v-for="item in barlist[0].Records">
        <dt><img :src="item.PictureWebp"></dt>
        <dd>
          <p style="margin-top: 5px">{{item.SlideName}}</p>
          <p class="barn-col">{{item.Description}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'class',
    data () {
    return {
      barlist: []
    }
  },
  components: {

  },
  created () {
    this.getbrand()
  },
  methods:{
    getbrand() {
      this.$http.get('/api/brandList').then(function (brdata) {
        this.barlist = brdata.data.data
      })
    }
  }
  }
</script>

<style lang="less">
  .barn-cont{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 33%;
      margin-bottom: 5px;
      dt{
        width: 100%;
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }
  .barn-col{
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 25px;
    color: #999;
  }
</style>
