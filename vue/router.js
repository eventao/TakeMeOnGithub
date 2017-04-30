/**
 * Created by forli on 2017/4/26.
 */
var homeComponent = {template:'<div>主页</div>'};
var router2Component = {
    template:'<div>\
                <ol>\
                    <li>\
                        <router-link to="/router2/d1">\
                            新闻一\
                        </router-link>\
                    </li>\
                    <li>\
                        <router-link to="/router2/d2">\
                            新闻二\
                        </router-link>\
                    </li>\
                    <li>\
                        <router-link to="/router2/d3">\
                            新闻三\
                        </router-link>\
                    </li>\
                    <li>\
                        <router-link to="/router2/d4">\
                            新闻四\
                        </router-link>\
                    </li>\
                </ol>\
            </div>',
    watch:{
        $route:function (to,from) {
            console.log(to);
            console.log(from);
        }
    }
};
var router3Component = {template:'<div>第三页</div>'};
var profileComponent = {template:'<div>用户信息</div>'};
var router2Detail = {template:'<div>新闻的id为：{{$route.params.id}}</div>'};

var routes = [
    {path:'/',component:homeComponent},
    {path:'/home',component:homeComponent},
    {path:'/router2',component:router2Component},
    {path:'/router3',component:router3Component},
    {path:'/profile',component:profileComponent},
    {path:'/router2/:id',component:router2Detail}
];
var router = new VueRouter({
    routes:routes
});

var app = new Vue({
    router:router
}).$mount('#app');
