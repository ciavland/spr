"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7895],{7895:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),P=m(4862),h=m(6655),K=m(8034);m(4110);const A=new WeakMap,I=(t,e,s,r=0,n=!1)=>{A.has(t)!==s&&(s?k(t,e,r,n):H(t,e))},k=(t,e,s,r=!1)=>{const n=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r&&(o.disabled=!0),n.appendChild(o),A.set(t,o);const d="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},T="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",p=(t,e,s)=>{const r=t[N];r&&clearTimeout(r),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[N]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&p(e,0,s)},{once:!0})};let g=0;const w="data-ionic-skip-scroll-assist",V=(t,e,s,r,n,o,a,d=!1)=>{const i=o&&(void 0===a||a.mode===K.K.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(w)?e.removeAttribute(w):J(t,e,s,r,n,i,d)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},C=t=>{document.activeElement!==t&&(t.setAttribute(w,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,r,n,o,a,d=!1){if(!r&&!n)return;const i=((t,e,s)=>{var r;return((t,e,s,r)=>{const n=t.top,o=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,r-s)-50-o,v=i-n,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,n-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(r=t.closest("ion-item,[ion-item]"))&&void 0!==r?r:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,r||n,o);if(r&&Math.abs(i.scrollAmount)<4)return C(s),void(a&&null!==r&&(p(r,g),U(s,r,()=>g=0)));if(I(e,s,!0,i.inputSafeY,d),C(s),(0,h.r)(()=>e.click()),a&&r&&(g=i.scrollPadding,p(r,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,P.c)(r,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),C(s),a&&U(s,r,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(r){const l=yield(0,P.g)(r);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,r,n,o,a,d){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const r=document,n="ios"===s,o="android"===s,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",n),S=e.getBoolean("inputBlurring",n),u=e.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,j=yield K.a.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(D=>(0,h.c)(c,D));const x=c.shadowRoot||c,L=x.querySelector("input")||x.querySelector("textarea"),b=(0,P.f)(c),W=b?null:c.closest("ion-footer");if(L){if(b&&i&&!l.has(c)){const D=((t,e,s)=>{if(!s||!e)return()=>{};const r=d=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,d)},n=()=>I(t,e,!1),o=()=>r(!0),a=()=>r(!1);return(0,h.a)(s,"ionScrollStart",o),(0,h.a)(s,"ionScrollEnd",a),e.addEventListener("blur",n),()=>{(0,h.b)(s,"ionScrollStart",o),(0,h.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",n)}})(c,L,b);l.set(c,D)}if("date"!==L.type&&"datetime-local"!==L.type&&(b||W)&&d&&!_.has(c)){const D=V(c,L,b,W,a,u,j,o);_.set(c,D)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const d=s.activeElement;if(!d||d.matches(T))return;const i=a.target;i!==d&&(i.matches(T)||i.closest(T)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})();for(const f of v)M(f);r.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),r.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,r){return t.apply(this,arguments)}}()}}]);