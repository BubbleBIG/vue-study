<template>
    <div class="user-routers">
        <v-user></v-user>
        <ul class="userCommon">
            <li><router-link to="/u/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/u/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/u/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>
        <div class="likes"><h1 style="height:1000px">++Likes++</h1></div>
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

<style lang="stylus" scope>
    .likes
        h1
            font-size: 50px
</style>