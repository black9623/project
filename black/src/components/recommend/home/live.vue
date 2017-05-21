<template>
  <div>
    <banneBar :banne="banne"></banneBar>
    <homedataBar :homedata="homedata"></homedataBar>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import homedataBar from '@/view/Hello/view2/title/index.vue'
import banneBar from '@/view/Hello/view2/conten/index.vue'

  export default {
    name: 'live',
    data () {
    return {
      homedata: [],
      banne: []
    }
  },
  components: {
    homedataBar,
    banneBar
  },
  created () {
   this.getcon()
   this.getimg()
  },
  methods:{
    getcon () {
      this.$http.get('/api/homeData').then(function (home) {
        this.homedata = home.data.data[0];
      })
    },
    getimg () {
      this.$http.get('/api/banneData').then(function (banne) {
        this.banne = banne.data.data
      })
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
