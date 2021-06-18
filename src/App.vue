<template>
  <top />


<router-view v-bind:pdata="pdata"></router-view>

  <bottom />
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'

export default {
  name:'app',
  components:{
    top:header,
    bottom:footer,
  },
  data(){
    return{
      pdata:pdata,
    }
  }
}
</script>

<style>

</style>