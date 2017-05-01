<template>
    <div class="user-routers">
    <v-header></v-header>
    <div>
    <div class="fixedHeader">
        <div class="userCommon flex">
            <ul class="" style="width:25%;padding: 7px 2px;fill:#b5b5b5;">
                <li class="" >
                    <div class="iconButton">
                        <el-button v-if="parseInt(board.uid)===parseInt(arrCookie)" type="text" class="Button sendProfileButton mr2" @click="dialogFormVisible1 = true">
                            <svg style="fill:#b5b5b5" height="24" width="24" viewBox="0 0 16 16" aria-label="" role="img"><title></title><path d="M8.917 3.368L1.67 10.577a.664.664 0 0 0-.154.253l-.005-.002L.03 
                            15.13h.007a.659.659 0 0 0 .154.68c.185.185.451.232.684.154v.007L5.2 14.495l-.001-.005a.642.642 0 0 0 .254-.152l7.245-7.209-3.78-3.76zm6.3-2.507c-1.26-1.253-2.736-1.038-3.78 
                            0l-1.26 1.254 3.78 3.76 1.26-1.253a2.65 2.65 0 0 0 0-3.76"></path></svg>
                            <span class="accessibilityText">Edit</span>
                        </el-button>
                        <el-button v-else :disabled="true" type="text" class="Button sendProfileButton mr2">
                            <svg style="fill:#b5b5b5" height="24" width="24" viewBox="0 0 16 16" aria-label="" role="img"><title></title><path d="M8.917 3.368L1.67 10.577a.664.664 0 0 0-.154.253l-.005-.002L.03 
                            15.13h.007a.659.659 0 0 0 .154.68c.185.185.451.232.684.154v.007L5.2 14.495l-.001-.005a.642.642 0 0 0 .254-.152l7.245-7.209-3.78-3.76zm6.3-2.507c-1.26-1.253-2.736-1.038-3.78 
                            0l-1.26 1.254 3.78 3.76 1.26-1.253a2.65 2.65 0 0 0 0-3.76"></path></svg>
                            <span class="accessibilityText">Edit</span>
                        </el-button>
                    </div>
                </li>
                <li v-if="parseInt(board.uid)===parseInt(arrCookie)" class="" >
                    <div class="iconButton">
                        <el-button type="text" class="Button sendProfileButton mr2">
                            <em style="margin-left: 10px"></em>
                            <span class="accessibilityText">Send Profile</span>
                        </el-button>
                    </div>
                </li>
                <li v-if="parseInt(board.uid)===parseInt(arrCookie)" class="" id="userInfo">
                    <div class="iconButton">
                         <el-popover ref="popover3" placement="bottom" width="100" trigger="click">
                            <div style="height:130px;text-align:center">
                                <el-button style="display: inline;" type="text" @click="">sth.</el-button>
                            </div>
                        </el-popover>
                        <el-button type="text" v-popover:popover3 class="Button userMenuButton">
                            <svg height="24" width="24" viewBox="0 0 16 16" aria-label="" role="img"><title></title><path d="M14 10a2 2 0 1 1 0-3.999A2 
                            2 0 0 1 14 10zm-6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                            <span class="accessibilityText">User menu</span>
                        </el-button>
                    </div>
                </li>
            </ul>
            <div style="width:50%;vertical-align: middle;text-align:center;">
            </div>
            <div style="width:25%"></div>
        </div>
    </div>
    <div class="userCommon">
        <div v-for="item in inviters.mess" v-if="item.status===0&&parseInt(item.inviteduid)===parseInt(arrCookie)" style="margin-bottom:-66px;padding-top:76px;padding-left:10px;text-align:center;">
            <div style="padding:8px 4px;background-color:#aaa;border-radius:8px;">
            <span style="display:inline;padding-right:25px;font-size:14px;">Bubble invited you to collaborate on this board</span>
            <el-button @click="status=0,handlenews(item.bid)">Ignore</el-button>
            <el-button @click="status=1,handlenews(item.bid)" type="primary">Accept</el-button>
            </div>
        </div>
    </div>
    <div class="userCommon">
        <div class="" style="padding-top:74px;padding-left: 10px">
            <div class="user-info">
                <div class="fontFamily">
                    <div class="_sp">
                        <h1>{{ bName.bname }}</h1>
                    </div>
                    <div v-if="board.count>0" class="_sp _sp2">
                        <el-button class="btn-savepin" v-if="inviters.count>0" icon="plus" type="danger" @click="dialogVisible3 = true">Save pin</el-button>
                        <el-button class="btn-savepin" v-if="parseInt(board.uid)===parseInt(arrCookie)"  icon="plus" type="danger" @click="dialogVisible3 = true">Save pin</el-button>
                    </div>
                </div>
                <div style="clear:both;" class="fontFamily"><span class="pins-count">{{ board.count }} Pins</span></div>
                <div v-if="parseInt(inviters.count)>0" style="" class="fontFamily"><span class="pins-count">{{ inviters.count }} Followers</span></div>
            </div>
            <div class="user-info-board" align="right">
                <div v-if="board.secret===true" class="user-info-li" style="background:#555;">
                    <svg class="_3z" height="32" width="32" viewBox="0 0 16 16" aria-label="secret board" role="img"><title>secret board</title><path d="M12.8 
                    6.791h-.04V4.566C12.76 2.048 10.625 0 8 0S3.24 2.048 3.24 4.566v2.225H3.2c-.777.984-1.2 2.2-1.2 3.454C2 13.423 4.686 16 8 16s6-2.577 
                    6-5.755c0-1.253-.423-2.47-1.2-3.454zm-2.36 0H5.56V4.566c0-1.29 1.095-2.34 2.44-2.34s2.44 1.05 2.44 2.34v2.225z"></path></svg>
                </div>
                <div class="user-info-li">
                    <el-button v-for="inviter in inviters.mess" v-if="inviter.status===1&&parseInt(inviter.inviteduid)===parseInt(arrCookie)" type="text" @click="dialogVisible6=true,getInvite()" class="hasIcon borderless">
                        <i style="font-size:36px;font-weight:bold;" class="el-icon-plus"></i></el-button>
                    <el-button v-if="parseInt(board.uid)===parseInt(arrCookie)" type="text" @click="dialogVisible6=true,getInvite()" class="hasIcon borderless">
                        <i style="font-size:36px;font-weight:bold;" class="el-icon-plus"></i></el-button>
                    <el-button v-else :disabled="true" type="text" class="hasIcon borderless"><i style="font-size:36px;font-weight:bold;" class="el-icon-plus"></i></el-button>
                </div>
                <router-link :to="'/'+inviter.invitedwname+'/'" v-for="inviter in inviters.mess" v-if="inviter.status===1" class="user-info-li">
                    <el-tooltip class="" effect="light" :content="inviter.inviteduname+' invited by '+board.name" placement="top">
                        <img v-if="inviter.img" :src="http+'/camu'+inviter.img" width="56" height="56">
                        <img v-else src="../../common/images/person.png" width="56" height="56" />
                    </el-tooltip>
                </router-link>
                <router-link :to="'/'+board.name+'/'" class="user-info-li">
                    <el-tooltip class="" effect="light" :content="board.name+', the Owner'" placement="top">
                        <img v-if="board.img" :src="http+'/camu'+board.img" width="56" height="56">
                        <img v-else src="../../common/images/person.png" width="56" height="56" >
                    </el-tooltip>
                </router-link>
            </div>
        </div>
    </div>
    <div v-if="board.count>0" class="homePins">
        <waterfall :line-gap="260" :watch="pins">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot class="waterfall-img"
            v-for="(pin, index) in pins"
            :width="260"
            :height="pin.height"
            :order="index"
            :key="pin.iid"
        >
        <div style="padding: 12px">
            <div class="pin-img">
                <div class="pin-btn" style="padding:4px 0px 0px 4px;">
                    <div class="btn"><el-button :plain="true" type="danger" icon="share"></el-button></div>
                    <div class="btn"><el-button :plain="true" type="danger" icon="star-on"></el-button></div>
                    <div style="margin-left: 72px;" class="btn"><el-button type="primary">save</el-button></div>
                </div>
                <!--<router-link :to="{ name: 'pin', params: { id: pin.iid }}">-->
                <router-link :to="'/pin/' + pin.iid">
                    <img :src="pin.url" width="100%" class=""/>
                </router-link>
            </div>
            <div>
                <div class="pinMetaWrapper">
                    <div style="width: 150px;height:29px;line-height:14px;font-size:14px;
                    word-break:break-all;float:left;overflow:hidden">
                    Nothing</div>
                    <a href="###" align="right"><em class="repinIconSmall"></em>
                    <em class="repinCountSmall">111111</em></a>
                </div>
                <!--<div style="clear: both;padding-top: 5px;color:#aaa;">Picked for you</div>-->
                <div style="padding:8px 0px;clear:both" align="left">
                    <a href="####" style="height: 30px;color: #a8a8a8;position:relative;">
                        <div class="userPic" style="float:left">
                            <img v-if="pin.uid===board.uid" :src="http+'/camu'+board.img"
                            style="position:absolute;z-index:2;vertical-align: middle;width:24px;height:24px;border-radius:50%;">
                            <img v-else src="../../common/images/person.png"
                            style="position:absolute;z-index:1;vertical-align: middle;width:24px;height:24px">
                            </div>
                            <img v-for="inviter in inviters.mess" v-if="pin.uid===inviter.inviteduid" :src="http+'/camu'+inviter.img"
                            style="position:absolute;z-index:2;vertical-align: middle;width:24px;height:24px;border-radius:50%;">
                        <div style="padding:0px 32px;" class="creditName">Saved to</div>
                        <div style="padding:0px 32px;" class="creditTitle">{{ pin.bname }}</div>
                    </a>
                </div>
            </div>
        </div>
            <!--
            your component
            -->
        </waterfall-slot>
        </waterfall>
        <!--<router-view></router-view>-->
		<!--<el-button type="text" @click="open4">点击打开 Message Box</el-button>-->
    </div>
    <div v-else class="pins">
        <div class="pinsItemsClass pinsItem">
            <div class="pinsCard" style="height: 284px">
                <a class="AddPinRep ModalTrigger" style="height: 284px">
                    <span>Pins you save will<br>
                    live here</span>
                </a>
            </div>
        </div>
    </div>
    <div style="clear:both;height:500px">
    </div>
    <el-dialog :title="'Edit your board : ' + board.bname" v-model="dialogFormVisible1" top="18%">
        <el-form :model="board" :rules="rules1" ref="board" label-position="left">
            <el-form-item label="Name" prop="bname" :label-width="formLabelWidth">
            <el-input v-model="board.bname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Description" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="board.bdescription" placeholder="What's yours board about?"
            auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Category" :label-width="formLabelWidth">
                <el-select v-model="board.category" placeholder="What kind of board is it?" clearable>
                    <el-option
                    v-for="item in options"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Cover" :label-width="formLabelWidth">
                <el-button v-if="board.count > 0"
                @click="dialogVisible7 = true,
                changeCover(board.bid)">Change</el-button>
                <el-button v-else type="primary" :disabled="true">Change</el-button>
            </el-form-item>
            <el-form-item label="Secret" :label-width="formLabelWidth">
                <el-switch
                v-model="board.secret"
                on-text="Yes"
                off-text="No"
                on-color="#13ce66"
                off-color="#ff4949">
                </el-switch>
            <!--<el-radio-group v-model="board.secret">
                <el-radio-button label="Yes"></el-radio-button>
                <el-radio-button label="No"></el-radio-button>>
            </el-radio-group>-->
            </el-form-item>
            <el-form-item label="Collaborators" :label-width="formLabelWidth">
                <el-input v-model="input3" auto-complete="off" style="width:350px"></el-input>
                <el-button  @click="invite">Invite</el-button>
            <!--<el-radio-group v-model="board.secret">
                <el-radio-button label="Yes"></el-radio-button>
                <el-radio-button label="No"></el-radio-button>>
            </el-radio-group>-->
            </el-form-item>
            <hr>
            <div class="dialog-footer">
                <el-button class="pz3" :plain="true" type="danger" @click="dialogVisible = true" style="float:left">Delete board</el-button>
                <el-button class="pz3" @click="dialogFormVisible1 = false">Cancel</el-button>
                <el-button class="pz3" style="color: #fff" type="primary" @click="saveChange('board')">Save</el-button>
            </div>
        </el-form>
    </el-dialog>
    <el-dialog :title="'Change Board Cover / ' + board.bname" v-model="dialogVisible7" top="20%">
        <!--<swiper :options="swiperOption">
        <swiper-slide v-for="slide in pinss">
        <el-radio-group v-model="radio3" fill="#FF4949">
                <el-radio-button :label="slide.id"
                :style="{backgroundImage:'url(' + slide.url + ')'}">
                </el-radio-button>
        </el-radio-group>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>-->
            <!--<el-carousel type="card" indicator-position="none"
            height="300px" :autoplay="false">-->
            <div>
                <div style="width: 301px;height:200px;margin-left:120px;">
                    <el-button v-if="pinss.status > 1" size="large" type="text" icon="arrow-left" style="position: absolute;
                    top:40%;left:120px;" @click="coverImg(0)"></el-button>
                    <el-button v-else  :disabled="true" size="large" type="text" icon="arrow-left" style="position: absolute;
                    top:40%;left:120px;"></el-button>
                    <el-button v-if="pinss.status > 0 && pinss.status < 3" size="large" type="text" icon="arrow-right" style="position: absolute;
                    top:40%;right: 120px" @click="coverImg(1)"></el-button>
                    <el-button v-else  :disabled="true" size="large" type="text" icon="arrow-right" style="position: absolute;
                    top:40%;right: 120px"></el-button>
                    <img :src="'' + pinss.url" width="100%" style="width: 301px;
                    height: 200px;object-fit: cover;max-width:100%;border:1px solid #eee">
                </div>
            </div>
            <!--</el-carousel>-->
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible7 = false">Cancel</el-button>
            <el-button type="primary" @click="saveCover(pinss)">Save Changes</el-button>
        </span>
    </el-dialog>
    <el-dialog title="Are you sure?" v-model="dialogVisible" top="35%">
        <span>Once you delete a board and all its Pins, you can't undo it!</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="
                delBoard(board.bid)">Delete board</el-button>
        </span>
    </el-dialog>
    <el-dialog title="Save from" v-model="dialogVisible3" class="pin-tiny" size="tiny">
            <div>
                <el-row style="width:320px">
                <el-col :span="12"><button class="grid-content bg-purple"
                @click="dialogVisible4 = true,dialogVisible3 = false">
                    <em></em>
                    <span>The web</span>
                    </button>
                </el-col>
                <el-col :span="12"><button class="grid-content bg-purple-light"
                @click="dialogVisible2 = true,dialogVisible3 = false">
                    <em></em>
                    <span>Your device</span>
                    </button>
                </el-col>
                </el-row>
                <!--<el-button>The web</el-button>
                <button>The web</button>-->
            </div>
        </el-dialog>
        <el-dialog title="Upload a Pin" v-model="dialogVisible2" size="tiny">
            <el-upload name="photo"
            style="padding: 18px;background:#ededed;"
            :action="http + '/camU/index/index/uploadpintmp'"
            :on-change="handleResponse"
            :on-remove="handleRemove"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false">
            <el-button size="small" type="primary">Choose image</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png/gif文件，且不超过2M</div>
            </el-upload>
            <!--<el-upload
            action="/camU/index/index/uploadPins.html"
            list-type="picture-card" name="photo"
            :on-change="handleResponse"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>-->
            <!--<span>
                <form name="board" id="board2" class="formUploadPin">  
                    <input type="file" name="photo" id="photo" accept="image/gif,
                    image/png, image/jpeg, image/bmp, image/webp" @change="uploadOne1">
                </form>
            </span>-->
        </el-dialog>
        <!--<el-dialog v-model="dialogImgVisible">
            <div>
                <img width="100%" :src="dialogImageUrl" alt="">
            </div>
        </el-dialog>-->
        <el-dialog title="Save from a website" v-model="dialogVisible4">
            <el-form :model="formInline" :rules="rules3" ref="formInline">
            <el-form-item prop="url">
                <el-input v-model="formInline.url" placeholder="http://..." auto-complete="off"
                style="width:464px;margin-right:10px"></el-input>
                <el-button v-if="!formInline.url" type="primary" :disabled="true">Next</el-button>
                <el-button v-else type="info" @click="urlForm('formInline')">Next</el-button>
            </el-form-item>
            </el-form>
            <!--<el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="info">信息按钮</el-button>-->
        </el-dialog>
        <el-dialog title="" v-model="dialogVisible5">
            <el-form>
                <el-row>
                <el-col :span="12" style="border-right: 1px solid #efefef;background-color:#fdfdfd">
                    <div style="width:236px;min-height: 410px;max-height:480px;margin:auto;padding-top:2px">
                        <div style="margin-bottom: 5px;">
                        <img :src="webUrl" width="100%" id="imgData" style="border-radius: 4px;">
                        </div>
                        <el-input v-model="ImageUrl" style="display:none"></el-input>
                        <el-input v-model="iswebsite" style="display:none"></el-input>
                        <div style="padding-bottom: 20px">
                            <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Tell us about this Pin.."
                            v-model="textarea">
                            </el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" style="padding-left: 20px">
                    <div>
                        <div style="padding-bottom: 10px;border-bottom: 1px solid #efefef">
                            <div class="title" style="font-size: 18px;font-weight: bold;
                            padding-bottom: 8px;">Choose board</div>
                            <el-input
                            icon="search"
                            placeholder="search"
                            v-model="input2"
                            :on-icon-click="handleIconClick">
                            </el-input>
                        </div>
                        <div>
                            <div style="padding: 8px 0px">All boards</div>
                            <!--<el-button-group v-for="bo in bos">
                                <el-button type="text">{{ bo.bname }}</el-button>
                                <el-button type="primary" icon="share">Save</el-button>
                            </el-button-group>-->
                            <div class="choose-board">
                                <div v-for="bo in bos">
                                    <div class="board-list">
                                        <div style="position:relative">
                                            <el-button type="text" class="board-list-btn">
                                                <img v-if="bo.cover" :src="bo.cover" style="vertical-align:middle;width:35px;
                                                height:34px;object-fit: cover;border-radius:3px;">
                                                <img v-else src="../../common/images/pg.png" style="vertical-align:middle">
                                                <span style="display:inline">{{ bo.bname }}</span>
                                                <svg v-if="bo.secret === 'true'" class="_2X6AN" style="right:20px;" viewBox="0 0 16 16"><path d="M12.8 6.791h-.04V4.566C12.76 2.048 10.625 0 8 0S3.24 2.048 
                                                3.24 4.566v2.225H3.2A5.577 5.577 0 0 0 2 10.245C2 13.423 4.686 16 8 16s6-2.577 6-5.755a5.579 5.579 0 0 0-1.2-3.454zm-2.36 
                                                0H5.56V4.566c0-1.29 1.095-2.34 2.44-2.34s2.44 1.05 2.44 2.34v2.225z" fill-rule="evenodd"></path></svg>
                                                <svg v-if="parseInt(bo.uid)!==parseInt(arrCookie)" class="_2X6AN" viewBox="0 0 16 16"><path d="M9.143 10.2A4 4 0 0 1 16 13v1H0v-1a5 5 0 0 1 9.143-2.8zM12
                                                8a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 8zM5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill-rule="evenodd"></path></svg>
                                                </el-button>
                                            <el-button style="position:absolute;top:0;right:0;" type="primary" class="board-list-save"
                                            @click="pinSave(bo)">Save</el-button>
                                        </div>
                                    </div>
                                    <!--<div>
                                        <div>{{ bo.bname }}</div>
                                        <div><el-button type="primary">Save</el-button></div>
                                    </div>-->
                                </div>
                            </div>
                            <div>
                                <div class="creat-board">
                                    <el-button><i></i><em>Create board</em></el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                </el-row>
            </el-form>
        </el-dialog>
        <el-dialog title="Invite people to join this board" v-model="dialogVisible6">
            <el-form>
                <el-row>
                <el-col :span="12" style="border-right: 1px solid #efefef;background-color:#fdfdfd">
                    <div>
                        <div style="padding-bottom: 10px;border-bottom: 1px solid #efefef">
                            <el-input
                            style="width:195px;"
                            placeholder="Name"
                            v-model="input3"
                            :on-icon-click="handleIconClick">
                            </el-input>
                            <el-button @click="invite">Invite</el-button>
                        </div>
                        <div>
                            <div class="choose-board">
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" style="padding-left: 20px">
                    <div>
                        <div style="padding-bottom: 10px;border-bottom: 1px solid #efefef">
                        </div>
                        <div>
                            <div style="padding: 8px 0px">Collaborators</div>
                            <!--<el-button-group v-for="bo in bos">
                                <el-button type="text">{{ bo.bname }}</el-button>
                                <el-button type="primary" icon="share">Save</el-button>
                            </el-button-group>-->
                            <div class="choose-board">
                                <div>
                                    <div class="board-list">
                                        <div>
                                            <el-button type="text" class="board-list-btn" style="margin-left: 5px;">
                                                <img v-if="board.img" :src="http+'/camu'+board.img" style="vertical-align:middle;width:35px;
                                                height:34px;object-fit: cover;border-radius:3px;">
                                                <img v-else src="../../common/images/pg.png" style="vertical-align:middle">
                                                <span style="display:inline">{{ board.name }}</span>
                                            </el-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="inviters.status===1" v-for="inviter in inviters.mess">
                                    <div v-if="parseInt(arrCookie)===parseInt(inviter.inviteduid)" class="board-list">
                                        <el-button type="text" class="board-list-btn" style="margin-left: 5px;">
                                            <img v-if="inviter.img" :src="http+'/camu'+inviter.img" style="vertical-align:middle;width:35px;
                                            height:34px;object-fit: cover;border-radius:3px;">
                                            <img v-else src="../../common/images/person.png" style="width:35px;height:34px;vertical-align:middle">
                                            <span style="display:inline">{{ inviter.inviteduname }}</span>
                                            <i v-if="inviter.status===1" class="el-icon-circle-check el-icon--right" style="color:#13CE66;"></i>
                                            <i v-else class="el-icon-circle-cross el-icon--right"></i>
                                            </el-button>
                                            <el-button type="primary" class="board-list-save"
                                            @click="remove(inviter.inviteduid)">Leave</el-button>
                                    </div>
                                    <div v-else class="board-list">
                                        <el-button v-if="inviter.status===1" type="text" class="board-list-btn" style="margin-left: 5px;">
                                            <img v-if="inviter.img" :src="http+'/camu'+inviter.img" style="vertical-align:middle;width:35px;
                                            height:34px;object-fit: cover;border-radius:3px;">
                                            <img v-else src="../../common/images/person.png" style="width:35px;height:34px;vertical-align:middle">
                                            <span style="display:inline">{{ inviter.inviteduname }}</span>
                                            <i v-if="inviter.status===1" class="el-icon-circle-check el-icon--right" style="color:#13CE66;"></i>
                                            <i v-else class="el-icon-circle-cross el-icon--right"></i>
                                            </el-button>
                                        <el-button v-else type="text" class="board-list-btn" style="margin-left: 5px;opacity:0.5">
                                        <img v-if="inviter.img" :src="http+'/camu'+inviter.img" style="vertical-align:middle;width:35px;
                                        height:34px;object-fit: cover;border-radius:3px;">
                                        <img v-else src="../../common/images/person.png" style="width:35px;height:34px;vertical-align:middle">
                                        <span style="display:inline">{{ inviter.inviteduname }}</span>
                                        <i v-if="inviter.status===1" class="el-icon-circle-check el-icon--right" style="color:#13CE66;"></i>
                                        <i v-else class="el-icon-circle-cross el-icon--right"></i>
                                        </el-button>
                                        <span v-if="parseInt(arrCookie)===parseInt(inviter.uid)" style="display:inline">
                                        <el-button type="primary" class="board-list-save"
                                        @click="remove(inviter.inviteduid)">Remove</el-button></span>
                                        <span v-else-if="parseInt(arrCookie)===parseInt(inviter.inviteruid)" style="display:inline">
                                        <el-button type="primary" class="board-list-save"
                                        @click="remove(inviter.inviteduid)">Remove</el-button></span>
                                        <!--<span v-else-if="parseInt(arrCookie)===parseInt(inviter.inviteduid)" style="display:inline">
                                        <el-button type="primary" class="board-list-save"
                                        @click="remove(inviter.inviteduname)">Leave</el-button></span>-->
                                        <!--<span v-else></span>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                </el-row>
                <div align="right" style="margin-top:12px;margin-bottom:-12px;">
                    <el-button type="primary" @click="dialogVisible6 = false">Done</el-button>
                </div>
            </el-form>
        </el-dialog>
    <!--<h1>this board name: {{ bName.bname }}</h1>-->
    </div>
    </div>
