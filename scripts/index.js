/**
 * Created by forli on 2017/3/30.
 */
var carousels = document.querySelectorAll(".carousel");

carousels.forEach(function(ele,i){
    ele.style["z-index"] = i;
});

var lastIndex = carousels.length - 1;
var carouselIndex = carousels.length - 1;
var wInterval;
function transitionEnd(e){
    var cZindex = lastIndex - e.index + 1;
    carousels[carouselIndex].style.width = "100%";
    carousels[carouselIndex].style["z-index"] = cZindex;
    carouselIndex = carouselIndex - 1;
    if(carouselIndex < 0){
        carouselIndex = lastIndex;
    }
    setTimeout(runningCarousel,2000);
}
function runningCarousel(){
    var cW =carousels[carouselIndex].offsetWidth;
    function transitionWidth(step){
        cW = cW - step;
        carousels[carouselIndex].style.width
            = cW+"px";
    }
    wInterval = setInterval(function(){
        if(cW < 2){
            var next = carouselIndex - 1;
            if(carouselIndex == 0){
                next = lastIndex;
            }
            carousels[next].style["z-index"] =
                carousels.length;

            clearInterval(wInterval);
            transitionEnd({
                index:carouselIndex
            });
            return;
        }
        transitionWidth(10);
    },6);
}
setTimeout(runningCarousel,2000);




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





