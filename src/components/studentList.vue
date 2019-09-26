<template>
     <div class="student-list content content-active" id="student-list">
      <div class="search">
        <label for="search-word">关键字搜索:</label>
        <input type="text" id="search-word" v-model="searchWord"/>
        <button id="search-submit" @click="searchByWord">搜索</button>
        <label for="search-word">每页展示数据:</label>
        <input type="number" id="showNum" min="1" max="10" v-model="sizeNum"/>
        <button id="showNum-submit" @click="changeSize">确认</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr  v-for="(item,index) in $store.state.studentInfo" :key="item.id">
                  <td>{{item.sNo}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.sex == '0'?'男':'女'}}</td>
                  <td>{{item.email}}</td>
                  <td>{{new Date().getFullYear() - item.birth}}</td>
                  <td>{{item.phone}}</td>
                  <td>{{item.address}}</td>
                  <td><button  class = "btn edit" data-index = ' +index+' @click="showDialog(item,index)">编辑</button>
                       <button class = "btn del" data-index = ' +index+' @click="delStu(item,index)">删除</button>
                  </td>
        </tr>
        </tbody>
      </table>

      <div :class="{'dialog':true,'show':showDia}">
        <div class="mask" @click="hideDialog"></div>
        <div class="dialog-content">
          <h2>编辑信息</h2>
          <form id="edit-student-form">
            <div>
              <label for="name">姓名</label>
              <input type="text" name="name" id="name" v-model="editInfo.name"/>
            </div>
            <div>
              <label for>性别</label>
              <input type="radio" id="male" name="sex" value="0" :checked="editInfo.sex == '0'" />
              <label for="male" class="radio-label">男</label>
              <input type="radio" id="female" name="sex" value="1" :checked="editInfo.sex == '1'"/>
              <label for="female" class="radio-label">女</label>
            </div>
            <div>
              <label for="sNo">学号</label>
              <input type="text" name="sNo" id="sNo" v-model="editInfo.sNo"/>
            </div>
            <div>
              <label for="email">邮箱</label>
              <input type="text" name="email" id="email" v-model="editInfo.email"/>
            </div>
            <div>
              <label for="birth">出生年</label>
              <input type="text" name="birth" id="birth"  v-model="editInfo.birth"/>
            </div>
            <div>
              <label for="phone">手机号</label>
              <input type="text" name="phone" id="phone" v-model="editInfo.phone"/>
            </div>
            <div>
              <label for="address">住址</label>
              <input type="text" name="address" id="address" v-model="editInfo.address"/>
            </div>
            <div class="button">
              <label for>&nbsp;</label>
              <input type="submit" value="提交" class="btn" id="edit-student-btn" @click="submit($event)"/>
              <input type="reset" value="重置" class="btn" />
            </div>
          </form>
        </div>
      </div>
      <page-vue></page-vue>
    </div>
</template>

<script>
import pageVue from '@/components/page/page.vue'
export default {
data(){
  return {
    studentInfo:{},
    showDia:false,
    editInfo:{},
    infoObj:{},
    index:0,
    searchWord:'',
    sizeNum:''
  }
},
components:{
  pageVue
},
created($el){
    console.log(this.$store)
    var pageNum = 1;
    this.$store.commit('changePageNum',pageNum)
    this.$store.dispatch('getStu');
},
mounted(){
  console.log(this.$el);
 
},
methods:{
  showDialog(info,index){
    this.showDia = true;
    this.editInfo = JSON.parse(JSON.stringify(info));
    this.index = index
    },
  hideDialog(){
    this.showDia = false
  },
  submit(e){
    e.preventDefault()
    this.$ajax.updateStu(this.editInfo).then((res)=>{
      alert(res.data.msg)
      this.showDia = false;
      if(res.data.status == 'success'){
        this.$store.state.studentInfo[this.index] = this.editInfo;
      }else{
        return false
      }
    })
  },
  delStu(item,index){
      var delId = item.sNo;
      this.index = index;
      var isDel = window.confirm('是否删除？')
      if(isDel){
        this.$ajax.delStu(delId).then((res)=>{
          alert(res.data.msg);
          this.$store.state.studentInfo.splice(index,1);
        })
      }
      
  },
  searchByWord(){
    var searchWord = this.searchWord;
    var nowPage = this.$store.state.page;
    var pageSize = this.$store.state.size;
    console.log(searchWord);
    this.$store.dispatch('searchByWord',{sex:-1,search:searchWord,page:nowPage,size:pageSize});
    if(searchWord == ''){
      this.$store.dispatch('getStu');
      this.$store.dispatch('getAllStu1');
    }
  },
  changeSize(){
    var sizeNum = this.sizeNum;
    this.$store.commit('changeSize',sizeNum)
     this.$store.dispatch('getStu');
     this.$store.dispatch('getAllStu1');
  }
}

}

</script>

<style>
.container {
  width: 100%;
  padding: 10px;
  text-align: center;
}

.container .pages {
  padding: 5px 10px;
  border: 1px solid #ccc;
  margin: 0 10px;
}

.container .tab-num.active{
  color: red;
  border: none;
}

.container .tab-num{
  background-color: aquamarine;
}

.container .pages.noshow{
  background-color: #eee;
}

.container .pages.nomore{
  background-color: #eee;
}
</style>
