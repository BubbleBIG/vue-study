<template>
    <div class="settings">
        <el-form label-position="top" :model="formStacked" class="demo-form-stacked"
        style="width:500px">
            <el-form-item label="Email Address">
                <el-input v-model="formStacked.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-input v-model="formStacked.region"></el-input>
            </el-form-item>
            <el-form-item label="活动展开形式">
                <el-input v-model="formStacked.type"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button>取消</el-button>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
        <h1 style="height:1000px">Settings.....</h1>
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                formStacked: {
                name: '',
                region: '',
                type: ''
                }
            }
        },
        methods: {
            onSubmit () {
                console.log('submit!')
            }
        }
    }
</script>

<style lang="stylus" scope>
$a = #f1b1c1
.settings
    h1
        font-size: 50px
        color: $a
</style>