<template>
  <top />

<!-- <div v-if="pView==true">
  <div class="pPop text-center">
    <img v-bind:src="pdata[pNum].image" alt="" class="w-100 mb-3">
    <p class="text-center">{{pdata[pNum].title}}</p>
    <button class="btn btn-primary" @click="pView=false">close</button>
  </div>
  </div> -->

  <transition name="fade">
    <pPop :pdata="pdata" :pView="pView" :pNum="pNum" @pClose="pView=false;pNum=$event"/>
  </transition>


<router-view 
v-bind:pdata="pdata"
@pOpen="pView=true;pNum=$event"

></router-view>

  <bottom />
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'
import pPop from './components/pPop.vue'

export default {
  name:'app',
  components:{
    top:header,
    bottom:footer,
    pPop:pPop,
  },
  data(){
    return{
      pdata:pdata,
      pView:false,
      pNum:0,
    }
  }
}
</script>

<style>
.pPop{
  position:fixed;
  z-index: 10;
  background: #fff;
  width:80%;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 10px;
  /* padding:20px; */
  overflow: hidden;
  padding-bottom: 20px;
}
.fade-enter-from{
 
}
.fade-enter-from:active{

}
.fade-enter-to{

}
.fade-leave-from{
  
}
.fade-leave-from:active{

}
.fade-leave-to{

}
@media screen and (min-width:900px){
  .pPop{
    width: 400px;
  }
}

</style>