<template>
<div class="container px-0">
  
  <nav class="navbar navbar-expand-lg navbar-light mb-3">
    <a class="navbar-brand" href="#"><img src="../../public/image/logo_plat.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(item,i) in menu" :key="i" @click="close" class="nav-item active nav-link">
          <router-link :to="menu[i].link" class="text-dark">{{menu[i].title}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>




<!-- 
  <h1>Logo</h1>
  <nav>
      <ul class="menu clearfix">
          <li v-for="(item,i) in menu" :key="i">
              <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
          </li>
      </ul>
  </nav> -->
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            menu:[
                {title:'home',link:'/'},
                {title:'company',link:'/company'},
                {title:'product',link:'/product'},
                {title:'qa',link:'/qa'},
            ]
        }
    },
    methods:{
      close:function(){
        document.getElementById("navbarNav").classList.remove("show")
      }
    }
}
</script>

<style>

</style>