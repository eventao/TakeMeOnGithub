/**
 * Created by forli on 2017/3/30.
 */
var container =
    document.querySelector(".container");
var itemWrapper =
    document.querySelector(".item-wrapper");
var mainItem = document.querySelector(".main-item");

var animationIsRunning = false;
container.onmousewheel = function(e){
    if(animationIsRunning){
        return;
    }
    animationIsRunning = true;
    var ele = itemWrapper;
    var subTop;
    if(e.deltaY > 0){
        //鼠标向下滚动
        subTop = ele.offsetTop - mainItem.offsetHeight;
        ele.style.top = subTop+"px";
    }else{
        if(ele.offsetTop > -1){
            animationIsRunning = false;
            return;
        }
        subTop = ele.offsetTop + mainItem.offsetHeight;
        ele.style.top = subTop+"px";
    }
};
itemWrapper.addEventListener("transitionend",function(){
    animationIsRunning = false;
});
// container.addEventListener('DOMMouseScroll',function(){
//     console.log("兼容firefox");
// });

// function loaded(){
//     var container =
//         document.querySelector(".container");
// }
//
// document.body.onload = function(){
//     alert("document.body.onload");
// };
//
// window.addEventListener("load",function(){
//     alert("addEventListener");
// });





