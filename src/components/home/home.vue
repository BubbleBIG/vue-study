<template>
    <div>
    <v-header></v-header>
    <div class="user-routers">
		<div class="pins">
			<div v-for="pin in pins" class="pinsItemsClass pinsItem">
                <router-link :to="{ name: 'pin', params: { id: pin.id }}">
                <div class="">
                <div class="">
                    <div class="">
                        <img :src="pin.url" width="100%" style="max-width: 100%"/>
                    </div>
                </div>
                </div>
                <div class="pinMetaWrapper">
                    <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                    word-break:break-all;float:left;overflow:hidden">
                        我qwqwqwq</div>
                    <a href="###" align="right"><em class="repinIconSmall"></em>
                    <em class="repinCountSmall">111111</em></a>
                </div>
                <div class="uploadInfo" style="clear:both" >
                    <a href="####">
                        <ul>
                            <li>
                            <div class="userPic"><img src="../../common/images/person.png"
                            style="width:24px;height:24px"></div>
                            </li>
                            <li>
                            <div class="creditName">Saved to</div>
                            <div class="creditTitle">first</div>
                            </li>
                        </ul>
                    </a>
                </div>
                </router-link>
            </div>
		</div>
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
        <!--<section id="waterfall" style="width:100%">
    <ul class="piclist">
        <li v-for="pin in pins"><img :src="pin.url" width="180" alt=""><span>瀑布流测试1</span></li>
    </ul>
</section-->
        <!--<div class="likes">
			<h1 style="height:1000px">++Home++</h1>
		</div>-->
    </div>
    </div>
</template>

<script>
import header from '../header/header.vue'
    export default {
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // let strCookie = document.cookie;
            // let arrCookie = strCookie.split("=")
            // console.log(arrCookie[1])
        },
        components: {
        'v-header': header
        },
        data () {
            return {
                pins: [],
				currentDate: new Date(),
                url: this.$route.path
            }
        },
        created: function () {
            this.getpins()
        },
        methods: {
            getpins () {
                let self = this
                fetch('http://localhost:3000/upload', {
                // fetch('http://localhost/camU/index/index/getpins', {
                    method: 'GET',
                    // mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (pins) {
                    // console.log(pins)
                    self.pins = pins
                })
            }
        }
    }
    function getViewSize () {
return {"width": window['innerWidth'] || document.documentElement.clientWidth,
"height": window['innerHeight'] || document.documentElement.clientHeight}
}
function getFullSize () {
let w = Math.max(document.documentElement.clientWidth, document.body.clientWidth) +

Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
let h = Math.max(document.documentElement.clientHeight, document.body.clientHeight) +

Math.max(document.documentElement.scrollTop, document.body.scrollTop);
w = Math.max(document.documentElement.scrollWidth, w);
h = Math.max(document.documentElement.scrollHeight, h);
return {"width": w, "height": h};
}

function setContainerSize () {
    var size = getViewSize();
// console.log(size["width"]);
// console.log(size["height"]);
}

setContainerSize();
// waterfall();
window.onresize = setContainerSize;
window.onresize = waterfall;
function waterfall () {
    var size = getViewSize();
    // console.log(size["width"]);
    var itemW = $('.item').outerWidth(true)
    // windowW = $(window).width(),
    // var windowW = size["width"]
    var windowW = window.innerWidth
    var colNum = Math.floor(windowW / itemW)  //    有多少列
        // colNum = 4;
        var colNowHeight = [];//    存放每一列当前总的高度
        //  console.log(windowW);
    for (let i = 0; i < colNum; i++) {
        colNowHeight.push(0);// 初始化数组，每列当前总的高度0
    }
    //  遍历每个item选择他们的归属
    $('.item').each(function () {
        var $this = $(this);
        //  遍历找出高度最短的列及其对应的高度
        let minColNowHeight = colNowHeight[0]
        var minCol = 0;//   最小总高度的列
        for (let i = 0; i < colNowHeight.length; i++) {
            if (colNowHeight[i] < minColNowHeight) {
                minColNowHeight = colNowHeight[i];
                minCol = i;
            }
        }
        $this.css({
            left: itemW * minCol,
            top: minColNowHeight
        });
        colNowHeight[minCol] += $this.outerHeight(true);
    });
}
$(function () {
   waterfall();
})
</script>

<style lang='scss' scope>
.uploadInfo {
    img { vertical-align: middle; }
    ul li { display: inline-block; vertical-align: middle;}
}
.piclist{margin:auto;position:relative}.piclist li{width:180px;padding:10px;border-radius:5px;box-shadow:0 0 4px #ddd;position:absolute}.piclist img{display:block;width:180px}.piclist span{display:block;text-align:center;height:26px;overflow:hidden;line-height:26px}

.piclist {
    margin: auto;position: relative;
    li {width: 180px;padding: 10px;border-radius: 5px;box-shadow: 0 0 4px #ddd;position: absolute;}
    img {display: block;width: 180px;}
    span {display: block;text-align: center;height: 26px;overflow: hidden;line-height: 26px;}
}

	.wrap{
		position: relative;
		margin: 0 auto 14px;
	}
	.item{
	}
	.h1{
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
	}
    .likes {
		position: relative;
        h1 {
            font-size: 50px
        }
    }
</style>