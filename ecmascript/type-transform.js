/**
 * Created by forli on 2017/3/27.
 */
//布尔类型转换
var zero = 0;
var emptyStr = "";
var obj = null;
var un123;
var notNumber = NaN;
var zBool = Boolean(zero);
var emptyBool = Boolean(emptyStr);
var nullObjBool = Boolean(obj);
var unBool = Boolean(un123);
var notNumBool = Boolean(notNumber);


//字符串类型转换
var numToStr = 666;
var strNumber = String(numToStr);
console.log(strNumber);

var name = "小明";
var age = 18;
var gender = "女";
var special = "去过泰国";
var comeFrom = "成都";
var source
    = "我叫" + name
    + "，我来自"+comeFrom
    + "，今年" + age
    + "岁，性别"+gender
    + "('" + special + "')";
console.log(source);





//字符串与数字
var str = "8888";
//显式转换
var num8 = Number(str);
console.log(typeof num8);

var numParse = parseInt(str);
var numParseFloat = parseFloat(str);

//隐式转换
var subNum = str - 0;
var multiNum = str * 1;
var subNumber = str / 1;
console.log(typeof subNumber);

//非数字字符串转换数字
var nonNumber = "abc";
var noneNum = Number(nonNumber);
console.log(typeof noneNum);
console.log(noneNum);







