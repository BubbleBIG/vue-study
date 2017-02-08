$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() >= 45){
            $('.boardName').addClass('transitionIn');
            $('.boardName').removeClass('transitionOut');

        }else{
            $('.boardName').removeClass('transitionIn');
            $('.boardName').addClass('transitionOut');;
        }
    });
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
    waterfall();
        
function getViewSize () {
return {"width": window['innerWidth'] || document.documentElement.clientWidth,
"height": window['innerHeight'] || document.documentElement.clientHeight}
}
function getFullSize () {
let w = Math.max(document.documentElement.clientWidth ,document.body.clientWidth) +

Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
let h = Math.max(document.documentElement.clientHeight,document.body.clientHeight) +

Math.max(document.documentElement.scrollTop, document.body.scrollTop);
w = Math.max(document.documentElement.scrollWidth,w);
h = Math.max(document.documentElement.scrollHeight,h);
return {"width":w,"height":h};
}

function setContainerSize () {
size=getViewSize ();
// console.log(size["width"]);
// console.log(size["height"]);
}

setContainerSize ();
waterfall ();
window.onresize=setContainerSize;
window.onresize=waterfall;
function waterfall () {
    size=getViewSize (); 
    // console.log(size["width"]);
    let itemW = $('.item').outerWidth(true),
    // windowW = $(window).width(),
        windowW = size["width"],
        colNum = Math.floor(windowW/itemW),//有多少列
        // colNum = 4; 
        colNowHeight = [];//存放每一列当前总的高度
        // console.log(colNum);
    
    for(let i = 0;i < colNum;i++){
        colNowHeight.push(0);//初始化数组，每列当前总的高度0
    }
    
    //遍历每个item选择他们的归属
    $('.item').each(function () {
        $this = $(this);
        //遍历找出高度最短的列及其对应的高度
        let minColNowHeight = colNowHeight[0],
            minCol = 0;//最小总高度的列
        for(let i = 0;i < colNowHeight.length;i++){
            if (colNowHeight[i] < minColNowHeight) {
                minColNowHeight = colNowHeight[i];
                minCol = i;
            }
        }
        $this.css({
            left: itemW * minCol,
            top: minColNowHeight
        });
        colNowHeight[minCol] += $this.outerHeight(true);
    });
}
$(function () {
   waterfall ();
})     
function llk () {
    waterfall ();
}
         
function llk1 () {
    $('.pinsItem').addClass('item');
    $('.pinsItem').removeClass('pinsItemsClass');
    waterfall ();
    Grade(document.querySelectorAll('.gradient-wrap'))
}
function vv () {
    // document.getElementById('myform').submit();
    console.log('vvv')
}
