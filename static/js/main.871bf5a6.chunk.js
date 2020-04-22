(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),c=a.n(l),r=(a(39),a(19)),s=a(6),i=a(7),m=a(9),d=a(8),u=a(13),p=a(10);a(40);function g(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light shadow-sm mb-3"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navMenu","aria-controls":"navMenu","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navMenu"},o.a.createElement("ul",{className:"navbar-nav w-100 justify-content-center"},o.a.createElement("li",{className:"nav-item mx-md-4"},o.a.createElement(u.b,{className:"nav-link",to:"/react-todo-app/"},"Home")),o.a.createElement("li",{className:"nav-item mx-sm-4"},o.a.createElement(u.b,{className:"nav-link",to:"/react-todo-app/about"},"About")))))}var h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bg-dark text-light text-center p-3"},o.a.createElement("h1",null,"Todo App")),o.a.createElement(g,null))},v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(e){return{textDecoration:e.completed?"line-through":"none",color:e.completed?"grey":"black"}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.todo;return o.a.createElement("div",{className:"list-group-item list-group-item-action d-flex justify-content-between"},o.a.createElement("div",{className:"flex-fill pointer-on-hover",onClick:this.props.toggleComplete.bind(this,e.id)},o.a.createElement("small",{className:"text-muted d-block"},"Title:"),o.a.createElement("p",{style:this.getStyle(e)},e.title)),o.a.createElement("button",{className:"align-self-center btn btn-danger",onClick:this.props.delTodo.bind(this,e.id)},"\u2715"))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.toggleComplete,n=e.delTodo;return t.map((function(e){return o.a.createElement(v,{key:e.id,todo:e,toggleComplete:a,delTodo:n})}))}}]),a}(n.Component);var f=function(){return o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"TodoAPP v1.0.0 - React Todo App."),o.a.createElement("a",{href:"https://www.linkedin.com/in/aaronmolinag/"},"LinkedIn"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/aaronm-git"},"Github"))},E=a(32),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"New todo...",name:"title",value:this.state.title,onChange:this.onChange,required:!0}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"New Todo"))))}}]),a}(n.Component),y=a(65),j=a(18),w=a.n(j),k=a(33),O=a.n(k),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.toggleComplete=function(t){console.log("toggle complete task w/ id: "+t),e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){console.log("deleting task w/ id: "+t),e.setState({todos:Object(r.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){var a=t.data;a.id=Object(y.a)(),console.log(a),e.setState({todos:[].concat(Object(r.a)(e.state.todos),[a])})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://jsonplaceholder.typicode.com/todos?_limit=4").then((function(t){e.setState({todos:t.data})}))}},{key:"render",value:function(){var e,t=this;return e=this.state.todos.length?function(){return o.a.createElement("div",{className:"col-sm-8 offset-sm-2 col-md-6 offset-md-3"},o.a.createElement("div",{className:"mt-4"},o.a.createElement(N,{addTodo:t.addTodo})),o.a.createElement(O.a,{className:"list-group shadow Tilt",options:{max:10,scale:1.03,perspective:2e3,speed:400}},o.a.createElement(b,{todos:t.state.todos,toggleComplete:t.toggleComplete,delTodo:t.delTodo})))}:function(){return o.a.createElement("div",{className:"col-sm-8 offset-sm-2 col-md-6 offset-md-3"},o.a.createElement("div",{className:"mt-4"},o.a.createElement(N,{addTodo:t.addTodo})),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"text-muted"},"No Dotos Yet!")))},o.a.createElement(u.a,null,o.a.createElement(h,null),o.a.createElement(p.a,{exact:!0,path:"/react-todo-app",render:function(t){return e()}}),o.a.createElement(p.a,{exact:!0,path:"/react-todo-app/about",component:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.871bf5a6.chunk.js.map