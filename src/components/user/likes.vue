<template>
    <div class="user-routers">
    <waterfall :line-gap="260" :watch="pins">
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
        v-for="(pin, index) in pins"
        :width="260"
        :height="pin.height + 100"
        :order="index"
        :key="pin.iid"
    >
    <router-link :to="{ name: 'pin', params: { id: pin.iid }}">
    <div style="padding: 12px" class="gradient-wrap">
        <div style="width: 210px" class="gradient-wrap">
        <img :src="pin.url" width="100%" class=""/>
        </div>
        <div>
            <div class="pinMetaWrapper">
                    <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                    word-break:break-all;float:left;overflow:hidden">
                        我qwqwqwqdjasdnassadasdsadsad是我qwqwqwqdjasdnassadasdsadsad是</div>
                    <a href="###" align="right"><em class="repinIconSmall"></em>
                    <em class="repinCountSmall">111111</em></a>
                </div>
                <div style="height: 50px;clear:both" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8">
                        <div class="userPic"><img src="../../common/images/person.png"
                        style="vertical-align: middle;width:24px;height:24px"></div>
                        <div class="creditName">Saved to</div>
                        <div class="creditTitle">first</div>
                    </a>
                </div>
        </div>
    </div>
    </router-link>
        <!--
        your component
        -->
    </waterfall-slot>
    </waterfall>
		<!--<el-button type="text" @click="open4">点击打开 Message Box</el-button>-->
        <div class="likes">
			<!--<div class="wrap pins" style="width:100%">
				<div v-for="pin in pins" class="item" style="position: absolute; width: 236px;
				margin-left: 20px; margin-top: 10px; transition: all 1s; max-height: 800px;">
					<img :src="pin.url" width="100%" class=""/>
				</div>
			</div>-->
			<h1 style="height:1000px">++Likes++</h1>
		</div>
    </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    // import user from './user.vue'
	// import { rdUpload } from 'radon-ui'
    export default {
        components: {
			// rdUpload
        // 'v-user': user
        Waterfall,
        WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            window.onload = function() {
                Grade(document.querySelectorAll('.gradient-wrap'))
            }
            Grade(document.querySelectorAll('.gradient-wrap'))
        },
        data () {
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            return {
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
            //         url: 'http://localhost/camU/index/index/uploadPins.html',
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
                fetch('http://localhost/camU/index/index/getpins', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch('http://localhost:3000/upload', {
                // // fetch('http://localhost/camU/index/index/getboards', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    for (let i = 0; i < pins.length; i++) {
                        if (pins[i].iswebsite === 0) {
                            pins[i].url = "http://localhost/camu" + pins[i].url
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

<style lang='scss' scope>

	.wrap{
		position: relative;
		margin: 0 auto 14px;
	}
	.item{
	}
	/*.h1{
		height: 300px;
		background-color: #79C40E;
	}
	.h2{
		height: 500px;
		background-color: #FBA20E;
	}
	.h3{
		height: 700px;
		background-color: #0ACBB6;
	}
	.h4{
		height: 400px;
		background-color: #820F6E;
	}
	.h5{
		height: 200px;
		background-color: #E45555;
	}*/
    .likes {
		position: relative;
        h1 {
            font-size: 50px
        }
    }
</style>