<template>
    <div class="user-routers">
        <div class="boards pins">
            <!--<div v-for="pinBtn in savepinbtn" class="pinsItemsClass pinsItem">-->
            <div class="pinsItemsClass pinsItem">
                <div class="pinsCard" style="height: 284px">
                    <a class="AddPinRep ModalTrigger" style="height: 284px"
                    @click="dialogVisible3 = true">
                        <i></i>
                        <span>save Pin</span>
                        <!--<span>{{ pinBtn.name }}</span>-->
                    </a>
                </div>
            </div>
            <div v-for="pin in pins" class="pinsItemsClass pinsItem" align="center">
                <div class="">
                <div class="pinsCard pinsCard2 gradient-wrap">
                    <div class="">
                        <!--{{ pin.id }}-->
                        <!--<img :src="'/camU/public' + pin.url" width="100%" style="max-width: 100%"/>-->
                        <img :src="pin.url" width="100%" style="max-width: 100%"/>
                    </div>
                </div>
                </div>
                <div class="pinMetaWrapper" align="right">
                    <a href="###"><em class="repinIconSmall"></em><em class="repinCountSmall">111111</em></a>
                </div>
                <div style="height: 30px" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8">
                        <div class="creditName">Saved to</div>
                        <div class="creditTitle">{{ pin.bname }}</div>
                    </a>
                </div>
            </div>
        </div>
        <el-dialog title="Save from" v-model="dialogVisible3" class="pin-tiny" size="tiny">
            <div>
                <el-row style="width:320px">
                <el-col :span="12"><button class="grid-content bg-purple"
                @click="dialogVisible4 = true,dialogVisible3 = false">
                    <em></em>
                    <span>The web</span>
                    </button>
                </el-col>
                <el-col :span="12"><button class="grid-content bg-purple-light"
                @click="dialogVisible2 = true,dialogVisible3 = false">
                    <em></em>
                    <span>Your device</span>
                    </button>
                </el-col>
                </el-row>
                <!--<el-button>The web</el-button>
                <button>The web</button>-->
            </div>
        </el-dialog>
        <el-dialog title="Upload a Pin" v-model="dialogVisible2" size="tiny">
            <el-upload name="photo"
            style="padding: 18px;background:#ededed;"
            :action="http + '/camU/index/index/uploadpintmp'"
            :on-change="handleResponse"
            :on-remove="handleRemove"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false">
            <el-button size="small" type="primary">Choose image</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png/gif文件，且不超过2M</div>
            </el-upload>
            <!--<el-upload
            action="/camU/index/index/uploadPins.html"
            list-type="picture-card" name="photo"
            :on-change="handleResponse"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>-->
            <!--<span>
                <form name="form1" id="form12" class="formUploadPin">  
                    <input type="file" name="photo" id="photo" accept="image/gif,
                    image/png, image/jpeg, image/bmp, image/webp" @change="uploadOne1">
                </form>
            </span>-->
        </el-dialog>
        <!--<el-dialog v-model="dialogImgVisible">
            <div>
                <img width="100%" :src="dialogImageUrl" alt="">
            </div>
        </el-dialog>-->
        <el-dialog title="Save from a website" v-model="dialogVisible4">
            <el-form :model="formInline" :rules="rules3" ref="formInline">
            <el-form-item prop="url">
                <el-input v-model="formInline.url" placeholder="http://..." auto-complete="off"
                style="width:464px;margin-right:10px"></el-input>
                <el-button v-if="!formInline.url" type="primary" :disabled="true">Next</el-button>
                <el-button v-else type="info" @click="urlForm('formInline')">Next</el-button>
            </el-form-item>
            </el-form>
            <!--<el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="info">信息按钮</el-button>-->
        </el-dialog>
        <el-dialog title="" v-model="dialogVisible5">
            <el-form>
                <el-row>
                <el-col :span="12" style="border-right: 1px solid #efefef;background-color:#fdfdfd">
                    <div style="width:236px;min-height: 410px;max-height:480px;margin:auto;padding-top:2px">
                        <div style="margin-bottom: 5px;">
                        <img :src="webUrl" width="100%" id="imgData" style="border-radius: 4px;">
                        </div>
                        <el-input v-model="ImageUrl" style="display:none"></el-input>
                        <el-input v-model="iswebsite" style="display:none"></el-input>
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
                                                <span style="display:inline">{{ bo.bname }}</span>
                                                <svg v-if="bo.secret === 'true'" class="_2X6AN" style="right:20px;" viewBox="0 0 16 16"><path d="M12.8 6.791h-.04V4.566C12.76 2.048 10.625 0 8 0S3.24 2.048 
                                                3.24 4.566v2.225H3.2A5.577 5.577 0 0 0 2 10.245C2 13.423 4.686 16 8 16s6-2.577 6-5.755a5.579 5.579 0 0 0-1.2-3.454zm-2.36 
                                                0H5.56V4.566c0-1.29 1.095-2.34 2.44-2.34s2.44 1.05 2.44 2.34v2.225z" fill-rule="evenodd"></path></svg>
                                                <svg v-if="parseInt(bo.uid)!==parseInt(arrCookie)" class="_2X6AN" viewBox="0 0 16 16"><path d="M9.143 10.2A4 4 0 0 1 16 13v1H0v-1a5 5 0 0 1 9.143-2.8zM12
                                                8a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 8zM5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill-rule="evenodd"></path></svg>
                                                </el-button>
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
        <div id="result"></div>
        <h1 style="height:30px"></h1>
            <!--<form name="form1" id="form1">  
                <p>name:<input type="text" name="name" ></p>  
                <p>gender:<input type="radio" name="gender" value="1">male
                <input type="radio" name="gender" value="2">female</p>  
                <p>photo:<input type="file" name="photo" id="photo"></p>  
                <p><input type="button" name="b1" value="submit" onclick="fsubmit()"></p>  
            </form>  -->
    </div>
