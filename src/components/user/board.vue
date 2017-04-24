<template>
    <div class="user-routers">
    <v-header></v-header>
    <div class="fixedHeader">
        <div class="userCommon flex">
            <ul class="" style="width:25%;padding: 7px 2px">
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
                                <el-button type="text" @click="">hh</el-button>
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
            </div>
            <div style="width:25%"></div>
        </div>
    </div>
    <div class="userCommon">
        <div class="flex" style="padding-top:64px;padding-left: 10px">
            <div class="user-info">
                <div class="fontFamily"><h1>{{ bName.bname }}</h1></div>
                <div class="fontFamily"><span>0 Followers</span></div>
            </div>
            <div class="user-info" align="right">
                <div></div>
                <img src="../../common/images/person.png" width="56" height="56" />
            </div>
        </div>
    </div>
    <div v-if="pins[0]" class="homePins">
        <waterfall :line-gap="260" :watch="pins">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot class="waterfall-img"
            v-for="(pin, index) in pins"
            :width="260"
            :height="pin.height"
            :order="index"
            :key="pin.iid"
        >
        <div style="padding: 12px">
            <div class="pin-img">
                <div class="pin-btn" style="padding:4px 0px 0px 4px;">
                    <div class="btn"><el-button :plain="true" type="danger" icon="share"></el-button></div>
                    <div class="btn"><el-button :plain="true" type="danger" icon="star-on"></el-button></div>
                    <div style="margin-left: 72px;" class="btn"><el-button type="primary">save</el-button></div>
                </div>
                <!--<router-link :to="{ name: 'pin', params: { id: pin.iid }}">-->
                <router-link :to="'/pin/' + pin.iid">
                    <img :src="pin.url" width="100%" class=""/>
                </router-link>
            </div>
            <div>
                <div class="pinMetaWrapper">
                    <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                    word-break:break-all;float:left;overflow:hidden">
                    Nothing</div>
                    <a href="###" align="right"><em class="repinIconSmall"></em>
                    <em class="repinCountSmall">111111</em></a>
                </div>
                <div style="clear: both;padding-top: 5px;color:#aaa;">Picked for you</div>
                <div style="padding:8px 0px;clear:both" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8">
                        <div class="userPic" style="float:left"><img src="../../common/images/person.png"
                        style="vertical-align: middle;width:24px;height:24px"></div>
                        <div style="padding:0px 32px;" class="creditName">Saved to</div>
                        <div style="padding:0px 32px;" class="creditTitle">first</div>
                    </a>
                </div>
            </div>
        </div>
            <!--
            your component
            -->
        </waterfall-slot>
        </waterfall>
        <!--<router-view></router-view>-->
		<!--<el-button type="text" @click="open4">点击打开 Message Box</el-button>-->
    </div>
    <div v-else class="pins">
        <div class="pinsItemsClass pinsItem">
            <div class="pinsCard" style="height: 284px">
                <a class="AddPinRep ModalTrigger" style="height: 284px">
                    <span>Pins you save will<br>
                    live here</span>
                </a>
            </div>
        </div>
    </div>
    <div style="clear:both;">
    </div>
    <!--<h1>this board name: {{ bName.bname }}</h1>-->
    </div>
</template>

<script>
import header from '../header/header.vue'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default {
        components: {
        'v-header': header,
        Waterfall,
        WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // debugger;
            let a = this.$route.params
            console.log(a)
        },
        data () {
            let bname = this.$route.params
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            return {
                http: 'http://localhost',
                bName: bname,
                arrCookie: arrCookie[1],
                pins: [],
                align: 'center'
            }
        },
        created: function () {
            this.pinHeight()
            this.getPins()
        },
        methods: {
            getPins () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bname", self.bName.bname)
                fetch(self.http + '/camU/index/index/getboardpins', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getboards', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    let length = pins.length
                    for (let i = 0; i < length; i++) {
                        pins[i].height = 114 + parseInt(pins[i].height)
                        if (pins[i].iswebsite === 0) {
                            pins[i].url = self.http + "/camu" + pins[i].url
                            // console.log(pins)
                        }
                    }
                    // console.log(pins)
                    self.pins = pins
                })
            },
            pinHeight () {
                // var b = $("#pinheight").outerHeight(true)
                // var a = $('#pinheight')
                // // var h = window.offsetHeight
                // var o = document.getElementById("pinheight")
                // let c = document.getElementById("pinheight")
                // var h = o.offsetHeight;
                // var w = o.offsetWidth;
                // // debugger;
                // console.log(w)
                // console.log(h)
                // console.log(b)
                // console.log(a)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1 {
  font-size: 4rem;
}
// $a = #f1b1c1
.pins {
    .pinsItem .AddPinRep {
        span {
            margin-top: 0;
        }
    }
}
.el-input-group__prepend {
    color: #333;
    font-weight: bold;
    border: none;
}
</style>
