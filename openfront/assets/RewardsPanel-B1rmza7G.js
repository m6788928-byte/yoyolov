import{Ai as e,Bi as t,Ei as n,Kr as r,Lo as i,Mi as a,Ni as o,Oi as s,Or as c,Ri as l,ji as u,k as d,kr as f,qr as p,va as m}from"./index-xDRx6PtE.js";import"./CapIcon-BSh7ps9d.js";import"./PlutoniumIcon-DwFXc8EK.js";var h=class extends o{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let t=await f(e.id);if(t===!1){await n(m(`account_modal.claim_failed`));return}if(p(),t!==`not_found`&&`held`in t){let n=await r(),a=n===!1?this.rewards:n.player.rewards??[];this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:a.map(n=>n.id===e.id&&i(n)?{...n,held:t.held}:n)});return}if(t===`not_found`){let t=await r();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:t.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await c();if(e===!1){await n(m(`account_modal.claim_failed`));return}p(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let t=d(e.reason);return t===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?m(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?m(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?m(`account_modal.reward_daily`):e.reason:m(t)}renderReward(e){let t=e.currencyType===`hard`;return l`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?l`<plutonium-icon .size=${20}></plutonium-icon>`:l`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${i(e)?l`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:l`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?m(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=t.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!i(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>l`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${m(e)}
        </p>`)}render(){if(this.rewards.length===0)return l``;let e=this.rewards.filter(i);return l`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${m(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?l`<o-button
                  variant="primary"
                  size="xs"
                  translationKey="account_modal.claim_all"
                  .disable=${this.claiming}
                  @click=${this.handleClaimAll}
                ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
        ${this.renderHeldNotes()}
      </div>
    `}};s([u({type:Array})],h.prototype,`rewards`,void 0),s([u({type:Boolean})],h.prototype,`signedIn`,void 0),s([e()],h.prototype,`claiming`,void 0),h=s([a(`rewards-panel`)],h);