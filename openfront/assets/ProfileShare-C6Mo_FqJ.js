import{Ai as e,Bi as t,Fi as n,Mi as r,Ni as i,Oi as a,Ri as o,Zn as s,ha as c,ji as l,qi as u,va as d}from"./index-xDRx6PtE.js";function f(e,t){return`https://x.com/intent/post?url=${encodeURIComponent(e)}&text=${encodeURIComponent(t)}`}function p(e,t){return`${t}\n${e}`}function m(){return typeof navigator<`u`&&typeof navigator.share==`function`&&s.isTouch}var h=`relative inline-flex min-h-[38px] items-center gap-2 rounded-[10px] border px-3.5 text-[13px] font-semibold text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/30`,g=`${h} border-white/15 bg-white/5 hover:bg-white/10`,_=`${h} border-white/20 bg-zinc-900/85 shadow-lg backdrop-blur-sm hover:bg-zinc-800/95`,v=80,y=400,b=.95,x=[{offset:0,opacity:b,transform:`scale(1)`,easing:`linear`},{offset:v/y,opacity:b,transform:`scale(1)`,easing:`ease-out`},{offset:1,opacity:0,transform:`scale(1.04)`}],S=`pointer-events-none absolute -inset-1 rounded-[14px] border-2 border-solid border-[rgba(250,204,21,0.95)] opacity-0 shadow-[0_0_12px_rgba(250,204,21,0.45)]`;function C(){return typeof window>`u`||typeof window.matchMedia!=`function`?!1:window.matchMedia(`(hover: hover) and (pointer: fine)`).matches&&!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var w=o`<span
  data-share-ring
  class=${S}
  aria-hidden="true"
></span>`,T=`flex min-h-10 w-full items-center gap-2.5 rounded-lg border-0 bg-transparent px-3 text-left text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-hidden`,E=o`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  aria-hidden="true"
>
  <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
  <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
</svg>`,D=o`<svg
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path
    d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"
  />
</svg>`,O=o`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M4 5h16v11H9l-5 4z" />
</svg>`,k=o`<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 3v12" />
  <path d="M7 8l5-5 5 5" />
  <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
</svg>`,A=[{action:`copy`,icon:E,labelKey:`player_profile.share_copy_link`},{action:`x`,icon:D,labelKey:`player_profile.share_x`},{action:`discord`,icon:O,labelKey:`player_profile.share_discord`}],j=class extends i{constructor(...e){super(...e),this.url=``,this.name=``,this.text=``,this.layout=`row`,this.label=``,this.triggerClass=``,this.solid=!1,this.centered=!1,this.announcement=``,this.menuOpen=!1,this.rings=new WeakMap,this.onOutside=e=>{this.contains(e.target)||this.closeMenu(!1)}}createRenderRoot(){return this}disconnectedCallback(){this.listenOutside(!1),this.menuOpen=!1,super.disconnectedCallback()}shareText(){return this.text===``?d(`player_profile.share_text`,{name:this.name}):this.text}async copy(e){this.announcement=``;try{await u(e);let t=d(`common.copied`);c(t,`green`),this.announcement=t}catch{let e=d(`common.failed_copy`);c(e,`red`),this.announcement=e}}shareOnX(){window.open(f(this.url,this.shareText()),`_blank`,`noopener,noreferrer`)}async nativeShare(){try{await navigator.share({title:d(`player_profile.title`),text:this.shareText(),url:this.url})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;await this.copy(this.url)}}run(e){switch(e){case`copy`:this.copy(this.url);return;case`x`:this.shareOnX();return;case`discord`:this.copy(p(this.url,this.shareText()));return}}ringOf(e){return e.querySelector(`[data-share-ring]`)??e.parentElement?.querySelector(`:scope > [data-share-ring]`)??null}playRing(e){let t=this.ringOf(e);if(t===null||typeof t.animate!=`function`||!C())return;let n=this.rings.get(t);if(n!==void 0&&n.playState!==`finished`&&(n.currentTime===null?y:Number(n.currentTime))<y)return;let r=parseFloat(getComputedStyle(e).borderTopLeftRadius);Number.isFinite(r)&&(t.style.borderRadius=`${r+4}px`),this.rings.set(t,t.animate(x,{duration:y}))}onRingPointer(e){e.pointerType===`mouse`&&this.playRing(e.currentTarget)}onRingFocus(e){let t=e.currentTarget,n=!1;try{n=t.matches(`:focus-visible`)}catch{}n&&this.playRing(t)}trigger(){return this.querySelector(`[data-share="menu"]`)}menuItems(){return[...this.querySelectorAll(`[data-share-menu] button`)]}openMenu(){this.menuOpen=!0,this.listenOutside(!0),this.updateComplete.then(()=>this.menuItems()[0]?.focus())}closeMenu(e){this.menuOpen&&(this.menuOpen=!1,this.listenOutside(!1),e&&this.trigger()?.focus())}onTrigger(){if(m()){this.nativeShare();return}this.menuOpen?this.closeMenu(!1):this.openMenu()}listenOutside(e){e?document.addEventListener(`pointerdown`,this.onOutside,!0):document.removeEventListener(`pointerdown`,this.onOutside,!0)}onMenuKey(e){if(!this.menuOpen)return;let t=this.menuItems(),n=t.indexOf(document.activeElement),r;switch(e.key){case`Escape`:e.preventDefault(),e.stopPropagation(),this.closeMenu(!0);return;case`Tab`:this.closeMenu(!1);return;case`ArrowDown`:r=n===-1?0:(n+1)%t.length;break;case`ArrowUp`:r=n===-1?t.length-1:(n-1+t.length)%t.length;break;case`Home`:r=0;break;case`End`:r=t.length-1;break;default:return}e.preventDefault(),t[r]?.focus()}renderMenu(){let e=m();return o`<div
      class="relative flex w-full"
      @keydown=${e=>this.onMenuKey(e)}
    >
      <button
        type="button"
        data-share="menu"
        class=${this.triggerClass||g}
        aria-haspopup=${e?n:`menu`}
        aria-expanded=${e?n:String(this.menuOpen)}
        @click=${()=>this.onTrigger()}
        @pointerenter=${e=>this.onRingPointer(e)}
        @focus=${e=>this.onRingFocus(e)}
      >
        <span class="relative inline-flex items-center gap-2"
          >${k}<span>${this.label}</span></span
        >
      </button>
      ${C()?w:n}
      ${this.menuOpen?o`<div
              data-share-menu
              role="menu"
              aria-label=${this.label}
              class="absolute bottom-[calc(100%+8px)] left-1/2 z-50 flex w-max min-w-[220px] -translate-x-1/2 flex-col gap-0.5 rounded-xl border border-white/15 bg-zinc-900 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
            >
              ${A.map(e=>o`<button
                    type="button"
                    role="menuitem"
                    data-share=${e.action}
                    class=${T}
                    @click=${()=>{this.run(e.action),this.closeMenu(!0)}}
                  >
                    <span class="grid w-[18px] place-items-center"
                      >${e.icon}</span
                    ><span>${d(e.labelKey)}</span>
                  </button>`)}
            </div>`:n}
    </div>`}button(e,t,r,i){return o`<button
      type="button"
      class=${this.solid?_:g}
      data-share=${e}
      @click=${i}
      @pointerenter=${e=>this.onRingPointer(e)}
      @focus=${e=>this.onRingFocus(e)}
    >
      ${t}<span>${r}</span>${C()?w:n}
    </button>`}renderRow(){return o`<div
      class="flex flex-wrap gap-2 ${this.centered?`justify-center`:``}"
    >
      ${m()?this.button(`native`,k,d(`player_profile.share_native`),()=>void this.nativeShare()):A.map(e=>this.button(e.action,e.icon,d(e.labelKey),()=>this.run(e.action)))}
    </div>`}render(){return this.url===``||t.name()===`poki`?n:o`
      ${this.layout===`menu`?this.renderMenu():this.renderRow()}
      <span class="sr-only" role="status" aria-live="polite"
        >${this.announcement}</span
      >
    `}};a([l({type:String})],j.prototype,`url`,void 0),a([l({type:String})],j.prototype,`name`,void 0),a([l({type:String})],j.prototype,`text`,void 0),a([l({type:String})],j.prototype,`layout`,void 0),a([l({type:String})],j.prototype,`label`,void 0),a([l({type:String})],j.prototype,`triggerClass`,void 0),a([l({type:Boolean})],j.prototype,`solid`,void 0),a([l({type:Boolean})],j.prototype,`centered`,void 0),a([e()],j.prototype,`announcement`,void 0),a([e()],j.prototype,`menuOpen`,void 0),j=a([r(`profile-share`)],j);