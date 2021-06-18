<template>

<div class="product">
  <div class="container">
  <h2 class="text-center mb-3">Product - shoes</h2>
     <div class="row">
          <div class="col-sm-6 col-md-3 text-center mb-3" v-for="(item,i) in pdata" :key="i">
            <img :src="pdata[i].image" alt="" class="w-100 mb-2">
            <p class="data-title">{{pdata[i].title}}</p>
            <p class="font-italic">{{pdata[i].price}} KRW</p>
          </div>
        </div>
  </div>
</div>

</template>

<script>
export default {
    name:'product',
    props:['pdata']
}
</script>

<style>
.new{
  color:red;
}
.data-title{
  cursor: pointer;
  transition:.3s;
}
.data-title:hover{
  font-weight: bold;
}
.product img{
  transition:.7s;
}
.product img:hover{
  opacity:0.7;
}
</style>