<template>
  <div id="app">
    <!--<div v-if="">-->
    <!--<v-header></v-header>-->
    <!--</div>-->
    <div style="margin-top: 65px"></div>
    <router-view></router-view>
  </div>
</template>
<script>
  // import header from './components/header/header.vue'
  export default {
    components: {
      // 'v-header': header
    }
  }
</script>
<style lang='scss'>
.flex {
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
}
  .navb {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 10px 0;
    width: 100%;
    height: 40px;
    line-height: 36px;
    border-bottom: 1px solid #ebebeb;
    background: #fff;
    .navb-group {
      align-content: space-around;
      background-color: #fff;
      vertical-align: middle;
      /*margin: 2px 10px*/
    }
    .searchImg {
      margin-right: 0;
    }
    .search {
      flex: 1;
      margin-left: 0;
    }
    input {
      width: 100%;
    }
  }
  .user-routers {
    /*margin: 10px*/
    ul {
      /*height: 60px*/
      li {
        /*height: 30px*/
        a {
          background: #fff;
          color: #b1b1b1;
        }
        a.router-link-active {
          background: #eee;
          color: #333;
        }
        a.active {
          background: #eee;
          color: #333;
        }
      }
      li.router-link-active a {
        background: #eee;
        color: #333;
      }
    }
  }
</style>
