<template>
    <div class="wrapper">
      <header-side></header-side>
      <left-menu></left-menu>
      <right-content></right-content>
    </div>   
</template>
<script>
import headerSide from '@/views/headerSide.vue';
import leftMenu from '@/views/leftMenu.vue';
import rightContent from '@/views/rightContent.vue';
export default {
  components:{
    headerSide,
    leftMenu,
    rightContent
  }

}
</script>

<style>
@import url("../css/student.css");
</style>
