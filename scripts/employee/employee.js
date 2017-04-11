/**
 * Created by forli on 2017/4/6.
 */
var gPageIndex = 0;
var gPageSize = 8;
var container = document.querySelector(".container");
var dataBody = document.querySelector("#dataBody");
function setContainerHeight(height){
    container.style.height = height + "px";
    setContainerHeight = function(){

    }
}
function getData(currentPageIndex){
    var xhr = new XMLHttpRequest();
    xhr.open("get","/findUser?pageIndex="+currentPageIndex+"&pageSize="+gPageSize);
    xhr.onload = function(){
        var res = null;
        if(xhr.response){
            res = JSON.parse(xhr.response);
            BootstrapPagination(
                $("#paginations"),
                {
                    pageSize:8,
                    //分页尺寸输出格式化字符串
                    pageSizeListFormateString: "每页{pageSize}",
                    //位于导航条左侧的输出信息格式化字符串
                    leftFormateString: "{count}/{total}",
                    //位于导航条右侧的输出信息格式化字符串
                    rightFormateString: "{pageNumber}/{totalPages}",
                    pageGroupSize:4,
                    //记录总数。
                    total: res.total,
                    //当前页索引编号。从其开始（从0开始）的整数。
                    pageIndex:gPageIndex,
                    //当分页更改后引发此事件。
                    pageChanged: function (pageIndex, pageSize) {
                        gPageIndex = pageIndex;
                        getData(gPageIndex);
                    }
                });
            var html = "";
            res.contents.forEach(function(employee){
                html += "<tr data-uid='" + employee.id + "'>";

                html += "<td onclick='userNameClick(this)'>";
                html += employee.userName;
                html += "</td>";

                html += "<td onclick='emailClick(this)'>";
                html += employee.email?employee.email:"";
                html += "</td>";

                html += "<td>";
                html += employee.mobileNumber?employee.mobileNumber:"";
                html += "</td>";

                html += "<td>";
                html += employee.realName?employee.realName:"";
                html += "</td>";

                html += "<td>";
                html += employee.age?employee.age:"";
                html += "</td>";

                html += "<td>";
                html += employee.qq?employee.qq:"";
                html += "</td>";

                html += "<td>";
                html += employee.icon?employee.icon:"";
                html += "</td>";

                var createDate = new Date(employee.createAt);
                html += "<td>";
                html += (createDate.getMonth()+1)+
                    "-"+createDate.getDate()+
                    " "+createDate.getHours()+":"+createDate.getMinutes();
                html += "</td>";

                var updateDate = new Date(employee.updateAt);
                html += "<td>";
                html += (updateDate.getMonth()+1)+
                    "-"+updateDate.getDate()+
                    " "+updateDate.getHours()+":"+createDate.getMinutes();
                html += "</td>";

                html += "<td>";
                html += "<input type='button' value='删除' onclick='deleteData(this)' />"+
                    "<input type='button' value='更新' onclick='updateData(this)' />";
                html += "</td>";

                html += "</tr>";
            });
            dataBody.innerHTML = html;
            setContainerHeight(container.offsetHeight);
        }
    };
    xhr.send();
}
getData(gPageIndex);

function deleteData(e){
    var tr = $(e).parent();
    var id = tr.attr("data-uid");
}

var mailInput = $("#updateEmail");
function updateData(element){
    var tr = $(element).parents("tr");
    var id = tr.attr("data-uid");
    mailInput.val(id);
    $('.modal').modal();
}

var saveDataBtn = $("#saveMsg");
saveDataBtn.click(function(){

});

