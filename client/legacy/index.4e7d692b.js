import{_ as t,a as n,b as e,c as r,i as c,s as a,d as o,S as i,e as u,t as f,f as s,g as l,h,j as p,k as m,l as v,m as d,n as g,o as $,p as w,q as E,r as D,u as R,v as y,w as T,x as S,y as I,z as b,A as H,B as L,C as M,D as x,E as N,F as A,G as k,H as _,I as P,J as O}from"./client.df556663.js";import{O as U,L as V}from"./index.48d15f35.js";import{p as C}from"./snarkdown.es.d9f60182.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function B(t,n,e){var r=t.slice();return r[5]=n[e],r}function F(t){var n,e,r,c=S.i18n.allSystemsOperational+"";return{c:function(){n=u("article"),e=f("✅   "),r=f(c),this.h()},l:function(t){n=s(t,"ARTICLE",{class:!0});var a=l(n);e=h(a,"✅   "),r=h(a,c),a.forEach(p),this.h()},h:function(){m(n,"class","good svelte-lf2whe")},m:function(t,c){v(t,n,c),d(n,e),d(n,r)},p:g,d:function(t){t&&p(n)}}}function z(t){for(var n,e,r,c,a=S.i18n.activeIncidents+"",o=t[1],i=[],m=0;m<o.length;m+=1)i[m]=q(B(t,o,m));return{c:function(){n=u("h2"),e=f(a),r=$();for(var t=0;t<i.length;t+=1)i[t].c();c=M()},l:function(t){n=s(t,"H2",{});var o=l(n);e=h(o,a),o.forEach(p),r=w(t);for(var u=0;u<i.length;u+=1)i[u].l(t);c=M()},m:function(t,a){v(t,n,a),d(n,e),v(t,r,a);for(var o=0;o<i.length;o+=1)i[o].m(t,a);v(t,c,a)},p:function(t,n){if(2&n){var e;for(o=t[1],e=0;e<o.length;e+=1){var r=B(t,o,e);i[e]?i[e].p(r,n):(i[e]=q(r),i[e].c(),i[e].m(c.parentNode,c))}for(;e<i.length;e+=1)i[e].d(1);i.length=o.length}},i:g,o:g,d:function(t){t&&p(n),t&&p(r),x(i,t),t&&p(c)}}}function J(t){var n,e;return n=new V({}),{c:function(){N(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,r){k(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function q(t){var n,e,r,c,a,o,i,g,E,D,R,y,T,I,b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",H=S.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"",M=S.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"";return{c:function(){n=u("article"),e=u("div"),r=u("div"),c=u("h4"),a=f(b),o=$(),i=u("div"),g=f(H),E=$(),D=u("div"),R=u("a"),y=f(M),I=$(),this.h()},l:function(t){n=s(t,"ARTICLE",{class:!0});var u=l(n);e=s(u,"DIV",{class:!0});var f=l(e);r=s(f,"DIV",{});var m=l(r);c=s(m,"H4",{});var v=l(c);a=h(v,b),v.forEach(p),o=w(m),i=s(m,"DIV",{});var d=l(i);g=h(d,H),d.forEach(p),m.forEach(p),E=w(f),D=s(f,"DIV",{class:!0});var $=l(D);R=s($,"A",{href:!0});var T=l(R);y=h(T,M),T.forEach(p),$.forEach(p),f.forEach(p),I=w(u),u.forEach(p),this.h()},h:function(){m(R,"href",T="/incident/".concat(t[5].number)),m(D,"class","f r"),m(e,"class","f"),m(n,"class","down link svelte-lf2whe")},m:function(t,u){v(t,n,u),d(n,e),d(e,r),d(r,c),d(c,a),d(r,o),d(r,i),d(i,g),d(e,E),d(e,D),d(D,R),d(R,y),d(n,I)},p:function(t,n){2&n&&b!==(b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&L(a,b),2&n&&H!==(H=S.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"")&&L(g,H),2&n&&M!==(M=S.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&L(y,M),2&n&&T!==(T="/incident/".concat(t[5].number))&&m(R,"href",T)},d:function(t){t&&p(n)}}}function G(t){var n,e,r,c,a,o=!t[1].length&&!t[0]&&F(),i=[J,z],f=[];function h(t,n){return t[0]?0:t[1].length?1:-1}return~(r=h(t))&&(c=f[r]=i[r](t)),{c:function(){o&&o.c(),n=$(),e=u("section"),c&&c.c(),this.h()},l:function(t){o&&o.l(t),n=w(t),e=s(t,"SECTION",{class:!0});var r=l(e);c&&c.l(r),r.forEach(p),this.h()},h:function(){m(e,"class","svelte-lf2whe")},m:function(t,c){o&&o.m(t,c),v(t,n,c),v(t,e,c),~r&&f[r].m(e,null),a=!0},p:function(t,a){var u=E(a,1)[0];t[1].length||t[0]?o&&(o.d(1),o=null):o?o.p(t,u):((o=F()).c(),o.m(n.parentNode,n));var s=r;(r=h(t))===s?~r&&f[r].p(t,u):(c&&(D(),R(f[s],1,1,(function(){f[s]=null})),y()),~r?((c=f[r])||(c=f[r]=i[r](t)).c(),T(c,1),c.m(e,null)):c=null)},i:function(t){a||(T(c),a=!0)},o:function(t){R(c),a=!1},d:function(t){o&&o.d(t),t&&p(n),t&&p(e),~r&&f[r].d()}}}function K(t,n,e){var r=!0,c=new U({userAgent:S["user-agent"]}),a=S.owner,o=S.repo,i=[];return I(b(H.mark((function t(){return H.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,c.issues.listForRepo({owner:a,repo:o,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"});case 3:t.t1=i=t.sent.data,(0,t.t0)(1,t.t1),e(1,i=i.map((function(t,n){return t.showHeading=0===n||new Date(i[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),e(0,r=!1);case 7:case"end":return t.stop()}}),t)})))),[r,i]}var Q=function(n){t(u,i);var e=j(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,K,G,a,{}),n}return u}();function W(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function X(t,n,e){var r=t.slice();return r[5]=n[e],r}function Y(t){for(var n,e=t[1],r=[],c=0;c<e.length;c+=1)r[c]=tt(X(t,e,c));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=M()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=M()},m:function(t,e){for(var c=0;c<r.length;c+=1)r[c].m(t,e);v(t,n,e)},p:function(t,c){if(14&c){var a;for(e=t[1],a=0;a<e.length;a+=1){var o=X(t,e,a);r[a]?r[a].p(o,c):(r[a]=tt(o),r[a].c(),r[a].m(n.parentNode,n))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},i:g,o:g,d:function(t){x(r,t),t&&p(n)}}}function Z(t){var n,e;return n=new V({}),{c:function(){N(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,r){k(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function tt(t){var n,e,r,c,a,o,i,g,E,D,R,y,T=t[5].name+"",I=S.i18n.overallUptime.replace(/\$UPTIME/g,t[5].uptime)+"",b=S.i18n.averageResponseTime.replace(/\$TIME/g,t[5].time)+"";return{c:function(){n=u("article"),e=u("h4"),r=u("a"),c=f(T),o=$(),i=u("div"),g=$(),E=u("div"),D=$(),this.h()},l:function(t){n=s(t,"ARTICLE",{class:!0,style:!0});var a=l(n);e=s(a,"H4",{});var u=l(e);r=s(u,"A",{href:!0});var f=l(r);c=h(f,T),f.forEach(p),u.forEach(p),o=w(a),i=s(a,"DIV",{}),l(i).forEach(p),g=w(a),E=s(a,"DIV",{}),l(E).forEach(p),D=w(a),a.forEach(p),this.h()},h:function(){m(r,"href",a="/history/".concat(t[5].slug)),m(n,"class",R=P("".concat(t[5].status," link"))+" svelte-b6aso6"),m(n,"style",y='background-image: url("https://raw.githubusercontent.com/'.concat(t[2],"/").concat(t[3],"/main/graphs/").concat(t[5].slug,".png"))},m:function(t,a){v(t,n,a),d(n,e),d(e,r),d(r,c),d(n,o),d(n,i),i.innerHTML=I,d(n,g),d(n,E),E.innerHTML=b,d(n,D)},p:function(t,e){2&e&&T!==(T=t[5].name+"")&&L(c,T),2&e&&a!==(a="/history/".concat(t[5].slug))&&m(r,"href",a),2&e&&I!==(I=S.i18n.overallUptime.replace(/\$UPTIME/g,t[5].uptime)+"")&&(i.innerHTML=I),2&e&&b!==(b=S.i18n.averageResponseTime.replace(/\$TIME/g,t[5].time)+"")&&(E.innerHTML=b),2&e&&R!==(R=P("".concat(t[5].status," link"))+" svelte-b6aso6")&&m(n,"class",R),2&e&&y!==(y='background-image: url("https://raw.githubusercontent.com/'.concat(t[2],"/").concat(t[3],"/main/graphs/").concat(t[5].slug,".png"))&&m(n,"style",y)},d:function(t){t&&p(n)}}}function nt(t){var n,e,r,c,a,o,i,m=S.i18n.liveStatus+"",g=[Z,Y],I=[];function b(t,n){return t[0]?0:t[1].length?1:-1}return~(a=b(t))&&(o=I[a]=g[a](t)),{c:function(){n=u("h2"),e=f(m),r=$(),c=u("section"),o&&o.c()},l:function(t){n=s(t,"H2",{});var a=l(n);e=h(a,m),a.forEach(p),r=w(t),c=s(t,"SECTION",{});var i=l(c);o&&o.l(i),i.forEach(p)},m:function(t,o){v(t,n,o),d(n,e),v(t,r,o),v(t,c,o),~a&&I[a].m(c,null),i=!0},p:function(t,n){var e=E(n,1)[0],r=a;(a=b(t))===r?~a&&I[a].p(t,e):(o&&(D(),R(I[r],1,1,(function(){I[r]=null})),y()),~a?((o=I[a])||(o=I[a]=g[a](t)).c(),T(o,1),o.m(c,null)):o=null)},i:function(t){i||(T(o),i=!0)},o:function(t){R(o),i=!1},d:function(t){t&&p(n),t&&p(r),t&&p(c),~a&&I[a].d()}}}function et(t,n,e){var r=!0,c=new U({userAgent:S["user-agent"]}),a=S.owner,o=S.repo,i=[];return I(b(H.mark((function t(){return H.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=JSON,t.t2=atob,t.next=5,c.repos.getContent({owner:a,repo:o,path:"history/summary.json"});case 5:t.t3=t.sent.data.content.replace(/\n/g,""),t.t4=(0,t.t2)(t.t3),t.t5=i=t.t1.parse.call(t.t1,t.t4),(0,t.t0)(1,t.t5),e(0,r=!1);case 10:case"end":return t.stop()}}),t)})))),[r,i,a,o]}var rt=function(n){t(u,i);var e=W(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,et,nt,a,{}),n}return u}();function ct(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function at(t,n,e){var r=t.slice();return r[5]=n[e],r}function ot(t){for(var n,e,r,c,a=S.i18n.pastIncidents+"",o=t[1],i=[],E=0;E<o.length;E+=1)i[E]=ft(at(t,o,E));return{c:function(){n=u("h2"),e=f(a),r=$();for(var t=0;t<i.length;t+=1)i[t].c();c=M(),this.h()},l:function(t){n=s(t,"H2",{class:!0});var o=l(n);e=h(o,a),o.forEach(p),r=w(t);for(var u=0;u<i.length;u+=1)i[u].l(t);c=M(),this.h()},h:function(){m(n,"class","svelte-18y4uo2")},m:function(t,a){v(t,n,a),d(n,e),v(t,r,a);for(var o=0;o<i.length;o+=1)i[o].m(t,a);v(t,c,a)},p:function(t,n){if(2&n){var e;for(o=t[1],e=0;e<o.length;e+=1){var r=at(t,o,e);i[e]?i[e].p(r,n):(i[e]=ft(r),i[e].c(),i[e].m(c.parentNode,c))}for(;e<i.length;e+=1)i[e].d(1);i.length=o.length}},i:g,o:g,d:function(t){t&&p(n),t&&p(r),x(i,t),t&&p(c)}}}function it(t){var n,e;return n=new V({}),{c:function(){N(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,r){k(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function ut(t){var n,e,r=new Date(t[5].created_at).toLocaleDateString()+"";return{c:function(){n=u("h3"),e=f(r)},l:function(t){n=s(t,"H3",{});var c=l(n);e=h(c,r),c.forEach(p)},m:function(t,r){v(t,n,r),d(n,e)},p:function(t,n){2&n&&r!==(r=new Date(t[5].created_at).toLocaleDateString()+"")&&L(e,r)},d:function(t){t&&p(n)}}}function ft(t){var n,e,r,c,a,o,i,g,E,D,R,y,T,I,b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",H=S.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"",M=S.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"",x=t[5].showHeading&&ut(t);return{c:function(){x&&x.c(),n=$(),e=u("article"),r=u("div"),c=u("div"),a=u("h4"),o=f(b),i=$(),g=u("div"),E=$(),D=u("div"),R=u("a"),y=f(M),I=$(),this.h()},l:function(t){x&&x.l(t),n=w(t),e=s(t,"ARTICLE",{class:!0});var u=l(e);r=s(u,"DIV",{class:!0});var f=l(r);c=s(f,"DIV",{});var m=l(c);a=s(m,"H4",{});var v=l(a);o=h(v,b),v.forEach(p),i=w(m),g=s(m,"DIV",{}),l(g).forEach(p),m.forEach(p),E=w(f),D=s(f,"DIV",{class:!0});var d=l(D);R=s(d,"A",{href:!0});var $=l(R);y=h($,M),$.forEach(p),d.forEach(p),f.forEach(p),I=w(u),u.forEach(p),this.h()},h:function(){m(R,"href",T="/incident/".concat(t[5].number)),m(D,"class","f r"),m(r,"class","f"),m(e,"class","down link")},m:function(t,u){x&&x.m(t,u),v(t,n,u),v(t,e,u),d(e,r),d(r,c),d(c,a),d(a,o),d(c,i),d(c,g),g.innerHTML=H,d(r,E),d(r,D),d(D,R),d(R,y),d(e,I)},p:function(t,e){t[5].showHeading?x?x.p(t,e):((x=ut(t)).c(),x.m(n.parentNode,n)):x&&(x.d(1),x=null),2&e&&b!==(b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&L(o,b),2&e&&H!==(H=S.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"")&&(g.innerHTML=H),2&e&&M!==(M=S.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&L(y,M),2&e&&T!==(T="/incident/".concat(t[5].number))&&m(R,"href",T)},d:function(t){x&&x.d(t),t&&p(n),t&&p(e)}}}function st(t){var n,e,r,c,a=[it,ot],o=[];function i(t,n){return t[0]?0:t[1].length?1:-1}return~(e=i(t))&&(r=o[e]=a[e](t)),{c:function(){n=u("section"),r&&r.c()},l:function(t){n=s(t,"SECTION",{});var e=l(n);r&&r.l(e),e.forEach(p)},m:function(t,r){v(t,n,r),~e&&o[e].m(n,null),c=!0},p:function(t,c){var u=E(c,1)[0],f=e;(e=i(t))===f?~e&&o[e].p(t,u):(r&&(D(),R(o[f],1,1,(function(){o[f]=null})),y()),~e?((r=o[e])||(r=o[e]=a[e](t)).c(),T(r,1),r.m(n,null)):r=null)},i:function(t){c||(T(r),c=!0)},o:function(t){R(r),c=!1},d:function(t){t&&p(n),~e&&o[e].d()}}}function lt(t,n,e){var r=!0,c=new U({userAgent:S["user-agent"]}),a=S.owner,o=S.repo,i=[];return I(b(H.mark((function t(){return H.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,c.issues.listForRepo({owner:a,repo:o,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"});case 3:t.t1=i=t.sent.data,(0,t.t0)(1,t.t1),e(1,i=i.map((function(t,n){return t.showHeading=0===n||new Date(i[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),e(0,r=!1);case 7:case"end":return t.stop()}}),t)})))),[r,i]}var ht=function(n){t(u,i);var e=ct(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,lt,st,a,{}),n}return u}();function pt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function mt(t){var n,e,r,c,a=S["status-website"].introTitle&&(c=C(S["status-website"].introTitle)+"",{c:function(){r=u("h1")},l:function(t){r=s(t,"H1",{}),l(r).forEach(p)},m:function(t,n){v(t,r,n),r.innerHTML=c},p:g,d:function(t){t&&p(r)}}),o=S["status-website"].introMessage&&function(t){var n,e=C(S["status-website"].introMessage)+"";return{c:function(){n=u("p"),this.h()},l:function(t){n=s(t,"P",{class:!0}),l(n).forEach(p),this.h()},h:function(){m(n,"class","lead svelte-ngkazm")},m:function(t,r){v(t,n,r),n.innerHTML=e},p:g,d:function(t){t&&p(n)}}}();return{c:function(){a&&a.c(),n=$(),o&&o.c(),e=M()},l:function(t){a&&a.l(t),n=w(t),o&&o.l(t),e=M()},m:function(t,r){a&&a.m(t,r),v(t,n,r),o&&o.m(t,r),v(t,e,r)},p:function(t,n){S["status-website"].introTitle&&a.p(t,n),S["status-website"].introMessage&&o.p(t,n)},d:function(t){a&&a.d(t),t&&p(n),o&&o.d(t),t&&p(e)}}}function vt(t){var n,e,r,c,a,o,i,f,h,d;document.title=n=t[0];var g=S["status-website"]&&mt();return a=new Q({}),i=new rt({}),h=new ht({}),{c:function(){e=$(),r=u("header"),g&&g.c(),c=$(),N(a.$$.fragment),o=$(),N(i.$$.fragment),f=$(),N(h.$$.fragment),this.h()},l:function(t){O('[data-svelte="svelte-1258swp"]',document.head).forEach(p),e=w(t),r=s(t,"HEADER",{class:!0});var n=l(r);g&&g.l(n),n.forEach(p),c=w(t),A(a.$$.fragment,t),o=w(t),A(i.$$.fragment,t),f=w(t),A(h.$$.fragment,t),this.h()},h:function(){m(r,"class","svelte-ngkazm")},m:function(t,n){v(t,e,n),v(t,r,n),g&&g.m(r,null),v(t,c,n),k(a,t,n),v(t,o,n),k(i,t,n),v(t,f,n),k(h,t,n),d=!0},p:function(t,e){var r=E(e,1)[0];(!d||1&r)&&n!==(n=t[0])&&(document.title=n),S["status-website"]&&g.p(t,r)},i:function(t){d||(T(a.$$.fragment,t),T(i.$$.fragment,t),T(h.$$.fragment,t),d=!0)},o:function(t){R(a.$$.fragment,t),R(i.$$.fragment,t),R(h.$$.fragment,t),d=!1},d:function(t){t&&p(e),t&&p(r),g&&g.d(),t&&p(c),_(a,t),t&&p(o),_(i,t),t&&p(f),_(h,t)}}}function dt(t,n,e){var r="Status";try{r=S["status-website"].name}catch(t){}return[r]}var gt=function(n){t(u,i);var e=pt(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,dt,vt,a,{}),n}return u}();export default gt;
