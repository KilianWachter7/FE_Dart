(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{155:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_popover",(function(){return f}));var i=t(11),r=t(4),n=(t(17),t(1)),s=t(18),a=(t(26),t(22)),p=t(196),c=t(198);const l=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,c=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,h=e&&e.target&&e.target.getBoundingClientRect(),m=null!=h&&"top"in h?h.top:l/2-p/2,v=null!=h&&"left"in h?h.left:c/2,f=h&&h.width||0,b=h&&h.height||0,u=o.querySelector(".popover-arrow"),w=u.getBoundingClientRect(),g=w.width,x=w.height;null==h&&(u.style.display="none");const y={top:m+b,left:v+f/2-g/2},k={top:m+b+(x-1),left:v+f/2-a/2};let j=!1,O=!1;k.left<d+25?(j=!0,k.left=d):a+d+k.left+25>c&&(O=!0,k.left=c-a-d,i="right"),m+b+p>l&&m-p>0?(y.top=m-(x+1),k.top=m-p-(x-1),o.className=o.className+" popover-bottom",t="bottom"):m+b+p>l&&(r.style.bottom=d+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",j&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),O&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const D=Object(n.a)(),E=Object(n.a)(),P=Object(n.a)();return E.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(100).addAnimation([E,P])},d=5,h=o=>{const e=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},m=(o,e)=>{const t=o.ownerDocument,i="rtl"===t.dir;let r="top",s=i?"right":"left";const a=o.querySelector(".popover-content"),p=a.getBoundingClientRect(),c=p.width,l=p.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,m=e&&e.target&&e.target.getBoundingClientRect(),v=null!=m&&"bottom"in m?m.bottom:h/2-l/2,f=null!=m&&"left"in m?i?m.left-c+m.width:m.left:d/2-c/2,b=m&&m.height||0,u={top:v,left:f};u.left<12?(u.left=12,s="left"):c+12+u.left>d&&(u.left=d-c-12,s="right"),v+b+l>h&&v-l>0?(u.top=v-l-b,o.className=o.className+" popover-bottom",r="bottom"):v+b+l>h&&(a.style.bottom="12px");const w=Object(n.a)(),g=Object(n.a)(),x=Object(n.a)(),y=Object(n.a)(),k=Object(n.a)();return g.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),x.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(a).beforeStyles({top:`${u.top}px`,left:`${u.left}px`,"transform-origin":`${r} ${s}`}).fromTo("transform","scale(0.001)","scale(1)"),k.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,x,y,k])},v=o=>{const e=Object(n.a)(),t=Object(n.a)(),i=Object(n.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},f=class{constructor(o){Object(i.l)(this,o),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,a.a)},this.onLifecycle=o=>{const e=this.usersElement,t=b[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}},Object(a.e)(this.el),this.didPresent=Object(i.f)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.f)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.f)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.f)(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(c.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e),await Object(s.d)(this.usersElement),Object(a.f)(this,"popoverEnter",l,m,this.event)}async dismiss(o,e){const t=await Object(a.g)(this,o,e,"popoverLeave",h,v,this.event);return t&&await Object(c.b)(this.delegate,this.usersElement),t}onDidDismiss(){return Object(a.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(a.h)(this.el,"ionPopoverWillDismiss")}render(){const o=Object(r.b)(this),{onLifecycle:e}=this;return Object(i.j)(i.b,{"aria-modal":"true","no-router":!0,style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(p.b)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.j)("div",{class:"popover-wrapper"},Object(i.j)("div",{class:"popover-arrow"}),Object(i.j)("div",{class:"popover-content"})))}get el(){return Object(i.g)(this)}},b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};f.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},196:function(o,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a}));const i=(o,e)=>null!==e.closest(o),r=o=>"string"==typeof o&&o.length>0?{"ion-color":!0,[`ion-color-${o}`]:!0}:void 0,n=o=>{const e={};return(o=>{if(void 0!==o){return(Array.isArray(o)?o:o.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o)}return[]})(o).forEach(o=>e[o]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(o,e,t)=>{if(null!=o&&"#"!==o[0]&&!s.test(o)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(o,t)}return!1}},198:function(o,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));const i=async(o,e,t,i,r)=>{if(o)return o.attachViewToDom(e,t,r,i);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return i&&i.forEach(o=>n.classList.add(o)),r&&Object.assign(n,r),e.appendChild(n),n.componentOnReady&&await n.componentOnReady(),n},r=(o,e)=>{if(e){if(o){const t=e.parentElement;return o.removeViewFromDom(t,e)}e.remove()}return Promise.resolve()}}}]);