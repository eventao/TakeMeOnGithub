/**
 * Created by forli on 2017/4/8.
 */

//示例一：创建遮罩层;
function singleTon(func){
    var result;
    return function(){
        return result || (result = func.apply(this,arguments));
    }
}
var createMask = singleTon(function(maskClass){
    var mask = document.createElement("div");
    mask.setAttribute('class',maskClass?maskClass:'mask');
    mask.onclick = function(){
        mask.style.display = "none";
    };
    document.body.appendChild(mask);
    return mask;
});

function alert(msg){
    var inner = "<div class='alert' onclick='alertClick(event)'>" +
            msg +
        "</div>";
    var m = createMask('mask');
    m.style.display='block';
    m.innerHTML = inner;
}
function alertClick(e){
    e.stopPropagation();
}
function clickHandle(){
    setInterval(function(){
        var now = new Date();
        var msg = "当前时间是："+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
        alert(msg);
    },1000);
}

