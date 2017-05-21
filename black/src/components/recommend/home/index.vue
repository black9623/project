<template>
  <div>
    <SwiperBar :swipe="swipe"></SwiperBar>
    <HomeBar :list="list"></HomeBar>
    <contetBar :imag="imag"></contetBar>
    <contentBar1 :imag1="imag1"></contentBar1>
    <contentBar2 :imag2="imag2"></contentBar2>
    <tjBar :tjhw="tjhw"></tjBar>
    <einiBar :eini="eini"></einiBar>
    <eiconBar :eicon="eicon"></eiconBar>
    <einiBar1 :eini1="eini1"></einiBar1>
    <eiconBar1 :eicon1="eicon1"></eiconBar1>
    <einiBar2 :eini2="eini2"></einiBar2>
    <eiconBar2 :eicon2="eicon2"></eiconBar2>
    <HomeconBar v-for="item in Homecon" :mainD="item"></HomeconBar>
  </div>
</template>

<script>
  import HomeBar from '@/view/Hello/Home/index.vue'
  import contetBar from '@/view/Hello/conOne/index.vue'
  import contentBar1 from '@/view/Hello/conTwo/index.vue'
  import contentBar2 from '@/view/Hello/conTher/index.vue'
  import SwiperBar from '@/components/Swiper/index.vue'
  import tjBar from '@/view/Hello/tuijian/index.vue'
  import einiBar from '@/view/Hello/eini/index.vue'
  import eiconBar from '@/view/Hello/eicon/index.vue'
  import einiBar1 from '@/view/Hello/eini1/index.vue'
  import eiconBar1 from '@/view/Hello/eicon1/index.vue'
  import einiBar2 from '@/view/Hello/eini2/index.vue'
  import eiconBar2 from '@/view/Hello/eicon2/index.vue'
  import HomeconBar from '@/view/Hello/Homecon/index.vue'

  export default {
    name: 'hello',
    data () {
    return {
      list: [],
      imag: [],
      imag1: [],
      imag2: [],
      swipe: [],
      tjhw: [],
      eini: [],
      eicon: [],
      eini1: [],
      eicon1: [],
      eini2: [],
      eicon2: [],
      Homecon: []
    }
  },
  components: {
      HomeBar,
      contetBar,
      contentBar1,
      contentBar2,
      SwiperBar,
      tjBar,
      einiBar,
      eiconBar,
      einiBar1,
      eiconBar1,
      einiBar2,
      eiconBar2,
      HomeconBar
  },
  created () {
    this.getNav();
    this.getcon()
  },
  methods:{
    getNav () {
      this.$http.get('/api/titleList').then(function(strs){
        this.swipe = strs.data.data[0];
        this.list = strs.data.data[1];
        this.imag = strs.data.data[2].Records;
        this.imag1 = strs.data.data[3].Records;
        this.imag2 = strs.data.data[4];
        this.tjhw = strs.data.data[5];
        this.eini = strs.data.data[6];
        this.eicon = strs.data.data[7].Records;
        this.eini1 = strs.data.data[8];
        this.eicon1 = strs.data.data[9].Records;
        this.eini2 = strs.data.data[10];
        this.eicon2 = strs.data.data[11].Records;
      })
    },
    getcon () {
      this.$http.get('/api/conList').then(function (txt) {
        this.Homecon = txt.data.data
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
