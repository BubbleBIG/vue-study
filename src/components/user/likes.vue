<template>
    <div class="user-routers">
    <v-header></v-header>
    <div class="homePins">
        <waterfall :line-gap="260" :watch="pins">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot class="waterfall-img"
            v-for="(pin1, index) in pins"
            :width="260"
            :height="pin1.height"
            :order="index"
            :key="pin1.iid"
        >
        <div style="padding: 12px">
            <div class="pin-img">
                <div class="pin-btn" style="padding:4px 0px 0px 4px;">
                    <div class="btn"><el-button :plain="true" type="danger" icon="share"></el-button></div>
                    <div class="btn">
                        <el-tooltip v-if="pin1.pinsave === 1" effect="dark" content="Unlike" placement="bottom">
                        <el-button type="danger" :plain="true"
                        style="color: #fab000" icon="star-on" @click="like(pin1.iid)"></el-button></el-tooltip>
                        <el-tooltip v-else effect="dark" content="like" placement="bottom">
                        <el-button :plain="true" type="danger" icon="star-on" @click="like(pin1.iid)"></el-button></div></el-tooltip>
                    <div style="margin-left: 72px;" class="btn"><el-button type="primary" @click="dialogVisible5=true,savePin(pin1)">save</el-button></div>
                </div>
                <div @click="dialogPin = true,getPin(pin1.iid)" >
                    <img :src="pin1.url" width="100%">
                </div>
            </div>
         <div>
                <div class="pinMetaWrapper">
                    <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                    word-break:break-all;float:left;overflow:hidden">
                    {{ pin1.idescription }}</div>
                    <a href="###" align="right"><em class="repinIconSmall"></em>
                    <em class="repinCountSmall">111111</em></a>
                </div>
                <div style="clear: both;padding-top: 5px;color:#aaa;">Picked for you</div>
                <div style="padding:8px 0px;clear:both" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8">
                        <div class="userPic" style="float:left">
                            <img v-if="pin1.uimg" :src="http+'/camu'+pin1.uimg"
                        style="vertical-align: middle;width:24px;height:24px">
                            <img v-else src="../../common/images/person.png"
                        style="vertical-align: middle;width:24px;height:24px">
                        </div>
                        <div style="padding:0px 32px;" class="creditName">Saved to</div>
                        <div style="padding:0px 32px;" class="creditTitle">{{ pin1.bname }}</div>
                    </a>
                </div>
            </div>
        </div>
            <!--
            your component
            -->
        </waterfall-slot>
        </waterfall>
        <el-dialog class="" v-model="dialogPin" top="5%">
            <div id="pin-show" class="pin-show" style="padding: 12px">
                <div class="pin-img">
                    <div class="pin-btn" style="position:absolute;padding:4px 0px 0px 4px;top:15px;left:28px;">
                        <div class="btn btn_1">
                            <el-button :plain="true" type="danger" icon="share"></el-button>
                        </div>
                        <div class="btn btn_1" style="position:absolute;top:4px;left:88px;z-index:2;">
                            <el-button v-if="pin.pinsave === 1" type="danger" :plain="true"
                        style="color: #fab000" icon="star-on" @click="like(pin.iid)"></el-button>
                        <el-button v-else :plain="true" type="danger" icon="star-on" @click="like(pin.iid)"></el-button>
                        </div>
                        <div class="btn btn_1" style="position:absolute;top:8px;opacity:0.01;left:93px;width:5px;z-index:0;">
                            <input v-model="pin.iid" v-focus style="width:5px;">
                        </div>
                        <div style="position:absolute;top:4px;left:445px;" class="btn">
                            <el-button type="primary" @click="dialogVisible5=true,savePin(pin)">save</el-button>
                        </div>
                    </div>
                    <div v-if="parseInt(pin.height)>300" align="center">
                        <img :src="pin.url" height="100%" style="height:700px;">
                    </div>
                    <div v-else align="center">
                        <img :src="pin.url" width="100%" class="">
                    </div>
                </div>
                <div>
                    <div class="pinMetaWrapper">
                        <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                        word-break:break-all;float:left;overflow:hidden">
                        {{ pin.idescription }}</div>
                        <a href="###" align="right"><em class="repinIconSmall"></em>
                        <em class="repinCountSmall">111111</em></a>
                    </div>
                    <div style="clear: both;padding-top: 5px;color:#aaa;">Picked for you</div>
                    <div style="padding:8px 0px;clear:both" align="left">
                        <a href="####" style="height: 30px;color: #a8a8a8">
                            <div class="userPic" style="float:left"><img src="../../common/images/person.png"
                            style="vertical-align: middle;width:24px;height:24px"></div>
                            <div style="padding:0px 32px;" class="creditName">Saved to</div>
                            <div style="padding:0px 32px;" class="creditTitle">{{ pin.bname }}</div>
                        </a>
                    </div>
                </div>
            </div>
        <!--<div :style="{width: width + 'px',marginLeft:-(width-540)/2 + 'px',background:'#fff'}">-->
        <div :style="{width: '1050px',marginLeft:'-250px',background:'#fff'}">
            <div class="homePins" style="width: 1050px">
                <div>Related Pins</div>
                <waterfall :line-gap="260" :watch="pins2">
                <!-- each component is wrapped by a waterfall slot -->
                <waterfall-slot class="waterfall-img"
                    v-for="(pin, index) in pins2"
                    :width="260"
                    :height="pin.height"
                    :order="index"
                    :key="pin.iid"
                >
                <div style="padding: 12px">
                    <div class="pin-img">
                        <div class="pin-btn" style="padding:4px 0px 0px 4px;">
                            <div class="btn"><el-button :plain="true" type="danger" icon="share"></el-button></div>
                            <div class="btn"><el-button v-if="pin.pinsave === 1" type="danger" :plain="true"
                        style="color: #fab000" icon="star-on" @click="like(pin.iid)"></el-button>
                        <el-button v-else :plain="true" type="danger" icon="star-on" @click="like(pin.iid)"></el-button></div>
                            <div style="margin-left: 72px;" class="btn"><el-button type="primary" @click="dialogVisible5=true,savePin(pin)">save</el-button></div>
                        </div>
                        <!--<router-link :to="{ name: 'pin', params: { id: pin.iid }}">-->
                        <a @click="getPin(pin.iid)">
                            <img :src="pin.url" width="100%" class=""/>
                        </a>
                    </div>
                    <div>
                        <div class="pinMetaWrapper">
                            <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                            word-break:break-all;float:left;overflow:hidden">
                            {{ pin.idescription }}</div>
                            <a href="###" align="right"><em class="repinIconSmall"></em>
                            <em class="repinCountSmall">111111</em></a>
                        </div>
                        <div style="clear: both;padding-top: 5px;color:#aaa;">Picked for you</div>
                        <div style="padding:8px 0px;clear:both" align="left">
                            <a href="####" style="height: 30px;color: #a8a8a8">
                                <div class="userPic" style="float:left">
                                    <img v-if="pin.uimg" :src="http+'/camu'+pin.uimg"
                                style="vertical-align: middle;width:24px;height:24px">
                                    <img v-else src="../../common/images/person.png"
                                style="vertical-align: middle;width:24px;height:24px">
                                </div>
                                <div style="padding:0px 32px;" class="creditName">Saved to</div>
                                <div style="padding:0px 32px;" class="creditTitle">{{ pin.bname }}</div>
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
        <el-dialog title="" v-model="dialogVisible5">
            <el-form>
                <el-row>
                <el-col :span="12" style="border-right: 1px solid #efefef;background-color:#fdfdfd">
                    <div style="width:236px;min-height: 410px;max-height:480px;margin:auto;padding-top:2px">
                        <div style="margin-bottom: 5px;">
                        <img :src="webUrl" width="100%" id="imgData" style="border-radius: 4px;">
                        </div>
                        <!--<el-input v-model="ImageUrl" style="display:none"></el-input>
                        <el-input v-model="iswebsite" style="display:none"></el-input>-->
                        <div style="padding-bottom: 20px">
                            <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Tell us about this Pin.."
                            v-model="textarea">
                            </el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" style="padding-left: 20px">
                    <div>
                        <div style="padding-bottom: 10px;border-bottom: 1px solid #efefef">
                            <div class="title" style="font-size: 18px;font-weight: bold;
                            padding-bottom: 8px;">Choose board</div>
                            <div v-for="bo in bos">
                                <div v-if="bo.bid === bosave.bid" style="margin-bottom:8px;background-color:#ffe581;font-size:12px;padding:2px;">
                                    Pssst! Looks like you've already <span style="display:inline;width；100%;color:#bd081c;font-weight:600;">saved this Pin to {{ bo.bname }}.</span>
                                </div>
                            </div>
                            <div v-if="bosave.iid === saveimg.oiid" style="margin-bottom:8px;background-color:#ffe581;font-size:12px;padding:2px;">
                                Pssst! Looks like you've already <span style="display:inline;width；100%;color:#bd081c;font-weight:600;">saved this Pin to {{ saveimg.bname }}.</span>
                            </div>
                            <el-input
                            icon="search"
                            placeholder="search"
                            v-model="input2"
                            :on-icon-click="handleIconClick">
                            </el-input>
                        </div>
                        <div>
                            <div style="padding: 8px 0px">All boards</div>
                            <!--<el-button-group v-for="bo in bos">
                                <el-button type="text">{{ bo.bname }}</el-button>
                                <el-button type="primary" icon="share">Save</el-button>
                            </el-button-group>-->
                            <div class="choose-board">
                                <div v-for="bo in bos">
                                    <div class="board-list">
                                        <div style="position:relative">
                                            <el-button type="text" class="board-list-btn">
                                                <img v-if="bo.cover" :src="bo.cover" style="vertical-align:middle;width:35px;
                                                height:34px;object-fit: cover;border-radius:3px;">
                                                <img v-else src="../../common/images/pg.png" style="vertical-align:middle">
                                                <span style="display:inline">{{ bo.bname }}</span></el-button>
                                                <svg v-if="bo.secret === 'true'" class="_2X6AN" style="right:26px;top:15px;" viewBox="0 0 16 16"><path d="M12.8 6.791h-.04V4.566C12.76 2.048 10.625 0 8 0S3.24 2.048 
                                                3.24 4.566v2.225H3.2A5.577 5.577 0 0 0 2 10.245C2 13.423 4.686 16 8 16s6-2.577 6-5.755a5.579 5.579 0 0 0-1.2-3.454zm-2.36 
                                                0H5.56V4.566c0-1.29 1.095-2.34 2.44-2.34s2.44 1.05 2.44 2.34v2.225z" fill-rule="evenodd"></path></svg>
                                                <svg v-if="parseInt(bo.uid)!==parseInt(arrCookie)||parseInt(bo.invited)===1" style="top:15px;right:6px;" class="_2X6AN" viewBox="0 0 16 16"><path d="M9.143 10.2A4 4 0 0 1 16 13v1H0v-1a5 5 0 0 1 9.143-2.8zM12
                                                8a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 8zM5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill-rule="evenodd"></path></svg>
                                            <el-button style="position:absolute;top:0;right:0;" type="primary" class="board-list-save"
                                            @click="pinSave(bo)">Save</el-button>
                                        </div>
                                    </div>
                                    <!--<div>
                                        <div>{{ bo.bname }}</div>
                                        <div><el-button type="primary">Save</el-button></div>
                                    </div>-->
                                </div>
                            </div>
                            <div>
                                <div class="creat-board">
                                    <el-button><i></i><em>Create board</em></el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                </el-row>
            </el-form>
        </el-dialog>
        <!--<router-view></router-view>-->
		<!--<el-button type="text" @click="open4">点击打开 Message Box</el-button>-->
    </div>
    </div>
