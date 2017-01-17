<template>
    <div class="user-routers">
        <div class="boards pins">
            <div class="pinsItems item">
                <div class="pinsCard">
                    <a class="AddPinRep ModalTrigger">
                        <i></i>
                        <span>Save Pin</span>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="pinsCard">
                    <a class="AddPinRep ModalTrigger">
                        <i></i>
                        <span>Save Pin</span>
                    </a>
                </div>
            </div>
            <div id="result"></div>
            <h1 style="height:1000px"></h1>
            <form name="form1" id="form1">  
                <p>name:<input type="text" name="name" ></p>  
                <p>gender:<input type="radio" name="gender" value="1">male <input type="radio" name="gender" value="2">female</p>  
                <p>photo:<input type="file" name="photo" id="photo"></p>  
                <p><input type="button" name="b1" value="submit" onclick="fsubmit()"></p>  
            </form>  
        </div>
    </div>
</template>

<script>
    // import user from './user.vue'
    export default {
        components: {
        // 'v-user': user
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pins
        margin: 10px auto 14px
        position: relative
        .pinsItems
            margin: 18px 6px
            padding: 6px
            width: 236px
            .AddPinRep
                background: transparent
                border-radius: 8px
                width: 236px
                border: 1px solid #eee
                border-radius: 6px
                -webkit-box-sizing: border-box
                box-sizing: border-box
                color: #888
                cursor: pointer
                font-size: 15px
                position: relative
                text-align: center
                text-shadow: 0 1px 1px #fff
                width: 236px
                height: 284px
                i::before
                    width: 40px
                    height: 40px
                    background: url(../../common/images/w.png) -124px -110px no-repeat
                    display: inline-block
                    font: 0 / 0 serif
                    text-shadow: none
                    color: transparent
                    content: " "
                i
                    position: absolute
                    bottom: 50%
                    -webkit-box-shadow: 0 0 2px #fff inset
                    box-shadow: 0 0 2px #fff inset
                    height: 42px
                    left: 50%
                    margin-left: -22px
                    margin-bottom: -8px
                span
                    left: 0
                    margin-top: 18px
                    position: absolute
                    right: 0
                    font-weight: bold
                    top: 50%
                    color: #b5b5b5
        h1
            font-size: 50px
        & >  .pinsItems:hover::after
            background: rgba(0,0,0,0.05)
            border-radius: 8px
            content: " " !important
            height: 100%
            left: 0
            opacity: 1
            pointer-events: none
            position: absolute
            top: 0
            -webkit-transform: scale(0.96)
            -ms-transform: scale(0.96)
            transform: scale(0.96)
            width: 100%
            z-index: 3
            margin: -10px
            padding: 10px
@media (min-width: 2079px)
    .pins
        width: 2079px
@media (max-width: 2079px) and (min-width: 1820px)
    .pins
        width: 1820px
@media (max-width: 1559px) and (min-width: 1300px)
    .pins
        width: 1300px
@media (max-width: 1299px) and (min-width: 1040px)
    .pins
        width: 1040px
@media (max-width: 1039px)
    .pins
        width: 780px
</style>