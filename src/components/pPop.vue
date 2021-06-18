<template>
  <div v-if="pView==true">
  <div class="pPop text-center">
    <img v-bind:src="pdata[pNum].image" alt="" class="w-100 mb-3">
    <p class="text-center">{{pdata[pNum].title}}</p>
    <button class="btn btn-primary" @click="$emit('pClose',pdata[pNum].id)">close</button>
  </div>
  </div>
</template>

<script>


export default {
    name:'pPop',
    props:['pdata','pNum','pView'],

}
</script>

<style>

</style>