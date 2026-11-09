import{Ai as e,D as t,Fi as n,Lo as r,Mi as i,Ni as a,Oi as o,P as s,Ri as c,T as l,fn as u,ji as d,va as f}from"./index-xDRx6PtE.js";import"./CapIcon-BSh7ps9d.js";import"./PlutoniumIcon-DwFXc8EK.js";import{a as p,i as m,o as h,r as g}from"./PlayerProfileModal-BLewgAwT.js";var _=new Set([`level_up`,`level_milestone`]);function v(e){return _.has(e.reason)}function y(e){return e.levels.some(e=>e.caps!==void 0||e.plutonium!==void 0)||e.flares.some(e=>e.kind===`level`&&e.cosmetic)}var b=1e3;function x(e){let t=e.maxLevel;return!Number.isInteger(t)||t<2?100:Math.min(t,b)}function S(e,t){let n=new Map;for(let r of e.flares)r.kind!==`level`||r.level===null||!r.cosmetic||r.prestige!==null&&r.prestige!==t||(!n.has(r.level)||r.prestige===t)&&n.set(r.level,r);return n}function C(e,t){if(t>=(e.maxPrestige>0?e.maxPrestige:10))return{legend:!0,rank:t,caps:null,flare:e.flares.find(e=>e.kind===`legend`&&e.cosmetic)??null};let n=t+1;return{legend:!1,rank:n,caps:e.prestige?.caps??null,flare:e.flares.find(e=>e.kind===`prestige`&&e.prestige===n&&e.cosmetic)??null}}function w(e,n,i,a=null){let o=l(e.prestige),c=x(n),u=Math.min(c,Math.max(1,Number.isFinite(e.level)?Math.floor(e.level):1)),d=i!==null,f=d&&!i.some(e=>v(e)&&(e.level===void 0||e.prestige===void 0)),p=f?i.filter(e=>v(e)&&e.prestige===o):[],m=e=>new Set(e.flatMap(e=>e.level===void 0?[]:[e.level])),h=Math.min(c,Math.max(u,...m(p))),g=p.filter(r),_=m(g),y=m(p.filter(e=>!r(e))),b=new Map(n.levels.map(e=>[e.level,e])),w=S(n,o),T=[];for(let e=1;e<=c;e++){let n=b.get(e),r=e<=h,i;i=r?a!==null&&e>a&&!_.has(e)&&!y.has(e)?`pending`:f?_.has(e)?`ready`:y.has(e)?`passed`:`claimed`:`passed`:`locked`,T.push({level:e,caps:Math.max(0,n?.caps??0),plutonium:Math.max(0,n?.plutonium??0),flare:w.get(e)??null,milestone:t(e),current:e===h,status:i})}let E=f?{ids:g.map(e=>e.id),caps:g.filter(e=>e.currencyType===`soft`).reduce((e,t)=>e+s(t.amount),0n),plutonium:g.filter(e=>e.currencyType===`hard`).reduce((e,t)=>e+s(t.amount),0n)}:null;return{run:o,level:h,maxLevel:c,owner:d,statuses:f,nodes:T,end:C(n,o),claim:E}}function T(e,t){return(e-1)/(t-1)*100}var E=85,D=c`<svg
  viewBox="0 0 24 24"
  width="12"
  height="12"
  fill="none"
  stroke="#34d399"
  stroke-width="3.2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M5 12.5l4.5 4.5L19 7.5" />
</svg>`,O=c`<svg
  viewBox="0 0 24 24"
  width="11"
  height="11"
  fill="none"
  stroke="rgba(255,255,255,.45)"
  stroke-width="2.4"
  stroke-linecap="round"
  aria-hidden="true"
>
  <rect x="5" y="11" width="14" height="10" rx="2" />
  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
</svg>`,k=c`<svg
  viewBox="0 0 24 24"
  width="11"
  height="11"
  fill="none"
  stroke="#fcd34d"
  stroke-width="2.4"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M7 3h10M7 21h10M8 3c0 5 8 6 8 9s-8 4-8 9M16 3c0 5-8 6-8 9s8 4 8 9" />
</svg>`,A=e=>c`<svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d=${e===`prev`?`M15 5l-7 7 7 7`:`M9 5l7 7-7 7`} />
  </svg>`,j=class extends a{constructor(...e){super(...e),this.progress=null,this.config=null,this.rewards=null,this.claiming=!1,this.confirmedLevel=null,this.provisional=!1,this.describeCosmetic=p,this.views=new Map,this.range={lo:1,hi:15},this.atStart=!0,this.atEnd=!1,this.model=null,this.warnedUnplaced=!1,this.requested=new Set,this.scrolledToLevel=!1,this.frame=0,this.resizeObserver=null,this.dragging=!1,this.onScroll=()=>{this.frame||=requestAnimationFrame(()=>{this.frame=0,this.syncToScroll()})},this.onStripDown=e=>{e.button===0&&(this.dragging=!0,e.currentTarget.setPointerCapture?.(e.pointerId),this.jumpTo(this.levelAt(e),!0))},this.onStripMove=e=>{this.dragging&&this.jumpTo(this.levelAt(e),!1)},this.onStripUp=()=>{this.dragging=!1},this.onStripKey=e=>{let t=Math.round((this.range.lo+this.range.hi)/2),n=Math.max(1,this.range.hi-this.range.lo),r=null;e.key===`ArrowLeft`||e.key===`ArrowDown`?r=t-5:e.key===`ArrowRight`||e.key===`ArrowUp`?r=t+5:e.key===`PageUp`?r=t-n:e.key===`PageDown`?r=t+n:e.key===`Home`?r=1:e.key===`End`&&(r=this.maxLevel()),r!==null&&(e.preventDefault(),this.jumpTo(r,!0))}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),N(),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.onLayout()))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frame&&cancelAnimationFrame(this.frame),this.frame=0}willUpdate(e){super.willUpdate(e),(e.has(`progress`)||e.has(`config`)||e.has(`rewards`)||e.has(`confirmedLevel`))&&(this.model=this.progress===null||this.config===null?null:w(this.progress,this.config,this.rewards,this.confirmedLevel),e.has(`progress`)&&(this.scrolledToLevel=!1),this.model?.owner&&!this.model.statuses&&!this.warnedUnplaced&&(this.warnedUnplaced=!0,console.warn(`RewardTrack: level rewards without a level or prestige; claim status hidden`)),this.resolveCosmetics())}updated(e){super.updated(e);let t=this.scroller();t!==null&&this.resizeObserver!==null&&(this.resizeObserver.disconnect(),this.resizeObserver.observe(t)),this.onLayout()}maxLevel(){return this.model?.maxLevel??100}scroller(){return this.querySelector(`[data-track-scroller]`)}resolveCosmetics(){let e=this.model;if(e===null)return;let t=e.nodes.flatMap(e=>e.flare?[e.flare]:[]);e.end.flare&&t.push(e.end.flare);for(let e of t)this.requested.has(e.flareName)||(this.requested.add(e.flareName),this.describeCosmetic(e).then(t=>{t!==null&&(this.views=new Map(this.views).set(e.flareName,t))}).catch(()=>{}))}view(e){return this.views.get(e.flareName)??h(e)}nodeWidth(e){let t=e.querySelector(`[data-level]`),n=t?.offsetWidth??0;return{w:n>0?n:40,pad:t?.offsetLeft??0}}onLayout(){let e=this.scroller(),t=this.model;if(!(e===null||t===null||e.clientWidth===0)){if(!this.scrolledToLevel){this.scrolledToLevel=!0;let{w:n,pad:r}=this.nodeWidth(e);e.scrollLeft=Math.max(0,r+(t.level-1)*n+n/2-e.clientWidth*.3)}this.syncToScroll()}}syncToScroll(){let e=this.scroller();if(e===null||e.clientWidth===0)return;let{w:t,pad:n}=this.nodeWidth(e),r=e.scrollLeft,i=e.clientWidth,a=this.maxLevel(),o=Math.min(a,Math.max(1,Math.ceil((r-n)/t-.25)+1)),s=Math.min(a,Math.max(o,Math.floor((r+i-n)/t+.25)));(o!==this.range.lo||s!==this.range.hi)&&(this.range={lo:o,hi:s});let c=r<=1,l=r+i>=e.scrollWidth-1;c!==this.atStart&&(this.atStart=c),l!==this.atEnd&&(this.atEnd=l),this.placeCallouts(e,t)}placeCallouts(e,t){let n=e.clientWidth;for(let r of e.querySelectorAll(`[data-callout]`)){let i=r.closest(`[data-level]`);if(i===null)continue;let a=i.offsetLeft+t/2-e.scrollLeft,o=r.offsetWidth,s=a-o/2;s=Math.min(s,n-o-6),s=Math.max(s,6),s=Math.min(Math.max(s,a-o+14),a-14);let c=Math.round(s-(a-o/2));r.style.setProperty(`--shift`,`${c}px`)}}behavior(){return u()?`auto`:`smooth`}scrollTrackTo(e,t){let n=this.scroller();if(n===null)return;let r=Math.max(0,e);typeof n.scrollTo==`function`?n.scrollTo({left:r,behavior:t?this.behavior():`auto`}):n.scrollLeft=r}page(e){let t=this.scroller();if(t===null)return;let{w:n}=this.nodeWidth(t),r=Math.max(n,t.clientWidth-2*n);this.scrollTrackTo(t.scrollLeft+e*r,!0)}jumpTo(e,t=!0){let n=this.scroller();if(n===null)return;let{w:r,pad:i}=this.nodeWidth(n),a=Math.min(this.maxLevel(),Math.max(1,Math.round(e)));this.scrollTrackTo(i+(a-1)*r+r/2-n.clientWidth/2,t)}levelAt(e){let t=this.querySelector(`[data-strip-rail]`);if(t===null)return 1;let n=t.getBoundingClientRect();if(n.width===0)return 1;let r=Math.min(1,Math.max(0,(e.clientX-n.left)/n.width));return 1+Math.round(r*(this.maxLevel()-1))}claimAll(){let e=this.model?.claim;!e||e.ids.length===0||this.claiming||this.dispatchEvent(new CustomEvent(`claim-all`,{detail:{ids:[...e.ids]},bubbles:!0,composed:!0}))}render(){let e=this.model;if(e===null)return n;let t=e.claim;return c`
      <section class=${g} data-reward-track>
        <h3 class="mb-3 ${m}">
          ${e.run===0?f(`reward_track.title_first_run`):f(`reward_track.title`,{prestige:e.run})}
        </h3>
        ${this.provisional?c`<p
                class="-mt-2 mb-3 text-xs font-semibold text-amber-200/80"
                data-track-provisional
              >
                ${f(`progression.provisional_label`)}
              </p>`:n}
        ${t!==null&&t.ids.length>0?this.renderClaimBar(t):n}
        ${this.renderStrip(e)} ${this.renderTrack(e)}
        ${e.statuses?this.renderKey(e):n}
      </section>
    `}renderClaimBar(e){let t=e.plutonium>0n;return c`<div class="rt-claim" data-track-claim data-pp>
      <div class="flex shrink-0 items-center gap-0.5">
        <cap-icon .size=${26}></cap-icon>
        ${t?c`<plutonium-icon .size=${22}></plutonium-icon>`:n}
      </div>
      <div class="min-w-0 flex-[1_1_180px]">
        <div class="text-sm font-bold text-white" data-claim-count>
          ${f(`reward_track.claim_count`,{count:e.ids.length})}
        </div>
        <div class="mt-px text-xs font-extrabold">
          <span class="text-amber-700" data-claim-caps
            >${f(`reward_track.claim_caps`,{amount:e.caps.toLocaleString()})}</span
          >${t?c`<span class="text-white/35"> · </span
                  ><span class="text-green-400" data-claim-plutonium
                    >${f(`reward_track.claim_plutonium`,{amount:e.plutonium.toLocaleString()})}</span
                  >`:n}
        </div>
      </div>
      <o-button
        data-claim-all
        variant="primary"
        size="sm"
        translationKey="account_modal.claim_all"
        .disable=${this.claiming}
        @click=${()=>this.claimAll()}
      ></o-button>
    </div>`}renderStrip(e){let t=e.end,r=e.maxLevel,i=t.legend?f(`reward_track.strip_end_legend`,{level:r}):f(`reward_track.strip_end_prestige`,{level:r,rank:t.rank}),a=e.owner?f(`reward_track.strip_you`,{level:e.level}):f(`reward_track.strip_level`,{level:e.level}),o=T(e.level,r)>E,s=e=>`${T(e,r)}%`,l=[];for(let e=10;e<r;e+=10)l.push(e);let{lo:u,hi:d}=this.range;return c`<div
      class="rt-strip"
      data-track-strip
      data-pp
      role="slider"
      tabindex="0"
      aria-label=${f(`reward_track.strip_label`,{max:r})}
      aria-valuemin="1"
      aria-valuemax=${r}
      aria-valuenow=${Math.round((u+d)/2)}
      aria-valuetext=${f(`reward_track.strip_value`,{lo:u,hi:d})}
      @pointerdown=${this.onStripDown}
      @pointermove=${this.onStripMove}
      @pointerup=${this.onStripUp}
      @pointercancel=${this.onStripUp}
      @keydown=${this.onStripKey}
    >
      <div class="rt-labels" aria-hidden="true">
        ${e.level>=10?c`<span class="rt-label-start" data-strip-start
                >${f(`reward_track.strip_start`)}</span
              >`:n}
        ${o?n:c`<span
                class="rt-label-you"
                data-strip-you
                style="left:${s(e.level)}"
                >${a}</span
              >`}
        <span class="rt-label-end" data-strip-end ?data-legend=${t.legend}
          >${o?c`<span class="rt-label-you-merged">${a}</span
                  ><span class="text-white/35"> · </span>`:n}<span class="rt-label-end-text">${i}</span></span
        >
      </div>
      <div class="rt-rail" data-strip-rail>
        <div class="rt-rail-fill" style="width:${s(e.level)}"></div>
        ${l.map(e=>c`<div
              class="rt-tick"
              data-strip-tick=${e}
              style="left:${s(e)}"
            ></div>`)}
        ${e.nodes.map(e=>e.flare===null?e.plutonium>0?c`<div
                  class="rt-mark-plutonium"
                  data-strip-plutonium=${e.level}
                  style="left:${s(e.level)}"
                ></div>`:n:c`<div
                class="rt-mark-cosmetic"
                data-strip-cosmetic=${e.level}
                style="left:${s(e.level)}"
              ></div>`)}
        <div
          class="rt-window"
          data-strip-window
          style="left:calc(${s(u)} - 4px);width:calc(${T(d,r)-T(u,r)}% + 8px)"
        ></div>
        <div
          class="rt-knob"
          data-strip-knob
          style="left:${s(e.level)}"
        ></div>
      </div>
    </div>`}renderTrack(e){return c`<div class="rt-track" data-track-row data-pp>
      <button
        type="button"
        class="rt-arrow"
        data-track-prev
        aria-label=${f(`reward_track.earlier`)}
        ?disabled=${this.atStart}
        @click=${()=>this.page(-1)}
      >
        ${A(`prev`)}
      </button>
      <div class="rt-scroller" data-track-scroller @scroll=${this.onScroll}>
        <div
          class="rt-row"
          role="list"
          aria-label=${f(`reward_track.levels_label`)}
        >
          <div
            aria-hidden="true"
            class="rt-line"
            style="width:calc(${e.maxLevel-1} * var(--rt-w))"
          ></div>
          <div
            aria-hidden="true"
            class="rt-line-fill"
            style="width:calc(${e.level-1} * var(--rt-w))"
          ></div>
          ${e.nodes.map(t=>this.renderNode(t,e))}
          ${this.renderEnd(e)}
        </div>
      </div>
      <button
        type="button"
        class="rt-arrow"
        data-track-next
        aria-label=${f(`reward_track.later`)}
        ?disabled=${this.atEnd}
        @click=${()=>this.page(1)}
      >
        ${A(`next`)}
      </button>
    </div>`}renderNode(e,t){let r=this.progress?.legend===!0&&e.level===t.maxLevel,i;return i=e.current?c`<div class="rt-you-ring">
        <level-badge
          .level=${e.level}
          .prestige=${t.run}
          .legend=${r}
          .size=${34}
        ></level-badge>
      </div>`:e.milestone?c`<level-badge
        class=${e.status===`locked`?`rt-badge-locked`:``}
        .level=${e.level}
        .prestige=${t.run}
        .legend=${r}
        .size=${34}
      ></level-badge>`:c`<div
        class="rt-dot"
        ?data-passed=${e.status!==`locked`}
        ?data-pending=${e.status===`pending`}
        ?data-pu=${e.plutonium>0}
      >
        ${e.level}
      </div>`,c`<div
      class="rt-node"
      data-level=${e.level}
      data-status=${e.status}
      ?data-current=${e.current}
      aria-label=${this.nodeLabel(e)}
      role="listitem"
    >
      <div class="rt-top">${this.renderAbove(e)}</div>
      <div class="rt-dotwrap">${i}</div>
      <div class="rt-under">
        <div class="rt-caps" data-node-caps>
          ${e.caps>0?c`<cap-icon .size=${12}></cap-icon
                  >${e.caps.toLocaleString()}`:c`<span class="text-white/35">—</span>`}
        </div>
        ${t.owner?c`<div class="rt-status">
                ${this.renderStatus(e,t)}
              </div>`:n}
      </div>
    </div>`}nodeLabel(e){let t=[f(`progression.level`,{level:e.level})];if(e.caps>0&&t.push(f(`reward_track.claim_caps`,{amount:e.caps.toLocaleString()})),e.plutonium>0&&t.push(f(`reward_track.claim_plutonium`,{amount:e.plutonium.toLocaleString()})),e.flare!==null){let n=this.view(e.flare);n!==null&&t.push(n.name)}return e.status===`claimed`?t.push(f(`reward_track.key_claimed`)):e.status===`ready`?t.push(f(`reward_track.key_ready`)):e.status===`locked`?t.push(f(`reward_track.key_locked`)):e.status===`pending`&&t.push(f(`reward_track.key_pending`)),t.join(`, `)}renderAbove(e){if(e.flare!==null){let t=this.view(e.flare);return t===null?n:c`<div class="rt-callout" data-callout=${e.level}>
          <div class="rt-preview">${t.preview}</div>
          <div class="min-w-0">
            <div class="rt-cname" data-callout-name>${t.name}</div>
            ${t.typeLabel===``?n:c`<div class="rt-ctype" data-callout-type>
                    ${t.typeLabel}
                  </div>`}
          </div>
          ${e.plutonium>0?c`<div class="rt-callout-pu" data-callout-plutonium>
                  <plutonium-icon .size=${14}></plutonium-icon>${f(`reward_track.plus`,{amount:e.plutonium})}
                </div>`:n}
        </div>
        <div class="rt-stem rt-stem-cosmetic"></div>`}return e.plutonium>0?c`<div class="rt-chip" data-plutonium-chip=${e.level}>
          <plutonium-icon .size=${16}></plutonium-icon>${f(`reward_track.plus`,{amount:e.plutonium})}
        </div>
        <div class="rt-stem rt-stem-plutonium"></div>`:n}renderStatus(e,t){if(!t.owner)return n;if(e.current)return c`<span class="rt-you-label" data-you
        >${f(`reward_track.you`)}</span
      >`;if(!t.statuses)return n;switch(e.status){case`claimed`:return c`<span data-claimed>${D}</span>`;case`ready`:return c`<span class="rt-ready" data-ready></span>`;case`locked`:return c`<span data-locked>${O}</span>`;case`pending`:return c`<span data-pending>${k}</span>`;default:return n}}renderEnd(e){let t=e.end,r=t.flare===null?null:this.view(t.flare);return c`<div class="rt-end-col" role="listitem">
      <div class="rt-end" data-track-end ?data-legend=${t.legend}>
        <div class="rt-end-head">
          ${t.legend?c`<level-badge
                  .level=${e.maxLevel}
                  .prestige=${e.run}
                  .legend=${!0}
                  .size=${44}
                ></level-badge>`:c`<level-badge
                  .level=${1}
                  .prestige=${t.rank}
                  .size=${44}
                ></level-badge>`}
          <div class="leading-tight whitespace-nowrap">
            <div class="rt-kicker">
              ${f(`reward_track.after_level`,{level:e.maxLevel})}
            </div>
            <div class="rt-end-title" data-end-title>
              ${t.legend?f(`progression.legend`):f(`progression.prestige`,{prestige:t.rank})}
            </div>
            ${t.legend?c`<div class="rt-end-sub" data-end-sub>
                    ${f(`reward_track.legend_sub`)}
                  </div>`:t.caps===null?n:c`<div class="rt-end-caps" data-end-caps>
                      <cap-icon .size=${14}></cap-icon>${f(`reward_track.caps_amount`,{amount:t.caps.toLocaleString()})}
                    </div>`}
          </div>
        </div>
        ${r===null?n:c`<div class="rt-tag" data-end-tag>
                <div class="rt-preview">${r.preview}</div>
                <div class="min-w-0">
                  <div class="rt-cname" data-end-tag-name>${r.name}</div>
                  ${r.typeLabel===``?n:c`<div class="rt-ctype">${r.typeLabel}</div>`}
                  <div class="rt-tag-for" data-end-tag-for>
                    ${t.legend?f(`reward_track.legend_reward`):f(`reward_track.prestige_reward`,{rank:t.rank})}
                  </div>
                </div>
              </div>`}
      </div>
    </div>`}renderKey(e){let t=e.nodes.some(e=>e.status===`pending`);return c`<div class="rt-key" data-track-legend data-pp>
      <span class="rt-key-item"
        >${D}${f(`reward_track.key_claimed`)}</span
      ><span class="rt-key-item"
        ><span class="rt-ready rt-ready-small"></span>${f(`reward_track.key_ready`)}</span
      ><span class="rt-key-item"
        >${O}${f(`reward_track.key_locked`)}</span
      >${t?c`<span class="rt-key-item" data-key-pending
              >${k}${f(`reward_track.key_pending`)}</span
            >`:n}
    </div>`}};o([d({attribute:!1})],j.prototype,`progress`,void 0),o([d({attribute:!1})],j.prototype,`config`,void 0),o([d({attribute:!1})],j.prototype,`rewards`,void 0),o([d({type:Boolean})],j.prototype,`claiming`,void 0),o([d({attribute:!1})],j.prototype,`confirmedLevel`,void 0),o([d({type:Boolean})],j.prototype,`provisional`,void 0),o([e()],j.prototype,`views`,void 0),o([e()],j.prototype,`range`,void 0),o([e()],j.prototype,`atStart`,void 0),o([e()],j.prototype,`atEnd`,void 0),j=o([i(`reward-track`)],j);var M=`reward-track-styles`;function N(){if(document.getElementById(M))return;let e=document.createElement(`style`);e.id=M,e.textContent=P,document.head.appendChild(e)}var P=`
reward-track { display: block; --rt-w: 40px; }
reward-track .rt-claim {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  padding: 8px 12px; margin-bottom: 10px; border-radius: 10px;
  border: 1px solid rgba(250, 204, 21, 0.35);
  background: linear-gradient(90deg, rgba(250, 204, 21, 0.14), rgba(250, 204, 21, 0.04));
}

/* The run strip: the whole run at a glance. */
reward-track .rt-strip {
  position: relative; margin: 0 4px 8px; padding: 21px 0 6px;
  touch-action: none; cursor: pointer; user-select: none; outline: none;
}
reward-track .rt-strip:focus-visible .rt-rail {
  box-shadow: 0 0 0 2px rgba(125, 211, 252, 0.9);
}
reward-track .rt-labels {
  position: absolute; left: 0; right: 0; top: 0; height: 12px; line-height: 12px;
  font-size: 10px; font-weight: 800; color: rgba(255, 255, 255, 0.45);
  white-space: nowrap;
}
reward-track .rt-labels > span { position: absolute; top: 0; }
reward-track .rt-label-start { left: 0; }
reward-track .rt-label-you { transform: translateX(-50%); color: #facc15; }
reward-track .rt-label-end { right: 0; color: #facc15; }
reward-track .rt-label-you-merged { color: #facc15; }
reward-track .rt-label-end[data-legend] .rt-label-end-text { color: #f0abfc; }
reward-track .rt-rail {
  position: relative; height: 8px; border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
}
reward-track .rt-rail-fill {
  position: absolute; left: 0; top: 0; bottom: 0; border-radius: 6px;
  background: linear-gradient(90deg, #a16207, #facc15);
}
reward-track .rt-tick {
  position: absolute; top: -2px; width: 1px; height: 12px;
  background: rgba(255, 255, 255, 0.2);
}
reward-track .rt-mark-plutonium {
  position: absolute; top: 50%; width: 7px; height: 7px; margin: -3.5px 0 0 -3.5px;
  border-radius: 9px; background: #4ade80; box-shadow: 0 0 5px #22c55e;
}
reward-track .rt-mark-cosmetic {
  position: absolute; top: 50%; width: 11px; height: 11px; margin: -5.5px 0 0 -5.5px;
  transform: rotate(45deg); background: #c084fc; border: 1px solid #f5d0fe;
  box-shadow: 0 0 6px #a855f7;
}
reward-track .rt-window {
  position: absolute; top: -6px; bottom: -6px; border-radius: 6px;
  border: 2px solid rgba(125, 211, 252, 0.95); background: rgba(125, 211, 252, 0.12);
  pointer-events: none;
}
reward-track .rt-knob {
  position: absolute; top: 50%; width: 16px; height: 16px; margin: -8px 0 0 -8px;
  border-radius: 99px; background: #facc15; border: 2px solid #fff;
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.9); pointer-events: none;
}

/* The track: [<] nodes [>], the arrows in their own gutters. */
reward-track .rt-track {
  display: flex; align-items: flex-start; gap: 6px; margin: 0 -4px;
}
reward-track .rt-arrow {
  flex: 0 0 auto; margin-top: 44px; width: 30px; height: 52px; border-radius: 10px;
  display: grid; place-items: center; color: #fff; cursor: pointer;
  background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: opacity 0.15s, background-color 0.15s;
}
reward-track .rt-arrow:hover:not(:disabled) { background: rgba(255, 255, 255, 0.18); }
reward-track .rt-arrow:disabled { opacity: 0.3; cursor: default; }
reward-track .rt-scroller {
  position: relative; flex: 1 1 auto; min-width: 0;
  overflow-x: auto; overflow-y: hidden; scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 14px, #000 calc(100% - 14px), transparent);
  mask-image: linear-gradient(to right, transparent, #000 14px, #000 calc(100% - 14px), transparent);
}
reward-track .rt-scroller::-webkit-scrollbar { display: none; }
reward-track .rt-row {
  position: relative; display: flex; align-items: flex-start; width: max-content;
  padding: 0 6px 8px;
}
reward-track .rt-line, reward-track .rt-line-fill {
  position: absolute; top: 68px; height: 4px; border-radius: 2px;
  left: calc(6px + var(--rt-w) / 2);
}
reward-track .rt-line { background: rgba(255, 255, 255, 0.12); }
reward-track .rt-line-fill {
  background: linear-gradient(90deg, #facc15, #fbbf24);
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.6);
}
reward-track .rt-node {
  position: relative; width: var(--rt-w); flex: 0 0 var(--rt-w);
  display: flex; flex-direction: column; align-items: center;
}
reward-track .rt-top { position: relative; height: 50px; width: 100%; }
reward-track .rt-stem {
  position: absolute; bottom: 0; left: 50%; width: 2px; height: 7px; margin-left: -1px;
}
reward-track .rt-stem-plutonium { background: rgba(74, 222, 128, 0.85); }
reward-track .rt-stem-cosmetic { background: rgba(192, 132, 252, 0.9); }
reward-track .rt-chip {
  position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 2px; padding: 2px 7px 2px 3px;
  border-radius: 999px; border: 1px solid rgba(74, 222, 128, 0.65);
  background: rgba(20, 83, 45, 0.9); color: #4ade80;
  font-weight: 900; font-size: 11px; white-space: nowrap;
}
reward-track .rt-callout, reward-track .rt-tag {
  display: flex; align-items: center; gap: 6px; padding: 3px 9px 3px 3px;
  border-radius: 9px; border: 1px solid rgba(192, 132, 252, 0.8);
  background: linear-gradient(90deg, rgba(90, 20, 160, 0.92), rgba(40, 15, 70, 0.95));
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.45); white-space: nowrap;
}
reward-track .rt-callout {
  position: absolute; bottom: 6px; left: 50%; z-index: 3;
  transform: translateX(calc(-50% + var(--shift, 0px)));
}
reward-track .rt-preview {
  width: 34px; height: 34px; flex: 0 0 34px; padding: 1px; border-radius: 6px;
  overflow: hidden; display: grid; place-items: center;
  background: rgba(0, 0, 0, 0.25); --tier: #c084fc;
}
reward-track .rt-preview svg { max-width: 100%; max-height: 100%; }
reward-track .rt-cname { color: #fff; font-weight: 900; font-size: 11px; line-height: 1.15; }
reward-track .rt-ctype {
  color: #d8b4fe; font-size: 9px; font-weight: 800; line-height: 1.15;
  letter-spacing: 0.06em; text-transform: uppercase;
}
reward-track .rt-tag-for {
  color: #facc15; font-size: 9px; font-weight: 800; line-height: 1.15; letter-spacing: 0.04em;
}
reward-track .rt-callout-pu {
  display: flex; align-items: center; gap: 2px; padding-left: 6px; margin-left: 2px;
  border-left: 1px solid rgba(255, 255, 255, 0.18);
  color: #4ade80; font-weight: 900; font-size: 11px;
}
reward-track .rt-dotwrap {
  height: 40px; display: grid; place-items: center; position: relative; z-index: 1;
}
reward-track .rt-dot {
  width: 28px; height: 28px; border-radius: 999px; display: grid; place-items: center;
  font-weight: 800; font-size: 12px; background: #1f2330; color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.22);
}
reward-track .rt-dot[data-passed] { background: #facc15; color: #1a1300; border-color: #fde68a; }
/* Reached provisionally: passed, but not confirmed yet. */
reward-track .rt-dot[data-pending] {
  background: rgba(250, 204, 21, 0.28); color: #fef3c7; border-style: dashed; border-color: #fcd34d;
}
reward-track .rt-dot[data-pu] { box-shadow: 0 0 0 2px #4ade80, 0 0 9px rgba(74, 222, 128, 0.65); }
/* The ring pads the 34px badge by 3px, so the round 40px ring clears the
   level chip's corners and matches the 40px dot row. */
reward-track .rt-you-ring {
  display: grid; padding: 3px; border-radius: 999px;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.95), 0 0 16px rgba(250, 204, 21, 0.75);
}
reward-track .rt-badge-locked { opacity: 0.6; }
reward-track .rt-under {
  margin-top: 3px; display: flex; flex-direction: column; align-items: center; gap: 1px;
}
reward-track .rt-node[data-status="locked"] .rt-under,
reward-track .rt-node[data-status="pending"] .rt-under { opacity: 0.65; }
reward-track .rt-caps {
  display: flex; align-items: center; gap: 2px; height: 14px; white-space: nowrap;
  color: #fff; font-weight: 800; font-size: 11px;
}
reward-track .rt-status { height: 13px; display: flex; align-items: center; }
reward-track .rt-you-label {
  color: #facc15; font-weight: 900; font-size: 10px; letter-spacing: 0.08em;
  text-transform: uppercase;
}
reward-track .rt-ready {
  display: inline-block; width: 8px; height: 8px; border-radius: 9px;
  background: #facc15; box-shadow: 0 0 6px #facc15;
}
reward-track .rt-ready-small { width: 7px; height: 7px; box-shadow: none; }

/* The end of the run, centred on the node line. */
reward-track .rt-end-col {
  flex: 0 0 auto; height: 0; margin-top: 70px; padding: 0 6px 0 16px;
}
reward-track .rt-end {
  transform: translateY(-50%); display: flex; flex-direction: column; gap: 7px;
  padding: 8px 12px 8px 8px; border-radius: 12px;
  border: 1px solid rgba(250, 204, 21, 0.6);
  background: linear-gradient(160deg, rgba(250, 204, 21, 0.2), rgba(255, 255, 255, 0.03));
}
reward-track .rt-end[data-legend] {
  border-color: rgba(232, 121, 249, 0.6);
  background: linear-gradient(160deg, rgba(217, 70, 239, 0.2), rgba(255, 255, 255, 0.03));
}
reward-track .rt-end-head { display: flex; align-items: center; gap: 10px; }
reward-track .rt-kicker {
  color: #facc15; font-weight: 800; font-size: 9px; letter-spacing: 0.14em;
  text-transform: uppercase;
}
reward-track .rt-end[data-legend] .rt-kicker { color: #f0abfc; }
reward-track .rt-end-title { color: #fff; font-weight: 900; font-size: 14px; }
reward-track .rt-end-sub { margin-top: 1px; color: rgba(255, 255, 255, 0.6); font-size: 11px; }
reward-track .rt-end-caps {
  display: flex; align-items: center; gap: 3px; margin-top: 2px;
  color: #fff; font-weight: 900; font-size: 12px;
}
reward-track .rt-tag { align-self: stretch; }

reward-track .rt-key {
  margin-top: 6px; display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px;
  color: rgba(255, 255, 255, 0.45); font-size: 11px;
}
reward-track .rt-key-item { display: inline-flex; align-items: center; gap: 5px; }

@media (max-width: 520px) {
  reward-track .rt-track { gap: 3px; margin: 0 -10px; }
  reward-track .rt-arrow { width: 24px; height: 44px; margin-top: 48px; }
}
`;export{j as RewardTrack,b as TRACK_LEVEL_LIMIT,v as isLevelReward,S as levelFlares,w as rewardTrackModel,T as stripPercent,C as trackEnd,y as trackHasRewards,x as trackMaxLevel};