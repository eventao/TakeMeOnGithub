/**
 * Created by forli on 2017/4/1.
 */
var container = document.querySelector(".container");
var pins = document.querySelectorAll(".pin");
var isRightBottomDown = false;
var isRightTopDown = false;
var isLeftTopDown = false;
var isLeftBottomDown = false;



var isMouseDown = false;
var subX,subY;
container.onmousedown = function(e){
    e.preventDefault();
    subX = e.pageX - e.currentTarget.offsetLeft;
    subY = e.pageY - e.currentTarget.offsetTop;
    isMouseDown = true;
};
window.onmouseup = function(){
    isMouseDown = false;
    isRightBottomDown = false;
    isRightTopDown = false;
    isLeftTopDown = false;
    isLeftBottomDown = false;
};
window.addEventListener("mousemove",function(e){
    var conWidth = container.offsetWidth;
    var conHeight = container.offsetHeight;
    var maxLeft = window.innerWidth - conWidth - 5;
    var maxTop = window.innerHeight - conHeight - 5;

        var mouseX = e.pageX;
        var mouseY = e.pageY;
        if(isMouseDown){
            var left = mouseX - subX;
            var top = mouseY - subY;
            if(left <= 5){left = 5;}
            if(top <= 5){top = 5;}
            if(left >= maxLeft){
                left = maxLeft;
            }
            if(top >= maxTop){
                top = maxTop;
            }
            container.style.left = left + "px";
            container.style.top = top + "px";
        }

        if(isRightBottomDown){
            var w =mouseX - container.offsetLeft;
            container.style.width = w+"px";
            var h = mouseY - container.offsetTop;
            container.style.height = h+"px";
        }

        if(isRightTopDown){
            var w1 =mouseX - container.offsetLeft;
            container.style.width = w1+"px";

            var subTop = container.offsetTop - mouseY;
            var h1 = container.offsetHeight + subTop;
            container.style.height = h1 + "px";
            container.style.top = mouseY+"px";
        }

        if(isLeftTopDown){
            var subLeft1 = container.offsetLeft - mouseX;
            container.style.width = (container.offsetWidth + subLeft1) + "px";
            container.style.left = (container.offsetLeft - subLeft1)+"px";

            var subTop1 = container.offsetTop - mouseY;
            var h2 = container.offsetHeight + subTop1;
            container.style.height = h2 + "px";
            container.style.top = (container.offsetTop - subTop1)+"px";
        }

        if(isLeftBottomDown){
            var subLeft2 = container.offsetLeft - mouseX;
            var l3 = container.offsetWidth + subLeft2;
            container.style.width = l3 + "px";
            container.style.left = (container.offsetLeft - subLeft2)+"px";

            var h3 = mouseY - container.offsetTop;
            container.style.height = h3+"px";
        }

    });

pins[2].onmousedown = function(e){
    e.preventDefault();
    e.stopPropagation();
    isRightBottomDown = true;
};
pins[1].onmousedown = function(e){
    e.preventDefault();
    e.stopPropagation();
    isRightTopDown = true;
};

pins[0].onmousedown = function(e){
    e.preventDefault();
    e.stopPropagation();
    isLeftTopDown = true;
};
pins[3].onmousedown = function(e){
    e.preventDefault();
    e.stopPropagation();
    isLeftBottomDown = true;
};


