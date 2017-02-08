<template>
    <div class="user-routers">
		<div class="boards pins">
			<div v-for="pin in pins" class="pinsItemsClass pinsItem" align="center">
                <div class="">
                <div class="pinsCard pinsCard2 gradient-wrap">
                    <div class="">
                        <img :src="pin.url" width="100%" style="max-width: 100%"/>
                    </div>
                </div>
                </div>
                <div class="pinMetaWrapper" align="right">
                    <a href="###"><em class="repinIconSmall"></em><em class="repinCountSmall">111111</em></a>
                </div>
                <div style="height: 30px" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8">
                        <div class="creditName">Saved to</div>
                        <div class="creditTitle">first</div>
                    </a>
                </div>
            </div>
		</div>
        <!--<v-user></v-user>-->
        <!--<ul class="userCommon">
            <li><router-link to="/u/boards" class="userLink">
                <div class="userLink boardsLink">Boards</div>
            </router-link></li>
            <li><router-link to="/u/pins" class="userLink">
                <div class="userLink pinsLink">Pins</div>
            </router-link></li>
            <li><router-link to="/u/likes" class="userLink">
                <div class="userLink likesLink">Likes</div>
            </router-link></li>
        </ul>-->
        <!--<div class="wrap pins" style="width:100%">
			<div v-for="pin in pins" class="item" style="position: absolute; width: 236px;
			margin-left: 20px; margin-top: 10px; transition: all 1s; max-height: 800px;">
				<img :src="pin.url" width="100%" class=""/>
			</div>-->
			<!--<div class="item h1">2</div>
			<div class="item h2">3</div>
			<div class="item h1">4</div>
			<div class="item h2">5</div>
			<div class="item h3">6</div>
			<div class="item h5">7</div>
			<div class="item h4">8</div>
			<div class="item h1">9</div>
			<div class="item h1">10</div>
			<div class="item h2">11</div>
			<div class="item h3">12</div>
			<div class="item h5">13</div>
			<div class="item h4">14</div>
			<div class="item h2">15</div>
			<div class="item h1">16</div>
			<div class="item h4">17</div>   	-->
		<!--</div>-->
        <div class="likes">
			<h1 style="height:1000px">++Home++</h1>
		</div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                pins: [],
				currentDate: new Date()
            }
        },
        created: function () {
            this.getpins()
        },
        methods: {
            getpins () {
                let self = this
                fetch('http://localhost:3000/upload', {
                // fetch('http://localhost/camU/index/index/getpins', {
                    method: 'GET',
                    // mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (pins) {
                    // console.log(pins)
                    self.pins = pins
                })
            }
        }
    }
</script>

<style lang='scss' scope>

	.wrap{
		position: relative;
		margin: 0 auto 14px;
	}
	.item{
	}
	/*.h1{
		height: 300px;
		background-color: #79C40E;
	}
	.h2{
		height: 500px;
		background-color: #FBA20E;
	}
	.h3{
		height: 700px;
		background-color: #0ACBB6;
	}
	.h4{
		height: 400px;
		background-color: #820F6E;
	}
	.h5{
		height: 200px;
		background-color: #E45555;
	}*/
    .likes {
		position: relative;
        h1 {
            font-size: 50px
        }
    }
</style>