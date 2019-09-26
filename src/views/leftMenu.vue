<template>
    	<div class = "botton-left">
			<dl class = "menu-list">
				<dt>学生管理</dt>
                <router-link :class = "{'list':true}" :to="{name:'stuList'}" tag="dd" >学生列表</router-link>
                <router-link class = "add" :to="{name:'addStu'}" tag="dd" >新增学生</router-link>				
                 
			</dl>
		</div>
</template>

<script>
export default {
    data(){
        return {
          
        }
    },
    methods:{
         
    }
}
</script>

<style>

</style>
