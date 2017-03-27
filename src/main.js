// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import 'radon-ui/dist/radon-ui.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
// import 'whatwg-fetch'
import home from './components/home/home'
import login from './components/user/login'
import reg from './components/user/reg'
import user from './components/user/user'
import boards from './components/user/boards'
import pins from './components/user/pins'
import likes from './components/user/likes'
import settings from './components/user/settings'
import pin from './components/user/pin'
import board from './components/user/board'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '../static/js/test.js'
// require('es6-promise').polyfill()
// require('isomorphic-fetch')
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
// const UrlTest = {
//   template: `
//     <div class="user">
//       <router-view></router-view>
//     </div>
//   `
// }
// function guardRoute (to, from, next) {
//   if (window.confirm('Navigate to ?')) {
//     next()
//   } else {
//     next('/log')
//   }
// }

 const router = new VueRouter({
  linkActiveClass: 'active',
  // mode: 'history',
  base: __dirname,
   routes: [
    // { path: '/', component: home, beforeEnter: guardRoute },
    { path: '/', component: home },
    { path: '/log', component: login },
    { path: '/reg', component: reg },
    { path: '/settings', component: settings },
    { path: '/pin/:id', name: 'pin', component: pin },
    { path: '/:username',
      component: user,
      children: [
        { path: '', component: boards },
        { path: 'boards', component: boards },
        { path: 'pins', component: pins },
        { path: 'likes', component: likes }
        // { path: '/:username/:bname', component: board }
      ]
    },
    { path: '/:username/:bname', component: board }
    // { path: '/:username/:bname',
    //   component: board,
    //   children: [
    //     { path: 'reg', component: reg }
    //   ]
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // fetch('http://localhost/camU/index/index/test3', {
  //   method: 'GET'
  // })
  // .then(res => res.json())
  // .then(function (id) {
  //   console.log(id)
  // })
  // console.log(to)
  let self = this
  // fetch('http://localhost:3000/login', {
  //   method: 'GET'
  // })
  // .then(res => res.json())
  // .then(function (id) {
    let strCookie = document.cookie
    let arr = strCookie.split(";")
    let arrCookie = arr[0].split("=")
    // console.log(arrCookie[1]) //cookie
    const {auth = true} = to.meta      // meta代表的是to中的meta对象，path代表的是to中的path对象
    var isLogin = Boolean(arrCookie[1])    // true用户已登录,false用户未登录
    if (auth && !isLogin && to.path !== '/log' && to.path !== '/reg') {  // auth 代表需要通过用户身份验证,默认为true,代表需要被验证,false为不用检验
      return next({ path: '/log' },
      {a: 10})   //  跳转到login页面
    } else if (auth && isLogin && to.path === '/log') {
      setTimeout(() => {
        // return next('/')
        }, 800)
      // return next('/')
    }
    next(vm => vm.da = to.path)   // 进行下一个钩子函数
  // })
  // const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象
  // var isLogin = Boolean(id)    // true用户已登录,false用户未登录
  // if (auth && !isLogin && path !== '/log') {  // auth 代表需要通过用户身份验证,默认为true,代表需要被验证,false为不用检验
  //   return next({ path: '/log' })   //  跳转到login页面
  // }
  // next()   // 进行下一个钩子函数
})
new Vue({
  router,
  render: h => h(App),
  template: `<App/>`,
  components: { App }
}).$mount('#app')
