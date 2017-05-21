<template>
  <div>
    <beautBar :beaut="beaut"></beautBar>
  </div>
</template>

<script>
  import '@/static/css/reset.css'
  import beautBar from '@/view/Hello/view3/beauty/index.vue'

  export default {
    name: 'beaut',
    data () {
    return {
      beaut: []
    }
  },
  components: {
    beautBar
  },
  created () {
    this.getbeauty()
  },
  methods:{
    getbeauty () {
      this.$http.get('/api/beautyData').then(function (beaut) {
        this.beaut = beaut.data.data[0]
        console.log(this.beaut)
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
