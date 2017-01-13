<template>
    <div class="user-routers">
        <v-user></v-user>
        <ul class="userCommon">
            <li><router-link to="/user/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/user/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/user/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>
        <div class="pins">
            <el-upload action="http://localhost:80" type="drag"
            :thumbnail-mode="true" :on-preview="handlePreview"
            :on-remove="handleRemove" :default-file-list="fileList" >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <h1 style="height:1000px">==PINS==</h1></div>
    </div>
</template>

<script>
    import user from './user.vue'
    export default {
        components: {
        'v-user': user
        },
        data () {
            return {
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        methods: {
            handleRemove (file, fileList) {
                console.log(file, fileList)
            },
            handlePreview (file) {
                console.log(file)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pins
        h1
            font-size: 50px
</style>