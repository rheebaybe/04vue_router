<template>
<swiper :pagination="true" class="mySwiper mb-3">

  <swiper-slide><img src="../../public/image/001.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="../../public/image/002.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="../../public/image/003.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="../../public/image/004.jpg" alt=""></swiper-slide>
 
 
  </swiper>

  <div class="best">
    <div class="container">
      <h2>best product</h2>
      <p>lorem</p>
      <div class="row">
        <div class="col-sm-6 col-md-3" v-for="(item,i) in 4" :key="i">
          <img :src="pdata[i].image" alt="" class="w-100">
          {{pdata[i].title}}
        </div>
      </div>
  <router-link to="/product" class="btn btn-primary m-auto d-block" style="width:100px">more</router-link>
    </div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default {
  props:['pdata'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }
  
}
</script>

<style>

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.best h2{
  text-align: center;
}
.best h2:after{
  content:"";
  width: 30px;
  height: 1px;
  display: block;
  background:#333;
  margin:10px auto;
}
</style>