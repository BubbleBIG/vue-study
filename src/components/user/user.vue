<template>
    <div class="user-routers">
    <v-header></v-header>
        <div class="fixedHeader">
        <div class="userCommon flex">
            <ul class="" style="width:25%;padding: 7px 2px">
                <li>
                    <router-link to="/settings" class="iconButton">
                        <button class="Button editSettingsButton mr2">
                            <em style="margin: 8px"></em>
                            <span class="accessibilityText">Edit settings</span>
                        </button>
                    </router-link>
                </li>
                <li class="" >
                    <div class="iconButton">
                        <button class="Button sendProfileButton mr2">
                            <em style="margin: 10px"></em>
                            <span class="accessibilityText">Send Profile</span>
                        </button>
                    </div>
                </li>
                <li class="" id="userInfo">
                    <div class="iconButton">
                         <el-popover ref="popover3" placement="bottom" width="100" trigger="click">
                            <div style="height:130px;text-align:center">
                                <el-button type="text" @click="logout">Logout</el-button>
                            </div>
                        </el-popover>
                        <button v-popover:popover3 class="Button userMenuButton">
                            <em style="margin: 10px"></em>
                            <span class="accessibilityText">User menu</span>
                        </button>

                    </div>
                </li>
            </ul>
            <div style="width:50%;vertical-align: middle">
                <div align="center" id="boardName" class="boardName"><h1>Bubble</h1></div>
            </div>
            <div style="width:25%"></div>
        </div>
        </div>
        <div class="userCommon">
            <div class="flex" style="padding-top:64px">
                <div class="user-info">
                    <div class="fontFamily"><h1>Bubble</h1></div>
                </div>
                <div class="user-info gradient-wrap" align="right">
                    <div></div>
                    <img src="../../common/images/person.png" width="156" height="156" />
                </div>
            </div>
        </div>
        <ul class="userCommon">
            <li><router-link :to="'/' + userName + '/boards'" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link :to="'/' + userName + '/pins'" class="userLink" onclick="llk1()">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link :to="'/' + userName + '/likes'" class="userLink">
                <div onclick="llk ()" class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import header from '../header/header.vue'
    export default {
        components: {
        'v-header': header
        },
        data () {
            return {
                userName: 'Bubble'
            }
        },
        methods: {
            logout () {
                console.log(1)
            }
        }
    }
// window.onload = function () {
// window.onscroll = function () {
//     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//     var bName = document.getElementById('boardName');
//     if (scrollTop >= 50) {
//         bName.classList.add("transitionIn");
//         bName.classList.remove("transitionOut");
//         // addClass (bName,"transitionIn");
//         // removeClass (bName,"transitionOut");
//         // console.log(bName);
//     } else {
//         bName.classList.remove("transitionIn");
//         bName.classList.add("transitionOut");
//         // removeClass (bName,"transitionIn");
//         // addClass (bName,"transitionOut");
//     }
// }
// }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .fixedHeader
        position: fixed
        background-color: #fff
        width: 100%
        z-index: 100
        /*display: flex*/
        opacity: 0.95
        .boardName
            font-size: 21px
            font-weight: bold
            vertical-align: middle
            padding-top: 18px
            top: -50px
            -webkit-text-stroke: 1.5px #000
            text-shadow: 0px 5px 5px #333
            position: relative
    .userCommon
        margin: auto
        width: 756px
        li
            display: inline-block
            vertical-align: middle
            .userLink
                font-size: 18px
                letter-spacing: -0.2px
                line-height: 18px
                word-spacing: 0
                font-weight: bold
                padding: 5px 7px
                border-radius: 20px
        .user-info
            width: 50%
            h1
                font-size: 36px
                font-weight: bold
                letter-spacing: -1.25px
                line-height: 42px
                word-spacing: -2.25px
    .editSettingsButton
        em
            width: 28px
            height: 24px
            background: url(../../common/images/w.png) -221px -234px no-repeat
            font: 0 / 0 serif
            text-shadow: none
            color: transparent
            background-color: #fff
    .sendProfileButton
        em
            width: 24px
            height: 24px
            background: url(../../common/images/w.png) -50px -310px no-repeat
            font: 0 / 0 serif
            text-shadow: none
            color: transparent
            background-color: #fff
    .userMenuButton
        em
            width: 24px
            height: 6px
            background: url(../../common/images/w.png) -209px -296px no-repeat
            font: 0 / 0 serif
            text-shadow: none
            color: transparent
            background-color: #fff
    .iconButton
        button  
            width: 45px
            height: 45px
            position: relative
            background-color: #fff
            border-radius: 100%
        button:hover
            background-color: #eee
            em
                background-color: #eee
            em
                text-align: center
        .accessibilityText
            font: 0 / 0 serif
            text-shadow: none
            color: transparent
            position: absolute
</style>