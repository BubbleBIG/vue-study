<template>
    <div class="user-routers">
        <v-header></v-header>
        <div class="boards">
            <div class="boardsItems flex-wrap">
                <div v-for="bo in bos" v-if="bo.secret === 'false'" class="ProfileBoardCard" style="margin:20px 0;padding: 0 12px">
                    <div class="createCard" type="text">
                        <router-link :to="'/' + bo.name + '/' + bo.bname + '/'">
                        <div style="position: relative;width:301px;height:200px;">
                            <div class="createRep" style="border-raduis:9px;overflow:hidden;">
                                <ul v-if="bo.cover">
                                <li>
                                    <img :src="bo.cover" width="100%" style="width: 199px;
                                    height: 200px;object-fit: cover;max-width:100%;border:1px solid #eee">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in bo.img" style="width:98px;height:99px;padding:1px 1px;">
                                    <img :src="http+'/camU'+item.url" style="width:100px;height:100px;object-fit: cover;">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in 2-bo.img.length" style="width:98px;height:99px;padding:1px 1px;">
                                    <div style="width:100%;height:100%;border:1px solid #eee"></div>
                                </li>
                                </ul>
                                <ul v-else>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in bo.img" style="width:98px;height:99px;padding:1px 1px;">
                                    <img :src="http+'/camU'+item.url" style="width:99px;height:100px;object-fit: cover;">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-for="item in 6-bo.img.length" style="width:98px;height:99px;padding:1px 1px;">
                                    <div style="width:100%;height:100%;border:1px solid #eee"></div>
                                </li>
                                </ul>
                            </div>
                        </div>
                        </router-link>
                        <div class="px1 py2">
                            <div v-if="bo.invited" style="position:relative;">
                                <div style="width:60px;height:60px;border-radius:50%;overflow:hidden;
                                background:#eff;border:3px solid #eff;position:absolute;left:4%;bottom:90%;">
                                <div style="position:relative;margin-right:1px;width:30px;transform: translateX(0px) translateY(0px);">
                                <div style="overflow:hidden;"><div style="position:"><img v-if="bo.uimg" :src="http+'/camU'+bo.uimg" width="60" height="60" style="left:-15px;">
                                <img v-else src="../../common/images/person.png" width="60" height="60" style="margin-left:-30px;"></div></div>
                                </div>
                                <div style="position:absolute;margin-left:2px;top:0;width:30px;transform: translateX(31px) translateY(0px);">
                                    <div style="overflow:hidden;"><div style="position:relative;"><img src="../../common/images/person.png" width="60" height="60" style="margin-left:-30px;"></div></div>
                                </div>
                                </div>
                            </div>
                            <div class="pz3" style="color:#555">{{ bo.bname }}</div>
                            <div class="pz3 pz4">{{ bo.count }} Pins</div>
                            <div v-if="parseInt(arrCookie)===parseInt(bo.uid)">
                            <button class="pz3 pz5" style="color: #555;" @click="changeBoard(bo.bid),
                                dialogFormVisible1 = true">Edit</button></div>
                            <div v-else>
                            <button class="pz3 pz5" style="color: #555;" @click="">Follow</button></div>
                            <!--<div v-if="bo.invited===1">-->
                            <!--<button class="pz3 pz5" style="color: #555;width:80px;" @click="changeBoard(bo.bid),
                                dialogFormVisible1 = true">Edit</button></div>-->
                        </div>
                    </div>
                </div>
                <div v-for="bo in bos" v-if="bo.secret === 'true'&&bo.invited===1||bo.uid===parseInt(arrCookie)" class="ProfileBoardCard" style="margin:20px 0;padding: 0 12px">
                    <div class="createCard" type="text">
                        <router-link :to="'/' + bo.name + '/' + bo.bname + '/'">
                        <div style="position: relative;width:301px;height:200px;">
                            <div class="createRep" style="border-raduis:9px;overflow:hidden;">
                                <ul v-if="bo.cover">
                                <li>
                                    <img :src="bo.cover" width="100%" style="width: 199px;
                                    height: 200px;object-fit: cover;max-width:100%;border:1px solid #eee">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in bo.img" style="width:98px;height:99px;padding:1px 1px;">
                                    <img :src="http+'/camU'+item.url" style="width:100px;height:100px;object-fit: cover;">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in 2-bo.img.length" style="width:98px;height:99px;padding:1px 1px;">
                                    <div style="width:100%;height:100%;border:1px solid #eee"></div>
                                </li>
                                </ul>
                                <ul v-else>
                                <!--{{ bo.img.length }}-->
                                <li v-if="bo.count !== 0" v-for="item in bo.img" style="width:98px;height:99px;padding:1px 1px;">
                                    <img :src="http+'/camU'+item.url" style="width:99px;height:100px;object-fit: cover;">
                                </li>
                                <!--{{ bo.img.length }}-->
                                <li v-for="item in 6-bo.img.length" style="width:98px;height:99px;padding:1px 1px;">
                                    <div style="width:100%;height:100%;border:1px solid #eee"></div>
                                </li>
                                </ul>
                            </div>
                        </div>
                        </router-link>
                        <div class="px1 py2">
                            <div v-if="bo.invited" style="position:relative;">
                                <div style="width:60px;height:60px;border-radius:50%;overflow:hidden;
                                background:#eff;border:3px solid #eff;position:absolute;left:4%;bottom:90%;">
                                <div style="position:relative;margin-right:1px;width:30px;transform: translateX(0px) translateY(0px);">
                                <div style="overflow:hidden;"><div style="position:"><img v-if="bo.uimg" :src="http+'/camU'+bo.uimg" width="60" height="60" style="left:-15px;">
                                <img v-else src="../../common/images/person.png" width="60" height="60" style="margin-left:-30px;"></div></div>
                                </div>
                                <div style="position:absolute;margin-left:2px;top:0;width:30px;transform: translateX(31px) translateY(0px);">
                                    <div style="overflow:hidden;"><div style="position:relative;"><img src="../../common/images/person.png" width="60" height="60" style="margin-left:-30px;"></div></div>
                                </div>
                                </div>
                            </div>
                            <div class="pz3" style="color:#555">{{ bo.bname }}</div>
                            <div class="pz3 pz4">{{ bo.count }} Pins</div>
                            <div v-if="parseInt(arrCookie)===parseInt(bo.uid)||bo.invited===1">
                            <button class="pz3 pz5" style="color: #555;" @click="changeBoard(bo.bid),
                                dialogFormVisible1 = true">Edit</button></div>
                            <div v-else>
                            <button class="pz3 pz5" style="color: #555;" @click="">Follow</button></div>
                            <div v-if="bo.invited===1">
                            <!--<button class="pz3 pz5" style="color: #555;width:80px;" @click="changeBoard(bo.bid),
                                dialogFormVisible1 = true">Edit</button></div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both;">
            </div>
        </div>
        <el-dialog :title="'Edit your board : ' + form1.bname" v-model="dialogFormVisible1" top="18%">
            <el-form :model="form1" :rules="rules1" ref="form1" label-position="left">
                <div v-if="parseInt(arrCookie)===parseInt(form1.uid)">
                <el-form-item label="Name" prop="bname" :label-width="formLabelWidth">
                <el-input v-model="form1.bname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Description" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form1.bdescription" placeholder="What's yours board about?"
                auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Category" :label-width="formLabelWidth">
                    <el-select v-model="form1.category" placeholder="What kind of board is it?" clearable>
                        <el-option
                        v-for="item in options"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Cover" :label-width="formLabelWidth">
                    <el-button v-if="form1.count > 0"
                    @click="dialogVisible2 = true,
                    changeCover(form1.bid)">Change</el-button>
                    <el-button v-else
                    type="primary" :disabled="true">Change</el-button>
                </el-form-item>
                <el-form-item label="Secret" :label-width="formLabelWidth">
                    <el-switch
                    v-model="form1.secret"
                    on-text="Yes"
                    off-text="No"
                    on-color="#13ce66"
                    off-color="#ff4949">
                    </el-switch>
                <!--<el-radio-group v-model="form1.secret">
                    <el-radio-button label="Yes"></el-radio-button>
                    <el-radio-button label="No"></el-radio-button>>
                </el-radio-group>-->
                </el-form-item>
                </div>
                <div>
                <el-form-item label="Collaborators" :label-width="formLabelWidth">
                    <el-input auto-complete="off" style="width:350px" placeholder="Name"></el-input>
                    <el-button>Invite</el-button>
                <!--<el-radio-group v-model="form1.secret">
                    <el-radio-button label="Yes"></el-radio-button>
                    <el-radio-button label="No"></el-radio-button>>
                </el-radio-group>-->
                </el-form-item>
                <hr>
                <div class="dialog-footer">
                    <el-button v-if="parseInt(arrCookie)===parseInt(form1.uid)" class="pz3" :plain="true" type="danger" @click="dialogVisible = true" style="float:left">Delete board</el-button>
                    <el-button class="pz3" @click="dialogFormVisible1 = false">Cancel</el-button>
                    <el-button v-if="parseInt(arrCookie)===parseInt(form1.uid)" class="pz3" style="color: #fff" type="primary" @click="saveChange('form1')">Save</el-button>
                    <el-button v-else class="pz3" style="color: #fff" type="primary" @click="dialogFormVisible1 = false">Done</el-button>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog :title="'Change Board Cover / ' + form1.bname" v-model="dialogVisible2" top="20%">
            <!--<swiper :options="swiperOption">
            <swiper-slide v-for="slide in pinss">
            <el-radio-group v-model="radio3" fill="#FF4949">
                 <el-radio-button :label="slide.id"
                 :style="{backgroundImage:'url(' + slide.url + ')'}">
                 </el-radio-button>
            </el-radio-group>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            </swiper>-->
                <!--<el-carousel type="card" indicator-position="none"
                height="300px" :autoplay="false">-->
                <div>
                    <div style="width: 301px;height:200px;margin-left:120px;">
                        <el-button v-if="pinss.status > 1" size="large" type="text" icon="arrow-left" style="position: absolute;
                        top:40%;left:120px;" @click="coverImg(0)"></el-button>
                        <el-button v-else  :disabled="true" size="large" type="text" icon="arrow-left" style="position: absolute;
                        top:40%;left:120px;"></el-button>
                        <el-button v-if="pinss.status > 0 && pinss.status < 3" size="large" type="text" icon="arrow-right" style="position: absolute;
                        top:40%;right: 120px" @click="coverImg(1)"></el-button>
                        <el-button v-else  :disabled="true" size="large" type="text" icon="arrow-right" style="position: absolute;
                        top:40%;right: 120px"></el-button>
                        <img :src="'' + pinss.url" width="100%" style="width: 301px;
                        height: 200px;object-fit: cover;max-width:100%;border:1px solid #eee">
                    </div>
                </div>
                <!--</el-carousel>-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">Cancel</el-button>
                <el-button type="primary" @click="saveCover(pinss)">Save Changes</el-button>
            </span>
        </el-dialog>
        <el-dialog title="Are you sure?" v-model="dialogVisible" top="35%">
            <span>Once you delete a board and all its Pins, you can't undo it!</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="
                    delBoard(form1.bid)">Delete board</el-button>
            </span>
        </el-dialog>
        <div style="height:500px;"></div>
    </div>
