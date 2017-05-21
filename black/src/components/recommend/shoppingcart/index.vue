<template>
  <div>
    <footerBar></footerBar>
  </div>
</template>

<script>
  import footerBar from '@/components/Footer/footer.vue'

  export default {
    name: 'shopping',
    data () {
    return {
      data: []
    }
  },
  components: {
      footerBar
  },
  created () {
    this.getPage();
  },
  methods:{
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
