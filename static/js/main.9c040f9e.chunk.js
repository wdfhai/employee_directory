(this.webpackJsonpmy_employee_directory=this.webpackJsonpmy_employee_directory||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(7),a=c.n(s),i=(c(14),c(15),c(0)),l=function(e){return Object(i.jsx)("div",{className:"row",id:"searchDiv",style:{margin:"10px"},children:Object(i.jsx)("form",{className:"form-inline my-2 my-lg-0 mx-auto",children:Object(i.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:e.handleChange,value:e.value})})})},o=function(e){return Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:Object(i.jsx)("tr",{children:Object(i.jsxs)("td",{style:{color:"red"},children:["Error:",e.error]})})})})},j=function(){return Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:Object(i.jsx)("tr",{children:Object(i.jsx)("td",{style:{color:"blue"},children:"Loading..."})})})})},b=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"black",color:"white",marginBottom:"0"},children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"display-4",style:{textAlign:"center"},children:"My Employee Directory"}),Object(i.jsx)("p",{className:"lead",style:{textAlign:"center"},children:"Search using the Search Field or Sort by pressing the sort button."})]})})},d=c(3),u=function(){var e={class:"up"},t={class:"down"},c={class:"random"},r=Object(n.useState)(),s=Object(d.a)(r,2),a=s[0],b=s[1],u=Object(n.useState)([]),h=Object(d.a)(u,2),m=h[0],f=h[1],p=Object(n.useState)([]),g=Object(d.a)(p,2),y=g[0],v=g[1],N=Object(n.useState)(!1),S=Object(d.a)(N,2),w=S[0],k=S[1],C=Object(n.useState)(null),E=Object(d.a)(C,2),_=E[0],L=E[1],A=Object(n.useState)([]),B=Object(d.a)(A,2),D=B[0],F=B[1],I=Object(n.useState)(""),J=Object(d.a)(I,2),M=J[0],P=J[1];Object(n.useEffect)((function(){fetch("https://randomuser.me/api/?nat=us&results=100").then((function(e){return e.json()})).then((function(e){k(!0),f(e.results)}),(function(e){k(!0),L(e)}))}),[]),Object(n.useEffect)((function(){b(c),F(m)}),[m]),Object(n.useEffect)((function(){v(D)}),[D]);return _?Object(i.jsx)(o,{error:_.message}):w?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{value:M,handleChange:function(e){var t=e.target.value;if(P(t),M){var c=m.filter((function(e){var c=e.name.first.toLowerCase(),n=e.name.first.toLowerCase(),r=e.email,s=e.phone;return c.includes(t)||n.includes(t)||r.includes(t)||s.includes(t)}));F(c)}else F(m)}}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)("table",{className:"table table-striped",children:[Object(i.jsx)(O,{toggleSort:function(){"random"===a.class?(b(e),v(D.sort((function(e,t){return e.name.first>t.name.first?1:-1})))):"up"===a.class?(b(t),v(D.sort((function(e,t){return e.name.first<t.name.first?1:-1})))):"down"===a.class&&(b(e),v(D.sort((function(e,t){return e.name.first>t.name.first?1:-1}))))}}),Object(i.jsxs)("tbody",{children:[y.length>0&&y.map((function(e,t){return Object(i.jsx)(x,{i:t,img:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone},e.phone)})),Object(i.jsx)("tr",{children:Object(i.jsxs)("td",{colSpan:"5",children:["Total Employees: ",m.length]})})]})]})})]}):Object(i.jsx)(j,{})},h=c(8),m=c(9),O=function(e){return Object(i.jsx)("thead",{className:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Image"}),Object(i.jsxs)("th",{scope:"col",children:["Name",Object(i.jsx)("button",{type:"button btn-dark",style:{backgroundColor:"inherit",color:"white",fontWeight:"bold",border:"0",background:"none",boxShadow:"none",borderRadius:"0px",float:"right"},onClick:e.toggleSort,children:Object(i.jsx)(h.a,{icon:m.a})})]}),Object(i.jsx)("th",{scope:"col",children:"Email"}),Object(i.jsx)("th",{scope:"col",children:"Phone"})]})})},x=function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:e.i+1}),Object(i.jsx)("td",{children:Object(i.jsx)("img",{className:"img-fluid img-thumbnail rounded",alt:"employee",src:e.img,style:{height:"75px",width:"75px"}})}),Object(i.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phone})]})};var f=function(){return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(b,{}),Object(i.jsx)(u,{})]})};c(22);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9c040f9e.chunk.js.map