"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{687:function(e,t,r){r.d(t,{$0:function(){return p},Bt:function(){return d},Hq:function(){return i},Tg:function(){return u},h_:function(){return o}});var n=r(861),s=r(757),a=r.n(s),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"e0f61313dcf9f8698c9430989ed8bb6d"};var u=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},50:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),s=r(439),a=r(757),c=r.n(a),u=r(687),i=r(791),o=r(689),p=r(87),d=r(184),f=function(e){var t,r,n=e.movieInfo,s=n.original_title,a=n.release_date,c=n.genres,u=n.poster_path,f=n.vote_average,l=n.overview,h=a.split("-")[0],v=(0,o.TH)(),x=(0,i.useRef)(null!==(t=null===(r=v.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.rU,{to:x.current,children:(0,d.jsx)("button",{children:"GO BACK"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:u?"".concat("https://image.tmdb.org/t/p/w300").concat(u):"https://shop.stryi-tur.info/wp-content/uploads/2022/11/161.jpg",alt:s}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[s," (",h,")"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"User Score: "}),Math.ceil(10*f),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:l}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:c.map((function(e){var t=e.id,r=e.name;return(0,d.jsx)("span",{children:r},t)}))})]})]})]})};function l(){var e=(0,o.UO)().movieId,t=(0,i.useState)(null),r=(0,s.Z)(t,2),a=r[0],l=r[1],h=(0,i.useState)(!1),v=(0,s.Z)(h,2),x=v[0],m=v[1],j=(0,i.useState)(null),w=(0,s.Z)(j,2),g=w[0],b=w[1];return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,u.h_)(e);case 4:r=t.sent,l(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),x?(0,d.jsx)("div",{children:"LOADING"}):g?(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:[":","("]}),"Something went wrong"," "]}):(0,d.jsxs)(d.Fragment,{children:[a&&(0,d.jsx)(f,{movieInfo:a}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsx)(p.OL,{to:"cast",children:"Cast"}),(0,d.jsx)(p.OL,{to:"reviews",children:"Rewiews"})]}),(0,d.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=50.ba8dc484.chunk.js.map