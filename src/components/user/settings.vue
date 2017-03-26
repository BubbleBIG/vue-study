<template>
    <div class="settings" style="width:500px;margin: 0 auto">
    <v-header></v-header>
        <el-form label-position="top" :model="form1" class="demo-form-stacked">
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
            <el-form-item label="Name">
                <el-input v-model="form1.uname" id="checkInput"></el-input>
                <span class="level" style="color:#999">
            </el-form-item>
            <el-form-item label="Picture">
                <img :src="form1.uimg" v-if="form1.uimg" width="75" height="75"
                style="vertical-align: middle"/>
                <img v-else src="../../common/images/person.png" width="75" height="75"
                style="vertical-align: middle"/>
                <el-button @click="dialogFormVisible4 = true">Change picture</el-button>
            </el-form-item>
            <el-form-item label="UserName">
                <el-input v-model="form1.wname">
                    <template slot="prepend">Http://localhost/</template>
                </el-input>
                <span class="level" style="color:#999">
            </el-form-item>
            <el-form-item label="About you">
                <el-input type="textarea" :rows="4" placeholder="Type something"
                v-model="form1.about">
                </el-input>
            </el-form-item>
            <!--<el-form-item>-->
            <span class="dialog-footer">
                <el-button>Cancel</el-button>
                <el-button type="primary" @click="onSubmit">Save setting</el-button>
            </span>
            <!--</el-form-item>-->
            <div style="height: 70px"></div>
        </el-form>
        <el-dialog title="Change your password" v-model="dialogFormVisible3" top="25%">
            <el-form :model="form3" ref="form3">
                <el-form-item label="Old password" :label-width="formLabelWidth">
                <el-input v-model="form3.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="New password" :label-width="formLabelWidth">
                <el-input v-model="form3.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Type it again" :label-width="formLabelWidth">
                <el-input v-model="form3.name" auto-complete="off"></el-input>
                </el-form-item>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false">Cancel</el-button>
                    <el-button type="primary" @click="">Change password</el-button>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog title="Change your picture" v-model="dialogFormVisible4" top="25%">
            <el-form :model="form4" ref="form4" id="myform">
                
                <el-input type="file" onchange="vv()"></el-input>
                <!--<el-button type="primary" @click="">upload</el-button>-->
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
            return {
                arrCookie: arrCookie[1],
                form1: {
                    gender: 0
                },
                formLabelWidth: '120px',
                form3: {
                    name: 'aa'
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
                fetch('http://localhost/camU/index/index/getuserinfo', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    self.form1 = res
                })
            },
            onSubmit () {
                console.log('submit!')
            }
        }
    }
    function vv () {
        // console.log('vvv')
    }
</script>

<style lang='scss' scope>
// $a = #f1b1c1
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
