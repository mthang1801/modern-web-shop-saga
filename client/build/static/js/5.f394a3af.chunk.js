(this["webpackJsonpmodern-web-shop"]=this["webpackJsonpmodern-web-shop"]||[]).push([[5],{124:function(n,e,t){"use strict";t.r(e);var r=t(15),i=t(0),a=t.n(i),c=t(88),o=t(3),u=t(4);function l(){var n=Object(o.a)(["\n  display : grid ;\n  grid-template-columns: 1fr 1fr 1fr 1fr;    \n  grid-gap : .5rem ;\n  @media screen and (max-width : 800px){    \n    grid-template-columns: 1fr 1fr; \n    width : 100%; \n  }\n  @media screen and (max-width : 500px){    \n    grid-template-columns: 1fr; \n    width : 100%; \n  }\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n  font-size : 1.7em;     \n  margin :2rem 0 .5rem 0 ;\n  cursor: pointer; \n  color : #424242 ; \n  &:hover{\n    color : black;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  display : flex ;\n  flex-direction: column;\n  align-items: center;\n"]);return f=function(){return n},n}var s=u.c.div(f()),m=u.c.h2(d()),b=u.c.div(l()),p=t(6),h=Object(p.h)((function(n){var e=n.title,t=(n.id,n.routeName),r=n.items,i=n.history,o=n.match;return a.a.createElement(s,null,a.a.createElement(m,{onClick:function(){return i.push("".concat(o.path,"/").concat(t))}},e),a.a.createElement(b,null,r.filter((function(n,e){return e<4})).map((function(n){return a.a.createElement(c.a,{key:n.id,item:n})}))))}));function v(){var n=Object(o.a)(["\n  z-index: 0;\n  width : 100%;\n  \n"]);return v=function(){return n},n}var g=u.c.div(v()),w=t(7),j=t(86),O=Object(w.b)({collections:j.d}),x=Object(r.b)(O)((function(n){var e=n.collections;return console.log(e),a.a.createElement(g,null,e.map((function(n){return a.a.createElement(h,Object.assign({key:n.id},n))})))})),k=t(85),y=Object(w.b)({isLoading:j.c}),E=Object(r.b)(y)(Object(k.a)(x));e.default=E},85:function(n,e,t){"use strict";var r=t(32),i=t(0),a=t.n(i),c=t(3),o=t(4);function u(){var n=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return l=function(){return n},n}var d=o.c.div(l()),f=o.c.div(u());e.a=function(n){return function(e){var t=e.isLoading,i=Object(r.a)(e,["isLoading"]);return t?a.a.createElement(d,null,a.a.createElement(f,null)):a.a.createElement(n,i)}}},86:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return o})),t.d(e,"d",(function(){return u})),t.d(e,"a",(function(){return l}));var r=t(7),i=function(n){return n.shop},a=Object(r.a)(i,(function(n){return n.collections})),c=Object(r.a)(i,(function(n){return n.loading})),o=function(n){return Object(r.a)(a,(function(e){return e[n]}))},u=Object(r.a)(a,(function(n){return Object.keys(n).map((function(e){return n[e]}))})),l=Object(r.a)(a,(function(n){return!!n&&Object.entries(n).length>0}))},88:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(3),c=t(4),o=t(46);function u(){var n=Object(a.a)(["\n  width : 15%;\n  font-size : 1em ; \n  font-weight : bolder;  \n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n  width : 85%;\n  font-size : 1em ; \n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n"]);return l=function(){return n},n}function d(){var n=Object(a.a)(["    \n  width : 100%;\n  padding : 1rem;\n  display : flex ;\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)(["\n  width : 100%; \n  height : 100%; \n  background-image : "," ; \n  background-position : center; \n  background-size : cover ; \n"]);return f=function(){return n},n}function s(){var n=Object(a.a)(["\n  width : 22.5vw; \n  height : 380px; \n  display : flex ; \n  flex-direction: column; \n  align-items : space-between ;\n  position : relative ; \n  border: 1px solid #ccc;\n  border-radius : 5px ;\n  box-shadow : 0 2px 5px rgba(0,0,0,.2);\n  margin : 2rem auto; \n  ","{\n    display : none ;\n  }\n  &:hover{\n    ","{\n      display: block;\n    }\n  }\n  \n  @media screen and (max-width: 800px){\n    width : 45vw;\n  }\n  @media screen and (max-width : 500px){\n    width : 100%;\n    margin : 1rem auto;\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(a.a)([" \n  font-size : 1em;\n  position : absolute;\n  width : 60%;\n  top : 70%;\n  left:  50%;\n  transform : translate(-50%,-50%); \n  opacity : .7 ; \n  &:hover{\n    opacity : .9;\n  }\n  &:active{\n    background-color : #ddd;\n  }\n"]);return m=function(){return n},n}var b=Object(c.c)(o.a)(m()),p=c.c.div(s(),b,b),h=c.c.div(f(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")}));h.name=h;var v=c.c.div(d()),g=c.c.span(l()),w=c.c.span(u()),j=t(15),O=t(22);e.a=Object(j.b)(null,(function(n){return{addItem:function(e){return n(Object(O.a)(e))}}}))((function(n){var e=n.addItem,t=n.item,r=t.name,a=t.imageUrl,c=t.price;return i.a.createElement(p,null,i.a.createElement(h,{imageUrl:a}),i.a.createElement(v,null,i.a.createElement(g,null,r),i.a.createElement(w,null,"$",c)),i.a.createElement(b,{onClick:function(){return e(t)}},"Add to cart"))}))}}]);
//# sourceMappingURL=5.f394a3af.chunk.js.map