</template>

<script>
import header from '../header/header.vue'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default {
        components: {
        'v-header': header,
        Waterfall,
        WaterfallSlot
        },
        mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // debugger;
            // let a = this.$route.params
            // console.log(a)
        },
        data () {
            let bname = this.$route.params
            let strCookie = document.cookie;
            let arr = strCookie.split(";")
            let arrCookie = arr[0].split("=")
            let arrCookie2 = arr[1].split("=")
            var checkUrl = (rule, value, callback) => {
                // var ImgObj = new Image()
                // ImgObj.src = value
                // if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
                //     callback();
                // } else {
                //     callback(new Error('请输入图片链接'));
                // }
                // value = value.match(/http:\/\/.+/)
                if (value === null) {
                callback(new Error('请输入图片链接'));
                } else {
                callback()
                }
            }
            var checkName = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('board is not NULL'));
                }
                setTimeout(() => {
                    if (value === 'boards' || value === 'pins' || value === 'likes' || value === 'pin') {
                        callback(new Error('forbidden board name!'));
                    } else {
                        callback();
                    }
                }, 500);
            }
            return {
                http: 'http://localhost',
                bName: bname,
                arrCookie: arrCookie[1],
                arrname: arrCookie2[1],
                pins: [],
                board: '',
                align: 'center',
                textarea: '',
                input2: '',
                input3: '',
                dialogVisible: false,
                dialogVisible2: false,
                dialogVisible3: false,
                dialogVisible4: false,
                dialogVisible5: false,
                dialogVisible6: false,
                dialogVisible7: false,
                dialogFormVisible1: false,
                savepinbtn: [],
                bos: [],
                dialogImageUrl: '',
                ImageUrl: '',
                webUrl: '',
                iswebsite: '',
                dialogImgVisible: false,
                formLabelWidth: '120px',
                pinss: {},
                saveCovertag: 0,
                rules2: {
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                rules1: {
                    bname: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                },
                options: '',
                value: '',
                boardchange: '',
                formInline: {
                    url: ''
                },
                rules3: {
                    url: [
                        { validator: checkUrl, trigger: 'blur' }
                    ]
                },
                inviters: '',
                invitedname: 1,
                status: '',
                count: 0,
                // rmInviter: 0,
                username: this.$route.params.username
            }
        },
        created: function () {
            this.pinHeight()
            this.getPins()
        },
        methods: {
            getPins () {
                let self = this
                let formData = new FormData()
                self.bname = self.$route.params.bname
                self.username = self.$route.params.username
                formData.append("id", self.arrCookie)
                formData.append("bname", self.$route.params.bname)
                formData.append("uname", self.$route.params.username)
                fetch(self.http + '/camU/index/index/getboardpins', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getboards', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    if (pins.status === 1) {
                        let length = pins.pins.length
                        for (let i = 0; i < length; i++) {
                            pins.pins[i].height = 114 + parseInt(pins.pins[i].height)
                            if (pins.pins[i].iswebsite === 0) {
                                pins.pins[i].url = self.http + "/camu" + pins.pins[i].url
                                // console.log(pins)
                            }
                        }
                        if (pins.board.secret === 'false') {
                            pins.board.secret = false
                        } else {
                            pins.board.secret = true
                        }
                        // console.log(pins)
                        self.pins = pins.pins
                        self.board = pins.board
                        formData.append("bid", pins.board.bid)
                        fetch(self.http + '/camU/index/index/getinvite', {
                            method: 'POST',
                            body: formData
                            // mode: 'no-cors',
                            // headers: { 'Content-Type': 'application/json' },
                            // credentials: 'same-origin'
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            if (res.status === 1) {
                                self.inviters = res
                            }
                            // if (res.status === 1) {
                            //     if (res.mess === 'already') {
                            //         self.$message.error('you have invited this name to this board!')
                            //     } else {
                            //         self.$message.success('invited is send!')
                            //     }
                            //     self.invitedname += 1
                            // } else {
                            //     self.$message.error('don`t have this name!')
                            // }
                        })
                    } else if (pins.status === 2) {
                        let length = pins.pins.length
                        for (let i = 0; i < length; i++) {
                            pins.pins[i].height = 114 + parseInt(pins.pins[i].height)
                            if (pins.pins[i].iswebsite === 0) {
                                pins.pins[i].url = self.http + "/camu" + pins.pins[i].url
                                // console.log(pins)
                            }
                        }
                        if (pins.board.secret === 'false') {
                            pins.board.secret = false
                        } else {
                            pins.board.secret = true
                        }
                        // console.log(pins)
                        self.pins = pins.pins
                        self.board = pins.board
                        formData.append("bid", pins.board.bid)
                        fetch(self.http + '/camU/index/index/getinvite', {
                            method: 'POST',
                            body: formData
                            // mode: 'no-cors',
                            // headers: { 'Content-Type': 'application/json' },
                            // credentials: 'same-origin'
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            if (res.status === 1) {
                                self.inviters = res
                            }
                        })
                    } else if (pins.status === 0 && pins.pins === 2) {
                        self.$message.error('the page not found!')
                        setTimeout(() => {
                            self.$router.replace('/404/')
                        }, 2000);
                    } else {
                        let length = pins.pins.length
                        for (let i = 0; i < length; i++) {
                            pins.pins[i].height = 114 + parseInt(pins.pins[i].height)
                            if (pins.pins[i].iswebsite === 0) {
                                pins.pins[i].url = self.http + "/camu" + pins.pins[i].url
                                // console.log(pins)
                            }
                        }
                        if (pins.board.secret === 'false') {
                            pins.board.secret = false
                        } else {
                            pins.board.secret = true
                        }
                        // console.log(pins)
                        self.pins = pins.pins
                        self.board = pins.board
                        formData.append("bid", pins.board.bid)
                        fetch(self.http + '/camU/index/index/getinvite', {
                            method: 'POST',
                            body: formData
                            // mode: 'no-cors',
                            // headers: { 'Content-Type': 'application/json' },
                            // credentials: 'same-origin'
                        })
                        .then(res => res.json())
                        .then(function (res) {
                            if (res.status === 1) {
                                self.inviters = res
                            }
                        })
                    }
                })
                fetch(self.http + '/camU/index/index/getcategory', {
                    method: 'POST'
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    self.options = res
                })
            },
            pinHeight () {
                let url = this.$route.params
                console.log(url.bname, url.username)
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
            },
            handleResponse(file, fileList) {
                let self = this
                if (file.response.status === 1) {
                let formData = new FormData()
                formData.append("id", self.arrCookie);
                // fetch(':3000/todos', {
                fetch(self.http + '/camU/index/index/getboards', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (bos) {
                    // console.log(bos)
                    self.bos = bos
                })
                this.webUrl = file.url
                this.ImageUrl = file.response.url
                this.iswebsite = 0
                this.dialogVisible5 = true
                this.dialogVisible2 = false
                } else {
                    console.log('error')
                }
                console.log(file)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isJPG1 = file.type === 'image/png';
                const isJPG2 = file.type === 'image/gif';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG && !isJPG1 && !isJPG2) {
                this.$message.error('上传头像图片只能是 jpeg/JPG/png/gif 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG1 || isJPG2 || isJPG && isLt2M;
            },
            // handlePictureCardPreview(file) {
            //     this.dialogImageUrl = file.url
            //     this.dialogImgVisible = true
            //     console.log(file);
            // },
            urlForm (e) {
                let self = this
                let ImgObj = new Image()
                ImgObj.src = self.formInline.url
                // debugger
                if (ImgObj.width > 0 && ImgObj.height > 0) {
                let formData = new FormData()
                formData.append("id", self.arrCookie);
                // fetch(':3000/todos', {
                fetch(self.http + '/camU/index/index/getboards', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (bos) {
                    // console.log(bos)
                    self.bos = bos
                })
                this.webUrl = self.formInline.url
                this.ImageUrl = self.formInline.url
                this.iswebsite = 1
                this.dialogVisible5 = true
                this.dialogVisible4 = false
                } else {
                    this.$message.error('无法识别图片,请重试或更换图片链接');
                }
                this.$refs[e].resetFields()
                // console.log('kk')
            },
            pinSave (e) {
                // console.log(e)
                // debugger
                let h = document.getElementById("imgData")
                let height = h.offsetHeight
                let self = this
                let ImgObj = new Image()
                ImgObj.src = this.webUrl
                if (height > 1111) {
                    height = 1111
                }
                if (ImgObj.width > 0 && ImgObj.height > 0) {
                    let formData = new FormData()
                    formData.append("id", self.arrCookie)
                    formData.append("height", height)
                    formData.append("url", self.ImageUrl)
                    formData.append("idescription", self.textarea)
                    formData.append("bid", e.bid)
                    formData.append("bname", e.bname)
                    formData.append("iswebsite", self.iswebsite)
                    // fetch(':3000/todos', {
                    fetch(self.http + '/camU/index/index/uploadpin', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    .then(function (res) {
                        // console.log(res)
                        if (res.status === 1) {
                            self.$message.success('数据保存成功')
                            self.dialogVisible5 = false
                        }
                    })
                    // console.log('success')
                } else {
                    this.$message.error('无法识别或保存图片');
                    // console.log('error')
                }
                // console.log(height)
                // console.log(e)
                // console.log(this.textarea)
                // console.log(this.iswebsite)
                // console.log(this.ImageUrl)
                // console.log(self.ImageUrl)
            },
            handleIconClick () {},
            changeCover (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch(self.http + '/camU/index/index/changecover', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getpins', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    pins.url = self.http + "/camu" + pins.url
                    self.pinss = pins
                })
                console.log(e + 'hhhh')
            },
            coverImg (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("iid", self.pinss.iid)
                formData.append("bid", self.pinss.bid)
                formData.append('status', e)
                fetch(self.http + '/camU/index/index/coverimg', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/upload', {
                // // fetch('/camU/index/index/getpins', {
                //     method: 'GET',
                //     // mode: 'no-cors',
                //     headers: { 'Content-Type': 'application/json' },
                //     credentials: 'same-origin'
                // })
                // .then(res => res.json())
                .then(function (pins) {
                    pins.url = self.http + "/camu" + pins.url
                    self.pinss = pins
                })
                // console.log(this.pinss.bid)
            },
            saveCover (e) {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("url", self.pinss.url)
                formData.append("bid", self.pinss.bid)
                fetch(self.http + '/camU/index/index/savecover', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        self.$message.success('success!')
                        self.saveCovertag += 1
                        self.dialogFormVisible1 = false
                        self.dialogVisible2 = false
                    } else {
                        self.$message.error('update error!')
                    }
                })
            },
            saveChange (formName) {
                let self = this
                // var bname = this.board.bname.trim()
                // var description = this.board.description
                // var secret = this.board.secret
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", self.board.bid)
                formData.append("bname", self.board.bname.trim())
                formData.append('description', self.board.bdescription)
                formData.append('category', self.board.category)
                formData.append('secret', self.board.secret)
                this.$refs[formName].validate((valid) => {
                if (!valid) {
                    // self.$message.error("name is used or can't be used")
                } else {
                    fetch(self.http + '/camU/index/index/saveboardchange', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    // fetch(':3000/todos', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ bname, secret }),
                    //     headers: { 'Content-Type': 'application/json' },
                    //     credentials: 'same-origin'
                    // })
                    // .then(res => res.json())
                    .then(function (response) {
                        if (response.status === 1 && response.info === 1) {
                            // self.bos.reverse() // array倒序
                            // // self.bos.unshift(response)
                            // self.bos.push(response)
                            // self.bos.reverse()
                            self.$message.success('success!')
                            self.dialogFormVisible1 = false
                            self.boardchange += 1
                        } else if (response.status === 1 && response.info === 0) {
                            // self.bos.reverse() // array倒序
                            // // self.bos.unshift(response)
                            // self.bos.push(response)
                            // self.bos.reverse()
                            self.$message.success('you have change nothing!')
                            self.dialogFormVisible1 = false
                        } else {
                            self.$message.error("board name is used by yourself")
                        }
                    })
                }
                })
            },
            // delb (e) {
            //     let self = this
            //     fetch(':3000/todos/' + e, {
            //         method: 'GET'
            //     })
            //     .then(res => res.json())
            //     .then(function (res) {
            //         self.board = res
            //         // console.log(self.board.bname)
            //     // if (res.status >= 200) {
            //     //     for (var i = self.todos.length - 1; i >= 0; i--) {
            //     //     if (self.todos[i].id === e) {
            //     //         console.log(i)
            //     //         // self.todos.splice(i,1)
            //     //     }
            //     //     }
            //     // }
            //     })
            //     console.log(e)
            // },
            // remove (id) {
            //     // console.log(id)
            //     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //     })
            //     .then(() => {
            //             // delb({ id })
            //             // .then(() => {
            //         this.$message({
            //             type: 'success',
            //             message: '删除成功!'
            //         })
            //             // })
            //     }).catch(() => {
            //     this.$message({
            //         type: 'info',
            //         message: '已取消删除'
            //     })
            //     })
            // }
            delBoard (e) {
                let self = this
                // for (let i = 0; i < this.bos.length; i++) {
                // // for (let i = self.bos.length; i > 0; i--) {
                //     if (this.bos[i].bid === e) {
                //         this.bos.splice(i, 1) // 根据下标删除当前对应的元素
                //         console.log(self.bos.splice(i, 1))
                //         console.log(i)
                //     }
                // }
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", e)
                fetch(self.http + '/camU/index/index/delboard', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                // fetch(':3000/todos/' + e, {
                //     method: 'DELETE'
                // })
                // .then(res => res.json())
                .then(function (res) {
                    // self.board = res
                    if (res.status) {
                        let length = self.bos.length
                        for (let i = 0; i < length; i++) {
                            // if (self.bos[i].bid === e) {
                            //     self.bos.splice(i, 1) // 根据下标删除当前对应的元素
                            //     console.log(i)
                            // }
                        }
                        self.$message.success('delete success！')
                    }
                    // debugger
                    self.dialogVisible = false
                    self.dialogFormVisible1 = false
                    // self.bos.splice(e - 1, 1)
                    // self.$router.push('/Bubble/boards');
                    // console.log(self.board.bname)
                // if (res.status >= 200) {
                    // for (let i = 0; i < this.bos.length; i++) {
                    //     if (self.todos[i].id === e) {
                    //         self.todos.splice(i, 1)
                    //     }
                    // }
                // }
                })
                // console.log(e)
            },
            invite () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", self.board.bid)
                formData.append("name", self.input3)
                if (self.input3 === self.arrname) {
                    self.$message.error('not allow to invite yourself!')
                } else {
                    fetch(self.http + '/camU/index/index/invite', {
                        method: 'POST',
                        body: formData
                        // mode: 'no-cors',
                        // headers: { 'Content-Type': 'application/json' },
                        // credentials: 'same-origin'
                    })
                    .then(res => res.json())
                    .then(function (res) {
                        if (res.status === 1) {
                            if (res.mess === 'already') {
                                self.$message.error('That user has already been invited to save to this board!')
                            } else if (res.mess === 'dupe') {
                                self.$message.error('That user has already been invited to save to this board!')
                            } else {
                                self.input3 = ''
                                self.$message.success('Invited is send!')
                            }
                            self.invitedname += 1
                        } else if (res.status === 2) {
                            self.$message.error('Not allow to invite the Owner!')
                        } else {
                            self.$message.error('Unfind this name!')
                        }
                    })
                }
                // console.log(self.input3)
            },
            getInvite () {
                let self = this
                let formData = new FormData()
                formData.append("id", self.arrCookie)
                formData.append("bid", self.board.bid)
                formData.append("uname", self.username)
                fetch(self.http + '/camU/index/index/getinvite', {
                    method: 'POST',
                    body: formData
                    // mode: 'no-cors',
                    // headers: { 'Content-Type': 'application/json' },
                    // credentials: 'same-origin'
                })
                .then(res => res.json())
                .then(function (res) {
                    // if (res.status === 1) {
                        self.inviters = res
                    // } else {
                    //     self.inviters = ''
                    // }
                })
                // debugger
            },
            remove (e) {
                let self = this
                let formData = new FormData()
                formData.append('id', e)
                formData.append('toid', parseInt(self.arrCookie))
                formData.append('bid', self.board.bid)
                fetch(self.http + '/camU/index/index/removeinvite', {
                    'method': 'POST',
                    'body': formData
                })
                .then(res => res.json())
                .then(function (res) {
                    if (res.status === 1) {
                        if (parseInt(self.board.uid) === parseInt(self.arrCookie)) {
                            self.invitedname += 1
                        } else {
                            self.invitedname += 1
                            self.dialogVisible6 = false
                        }
                        self.$message.success('success')
                    } else {
                        self.$message.error('failure')
                    }
                })
                .catch(function(error) {
                    console.error('Fetching failed:', error);
                    throw error;
                })
                // console.log(self.board.bid)
                // console.log(e)
            },
            handlenews (e) {
                let self = this
                let formData = new FormData()
                formData.append('status', self.status)
                formData.append('id', self.arrCookie)
                formData.append('bid', e)
                fetch(self.http + '/camu/index/index/handlenews', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(function (res) {
                    self.invitedname += 1
                    // if (res.status === 1) {
                    //     self.count += 1
                    //     self.board = res
                    // } else if (res.status === 3) {
                    //     self.count += 1
                    // }
                })
                .catch(function (error) {
                    console.error('Fetching failed:', error)
                    throw error
                })
                // console.log(e)
                // console.log(self.status)
                // console.log(self.bid)
                // console.log(self.arrCookie)
            }
            // getNewsNums () {
            //     let self = this
            //     let formData = new FormData()
            //     formData.append('id', self.arrCookie)
            //     fetch(self.http + '/camU/index/index/getnewsnums', {
            //         method: 'POST',
            //         body: formData
            //     })
            //     .then(res => res.json())
            //     .then(function (res) {
            //         if (res.status === 1) {
            //             self.newsNums = res.nums
            //         } else {
            //             self.newsNums = 0
            //         }
            //         // console.log(res)
            //     })
            //     .catch(function (error) {
            //         console.error('Fetching failed:', error);
            //         throw error;
            //     })
            //     // console.log(self.arrCookie)
            // }
        },
        watch: {
            dialogVisible5: 'getPins',
            invitedname: 'getInvite',
            "$route": 'getPins'
            // count: 'getNewsNums'

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1 {
  font-size: 4rem;
}
// $a = #f1b1c1
.pins {
    .pinsItem .AddPinRep {
        span {
            margin-top: 0;
        }
    }
}
.el-input-group__prepend {
    color: #333;
    font-weight: bold;
    border: none;
}
.user-info {
    .pins-count {
        font-weight: bold;
        font-size: 14px;
        color: #666;
    }
    .fontFamily {
        position: relative;
        ._sp {
            display: inline-block;
            vertical-align: middle;
        }
        ._sp2 {
            // padding-left: 130px;
            .btn-savepin {
                position: absolute;
                margin: 0;
                top: 10px;
                left: 300px;
            }
        }
    }
}
.user-info-board {
    img {
        vertical-align: middle;
    }
    .user-info-li {
        width: 56px;
        height: 56px;
        margin: 4px 0px 12px 4px;
        display: inline-block;
        vertical-align: middle;
        background: #eee;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #eff;
        fill: #fff;
        ._3z {
            margin: 12px;
        }
    }
    .hasIcon {
        width: 56px;
        height: 56px;
        color: #b5b5b5;
        text-align: center;
        // background: url(../../common/images/n.png) -240px -62px no-repeat;
    }
}
</style>
