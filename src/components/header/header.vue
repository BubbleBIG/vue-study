<template>
<div>
    <div v-if="show" class="l-modal"></div>
    <div class="navb flex">
        <span class="navb-group navb-g" style="width:40px;margin:0 10px 0 20px">
            <router-link to="/"style="padding:0"><img width="40" height="40" alt="Brand"
            src="../../assets/v.png"></router-link>
        </span>
        <!--<span class="navb-group" style="width:30px;margin-left:16px;background-color:#ebebeb;
        padding: 4px 5px">
            <div class="searchImg"></div>
        </span>-->
        <form class="navb-group search" role="search" style="border-radius:4px;background-color:#ebebeb;margin-right:16px;">
            <el-button @click="search()" type="text" class="search-img" style="top:5px;" >
                <span class="searchImg"></span>
            </el-button>
            <!--<input id="search1" type="text" class="form-control" placeholder="Search" 
            style="background-color:#ebebeb;margin-top:5px;font-size: 16px;
            font-weight: 600;height: 32px;line-height: 20px;">-->
            <div class="search-input">
                <!--<el-input class="inputWord" @focus="focusfns" @blur="blurfns"-->
            <el-input class="inputWord" @focus="focusfns" @blur="blurfns"
            v-model="searchWords" placeholder="Search" ></el-input>
            <div v-if="show" style="width:100%;min-height:90px;background:#fff;border-radius:4px;">
                <div style="padding:2px 15px;height:100%;">
                <div v-if="searchLists.user">
                    <div style="line-height: 24px;">people</div>
                    <router-link :to="'/'+item.wname+'/'" v-for="item in searchLists.user" style="padding:0;">
                        <div style="vertical-align:center;">
                            <img v-if="item.uimg" :src="http+'/camu'+item.uimg" width="40" height="40" style="display:inline-block;">
                            <div v-else style="vertical-align:center;display:inline-block;width:40px;height:40px;border:1px solid #eee;"></div>
                            <div style="height:40px;display:inline-block;vertical-align:top;">
                                <span style="line-height: 20px;font-size:18px;font-weight:bold;">{{ item.uname }}</span>
                                <span style="line-height: 18px;">{{ item.wname }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div>
                    <div v-if="searchWords" style="line-height: 24px;">Boards</div>
                    <router-link v-if="item.secret==='true'" :to="'/'+item.wname+'/'+item.bname+'/'" v-for="item in searchLists.board" style="padding:0;">
                        <div v-if="parseInt(item.uid)===parseInt(arrCookie)" style="vertical-align:center;">
                            <img v-if="item.cover" :src="item.cover" width="40" height="40" style="display:inline-block;">
                            <div v-else style="vertical-align:center;display:inline-block;width:40px;height:40px;border:1px solid #eee;"></div>
                            <div style="height:40px;display:inline-block;vertical-align:top;">
                                <span style="line-height: 20px;font-size:18px;font-weight:bold;">{{ item.bname }}</span>
                                <span style="line-height: 18px;">{{ item.wname }}</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-if="item.secret==='false'" :to="'/'+item.wname+'/'+item.bname+'/'" v-for="item in searchLists.board" style="padding:0;">
                        <div style="vertical-align:center;">
                            <img v-if="item.cover" :src="item.cover" width="40" height="40" style="display:inline-block;">
                            <div v-else style="vertical-align:center;display:inline-block;width:40px;height:40px;border:1px solid #eee;"></div>
                            <div style="height:40px;display:inline-block;vertical-align:top;">
                                <span style="line-height: 20px;font-size:18px;font-weight:bold;">{{ item.bname }}</span>
                                <span style="line-height: 18px;">{{ item.wname }}</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-if="searchWords" :to="'/search/'+searchWords+'/'" style="font-size:16px;font-weight:bold;">Boards call "{{ searchWords }}"</router-link>
                </div>
                <!--<p>www</P>-->
                </div>
            </div>
            </div>
        </form>
        <span class="navb-group navb-g categoriesheader" style="width:px;padding:4px 0;" @click="category">
            <el-popover ref="popover1" placement="bottom" width="300" trigger="click">
            <div id="category-link" style="height:283px;padding:16px 0px 0px 0px;border-bottom:1px solid #eee">
                <router-link  style="width:150px;float:left;font-size:14px;font-weight:600;line-height: 18px;"
                :to="'/category/' + item.label" v-for="item in categoryLists">
                    {{ item.value }}
                </router-link>
            </div>
            <div style="padding-top: 10px;">
                <router-link :to="'/'">Home</router-link>
            </div>
            </el-popover>
        <el-button type="text" v-popover:popover1 class="" style="width:52px;margin-top:-4px;"><span class="categoriesHeader" style="margin-left:14px;"></span></button>
        </span>
        <span class="navb-group navb-g" style="width:px;padding:4px 0;vertical-align: middles">
        <router-link :to="'/' + userName + '/'" class="userimg" style="margin-top:-2px;"><div class="userImg"></div>
        </router-link>
        </span>
        <span class="navb-group navb-g" style="width:px;margin-right:4px;">
            <el-popover ref="popover2" placement="bottom" width="250" trigger="click">
            <div style="height:272px;">
                <div class="news-list" style="height:270px;overflow:auto">
                    <div v-for="item in news" style="margin-top:12px;margin-bottom: 5px;">
                        <div v-if="item.action==='add'">
                            <ul>
                                <li style="width:40px;height:40px;overflow:hidden;border-radius:8px;">
                                    <img src="../../common/images/board.jpg" width="40" height="40">
                                </li>
                                <li>
                                    <router-link class="link" :to="'/'+item.wname+'/'+item.new.bname+'/'">{{ item.new.bname }}</router-link>
                                    <span v-if="board.status===1&&board.mess.bid===item.news">You joined this board</span>
                                    <span v-else>{{ item.uname }} invited you to this board</span>
                                </li>
                            </ul>
                            <div v-if="board.status===1&&board.mess.bid===item.news" style="margin-top: 6px;" align="center">
                            </div>
                            <div v-else style="margin-top: 6px;" align="center">
                                <el-button size="small" @click="bid=item.news,status=0,handlenews(item.innewsid)">Ignore</el-button>
                                <el-button size="small" @click="bid=item.news,status=1,handlenews(item.innewsid)" type="primary">Accept</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </el-popover>
            <el-button type="text" v-popover:popover2 @click="getNews()" class="newsimg" style="width:52px;">
            <el-badge :value="newsNums" :max="5" class="newsNums"><span class="newsImg"></span></el-badge></el-button>
        <div>
            <span class="bot"></span>
            <span class="top"></span>
        </div>
        </span>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            return {
                http: 'http://localhost',
                categoryLists: '',
                arrCookie: arrCookie[1],
                userName: arrName[1],
                searchWords: '',
                count: 0,
                count1: 1,
                newsNums: 0,
                news: '',
                status: '',
                board: '',
                bid: '',
                touid: '',
                // pins: '',
                show: '',
                searchLists: ''
            }
        },
        created: function () {
            // this.getPins()
        },
        methods: {
            getNewsNums () {
                let self = this
                let formData = new FormData()
                formData.append('id', self.arrCookie)
                fetch(self.http + '/camU/index/index/getnewsnums', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.newsNums = res.nums
                    } else {
                        self.newsNums = 0
                    }
                    // console.log(res)
                })
                .catch(function (error) {
                    console.error('Fetching failed:', error);
                    throw error;
                })
                // console.log(self.arrCookie)
            },
            getNews () {
                let self = this
                self.count += 1
                let formData = new FormData()
                formData.append('id', self.arrCookie)
                fetch(self.http + '/camu/index/index/getnews', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.news = res.mess
                    }
                })
                .catch(function (error) {
                    console.error('Fetching failed:', error)
                    throw error
                })
                // console.log('getnews')
            },
            handlenews (e) {
                let self = this
                let formData = new FormData()
                formData.append('status', self.status)
                formData.append('id', self.arrCookie)
                formData.append('bid', self.bid)
                fetch(self.http + '/camu/index/index/handlenews', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.count += 1
                        self.board = res
                    } else if (res.status === 3) {
                        self.count += 1
                        // self.count1 += 1
                        let length = self.news.length
                        for (let i = 0; i < length; i++) {
                            if (self.news[i].innewsid === e) {
                                self.news.splice(i, 1)
                            }
                        }
                    }
                })
                .catch(function (error) {
                    console.error('Fetching failed:', error)
                    throw error
                })
                // console.log(e)
                // console.log(self.status)
                // console.log(self.bid)
                // console.log(self.arrCookie)
            },
            category () {
                let self = this
                fetch(self.http + '/camU/index/index/getcategory', {
                    method: 'POST'
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.categoryLists = res
                })
            },
            // getPins () {
            //     let self = this
            //     let formData = new FormData()
            //     formData.append("id", self.arrCookie)
            //     // formData.append("bid", e)
            //     fetch(self.http + '/camU/index/index/getpins', {
            //         method: 'POST',
            //         body: formData
            //         // mode: 'no-cors',
            //         // headers: { 'Content-Type': 'application/json' },
            //         // credentials: 'same-origin'
            //     })
            //     .then(res => res.json())
            //     .then(function (pins) {
            //         let length = pins.length
            //         for (let i = 0; i < length; i++) {
            //             pins[i].height = 114 + parseInt(pins[i].height)
            //             if (pins[i].iswebsite === 0) {
            //                 pins[i].url = self.http + "/camu" + pins[i].url
            //                 // console.log(pins)
            //             }
            //         }
            //         // console.log(pins)
            //         self.pins = pins
            //     })
            // },
            search () {
                this.$router.replace('/search/' + this.searchWords + '/')
                // console.log(this.searchWords)
            },
            getSearch () {
                let self = this
                let formData = new FormData()
                formData.append('word', self.searchWords)
                fetch(self.http + '/camu/index/index/getsearch', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    self.searchLists = res
                    // console.log(res)
                })
                .catch(function(error) {
                    console.error('Fetching failed:', error);
                    throw error;
                })
                // console.log(self.searchWords)
            },
            focusfns () {
                let self = this
                self.show = true
            },
            blurfns () {
                setTimeout(() => {
                    this.show = false
                }, 300)
            }
        },
        mounted() {
            // this.restaurants = this.loadAll()
            if (this.$route.path) {
                this.count += 1
            }
            // console.log(this.$route.path)
        },
        watch: {
            '$route': 'getNewsNums',
            count: 'getNewsNums',
            count1: 'getNews',
            searchWords: 'getSearch'
        }
    }
