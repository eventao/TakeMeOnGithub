/**
 * Created by forli on 2017/4/25.
 */

var app = new Vue({
    el:'#app',
    data:{
        message:"hello vue"
    }
});

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于' + new Date()
    }
});

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
});

var toggleFade = new Vue({
    el:'#toggleFade',
    data:{
        show:true
    }
});


var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习JavaScript'},
            {text:'学习Vue'},
            {text:'整个牛项目'}
        ]
    }
});


var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'上海自来1水2来自海上'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});


var app6 = new Vue({
    el:"#app-6",
    data:{
        message:""
    }
});

Vue.component('todo-item',{
    //通过props接收外界传入(可以用v-bind)的属性
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el:"#app-7",
    data:{
        groceryList:[
            {text:"蔬菜"},
            {text:"奶"},
            {text:"whatever"}
        ]
    }
});

