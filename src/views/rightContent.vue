<template>
  <div class="botton-right">
    <router-view></router-view>
  </div>
</template>

<script>
import addStudent from '@/components/addStudent.vue';
import studentList from '@/components/studentList.vue'
export default {
    components:{
        addStudent,
        studentList
    }
};
</script>

<style>
</style>