</template>

<script>
import header from '../header/header.vue'
    export default {
        components: {
        'v-header': header
        },
        data () {
            var checkName = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('board is not NULL'));
                }
                setTimeout(() => {
                    if (value === 'search' || value === 'boards' || value === 'pins' || value === 'likes' || value === 'pin') {
                        callback(new Error('forbidden board name!'));
                    } else {
                        callback();
                    }
                }, 500);
            }
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            return {
                http: 'http://localhost',
                userName: arrName[1],
                arrCookie: arrCookie[1],
                radio1: false,
                radio3: 1,
                visible2: false,
                radio2: true,
                dialogVisible: false,
                dialogVisible2: false,
                dialogFormVisible1: false,
                form1: {
                    // bname: ''
                },
                formLabelWidth: '120px',
                dialogFormVisible2: false,
                dialogFV: false,
                form2: {
                    name: ''
                },
                rules2: {
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                rules1: {
                    bname: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                options: '',
                value: '',
                boardchange: '',
                bos: [],
                // swiperOption: {
                //     pagination: '.swiper-pagination',
                //     effect: 'cube',
                //     // effect: 'flip',
                //     grabCursor: true,
                //     mousewheelControl: true,
                //     nextButton: '.swiper-button-next',
                //     prevButton: '.swiper-button-prev'
                // },
                pinss: {},
                saveCovertag: 0,
                name: ''
            }
        },
        created: function () {
            this.getBoards()
            // this.delb()
        },
        methods: {
            getBoards () {
                let self = this
                // let array = self.$route.params
                // console.log(array)
                let formData = new FormData()
                formData.append("word", self.$route.params.name);
                formData.append("id", self.arrCookie);
                // fetch(':3000/todos', {
                fetch(self.http + '/camU/index/index/getsearchboards', {
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
                            // } else {
                            //     self.$message.error('the page not found!')
                            //     // setTimeout(() => {
                            //         // self.$router.replace('/404/')
                            //     // }, 2000)
                            // }
                        // })
                    // }
                    // self.$message.error('the page not found!')
                    // setTimeout(() => {
                    //     self.$router.replace('/404/')
                    // }, 2000)
                // }
                // else {
                //     let formData1 = new FormData()
                //     formData1.append('name', self.$route.params.username)
                //     fetch(self.http + '/camU/index/index/checkuser', {
                //         method: 'POST',
                //         body: formData1
                //         // mode: 'no-cors',
                //         // headers: { 'Content-Type': 'application/json' },
                //         // credentials: 'same-origin'
                //     })
                //     .then(res => res.json())
                //     .then(function (res) {
                //         // console.log(bos)
                //         self.name = res
                //     })
                //     let formData = new FormData()
                //     formData.append("id", self.arrCookie);
                //     // fetch(':3000/todos', {
                //     fetch(self.http + '/camU/index/index/getboards', {
                //         method: 'POST',
                //         body: formData
                //         // mode: 'no-cors',
                //         // headers: { 'Content-Type': 'application/json' },
                //         // credentials: 'same-origin'
                //     })
                //     .then(res => res.json())
                //     .then(function (bos) {
                //         // console.log(bos)
                //         self.bos = bos
                //     })
                // }
            },
            changeBoard (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch(self.http + '/camU/index/index/getboard', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    // debugger
                       if (res.secret === 'false') {
                           res.secret = false
                       } else {
                           res.secret = true
                       }
                    self.form1 = res
                    // console.log(e)
                    // console.log(res)
                // fetch(':3000/todos/' + 1, {
                //     method: 'GET'
                // })
                // .then(res => res.json())
                // .then(function (res) {
                //     self.form1 = res
                    // debugger
                    // console.log(self.form1.bname)
                // if (res.status >= 200) {
                //     for (var i = self.todos.length - 1; i >= 0; i--) {
                //     if (self.todos[i].id === e) {
                //         console.log(i)
                //         // self.todos.splice(i,1)
                //     }
                //     }
                // }
                })
                fetch(self.http + '/camU/index/index/getcategory', {
                    method: 'POST'
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.options = res
                })
            },
            changeCover (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch(self.http + '/camU/index/index/changecover', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getpins', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    pins.url = self.http + "/camU" + pins.url
                    self.pinss = pins
                })
                console.log(e + 'hhhh')
            },
            coverImg (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("iid", self.pinss.iid)
                formData.append("bid", self.pinss.bid)
                formData.append('status', e)
                fetch(self.http + '/camU/index/index/coverimg', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getpins', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    pins.url = self.http + "/camU" + pins.url
                    self.pinss = pins
                })
                console.log(this.pinss.bid)
            },
            saveCover (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("url", self.pinss.url)
                formData.append("bid", self.pinss.bid)
                fetch(self.http + '/camU/index/index/savecover', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.$message.success('success!')
                        self.saveCovertag += 1
                        self.dialogFormVisible1 = false
                        self.dialogVisible2 = false
                    } else {
                        self.$message.error('update error!')
                    }
                })
            },
            saveChange (formName) {
                let self = this
                // var bname = this.form1.bname.trim()
                // var description = this.form1.description
                // var secret = this.form1.secret
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", self.form1.bid)
                formData.append("bname", this.form1.bname.trim())
                formData.append('description', this.form1.bdescription)
                formData.append('category', this.form1.category)
                formData.append('secret', this.form1.secret)
                this.$refs[formName].validate((valid) => {
                if (!valid) {
                    // self.$message.error("name is used or can't be used")
                } else {
                    fetch(self.http + '/camU/index/index/saveboardchange', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    // fetch(':3000/todos', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ bname, secret }),
                    //     headers: { 'Content-Type': 'application/json' },
                    //     credentials: 'same-origin'
                    // })
                    // .then(res => res.json())
                    .then(function (response) {
                        if (response.status === 1 && response.info === 1) {
                            // self.bos.reverse() // array倒序
                            // // self.bos.unshift(response)
                            // self.bos.push(response)
                            // self.bos.reverse()
                            self.$message.success('success!')
                            self.dialogFormVisible1 = false
                            self.boardchange += 1
                        } else if (response.status === 1 && response.info === 0) {
                            // self.bos.reverse() // array倒序
                            // // self.bos.unshift(response)
                            // self.bos.push(response)
                            // self.bos.reverse()
                            self.$message.success('you have change nothing!')
                            self.dialogFormVisible1 = false
                        } else {
                            self.$message.error("board name is used by yourself")
                        }
                    })
                }
                })
            },
            // delb (e) {
            //     let self = this
            //     fetch(':3000/todos/' + e, {
            //         method: 'GET'
            //     })
            //     .then(res => res.json())
            //     .then(function (res) {
            //         self.form1 = res
            //         // console.log(self.form1.bname)
            //     // if (res.status >= 200) {
            //     //     for (var i = self.todos.length - 1; i >= 0; i--) {
            //     //     if (self.todos[i].id === e) {
            //     //         console.log(i)
            //     //         // self.todos.splice(i,1)
            //     //     }
            //     //     }
            //     // }
            //     })
            //     console.log(e)
            // },
            // remove (id) {
            //     // console.log(id)
            //     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     })
            //     .then(() => {
            //             // delb({ id })
            //             // .then(() => {
            //         this.$message({
            //             type: 'success',
            //             message: '删除成功!'
            //         })
            //             // })
            //     }).catch(() => {
            //     this.$message({
            //         type: 'info',
            //         message: '已取消删除'
            //     })
            //     })
            // }
            delBoard (e) {
                let self = this
                // for (let i = 0; i < this.bos.length; i++) {
                // // for (let i = self.bos.length; i > 0; i--) {
                //     if (this.bos[i].bid === e) {
                //         this.bos.splice(i, 1) // 根据下标删除当前对应的元素
                //         console.log(self.bos.splice(i, 1))
                //         console.log(i)
                //     }
                // }
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch(self.http + '/camU/index/index/delboard', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/todos/' + e, {
                //     method: 'DELETE'
                // })
                // .then(res => res.json())
                .then(function (res) {
                    // self.form1 = res
                    if (res.status) {
                        let length = self.bos.length
                        for (let i = 0; i < length; i++) {
                            if (self.bos[i].bid === e) {
                                // self.bos.splice(i, 1) // 根据下标删除当前对应的元素
                                // console.log(i)
                            }
                        }
                        self.boardchange += 1
                        self.$message.success('delete success！')
                    }
                    // debugger
                    self.dialogVisible = false
                    self.dialogFormVisible1 = false
                    // self.bos.splice(e - 1, 1)
                    // self.$router.push('/Bubble/boards');
                    // console.log(self.form1.bname)
                // if (res.status >= 200) {
                    // for (let i = 0; i < this.bos.length; i++) {
                    //     if (self.todos[i].id === e) {
                    //         self.todos.splice(i, 1)
                    //     }
                    // }
                // }
                })
                // console.log(e)
            }
        },
        watch: {
        // 如果路由有变化，会再次执行该方法
        // "$route": "fetchDate"
            boardchange: 'getBoards',
            saveCovertag: 'getBoards',
            "$route": 'getBoards'
        },
        mounted() {
            document.title = this.$route.path   // 改变网页title
            // let a = this.$route.params
            // console.log(a)
            // console.log(this.arrCookie)
            // setInterval(() => {
            // // console.log('simulate async data')
            // let swiperSlides = this.pinss
            // if (swiperSlides.length < 2) swiperSlides.push(swiperSlides.length + 1)
            // }, 3000)
        }
    }
