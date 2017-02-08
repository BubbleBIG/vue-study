<template>
    <div class="navb flex">
        <span class="navb-group navb-g" style="width:40px;margin:0 10px 0 20px">
            <router-link to="/"style="padding:0"><img width="40" height="40" alt="Brand" src="../../assets/v.png"></router-link>
        </span>
        <span class="navb-group" style="width:30px;margin-left:16px;background-color:#ebebeb;padding: 4px 5px">
            <div class="searchImg"></div>
        </span>
        <form class="navb-group search" role="search" style="background-color:#ebebeb;margin-right:16px;">
            <input id="search1" type="text" class="form-control" placeholder="Search" 
            style="background-color:#ebebeb;margin-top:5px;font-size: 16px;font-weight: 600;height: 32px;line-height: 20px;">
        </form>
        <span class="navb-group navb-g categoriesheader" style="width:px;padding:4px 0;">
            <el-popover ref="popover1" placement="bottom" width="400" trigger="click">
            <div style="height:500px"></div>
            </el-popover>
        <a v-popover:popover1 class=""><div class="categoriesHeader"></div></a>
        </span>
        <span class="navb-group navb-g" style="width:px;padding:4px 0;vertical-align: middles">
        <router-link :to="'/' + userName" class="userimg"><div class="userImg"></div>
        </router-link>
        </span>
        <span class="navb-group navb-g" style="width:px;padding:4px 0;margin-right:4px;">
            <el-popover ref="popover2" placement="bottom" width="400" trigger="click">
            <div style="height:500px"></div>
            </el-popover>
        <a v-popover:popover2 class="newsimg"><div class="newsImg"></div></a>
        <div>
            <span class="bot"></span>
            <span class="top"></span>
        </div>
        </span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                userName: 'Bubble'
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .navb-group
        align: center
        a
            padding: 6px 16px
    .searchImg
        background: url(../../common/images/search.png) no-repeat center
        background-size:cover
        width: 30px
        height: 30px
        background-color: #ebebeb
    .categoriesHeader
        background: url(../../common/images/w.png) -186px -210px no-repeat
        width: 24px
        height: 21px
        background-color: #fff
        /*margin-top: 10px*/
    .categoriesheader:hover
        .categoriesHeader
            background: url(../../common/images/w.png) -212px -210px no-repeat
            width: 24px
            height: 21px
            background-color: #fff
            /*margin-top: 10px*/
    .userImg
        background: url(../../common/images/w.png) -271px -310px no-repeat
        width: 21px
        height: 24px
        background-color: #fff
        /*margin-top: 8px*/
    .userimg:hover
        .userImg
            background: url(../../common/images/w.png) -293px -310px no-repeat
            width: 21px
            height: 24px
            background-color: #fff
        /*margin-top: 8px*/
    .newsImg
        background: url(../../common/images/w.png) -199px -310px no-repeat
        width: 22px
        height: 24px
        background-color: #fff
        /*margin-top: 8px*/
    .newsimg:hover
        .newsImg
            background: url(../../common/images/w.png) -247px -310px no-repeat
            width: 22px
            height: 24px
            background-color: #fff
</style>