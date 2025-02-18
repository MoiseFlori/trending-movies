"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{261:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),o="SearchBar_searchbar__vy24d",i="SearchBar_searchForm__ZATSv",p="SearchBar_searchFormButton__4B6PG",h="SearchBar_searchFormInput__Obq1p",f=t(184),l=function(e){var r=e.onSubmit,t=(0,s.useState)(""),n=(0,a.Z)(t,2),c=n[0],u=n[1];return(0,f.jsx)("header",{className:o,children:(0,f.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),r(c),u("")},children:[(0,f.jsx)("button",{type:"submit",className:p}),(0,f.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(e){u(e.target.value)}})]})})},m=t(171),v=t(162),d=t(829),x=(t(967),function(e){var r=e.movies,t=e.hasSearched;return(0,f.jsx)("div",{children:t&&0===r.length?(0,f.jsx)("p",{className:"notFound",children:"No movies found. Try a different search."}):(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsx)("li",{className:d.Z.movieItem,children:(0,f.jsx)(v.rU,{to:"/movies/".concat(e.id),children:(0,f.jsx)("h3",{children:e.title})})},e.id)}))})})}),w=t(816),_=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],o=(0,s.useState)(null),i=(0,a.Z)(o,2),p=i[0],h=i[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),_=d[0],b=d[1],y=(0,s.useState)(!1),Z=(0,a.Z)(y,2),k=Z[0],j=Z[1],S=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.trim()){e.next=2;break}return e.abrupt("return");case 2:return j(!0),b(!0),h(null),e.prev=5,e.next=8,(0,m.z1)(r);case 8:t=e.sent,c(t.results),h(null),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),h("An error occurred while fetching movies."),console.error(e.t0);case 17:return e.prev=17,j(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[5,13,17,20]])})));return function(r){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{onSubmit:S})," ",p&&(0,f.jsx)("p",{children:p}),k?(0,f.jsx)(w.Z,{}):(0,f.jsx)(x,{movies:t,hasSearched:_})]})}},171:function(e,r,t){t.d(r,{Df:function(){return f},IQ:function(){return w},Jh:function(){return b},TP:function(){return d},z1:function(){return m}});var n=t(413),a=t(861),c=t(757),u=t.n(c),s=t(16),o="21161239b69d8dd6ebeec5ac6086d760",i="https://api.themoviedb.org/3";function p(e){return h.apply(this,arguments)}function h(){return h=(0,a.Z)(u().mark((function e(r){var t,a,c,p,h=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>1&&void 0!==h[1]?h[1]:{},a="".concat(i).concat(r),c={params:(0,n.Z)((0,n.Z)({},t),{},{api_key:o})},e.prev=3,e.next=6,s.Z.get(a,c);case 6:return p=e.sent,e.abrupt("return",p.data);case 10:if(e.prev=10,e.t0=e.catch(3),!e.t0.response){e.next=16;break}throw new Error("Error: ".concat(e.t0.response.status," - ").concat(e.t0.response.statusText));case 16:if(!e.t0.request){e.next=20;break}throw new Error("Nu s-a primit r\u0103spuns de la server");case 20:throw new Error("Eroare: ".concat(e.t0.message));case 21:case"end":return e.stop()}}),e,null,[[3,10]])}))),h.apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.abrupt("return",p("/trending/movie/day"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.abrupt("return",p("/search/movie",{query:r}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r),e.abrupt("return",p(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/credits"),e.abrupt("return",p(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/reviews"),e.abrupt("return",p(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},967:function(){},829:function(e,r){r.Z={homeContainer:"Home_homeContainer__GAQTq",homeTitle:"Home_homeTitle__sxQjE",movieItem:"Home_movieItem__Rwil1"}}}]);
//# sourceMappingURL=261.82a72536.chunk.js.map