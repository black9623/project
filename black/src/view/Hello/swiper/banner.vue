<template>
  <div>
    <div class="slide-ad">
      <div class="swiper_box" style="height: 168px; margin-top: 0">
        <div class="swiper horizontal">
          <div class="swiper-wrap">
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FgTZkl4Uf0vO9aqZuuPocjoU44qT" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FgTZkl4Uf0vO9aqZuuPocjoU44qT" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FtdscwYUT0DfG_86we2weSJGIhe1" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/Fr982kxY0yMPrIhu4FLFe5Pr11uB" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/Fs92pQSI01cBZTrpSHDcUlehC9ee" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FokeSh6rE61yPWmg-R7jLXtLXizJ" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/Fp1E1XBL80qBCLdSHwcmelnDALTH" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FlMjoZI2DHhNfpXy8LDmrGZOa4L0" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/Fid2OPiCTcSuzVyRH0t5YXI06xay" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FkPxTOKwaHskLx22n9zGzDn1jTZ9" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FgTZkl4Uf0vO9aqZuuPocjoU44qT" class="swiper-img" style="height: 200px;">
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="//img.haimi.com/FtdscwYUT0DfG_86we2weSJGIhe1" class="swiper-img" style="height: 168px;">
              </a>
            </div>
          </div>
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
            <span class="swiper-pagination-bullet active"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerBar from '@/static/css/swiper.css'
import Swiper from '@/lib/swiper/js/swiper.min.js'
import '@/lib/swiper/css/swiper.css'

export default {
  name: 'SwiperBar',
  props: ['sliderList'],
  data () {
    return {}
  },
  mounted () {
  console.log(Swiper)
  var
}
}
</script>

<style>
  .slide-ad{
    width: 320px
  }
  .swiper_box{
    width: 320px;
    background: #fff;
    position: relative
  }
</style>
