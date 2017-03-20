<template>
<div>
    <v-header></v-header>
    <div class="user-routers">
        
        11212
    </div>
</div>
</template>

<script>
import header from '../header/header.vue'
    export default {
        components: {
        'v-header': header
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // this.$emit('id', 10)
        },
        created: function () {
        },
        methods: {
        }
    }
</script>

<style lang='scss' scope>
</style>