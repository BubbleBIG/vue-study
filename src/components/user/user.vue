<template>
    <div class="user-routers">
    <v-header></v-header>
        <div class="fixedHeader">
        <div class="userCommon flex">
            <ul class="" style="width:25%;padding: 7px 2px">
                <li>
                    <router-link to="/settings" class="iconButton">
                        <el-button v-if="name.name===userName" type="text" class="Button editSettingsButton mr2">
                            <em style="margin-left: 9px"></em>
                            <span class="accessibilityText">Edit settings</span>
                        </el-button>
                        <el-button v-else :disabled="true" type="text" class="Button editSettingsButton mr2">
                            <em style="margin-left: 9px"></em>
                            <span class="accessibilityText">Edit settings</span>
                        </el-button>
                    </router-link>
                </li>
                <li v-if="name.name===userName" class="" >
                    <div class="iconButton">
                        <el-button type="text" class="Button sendProfileButton mr2">
                            <em style="margin-left: 9px"></em>
                            <span class="accessibilityText">Send Profile</span>
                        </el-button>
                    </div>
                </li>
                <li v-if="name.name===userName" class="" id="userInfo">
                    <div class="iconButton">
                         <el-popover ref="popover3" placement="bottom" width="100" trigger="click">
                            <div style="height:130px;text-align:center">
                                <el-button type="text" @click="logout">Logout</el-button>
                            </div>
                        </el-popover>
                        <el-button type="text" v-popover:popover3 class="Button userMenuButton">
                            <em style="margin: 10px"></em>
                            <span class="accessibilityText">User menu</span>
                        </el-button>

                    </div>
                </li>
            </ul>
            <div style="width:50%;vertical-align: middle">
                <div align="center" id="boardName" class="boardName">
                    <h1 v-if="name.uname">{{ name.uname }}</h1>
                    <h1 v-else>{{ uname }}</h1>
                    </div>
            </div>
            <div style="width:25%">
                
            </div>
        </div>
        </div>
        <div class="userCommon">
            <div class="flex" style="padding-top:64px">
                <div class="user-info">
                    <div class="fontFamily dp1">
                        <h1 v-if="name.uname">{{ name.uname }}</h1>
                        <h1 v-else>{{ uname }}</h1>
                        </div>
                    <!--<div class="flex follow dp1">
                        <div class="px1">
                            <a  rel="">
                            <div class="text-left bold">
                                <span><span class="value block dark-gray">0</span>
                                <span class="label ">Followers</span></span>
                            </div>
                            </a>
                        </div>
                        <div class="px1">
                            <a rel="">
                            <div class="text-left bold">
                                <span><span class="value block dark-gray">0</span>
                                <span class="label ">Following</span></span>
                            </div>
                            </a>
                        </div>
                    </div>-->
                </div>
                <div class="user-info1" align="right">
                    <div></div>
                    <img src="../../common/images/person.png" width="156" height="156" />
                </div>
            </div>
        </div>
        <ul class="userCommon">
            <li v-if="name.name"><router-link :to="'/' + name.name + '/boards/'" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li v-else><router-link :to="'/' + userName + '/boards/'" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li v-if="name.name===userName"><router-link :to="'/' + userName + '/pins/'" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li v-if="name.name===userName"><router-link :to="'/' + userName + '/likes/'" class="userLink">
                <div class="userLink likesLink">Likes</div>
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
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // window.onscroll = function () {     // 滑动条触发动画
            //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //     var bName = document.getElementById('boardName');
            //     if (scrollTop >= 50) {
            //         bName.classList.add("transitionIn");
            //         bName.classList.remove("transitionOut");
            //     } else {
            //         bName.classList.remove("transitionIn");
            //         bName.classList.add("transitionOut");
            //     }
            // }
        },
        data () {
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            return {
                http: this.GLOBAL.url,
                userName: arrName[1],
                name: '',
                uname: ''
            }
        },
        created: function () {
            this.path()
            this.username()
        },
        watch: {
        // 如果路由有变化，会再次执行该方法
        // "$route": "fetchDate"
            "$route": 'path'
        },
        methods: {
            username () {
                let self = this
                let formData = new FormData()
                formData.append('name', self.userName)
                fetch(self.http + '/camU/index/index/getuname', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    // console.log(bos)
                    self.uname = res
                })
            },
            path () {
                let self = this
                let array = self.$route.path.split("/")
                // console.log(array)
                if (self.$route.params.username !== self.userName) {
                    if (array[2] && array[2] !== 'boards') {
                        // console.log('array')
                    } else {
                        let formData = new FormData()
                        formData.append('name', self.$route.params.username)
                        fetch(self.http + '/camU/index/index/checkuser', {
                            method: 'POST',
                            body: formData
                            // mode: 'no-cors',
                            // headers: { 'Content-Type': 'application/json' },
                            // credentials: 'same-origin'
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            // console.log(bos)
                            self.name = res
                        })
                        // console.log(array)
                    }
                    // self.$message.error('the page not found!')
                    // setTimeout(() => {
                    //     self.$router.replace('/404/')
                    // }, 2000)
                } else {
                    let formData = new FormData()
                    formData.append('name', self.$route.params.username)
                    fetch(self.http + '/camU/index/index/checkuser', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    .then(function (res) {
                        // console.log(bos)
                        self.name = res
                    })
                    // self.name.name === self.userName
                    // console.log(array)
                }
                // console.log(this.$route.path)
            },
            logout () {
                let self = this
                var date = new Date()
                date.setTime(date.getTime() - 10000)
                document.cookie = 'id' + " = v; expires = " + date.toGMTString()
                document.cookie = 'name' + " = v; expires = " + date.toGMTString()
                setTimeout(() => {
                    self.$router.replace('/log')
                }, 800)
                // if (document.cookie)
                console.log(document.cookie)
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

<style lang='scss'>
    .fixedHeader {
        position: fixed;
        background-color: #fff;
        width: 100%;
        z-index: 100;
        /*display: flex*/
        opacity: 0.95;
        .boardName {
            font-size: 21px;
            font-weight: bold;
            vertical-align: middle;
            padding-top: 18px;
            top: -50px;
            -webkit-text-stroke: 1.5px #000;
            text-shadow: 0px 5px 5px #333;
            position: relative;
        }
    }
    .userCommon {
        margin: auto;
        width: 756px;
        li {
            display: inline-block;
            vertical-align: middle;
            .userLink {
                font-size: 18px;
                letter-spacing: -0.2px;
                line-height: 18px;
                word-spacing: 0;
                font-weight: bold;
                padding: 5px 7px;
                border-radius: 20px;
            }
        }
        .user-info {
            width: 75%;
            .bold {
                margin: 8px 16px 0px 3px;
                span {
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            .label {
                color: #b5b5b5;
            }
            .fontFamily {
                width: 66%;
            }
            .follow {
                width: 32%;
            }
            h1 {
                font-size: 36px;
                font-weight: bold;
                letter-spacing: -1.25px;
                line-height: 42px;
                word-spacing: -2.25px;
            }
        }
        .user-info1 {
            width: 25%;
        }
    }
    .editSettingsButton {
        em {
            width: 28px;
            height: 24px;
            background: url(../../common/images/w.png) -221px -234px no-repeat;
            font: 0 / 0 serif;
            text-shadow: none;
            color: transparent;
            background-color: #fff;
        }
    }
    .sendProfileButton {
        em {
            width: 24px;
            height: 24px;
            background: url(../../common/images/w.png) -50px -310px no-repeat;
            font: 0 / 0 serif;
            text-shadow: none;
            color: transparent;
            background-color: #fff;
        }
    }
    .userMenuButton {
        em {
            width: 24px;
            height: 6px;
            background: url(../../common/images/w.png) -209px -296px no-repeat;
            font: 0 / 0 serif;
            text-shadow: none;
            color: transparent;
            background-color: #fff;
        }
    }
    .iconButton {
        button {
            width: 45px;
            height: 45px;
            position: relative;
            background-color: #fff;
            border-radius: 100%;
        }
        button:hover {
            background-color: #eee;
            em {
                background-color: #eee;
            }
            em {
                text-align: center;
            }
        }
        .accessibilityText {
            font: 0 / 0 serif;
            text-shadow: none;
            color: transparent;
            position: absolute;
        }
    }
</style>