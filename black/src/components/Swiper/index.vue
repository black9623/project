<template>
  <div>
    <div class="swiper_box" style="width: 100%; margin-top: 0">
      <div class="swiper-container horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swipe.Records">
            <a>
              <img :src="item.PictureWebp" class="swiper-img" style="width: 100%;display: block">
            </a>
          </div>
        </div>
        <div class="swiper-pagination">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/lib/Swiper/css/swiper.css'
import Swiper from '@/lib/Swiper/js/swiper.min.js'

  export default {
    name: 'SwiperBar',
    props: ['swipe'],
    data () {
    return {}
  },
  mounted () {
//    console.log(Swiper)
   this.swiper = new Swiper('.swiper-container',{
      autoplay: 800,
      pagination : '.swiper-pagination'
    })
  },
  updated () {
    this.swiper.update()
  }
  }
</script>

<style>
  .swiper_box{
    width: 100%;
    background: #fff;
    position: relative
  }
</style>
