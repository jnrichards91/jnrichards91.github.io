var R=Object.defineProperty;var M=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>(M(e,typeof t!="symbol"?t+"":t,n),n);import{j as w,r as h,c as x,R as C,a as N}from"./vendor.5f28c8ba.js";const $=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};$();const O="_container_1ptiy_1";var j={container:O};const c=w.exports.jsx,A=w.exports.jsxs,S=({children:e})=>c("section",{className:j.container,children:e});class E{constructor(t){u(this,"canvas",null);u(this,"context",null);u(this,"osCanvas");u(this,"osContext",null);if(t){this.canvas=t;const n=t.getContext("2d");n&&(this.context=n)}else throw new Error}init(){this.context&&(this.resize(),this.options(),this.clear())}draw(t){t.call(this)}resize(){const{width:t,height:n}=this.canvas.getBoundingClientRect();if(this.canvas.width!==t||this.canvas.height!==n){const{devicePixelRatio:r=1}=window;this.canvas.width=t*r,this.canvas.height=n*r,this.context.scale(r,r)}}adjust(t,n){t!==null&&`${t}px`!==this.canvas.style.width&&(this.canvas.style.width=`${t}px`),n!==null&&`${n}px`!==this.canvas.style.height&&(this.canvas.style.height=`${n}px`),this.resize()}options(){this.context.fillStyle="#444",this.context.lineJoin="round"}clear(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}createOffscreen(){var t,n;this.osCanvas=new OffscreenCanvas((t=this.canvas)==null?void 0:t.width,(n=this.canvas)==null?void 0:n.height),this.osContext=this.osCanvas.getContext("2d")}transferOffscreen(){this.context.drawImage(this.osCanvas,0,0)}}const I=()=>{const e=h.exports.useRef(null),[t,n]=h.exports.useState(null);return h.exports.useEffect(()=>{e.current&&!t&&n(new E(e.current))},[e.current]),{canvas:e,renderer:t}},b="_container_1n8el_1",D="_image_1n8el_6",L="_canvas_1n8el_11";var g={container:b,image:D,canvas:L};const z=({drawFunction:e})=>{const{canvas:t,renderer:n}=I(),[r,s]=h.exports.useState();return h.exports.useEffect(()=>{reddit.hot("aww").limit(100).fetch(function(a){const i=a.data.children.filter(o=>o.data.post_hint==="image");console.log(i[0]),s(i[Math.floor(Math.random()*i.length)].data.url)})},[]),h.exports.useEffect(()=>{n&&(n.init(),n.draw(e))},[n]),A("div",{className:g.container,children:[c("img",{className:g.image,src:r}),c("canvas",{className:g.canvas,ref:t})]})},F="_container_1o02m_1";var q={container:F};const v=(e,t,n)=>e*(1-n)+t*n,p={float(e=0,t=1){return e+Math.random()*(t-e)},int(e=0,t=10){return e+Math.round(Math.random()*(t-e))}},P=(e,t,n)=>e*(1-n)+t*n,B=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),J=(e,t,n)=>B((n-e)/(t-e)),K=(e,t,n,r,s)=>P(n,r,J(e,t,s));function k(){const e=this.canvas.width,t=this.canvas.height,n=Array.from({length:5},(o,l)=>[p.int(0,255),p.int(0,255),p.int(0,255)]);n.shift([255,255,255]),this.clear();const r=x(),s=x();let a=0;const i=()=>{const o=this.context.createImageData(e,t);for(let l=0;l<e;l++)for(let d=0;d<t;d++){const f=(l+d*e)*4,y=r(l/e,d/t,a/100),_=s(l/e*2,d/t*2,a/400),m=G(n,y);o.data[f]=m[0],o.data[f+1]=m[1],o.data[f+2]=m[2],o.data[f+3]=K(0,1,.8,0,_)*255}a++,this.context.putImageData(o,0,0),requestAnimationFrame(i)};requestAnimationFrame(i)}function G(e,t){const n=e.length;if(n===1||t<=0)return e[0];if(t>=1)return e[n-1];const r=t*(n-1),s=Math.floor(r),a=v(e[s][0],e[s+1][0],r-s),i=v(e[s][1],e[s+1][1],r-s),o=v(e[s][2],e[s+1][2],r-s);return[a,i,o]}const H=()=>c("main",{className:q.container,children:c(S,{children:c(z,{drawFunction:k})})});C.render(c(N.StrictMode,{children:c(H,{})}),document.getElementById("root"));