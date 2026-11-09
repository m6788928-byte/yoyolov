import{Ai as e,Di as t,Dr as n,Ei as r,Fi as i,Io as a,Jr as o,La as s,Mi as c,Ni as l,Oi as u,Ri as d,Ro as f,ar as p,ji as m,qr as h,va as g,vr as _,yr as v}from"./index-xDRx6PtE.js";import"./PlutoniumIcon-DwFXc8EK.js";import{t as y}from"./ProfileMenuModal-B5NUC3Bw.js";var b=[`free_play.full_game`,`free_play.ranked`,`free_play.custom_lobbies`,`free_play.account`];function x(e,t=!1){let n=[...b,...t?[`free_play.licence_public_lobbies`,`free_play.licence_verified_name`]:[],...s()?[`free_play.ad_free_steam`]:[]];return d`
    <div class="flex flex-col gap-1.5">
      <div class="text-[10px] uppercase tracking-wider text-white/50">
        ${g(e)}
      </div>
      <ul class="flex flex-col gap-1 text-sm text-white/70">
        ${n.map(e=>d`
            <li class="flex gap-2 leading-snug">
              <span class="text-emerald-400 shrink-0" aria-hidden="true"
                >✓</span
              >
              <span>${g(e)}</span>
            </li>
          `)}
      </ul>
    </div>
  `}var S=new Set([`canceled`,`expired`,`incomplete`,`incomplete_expired`,`past_due`,`paused`,`unpaid`]),C=class extends l{constructor(...e){super(...e),this.cosmetic=null,this.steamLicence=!1,this.handleManage=async()=>{let e=await o();if(e===!1){await r(g(`account_modal.subscription_portal_failed`));return}window.open(e,`_blank`,`noopener,noreferrer`)},this.handleChangeTier=()=>{this.dispatchEvent(new CustomEvent(`request-close`,{bubbles:!0,composed:!0})),window.location.hash=`modal=store&tab=subscriptions`},this.handleCancel=async()=>{if(await t(this.isSteam()?this.steamText(`account_modal.cancel_subscription_confirm_steam`,`account_modal.cancel_subscription_confirm_steam_no_date`):g(`account_modal.cancel_subscription_confirm`),{heading:g(`account_modal.cancel_subscription`)})){if(!await n()){await r(g(`account_modal.cancel_subscription_failed`));return}await r(this.isSteam()?this.steamText(`account_modal.cancel_subscription_success_steam`,`account_modal.cancel_subscription_success_steam_no_date`):g(`account_modal.cancel_subscription_success`)),h(),this.reloadPage()}},this.reloadPage=()=>{window.location.reload()}}createRenderRoot(){return this}steamText(e,t){let n=this.periodEnd();return n?g(e,{date:n}):g(t)}periodEnd(){return this.sub.currentPeriodEnd?this.sub.currentPeriodEnd.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):null}isGranted(){return a(this.sub)}isSteam(){return this.sub.provider===`steam`}renderStatusPill(){let e=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border`;if(this.sub.cancelAtPeriodEnd)return d`<span
        class="${e} bg-amber-500/10 border-amber-500/30 text-amber-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${g(`account_modal.sub_status_canceling`)}
      </span>`;let t=!S.has(this.sub.status),n=g(`account_modal.sub_status_${this.sub.status}`),r=n.startsWith(`account_modal.sub_status_`)?this.sub.status:n;return d`<span
      class="${e} ${t?`bg-green-500/10 border-green-500/30 text-green-300`:`bg-white/5 border-white/15 text-white/60`}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full ${t?`bg-green-400`:`bg-white/40`}"
      ></span>
      ${r}
    </span>`}renderPeriodLine(e){let t=this.periodEnd();if(!t)return i;if(this.isGranted())return this.renderDateLine(g(`account_modal.sub_granted_perks_end_on`,{tier:e,date:t}),!1);let n=this.sub.cancelAtPeriodEnd?`account_modal.sub_status_canceling_on`:`account_modal.sub_renews_on`;return this.renderDateLine(g(n,{date:t}),this.sub.cancelAtPeriodEnd)}renderDateLine(e,t){return d`<div
      class="flex items-center gap-2 text-sm ${t?`text-amber-200/80`:`text-white/50`}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </svg>
      <span>${e}</span>
    </div>`}renderPerk(e,t){return d`
      <div
        class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5"
      >
        <plutonium-icon .size=${24}></plutonium-icon>
        <div class="flex flex-col min-w-0">
          <span class="text-sm font-bold text-white leading-tight"
            >${e.toLocaleString()}</span
          >
          <span
            class="text-[10px] uppercase tracking-wider text-white/50 leading-tight"
            >${g(t)}</span
          >
        </div>
      </div>
    `}renderManageOnWeb(){return d`
      <p class="text-[11px] text-center text-white/40 leading-snug">
        ${g(`account_modal.manage_subscription_on_web`)}
      </p>
    `}renderGrantedNote(e){return f(this.sub)?d`
      <div class="flex flex-col gap-3">
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${g(`account_modal.sub_granted_from_purchase`,{tier:e})}
        </p>
        ${x(`free_play.after_grant_heading`,this.steamLicence)}
      </div>
    `:d`
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${g(`account_modal.sub_granted_indefinite`)}
        </p>
      `}renderSteamActions(){let e=d`<o-button
      class="flex-1 min-w-[8rem]"
      variant="secondary"
      width="block"
      size="md"
      translationKey="account_modal.manage_subscription"
      @click=${this.handleManage}
    ></o-button>`;return this.sub.cancelAtPeriodEnd?d`<div class="flex flex-col gap-2">
        ${e}
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${this.steamText(`account_modal.manage_subscription_on_steam_ending`,`account_modal.manage_subscription_on_steam_ending_no_date`)}
        </p>
      </div>`:d`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          ${i}
          ${e}
        </div>
        ${d`<p
      class="text-[11px] text-center text-white/40 leading-snug"
    >
      ${g(`account_modal.manage_subscription_on_steam_no_tier_change`)}
    </p>`}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${g(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}renderActions(e){if(this.isGranted())return this.renderGrantedNote(e);if(this.isSteam())return this.renderSteamActions();let t=s();return this.sub.status===`past_due`?d`
        <div class="flex flex-col gap-2">
          <p class="text-sm text-amber-200/80 leading-snug">
            ${g(`account_modal.sub_past_due_note`,{tier:e})}
          </p>
          ${t?this.renderManageOnWeb():d`<o-button
                  variant="primary"
                  width="block"
                  size="md"
                  translationKey="store.manage_billing"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
      `:this.sub.cancelAtPeriodEnd?t?this.renderManageOnWeb():d`
        <o-button
          variant="primary"
          width="block"
          size="md"
          translationKey="account_modal.reactivate_subscription"
          @click=${this.handleManage}
        ></o-button>
      `:d`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          <o-button
            class="flex-1 min-w-[8rem]"
            variant="primary"
            width="block"
            size="md"
            translationKey="account_modal.change_tier"
            @click=${this.handleChangeTier}
          ></o-button>
          ${t?i:d`<o-button
                  class="flex-1 min-w-[8rem]"
                  variant="secondary"
                  width="block"
                  size="md"
                  translationKey="account_modal.manage_subscription"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
        ${t?this.renderManageOnWeb():i}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${g(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}render(){let{sub:e,cosmetic:t}=this,n=v(`subscriptions`,t?.name??e.tier);return d`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="text-xl font-bold text-white leading-tight">
                ${n}
              </div>
              ${t?.product?.price?d`<div class="text-sm text-white/50">
                      ${g(`account_modal.sub_price_monthly`,{price:t.product.price})}
                    </div>`:``}
            </div>
            ${this.renderStatusPill()}
          </div>

          ${t?.description?d`<p class="text-sm text-white/70 leading-relaxed">
                  ${t.description}
                </p>`:``}
          ${t?d`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${this.renderPerk(t.hardCurrencySignupBonus,`cosmetics.per_month`)}
                  ${this.renderPerk(t.dailyHardCurrency,`cosmetics.per_day`)}
                </div>`:``}
          ${this.renderPeriodLine(n)}

          <div class="border-t border-white/10 pt-4">
            ${this.renderActions(n)}
          </div>
        </div>
      </div>
    `}};u([m({type:Object})],C.prototype,`sub`,void 0),u([m({type:Object})],C.prototype,`cosmetic`,void 0),u([m({type:Boolean})],C.prototype,`steamLicence`,void 0),C=u([c(`subscription-panel`)],C);var w=class extends y{constructor(...e){super(...e),this.routerName=`subscription`,this.titleKey=`subscription_modal.title`,this.cosmetics=null}renderSignedIn(e){let t=e.player.pastDueSubscription,n=e.player.subscription??(t?{tier:t.tier,status:`past_due`,currentPeriodEnd:null,cancelAtPeriodEnd:!1,provider:`stripe`}:null);return n?d`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <subscription-panel
            .sub=${n}
            .cosmetic=${_(this.cosmetics,n.tier)}
            .steamLicence=${e.steamLicence}
            @request-close=${()=>this.close()}
          ></subscription-panel>
        </div>
      </div>
    `:d`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
          >
            <p class="text-white/60 text-sm">
              ${g(`subscription_modal.none`)}
            </p>
            <div class="w-full text-left rounded-lg bg-white/5 px-4 py-3">
              ${e.steamLicence?x(`free_play.licence_heading`,!0):x(`free_play.free_heading`)}
            </div>
            <o-button
              variant="primary"
              size="md"
              translationKey="subscription_modal.browse"
              @click=${()=>{this.close(),window.location.hash=`modal=store&tab=subscriptions`}}
            ></o-button>
          </div>
        </div>
      `}onOpenExtra(){p().then(e=>{this.cosmetics=e})}};u([e()],w.prototype,`cosmetics`,void 0),w=u([c(`subscription-modal`)],w);export{w as SubscriptionModal};