</script>
<style lang='scss'>
    .navb-group {
        align: center;
        a {
            padding: 6px 16px;
        }
    }
    .search-img {
        width: 30px;
        // padding: 4px;
        position: absolute;
        left: 74px;
        top: 16px;
        z-index: 99;
    }
    .searchImg {
        background: url(../../common/images/search.png) no-repeat center;
        background-size:cover;
        width: 30px;
        height: 30px;
        background-color: #ebebeb;
    }
    .categoriesHeader {
        background: url(../../common/images/w.png) -186px -210px no-repeat;
        width: 24px;
        height: 21px;
        background-color: #fff;
        /*margin-top: 10px*/
    }
    .categoriesheader:hover {
        .categoriesHeader {
            background: url(../../common/images/w.png) -212px -210px no-repeat;
            width: 24px;
            height: 21px;
            background-color: #fff;
            /*margin-top: 10px*/
        }
    }
    .userImg {
        background: url(../../common/images/w.png) -271px -310px no-repeat;
        width: 21px;
        height: 24px;
        background-color: #fff;
        /*margin-top: 8px*/
    }
    .userimg:hover {
        .userImg {
            background: url(../../common/images/w.png) -293px -310px no-repeat;
            width: 21px;
            height: 24px;
            background-color: #fff;
        /*margin-top: 8px*/
        }
    }
    .newsImg {
        background: url(../../common/images/w.png) -199px -310px no-repeat;
        width: 22px;
        height: 24px;
        background-color: #fff;
        /*margin-top: 8px*/
    }
    .newsimg:hover {
        .newsImg {
            background: url(../../common/images/w.png) -247px -310px no-repeat;
            width: 22px;
            height: 24px;
            background-color: #fff;
        }
    }
    .search-input {
        width: 100%;
        padding-top: 3px;
        input {
            padding-left: 38px;
            font-size: 18px;
            border: none;
            background-color: rgb(235, 235, 235);
        }
    }
    .newsNums {
        margin-top: -2px;
        margin-right: 1px;
    }
    .el-popover[x-placement^=bottom] {
        margin-top: 0;
    }
    .el-badge {
        vertical-align: baseline;
    }
    .news-list {
        ul li {
            display: inline-block;
            margin-right: 4px;
            vertical-align: top;
            color: #aaa;
        }
        .link {
            font-weight: bold;
            line-height: 16px;
            color: #555;
        }
    }
    .l-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
        z-index: 99;
    }
</style>
