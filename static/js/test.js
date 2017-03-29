$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 45) {
            $('.boardName').addClass('transitionIn');
            $('.boardName').removeClass('transitionOut');
        } else {
            $('.boardName').removeClass('transitionIn');
            $('.boardName').addClass('transitionOut');
        }
    });
//     function yzcode ($_val) {
//             var $dx_char = ''; // 删掉相同的字符的value
//             var $ts_char = ''; // 特殊字符
//                 $_val = $('input[type=text]').val(); // 获得表单的value
//             $str_arr = $_val.split(''); // 将$_val变成数组
//             var num = 0; // 验证的数字
//             // 将相同的字符转化为空的字符串的数字
//             (function () {
//                 var len = $_val.length;
//                 for (var i = 0; i < len; i++) {
//                     for (var j = len; j > i; j--) {
//                         if ($str_arr[i] === $str_arr[j]) {
//                             $str_arr[j] = ""
//                         }
//                     }
//                 }
//             })();
//             // 将相同的字符除掉的数组变成字符串
//             (function () {
//                 for (var i = 0; i < $str_arr.length; i++) {
//                     $dx_char += $str_arr[i];
//                 }
//             })();
//             for (var i = 0; i < $dx_char.length; i++) { // 进行验证
//                 num += (/[^\u4e00-\u9fa5]/ig.test($dx_char[i]) && /\W/ig.test($dx_char[i]));
//             }
//             if (num === 0) {
//                 for (i = 0; i < $dx_char.length; i++) { // 获取验证错误的字符
//                     if (/[^\u4e00-\u9fa5]/ig.test($dx_char[i]) && /\W/ig.test($dx_char[i])) {
//                         if ($dx_char[i] === ' ') {
//                             $dx_char[i] = '空格';
//                             $ts_char = $ts_char + '空格';
//                         } else {
//                             $ts_char += $dx_char[i];
//                         }
//                     }
//                 }
//                 $('.level').html('用户名有特殊符号"<strong style="color:#d00;">' + $ts_char + '</strong>",请从新输入').css('color', '#999');
//             } else if (num !== 0) {
//                 $('.level').html('√').css('color', '#080');
//             }
//         }
//     $('#checkInput input').bind('change keyup blur fucos', function() {
//         yzcode($(this).val);
//     });
})
// window.onload = function () {
// window.onscroll = function () {
//     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//     // var scrollTop =document.documentElement.scrollTop||document.body.scrollTop;
//     // console.log(scrollTop);
//     var bName = document.getElementById ('boardName');
//     // have class
//     // function hasClass (el,className) {
//     //     return new RegExp ('(^| )' + className + '( |$)', 'gi').test(el.className);
//     // }
//     // // add class
//     // function add (el,className) {
//     //     el.className += ' ' + className;
//     // }
//     // // remove class
//     // function remove (el,className) {
//     //     el.className = el.className.replace(new RegExp ('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//     // }
//     // // toggle class
//     // function toggleClass(el,className){
//     //     if(hasClass(el,className)){
//     //         removeClass(el,className);
//     //     }else{
//     //         addClass(el,className);
//     //     }
//     // }
//     // function addClass (el,className){
//     //         add (el,className);
//     // }
//     // function removeClass (el,className){
//     //         remove (el,className);
//     // }
//     if(scrollTop >= 50){
//         bName.classList.add("transitionIn");
//         bName.classList.remove("transitionOut");
//         // addClass (bName,"transitionIn");
//         // removeClass (bName,"transitionOut");
//         // console.log(bName);
//     }else{
//         bName.classList.remove("transitionIn");
//         bName.classList.add("transitionOut");
//         // removeClass (bName,"transitionIn");
//         // addClass (bName,"transitionOut");
//     }
// }
// }
    // function fsubmit(){
    //     var data = new FormData($('#form12')[0]);
    //     $.ajax({
    //         url: 'http://localhost/camU/index/index/uploadPins.html',
    //         type: 'POST',
    //         data: data,
    //         dataType: 'JSON',
    //         cache: false,
    //         processData: false,
    //         contentType: false
    //     }).done(function(ret){
    //         if(ret['isSuccess']){
    //             var result = '';
    //             result += 'name=' + ret['name'] + '<br>';
    //             result += 'gender=' + ret['gender'] + '<br>';
    //             result += '<img src="' + ret['photo']  + '" width="100">';
    //             $('#result').html(result);
    //         }else{
    //             alert('提交失敗');
    //         }
    //     });
    //     return false;
    // }
    // waterfall();
    //     //resize 侦测浏览器窗口变化，有变化重新计算和布局
    //      $(window).on('resize',function () {
    //          waterfall();
    //     })
//     waterfall();

// function getViewSize () {
// return {"width": window['innerWidth'] || document.documentElement.clientWidth,
// "height": window['innerHeight'] || document.documentElement.clientHeight}
// }
// function getFullSize () {
// let w = Math.max(document.documentElement.clientWidth ,document.body.clientWidth) +

// Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
// let h = Math.max(document.documentElement.clientHeight,document.body.clientHeight) +

// Math.max(document.documentElement.scrollTop, document.body.scrollTop);
// w = Math.max(document.documentElement.scrollWidth,w);
// h = Math.max(document.documentElement.scrollHeight,h);
// return {"width":w,"height":h};
// }

// function setContainerSize () {
// size=getViewSize ();
// // console.log(size["width"]);
// // console.log(size["height"]);
// }

// setContainerSize ();
// waterfall ();
// window.onresize=setContainerSize;
// window.onresize=waterfall;
// function waterfall () {
//     size=getViewSize ();
//     // console.log(size["width"]);
//     let itemW = $('.item').outerWidth(true),
//     // windowW = window.outerWidth
//         windowW = window.innerWidth
//         // windowW = size["width"],
//         colNum = Math.floor(windowW/itemW),//有多少列
//         // colNum = 4;
//         colNowHeight = [];//存放每一列当前总的高度
//         // console.log(colNum);

//     for(let i = 0;i < colNum;i++){
//         colNowHeight.push(0);//初始化数组，每列当前总的高度0
//     }

//     //遍历每个item选择他们的归属
//     $('.item').each(function () {
//         $this = $(this);
//         //遍历找出高度最短的列及其对应的高度
//         let minColNowHeight = colNowHeight[0],
//             minCol = 0;//最小总高度的列
//         for(let i = 0;i < colNowHeight.length;i++){
//             if (colNowHeight[i] < minColNowHeight) {
//                 minColNowHeight = colNowHeight[i];
//                 minCol = i;
//             }
//         }
//         $this.css({
//             left: itemW * minCol,
//             top: minColNowHeight
//         });
//         colNowHeight[minCol] += $this.outerHeight(true);
//     });
// }
// $(function () {
//    waterfall ();
// })
// function llk () {
//     waterfall ();
// }

// function llk1 () {
//     $('.pinsItem').addClass('item');
//     $('.pinsItem').removeClass('pinsItemsClass');
//     waterfall ();
//     Grade(document.querySelectorAll('.gradient-wrap'))
// }
// function vv () {
//     // document.getElementById('myform').submit();
//     console.log('vvv')
// }
    // var txt = $("textarea");
    // txt.style.height = txt.scrollHeight + "px";
    // if (typeof txt.oninput === "undefined") {
    // txt.onpropertychange = function() {
    //     if (event.propertyName === "value") {
    //     this.style.height = "20px";
    //     this.style.height = this.scrollHeight + "px";
    //     }
    // }
    // } else {
    //     txt.oninput = function() {
    //     this.style.height = "auto";
    //     this.style.height = this.scrollHeight + "px";
    // }
    // }
