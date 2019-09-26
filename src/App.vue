<template>
<div id="app">
   <router-view></router-view>
</div>
   
</template>
<script>
import firstPage from '@/views/firstPage.vue';
export default {
  components:{
    firstPage
  }

}
</script>

<style>
#app{
  widows: 100%;
  height:100%;
}
</style>
