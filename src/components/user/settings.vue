<template>
    <div class="settings" style="width:500px;margin: 0 auto">
    <v-header></v-header>
        <el-form label-position="top" :model="form1" :rules="rules1" ref="form1">
            <el-form-item label="Email Address" style="padding-top:20px">
                <el-input v-model="form1.mail"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-button type="text" @click="dialogFormVisible3 = true">Change your password...</el-button>
            </el-form-item>
            <el-form-item label="EGender">
                <el-radio-group v-model="form1.gender">
                    <el-radio :label="0">Male</el-radio>
                    <el-radio :label="1">Female</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Name" prop="uname">
                <el-input v-model="form1.uname"></el-input>
            </el-form-item>
            <el-form-item label="Picture">
                <img :src="form1.uimg" v-if="form1.uimg" width="80" height="80"
                style="vertical-align: middle;margin-right:10px"/>
                <img v-else src="../../common/images/person.png" width="80" height="80"
                style="vertical-align: middle;margin-right:10px"/>
                <el-button @click="dialogFormVisible4 = true">Change picture</el-button>
            </el-form-item>
            <el-form-item label="UrluserName" prop="wname">
                <el-input v-model="form1.wname" style="float:right">
                </el-input>
                <div style="background: #efefef;padding: 0px 10px;font-weight:bold">
                   {{ http }}/{{ form1.wname }}</div>
            </el-form-item>
            <el-form-item label="About you">
                <el-input type="textarea" :rows="4" placeholder="Type something"
                v-model="form1.about">
                </el-input>
            </el-form-item>
            <span class="dialog-footer">
                <el-button>Cancel</el-button>
                <el-button type="primary" @click="changeUserInfo('form1')">Save setting</el-button>
            </span>
            <div style="height: 70px"></div>
        </el-form>
        <el-dialog title="Change your password" v-model="dialogFormVisible3" top="18%">
            <el-form :model="form3" :rules="rules3" ref="form3">
                <el-form-item label="Old password" prop="pass" :label-width="formLabelWidth">
                <el-input type="password" v-model="form3.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="New password" prop="newpass" :label-width="formLabelWidth">
                <el-input type="password" v-model="form3.newpass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Type it again" prop="checkpass" :label-width="formLabelWidth">
                <el-input type="password" v-model="form3.checkpass" auto-complete="off"></el-input>
                </el-form-item>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false,resetForm('form3')">Cancel</el-button>
                    <el-button type="primary" @click="Changepw('form3')">Change password</el-button>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog title="Change your picture" v-model="dialogFormVisible4" top="25%">
            <el-form :model="form4" ref="form4">
                <img :src="imageUrl" class="avatar" style="float:right">
                <el-upload name="photo"
                class="avatar-uploader"
                :action="http+'/camU/index/index/uploadpintmp'"
                :show-file-list="false"
                :on-success="handleAvatarScucess"
                :before-upload="beforeAvatarUpload">
                <i v-if="imageUrl" class="el-icon-plus avatar-uploader-icon">
                    重新上传</i>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div align="center">
                    <el-button>Cancel</el-button>
                    <el-button type="primary" @click="changePic()">Save</el-button>
                </div>           
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import header from '../header/header.vue'
    export default {
        components: {
        'v-header': header
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
    //         $('#checkInput input').bind('change keyup blur fucos', function() {
    //     yzcode($(this).val);
    // });
        //     var b = $("#pinheight").outerHeight(true)
        //     var a = $('#pinheight')
        //     // var h = window.offsetHeight
        //     var o = document.getElementById("pinheight")
        //     let c = document.getElementById("pinheight")
        //     var h = o.offsetHeight;
        //     var w = o.offsetWidth;
        //     // debugger;
        //     console.log(w)
        //     console.log(h)
        //     console.log(b)
        //     console.log(a)
        },
        data () {
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            var checkuName = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('name不能为空'))
                }
                let self = this
                let formData = new FormData()
                value = value.match(/^[a-zA-Z0-9_]{3,16}$/)
                setTimeout(() => {
                    if (!value) {
                        callback(new Error('输入3-16个数字或者英文字母'));
                    } else {
                        formData.append("name", value)
                        formData.append("id", arrCookie[1])
                        fetch(this.http + '/camU/index/index/checkuname', {
                            method: 'POST',
                            body: formData
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            if (!res.status) {
                                callback(new Error('name已被占用'));
                            } else {
                                callback();
                            }
                        })
                    }
                }, 200)
            }
            var checkwName = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('UrluserName不能为空'));
                }
                let self = this
                let formData = new FormData()
                let valueName = value
                valueName = value.match(/^[a-zA-Z0-9_]{3,16}$/)
                setTimeout(() => {
                    if (!valueName) {
                        callback(new Error('输入3-16个数字或者英文字母'));
                    } else {
                        if (value === 'error' || value === '404' || value === 'pin' || value === 'settings' || value === 'news' || value === 'categories' || value === 'help') {
                            callback(new Error('forbidden UrluserName!'));
                        } else {
                            formData.append("name", value)
                            formData.append("id", arrCookie[1])
                            fetch(this.http + '/camU/index/index/checkwname', {
                                method: 'POST',
                                body: formData
                            })
                            .then(res => res.json())
                            .then(function (res) {
                                if (!res.status) {
                                    callback(new Error('UrluserName已被占用'));
                                } else {
                                    callback();
                                }
                            })
                        }
                    }
                }, 200)
            }
            var pass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (value.length < 1) {
                    callback(new Error('请输入至少6个字符'));
                }
                callback();
                }
            }
            var pass1 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (value.length < 1) {
                    callback(new Error('请输入至少6个字符'));
                }
                if (value === this.form3.pass) {
                callback(new Error('新密码不能与旧密码相同!'));
                }
                callback();
                }
            }
            var checkpass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.form3.newpass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            }
            return {
                http: 'http://localhost',
                arrCookie: arrCookie[1],
                imageUrl: '',
                userImg: '',
                form1: {
                    gender: 0
                },
                rules1: {
                    uname: [
                        { validator: checkuName, trigger: 'blur' }
                    ],
                    wname: [
                        { validator: checkwName, trigger: 'blur' }
                    ]
                },
                formLabelWidth: '120px',
                form3: {
                    pass: '',
                    newpass: '',
                    checkpass: ''
                },
                rules3: {
                    pass: [
                        { validator: pass, trigger: 'blur' }
                    ],
                    newpass: [
                        { validator: pass1, trigger: 'blur' }
                    ],
                    checkpass: [
                        { validator: checkpass, trigger: 'blur' }
                    ]
                },
                dialogFormVisible3: false,
                form4: {
                    name: 'aa'
                },
                dialogFormVisible4: false
            }
        },
        created: function () {
            this.getUserInfo()
        },
        methods: {
            getUserInfo () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                fetch(self.http + '/camU/index/index/getuserinfo', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    // let value = res.uimg.match(/http:\/\/.+/)
                    if (res.uimg) {
                        res.uimg = self.http + '/camU' + res.uimg
                    }
                    self.form1 = res
                })
            },
            changeUserInfo (formName) {
                this.$refs[formName].validate((valid) => {
                let self = this
                if (!valid) {
                } else {
                let formData = new FormData()
                formData.append('id', self.arrCookie)
                formData.append('uname', self.form1.uname)
                formData.append("wname", self.form1.wname)
                formData.append('mail', self.form1.mail)
                formData.append('gender', self.form1.gender)
                formData.append('about', self.form1.about)
                fetch(self.http + '/camU/index/index/updateinfo', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        document.cookie = 'name = ' + res.name
                        setTimeout(() => {
                            location.reload('/settings') // 重新加载页面
                            // self.$router.push('/' + res.name + '/')
                        }, 100)
                    // console.log(res.status);
                    }
                })
                }
                });
                // console.log('submit!')
            },
            Changepw (formName) {
                this.$refs[formName].validate((valid) => {
                    let self = this
                    if (!valid) {
                    } else {
                        let formData = new FormData()
                        formData.append('id', self.arrCookie)
                        formData.append('pw', self.form3.pass)
                        formData.append("newpw", self.form3.newpass)
                        fetch(self.http + '/camU/index/index/changepw', {
                            method: 'POST',
                            body: formData
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            if (res.status === 1) {
                                self.$refs[formName].resetFields()
                                self.dialogFormVisible3 = false
                                self.$message.success('success!')
                            // console.log(res.status);
                            }
                        })
                        console.log('e')
                    }
                })
            },
            changePic () {
                let self = this
                let ImgObj = new Image()
                ImgObj.src = this.imageUrl
                if (ImgObj.width > 0 && ImgObj.height > 0) {
                    let formData = new FormData()
                    formData.append("id", self.arrCookie)
                    formData.append("img", self.userImg)
                    // fetch(':3000/todos', {
                    fetch(self.http + '/camU/index/index/changeuserimg', {
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
                            self.dialogFormVisible4 = false
                            setTimeout(() => {
                                location.reload('/settings') // 重新加载页面
                            }, 100)
                        }
                    })
                    // console.log('success')
                } else {
                    this.$message.error('无法识别或保存图片');
                    // console.log('error')
                }
            },
            resetForm (formName) {
                this.$refs[formName].resetFields()
                // console.log(formName)
            },
            handleAvatarScucess(res, file) {
                let self = this
                this.imageUrl = URL.createObjectURL(file.raw);
                self.userImg = res.url
                // console.log(self.userImg)
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
    function vv () {
        // console.log('vvv')
    }
</script>

<style lang='scss' scoped>
// $a = #f1b1c1
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar {
      border: 1px solid #efefef;
  }
.settings {
    label {
        font-weight: bold;
    }
    h1 {
        font-size: 50px;
        color: #f1b1c1;
    }
}
.el-input-group__prepend {
    color: #333;
    font-weight: bold;
    border: none;
}
</style>
