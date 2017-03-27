<template>
    <div class="user-routers">
    <v-header></v-header>
    <h1>this board name: {{ bName.bname }}</h1>
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
            // debugger;
            let a = this.$route.params
            console.log(a)
        },
        data () {
          let a = this.$route.params
            return {
                bName: a
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
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1 {
  font-size: 4rem;
}
// $a = #f1b1c1
.settings {
    label {
        font-weight: bold;
    }
}
.el-input-group__prepend {
    color: #333;
    font-weight: bold;
    border: none;
}
</style>
