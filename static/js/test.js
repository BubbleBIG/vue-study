// $(function() {
//     $(window).scroll(function() {
//         if($(window).scrollTop() >= 45){
//             $('.boardName').addClass('transitionIn');
//             $('.boardName').removeClass('transitionOut');

//         }else{
//             $('.boardName').removeClass('transitionIn');
//             $('.boardName').addClass('transitionOut');;
//         }
//     });
// })
window.onscroll=function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // var scrollTop =document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollTop);
    var bName = document.getElementById('boardName');
    // have class
    function hasClass(el,className){
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
    // add class
    function add(el,className){
        el.className += ' ' + className;
    }
    // remove class
    function remove(el,className){
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    // // toggle class
    // function toggleClass(el,className){  
    //     if(hasClass(el,className)){  
    //         removeClass(el,className);  
    //     }else{  
    //         addClass(el,className);  
    //     }  
    // } 
    function addClass(el,className){
            add(el,className);
    }
    function removeClass(el,className){ 
            remove(el,className);
    }
    if(scrollTop >= 50){
        addClass(bName,"transitionIn");
        removeClass(bName,"transitionOut");
        // console.log(bName);
    }else{
        removeClass(bName,"transitionIn");
        addClass(bName,"transitionOut");
    }
}