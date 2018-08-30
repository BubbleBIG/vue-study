<template>
    <div class="user-routers">
        <v-header></v-header>
        <div class="boards">
            <div style="" align="center">
                <el-card  class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">留言板</span>
                </div>
                <el-button @click="show = !show" v-if="!show">
                    添加留言
                </el-button>
                <transition name="slide-fade">
                <div v-if="show">
                <el-tooltip class="" effect="dark" content="Close" placement="top">
                <el-button @click="input='',textarea3='',show = !show" v-if="show" style="float:right;width:18px;padding-top:0;"
                type="text" icon="close"></el-button>
                </el-tooltip>
                <el-input
                placeholder="匿名"
                v-model="input">
                </el-input>
                <el-input
                style="padding: 15px 0"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 8}"
                placeholder="请留言"
                v-model="textarea3">
                </el-input>
                <el-button type="primary" @click="addMess()">提交</el-button>
                </div>
                </transition>
                <div align="left">
                    <div style="padding:25px 0;font-size:25px;">留言<span style="display:inline;font-size:19px;color: #666;">({{ messages.count }})</span></div>
                    <div>
                        <div v-for="item in messages.data" :key="item">
                            <div style="padding:8px 5px 8px 0;background: #eee;margin-bottom:12px;border-radius:8px;">
                            <div style="padding-left:10px;padding-bottom:6px;font-size:16px;font-weight:bold;color:#666;">{{ item.username }}</div>
                            <div style="padding-left:53px; font-size:14px;color:#666;line-height:18px;">{{ item.message }}</div>
                            <div align="right" style="padding-left:53px; font-size:12px;color:#bbb;line-height:18px;">{{ item.datetime }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </el-card>
            </div>
            <div style="clear:both;">
            </div>
        </div>
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
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            return {
                http: this.GLOBAL.url,
                userName: arrName[1],
                arrCookie: arrCookie[1],
                textarea3: '',
                input: '',
                show: false,
                mess: 1,
                messages: ''
            }
        },
        created: function () {
            this.getMess()
        },
        methods: {
            addMess () {
                let self = this
                let formData = new FormData()
                if (!self.input) {
                    self.input = '匿名'
                }
                if (!self.textarea3) {
                    self.textarea3 = '对方不想给你留言，并且确认了留言提交'
                }
                formData.append("username", self.input);
                formData.append("message", self.textarea3);
                // fetch(':3000/todos', {
                fetch(self.http + '/camU/index/index/addmessage', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.mess += 1
                    }
                    self.input = ''
                    self.textarea3 = ''
                    self.show = false
                })
            },
            getMess () {
                let self = this
                fetch(self.http + '/camU/index/index/getmessage', {
                    method: 'POST'
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.messages = res
                })
            }
        },
        watch: {
            mess: 'getMess'
        },
        mounted() {
            document.title = this.$route.path   // 改变网页title
            console.log()
        }
    }
</script>

<style lang='scss' scoped>
.box-card {
width: 650px;
}
.slide-fade-enter-active {
transition: all .8s ease;
}
.slide-fade-leave-active {
transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
transform: translateY(10px);
opacity: 0;
}
</style>
