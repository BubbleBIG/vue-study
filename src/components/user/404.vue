<template>
  <div>
    <!--<div v-if="">-->
    <v-header></v-header>
    <!--</div>-->
    <div style="margin-top: 65px"></div>
    <div class="error-page">
    <h2>404</h2>
    <div>
    <!--<router-view name="pin"></router-view>-->
  </div>
</template>
<script>
  import header from '../header/header.vue'
  export default {
    components: {
      'v-header': header
    }
  }
</script>
<style lang='scss'>
.error-page {
  h2 {
    font-size: 30px;
  }
}
</style>
