<template>
  <div>
    <headerBar></headerBar>
    <navBar :data="data"></navBar>
    <router-view></router-view>
    <footerBar></footerBar>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import headerBar from '@/components/Header/header.vue'
import footerBar from '@/components/Footer/footer.vue'
import navBar from '@/view/Hello/nav/index.vue'

export default {
  name: 'hello',
  data () {
    return {
      data: []
    }
  },
  components: {
    headerBar,
    navBar,
    footerBar
  },
  created () {
    this.getData();
    this.getPage();
  },
  methods:{
    getData () {
      this.$http.get('/api/navList').then(function(opt){
        this.data = opt.data.data
      })
    },
    getPage () {
      var pageId = this.$route.params.id;
//      console.log(pageId)
    }
  },
  watch: {
    '$route': 'getPage'
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
