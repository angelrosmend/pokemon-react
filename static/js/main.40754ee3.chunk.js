(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{126:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),s=n.n(i),c=n(16),r=n.n(c),o=(n(80),n(21)),l=n(10),d=(n(81),n(17)),u=(n(82),n(151)),m=n(152),j=n(153),b=n(154),h=n(155),x=n(156),g=n(162),f=n(160),p=n(161),O=n(157),v=n.p+"static/media/pokedeex.8ad12527.png",k=(n.p,n.p,n.p+"static/media/icon-background.ccf3b36d.png"),N=n(11),P=n(33),w=n(20),y=n.n(w),C=n(68),S=s.a.createContext(null),L=function(e){var t=Object(i.useState)("es"),n=Object(d.a)(t,2),s=n[0],c=n[1],r=C,o="".concat("https://pokeapi.co/api/v2/","pokemon?limit=10&offset=0"),l=Object(i.useState)(o),u=Object(d.a)(l,2),m=u[0],j=u[1],b=function(e,t){var n=Object(i.useState)({data:[],loading:!0,nextPage:null,prevPage:null,error:""}),a=Object(d.a)(n,2),s=a[0],c=a[1];return Object(i.useEffect)((function(){var n;return y.a.get(e,{cancelToken:new y.a.CancelToken((function(e){return n=e}))}).then((function(e){var n=e.data.results.map((function(e){return e.url})),a=function(e){return y.a.get(e).then((function(e){return e.data})).catch((function(e){return e}))},i=function(e){return Promise.all(e.map(a))};i(n).then((function(n){var a=n.map((function(e){return e.id})),s=n.map((function(e){return e.sprites})),r=n.map((function(e){return e.species.url}));i(r).then((function(n){var i=n.map((function(e){return e.names})).map((function(e){return e.find((function(e){return e.language.name===t}))})).map((function(e){return e.name})),r=function(e,t,n){for(var i=[],s=0;s<a.length;)i.push({id:e[s],name:t[s],sprites:n[s]}),s++;return i}(a,i,s);c({data:r,loading:!1,nextPage:e.data.next,prevPage:e.data.previous,error:""})}))}))})).catch((function(e){c({data:[],loading:!1,nextPage:null,prevPage:null,error:e})})),function(){return n()}}),[e,t]),s}(m,s),h=b.data,x=b.prevPage,g=b.nextPage,f=b.loading,p=Object(i.useState)([]),O=Object(d.a)(p,2),v=O[0],k=O[1];return Object(a.jsx)(S.Provider,{value:{data:h,gotoNextPage:function(){return j(g)},gotoPrevPage:function(){return j(x)},loading:f,nextPage:g,prevPage:x,language:s,selectEn:function(){return c("en")},selectEs:function(){return c("es")},selectDe:function(){return c("de")},text:r,likePokemon:function(e){return k([].concat(Object(P.a)(v),[Object(N.a)(Object(N.a)({},e),{},{favorite:e.favorite=!0})]))},favoritosPokemon:v,unlikePokemon:function(e){k((function(t){var n=t.findIndex((function(t){return t.id===e.id}));return-1===n?t:[].concat(Object(P.a)(t.slice(0,n)),Object(P.a)(t.slice(n+1)))}))}},children:e.children})};var T=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),s=n[0],c=n[1],r=Object(i.useContext)(S),l=r.selectEs,k=r.selectEn,N=r.selectDe,P=r.text,w=r.language,y=P.favorite.find((function(e){return e.id===w})).name,C=P.idioma.find((function(e){return e.id===w}));return Object(a.jsxs)(u.a,{className:"shadow",color:"light",light:!0,expand:"md",children:[Object(a.jsx)(m.a,{children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{className:"logo",src:v,alt:""})})}),Object(a.jsx)(j.a,{onClick:function(){return c(!s)}}),Object(a.jsx)(b.a,{isOpen:s,navbar:!0,children:Object(a.jsxs)(h.a,{className:"ml-auto mr-5",navbar:!0,children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(o.b,{to:"/favorites",className:"nav-link",children:y})}),Object(a.jsxs)(g.a,{nav:!0,inNavbar:!0,children:[Object(a.jsx)(f.a,{nav:!0,caret:!0,children:C.lang}),Object(a.jsxs)(p.a,{right:!0,children:[Object(a.jsx)(O.a,{onClick:l,children:C.es}),Object(a.jsx)(O.a,{onClick:k,children:C.en}),Object(a.jsx)(O.a,{divider:!0}),Object(a.jsx)(O.a,{onClick:N,children:C.de})]})]})]})})]})};n(66);var F=function(e){var t=e.pokemon,n=e.favorite,s=t.id,c=t.name,r=t.sprites,l=Object(i.useContext)(S),d=l.likePokemon,u=l.unlikePokemon,m=r.front_default;return Object(a.jsxs)("div",{className:"pokemon-card mx-2 ",children:[n?Object(a.jsx)("i",{onClick:function(){return u({id:s,name:c,image:m})},className:"fas fa-heart liked-pokemon"}):Object(a.jsx)("i",{onClick:function(){return d({id:s,name:c,sprites:r,favorite:n})},className:"fas fa-heart like-pokemon"}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(o.b,{to:"/pokemon/".concat(s),children:Object(a.jsx)("div",{className:"photo",children:Object(a.jsx)("img",{src:m,alt:"..."})})}),Object(a.jsxs)("div",{className:"text-white text-center",children:[" ",Object(a.jsxs)("span",{children:[s," - "]})," ",Object(a.jsx)("span",{children:c})]})]})]})};n(126);var E=function(){var e=Object(i.useContext)(S),t=e.favoritosPokemon,n=e.text,s=e.language,c=n.empty.find((function(e){return e.id===s})).name;return Object(a.jsxs)("div",{className:"favorites-wrapper",children:[Object(a.jsx)("img",{className:"background-icon",src:k,alt:""}),t.length<1?Object(a.jsx)("h1",{className:"text-white m-auto",style:{zIndex:"1"},children:c}):t&&t.map((function(e){var n=e.id,i=t.map((function(e){return e.id})).includes(n);return Object(a.jsx)(F,{pokemon:e,favorite:i},n)}))]})},I=n(72),_=n.n(I),R=n(158);n(142);function A(e){var t=e.style,n=e.onClick;return Object(a.jsx)("i",{className:"fas fa-angle-left a-prev",style:Object(N.a)(Object(N.a)({},t),{},{display:"block"}),onClick:n})}function D(e){var t=e.style,n=e.onClick;return Object(a.jsx)("i",{className:"fas fa-angle-right a-next",style:Object(N.a)(Object(N.a)({},t),{},{display:"block"}),onClick:n})}var B={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,initialSlide:0,prevArrow:Object(a.jsx)(A,{}),nextArrow:Object(a.jsx)(D,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]};n(143);function G(){var e=Object(i.useContext)(S),t=e.prevPage,n=e.gotoPrevPage,s=e.text,c=e.language,r=s.back.find((function(e){return e.id===c})).name;return Object(a.jsx)("div",{className:"back",children:t?Object(a.jsx)("button",{onClick:n,className:"btn go-back rounded-pill d-flex ",children:Object(a.jsxs)("p",{className:"m-auto ",children:[Object(a.jsx)("i",{className:"fas fa-arrow-left mr-1"}),r]})}):null})}function M(){var e=Object(i.useContext)(S),t=e.nextPage,n=e.gotoNextPage,s=e.text,c=e.language,r=s.next.find((function(e){return e.id===c})).name;return Object(a.jsx)("div",{className:"next",children:t?Object(a.jsx)("button",{onClick:n,className:"btn go-next rounded-pill d-flex",children:Object(a.jsxs)("p",{className:" m-auto",children:[r," ",Object(a.jsx)("i",{className:"fas fa-arrow-right mr-3"})]})}):null})}var H=function(e){return Object(a.jsx)("div",{className:"pokemon-list",children:Object(a.jsx)("div",{className:"cards-wrapper container-fluid align-items-center",children:e.children})})};var J=function(){var e=Object(i.useContext)(S),t=e.data,n=e.favoritosPokemon,s=e.loading;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(G,{}),Object(a.jsx)(H,{children:s?Object(a.jsx)(R.a,{style:{position:"absolute",width:"3rem",height:"3rem",top:"50%",left:"50%"},color:"danger"}):Object(a.jsx)(_.a,Object(N.a)(Object(N.a)({},B),{},{children:t&&t.map((function(e){var t=e.id,i=n.map((function(e){return e.id})).includes(t);return Object(a.jsx)(F,{favorite:i,pokemon:e},t)}))}))}),Object(a.jsx)(M,{})]})};var W=function(e){var t=e.idPokedex,n=e.name,i=e.description,s=e.types,c=e.text,r=e.habitat,o=e.height,l=e.weight,d=e.language,u=c.habitat.find((function(e){return e.name===r.name})).languages.find((function(e){return e.id===d})),m=u.text,j=u.name,b=c.height.find((function(e){return e.id===d})).name,h=c.weight.find((function(e){return e.id===d})).name;return Object(a.jsxs)("div",{className:"description-container",children:[Object(a.jsx)("h1",{className:"titulo-pokemon text-center",children:n}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"info-tabla",children:[Object(a.jsx)("p",{className:"text-white text-center",children:i.flavor_text}),Object(a.jsxs)("div",{className:"tabla-detalle ",children:[Object(a.jsxs)("div",{className:"table-det ",children:[Object(a.jsxs)("div",{className:"det ",children:[Object(a.jsxs)("p",{className:"text-white",children:[Object(a.jsx)("b",{className:"subtitle",children:"Pokedex N\xba"})," ",t]}),Object(a.jsxs)("p",{className:"text-white",children:[Object(a.jsx)("b",{className:"subtitle",children:m})," ",j]})]}),Object(a.jsxs)("div",{className:"det",children:[Object(a.jsxs)("p",{className:"text-white",children:[Object(a.jsx)("b",{className:"subtitle",children:b})," ",o,"\xb4"]}),Object(a.jsxs)("p",{className:"text-white",children:[Object(a.jsx)("b",{className:"subtitle",children:h})," ",l/5,"kg"]})]})]}),Object(a.jsx)("div",{className:"types",children:Object(a.jsx)("div",{className:"types-wrapper",children:s&&s.map((function(e){return Object(a.jsx)("img",{className:"type-icon",src:"/img/types/".concat(e.type.name,".png"),alt:""})}))})})]})]})]})},z=(n(144),n(159));var q=function(e){var t=e.images,n=e.habitat;return Object(a.jsx)("div",{className:"slider-container",style:{backgroundImage:"url(/img/habitats/".concat(n.name,".gif)"),backgroundSize:"cover",height:"100vh"},children:Object(a.jsx)("div",{className:"slider-wrapper ",children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)(z.a.Item,{children:Object(a.jsx)("img",{className:"d-block img-slider",src:t.front_default,alt:"First slide"})}),Object(a.jsx)(z.a.Item,{children:Object(a.jsx)("img",{className:"d-block img-slider",src:t.back_default,alt:"First slide"})}),Object(a.jsx)(z.a.Item,{children:Object(a.jsx)("img",{className:"d-block img-slider",src:t.front_shiny,alt:"First slide"})}),Object(a.jsx)(z.a.Item,{children:Object(a.jsx)("img",{className:"d-block img-slider",src:t.back_shiny,alt:"First slide"})})]})})})};var Y=function(e){var t=e.match,n=Object(i.useContext)(S),s=n.language,c=n.text,r=t.params.id,o=function(e,t){var n=Object(i.useState)({data:[],loading:!0,nextPage:null,prevPage:null,error:""}),a=Object(d.a)(n,2),s=a[0],c=a[1];return Object(i.useEffect)((function(){var n;return y.a.get(e,{cancelToken:new y.a.CancelToken((function(e){return n=e}))}).then((function(e){var n,a=e.data,i=a.types,s=a.height,r=a.weight,o=a.sprites,l=e.data.species.url,d=function(e){return y.a.get(e).then((function(e){return e.data})).catch((function(e){return e}))};(n=[l],Promise.all(n.map(d))).then((function(e){var n=o,a=e[0].habitat,l=e[0].id,d=e[0].flavor_text_entries.filter((function(e){return"alpha-sapphire"===e.version.name})).find((function(e){return e.language.name===t})),u=function(e,t,n,a,i,s,c,r,o){var l=[];return l.push({id:e,name:t,images:n,description:a,types:i,habitat:s,height:c,weight:r}),l}(l,e[0].names.find((function(e){return e.language.name===t})).name,n,d,i,a,s,r);c({data:u,loading:!1,error:""})}))})).catch((function(e){c({data:[],loading:!1,error:e})})),function(){return n()}}),[e,t]),s}("".concat("https://pokeapi.co/api/v2/","pokemon/").concat(r),s),l=o.data;return o.loading?Object(a.jsx)(R.a,{style:{position:"absolute",width:"3rem",height:"3rem",top:"50%",left:"50%"},color:"danger"}):Object(a.jsxs)("div",{className:"page-detalle",children:[Object(a.jsx)(q,{images:l[0].images,habitat:l[0].habitat}),Object(a.jsx)(W,{idPokedex:r,text:c,name:l[0].name,description:l[0].description,types:l[0].types,habitat:l[0].habitat,height:l[0].height,weight:l[0].weight,language:s})]})};var K=function(){return Object(a.jsx)(L,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(T,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:J}),Object(a.jsx)(l.a,{path:"/pokemon/:id",component:Y}),Object(a.jsx)(l.a,{path:"/favorites",component:E}),Object(a.jsx)(l.a,{component:J})]})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};n(145),n(146),n(147);r.a.render(Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),Q()},66:function(e,t,n){},68:function(e){e.exports=JSON.parse('{"habitat":[{"name":"cave","languages":[{"id":"es","name":"caverna","text":"h\xe1bitat"},{"id":"en","name":"cave","text":"habitat"},{"id":"de","name":"H\xf6hle","text":"Lebensraum"}]},{"name":"forest","languages":[{"id":"es","name":"Bosque","text":"h\xe1bitat"},{"id":"en","name":"Forest","text":"habitat"},{"id":"de","name":"Wald","text":"Lebensraum"}]},{"name":"grassland","languages":[{"id":"es","name":"Pradera","text":"h\xe1bitat"},{"id":"en","name":"Grassland","text":"habitat"},{"id":"de","name":"Wiese","text":"Lebensraum"}]},{"name":"mountain","languages":[{"id":"es","name":"Monta\xf1a","text":"h\xe1bitat"},{"id":"en","name":"Mountain","text":"habitat"},{"id":"de","name":"Berg","text":"Lebensraum"}]},{"name":"rare","languages":[{"id":"es","name":"Raro","text":"h\xe1bitat"},{"id":"en","name":"Rare","text":"habitat"},{"id":"de","name":"Rar","text":"Lebensraum"}]},{"name":"rough-terrain","languages":[{"id":"es","name":"Terrenos rocosos","text":"h\xe1bitat"},{"id":"en","name":"Rough-terrain","text":"habitat"},{"id":"de","name":"unebenes Gebiet","text":"Lebensraum"}]},{"name":"sea","languages":[{"id":"es","name":"Mar","text":"h\xe1bitat"},{"id":"en","name":"Rough-terrain","text":"habitat"},{"id":"de","name":"Meer","text":"Lebensraum"}]},{"name":"urban","languages":[{"id":"es","name":"Ciudad","text":"h\xe1bitat"},{"id":"en","name":"urban","text":"habitat"},{"id":"de","name":"st\xe4dtisch","text":"Lebensraum"}]},{"name":"waters-edge","languages":[{"id":"es","name":"Rios y arrollos","text":"h\xe1bitat"},{"id":"en","name":"waters-edge","text":"habitat"},{"id":"de","name":"Fluss","text":"Lebensraum"}]}],"height":[{"id":"es","name":"Altura"},{"id":"en","name":"Height"},{"id":"de","name":"H\xf6he"}],"weight":[{"id":"es","name":"Peso"},{"id":"en","name":"Weight"},{"id":"de","name":"Gewicht"}],"types":[],"back":[{"id":"es","name":"Pagina anterior"},{"id":"en","name":"Previous page"},{"id":"de","name":"vorherige Seite"}],"next":[{"id":"es","name":"Pagina siguiente"},{"id":"en","name":"Next page"},{"id":"de","name":"N\xe4chste Seite"}],"favorite":[{"id":"es","name":"Favoritos"},{"id":"en","name":"Favorites"},{"id":"de","name":"Lieblings"}],"idioma":[{"id":"es","lang":"Lenguaje","es":"Espa\xf1ol","en":"Ingl\xe9s","de":"Alem\xe1n"},{"id":"en","lang":"Language","es":"Spanish","en":"English","de":"German"},{"id":"de","lang":"Sprache","es":"Spanisch","en":"Englisch","de":"Deutsch"}],"empty":[{"id":"es","name":"Aun no has seleccionado a tus Pokemon favotitos"},{"id":"en","name":"You have not added any favorite Pokemon yet"},{"id":"de","name":"Du hast dein Lieblingspokemon noch nicht ausgew\xe4hlt"}]}')},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.40754ee3.chunk.js.map