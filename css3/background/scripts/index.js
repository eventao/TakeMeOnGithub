/**
 * Created by forli on 2017/4/20.
 */
var $window = $(window);
var $windowHeight = $window.height();
var totalScroll = 0;
function animateScroll(dir){
    //获取当前window已经滚动的距离
    var sCrolltop = $window.scrollTop();
    if(dir){//向下滚
        //以动画的效果使window向下滚一屏高度
        var downInterval = setInterval(function(){
            sCrolltop += 30;//动画每一帧滚动的距离以像素为单位
            if(sCrolltop >= (totalScroll+1)*$windowHeight){
                sCrolltop = (totalScroll+1)*$windowHeight;
                clearInterval(downInterval);
                isClickRunning = false;
                totalScroll++;
            }
            $window.scrollTop(sCrolltop);
        },30);
    }else{//向上滚
        //以动画的效果使window向上滚一屏高度
        var upInterval = setInterval(function(){
            sCrolltop-=30;
            if(sCrolltop <= (totalScroll-1)*$windowHeight){
                sCrolltop = (totalScroll-1)*$windowHeight;
                totalScroll--;
                clearInterval(upInterval);
                isClickRunning = false;
            }
            $window.scrollTop(sCrolltop);
        },30);
    }
}
//当window触发滚动事件时，区分是鼠标点击上下按钮执行的滚动，
//还是用户滚鼠标时执行的滚动。
var isClickRunning = false;
setTimeout(function(){
    $window.scrollTop(0);
},0);

//监听向上滚，向下滚按钮单击事件
var rotateUp = false;
$(".direction.up").click(function(){
    if(isClickRunning)return;
    if(!totalScroll)return;
    isClickRunning = true;
    animateScroll(0);
    $(this).css({
        transform: "rotate("+(rotateUp?0:360)+"deg)"
    });
    rotateUp = !rotateUp;
});
var totalImg = $(".bg-item").length;
var rotateDown = false;
$(".direction.down").click(function(){
    if(isClickRunning)return;
    if(totalScroll >= (totalImg - 1))return;
    isClickRunning = true;
    animateScroll(1);
    $(this).css({
        transform: "rotate("+(rotateDown?0:360)+"deg)"
    });
    rotateDown = !rotateDown;
});

$window.scroll(function(){
    if(!isClickRunning){
        var wScrollTop = $window.scrollTop();
        var current = Math.floor(wScrollTop / $windowHeight);
        totalScroll = current;
    }
});
