/**
 * Created by forli on 2017/3/27.
 */
function forIterator(){
    var result = "";
    for(var i=0;i<10;i++){
        var result2 = "";
        for(var j = 0;j<10;j++){
            result2 = result2 + "*";
        }
        result=result + result2 + "\n";
    }
    console.log(result);
}
forIterator();






function handle(age){
    if(age > 0 && age < 16){
        console.log("穿童装");
    }else if(age > 16 && age < 40){
        console.log("穿成衣");
    }else if(age > 40 && age < 100){
        console.log("穿老年衣服");
    }else{
        console.log("穿仙衣");
    }
}
// handle(18);

function handle2(place){
    switch (place){
        case "成都":
            console.log(place+"有大熊猫");
            break;
        case "北京":
            console.log(place+"有故宫");
            break;
        case "杭州":
            console.log(place+"有西湖");
            break;
        default:
            console.log("中国有56个民族");
    }
}
handle2("杭州");
