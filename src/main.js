// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import home from './components/home/home'
// import user from './components/user/user'
import boards from './components/user/boards'
import pins from './components/user/pins'
import likes from './components/user/likes'

Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
const UrlTest = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}
 const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
   routes: [
    { path: '/', component: home },
    { path: '/:id',
      component: UrlTest,
      children: [
        { path: '', component: boards },
        { path: 'boards', component: boards },
        { path: 'pins', component: pins },
        { path: 'likes', component: likes }
      ]
    }
  ]
})
new Vue({
  router,
  template: `<App/>`,
  components: { App }
}).$mount('#app')
