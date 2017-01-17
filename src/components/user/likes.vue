<template>
    <div class="user-routers">
        <!--<v-user></v-user>-->
        <!--<ul class="userCommon">
            <li><router-link to="/u/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/u/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/u/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>-->
        <div class="wrap">
    	<div class="item h1">1</div>
    	<div class="item h1">2</div>
    	<div class="item h2">3</div>
    	<div class="item h1">4</div>
    	<div class="item h2">5</div>
    	<div class="item h3">6</div>
    	<div class="item h5">7</div>
    	<div class="item h4">8</div>
    	<div class="item h1">9</div>
    	<div class="item h1">10</div>
    	<div class="item h2">11</div>
     	<div class="item h3">12</div>
    	<div class="item h5">13</div>
    	<div class="item h4">14</div>
    	<div class="item h2">15</div>
    	<div class="item h1">16</div>
    	<div class="item h4">17</div>   	
    </div>
        <div class="likes"><h1 style="height:1000px">++Likes++</h1></div>
    </div>
</template>

<script>
    // import user from './user.vue'
    export default {
        // components: {
        // 'v-user': user
        // }
    }
</script>

<style lang="stylus" scope>
    .likes
        h1
            font-size: 50px
</style>