<template>
  <div>
    <becontBar :beconList="beconList"></becontBar>
    <beconcBar :beconData="beconData"></beconcBar>
  </div>
</template>

<script>
  import '@/static/css/reset.css'
  import becontBar from '@/view/Hello/view4/title/index.vue'
  import beconcBar from '@/view/Hello/view4/conten/index.vue'

  export default {
    name: 'nurse',
    data () {
    return {
      beconList: [],
      beconData: []
    }
  },
  components: {
    becontBar,
    beconcBar
  },
  created () {
    this.getT()
    this.getC()
  },
  methods:{
   getT() {
      this.$http.get('/api/nurseTData').then(function (becon) {
        this.beconList = becon.data.data
      })
    },
    getC() {
      this.$http.get('/api/nurseCData').then(function (beconC) {
        this.beconData = beconC.data.data[0]
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
