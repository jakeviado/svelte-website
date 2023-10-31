import{s as B,c as R,u as q,g as x,d as D,e as F,n as G}from"../chunks/scheduler.19461008.js";import{S as M,i as N,g as h,h as m,j as b,f as v,k as d,a as T,x as J,d as A,t as w,r as P,s as H,u as S,c as L,y as I,v as U,z as p,w as V}from"../chunks/index.de6ea330.js";import{p as K}from"../chunks/stores.14480671.js";function Q(u){let e,t,r,n;const o=u[1].default,s=R(o,u,u[0],null);return{c(){e=h("button"),s&&s.c(),this.h()},l(a){e=m(a,"BUTTON",{class:!0});var c=b(e);s&&s.l(c),c.forEach(v),this.h()},h(){d(e,"class","svelte-zg652y")},m(a,c){T(a,e,c),s&&s.m(e,null),t=!0,r||(n=J(e,"click",W),r=!0)},p(a,[c]){s&&s.p&&(!t||c&1)&&q(s,o,a,a[0],t?D(o,a[0],c,null):x(a[0]),null)},i(a){t||(A(s,a),t=!0)},o(a){w(s,a),t=!1},d(a){a&&v(e),s&&s.d(a),r=!1,n()}}}function W(){window.document.body.classList.toggle("dark-mode")}function X(u,e,t){let{$$slots:r={},$$scope:n}=e;return u.$$set=o=>{"$$scope"in o&&t(0,n=o.$$scope)},[n,r]}class Y extends M{constructor(e){super(),N(this,e,X,Q,B,{})}}function Z(u){let e,t="PARANOIA";return{c(){e=h("p"),e.textContent=t,this.h()},l(r){e=m(r,"P",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-9dwahp"&&(e.textContent=t),this.h()},h(){d(e,"class","svelte-lj0adk")},m(r,n){T(r,e,n)},p:G,d(r){r&&v(e)}}}function ee(u){let e,t,r,n,o,s,a,c="Home",g,f,l,i,y="Blogs",E,k;return t=new Y({props:{$$slots:{default:[Z]},$$scope:{ctx:u}}}),{c(){e=h("header"),P(t.$$.fragment),r=H(),n=h("nav"),o=h("ul"),s=h("li"),a=h("a"),a.textContent=c,f=H(),l=h("li"),i=h("a"),i.textContent=y,this.h()},l(_){e=m(_,"HEADER",{class:!0});var $=b(e);S(t.$$.fragment,$),r=L($),n=m($,"NAV",{class:!0});var C=b(n);o=m(C,"UL",{class:!0});var j=b(o);s=m(j,"LI",{"aria-current":!0,class:!0});var O=b(s);a=m(O,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(a)!=="svelte-5a0zws"&&(a.textContent=c),O.forEach(v),f=L(j),l=m(j,"LI",{"aria-current":!0,class:!0});var z=b(l);i=m(z,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(i)!=="svelte-c2runt"&&(i.textContent=y),z.forEach(v),j.forEach(v),C.forEach(v),$.forEach(v),this.h()},h(){d(a,"href","/"),d(a,"class","svelte-lj0adk"),d(s,"aria-current",g=u[0].url.pathname==="/"?"page":void 0),d(s,"class","svelte-lj0adk"),d(i,"href","/about"),d(i,"class","svelte-lj0adk"),d(l,"aria-current",E=u[0].url.pathname==="/about"?"page":void 0),d(l,"class","svelte-lj0adk"),d(o,"class","svelte-lj0adk"),d(n,"class","svelte-lj0adk"),d(e,"class","svelte-lj0adk")},m(_,$){T(_,e,$),U(t,e,null),p(e,r),p(e,n),p(n,o),p(o,s),p(s,a),p(o,f),p(o,l),p(l,i),k=!0},p(_,[$]){const C={};$&2&&(C.$$scope={dirty:$,ctx:_}),t.$set(C),(!k||$&1&&g!==(g=_[0].url.pathname==="/"?"page":void 0))&&d(s,"aria-current",g),(!k||$&1&&E!==(E=_[0].url.pathname==="/about"?"page":void 0))&&d(l,"aria-current",E)},i(_){k||(A(t.$$.fragment,_),k=!0)},o(_){w(t.$$.fragment,_),k=!1},d(_){_&&v(e),V(t)}}}function te(u,e,t){let r;return F(u,K,n=>t(0,r=n)),[r]}class se extends M{constructor(e){super(),N(this,e,te,ee,B,{})}}function ae(u){let e,t,r,n,o,s,a='<p>More on: <a href="https://github.com/jakeviado" class="svelte-1g1me2f">GitHub</a></p>',c;t=new se({});const g=u[1].default,f=R(g,u,u[0],null);return{c(){e=h("div"),P(t.$$.fragment),r=H(),n=h("main"),f&&f.c(),o=H(),s=h("footer"),s.innerHTML=a,this.h()},l(l){e=m(l,"DIV",{class:!0});var i=b(e);S(t.$$.fragment,i),r=L(i),n=m(i,"MAIN",{});var y=b(n);f&&f.l(y),y.forEach(v),o=L(i),s=m(i,"FOOTER",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-1hqvoob"&&(s.innerHTML=a),i.forEach(v),this.h()},h(){d(s,"class","svelte-1g1me2f"),d(e,"class","app svelte-1g1me2f")},m(l,i){T(l,e,i),U(t,e,null),p(e,r),p(e,n),f&&f.m(n,null),p(e,o),p(e,s),c=!0},p(l,[i]){f&&f.p&&(!c||i&1)&&q(f,g,l,l[0],c?D(g,l[0],i,null):x(l[0]),null)},i(l){c||(A(t.$$.fragment,l),A(f,l),c=!0)},o(l){w(t.$$.fragment,l),w(f,l),c=!1},d(l){l&&v(e),V(t),f&&f.d(l)}}}function le(u,e,t){let{$$slots:r={},$$scope:n}=e;return u.$$set=o=>{"$$scope"in o&&t(0,n=o.$$scope)},[n,r]}class ue extends M{constructor(e){super(),N(this,e,le,ae,B,{})}}export{ue as component};
