<template>
    <div class="user-routers">
    <v-header></v-header>
    <div class="homePins">
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
                <router-link @click="dialogVisible = true" :to="'/pin/' + pin.iid ">
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
            <router-view></router-view>
        </div>
            <!--
            your component
            -->
        </waterfall-slot>
        </waterfall>
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
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
        components: {
			// rdUpload
        'v-header': header,
        Waterfall,
        WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // Grade(document.querySelectorAll('.gradient-wrap'))
        },
        data () {
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            return {
                dialogVisible: false,
                http: 'http://localhost',
                arrCookie: arrCookie[1],
                pins: [],
                align: 'center'
            }
        },
        created: function () {
            this.getPins()
        },
        methods: {
			// uploadOne () {
            //     var data = new FormData($('#form12')[0]);
            //     $.ajax({
            //         url: '/camU/index/index/uploadPins.html',
            //         type: 'POST',
            //         data: data,
            //         dataType: 'JSON',
            //         cache: false,
            //         processData: false,
            //         contentType: false
            //     }).done(function (ret) {
            //         if (ret['isSuccess']) {
            //             var result = '';
            //             result += '<img src="' + ret['photo'] + '"width="100">';
            //             $('#result').html(result);
            //         } else {
            //             alert('提交失敗');
            //         }
            //     });
            //             console.log('test success!')
            //     return false;
            // },
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
                    console.log(pins)
                    self.pins = pins
                })
            }
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
// .piclist{margin:auto;position:relative}.piclist li{width:180px;padding:10px;border-radius:5px;box-shadow:0 0 4px #ddd;position:absolute}.piclist img{display:block;width:180px}.piclist span{display:block;text-align:center;height:26px;overflow:hidden;line-height:26px}

// .piclist {
//     margin: auto;position: relative;
//     li {width: 180px;padding: 10px;border-radius: 5px;box-shadow: 0 0 4px #ddd;position: absolute;}
//     img {display: block;width: 180px;}
//     span {display: block;text-align: center;height: 26px;overflow: hidden;line-height: 26px;}
// }
</style>