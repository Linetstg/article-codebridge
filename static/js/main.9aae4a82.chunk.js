(this.webpackJsonpcodebridge=this.webpackJsonpcodebridge||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(42),i=c.n(s),r=(c(52),c(12)),o=(c(53),c(39)),l=c.n(o),j=c(85),d=c(90),u=c(89),b=c(88),h=c(84),O=c(87),m=c(3),x=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],x=i[1],p=Object(n.useState)([]),g=Object(r.a)(p,2),v=g[0],f=g[1],y=Object(n.useState)(null),w=Object(r.a)(y,2),C=w[0],L=w[1];Object(n.useEffect)((function(){fetch("https://api.spaceflightnewsapi.net/v3/blogs").then((function(e){return e.json()})).then((function(e){a(e),f(e)}))}),[]);var S=o.split(" ");return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",onChange:function(e){x(e.target.value);var t=[];S.map((function(e){t.push(c.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())||t.summary.toLowerCase().includes(e.toLowerCase())})))})),console.log(t)},value:o}),Object(m.jsx)("div",{className:"cards",children:C?Object(m.jsxs)("div",{children:[Object(m.jsxs)(j.a,{sx:{maxWidth:1050},children:[Object(m.jsx)(b.a,{component:"img",height:"140",image:C.imageUrl,alt:"green iguana"}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:C.title}),Object(m.jsx)(O.a,{variant:"body2",color:"text.secondary",children:C.summary})]})]}),Object(m.jsx)(l.a,{}),Object(m.jsx)(h.a,{size:"small",onClick:function(){L(null)},children:"Learn More"})]}):null===v||void 0===v?void 0:v.map((function(e){return Object(m.jsx)("div",{className:"cards__element",children:Object(m.jsxs)(j.a,{sx:{maxWidth:345},children:[Object(m.jsx)(b.a,{component:"img",height:"140",image:e.imageUrl,alt:"green iguana"}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),Object(m.jsx)(O.a,{variant:"body2",color:"text.secondary",children:e.summary})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(h.a,{size:"small",onClick:function(){L(e),console.log({selectedObj:C})},children:"Learn More"}),Object(m.jsx)(l.a,{})]})]})},e.id)}))})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9aae4a82.chunk.js.map