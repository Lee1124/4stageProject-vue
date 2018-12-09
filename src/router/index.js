import Vue from 'vue'
import Router from 'vue-router'
import qxgl_router from "./qxgl_router";
import product_router from "./product_router";
import login_router from "./login_router";
import gonggao_router from "./gonggao_router";
import contact_router from "./contact_router";
import staff_router from "./staff_router";
import grzx_router from "./grzx_router";
import khgl_router from "./khgl_router";

Vue.use(Router);


/*==========>跳转步骤3<==========index.js中操作跳转，上需要引入*/
export default new Router({
  routes: [
    /*总合tab子路由*/
    ...login_router,
    ...qxgl_router,
    ...product_router,
    ...gonggao_router,
    ...contact_router,
    ...staff_router,
    ...grzx_router,
    ...khgl_router
  ]
})
