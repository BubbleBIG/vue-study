// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import 'whatwg-fetch'
import home from './components/home/home'
import user from './components/user/user'
import boards from './components/user/boards'
import pins from './components/user/pins'
import likes from './components/user/likes'
import settings from './components/user/settings'
// require('es6-promise').polyfill()
// require('isomorphic-fetch')

Vue.use(VueRouter)
Vue.use(ElementUI)

/* eslint-disable no-new */
// const UrlTest = {
//   template: `
//     <div class="user">
//       <router-view></router-view>
//     </div>
//   `
// }
 const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
   routes: [
    { path: '/', component: home },
    { path: '/settings', component: settings },
    { path: '/:id',
      component: user,
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
  render: h => h(App),
  template: `<App/>`,
  components: { App }
}).$mount('#app')
