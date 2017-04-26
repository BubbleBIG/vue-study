<template>
    <div class="navb flex">
        <span class="navb-group navb-g" style="width:40px;margin:0 10px 0 20px">
            <router-link to="/"style="padding:0"><img width="40" height="40" alt="Brand"
            src="../../assets/v.png"></router-link>
        </span>
        <!--<span class="navb-group" style="width:30px;margin-left:16px;background-color:#ebebeb;
        padding: 4px 5px">
            <div class="searchImg"></div>
        </span>-->
        <form class="navb-group search" role="search" style="background-color:#ebebeb;margin-right:16px;">
            <i class="search-img" >
                <div class="searchImg"></div>
            </i>
            <!--<input id="search1" type="text" class="form-control" placeholder="Search" 
            style="background-color:#ebebeb;margin-top:5px;font-size: 16px;
            font-weight: 600;height: 32px;line-height: 20px;">-->
            <el-autocomplete class="search-input"
            v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="Search"
            @select="handleSelect"
            ></el-autocomplete>
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
            <el-popover ref="popover2" placement="bottom" width="200" trigger="click">
            <div style="height:300px"></div>
            </el-popover>
            <el-button type="text" v-popover:popover2 @click="getNews()" class="newsimg" style="width:52px;">
            <el-badge :value="newsNums" :max="6" class="newsNums"><span class="newsImg"></span></el-badge></el-button>
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
            let strCookie = document.cookie
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrName = arr[1].split("=")
            return {
                http: 'http://localhost',
                categoryLists: '',
                arrCookie: arrCookie[1],
                userName: arrName[1],
                restaurants: [],
                state4: '',
                timeout: null,
                count: 0,
                newsNums: 0
            }
        },
        created: function () {
            // this.getNewsNums()
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
                    } else {}
                    // console.log(res)
                })
                .catch(function(error) {
                    console.error('Fetching failed:', error);
                    throw error;
                })
                // console.log(self.arrCookie)
            },
            getNews () {
                console.log('getnews')
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
            loadAll() {
                return [
                { "value": "test" },
                { "value": "hh", "word": "fff" }
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                cb(results);
                }, 1000);
                // }, 8000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                return (state.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
            if (this.$route.path) {
                this.count += 1
            }
            console.log(this.$route.path)
        },
        watch: {
            '$route': 'getNewsNums',
            count: 'getNewsNums'
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
</style>
