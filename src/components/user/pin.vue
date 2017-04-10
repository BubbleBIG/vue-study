<template>
<div>
    <!--<v-home></v-home>-->
    <div class="user-routers">
        <el-dialog class="" v-model="dialogPin" top="5%">
            <div class="pin-show" style="padding: 12px">
                <div class="pin-img">
                    <div class="pin-btn" style="padding:4px 0px 0px 4px;">
                        <div class="btn btn_1"><el-button :plain="true" type="danger" icon="share"></el-button></div>
                        <div class="btn btn_1"><el-button :plain="true" type="danger" icon="star-on"></el-button></div>
                        <div style="margin-left: 355px;" class="btn"><el-button type="primary">save</el-button></div>
                    </div>
                    <div>
                        <img :src="pin.url" width="100%" class=""/>
                    </div>
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
        <div :style="{width: width + 'px',marginLeft:-(width-540)/2 + 'px',background:'#fff'}">
            <div class="homePins">
                <div>Related Pins</div>
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
                        <router-link :to="{ name: 'pin', params: { id: pin.iid }}">
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
                                <div class="userPic" style="float:left">
                                    <!--<img src="../../common/images/person.png"
                                style="vertical-align: middle;width:24px;height:24px">-->
                                </div>
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
        </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import home from '../home/home.vue'
import header from '../header/header.vue'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default {
        components: {
            Waterfall,
            WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            document.title = this.$route.path   // 改变网页title
            console.log(this.id)
            let width = window.innerWidth
            console.log(width)
            // if (this.dialogPin === false) {
            //     console.log('kkk')
            // }
            // this.$emit('id', 10)
        },
        data () {
            let width = window.innerWidth
            let a = this.$route.params
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            return {
                http: 'http://localhost',
                width: width,
                dialogPin: true,
                id: a.id,
                pin: '',
                arrCookie: arrCookie[1],
                pins: [],
                align: 'center'
            }
        },
        watch: {
            dialogPin: function () {
                this.$router.go(-1)
                console.log('kkk')
            },
            "$route": function () {
                location.reload('/pin/' + this.pin.iid)
            }
        },
        created: function () {
            this.getPin()
            this.getPins()
        },
        methods: {
            getPin () {
                let self = this
                let formData = new FormData()
                // formData.append("id", self.arrCookie)
                formData.append("iid", self.id)
                fetch(self.http + '/camU/index/index/getpin', {
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
                .then(function (pin) {
                    if (pin.iswebsite === 0) {
                        pin.url = self.http + "/camu" + pin.url
                        // console.log(pins)
                    }
                    // console.log(pins)
                    self.pin = pin
                    // location.reload('/pin/' + pin.iid)
                })
            },
            getPins () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                // formData.append("bid", e)
                fetch(self.http + '/camU/index/index/getpins', {
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
            }
        }
    }
</script>

<style lang='scss' scoped>
.pin-show {
    // width: 300px;
}
.pin-img {
    margin-bottom: 6px;
    .pin-btn {
        // position: absolute;
        .btn {
            display: inline-block;
            padding-bottom: 12px;
            button {
                border: none;
            }
        }
        .btn_1 {
            button {
                background: #eee;
            }
        }
    }
    img {
        border-radius: 8px;
    }
}
</style>