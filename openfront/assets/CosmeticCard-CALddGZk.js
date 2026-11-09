import{Fi as e,La as t,Mi as n,Ni as r,Oi as i,Ri as a,ji as o,nr as s,va as c,yr as l}from"./index-xDRx6PtE.js";import{a as u,c as d,i as f,r as p}from"./CosmeticPreview-DoGk_eKX.js";var m={common:`text-white/60`,uncommon:`text-green-400`,rare:`text-blue-400`,epic:`text-purple-300`,legendary:`text-orange-400`},h=class extends r{constructor(...e){super(...e),this.showAdFree=!1,this.perks=[],this.items=[]}createRenderRoot(){return this}render(){if(!this.artist&&!this.rarity&&!this.colorPalette&&!this.showAdFree&&this.usdValue===void 0&&this.perks.length===0&&this.items.length===0)return e;let t=p(this.aiDisclosed,this.artist),n=m[this.rarity??``]??`text-white/70`;return a`<div
      data-cosmetic-info
      class="group/cosmetic-info pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-start"
      @click=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label="Show cosmetic details"
        class="pointer-events-auto flex h-7 w-7 cursor-help items-center justify-center rounded-full bg-black/55 text-xs font-black text-white/80 ring-1 ring-white/20 transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute left-0 top-9 hidden w-max max-w-full flex-col gap-0.5 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs text-white shadow-xl group-hover/cosmetic-info:flex group-focus-within/cosmetic-info:flex"
      >
        ${this.rarity?a`<div
                class="font-bold uppercase tracking-wider ${n}"
              >
                ${c(`cosmetics.${this.rarity}`)}
              </div>`:e}
        ${this.showAdFree?a`<div class="font-bold text-green-400">
                ${c(`cosmetics.adfree`)}
              </div>`:e}
        ${this.usdValue===void 0?e:a`<div>
                ${c(`cosmetics.usd_value`,{usd:`$${this.usdValue.toFixed(2)}`})}
              </div>`}
        ${this.perks.map(e=>a`<div class="max-w-56">
              <span class="font-bold text-purple-300">${e.label}:</span>
              <span class="text-white/80">${e.info}</span>
            </div>`)}
        ${this.items.length>0?a`<div data-cosmetic-info-items class="max-w-56">
                <span class="font-bold text-purple-300"
                  >${c(`cosmetics.pack_includes`)}</span
                >
                <span class="text-white/80">${this.items.join(`, `)}</span>
              </div>`:e}
        ${this.colorPalette?a`<div>
                ${c(`cosmetics.color_label`)}
                ${l(`territory_patterns.color_palette`,this.colorPalette)}
              </div>`:e}
        ${this.artist?a`<div>
                ${c(`cosmetics.artist_label`)} ${this.artist}
              </div>`:e}
        ${t?a`<div class="text-white/70">
                ${c(t)}
              </div>`:e}
      </div>
    </div>`}};i([o({type:String})],h.prototype,`artist`,void 0),i([o({type:Boolean})],h.prototype,`aiDisclosed`,void 0),i([o({type:String})],h.prototype,`rarity`,void 0),i([o({type:String})],h.prototype,`colorPalette`,void 0),i([o({type:Boolean})],h.prototype,`showAdFree`,void 0),i([o({type:Number})],h.prototype,`usdValue`,void 0),i([o({type:Array})],h.prototype,`perks`,void 0),i([o({type:Array})],h.prototype,`items`,void 0),h=i([n(`cosmetic-info`)],h);function g(e){if(!e||e.cosmetic===null)return!1;let t=e.type;return t!==`flag`&&t!==`crown`&&t!==`subscription`&&t!==`pack`&&t!==`cosmeticPack`}var _=class extends r{createRenderRoot(){return this}isPreviewable(){return g(this.resolved)}onBubbleClick(e){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:this.resolved}))}render(){return this.isPreviewable()?a`<div
      data-cosmetic-preview-bubble
      class="group/preview-bubble absolute right-2 bottom-2 z-10"
      @click=${this.onBubbleClick}
    >
      <button
        type="button"
        aria-label=${c(`store.preview_cosmetic`)}
        title=${c(`store.preview_cosmetic`)}
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/60 text-cyan-300 ring-1 ring-cyan-400/40 shadow-md shadow-black/60 transition-all duration-150 hover:scale-110 hover:bg-cyan-950/80 hover:text-cyan-200 hover:ring-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    </div>`:e}};i([o({attribute:!1})],_.prototype,`resolved`,void 0),_=i([n(`cosmetic-preview-bubble`)],_);function v(e,t=Date.now()){let n=Math.max(Math.ceil((new Date(e).getTime()-t)/6e4),1),r=Math.floor(n/60);return r>=24?c(`store.sale_ends_in_days`,{days:Math.floor(r/24),hours:r%24}):r>0?c(`store.sale_ends_in_hours`,{hours:r,minutes:n%60}):c(`store.sale_ends_in_minutes`,{minutes:n})}function y(e,t=Date.now()){let n=Math.max(Math.ceil((new Date(e).getTime()-t)/1e3),0),r=Math.floor(n/3600),i=Math.floor(n%3600/60),a=String(n%60).padStart(2,`0`);return r>0?`${r}:${String(i).padStart(2,`0`)}:${a}`:`${i}:${a}`}var b=class extends r{constructor(...e){super(...e),this.endsAt=``,this.format=`ends-in`,this.timer=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this.timer!==null&&clearInterval(this.timer),this.timer=null}updated(e){e.has(`format`)&&this.restartTimer()}restartTimer(){this.timer!==null&&clearInterval(this.timer),this.timer=setInterval(()=>this.requestUpdate(),this.format===`clock`?1e3:3e4)}render(){return this.endsAt?this.format===`clock`?y(this.endsAt):v(this.endsAt):a``}};i([o({type:String})],b.prototype,`endsAt`,void 0),i([o({type:String})],b.prototype,`format`,void 0),b=i([n(`sale-countdown`)],b);var x,S=`cosmetic-card-styles`;if(!document.getElementById(S)){let e=document.createElement(`style`);e.id=S,e.textContent=`
    @keyframes cosmetic-card-legendary-pulse {
      0%, 100% { box-shadow: 0 0 15px rgba(251,146,60,0.8), 0 0 30px rgba(251,146,60,0.4); }
      50% { box-shadow: 0 0 25px rgba(251,146,60,0.9), 0 0 45px rgba(251,146,60,0.5); }
    }
    @keyframes cosmetic-card-shimmer {
      0% { left: -60%; }
      100% { left: 160%; }
    }
    @keyframes cosmetic-card-border-sweep {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes cosmetic-card-sparkle-0 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      40%, 60% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    }
    @keyframes cosmetic-card-sparkle-1 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      30%, 55% { opacity: 1; transform: scale(1.1) rotate(-15deg); }
    }
    @keyframes cosmetic-card-sparkle-2 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      45%, 65% { opacity: 1; transform: scale(1.3) rotate(10deg); }
    }
    @keyframes cosmetic-card-sparkle-3 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      35%, 58% { opacity: 1; transform: scale(1) rotate(-20deg); }
    }

    [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      background: linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(255,255,255,0.15);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      background: linear-gradient(to top, rgba(30,100,30,0.65) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(74,222,128,0.45);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      background: linear-gradient(to top, rgba(20,60,160,0.7) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(96,165,250,0.5);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      background: linear-gradient(to top, rgba(90,20,160,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(192,132,252,0.6);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      background: linear-gradient(to top, rgba(180,80,0,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(251,146,60,0.65);
    }

    cosmetic-card:hover { position: relative; z-index: 10; }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      transform: translateY(-4px);
      box-shadow: 0 0 12px rgba(74,222,128,0.6);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(96,165,250,0.7);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(192,132,252,0.85);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      transform: translateY(-6px) scale(1.12);
      animation: cosmetic-card-legendary-pulse 1.4s ease-in-out infinite;
    }

    [data-cosmetic-main], [data-cosmetic-action] {
      position: relative;
      z-index: 3;
    }
    [data-cosmetic-shimmer] {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: 2;
      overflow: hidden;
      border-radius: 0.75rem;
      opacity: 0;
    }
    [data-cosmetic-shimmer]::after {
      content: "";
      pointer-events: none;
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.45) 50%, transparent 100%);
      transform: skewX(-15deg);
    }
    [data-cosmetic-rarity="legendary"] [data-cosmetic-shimmer]::after {
      background: linear-gradient(90deg, transparent 0%, rgba(255,200,80,0.5) 50%, transparent 100%);
    }
    cosmetic-card:hover [data-cosmetic-shimmer] { opacity: 1; }
    cosmetic-card:hover [data-cosmetic-shimmer]::after {
      animation: cosmetic-card-shimmer 0.8s ease-in-out;
    }

    /* A gold conic gradient spinning about the card's centre, clipped to the
       card's rounded box. z-index:-1 puts it above the shell's own background
       but below the card content, so it reads as a full-card overlay sweeping
       around behind the preview and name. */
    [data-cosmetic-border-sweep] {
      pointer-events: none;
      position: absolute;
      inset: -2px;
      z-index: -1;
      display: block;
      border-radius: 0.85rem;
      overflow: hidden;
      opacity: 0;
    }
    [data-cosmetic-border-sweep]::after {
      content: "";
      position: absolute;
      inset: -100%;
      transform-origin: center;
      will-change: transform;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(255,200,80,0) 60deg,
        rgba(255,200,80,0.9) 120deg,
        rgba(255,200,80,1) 180deg,
        rgba(255,200,80,0.9) 240deg,
        rgba(255,200,80,0) 300deg,
        transparent 360deg
      );
    }
    cosmetic-card:hover [data-cosmetic-border-sweep] {
      opacity: 1;
    }
    cosmetic-card:hover [data-cosmetic-border-sweep]::after {
      animation: cosmetic-card-border-sweep 8s linear infinite;
    }

    [data-cosmetic-sparkle] {
      pointer-events: none;
      position: absolute;
      z-index: 11;
      display: block;
      color: rgba(255,220,100,0.9);
      font-size: 10px;
      line-height: 1;
      opacity: 0;
      text-shadow: 0 0 6px rgba(255,200,60,1);
    }
    cosmetic-card:hover [data-cosmetic-sparkle="0"] { animation: cosmetic-card-sparkle-0 1.6s ease-in-out infinite; }
    cosmetic-card:hover [data-cosmetic-sparkle="1"] { animation: cosmetic-card-sparkle-1 1.9s ease-in-out infinite 0.3s; }
    cosmetic-card:hover [data-cosmetic-sparkle="2"] { animation: cosmetic-card-sparkle-2 1.7s ease-in-out infinite 0.7s; }
    cosmetic-card:hover [data-cosmetic-sparkle="3"] { animation: cosmetic-card-sparkle-3 2s ease-in-out infinite 0.1s; }

    /* No prefers-reduced-motion opt-out: these animations are the legendary
       treatment, and suppressing them left the card with a frozen gold wash
       and invisible (opacity: 0) sparkles rather than a calmer effect. */

    /* A flash sale's item: the theme's accent (blue; orange under the
       Halloween theme, which overrides --color-aquarius), pulsing all the
       time (not only on hover), with a light running round the edge. Listed
       after the rarity rules so it wins over a legendary card's hover pulse. */
    @keyframes cosmetic-card-flash-pulse {
      0%, 100% { box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 8px color-mix(in srgb, var(--color-aquarius) 40%, transparent); }
      50% { box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 30px color-mix(in srgb, var(--color-aquarius) 90%, transparent); }
    }
    @keyframes cosmetic-card-flash-spin {
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    cosmetic-card [data-cosmetic-shell][data-cosmetic-flash],
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-flash] {
      border-color: var(--color-aquarius);
      animation: cosmetic-card-flash-pulse 1.8s ease-in-out infinite;
    }
    [data-cosmetic-flash-ring] {
      pointer-events: none;
      position: absolute;
      inset: -4px;
      z-index: 8;
      border-radius: 15px;
      padding: 3px;
      overflow: hidden;
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
    [data-cosmetic-flash-ring]::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 250%;
      aspect-ratio: 1;
      background: conic-gradient(from 0deg, transparent 0 55%, var(--color-aquarius) 72%, #fff 80%, var(--color-aquarius) 88%, transparent 100%);
      transform: translate(-50%, -50%);
      animation: cosmetic-card-flash-spin 2.6s linear infinite;
    }
    /* Unlike the legendary hover, a flash item glows all the time, so it
       calms to a steady outline rather than pulsing and spinning. */
    @media (prefers-reduced-motion: reduce) {
      cosmetic-card [data-cosmetic-shell][data-cosmetic-flash],
      cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-flash] {
        animation: none;
        box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 14px color-mix(in srgb, var(--color-aquarius) 60%, transparent);
      }
      [data-cosmetic-flash-ring] { display: none; }
    }
  `,document.head.appendChild(e)}var C=class extends r{static{x=this}constructor(...t){super(...t),this.variants=[],this.activeVariantKey=null,this.state=`idle`,this.showSwatches=!0,this.interactive=!0,this.previewSize=`card`,this.actionContent=e,this.onHoverStart=()=>{u(this.activeResolved)===`legendary`&&(x.ensureBackdrop().style.background=`rgba(0,0,0,0.6)`)},this.onHoverEnd=()=>{x.backdrop!==null&&(x.backdrop.style.background=`rgba(0,0,0,0)`)}}get activeResolved(){return this.variants.find(e=>e.key===this.activeVariantKey)??this.resolved}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener(`mouseenter`,this.onHoverStart),this.addEventListener(`mouseleave`,this.onHoverEnd)}disconnectedCallback(){this.removeEventListener(`mouseenter`,this.onHoverStart),this.removeEventListener(`mouseleave`,this.onHoverEnd),this.onHoverEnd(),super.disconnectedCallback()}static{this.backdrop=null}static ensureBackdrop(){return x.backdrop??=(()=>{let e=document.createElement(`div`);return e.dataset.cosmeticBackdrop=``,e.style.cssText=`
        pointer-events: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0);
        z-index: 9;
        transition: background 0.3s ease;
      `,document.body.appendChild(e),e})(),x.backdrop}updated(){this.dataset.cosmeticState=this.state}rarityClass(e){switch(e){case`uncommon`:return`border-zinc-300/70`;case`rare`:return`border-violet-300/70`;case`epic`:return`border-fuchsia-300/70`;case`legendary`:return`border-amber-400/70`;default:return`border-white/20`}}rarityHoverClass(e){switch(e){case`uncommon`:return`hover:shadow-[0_14px_30px_rgba(74,222,128,0.22)]`;case`rare`:return`hover:shadow-[0_14px_30px_rgba(96,165,250,0.28)]`;case`epic`:return`hover:shadow-[0_14px_34px_rgba(232,121,249,0.32)]`;case`legendary`:return`hover:shadow-[0_16px_38px_rgba(251,191,36,0.38)]`;default:return`hover:shadow-[0_12px_26px_rgba(255,255,255,0.14)]`}}renderSwatches(){let t=this.variants.filter(e=>e.colorPalette!==null||e.type===`pattern`&&e.cosmetic!==null);if(!this.interactive||!this.showSwatches||t.length===0)return e;let n=this.activeResolved.key;return a`<div
      data-cosmetic-swatches
      class="flex flex-wrap items-center justify-center gap-1 w-full pt-2"
    >
      ${t.map(e=>{let t=e.colorPalette,r=t?.primaryColor??`#ffffff`,i=t?.secondaryColor??`#000000`,o=e.key===n,s=t?l(`territory_patterns.color_palette`,t.name):c(`territory_patterns.pattern.default`);return a`<button
          type="button"
          data-variant-key=${e.key}
          title=${s}
          aria-label=${s}
          aria-pressed=${o?`true`:`false`}
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-0 m-0 appearance-none cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 transition-transform duration-150 hover:scale-110"
          @click=${t=>{t.stopPropagation(),this.onVariantActivate?.(e)}}
        >
          <span
            data-cosmetic-swatch-dot
            aria-hidden="true"
            class="h-5 w-5 rounded-full ${o?`scale-110 ring-2 ring-white`:``}"
            style="background-image: linear-gradient(135deg, ${r} 0 calc(50% - 0.5px), rgba(255,255,255,0.55) calc(50% - 0.5px) calc(50% + 0.5px), ${i} calc(50% + 0.5px) 100%);"
          ></span>
        </button>`})}
    </div>`}subscriptionPerks(){if(this.activeResolved.type!==`subscription`)return[];let e=this.activeResolved.cosmetic;if(e.requiresSteamLicence)return[];let t=[{label:c(`cosmetics.verified_name`),info:c(`cosmetics.verified_name_info`)}];return e.canCreatePublicLobbies&&t.push({label:c(`cosmetics.public_lobbies`),info:c(`cosmetics.public_lobbies_info`)}),t}renderSaleRibbon(t){if(t.relationship!==`purchasable`)return e;let n=s(t.cosmetic);return n===null?e:a`<span
      data-cosmetic-sale=${n.kind===`flash`?`flash`:`sale`}
      class="pointer-events-none absolute right-0 top-0 z-[5] h-16 w-16 overflow-hidden rounded-tr-lg sm:h-[88px] sm:w-[88px]"
    >
      <span
        class="absolute -right-[26px] top-3.5 w-24 rotate-45 bg-aquarius py-0.5 text-center text-xs font-black tabular-nums text-deep-navy shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:-right-[34px] sm:top-5 sm:w-[130px] sm:py-[3px] sm:text-[15px]"
        >${c(`store.sale_percent_off`,{percent:n.percentOff})}</span
      >
    </span>`}renderFlashTimer(t){let n=this.flashSale(t);return n===null?e:a`<div
      data-cosmetic-flash-timer
      class="pointer-events-none absolute inset-x-0 bottom-0 z-[3] rounded-b-lg bg-gradient-to-t from-deep-navy/95 to-transparent pb-1.5 pt-5 text-center leading-none"
    >
      <sale-countdown
        class="text-base font-black tabular-nums text-white"
        format="clock"
        .endsAt=${n.endsAt}
      ></sale-countdown>
      <div
        class="mt-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-aquarius"
      >
        ${c(`store.flash_left`)}
      </div>
    </div>`}flashSale(e){if(e.relationship!==`purchasable`)return null;let t=s(e.cosmetic);return t?.kind===`flash`?t:null}render(){let n=this.activeResolved,r=u(n),i=f(n),o=this.state===`focused`,s=this.state===`equipped`,l=this.flashSale(n)!==null,p=`${this.rarityClass(r)} ${s?`ring-2 ring-emerald-400/70 shadow-[0_0_24px_rgba(52,211,153,0.45)]`:``} ${this.rarityHoverClass(r)}`,m=n.cosmetic,h=m?.priceHard===void 0?void 0:m.priceHard/20,g=a`
      <div class="relative w-full flex-1 ${n.type===`subscription`?`h-auto`:`aspect-square`}">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white/5 p-2"
        >
          <cosmetic-preview
            .resolved=${n}
            size=${this.previewSize}
          ></cosmetic-preview>
        </div>
        ${this.renderSaleRibbon(n)} ${this.renderFlashTimer(n)}
        ${s?a`<span
                data-cosmetic-equipped="true"
                class="absolute bottom-1 left-1 z-[4] rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-200/70"
                >✓ ${c(`inventory.equipped`)}</span
              >`:e}
      </div>
    `,_=a`<span
      data-cosmetic-name
      class="w-full capitalize  whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white ${this.interactive?`cursor-pointer`:``}"
      @click=${()=>this.interactive&&this.onActivate?.(n)}
      >${i}</span
    >`;return a`<div
      data-cosmetic-shell
      data-cosmetic-state=${this.state}
      data-cosmetic-rarity=${r}
      ?data-cosmetic-flash=${l}
      class="relative flex h-full flex-col items-center overflow-visible rounded-xl border transition-all duration-200 ease-out hover:-translate-y-1 ${p}"
    >
      ${l?a`<span data-cosmetic-flash-ring aria-hidden="true"></span>`:e}
      ${r===`epic`||r===`legendary`?a`<span data-cosmetic-shimmer aria-hidden="true"></span>`:e}
      ${r===`legendary`?a`<span data-cosmetic-border-sweep aria-hidden="true"></span>
              <span
                data-cosmetic-sparkle="0"
                aria-hidden="true"
                style="top: 4px; left: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="1"
                aria-hidden="true"
                style="top: 4px; right: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="2"
                aria-hidden="true"
                style="bottom: 4px; left: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="3"
                aria-hidden="true"
                style="bottom: 4px; right: 4px"
                >✦</span
              >`:e}
      ${_}
      <!-- The info bubble anchors to this wrapper, not the whole card, so it
           lands on the artwork's corner instead of over the name — and stays
           outside the card's own button, which may not nest a control.
           flex-1 down this chain hands any row-stretch slack (a taller
           sibling card, e.g. the custom-amount slider) to the artwork box,
           instead of pooling it as a void between artwork and buttons. -->
      <div class="relative w-full flex-1 flex flex-col">
        ${this.interactive?a`<button
                type="button"
                data-cosmetic-main
                aria-label=${i}
                aria-pressed=${s?`true`:e}
                aria-current=${o?`true`:e}
                class="group relative flex flex-1 flex-col items-center gap-2 w-full rounded-xl px-3 pb-3 pt-2 cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1"
                @click=${()=>this.onActivate?.(n)}
              >
                ${g}
              </button>`:a`<div
                data-cosmetic-main
                class="group relative flex flex-1 w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
              >
                ${g}
              </div>`}
        ${this.interactive&&n.cosmetic!==null?a`<cosmetic-info
                  .artist=${m?.artist}
                  .aiDisclosed=${m?.aiDisclosed}
                  .rarity=${r}
                  .colorPalette=${n.colorPalette?.name}
                  .showAdFree=${n.relationship===`purchasable`&&!t()}
                  .usdValue=${h}
                  .perks=${this.subscriptionPerks()}
                  .items=${(n.packItems??[]).map(d)}
                ></cosmetic-info>
                <cosmetic-preview-bubble
                  .resolved=${n}
                ></cosmetic-preview-bubble>`:e}
      </div>
      ${this.renderSwatches()}
      ${this.actionContent===e?e:a`<div
              data-cosmetic-action
              class="mt-auto w-full px-3 pb-3 pt-2"
            >
              ${this.actionContent}
            </div>`}
    </div>`}};i([o({attribute:!1})],C.prototype,`resolved`,void 0),i([o({attribute:!1})],C.prototype,`variants`,void 0),i([o({type:String})],C.prototype,`activeVariantKey`,void 0),i([o({type:String})],C.prototype,`state`,void 0),i([o({type:Boolean})],C.prototype,`showSwatches`,void 0),i([o({type:Boolean})],C.prototype,`interactive`,void 0),i([o({type:String})],C.prototype,`previewSize`,void 0),i([o({attribute:!1})],C.prototype,`onActivate`,void 0),i([o({attribute:!1})],C.prototype,`onVariantActivate`,void 0),i([o({attribute:!1})],C.prototype,`actionContent`,void 0),C=x=i([n(`cosmetic-card`)],C);export{g as t};