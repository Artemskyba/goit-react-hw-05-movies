"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[388],{687:function(t,e,r){r.d(e,{$0:function(){return p},Bt:function(){return f},Hq:function(){return i},Tg:function(){return s},h_:function(){return o}});var n=r(861),u=r(757),a=r.n(u),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"e0f61313dcf9f8698c9430989ed8bb6d"};var s=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("3/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("3/search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("3/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("3/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},388:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n,u=r(861),a=r(439),c=r(757),s=r.n(c),i=r(687),o=r(168),p=r(867).ZP.p(n||(n=(0,o.Z)(["\n  white-space: pre-wrap;\n  margin-bottom: 15px;\n"]))),f=r(184),h=function(t){var e=t.author,r=t.text;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e]}),(0,f.jsx)(p,{children:r})]})},d=r(791),v=r(689);function l(){var t=(0,d.useState)(!1),e=(0,a.Z)(t,2),r=e[0],n=e[1],c=(0,d.useState)(null),o=(0,a.Z)(c,2),p=o[0],l=o[1],x=(0,d.useState)([]),m=(0,a.Z)(x,2),w=m[0],Z=m[1],b=(0,v.UO)().movieId;return(0,d.useEffect)((function(){function t(){return(t=(0,u.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.prev=1,t.next=4,(0,i.Bt)(b);case 4:e=t.sent,Z(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l(t.t0);case 11:return t.prev=11,n(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[b]),(0,f.jsx)("ul",{children:r?(0,f.jsx)("div",{children:"LOADING"}):p?(0,f.jsxs)("div",{children:[(0,f.jsxs)("b",{children:[":","("]}),"Something went wrong"," "]}):w.length>0?w.map((function(t){var e=t.id,r=t.author_details,n=t.content;return(0,f.jsx)(h,{author:r.username,text:n},e)})):(0,f.jsx)("p",{children:(0,f.jsx)("b",{children:"There is no reviews"})})})}}}]);
//# sourceMappingURL=388.8a9f7db9.chunk.js.map