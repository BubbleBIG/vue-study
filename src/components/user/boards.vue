<template>
    <div class="user-routers">
        <v-user></v-user>
        <ul class="userCommon">
            <li><router-link to="/u/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/u/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/u/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>
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
                        </div>
                    </button>
                </div>
                <div v-for="bo in bos" class="ProfileBoardCard" style="margin:20px 0;padding: 0 12px">
                    <div class="createCard" type="text">
                        <div style="position: relative;width:301px;height:200px">
                            <div class="createRep flex ">
                                <div></div>
                            </div>
                        </div>
                        <div class="px1 py2">
                            <div class="pz3" style="color:#555">{{ bo.bname }}</div>
                            <div class="pz3 pz4">0 Pins</div>
                            <button class="pz3 pz5" style="color: #555" @click="changeBoard(bo.id),
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
            <el-form :model="form2" ref="form2">
                <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="form2.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Secret" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1">
                    <el-radio-button label="Yes"></el-radio-button>
                    <el-radio-button label="No"></el-radio-button>>
                </el-radio-group>
                </el-form-item>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">Cancel</el-button>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog title="Edit your board" v-model="dialogFormVisible1">
            <span style="float: left;margin-top:-48px;margin-left:130px;
            font-size:18px;color:#000">{{ form1.bname }}</span>
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
                    <el-button>Change</el-button>
                </el-form-item>
                <el-form-item label="Secret" :label-width="formLabelWidth">
                <el-radio-group v-model="form1.secret">
                    <el-radio-button label="Yes"></el-radio-button>
                    <el-radio-button label="No"></el-radio-button>>
                </el-radio-group>
                </el-form-item>
                <hr>
                <div class="dialog-footer">
                    <el-button class="pz3" :plain="true" type="danger" @click="delBoard(form1.id)"
                     style="float:left">Delete board</el-button>
                    <el-button class="pz3" @click="dialogFormVisible1 = false">Cancel</el-button>
                    <el-button class="pz3" style="color: #fff" type="primary" @click="">Save</el-button>
                </div>
            </el-form>
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
    import user from './user.vue'
    export default {
        components: {
        'v-user': user
        },
        data () {
            return {
                radio1: 'No',
                // radio2: '',
                dialogFormVisible1: false,
                form1: {
                // bname: ''
                },
                formLabelWidth: '120px',
                dialogFormVisible2: false,
                form2: {
                    name: '3'
                },
                options: [{
                    value: '1',
                    label: 'Other'
                    }],
                value: '',
                bos: []
            }
        },
        created: function () {
            this.getBoards()
        },
        methods: {
            getBoards () {
                let self = this
                fetch('http://localhost/camU/index/index/getboards.html', {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (bos) {
                    console.log(bos)
                    self.bos = bos
                })
            },
            onSubmit () {
                let self = this
                var bname = this.form2.name.trim()
                var secret = this.radio1
                fetch('http://localhost:3000/todos', {
                    method: 'POST',
                    body: JSON.stringify({ bname, secret }),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (response) {
                    self.bos.push(response)
                    if (response.status >= 200) {
                    //    return {dialogFormVisible: false}
                    }
                    // response.status
                    // response.statusText
                    // response.headers
                    // response.url
                    // return response.text()
                }, function (error) {
                    error.message
                })
            },
            changeBoard (e) {
                let self = this
                fetch('http://localhost:3000/todos/' + e, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.form1 = res
                    console.log(self.form1.bname)
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
            delBoard (e) {
                console.log(e)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pz3
        font-size: 18px
        font-weight: bold
        color: #bcbcbc
        letter-spacing: -0.25px
        line-height: 18px
        word-spacing: 0
    .boards
        margin: 20px auto
        .boardsItems
            margin: 0 auto
            display: flex
            flex-flow: row wrap
            align-content: flex-start
        .flex-wrap
            flex-wrap: wrap
            .ProfileBoardCard
                /*float: left*/
                .createCard
                    .createRep
                        width: 301px
                        height: 200px
                        background-color: #e4e4e4
                        border-radius: 8px
                        i
                            margin: auto
                            vertical-align: middle
                        i::before
                            width: 56px
                            height: 56px
                            background: url(../../common/images/w.png)-62px -234px no-repeat
                            display: inline-block
                            font: 0 / 0 serif
                            text-shadow: none
                            color: transparent
                            content: " "
                    .px1
                        padding: 12px 8px
                        text-align: left
                        .pz4
                            font-size: 12px
                .pz5
                    opacity: 0
                    float: right
                    background-color: #eee
                    padding: 6px 8px
                    border-radius: 4px
                    margin-top: -37px
    .boardsItems
        & > .ProfileBoardCard:hover::before
            position: absolute
        & > .ProfileBoardCard:hover::before
            background: rgba(0,0,0,0.05)
            border-radius: 8px
            content: " " !important
            opacity: 1
            width: 301px
            height: 224px
            pointer-events: none
            -webkit-transform: scale(0.96)
            -ms-transform: scale(0.96)
            transform: scale(0.96)
            z-index: 3
            margin: -14px -18px
            padding: 28px 18px
        & > .ProfileBoardCard:hover .pz5
            opacity: 1
        & > .ProfileBoardCard
            .pz5:hover
                background: #d7d7d7
    .el-dialog--small
        width: 580px
    .dialog-footer
        text-align: right
    .el-dialog__header span
        display: inline
        h1
            font-size: 50px
@media (min-width: 2275px)
    .boardsItems
        width: 2275px
@media (max-width: 2274px) and (min-width: 1950px)
    .boardsItems
        width: 1950px
@media (max-width: 1949px) and (min-width: 1625px)
    .boardsItems
        width: 1625px
@media (max-width: 1624px) and (min-width: 1300px)
    .boardsItems
        width: 1300px
@media (max-width: 1299px) and (min-width: 975px)
    .boardsItems
        width: 975px
@media (max-width: 974px) and (min-width: 650px)
    .boardsItems
            width: 650px
</style>