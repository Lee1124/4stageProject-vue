<template>
  <div id="app">
    <!--登录页面-->
    <login v-if="loginIsShow"></login>
    <!--后台管理页面-->
    <index v-if="indexIsShow"></index>
  </div>
</template>

<script>
  var u_id=localStorage.getItem('id');
  import login from './components/login/login'
  import index from './components/index'
  export default {
    name: 'App',
    data() {
      return {
        loginIsShow:true,
        indexIsShow:false,
      }
    },
    components: {
      login: login,
      index: index,
    },

    created(){
      if (u_id!=null){
        this.$axios.post('/api/isLogin.do',{u_id:u_id})
          .then( (res)=> {
            if (res.data[0].a_state==1) {
              this.loginIsShow=false;
              this.indexIsShow=true;
            }
          })
      }

    }


  }
</script>

<style scoped>
  /*============只希望某个组件用到过渡效果，就在这里引入CSS文件============*/
  /*@import "assets/animate.css";*/
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

</style>