</template>

<script>
import header from '../header/header.vue'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    // import user from './user.vue'
	// import { rdUpload } from 'radon-ui'
    export default {
        directives: {
            focus: {
                // 指令的定义---
                componentUpdated: function (el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        },
        components: {
			// rdUpload
        'v-header': header,
        Waterfall,
        WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // console.log(self.top)
        },
        data () {
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            return {
                textarea: '',
                bos: '',
                input2: '',
                webUrl: '',
                iswebsite: '',
                dialogPin: false,
                dialogVisible5: false,
                http: 'http://localhost',
                arrCookie: arrCookie[1],
                pins: [],
                pins2: [],
                pin: '',
                likes: '',
                bosave: '',
                saveimg: '',
                align: 'center',
                numTop: 0
            }
        },
        created: function () {
            this.getPins()
        },
        methods: {
            getPins () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                // formData.append("bid", e)
                fetch(self.http + '/camU/index/index/getpinslike', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (pins) {
                    let length = pins.length
                    fetch(self.http + '/camU/index/index/likes', {
                        method: 'POST',
                        body: formData
                    })
                    .then(res => res.json())
                    .then(function (res) {
                        let length2 = res.mess.length
                        for (let i = 0; i < length; i++) {
                            pins[i].height = 114 + parseInt(pins[i].height)
                            if (pins[i].iswebsite === 0) {
                                pins[i].url = self.http + "/camu" + pins[i].url
                                // console.log(pins)
                            }
                            for (let j = 0; j < length2; j++) {
                                if (pins[i].iid === res.mess[j].iid) {
                                    pins[i].pinsave = 1
                                    // console.log(pins)
                                }
                            }
                        }
                        // console.log(pins)
                        self.pins = pins
                    })
                })
            },
            getPin (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("iid", e)
                fetch(self.http + '/camU/index/index/getpin', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (pin) {
                    if (pin.iswebsite === 0) {
                        pin.url = self.http + "/camu" + pin.url
                        // console.log(pins)
                    }
                    // console.log(pins)
                    self.pin = pin
                    self.numTop += 1
                    // location.reload('/pin/' + pin.iid)
                    formData.append("category", pin.category)
                    // formData.append("id", pin.uid)
                    fetch(self.http + '/camU/index/index/getcategorypins', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    .then(function (pins) {
                        let length = pins.length
                        fetch(self.http + '/camU/index/index/likes', {
                            method: 'POST',
                            body: formData
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            let length2 = res.mess.length
                            for (let i = 0; i < length; i++) {
                                pins[i].height = 114 + parseInt(pins[i].height)
                                if (pins[i].iswebsite === 0) {
                                    pins[i].url = self.http + "/camu" + pins[i].url
                                    // console.log(pins)
                                }
                                for (let j = 0; j < length2; j++) {
                                    if (pins[i].iid === res.mess[j].iid) {
                                        pins[i].pinsave = 1
                                        // console.log(pins)
                                    }
                                    if (pin.iid === res.mess[j].iid) {
                                        pin.pinsave = 1
                                        // console.log(pins)
                                    }
                                }
                            }
                            // console.log(pins)
                            self.pins2 = pins
                        })
                    })
                })
            },
            like (e) {
                let self = this
                let formData = new FormData()
                formData.append('id', self.arrCookie)
                formData.append('iid', e)
                fetch(self.http + '/camU/index/index/like', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    self.likes = res
                    // console.log(res)
                })
                // console.log(e)
            },
            savePin (e) {
                let self = this
                self.webUrl = e.url
                self.iswebsite = e.iswebsite
                self.bosave = e
                let formData = new FormData()
                formData.append("id", self.arrCookie);
                // fetch(':3000/todos', {
                fetch(self.http + '/camU/index/index/getboards', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (bos) {
                    // console.log(bos)
                    self.bos = bos
                })
                formData.append("iid", self.bosave.iid);
                fetch(self.http + '/camU/index/index/getsave', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.saveimg = res
                    // debugger
                    // console.log(bos)
                })
            },
            pinSave (e) {
                // console.log(e)
                // debugger
                let h = document.getElementById("imgData")
                let height = h.offsetHeight
                let self = this
                let ImgObj = new Image()
                ImgObj.src = self.webUrl
                if (height > 1111) {
                    height = 1111
                }
                if (ImgObj.width > 0 && ImgObj.height > 0) {
                    let formData = new FormData()
                    formData.append("id", self.arrCookie)
                    formData.append("height", height)
                    formData.append("url", self.webUrl)
                    formData.append("idescription", self.textarea)
                    formData.append("bid", e.bid)
                    formData.append("bname", e.bname)
                    formData.append("iswebsite", self.iswebsite)
                    formData.append("iid", self.bosave.iid)
                    // fetch(':3000/todos', {
                    fetch(self.http + '/camU/index/index/uploadpin2', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    .then(function (res) {
                        // console.log(res)
                        if (res.status === 1) {
                            self.$message.success('数据保存成功')
                            self.dialogVisible5 = false
                        }
                    })
                    // console.log('success')
                } else {
                    this.$message.error('无法识别或保存图片');
                    // console.log('error')
                }
                // console.log(height)
                // console.log(e)
                // console.log(this.textarea)
                // console.log(this.iswebsite)
                // console.log(this.ImageUrl)
                // console.log(self.ImageUrl)
            },
            handleIconClick () {}
        },
        watch: {
            likes: 'getPins'
            // numTop: function () {
            //     var el = document.getElementById('pin-show')
            //     var rect = el.getBoundingClientRect()
            //     console.log(rect.top)
            //     // console.log(el.top)
            // }
        }
    }
</script>

<style lang='scss'>
.waterfall-img {
    .pin-img {
        max-height: 1111px;
        overflow: hidden;
    }
}
.homePins {
    margin: 10px auto 14px;
    .waterfall-img {
        margin: 10px auto;
        .pin-img {
            margin-bottom: 6px;
            .pin-btn {
                position: absolute;
                .btn {
                    display: inline-block;
                    button {
                        border: none;
                    }
                }
            }
            img {
                border-radius: 8px;
            }
        }
        .pin-btn {
            display: none;
        }
        :hover {
            .pin-btn {
                display: block;
            }
        }
    }
}
.homePins {
    .waterfall-img:hover {
        background: rgba(0,0,0,0.05);
        border-radius: 8px;
        // opacity: 1;
        // pointer-events: none;
        // -webkit-transform: scale(0.994);
        // -ms-transform: scale(0.994);
        // transform: scale(0.994);
    }
    & > .waterfall-img:hover .pz5 {
        opacity: 1;
    }
    & > .waterfall-img {
        .pz5:hover {
            background: #d7d7d7;
        }
    }
}
.pin-show {
    // height: 800px;
    // max-height: 800px;
}
@media (min-width: 2079px) {
    .homePins {
        width: 2079px;
    }
}
@media (max-width: 2079px) and (min-width: 1820px) {
    .homePins {
        width: 1820px;
    }
}
@media (max-width: 1819px) and (min-width: 1560px) {
    .homePins {
        width: 1560px;
    }
}
@media (max-width: 1559px) and (min-width: 1300px) {
    .homePins {
        width: 1300px;
    }
}
@media (max-width: 1299px) and (min-width: 1040px) {
    .homePins {
        width: 1040px;
    }
}
@media (max-width: 1039px) and (min-width: 780px) {
    .homePins {
        width: 780px;
    }
}
@media (max-width: 780px) {
    .homePins {
        width: 520px;
    }
}
// .uploadInfo {
//     img { vertical-align: middle; }
//     ul li { display: inline-block; vertical-align: middle;}
// }
// .piclist{margin:auto;position:relative}
// .piclist li{width:180px;padding:10px;border-radius:5px;box-shadow:0 0 4px #ddd;position:absolute}
// .piclist img{display:block;width:180px}
// .piclist span{display:block;text-align:center;height:26px;overflow:hidden;line-height:26px}

// .piclist {
//     margin: auto;position: relative;
//     li {width: 180px;padding: 10px;border-radius: 5px;box-shadow: 0 0 4px #ddd;position: absolute;}
//     img {display: block;width: 180px;}
//     span {display: block;text-align: center;height: 26px;overflow: hidden;line-height: 26px;}
// }
</style>