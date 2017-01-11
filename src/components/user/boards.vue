<template>
    <div class="user-routers">
        <v-user></v-user>
        <ul class="userCommon">
            <li><router-link to="/user/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/user/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/user/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>
        <div class="boards"><h1 style="height:1000px">boards!!!!</h1></div>
    </div>
    
</template>

<script>
    import user from './user.vue'
    export default {
        components: {
        'v-user': user
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .boards
        h1
            font-size: 50px
</style>