</template>
<script src="/static/js/grade.js"></script>
<script>
    // import user from './user.vue'
    export default {
        components: {
        // 'v-user': user
        },
        data () {
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            var checkUrl = (rule, value, callback) => {
                // var ImgObj = new Image()
                // ImgObj.src = value
                // if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
                //     callback();
                // } else {
                //     callback(new Error('请输入图片链接'));
                // }
                // value = value.match(/http:\/\/.+/)
                if (value === null) {
                callback(new Error('请输入图片链接'));
                } else {
                callback();
                }
            }
            return {
                http: 'http://localhost',
                textarea: '',
                input2: '',
                arrCookie: arrCookie[1],
                cName: arrName[1],
                dialogVisible: false,
                dialogVisible2: false,
                dialogVisible3: false,
                dialogVisible4: false,
                dialogVisible5: false,
                savepinbtn: [],
                pins: [],
                bos: [],
                dialogImageUrl: '',
                ImageUrl: '',
                webUrl: '',
                iswebsite: '',
                dialogImgVisible: false,
                formInline: {
                    url: ''
                },
                rules3: {
                    url: [
                        { validator: checkUrl, trigger: 'blur' }
                    ]
                }
            }
        },
        created: function () {
            this.pin()
            this.getpins()
        },
        methods: {
            // uploadOne1 () {
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
            //             result += 'name=' + ret['name'] + '<br>';
            //             result += 'gender=' + ret['gender'] + '<br>';
            //             result += '<img src="' + ret['photo'] + '"width="100">';
            //             $('#result').html(result);
            //         } else {
            //             alert('提交失敗');
            //         }
            //     });
            //             console.log('test success!')
            //     return false;
            // },
            pin () {
                // let self = this
                // fetch(':3000/savepin', {
                // // fetch('/camU/index/index/getboards', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                // .then(function (pin) {
                //     // console.log(pins)
                //     self.savepinbtn = pin
                // })
            },
            getpins () {
                let self = this
                let array = self.$route.path.split("/")
                if (self.$route.params.username !== self.cName && array[2] === 'pins') {
                    self.$message.error('the page not found!')
                    setTimeout(() => {
                        self.$router.replace('/404/')
                    }, 2000)
                }
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
                // // fetch('/camU/index/index/getpins', {
                //     method: 'GET'
                //     // mode: 'no-cors',
                //     // headers: { 'Content-Type': 'application/json' },
                //     // credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    let length = pins.length
                    for (let i = 0; i < length; i++) {
                        if (pins[i].iswebsite === 0) {
                            pins[i].url = self.http + "/camu" + pins[i].url
                            // console.log(pins)
                        }
                    }
                    // debugger
                    // console.log(pins)
                    self.pins = pins
                })
            },
            handleResponse(file, fileList) {
                let self = this
                if (file.response.status === 1) {
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
                this.webUrl = file.url
                this.ImageUrl = file.response.url
                this.iswebsite = 0
                this.dialogVisible5 = true
                this.dialogVisible2 = false
                } else {
                    console.log('error')
                }
                console.log(file)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isJPG1 = file.type === 'image/png';
                const isJPG2 = file.type === 'image/gif';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG && !isJPG1 && !isJPG2) {
                this.$message.error('上传头像图片只能是 jpeg/JPG/png/gif 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG1 || isJPG2 || isJPG && isLt2M;
            },
            // handlePictureCardPreview(file) {
            //     this.dialogImageUrl = file.url
            //     this.dialogImgVisible = true
            //     console.log(file);
            // },
            urlForm (e) {
                let self = this
                let ImgObj = new Image()
                ImgObj.src = self.formInline.url
                // debugger
                if (ImgObj.width > 0 && ImgObj.height > 0) {
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
                this.webUrl = self.formInline.url
                this.ImageUrl = self.formInline.url
                this.iswebsite = 1
                this.dialogVisible5 = true
                this.dialogVisible4 = false
                } else {
                    this.$message.error('无法识别图片,请重试或更换图片链接');
                }
                this.$refs[e].resetFields()
                // console.log('kk')
            },
            pinSave (e) {
                // console.log(e)
                // debugger
                let h = document.getElementById("imgData")
                let height = h.offsetHeight
                let self = this
                let ImgObj = new Image()
                ImgObj.src = this.webUrl
                if (height > 1111) {
                    height = 1111
                }
                if (ImgObj.width > 0 && ImgObj.height > 0) {
                    let formData = new FormData()
                    formData.append("id", self.arrCookie)
                    formData.append("height", height)
                    formData.append("url", self.ImageUrl)
                    formData.append("idescription", self.textarea)
                    formData.append("bid", e.bid)
                    formData.append("bname", e.bname)
                    formData.append("iswebsite", self.iswebsite)
                    // fetch(':3000/todos', {
                    fetch(self.http + '/camU/index/index/uploadpin', {
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
            dialogVisible5: 'getpins',
            "$route": 'getpins'
        },
        mounted: function () {
            let self = this
            document.title = this.$route.path   // 改变网页title
            let a = this.$route.params
            console.log(a)
            // window.onload = function() {
            //     Grade(document.querySelectorAll('.gradient-wrap'))
            // }
            // Grade(document.querySelectorAll('.gradient-wrap'))
        // function getViewSize () {
        // return {"width": window['innerWidth'] || document.documentElement.clientWidth,
        // "height": window['innerHeight'] || document.documentElement.clientHeight}
        // }
        // function getFullSize () {
        // let w = Math.max(document.documentElement.clientWidth, document.body.clientWidth) +

        // Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        // let h = Math.max(document.documentElement.clientHeight, document.body.clientHeight) +

        // Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        // w = Math.max(document.documentElement.scrollWidth, w);
        // h = Math.max(document.documentElement.scrollHeight, h);
        // return {"width": w, "height": h};
        // }

        // function setContainerSize () {
        //     var size = getViewSize();
        // // console.log(size["width"]);
        // // console.log(size["height"]);
        // }

        // setContainerSize();
        // waterfall();
        // window.onresize = setContainerSize;
        // window.onresize = waterfall;
        // function waterfall () {
        //     var size = getViewSize();
        //     // console.log(size["width"]);
        //     var itemW = $('.item').outerWidth(true)
        //     // windowW = $(window).width(),
        //     // var windowW = size["width"]
        //     var windowW = window.innerWidth
        //     var colNum = Math.floor(windowW / itemW)  //    有多少列
        //         // colNum = 4;
        //         var colNowHeight = [];//    存放每一列当前总的高度
        //         //  console.log(windowW);
        //     for (let i = 0; i < colNum; i++) {
        //         colNowHeight.push(0);// 初始化数组，每列当前总的高度0
        //     }
        //     //  遍历每个item选择他们的归属
        //     $('.item').each(function () {
        //         var $this = $(this);
        //         //  遍历找出高度最短的列及其对应的高度
        //         let minColNowHeight = colNowHeight[0]
        //         var minCol = 0;//   最小总高度的列
        //         for (let i = 0; i < colNowHeight.length; i++) {
        //             if (colNowHeight[i] < minColNowHeight) {
        //                 minColNowHeight = colNowHeight[i];
        //                 minCol = i;
        //             }
        //         }
        //         $this.css({
        //             left: itemW * minCol,
        //             top: minColNowHeight
        //         });
        //         colNowHeight[minCol] += $this.outerHeight(true);
        //     });
        // }
        // $(function () {
        //     waterfall();
        // })
        // waterfall();
        }
    }
    
// window.addEventListener('load', function () {
//     Grade(document.querySelectorAll('.gradient-wrap'))
// })
</script>

<style lang='scss'>
    .pins {
        margin: 10px auto 14px;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .pinsItemsClass {
            width: 236px;
            margin-left: 2px;
            margin-top: 10px;
            display: inline-block;
            overflow: hidden;
            position: relative;
            vertical-align: middle;
            img {
                width: 236px;
                height: 236px;
                object-fit: cover;
                /*height: auto*/
                vertical-align: middle;
            }
            .pinsCard {
                height: 236px;
            }
        }
        .pinsCard2 {
            width:200px;
            padding:0 18px;
            border-radius:6px;
            background-color: #e5e5e5;
        }
        .pinsItem {
            padding: 10px;
            border-radius: 8px;
            .AddPinRep {
                background: transparent;
                background-color: #fff;
                border: 1px solid #eee;
                border-radius: 6px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                color: #888;
                cursor: pointer;
                font-size: 15px;
                position: relative;
                text-align: center;
                text-shadow: 0 1px 1px #fff;
                width: 236px;
                height: 236px;
                i::before {
                    width: 40px;
                    height: 40px;
                    background: url(../../common/images/w.png) -124px -110px no-repeat;
                    display: inline-block;
                    font: 0 / 0 serif;
                    text-shadow: none;
                    color: transparent;
                    content: " ";
                }
                i {
                    position: absolute;
                    bottom: 50%;
                    -webkit-box-shadow: 0 0 2px #fff inset;
                    box-shadow: 0 0 2px #fff inset;
                    height: 42px;
                    left: 50%;
                    margin-left: -22px;
                    margin-bottom: -18px;
                }
                span {
                    left: 0;
                    margin-top: 18px;
                    position: absolute;
                    right: 0;
                    font-weight: bold;
                    top: 50%;
                    color: #b5b5b5;
                }
            }
            em {
                display: inline-block;
                margin: 3px 3px 0 0;
                vertical-align: middle;
                font-weight: bold;
                font-style: normal;
                color: #b5b5b5;
            }
            .repinCountSmall {
                padding: 0 2px;
            }
            .repinIconSmall {
                background: url(../../common/images/w.png)  -398px -122px no-repeat;
                width: 6px;
                height: 11px;
            }
            .creditTitle {
                font-weight: bold;
                font-size: 13px;
            }
        }
        h1 {
            font-size: 50px;
        }
        & >  .pinsItemsClass:hover {
            background: rgba(0,0,0,0.05);
            border-radius: 10px;

            // content: " " !important;
            // height: 301px;
            // left: 0;
            // opacity: 1;
            // pointer-events: none;
            // position: absolute;
            // top: 0;
            // -webkit-transform: scale(0.96);
            // -ms-transform: scale(0.96);
            // transform: scale(0.96);
            // width: 100%;
            z-index: 3;
            // margin: -10px;
            // padding: 10px;
        }
        & >  .item:hover::after {
            background: rgba(0,0,0,0.05);
            border-radius: 22px;
            content: " " !important;
            height: 100%;
            left: 0;
            opacity: 1;
            pointer-events: none;
            position: absolute;
            top: 0;
            -webkit-transform: scale(0.96);
            -ms-transform: scale(0.96);
            transform: scale(0.96);
            width: 100%;
            z-index: 3;
            margin: -10px;
            padding: 10px;
        }
    }

    .item {
        border-radius: 8px;
        // position: absolute;
        width: 236px;
        margin-left: 2px;
        margin-top: 10px;
        transition: all 0.5s;
        overflow: hidden;
    }
    .pin-tiny {
        .el-dialog--tiny {
            width: 320px;
            .el-dialog__body {
                padding: 14px 0px 0px 0px;
            }
        }
    }
    .grid-content {
        width: 160px;
        height: 210px;
        border-top: 2px solid #ccc;
        span {
            font-weight: bold;
            color: #666;
            margin-top: 32px;
        }
    }
    .bg-purple {
        background: #e0e0e0;
        em {
            width: 84px;
            height: 84px;
            margin: auto;
            background: url(../../common/images/m.png) -129px 0 no-repeat;
            // margin-bottom: 36px;
        }
    }
    .bg-purple:hover {
        background: #fafafa;
    }
    .bg-purple-light {
        background: #f0f0f0;
        em {
            width: 72px;
            height: 77px;
            margin: auto;
            background: url(../../common/images/m.png) 0 -97px no-repeat;
            // margin-bottom: 43px;
        }
    }
    .bg-purple-light:hover {
        background: #fafafa;
    }
    .creat-board {
        padding-top: 15px;
        margin-bottom: -10px;
        button {
            border: none;
        }
        em {
            float: right;
            margin: 14px 8px 0px;
            font-weight: bold;
        }
        i::before {
            width: 40px;
            height: 40px;
            background: url(../../common/images/w.png) -124px -110px no-repeat;
            display: inline-block;
            font: 0 / 0 serif;
            text-shadow: none;
            color: transparent;
            content: " ";
        }
    }
    .choose-board {
        max-height: 245px;
        overflow: auto;
        border-bottom: 1px solid #eee;
        .board-list {
            padding: 0px;
            vertical-align: middle;
            .board-list-btn {
                color: #666;
                vertical-align: middle;
            }
            .board-list-save {
                float: right;
                margin: 9px 2px 0px 0px;
                // visibility: hidden;
                display: none;
            }
        }
        .board-list:hover {
            background-color: #efefef;
            .board-list-save {
                display: block;
            }
        }
    }
    ._2X6AN {
        fill: #b5b5b5;
        width: 14px;
        text-align: right;
        position:absolute;
        right: 2px;
        z-index: 0;
    }
@media (min-width: 2079px) {
    .pins {
        width: 2079px;
    }
}
@media (max-width: 2079px) and (min-width: 1820px) {
    .pins {
        width: 1820px;
    }
}
@media (max-width: 1819px) and (min-width: 1560px) {
    .pins {
        width: 1560px;
    }
}
@media (max-width: 1559px) and (min-width: 1300px) {
    .pins {
        width: 1300px;
    }
}
@media (max-width: 1299px) and (min-width: 1040px) {
    .pins {
        width: 1040px;
    }
}
@media (max-width: 1039px) {
    .pins {
        width: 780px;
    }
}
.formUploadPin {
    input {
        padding: 1px;
        border: 1px solid #c5c5c5;
    }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
