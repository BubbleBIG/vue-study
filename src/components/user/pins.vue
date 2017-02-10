<template>
    <div class="user-routers">
        <div class="boards pins">
            <div v-for="pinBtn in savepinbtn" class="pinsItemsClass pinsItem">
                <div class="pinsCard" style="height: 284px">
                    <a class="AddPinRep ModalTrigger" style="height: 284px"
                    @click="dialogVisible2 = true">
                        <i></i>
                        <span>{{ pinBtn.name }}</span>
                    </a>
                </div>
            </div>
            <div v-for="pin in pins" class="pinsItemsClass pinsItem" align="center">
                <div class="">
                <div class="pinsCard pinsCard2 gradient-wrap">
                    <div class="">
                        <!--{{ pin.id }}-->
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
                        <div class="creditTitle">first</div>
                    </a>
                </div>
            </div>
            <el-dialog title="Upload a Pin" v-model="dialogVisible2">
                <!--<el-upload
                name="photo"
                action="http://localhost:3000/test"
                :thumbnail-mode="true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :default-file-list="fileList"
                :show-upload-list="true"
                >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>-->
                <span>
                    <form name="form1" id="" class="formUploadPin">  
                        <input type="file" name="photo" id="photo" accept="image/gif,
                        image/png, image/jpeg, image/bmp, image/webp" @change="uploadOne1">
                        <!--<input type="button" name="b1" value="Upload" onclick="fsubmit()">-->
                    </form>
                </span>
            </el-dialog>
            <div id="result"></div>
            <h1 style="height:1000px"></h1>
            <!--<form name="form1" id="form1">  
                <p>name:<input type="text" name="name" ></p>  
                <p>gender:<input type="radio" name="gender" value="1">male
                <input type="radio" name="gender" value="2">female</p>  
                <p>photo:<input type="file" name="photo" id="photo"></p>  
                <p><input type="button" name="b1" value="submit" onclick="fsubmit()"></p>  
            </form>  -->
        </div>
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
            return {
                dialogVisible2: false,
                savepinbtn: [],
                pins: [],
                fileList: []
            }
        },
        created: function () {
            this.pin()
            this.getpins()
        },
        methods: {
            uploadOne1 () {
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
                        result += 'name=' + ret['name'] + '<br>';
                        result += 'gender=' + ret['gender'] + '<br>';
                        result += '<img src="' + ret['photo'] + '"width="100">';
                        $('#result').html(result);
                    } else {
                        alert('提交失敗');
                    }
                });
                        console.log('test success!')
                return false;
            },
            pin () {
                let self = this
                fetch('http://localhost:3000/savepin', {
                // fetch('http://localhost/camU/index/index/getboards', {
                    method: 'GET',
                    // mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (pin) {
                    // console.log(pins)
                    self.savepinbtn = pin
                })
            },
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
            },
            handleRemove (file, fileList) {
                console.log(file, fileList);
            },
            handlePreview (fileList) {
                let self = this
                console.log(fileList.url)
            }
        }
    }
    
window.addEventListener('load', function () {
    Grade(document.querySelectorAll('.gradient-wrap'))
})
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pins
        margin: 10px auto 14px
        position: relative
        display: flex
        flex-flow: row wrap
        align-content: flex-start
        .pinsItemsClass
            width: 236px
            margin-left: 2px
            margin-top: 10px
            display: inline-block
            overflow: hidden
            position: relative
            vertical-align: middle
            img
                width: 236px
                height: 236px
                object-fit: cover
                /*height: auto*/
                vertical-align: middle
            .pinsCard
                height: 236px
        .pinsCard2
            width:200px
            padding:0 18px
            border-radius:8px
            background-color: #e5e5e5
        .pinsItem
            padding: 10px
            border-radius: 8px
            .AddPinRep
                background: transparent
                background-color: #fff
                border: 1px solid #eee
                border-radius: 6px
                -webkit-box-sizing: border-box
                box-sizing: border-box
                color: #888
                cursor: pointer
                font-size: 15px
                position: relative
                text-align: center
                text-shadow: 0 1px 1px #fff
                width: 236px
                height: 236px
                i::before
                    width: 40px
                    height: 40px
                    background: url(../../common/images/w.png) -124px -110px no-repeat
                    display: inline-block
                    font: 0 / 0 serif
                    text-shadow: none
                    color: transparent
                    content: " "
                i
                    position: absolute
                    bottom: 50%
                    -webkit-box-shadow: 0 0 2px #fff inset
                    box-shadow: 0 0 2px #fff inset
                    height: 42px
                    left: 50%
                    margin-left: -22px
                    margin-bottom: -18px
                span
                    left: 0
                    margin-top: 18px
                    position: absolute
                    right: 0
                    font-weight: bold
                    top: 50%
                    color: #b5b5b5
            em
                display: inline-block
                margin: 3px 3px 0 0
                vertical-align: middle
                font-weight: bold
                font-style: normal
                color: #b5b5b5
            .repinCountSmall
                padding: 0 2px
            .repinIconSmall
                background: url(../../common/images/w.png)  -398px -122px no-repeat
                width: 6px
                height: 11px
            .creditTitle
                font-weight: bold
                font-size: 13px
        h1
            font-size: 50px
        & >  .pinsItemsClass:hover::after
            background: rgba(0,0,0,0.05)
            border-radius: 22px
            content: " " !important
            height: 301px
            left: 0
            opacity: 1
            pointer-events: none
            position: absolute
            top: 0
            -webkit-transform: scale(0.96)
            -ms-transform: scale(0.96)
            transform: scale(0.96)
            width: 100%
            z-index: 3
            margin: -10px
            padding: 10px
        & >  .item:hover::after
            background: rgba(0,0,0,0.05)
            border-radius: 22px
            content: " " !important
            height: 100%
            left: 0
            opacity: 1
            pointer-events: none
            position: absolute
            top: 0
            -webkit-transform: scale(0.96)
            -ms-transform: scale(0.96)
            transform: scale(0.96)
            width: 100%
            z-index: 3
            margin: -10px
            padding: 10px

    .item
        border-radius: 8px
        position: absolute
        width: 236px
        margin-left: 2px
        margin-top: 10px
        transition: all 0.5s
        overflow: hidden
@media (min-width: 2079px)
    .pins
        width: 2079px
@media (max-width: 2079px) and (min-width: 1820px)
    .pins
        width: 1820px
@media (max-width: 1819px) and (min-width: 1560px)
    .pins
        width: 1560px
@media (max-width: 1559px) and (min-width: 1300px)
    .pins
        width: 1300px
@media (max-width: 1299px) and (min-width: 1040px)
    .pins
        width: 1040px
@media (max-width: 1039px)
    .pins
        width: 780px
.formUploadPin
    input
        padding: 1px
        border: 1px solid #c5c5c5
</style>