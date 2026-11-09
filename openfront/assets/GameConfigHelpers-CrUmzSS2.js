import{Fi as e,Mi as t,Ni as n,Oi as r,Ri as i,Ss as a,ji as o,va as s}from"./index-xDRx6PtE.js";function c(e){let t=e=>Math.round(e/5)*5,n=Math.max(t(e/1e6*50),5);return[n,t(n*.75),t(n*.5)]}function l(e){let{width:t,height:n,num_land_tiles:r}=e.map;return{width:t,height:n,landPercent:Math.round(r/(t*n)*100),nations:e.nations.length,players:c(r)[0]}}function u(e){return e?.author!==void 0||e?.descriptionKey!==void 0}function d(t,n){return i`${t.descriptionKey===void 0?e:i`<div>${s(t.descriptionKey)}</div>`}
  ${n===void 0?e:i`<div
          data-map-stats
          class="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-x-4 whitespace-nowrap text-[11px] text-white/60"
        >
          <span>${n.width}×${n.height}</span>
          <span>
            ${s(`map_component.stat_nations`,{count:n.nations})}
          </span>
          <span>
            ${s(`map_component.stat_land`,{percent:n.landPercent})}
          </span>
          <span>
            ${s(`map_component.stat_players`,{count:n.players})}
          </span>
        </div>`}
  ${t.author===void 0?e:i`<div class="text-[11px] text-white/60">
          ${s(`map_component.by_author`,{author:t.author})}
        </div>`}`}var f=class extends n{createRenderRoot(){return this}render(){let t=this.map;return t===void 0||!u(t)&&!this.stats?e:i`<div
      class="group/map-details pointer-events-none absolute inset-x-3 top-3 z-10 flex p-1.5"
      @click=${e=>e.stopPropagation()}
      @keydown=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label=${s(`map_component.info`)}
        class="pointer-events-auto flex h-7 w-7 cursor-help items-center justify-center rounded-full bg-black/40 text-xs font-black text-white backdrop-blur-sm opacity-0 transition-opacity duration-200 hover:bg-black/70 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group-hover:opacity-100 pointer-coarse:opacity-100"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute left-0 top-10 hidden w-max max-w-full flex-col gap-1 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs normal-case tracking-normal text-white/90 shadow-xl group-hover/map-details:flex group-focus-within/map-details:flex"
      >
        ${d(t,this.stats)}
      </div>
    </div>`}};r([o({attribute:!1})],f.prototype,`map`,void 0),r([o({attribute:!1})],f.prototype,`stats`,void 0),f=r([t(`map-details`)],f);function p(e,t){return e===0?`disabled`:e===t?`default`:e}function m(e,t){return e===`disabled`?0:e==="default"?t:e}function h(e){if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(typeof e==`string`){let t=e.trim();if(!t)return;let n=Number(t);return Number.isFinite(n)?n:void 0}}function g(e,t){t.includes(e.key)&&e.preventDefault()}function _(e,{min:t,max:n,stripPattern:r=/[eE+-]/g,radix:i=10}){e.value=e.value.replace(r,``);let a=parseInt(e.value,i);if(!(isNaN(a)||a<t||a>n))return a}function v(e,{min:t,max:n}){let r=parseFloat(e.value);if(!(isNaN(r)||r<t||r>n))return r}function y(e,t){return t&&e===400?100:!t&&e===100?400:e}function b(e,t,n){let r=Math.max(0,Math.floor(t*.25));return n?e===t?r:e:e===r?t:e}function x(){return a[Math.floor(Math.random()*a.length)].type}function S(e,t,n){return n?[...e,t]:e.filter(e=>e!==t)}export{m as a,g as c,u as d,l as f,S as i,p as l,b as n,v as o,d as p,x as r,_ as s,y as t,h as u};