import{Ai as e,Fi as t,Mi as n,Ni as r,Oi as i,Pi as a,Ri as o,fn as s,g as c,va as l}from"./index-xDRx6PtE.js";import"./ProfileShare-C6Mo_FqJ.js";import{i as u,r as d}from"./MomentShare-BNtk2zXC.js";import{n as f,t as p}from"./Ceremony-BITttGyn.js";var m={charge:500,implode:2600,descend:2850,impact:3700,title:5e3,line:5600,done:6400},h=[`intro`,`charge`,`implode`,`descend`,`impact`,`title`,`line`,`done`],g=m.impact+1400,_=1e4,v=m.done,y=`legendCeremonySeen:`;function b(e){try{return localStorage.getItem(y+e)!==null}catch{return!1}}function x(e){try{localStorage.setItem(y+e,`1`)}catch{}}var S=``;function C(e,t,n){let[r,i=``]=l(e,{[t]:S}).split(S);return o`${r}${n}${i}`}function w(e){try{return new Intl.DateTimeFormat(document.documentElement.lang||void 0,{day:`numeric`,month:`short`,year:`numeric`}).format(e)}catch{return e.toDateString()}}var T=class extends r{constructor(...e){super(...e),this.moment=null,this.beat=`intro`,this.landed=!1,this.skipped=!1,this.frozen=!1,this.small=!1,this.timers=[],this.portal=null,this.onKeyDown=e=>{if(this.moment!==null){if(e.stopPropagation(),this.beat!==`done`){e.preventDefault(),this.skip();return}if(e.key===`Escape`)e.preventDefault(),this.close();else if(e.key===`Tab`){e.preventDefault();let t=[...this.root()?.querySelectorAll(`button:not([disabled])`)??[]];if(t.length===0)return;let n=t.indexOf(document.activeElement);t[n===-1?t.length-1:(n+(e.shiftKey?-1:1)+t.length)%t.length].focus()}}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),p()}disconnectedCallback(){super.disconnectedCallback(),this.teardown()}get isOpen(){return this.moment!==null}show(e){if(this.moment===null){if(this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown,!0),this.small=window.innerWidth<640,this.moment=e,this.landed=!1,this.frozen=!1,s()){this.finish(!0);return}this.skipped=!1,this.beat=`intro`;for(let[e,t]of Object.entries(m))this.later(t,()=>{this.beat=e,e===`done`&&this.rest()});this.later(g,()=>this.landed=!0)}}later(e,t){this.timers.push(setTimeout(t,e))}clearTimers(){for(let e of this.timers)clearTimeout(e);this.timers=[]}rest(){this.later(_,()=>this.frozen=!0)}finish(e){this.clearTimers(),this.skipped=e,this.landed=!0,this.beat=`done`,this.rest()}skip(){this.beat!==`done`&&this.finish(!0)}close(){this.moment!==null&&(this.teardown(),this.dispatchEvent(new CustomEvent(`legend-ceremony-closed`,{bubbles:!0,composed:!0})))}teardown(){this.clearTimers(),window.removeEventListener(`keydown`,this.onKeyDown,!0),this.moment=null,this.portal&&=(a(t,this.portal),this.portal.remove(),null)}root(){return this.portal?.querySelector(`[data-legend-ceremony]`)??null}continueButton(){return this.portal?.querySelector(`[data-legend-continue]`)??null}updated(e){e.has(`moment`)&&this.moment!==null&&this.root()?.focus(),e.has(`beat`)&&this.beat===`done`&&this.continueButton()?.focus()}reached(e){return h.indexOf(this.beat)>=h.indexOf(e)}render(){return this.portal&&a(this.moment===null?t:this.renderCeremony(this.moment),this.portal),t}honeycombMode(){return this.beat===`done`?this.frozen?`lc-hx-idle lc-hx-frozen`:`lc-hx-idle`:this.beat===`charge`?`lc-hx-charge`:this.reached(`impact`)?`lc-hx-burst`:``}raysMode(){return this.beat===`done`?`lc-rays-idle`:this.reached(`impact`)?`lc-rays-burst`:this.reached(`charge`)?`lc-rays-charge`:``}renderCrown(e,t){return o`<div data-legend-crown class="lc-crown ${e}">
      <div
        aria-hidden="true"
        class="lc-halo ${e===`lc-crown-drop`?``:`lc-halo-in`}"
      ></div>
      <div class="lc-crown-inner ${t}">
        <level-badge
          .level=${100}
          .prestige=${10}
          .legend=${!0}
          .size=${this.small?170:220}
        ></level-badge>
      </div>
    </div>`}renderEmblem(){if(this.beat===`done`)return this.renderCrown(this.skipped?`lc-final-in`:``,`lc-crown-breathe`);if(!this.reached(`implode`))return o`<div
        class="lc-charge-wrap lc-fade-in ${this.beat===`charge`?`lc-charge`:``}"
      >
        <level-badge
          .level=${99}
          .prestige=${10}
          .size=${this.small?150:190}
        ></level-badge>
      </div>`;let e=this.reached(`impact`)?t:o`<div aria-hidden="true" class="lc-pinpoint"></div>`;return this.beat===`implode`?o`<div class="lc-implode">
          <level-badge
            .level=${99}
            .prestige=${10}
            .size=${this.small?150:190}
          ></level-badge>
        </div>
        ${e}`:this.beat===`descend`?o`${this.renderCrown(`lc-crown-drop`,``)}${e}`:o`${this.landed?this.renderCrown(``,`lc-crown-breathe`):o`${this.renderCrown(`lc-crown-land`,``)}
            <span aria-hidden="true" class="ceremony-shockwave lc-shock"></span>
            <span
              aria-hidden="true"
              class="ceremony-shockwave lc-shock lc-shock-2"
            ></span>`}`}renderLine(e){let t=this.skipped;return o`<div
        aria-hidden="true"
        class="lc-rule ${t?`lc-final-in`:`lc-rule-in`}"
      ></div>
      <div
        data-legend-line
        class="lc-line ${t?`lc-final-in`:`lc-rise`}"
      >
        <span class="lc-seg"
          >${l(`legend_ceremony.top_of_track`)}</span
        ><span aria-hidden="true" class="lc-dot">·</span
        ><span class="lc-seg"
          >${C(`legend_ceremony.lifetime_xp`,`xp`,o`<b>${c(e.lifetimeXp)}</b>`)}</span
        ><span aria-hidden="true" class="lc-dot">·</span
        ><span class="lc-seg">${w(e.at)}</span>
      </div>`}renderShare(e){if(e.publicId===``)return t;let n={kind:`legend`},r=u(e.publicId,n);return r===null?t:o`<div
      data-legend-share
      class="lc-share"
      @click=${e=>e.stopPropagation()}
    >
      <profile-share
        solid
        centered
        .url=${r}
        .text=${d(n)}
      ></profile-share>
    </div>`}renderCeremony(e){let n=this.beat===`done`,r=this.reached(`impact`)&&!this.landed;return o`<div
      data-legend-ceremony
      data-beat=${this.beat}
      ?data-skipped=${this.skipped}
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-label=${l(`legend_ceremony.label`)}
      class="lc-root ${this.small?`lc-small`:``}"
      @click=${()=>this.skip()}
    >
      ${E}
      <div class="lc-world ${r?`lc-shake`:``}">
        <div aria-hidden="true" class="ceremony-backdrop lc-backdrop"></div>
        ${f(this.honeycombMode(),{focusY:.42,className:`lc-honeycomb`})}
        <div aria-hidden="true" class="ceremony-vignette lc-vignette"></div>
        <div aria-hidden="true" class="lc-rays ${this.raysMode()}"></div>
        <div class="lc-stage">
          <div class="lc-emblem">${this.renderEmblem()}</div>
          ${this.reached(`title`)?o`<div
                  data-legend-title
                  class="lc-title ${this.skipped?`lc-title-final lc-final-in`:`lc-title-slam`}"
                >
                  ${l(`progression.legend`)}
                </div>`:t}
          ${this.reached(`line`)?this.renderLine(e):t}
          ${n?this.renderShare(e):t}
          ${n?o`<div
                  class="lc-actions ${this.skipped?`lc-final-in`:`lc-rise`}"
                >
                  <button
                    type="button"
                    data-legend-continue
                    class="lc-continue"
                    @click=${e=>{e.stopPropagation(),this.close()}}
                  >
                    ${l(`legend_ceremony.continue`)}
                  </button>
                </div>`:t}
        </div>
      </div>
      ${this.beat===`implode`||this.beat===`descend`?o`<div
              aria-hidden="true"
              class="ceremony-flash lc-flash lc-flash-small"
            ></div>`:t}
      ${this.reached(`impact`)&&!this.landed?o`<div aria-hidden="true" class="ceremony-flash lc-flash"></div>`:t}
    </div>`}};i([e()],T.prototype,`moment`,void 0),i([e()],T.prototype,`beat`,void 0),i([e()],T.prototype,`landed`,void 0),i([e()],T.prototype,`skipped`,void 0),i([e()],T.prototype,`frozen`,void 0),T=i([n(`legend-ceremony`)],T);var E=o`<style>
  .lc-root {
    position: fixed;
    inset: 0;
    z-index: 10040;
    overflow: hidden;
    color: #fff;
    background: #05080f;
    cursor: pointer;
    outline: none;
    --cy: 34vh;
    --emblem: 230px;
    --hx-color: #fbbf24;
    --hx-glow: #f59e0b;
  }
  .lc-root.lc-small {
    --cy: 30vh;
    --emblem: 190px;
  }
  .lc-root[data-beat="done"] {
    cursor: default;
  }
  .lc-world {
    position: absolute;
    inset: 0;
  }
  .lc-backdrop {
    position: absolute;
    inset: 0;
    animation:
      ceremony-fade-in 500ms ease-out both,
      lc-dim 1600ms ease-in-out 300ms both;
  }
  @keyframes lc-dim {
    from {
      filter: brightness(0.7);
    }
    to {
      filter: brightness(0.32) saturate(0.8);
    }
  }
  .lc-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 50% 42%,
      rgba(3, 6, 12, 0.25) 0%,
      rgba(3, 6, 12, 0.2) 35%,
      rgba(3, 6, 12, 0.85) 100%
    );
    animation: ceremony-fade-in 500ms ease-out both;
  }
  .lc-fade-in,
  .lc-final-in {
    animation: ceremony-fade-in 500ms ease-out both;
  }
  .lc-final-in {
    animation-duration: 350ms;
  }

  /* The honeycomb, in gold: pulsing in toward the emblem while it charges,
     two waves out at the impact, then a gentle shimmer. */
  .lc-honeycomb {
    filter: drop-shadow(0 0 7px var(--hx-glow));
  }
  .lc-hx-charge .hx {
    animation: lc-hx-pulse 1300ms ease-in-out infinite;
    animation-delay: calc((1 - var(--d)) * 1000ms);
  }
  @keyframes lc-hx-pulse {
    0%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: calc(0.75 * (1 - var(--d)));
    }
  }
  .lc-hx-burst .hx {
    animation: lc-hx-burst 2600ms ease-out both;
    animation-delay: calc(var(--d) * 1100ms);
  }
  @keyframes lc-hx-burst {
    0% {
      opacity: 0;
      stroke: #fff;
    }
    7% {
      opacity: 1;
      stroke: #fff;
    }
    22% {
      opacity: 0.55;
      stroke: #fbbf24;
    }
    34% {
      opacity: 0.95;
      stroke: #fde68a;
    }
    55% {
      opacity: 0.35;
      stroke: #fbbf24;
    }
    100% {
      opacity: 0.08;
      stroke: #f59e0b;
    }
  }
  .lc-hx-idle .hx {
    animation: lc-hx-idle 5s ease-in-out infinite;
    animation-delay: calc(var(--d) * 2.5s);
  }
  .lc-hx-frozen .hx {
    animation-play-state: paused;
  }
  @keyframes lc-hx-idle {
    0%,
    100% {
      opacity: 0.05;
    }
    50% {
      opacity: 0.26;
    }
  }

  /* Gold rays behind the emblem: one turning layer. */
  .lc-rays {
    position: absolute;
    left: 50%;
    top: var(--cy);
    width: 220vmax;
    height: 220vmax;
    margin: -110vmax 0 0 -110vmax;
    opacity: 0;
    pointer-events: none;
    background: repeating-conic-gradient(
      from 0deg,
      rgba(253, 224, 71, 0) 0deg 6deg,
      rgba(253, 224, 71, 0.26) 8deg 10deg,
      rgba(253, 224, 71, 0) 12deg 18deg
    );
    -webkit-mask: radial-gradient(
      circle,
      #000 0,
      rgba(0, 0, 0, 0.75) 9%,
      rgba(0, 0, 0, 0.25) 22%,
      transparent 42%
    );
    mask: radial-gradient(
      circle,
      #000 0,
      rgba(0, 0, 0, 0.75) 9%,
      rgba(0, 0, 0, 0.25) 22%,
      transparent 42%
    );
  }
  .lc-rays-charge {
    animation:
      lc-spin 60s linear infinite,
      lc-rays-in 2000ms ease-in both;
  }
  @keyframes lc-rays-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.45;
    }
  }
  .lc-rays-burst {
    animation:
      lc-spin 60s linear infinite,
      lc-rays-burst 1800ms ease-out both;
  }
  @keyframes lc-rays-burst {
    0% {
      opacity: 1;
      transform: scale(1.25);
    }
    100% {
      opacity: 0.55;
      transform: scale(1);
    }
  }
  .lc-rays-idle {
    opacity: 0.5;
    animation: lc-spin 60s linear infinite;
  }
  @keyframes lc-spin {
    to {
      rotate: 360deg;
    }
  }

  .lc-stage {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: calc(var(--cy) - var(--emblem) / 2);
  }
  .lc-emblem {
    position: relative;
    width: var(--emblem);
    height: var(--emblem);
    display: grid;
    place-items: center;
  }
  .lc-emblem > * {
    grid-area: 1 / 1;
  }

  /* The P10 emblem gathering power, then imploding to a point of light. */
  .lc-charge {
    animation:
      lc-shake 2100ms ease-in both,
      lc-glow 2100ms ease-in both;
  }
  @keyframes lc-shake {
    0%,
    35% {
      transform: none;
    }
    45% {
      transform: translate(-1px, 1px) rotate(-1deg);
    }
    55% {
      transform: translate(2px, -1px) rotate(1deg);
    }
    65% {
      transform: translate(-3px, 2px) rotate(-2deg) scale(1.03);
    }
    75% {
      transform: translate(4px, -2px) rotate(2deg) scale(1.06);
    }
    85% {
      transform: translate(-6px, 3px) rotate(-3deg) scale(1.1);
    }
    95% {
      transform: translate(7px, -3px) rotate(3deg) scale(1.15);
    }
    100% {
      transform: scale(1.2);
    }
  }
  @keyframes lc-glow {
    from {
      filter: drop-shadow(0 0 0 transparent) brightness(1);
    }
    to {
      filter: drop-shadow(0 0 50px #facc15) brightness(2);
    }
  }
  .lc-implode {
    animation: lc-implode 260ms cubic-bezier(0.6, 0, 1, 0.6) both;
  }
  @keyframes lc-implode {
    from {
      transform: scale(1.2);
      filter: brightness(2.5) drop-shadow(0 0 60px #fff);
      opacity: 1;
    }
    to {
      transform: scale(0);
      filter: brightness(4);
      opacity: 0;
    }
  }
  .lc-pinpoint {
    width: 18px;
    height: 18px;
    border-radius: 9999px;
    background: #fff;
    box-shadow:
      0 0 30px 12px #fde68a,
      0 0 80px 30px rgba(250, 204, 21, 0.6);
    animation: lc-pinpoint 900ms ease-in-out both;
  }
  @keyframes lc-pinpoint {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    20% {
      transform: scale(1.4);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      opacity: 0.9;
    }
  }

  /* The crown drops in from above and lands hard, then breathes. */
  .lc-crown {
    position: relative;
    display: grid;
    place-items: center;
  }
  .lc-crown > * {
    grid-area: 1 / 1;
  }
  .lc-crown-drop {
    animation: lc-drop 850ms cubic-bezier(0.55, 0, 0.95, 0.5) both;
  }
  @keyframes lc-drop {
    0% {
      transform: translateY(-75vh) scale(1.7);
      opacity: 0;
    }
    12% {
      opacity: 1;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  .lc-crown-land {
    animation: lc-land 700ms cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
  }
  @keyframes lc-land {
    0% {
      transform: scale(1.12, 0.8) translateY(8%);
    }
    35% {
      transform: scale(0.94, 1.08);
    }
    65% {
      transform: scale(1.03, 0.97);
    }
    100% {
      transform: none;
    }
  }
  .lc-crown-breathe {
    animation: lc-breathe 3.2s ease-in-out infinite;
  }
  @keyframes lc-breathe {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.035);
    }
  }
  .lc-crown level-badge {
    filter: drop-shadow(0 0 22px rgba(250, 204, 21, 0.85))
      drop-shadow(0 0 60px rgba(245, 158, 11, 0.45));
  }
  .lc-halo {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    width: 150%;
    height: 150%;
    border-radius: 9999px;
    pointer-events: none;
    background: radial-gradient(
      circle,
      rgba(253, 224, 71, 0.42) 0%,
      rgba(250, 204, 21, 0.14) 38%,
      transparent 68%
    );
  }
  .lc-halo-in {
    animation: ceremony-fade-in 600ms ease-out both;
  }

  /* The impact: two shockwaves, a gold flash, and the screen shaking. */
  .lc-shock {
    --shock-size: 220px;
    --shock-width: 7px;
    --shock-color: #fde68a;
    --shock-from: 0.5;
    --shock-to: 7;
    --shock-ms: 1000ms;
  }
  .lc-shock-2 {
    --shock-color: #ffffff;
    --shock-width: 3px;
    --shock-ms: 1300ms;
    --shock-delay: 140ms;
  }
  .lc-flash {
    --flash-bg: radial-gradient(
      circle at 50% var(--cy),
      #fff 0%,
      #fff7d6 22%,
      rgba(253, 230, 138, 0.7) 48%,
      rgba(250, 204, 21, 0.28) 100%
    );
    --flash-ms: 900ms;
  }
  .lc-flash-small {
    --flash-ms: 500ms;
  }
  .lc-shake {
    animation: lc-shake-screen 520ms linear both;
  }
  @keyframes lc-shake-screen {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-14px, 9px);
    }
    20% {
      transform: translate(12px, -8px);
    }
    30% {
      transform: translate(-9px, -6px);
    }
    40% {
      transform: translate(8px, 6px);
    }
    55% {
      transform: translate(-5px, 3px);
    }
    70% {
      transform: translate(3px, -2px);
    }
    85% {
      transform: translate(-1px, 1px);
    }
    100% {
      transform: none;
    }
  }

  /* LEGEND, slammed in, then a gold sweep through it. */
  .lc-title {
    margin-top: 14px;
    font-size: clamp(60px, min(12vw, 17vh), 150px);
    line-height: 0.95;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0 0.1em;
    background: linear-gradient(
      100deg,
      #f59e0b 0%,
      #facc15 30%,
      #fde68a 42%,
      #ffffff 50%,
      #fde68a 58%,
      #facc15 70%,
      #f59e0b 100%
    );
    background-size: 300% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 0 26px rgba(250, 204, 21, 0.65))
      drop-shadow(0 4px 0 rgba(120, 53, 15, 0.55));
  }
  .lc-title-slam {
    animation:
      ceremony-slam 560ms cubic-bezier(0.2, 0.9, 0.3, 1.2) both,
      lc-sweep 1100ms ease-in-out 420ms both;
  }
  @keyframes lc-sweep {
    from {
      background-position: 100% 0;
    }
    to {
      background-position: 0 0;
    }
  }
  .lc-title-final {
    background-position: 0 0;
  }
  .lc-rule {
    width: min(520px, 80vw);
    height: 2px;
    margin-top: 14px;
    background: linear-gradient(
      90deg,
      transparent,
      #facc15 20%,
      #fde68a 50%,
      #facc15 80%,
      transparent
    );
  }
  .lc-rule-in {
    animation: lc-rule 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }
  @keyframes lc-rule {
    from {
      transform: scaleX(0);
      opacity: 0;
    }
  }
  .lc-line {
    margin-top: 12px;
    padding: 0 16px;
    font-size: clamp(14px, 1.6vw, 18px);
    color: rgba(255, 247, 214, 0.88);
    letter-spacing: 0.02em;
    text-align: center;
  }
  .lc-line b {
    color: #fde68a;
    font-weight: 800;
  }
  .lc-seg {
    white-space: nowrap;
  }
  .lc-dot {
    color: rgba(250, 204, 21, 0.6);
    margin: 0 0.5em;
  }
  .lc-rise {
    animation: lc-rise 600ms ease-out both;
  }
  @keyframes lc-rise {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
  }
  .lc-share {
    margin-top: 24px;
    padding: 0 16px;
  }
  .lc-actions {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .lc-continue {
    border: 0;
    padding: 12px 44px;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1c1917;
    background: linear-gradient(180deg, #fde68a, #f59e0b);
    cursor: pointer;
    clip-path: polygon(
      10px 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%,
      0 10px
    );
    box-shadow: 0 0 24px rgba(250, 204, 21, 0.45);
  }
  @media (max-width: 640px) {
    .lc-title {
      letter-spacing: 0.03em;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .lc-root,
    .lc-root * {
      animation: none !important;
    }
    .lc-root {
      animation: ceremony-fade-in 400ms ease-out both !important;
    }
    .lc-backdrop {
      filter: brightness(0.32) saturate(0.8);
    }
    .lc-hx-idle .hx {
      opacity: 0.2;
    }
  }
</style>`;export{v as LEGEND_CEREMONY_MS,_ as LEGEND_IDLE_MS,g as LEGEND_LANDED_MS,T as LegendCeremony,b as legendCeremonySeen,x as markLegendCeremonySeen};