(this["webpackJsonpreact.todo"]=this["webpackJsonpreact.todo"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(13),r=c.n(i),s=(c(27),c(28),c(9)),o=(c(29),c(30),c(41)),l=c(42),j=c(2),d=function(e){var t=e.settextSearch,c=Object(n.useState)(""),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(j.jsx)(o.a,{className:"search",children:Object(j.jsx)(l.a,{placeholder:"search",value:i,onChange:function(e){r(e.target.value),t(e.target.value)}})})},u=c(8),b=(c(37),c(43)),h=c(44),O=c(21),f=c(45),x=function(e){return{type:"DEL",payload:e}},k=function(e){return{type:"LIKE",payload:e}},p=function(e){return{type:"CHECK_TASK",payload:e}},m=Object(u.b)((function(e){return{todos:e.todos}}),(function(e){return{del:function(t){return e(x(t))},like:function(t){return e(k(t))},checkTask:function(t){return e(p(t))}}}))((function(e){var t=e.todos,c=e.del,n=e.like,a=e.checkTask,i=e.textSearch,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return 0===t?e:e.filter((function(e){return e.task.indexOf(t)>-1}))}(t,i).sort((function(e,t){return e.check-t.check})).map((function(e){return Object(j.jsxs)(b.a,{children:[Object(j.jsx)(h.a,{addonType:"prepend",children:Object(j.jsx)(O.a,{children:Object(j.jsx)(l.a,{addon:!0,type:"checkbox",defaultChecked:e.check,"aria-label":"Checkbox for following text input",onClick:function(){return a(e.id)}})})}),Object(j.jsx)("div",{className:e.like?"item like":"item",children:Object(j.jsx)("div",{className:e.check?"checked":null,children:e.task})}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("i",{className:e.like?"fas fa-heart":"far fa-heart",onClick:function(){return n(e.id)}}),Object(j.jsx)("i",{className:"fas fa-trash",onClick:function(){return c(e.id)}})]})]},e.id)}));return Object(j.jsx)(f.a,{className:"tasks",children:r.length>0?r:Object(j.jsx)("h5",{style:{textAlign:"center"},children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0442\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"})})})),v=(c(38),c(46)),N=c(47),y=c(48),g=c(49),C=Object(u.b)(null,(function(e){return{add:function(t){return e({type:"ADD",payload:t})},del:function(t){return e(x(t))}}}))((function(e){var t=e.add,c=Object(n.useState)(""),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(j.jsxs)(v.a,{className:"form",onSubmit:function(e){e.preventDefault(),t(i),r("")},children:[Object(j.jsxs)(N.a,{children:[Object(j.jsx)(y.a,{for:"exampleText",children:"Enter task:"}),Object(j.jsx)(l.a,{className:"mt-3",type:"textarea",name:"text",id:"inputText",value:i,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsx)(g.a,{type:"submit",children:"Submit"})]})})),S=(c(39),Object(u.b)((function(e){return{todos:e.todos}}),null)((function(e){var t=e.todos,c=Object(n.useState)(),a=Object(s.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){r(t.filter((function(e){return!0===e.like})).length)})),Object(j.jsxs)("div",{className:"counter",children:[Object(j.jsxs)("h2",{children:["Tasks: ",t.length]}),Object(j.jsxs)("h3",{children:["Likes: ",i]})]})}))),E=c(50),T=c(51),D=c(52),_=c(53),w=c(54),L=c(4),A=c.n(L),I=function(e){var t=e.children,c=Object(n.useState)("1"),a=Object(s.a)(c,2),i=a[0],r=a[1],o=function(e){i!==e&&r(e)},d=Object(u.d)((function(e){return e})).todos,f=Object(u.c)(),m=d.filter((function(e){return!1!==e.check})).map((function(e){return Object(j.jsxs)(b.a,{children:[Object(j.jsx)(h.a,{addonType:"prepend",children:Object(j.jsx)(O.a,{children:Object(j.jsx)(l.a,{addon:!0,type:"checkbox",defaultChecked:e.check,"aria-label":"Checkbox for following text input",onClick:function(){return f(p(e.id))}})})}),Object(j.jsx)("div",{className:e.like?"item like":"item",children:Object(j.jsx)("div",{className:e.check?"checked":null,children:e.task})}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("i",{className:e.like?"fas fa-heart":"far fa-heart",onClick:function(){return f(k(e.id))}}),Object(j.jsx)("i",{className:"fas fa-trash",onClick:function(){return f(x(e.id))}})]})]},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)(E.a,{tabs:!0,children:[Object(j.jsx)(T.a,{children:Object(j.jsx)(D.a,{className:A()({active:"1"===i}),onClick:function(){o("1")},style:{cursor:"pointer"},children:"All"})}),Object(j.jsx)(T.a,{children:Object(j.jsx)(D.a,{className:A()({active:"2"===i}),onClick:function(){o("2")},style:{cursor:"pointer"},children:"Done"})})]}),Object(j.jsxs)(_.a,{activeTab:i,children:[Object(j.jsx)(w.a,{tabId:"1",children:t}),Object(j.jsx)(w.a,{tabId:"2",children:Object(j.jsx)("div",{className:"tasks",children:m})})]})]})},K=function(){return Object(j.jsx)("h1",{className:"text-center",children:"React-Redux.ToDo"})},R=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("div",{className:"app container",children:Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(K,{}),Object(j.jsx)(S,{}),Object(j.jsx)(d,{settextSearch:a}),Object(j.jsx)(I,{children:Object(j.jsx)(m,{textSearch:c})}),Object(j.jsx)(C,{})]})})},X=c(22),V=c(16),H=c(7),J={todos:[{task:"Kraiviks",like:!0,check:!1,id:1},{task:"Argon",like:!1,check:!1,id:13},{task:"Velviks",like:!1,check:!1,id:4},{task:"League of legends",like:!0,check:!1,id:5}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var c=e.todos,n=[{task:t.payload,like:!1,check:!1,id:(new Date).getMilliseconds()}];return Object(H.a)(Object(H.a)({},e),{},{todos:[].concat(Object(V.a)(c),n)});case"DEL":var a=e.todos.filter((function(e){return e.id!==t.payload}));return Object(H.a)(Object(H.a)({},e),{},{todos:Object(V.a)(a)});case"LIKE":var i=e.todos.map((function(e){return e.id===t.payload?Object(H.a)(Object(H.a)({},e),{},{like:!e.like}):e}));return Object(H.a)(Object(H.a)({},e),{},{todos:Object(V.a)(i)});case"CHECK_TASK":var r=e.todos.map((function(e){return e.id===t.payload?Object(H.a)(Object(H.a)({},e),{},{check:!e.check}):e}));return Object(H.a)(Object(H.a)({},e),{},{todos:r});default:return e}},U=Object(X.a)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{store:U,children:Object(j.jsx)(R,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dde40c85.chunk.js.map