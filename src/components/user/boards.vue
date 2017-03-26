<template>
    <div class="user-routers">
        <div class="boards">
            <div class="boardsItems flex-wrap">
                <div class="ProfileBoardCard" style="margin:20px 0;padding: 0 12px">
                    <button class="createCard" type="text" @click="dialogFormVisible2 = true">
                        <div style="position: relative;width:301px;height:200px">
                            <div class="createRep flex ">
                                <i></i>
                            </div>
                        </div>
                        <div class="px1 py2">
                            <div  class="pz3">Create board</div>
                        </button>
                    </di>
                </div>
                <div v-for="bo in bos" class="ProfileBoardCard" style="margin:20px 0;padding: 0 12px">
                    <div class="createCard" type="text">
                        <router-link :to="'/' + userName + '/' + bo.bname + '/'">
                        <div style="position: relative;width:301px;height:200px">
                            <div class="createRep flex ">
                                <div></div>
                            </div>
                        </div>
                        </router-link>
                        <div class="px1 py2">
                            <div class="pz3" style="color:#555">{{ bo.bname }}</div>
                            <div class="pz3 pz4">{{ bo.count }} Pins</div>
                            <button class="pz3 pz5" style="color: #555" @click="changeBoard(bo.bid),
                                dialogFormVisible1 = true">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both;">
            <h1 style="height:500px">boards==</h1>
            </div>
        </div>
        <el-dialog title="Create board" v-model="dialogFormVisible2" top="25%">
            <el-form :model="form2" :rules="rules2" ref="form2">
                <el-form-item label="Name" prop="name" :label-width="formLabelWidth">
                <el-input v-model="form2.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Secret" :label-width="formLabelWidth">
                    <el-switch
                    v-model="radio1"
                    on-text="Yes"
                    off-text="No"
                    on-color="#13ce66"
                    off-color="#ff4949">
                    </el-switch>
                <!--<el-radio-group v-model="radio1">
                    <el-radio-button label="Yes"></el-radio-button>
                    <el-radio-button label="No"></el-radio-button>>
                </el-radio-group>-->
                </el-form-item>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false,resetForm('form2')">Cancel</el-button>
                    <el-button type="primary" @click="createBoard('form2')">Create</el-button>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog :title="'Edit your board : ' + form1.bname" v-model="dialogFormVisible1" top="18%">
            <el-form :model="form1" ref="form1" label-position="left">
                <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="form1.bname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Description" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form2.description" placeholder="What's yours board about?"
                auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Category" :label-width="formLabelWidth">
                    <el-select v-model="value" placeholder="What kind of board is it?" clearable>
                        <el-option
                        v-for="item in options"
                        :label="item.label"
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
                <hr>
                <div class="dialog-footer">
                    <el-button class="pz3" :plain="true" type="danger" @click="dialogVisible = true" style="float:left">Delete board</el-button>
                    <el-button class="pz3" @click="dialogFormVisible1 = false">Cancel</el-button>
                    <el-button class="pz3" style="color: #fff" type="primary" @click="">Save</el-button>
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
                    <img :src="'http://localhost' + pinss.url" width="100%">
                    </div>
                <!--</el-carousel>-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">Cancel</el-button>
                <el-button type="primary" @click="">Save Changes</el-button>
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
    </div>
</template>

<script>
    // var config = {
    //     apiKey: 'AIzaSyDiySNTb9ENOWDMaVKflek_4FbTMQx11jM',
    //     authDomain: 'vuestudy.firebaseio.com',
    //     databaseURL: 'https://vuestudy.firebaseio.com/'
    // }
    // firebase.initializeApp(config)

    // var usersRef = firebase.database().ref('users')
    // import user from './user.vue'
    export default {
        // components: {
        // 'v-user': user
        // },
        data () {
            var checkName = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('board is not NULL'));
                }
                setTimeout(() => {
                    if (value === 'boards' || value === 'pins' || value === 'likes' || value === 'pin') {
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
                userName: arrName[1],
                arrCookie: arrCookie[1],
                radio1: false,
                radio3: 1,
                visible2: false,
                // radio2: '',
                dialogVisible: false,
                dialogVisible2: false,
                dialogFormVisible1: false,
                form1: {
                },
                formLabelWidth: '120px',
                dialogFormVisible2: false,
                form2: {
                    name: ''
                },
                rules2: {
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                options: [{
                    value: '1',
                    label: 'Other'
                    }],
                value: '',
                bos: [],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    effect: 'cube',
                    // effect: 'flip',
                    grabCursor: true,
                    mousewheelControl: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                },
                pinss: {}
            }
        },
        created: function () {
            this.getBoards()
            // this.delb()
        },
        methods: {
            getBoards () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie);
                // fetch('http://localhost:3000/todos', {
                fetch('http://localhost/camU/index/index/getboards', {
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
            },
            createBoard (formName) {
                let self = this
                var bname = this.form2.name.trim()
                var secret = this.radio1
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bname", this.form2.name.trim())
                formData.append('secret', this.radio1)
                this.$refs[formName].validate((valid) => {
                if (bname === 'boards' || bname === 'pins' ||
                bname === 'pin' || bname === 'likes') {
                    // self.$message.error("name is used or can't be used")
                } else {
                    fetch('http://localhost/camU/index/index/createboard', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    // fetch('http://localhost:3000/todos', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ bname, secret }),
                    //     headers: { 'Content-Type': 'application/json' },
                    //     credentials: 'same-origin'
                    // })
                    // .then(res => res.json())
                    .then(function (response) {
                        if (response.status === 1) {
                            self.bos.reverse() // array倒序
                            // self.bos.unshift(response)
                            self.bos.push(response)
                            self.bos.reverse()
                            self.$message.success('success')
                            self.dialogFormVisible2 = false
                            setTimeout(() => {
                                // self.fullscreenLoading = false
                                self.$router.push('/user/' + response.bname + '/')
                            }, 2000);
                        } else {
                            self.$message.error("board name is used by yourself")
                        }
                    })
                }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
                console.log(formName)
            },
            changeBoard (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch('http://localhost/camU/index/index/getboard', {
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
                // fetch('http://localhost:3000/todos/' + 1, {
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
            },
            changeCover (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch('http://localhost/camU/index/index/changecover', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch('http://localhost:3000/upload', {
                // // fetch('http://localhost/camU/index/index/getpins', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    self.pinss = pins
                })
                console.log(e + 'hhhh')
            },
            // delb (e) {
            //     let self = this
            //     fetch('http://localhost:3000/todos/' + e, {
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
                fetch('http://localhost/camU/index/index/delboard', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch('http://localhost:3000/todos/' + e, {
                //     method: 'DELETE'
                // })
                // .then(res => res.json())
                .then(function (res) {
                    // self.form1 = res
                    if (res.status) {
                        for (let i = 0; i < self.bos.length; i++) {
                            if (self.bos[i].bid === e) {
                                self.bos.splice(i, 1) // 根据下标删除当前对应的元素
                                console.log(i)
                            }
                        }
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
        },
        mounted() {
            document.title = this.$route.path   // 改变网页title
            // console.log(this.arrCookie)
            setInterval(() => {
            // console.log('simulate async data')
            let swiperSlides = this.pinss
            if (swiperSlides.length < 2) swiperSlides.push(swiperSlides.length + 1)
            }, 3000)
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
