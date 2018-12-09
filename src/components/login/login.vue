<template>
  <div id="app">
    <!--<h1>我是登录页面</h1>-->
    <!--<button @click="login">登录</button>-->
    <img src="../../assets/login.jpg" class="loginImg">
    <loginBox></loginBox>
  </div>
</template>

<script>
  import loginBox from './loginBox'

  var login_components={
    loginBox:loginBox
  };
  export default {
    name: 'login',
    // var login_components={}
    // data() {
    //   return {
    //     isTrue: false
    //   }
    // },
    // methods: {
    //   login() {
    //     this.$axios.get('http://172.16.6.24:8888/changeZt.do')
    //       .then((res) => {
    //         console.log("请求成功后的回调函数执行");
    //         this.$router.go(0);
    //       })
    //
    //   }
    // },
    components:login_components
    // props:['isTrue']
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .loginImg {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    -webkit-filter:blur(4px) ;
    -moz-filter:blur(4px);
    -o-filter:blur(4px);
    -ms-filter:blur(4px);
    filter:blur(4px);
  }


</style>