</script>

<style lang='scss'>
    .pz3 {
        font-size: 18px;
        font-weight: bold;
        color: #bcbcbc;
        letter-spacing: -0.25px;
        line-height: 18px;
        word-spacing: 0;
    }
    .boards {
        margin: 20px auto;
        .boardsItems {
            margin: 0 auto;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
        }
        .flex-wrap {
            flex-wrap: wrap;
            .ProfileBoardCard {
                /*float: left*/
                .createCard {
                    .createRep {
                        width: 301px;
                        height: 200px;
                        background-color: #e4e4e4;
                        border-radius: 8px;
                        i {
                            margin: auto;
                            vertical-align: middle;
                        }
                        i::before {
                            width: 56px;
                            height: 56px;
                            background: url(../../common/images/w.png) -62px -234px no-repeat;
                            display: inline-block;
                            font: 0 / 0 serif;
                            text-shadow: none;
                            color: transparent;
                            content: " ";
                        }
                    }
                    .px1 {
                        padding: 12px 8px;
                        text-align: left;
                        .pz4 {
                            font-size: 12px;
                        }
                    }
                }
                .pz5 {
                    opacity: 0;
                    float: right;
                    background-color: #eee;
                    padding: 6px 8px;
                    border-radius: 4px;
                    margin-top: -37px;
                }
            }
        }
    }
    .boardsItems {
        & > .ProfileBoardCard:hover::before {
            position: absolute;
        }
        & > .ProfileBoardCard:hover::before {
            background: rgba(0,0,0,0.05);
            border-radius: 8px;
            content: " " !important;
            opacity: 1;
            width: 301px;
            height: 224px;
            pointer-events: none;
            -webkit-transform: scale(0.96);
            -ms-transform: scale(0.96);
            transform: scale(0.96);
            z-index: 3;
            margin: -14px -18px;
            padding: 28px 18px;
        }
        & > .ProfileBoardCard:hover .pz5 {
            opacity: 1;
        }
        & > .ProfileBoardCard {
            .pz5:hover {
                background: #d7d7d7;
            }
        }
    }
    .createRep {
        ul li {
            // display: inline-block;
            float: left;
        }
    }
    .el-dialog--small {
        width: 580px;
    }
    .dialog-footer {
        text-align: right;
    }
    .el-dialog__header span {
        display: inline;
        h1 {
            font-size: 50px;
        }
    }
    .secretBoard {
        background: #f7f7f7;
        padding-top: 20px;
    }
    .sBoardsHeader {
        width: 100%;
        opacity: 0.95;
        font-size: 14px;
        .title {
            line-height: 16px;
            font-weight: bold;
        }
        .text {
            font-weight: bold;
            color: #bbb;
        }
    }
@media (min-width: 2275px) {
    .boardsItems {
        width: 2275px;
    }
}
@media (max-width: 2274px) and (min-width: 1950px) {
    .boardsItems {
        width: 1950px;
    }
}
@media (max-width: 1949px) and (min-width: 1625px) {
    .boardsItems {
        width: 1625px;
    }
}
@media (max-width: 1624px) and (min-width: 1300px) {
    .boardsItems {
        width: 1300px;
    }
}
@media (max-width: 1299px) and (min-width: 975px) {
    .boardsItems {
        width: 975px;
    }
}
@media (max-width: 974px) and (min-width: 650px) {
    .boardsItems {
            width: 650px;
    }
}
@media (max-width: 650px) {
    .boardsItems {
            width: 650px;
    }
}
.swiper-container {
    width: 300px!important;
    height: 300px!important;
    label {
        width: 300px;
        height: 300px;
        background-position: 50%!important;
        background-size: cover!important;
    }
}
</style>
