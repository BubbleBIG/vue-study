<template>
    <div class="settings" style="width:500px;margin: 0 auto">
    <v-header></v-header>
        <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
            <el-form-item label="Email Address" style="padding-top:20px">
                <el-input v-model="formStacked.mail"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-button type="text" @click="dialogFormVisible3 = true">Change your password...</el-button>
            </el-form-item>
            <el-form-item label="EGender">
                <el-radio-group v-model="radio3">
                    <el-radio :label="0">Male</el-radio>
                    <el-radio :label="1">Female</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Name">
                <el-input v-model="formStacked.name"></el-input>
            </el-form-item>
            <el-form-item label="Picture">
                <img src="../../common/images/person.png"  width="75" height="75"
                style="vertical-align: middle"/>
                <el-button @click="dialogFormVisible4 = true">Change picture</el-button>
            </el-form-item>
            <el-form-item label="UserName">
                <el-input v-model="userName">
                    <template slot="prepend">Http://localhost/</template>
                </el-input>
            </el-form-item>
            <el-form-item label="About you">
                <el-input type="textarea" :rows="4" placeholder="Type something"
                v-model="formStacked.aboutyou">
                </el-input>
            </el-form-item>
            <!--<el-form-item>-->
            <span class="dialog-footer">
                <el-button>Cancel</el-button>
                <el-button type="primary" @click="onSubmit">Save setting</el-button>
            </span>
            <!--</el-form-item>-->
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
        <div id="pinheight"><img src="../../common/images/person.png"  width="75" height="95"></div>
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
            var b = $("#pinheight").outerHeight(true)
            var a = $('#pinheight')
            // var h = window.offsetHeight
            var o = document.getElementById("pinheight")
            let c = document.getElementById("pinheight")
            var h = o.offsetHeight;
            var w = o.offsetWidth;
            // debugger;
            console.log(w)
            console.log(h)
            console.log(b)
            console.log(a)
        },
        data () {
            var b = $("#pinheight").outerHeight(true)
            var a = $('#pinheight')
            // var h = window.offsetHeight
            // var o = document.getElementById("pinheight")
            // let c = document.getElementById("pinheight")
            // var h = o.offsetHeight;
            // var w = o.offsetWidth;
            // debugger;
            // console.log(w)
            // console.log(h)
            console.log(b)
            return {
                userName: 'Bubble',
                radio3: 0,
                formStacked: {
                name: '',
                region: '',
                type: ''
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
            this.pinHeight()
        },
        methods: {
            pinHeight () {
                // var b = $("#pinheight").outerHeight(true)
                // var a = $('#pinheight')
                // // var h = window.offsetHeight
                // var o = document.getElementById("pinheight")
                // let c = document.getElementById("pinheight")
                // var h = o.offsetHeight;
                // var w = o.offsetWidth;
                // // debugger;
                // console.log(w)
                // console.log(h)
                // console.log(b)
                // console.log(a)
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
