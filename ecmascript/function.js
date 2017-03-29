/**
 * Created by forli on 2017/3/27.
 */
//arguments
function printMessage(){
    var result = arguments[0]
    +arguments[1] + arguments[2]
    +arguments[3] + arguments[4];
    return result;
}
var flag = printMessage("小俊","正在做","js","函数","练习");
console.log(flag);

//对象内的函数叫方法
var student = {
    name:"小明",
    gender:"男",
    high:"185cm",
    age:18,
    eat:function(food){
        return this.name+"正在吃"+food;
    }
};
var result = student.eat("香蕉");
console.log(result);
student.name = "小安";
console.log(student.eat("菠萝"));


function join(p1,p2,p3,p4){
    var result = p1
    +p2+p3+p4;
    return result;
}

function output(name,age){
    var result = join(name,",",age,",");
    console.log(result);

    var hello = "hello";
    var result = hello + ":" + name
    +"。我今年"+age+"岁";
    console.log(result);
}
output("angelababy",16);
