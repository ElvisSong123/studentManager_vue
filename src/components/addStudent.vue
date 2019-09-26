<template>
  <transition>
    <div class="add-student content" id="add-student">
      <form id="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" id="name" name="name" v-model="stuInfo.name" />
        </div>
        <div>
          <label for>性别</label>
          <input type="radio" id="male" name="sex" checked value="0" v-model="stuInfo.sex" />
          <label for="male" class="radio-label">男</label>
          <input type="radio" id="female" name="sex" value="1" v-model="stuInfo.sex" />
          <label for="female" class="radio-label">女</label>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" id="sNo" name="sNo" v-model="stuInfo.sNo" />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" id="email" name="email" v-model="stuInfo.email" />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" id="birth" name="birth" v-model="stuInfo.birth" />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" id="phone" name="phone" v-model="stuInfo.phone" />
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" id="address" name="address" v-model="stuInfo.address" />
        </div>
        <div class="button">
          <label for></label>
          <input type="submit" value="提交" class="btn" id="add-student-btn" @click="addStu($event)" />
          <input type="reset" value="重置" class="btn" />
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      stuInfo: {}
    };
  },
  methods: {
    addStu(e) {
      e.preventDefault();
      console.log(this.stuInfo);
      if(this.regInfo(this.stuInfo)){
        this.$ajax.addStu(this.stuInfo).then((res)=>{
          console.log(res.data.msg);
          this.$router.push('/stuList')
        })
      }
    },
    regInfo(data) {
    //数据校验函数
    var regname = /^[\u4E00-\u9FA5]{2,4}$/g;
    var regsNo = /\D+/g;
    var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/g;
    var regphone = /^[1][3,4,5,7,8][0-9]{9}$/g;
    var regadress = /[\u4E00-\u9FA50-9]+/g;
    if (!regname.test(data.name)) {
      alert("请输入正确的名字字符");
      return false;
    } else if (regsNo.test(data.sNo)) {
      alert("请输入正确的学号");
      return false;
    } else if (!regEmail.test(data.email)) {
      alert("请输入正确的邮箱");
      return false;
    } else if (data.birth > new Date().getFullYear() || data.birth < 1900) {
      alert("请输入正确的生日日期");
      return false;
    } else if (!regphone.test(data.phone)) {
      alert("请输入正确的电话号码格式");
      return false;
    } else if (!regadress.test(data.address)) {
      alert("请输入正确的地址");
      return false;
    } else {
      return true;
    }
  }
  },
  
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 2s ease;
}
</style>
