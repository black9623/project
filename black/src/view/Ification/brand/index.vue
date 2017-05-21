<template>
  <div>
    <div v-for="item in cation">
      <cationBar v-if="item.Channel.Type == 'Col1ImageOnly'" :pict="item.Records[0].PictureWebp"></cationBar>
      <clsConBar v-else-if="item.Channel.Type == 'ColNWithTitleAndBorder'"  :slideName="item.Records"></clsConBar>
    </div>
  </div>
</template>

<script>
  import '@/static/css/reset.css'
  import cationBar from '@/view/Ification/clsTitle/index.vue'
  import clsConBar from '@/view/Ification/clsContent/index.vue'

  export default {
    name: 'class',
    data () {
    return {
      cation: [],
      slideName:[]
    }
  },
  components: {
    cationBar,
      clsConBar
  },
  created () {
    this.getcat()
  },
  methods:{
    getcat () {
      this.$http.get('/api/classList').then(function (cllist) {
        this.cation = cllist.data.data
      })
    }
  }
  }
</script>

