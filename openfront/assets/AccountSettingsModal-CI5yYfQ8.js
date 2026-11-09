import{Ai as e,Bi as t,Ei as n,Fi as r,Ka as i,La as a,Mi as o,Ni as s,Oi as c,Pi as l,Pr as u,Qr as d,Ri as f,Ti as p,Wr as m,_i as h,ei as g,ji as _,jr as v,li as y,qi as b,ti as x,va as S,xi as C}from"./index-xDRx6PtE.js";import{n as w,t as T}from"./LinkResult-Pqd6kfqB.js";import{n as E}from"./OwnLevelBadge-CoroauRn.js";import{t as D}from"./StyledSelect-DPidSi-H.js";import{t as O}from"./ProfileMenuModal-B5NUC3Bw.js";var k=class extends s{constructor(...e){super(...e),this.typedWord=``,this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(l(f``,this.portal),this.portal.remove(),null)}render(){return this.portal&&l(this.renderOverlay(),this.portal),f``}confirmWord(){return S(`account_modal.delete_account_confirm_word`)}wordMatches(){return this.typedWord.trim().toUpperCase()===this.confirmWord().toUpperCase()}renderOverlay(){let e=this.confirmWord();return f`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-red-500/50 bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-2">
            ${S(`account_modal.delete_account_title`)}
          </h2>
          <p class="text-sm font-medium text-red-300 mb-5">
            ${S(`account_modal.delete_account_warning`)}
          </p>
          <label class="block mb-5">
            <span class="text-white/50 text-xs">
              ${S(`account_modal.delete_account_type_to_confirm`,{word:e})}
            </span>
            <input
              type="text"
              .value=${this.typedWord}
              @input=${e=>this.typedWord=e.target.value}
              placeholder=${e}
              autocomplete="off"
              class="mt-1.5 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm"
            />
          </label>
          <div class="flex gap-3">
            <button
              @click=${()=>this.handleCancel()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              ${S(`common.cancel`)}
            </button>
            <button
              @click=${()=>this.handleConfirm()}
              ?disabled=${!this.wordMatches()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
            >
              ${S(`account_modal.delete_account_confirm_button`)}
            </button>
          </div>
        </div>
      </div>
    `}handleConfirm(){this.wordMatches()&&this.dispatchEvent(new CustomEvent(`confirm`))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`))}};c([e()],k.prototype,`typedWord`,void 0),k=c([o(`delete-account-dialog`)],k);var A=class extends s{constructor(...e){super(...e),this.audiences=[],this.audience=``,this.token=null,this.busy=!1,this.copied=!1,this.errorKey=null,this.expiryTimer=null,this.handleAudienceChange=e=>{this.audience=e,this.clearToken(),this.errorKey=null},this.handleGenerate=async()=>{if(this.busy)return;this.busy=!0,this.errorKey=null,this.clearToken();let e=this.audience,t=await v(e);if(this.busy=!1,e!==this.audience)return;if(!t.ok){this.errorKey=t.code===`rate_limited`?`account_modal.identity_token_rate_limited`:t.code===`logged_out`?`account_modal.identity_token_logged_out`:`account_modal.identity_token_failed`;return}this.token=t.data.token;let n=Date.parse(t.data.expiresAt)-Date.now();this.expiryTimer=setTimeout(()=>this.clearToken(),Math.max(n,0))},this.handleCopy=async()=>{if(this.token)try{await b(this.token,()=>this.copied=!0,()=>this.copied=!1)}catch{}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadAudiences()}disconnectedCallback(){this.clearToken(),super.disconnectedCallback()}async loadAudiences(){let e=await m();this.audiences=e,e.includes(this.audience)||(this.audience=e[0]??``,this.clearToken())}render(){return this.audiences.length===0?r:f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="text-white font-medium">
          ${S(`account_modal.identity_token_title`)}
        </div>
        <div class="text-white/50 text-sm mt-1">
          ${S(`account_modal.identity_token_desc`)}
        </div>
        <div class="mt-4 flex items-center gap-3">
          ${D({options:this.audiences.map(e=>({value:e,label:e})),value:this.audience,onChange:this.handleAudienceChange,ariaLabel:S(`account_modal.identity_token_site`),className:`flex-1`})}
          <o-button
            variant="primary"
            size="sm"
            translationKey="account_modal.identity_token_generate"
            .disable=${this.busy}
            @click=${this.handleGenerate}
          ></o-button>
        </div>
        ${this.errorKey?f`<div class="text-red-400 text-sm mt-3">
                ${S(this.errorKey)}
              </div>`:r}
        ${this.token?this.renderToken(this.token):r}
      </div>
    `}renderToken(e){return f`
      <div class="mt-4 flex items-center gap-3">
        <input
          type="text"
          readonly
          .value=${e}
          aria-label=${S(`account_modal.identity_token_title`)}
          @focus=${e=>e.target.select()}
          class="flex-1 min-w-0 px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-blue-500"
        />
        <o-button
          variant="secondary"
          size="sm"
          translationKey=${this.copied?`account_modal.identity_token_copied`:`account_modal.identity_token_copy`}
          @click=${this.handleCopy}
        ></o-button>
      </div>
      <div class="text-white/50 text-xs mt-2">
        ${S(`account_modal.identity_token_note`,{site:this.audience})}
      </div>
    `}clearToken(){this.expiryTimer!==null&&(clearTimeout(this.expiryTimer),this.expiryTimer=null),this.token=null,this.copied=!1}};c([e()],A.prototype,`audiences`,void 0),c([e()],A.prototype,`audience`,void 0),c([e()],A.prototype,`token`,void 0),c([e()],A.prototype,`busy`,void 0),c([e()],A.prototype,`copied`,void 0),c([e()],A.prototype,`errorKey`,void 0),A=c([o(`identity-token-card`)],A);var j={levelHidden:{save:e=>d(e),failedKey:`account_modal.level_visibility_failed`},searchHidden:{save:e=>x(e),failedKey:`account_modal.search_visibility_failed`}},M=class extends s{constructor(...e){super(...e),this.player=null,this.user=null,this.email=``,this.consentBusy=!1,this.privacyBusy={levelHidden:!1,searchHidden:!1},this.deleteDialogOpen=!1,this.deleteBusy=!1,this.handleDeleteAccount=async()=>{if(this.deleteDialogOpen=!1,this.deleteBusy)return;this.deleteBusy=!0;let e=await u();if(this.deleteBusy=!1,e.ok){y(),await n(S(`account_modal.delete_account_scheduled`)),window.location.replace(`/`);return}if(e.code===`logged_out`){y(),window.location.replace(`/`);return}e.code===`forbidden`&&e.message!==void 0?await n(e.message):e.code===`rate_limited`?await n(S(`account_modal.delete_account_rate_limited`)):await n(S(`account_modal.delete_account_failed`))},this.handleEmailInput=e=>{this.email=e.target.value},this.handleSubmit=async()=>{if(!this.email){await n(S(`account_modal.enter_email_address`));return}await n(await C(this.email)?S(`account_modal.recovery_email_sent`,{email:this.email}):S(`account_modal.failed_to_send_recovery_email`))},this.handleLinkGoogle=async()=>{await h()||await n(S(`account_modal.link_google_failed`))}}createRenderRoot(){return this}closeDialogs(){this.deleteDialogOpen=!1}disconnectedCallback(){this.closeDialogs(),super.disconnectedCallback()}isSteamPrimary(){return i(this.user??void 0)}render(){return f`
      <div class="flex flex-col gap-6">
        ${this.renderMarketingCard()} ${this.renderPrivacyCard()}
        <identity-token-card></identity-token-card>
        ${this.renderDeleteAccountCard()}
      </div>
    `}renderMarketingCard(){let e=this.player?.marketingConsent;if(!e)return r;let t=e.hasEmail,n=e.consented===`approved`,i=!t&&this.isSteamPrimary();return f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <!-- Centred against the title+description block, like the delete card. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${S(`account_modal.marketing_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${S(t?`account_modal.marketing_desc`:i?`account_modal.marketing_no_email_steam`:`account_modal.marketing_no_email`)}
            </div>
          </div>
          ${t||i?f`<button
                  role="switch"
                  aria-checked=${n?`true`:`false`}
                  aria-label=${S(`account_modal.marketing_title`)}
                  ?disabled=${this.consentBusy||i}
                  @click=${()=>this.setConsent(!n)}
                  class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${n?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${n?`translate-x-6`:`translate-x-1`}"
                  ></span>
                </button>`:r}
        </div>
        ${t||this.isSteamPrimary()?r:this.renderEmailBinding()}
      </div>
    `}renderPrivacyCard(){let e=this.player?.levelHidden,t=this.player?.searchHidden;return e===void 0&&t===void 0?r:f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div
          class="text-xs text-white/40 uppercase tracking-widest font-bold mb-4"
        >
          ${S(`account_modal.privacy_title`)}
        </div>
        ${e===void 0?r:f`${this.renderPrivacySwitchRow(S(`account_modal.level_visibility_title`),S(`account_modal.level_visibility_desc`),!e,this.privacyBusy.levelHidden,e=>this.setPrivacyShown(`levelHidden`,e))}
              ${this.renderLevelPreview(!e)}`}
        ${t===void 0?r:f`<div
                class=${e===void 0?``:`mt-4 pt-4 border-t border-white/10`}
              >
                ${this.renderPrivacySwitchRow(S(`account_modal.search_visibility_title`),S(`account_modal.search_visibility_desc`),!t,this.privacyBusy.searchHidden,e=>this.setPrivacyShown(`searchHidden`,e))}
              </div>`}
      </div>
    `}renderPrivacySwitchRow(e,t,n,r,i){return f`
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1">
          <div class="text-white font-medium">${e}</div>
          <div class="text-white/50 text-sm mt-1">${t}</div>
        </div>
        <button
          role="switch"
          aria-checked=${n?`true`:`false`}
          aria-label=${e}
          ?disabled=${r}
          @click=${()=>i(!n)}
          class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${n?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${n?`translate-x-6`:`translate-x-1`}"
          ></span>
        </button>
      </div>
    `}renderLevelPreview(e){let t=this.player?.progress;return t===void 0?r:f`
      <div
        class="level-visibility-preview mt-4 flex items-center gap-3 rounded-lg bg-black/20 border border-white/5 px-4 py-3"
        aria-hidden="true"
      >
        <span
          class="text-[10px] uppercase tracking-widest font-bold text-white/40"
          >${S(`account_modal.level_visibility_others_see`)}</span
        >
        <span class="flex items-center gap-1.5 text-white font-semibold">
          ${e?f`<level-badge
                  class="shrink-0"
                  .level=${t.level}
                  .prestige=${t.prestige}
                  ?legend=${t.legend}
                  size="24"
                ></level-badge>`:r}
          ${this.player?.username??``}
        </span>
        ${e?r:f`<span class="ml-auto text-xs text-white/40"
                >${S(`account_modal.level_visibility_hidden`)}</span
              >`}
      </div>
    `}renderEmailBinding(){return f`
      <div class="mt-4 space-y-3">
        ${this.renderEmailField()}
        <div class="flex items-center gap-4 py-1">
          <div class="h-px bg-white/10 flex-1"></div>
          <span
            class="text-[10px] uppercase tracking-widest text-white/30 font-bold"
          >
            ${S(`account_modal.or`)}
          </span>
          <div class="h-px bg-white/10 flex-1"></div>
        </div>
        ${this.user?.google?r:w(this.handleLinkGoogle,a()?`account_modal.link_google_on_web`:`account_modal.link_google`)}
      </div>
    `}renderEmailField(){return f`
      <input
        type="email"
        .value=${this.email}
        @input=${this.handleEmailInput}
        placeholder=${S(`account_modal.email_placeholder`)}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10"
      />
      <o-button
        variant="primary"
        width="block"
        size="md"
        translationKey="account_modal.get_magic_link"
        @click=${this.handleSubmit}
      ></o-button>
    `}renderDeleteAccountCard(){return t.isOnGamePortal()||p.isOnSteam()?r:f`
      <div class="bg-white/5 rounded-xl border border-red-500/30 p-6">
        <!-- The button is one line against a two-line block, so centre it
             rather than pinning it to the first line. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${S(`account_modal.delete_account_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${S(`account_modal.delete_account_desc`)}
            </div>
          </div>
          <o-button
            variant="danger"
            size="sm"
            translationKey="account_modal.delete_account_title"
            .disable=${this.deleteBusy}
            @click=${()=>{this.deleteDialogOpen=!0}}
          ></o-button>
        </div>
      </div>
      ${this.deleteDialogOpen?f`<delete-account-dialog
              @confirm=${this.handleDeleteAccount}
              @cancel=${()=>{this.deleteDialogOpen=!1}}
            ></delete-account-dialog>`:r}
    `}async setConsent(e){let t=this.player?.marketingConsent;if(!t||!t.hasEmail||this.consentBusy)return;let n=t.consented,r=e?`approved`:`denied`;n!==r&&(this.consentBusy=!0,t.consented=r,this.requestUpdate(),await g(e)||(t.consented=n),this.consentBusy=!1,this.requestUpdate())}async setPrivacyShown(e,t){let r=this.player;if(!r||r[e]===void 0||this.privacyBusy[e])return;let i=r[e],a=!t;if(i===a)return;let o=j[e];this.privacyBusy={...this.privacyBusy,[e]:!0},r[e]=a;let s=await o.save(a);r[e]=s.ok?s.hidden:i,this.privacyBusy={...this.privacyBusy,[e]:!1},s.ok&&e===`levelHidden`&&E(),!s.ok&&s.code===`failed`&&await n(S(o.failedKey))}};c([_({attribute:!1})],M.prototype,`player`,void 0),c([_({attribute:!1})],M.prototype,`user`,void 0),c([e()],M.prototype,`email`,void 0),c([e()],M.prototype,`consentBusy`,void 0),c([e()],M.prototype,`privacyBusy`,void 0),c([e()],M.prototype,`deleteDialogOpen`,void 0),c([e()],M.prototype,`deleteBusy`,void 0),M=c([o(`account-settings-panel`)],M);var N=class extends O{constructor(...e){super(...e),this.routerName=`account-settings`,this.titleKey=`account_settings_modal.title`}renderSignedIn(e){return f`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <account-settings-panel
            .player=${e.player}
            .user=${e.user}
          ></account-settings-panel>
        </div>
      </div>
    `}onOpenExtra(e){T(e)}onClose(){this.querySelector(`account-settings-panel`)?.closeDialogs()}};N=c([o(`account-settings-modal`)],N);export{N as AccountSettingsModal};