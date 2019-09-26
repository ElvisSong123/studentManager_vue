<template>
<div class="container" @click="turnPage($event)"></div>
</template>

<script>
import Page from '@/tools/page.js';
export default {
  data(){
    return {
      allInfoNum:null
    }
  },
  methods:{
    turnPage(e){
      if(e.target.className.indexOf('tab-num') != -1){
          var pageNum = +e.target.innerHTML;
          this.$store.commit('changePageNum',pageNum)
          this.$store.dispatch('getStu');
      }else if(e.target.className.indexOf('pre') != -1){
     
          var pageNum = this.$store.state.page - 1;
          if(pageNum <= 0){
            pageNum = 1;
          }
           this.$store.commit('changePageNum',pageNum)
           this.$store.dispatch('getStu');
      }else if(e.target.className.indexOf('first') != -1){
 
        var pageNum = 1;
        this.$store.commit('changePageNum',pageNum)
        this.$store.dispatch('getStu');
      }else if(e.target.className.indexOf('next') != -1){
     
         var pageNum = this.$store.state.page + 1;
         var allPage = Math.ceil(this.$store.state.allStu / this.$store.state.size)
          if(pageNum > allPage){
            pageNum = allPage;
          }
           this.$store.commit('changePageNum',pageNum)
           this.$store.dispatch('getStu');
      }else if(e.target.className.indexOf('fina') != -1){
 
        var allPage = Math.ceil(this.$store.state.allStu / this.$store.state.size);
        this.$store.commit('changePageNum',allPage)
        this.$store.dispatch('getStu');
      }
    }
  },
  created(){
      
  },
  mounted(){
 
    var $el = this.$el;
    function createPage(state,pageNum){
       new Page({
        allInfoNum: state.allStu,
        tabNum: 5,
        container: $el,
        nowPage: 1,
        onePageNum:pageNum
      })
    }
    this.$store.dispatch('getAllStu',createPage);  

   
    
  }
};

</script>

<style scoped>

</style>
