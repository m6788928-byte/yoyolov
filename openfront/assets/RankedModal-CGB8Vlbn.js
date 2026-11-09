import{Ai as e,Bi as t,Bn as n,Kr as r,Ln as i,Mi as a,Oi as o,Ri as s,Rn as c,ln as l,qa as u,un as d,va as f,wi as p}from"./index-xDRx6PtE.js";var m=class extends d{isRankedEligible(){return u(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=f(`map_component.error`),this.elo2v2=f(`map_component.error`),this.eloFfa=f(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=f(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t,this.eloFfa=e?.ffa?.elo??t}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.eloFfa=`...`,this.errorMessage=null;try{let e=await r();this.userMeResponse=e,this.portalSignedIn=t.isOnGamePortal()&&await t.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=f(`map_component.error`),this.elo=f(`map_component.error`),this.elo2v2=f(`map_component.error`),this.eloFfa=f(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return l({title:f(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:f(`common.back`)})}renderBody(){return s`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(f(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?f(`matchmaking_modal.elo`,{elo:this.elo}):f(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(f(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?f(`matchmaking_modal.elo`,{elo:this.elo2v2}):f(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(f(`mode_selector.ranked_ffa_title`),this.errorMessage??(this.isRankedEligible()?f(`matchmaking_modal.elo`,{elo:this.eloFfa}):f(`mode_selector.ranked_title`)),()=>this.handleRanked(`ffa`))}
          ${this.renderCard(f(`mode_selector.ranked_clanwars_title`),this.errorMessage??f(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`))}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${f(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?c(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(e,t,r){return s`
      <button
        @click=${r}
        class="relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest leading-tight"
          >
            ${e}
          </h3>
          <p
            class="text-xs text-white/80 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${t}
          </p>
        </div>
        ${this.trustKnown()?i(n(this.userMeResponse),{tooltipTitle:f(`mode_selector.ranked_trust_tooltip_title`)}):``}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(e){if(this.trustKnown()&&!n(this.userMeResponse)){this.showTrustRequired=!0;return}if(await p()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:e}}))}};o([e()],m.prototype,`elo`,void 0),o([e()],m.prototype,`elo2v2`,void 0),o([e()],m.prototype,`eloFfa`,void 0),o([e()],m.prototype,`userMeResponse`,void 0),o([e()],m.prototype,`errorMessage`,void 0),o([e()],m.prototype,`loading`,void 0),o([e()],m.prototype,`showTrustRequired`,void 0),o([e()],m.prototype,`portalSignedIn`,void 0),m=o([a(`ranked-modal`)],m);export{m as RankedModal};