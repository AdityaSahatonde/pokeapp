(this.webpackJsonppokeapp=this.webpackJsonppokeapp||[]).push([[0],[,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),o=(n(12),n(5)),r=n(2),j=(n(13),n(0));function u(e){return Object(j.jsx)("div",{className:"d-md-flex flex-column PokeCell  p-4 m-2",onClick:function(){e.onhandle(e.id)},children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),className:"Pokeimg",alt:"image11"})})}n(15),n(6);var l=n(3);function p(e){return console.log(e),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",Object(l.a)({src:e.sprite,className:"img-fluid.",alt:"pokeimg"},"className","img1")),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("p",{children:["id: ",e.data," "]}),Object(j.jsxs)("p",{children:["Nme: ",e.name," "]}),Object(j.jsxs)("p",{children:["Height: ",e.height," "]}),Object(j.jsxs)("p",{children:["weight: ",e.weight," "]})]})]})}function b(){Object(c.useEffect)((function(){e()}),[]);var e=function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){s(e)}))},t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(1),l=Object(r.a)(a,2),b=l[0],h=l[1],d=Object(c.useState)("bulbasaur"),f=Object(r.a)(d,2),m=f[0],O=f[1],g=Object(c.useState)("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"),x=Object(r.a)(g,2),k=x[0],v=x[1],w=Object(c.useState)(7),P=Object(r.a)(w,2),S=P[0],N=P[1],C=Object(c.useState)(69),A=Object(r.a)(C,2),F=A[0],I=A[1],y=Object(c.useState)(!1),B=Object(r.a)(y,2),D=(B[0],B[1]),E=function(e){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){h(e.id),O(e.name),v(e.sprites.front_default),N(e.height),I(e.weight),D(!0)}))};return Object(j.jsxs)("div",{className:"PokeApp d-flex bg-warning",children:[Object(j.jsx)("h1",{children:"Aditya PokeDex"}),Object(j.jsx)("div",{className:"d-flex bg-danger flex-wrap overflow-scroll justify-content-md-center flex-x-column vw-25 vh-50 flex-row ColSize",children:i.map((function(e,t){return Object(j.jsx)(u,Object(o.a)(Object(o.a)({id:t+1},e),{},{onhandle:E}),t)}))}),Object(j.jsx)(p,{data:b,name:m,sprite:k,height:S,weight:F})]})}var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),d()}],[[16,1,2]]]);
//# sourceMappingURL=main.1da12c45.chunk.js.map