import{Li as e,Ri as t}from"./index-xDRx6PtE.js";var n=new Map;function r(e=.5){let t=n.get(e);if(t!==void 0)return t;let r=2500,i=1382,a=Math.sqrt(3)*147/2,o=1260-a,s=[],c=Math.hypot(r/2,i/2);for(let t=-2;t<=13;t++){let n=144+t*1.5*147,l=t%2==0?0:a;for(let t=-2;t<=Math.ceil(i/(2*a))+2;t++){let u=o-l-t*2*a;if(n<-147||n>2647||u<-a*2||u>i+a*2)continue;let d=[0,60,120,180,240,300].map(e=>{let t=e*Math.PI/180;return`${(n+147*Math.cos(t)).toFixed(1)},${(u+147*Math.sin(t)).toFixed(1)}`}).join(` `),f=Math.min(1,Math.hypot(n-r/2,u-i*e)/c);s.push({points:d,d:Number(f.toFixed(3))})}}let l={width:r,height:i,hexes:s};return n.set(e,l),l}function i(n,i={}){let a=r(i.focusY);return t`<svg
    aria-hidden="true"
    class="ceremony-honeycomb ${i.className??``} ${n}"
    viewBox="0 0 ${a.width} ${a.height}"
    preserveAspectRatio="xMidYMid slice"
  >
    ${a.hexes.map(t=>e`<polygon
          class="hx"
          points=${t.points}
          style="--d: ${t.d}"
        ></polygon>`)}
  </svg>`}var a=`ceremony-styles`;function o(){if(typeof document>`u`||document.getElementById(a))return;let e=document.createElement(`style`);e.id=a,e.textContent=s,document.head.appendChild(e)}var s=`
/* The prestige hold's charge, 0..1 while held (1..1.75 as the emblem keeps
   charging into the ceremony). Registered so it can transition and animate. */
@property --hold {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
/* The menu background, as it sits behind every page, but at full strength:
   the moment has the whole screen to itself. */
.ceremony-backdrop {
  background-color: #070d18;
  background-image: var(--background-image-url);
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  animation: ceremony-fade-in 400ms ease-out both;
}
/* Darker in the middle and at the edges, so the badge and the words read
   over the map. */
.ceremony-vignette {
  background: radial-gradient(
    ellipse at 50% 45%,
    rgba(3, 6, 12, 0.55) 0%,
    rgba(3, 6, 12, 0.15) 45%,
    rgba(3, 6, 12, 0.75) 100%
  );
  animation: ceremony-fade-in 400ms ease-out both;
}
.ceremony-honeycomb {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: drop-shadow(0 0 6px var(--hx-glow, var(--hx-color, #00c8ff)));
}
.ceremony-honeycomb .hx {
  fill: none;
  stroke: var(--hx-color, #00c8ff);
  stroke-width: 9;
  stroke-linejoin: round;
  opacity: 0;
}
/* Inward: the outermost hexes light first, the wave closing on the badge,
   over and over while it charges. */
.hx-charge .hx {
  animation: hx-pulse 1100ms ease-in-out infinite;
  animation-delay: calc((1 - var(--d)) * 900ms);
}
@keyframes hx-pulse {
  0%,
  100% {
    opacity: 0;
  }
  35% {
    opacity: 0.85;
  }
}
/* Outward: one burst from the badge to the edges of the screen. */
.hx-burst .hx {
  animation: hx-burst 1500ms ease-out both;
  animation-delay: calc(var(--d) * 700ms);
}
@keyframes hx-burst {
  0% {
    opacity: 0;
    stroke: #ffffff;
  }
  12% {
    opacity: 1;
    stroke: #ffffff;
  }
  40% {
    opacity: 0.9;
    stroke: var(--hx-color, #00c8ff);
  }
  100% {
    opacity: 0.12;
    stroke: var(--hx-color, #00c8ff);
  }
}
/* At rest: a slow shimmer rolling outward. */
.hx-idle .hx {
  animation: hx-idle 4s ease-in-out infinite;
  animation-delay: calc(var(--d) * 2s);
}
@keyframes hx-idle {
  0%,
  100% {
    opacity: 0.08;
  }
  50% {
    opacity: 0.45;
  }
}
.ceremony-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: var(--flash-bg, #ffffff);
  animation: ceremony-flash var(--flash-ms, 700ms) ease-out both;
}
@keyframes ceremony-flash {
  0% {
    opacity: 0.95;
  }
  100% {
    opacity: 0;
  }
}
.ceremony-shockwave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--shock-size, 200px);
  height: var(--shock-size, 200px);
  margin: calc(var(--shock-size, 200px) / -2) 0 0
    calc(var(--shock-size, 200px) / -2);
  border-radius: 9999px;
  border: var(--shock-width, 6px) solid var(--shock-color, var(--tier));
  box-shadow: 0 0 30px var(--shock-color, var(--tier));
  pointer-events: none;
  animation: ceremony-shockwave var(--shock-ms, 800ms) ease-out
    var(--shock-delay, 0ms) both;
}
@keyframes ceremony-shockwave {
  from {
    transform: scale(var(--shock-from, 0.6));
    opacity: 1;
  }
  to {
    transform: scale(var(--shock-to, 3.2));
    opacity: 0;
  }
}
.ceremony-slam {
  animation: ceremony-slam 520ms cubic-bezier(0.2, 0.9, 0.3, 1.2) both;
}
@keyframes ceremony-slam {
  0% {
    opacity: 0;
    transform: scale(2.6) skewX(-8deg);
  }
  55% {
    opacity: 1;
    transform: scale(0.94) skewX(-8deg);
  }
  100% {
    transform: none;
  }
}
@keyframes ceremony-fade-in {
  from {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hx-charge .hx,
  .hx-burst .hx,
  .hx-idle .hx,
  .ceremony-slam,
  .ceremony-shockwave {
    animation: none;
  }
}
`;export{i as n,o as t};