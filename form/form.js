/**
 * Created by forli on 2017/3/28.
 */

document.getElementById("formContainer")
    .onsubmit = function(){

    var pwdEle =
        document.getElementById("password");
    var confirmPwd =
        document.querySelector("#confirmPwd");
    var mobileNumber =
        document.querySelector("#mobileNumber");


    var password = pwdEle.value;
    var conPwd = confirmPwd.value;

    console.log(password);
    console.log(conPwd);
    if(password != conPwd){
        alert("两次密码输入不相等！");
        return false;
    }

    function isMobileNumber(num){
        var isMobileNumber =
            /^1[34578]\d{9}$/.test(num);
        return isMobileNumber;
    }
    var flag = isMobileNumber(mobileNumber.value);
    if(!flag){
        alert("手机号码格式不正确！");
        return false;
    }

    console.log("");
};
