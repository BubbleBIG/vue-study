<template>
    <div class="user-routers">
		<!--<el-button type="text" @click="open4">点击打开 Message Box</el-button>-->
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
        <!--<div class="wrap pins" style="width:100%">
			<div v-for="pin in pins" class="item" style="position: absolute; width: 236px;
			margin-left: 20px; margin-top: 10px; transition: all 1s; max-height: 800px;">
				<img :src="pin.url" width="100%" class=""/>
			</div>-->
			
		<!--</div>-->
        <div class="likes">
			<div class="" style="width:100%">
				<div v-for="pin in pins" class="item" style="width: 236px;">
					<img :src="pin.url" width="100%" class=""/>
				</div> 	
			</div>
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
waterfall();
$(function () {
   waterfall();
})
        },
        data () {
            return {
                pins: [],
                align: 'center',
                isBusy: false
            }
        },
        created: function () {
            this.getBoards()
        },
        methods: {
			uploadOne () {
                var data = new FormData($('#form12')[0]);
                $.ajax({
                    url: 'http://localhost/camU/index/index/uploadPins.html',
                    type: 'POST',
                    data: data,
                    dataType: 'JSON',
                    cache: false,
                    processData: false,
                    contentType: false
                }).done(function (ret) {
                    if (ret['isSuccess']) {
                        var result = '';
                        result += '<img src="' + ret['photo'] + '"width="100">';
                        $('#result').html(result);
                    } else {
                        alert('提交失敗');
                    }
                });
                        console.log('test success!')
                return false;
            },
    addFileAction (newFile, file) {
        console.log('add', file)
        let formData = new FormData()
        formData.append('file', newFile.file, newFile.file.name)
        this.$http.post('http://localhost:3000/test', formData)
        .then(res => {
            console.log('success')
        })
        .catch(console.log)
    },
    removeFileAction (item) {
        console.log('remove', item)
    },
			open4 () {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
            getBoards () {
                let self = this
                fetch('http://localhost:3000/upload', {
                // fetch('http://localhost/camU/index/index/getboards', {
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