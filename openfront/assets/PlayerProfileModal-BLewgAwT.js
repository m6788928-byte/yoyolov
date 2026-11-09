const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RewardTrack-q2iZv1PQ.js","./index-xDRx6PtE.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-6Yf9fRSv.css","./CapIcon-BSh7ps9d.js","./PlutoniumIcon-DwFXc8EK.js"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,Ai as n,Bo as r,Br as i,Ei as a,Fi as o,Ht as s,J as c,Ja as l,Jn as ee,Jo as te,Kr as u,Kt as ne,Li as re,Mi as d,Ni as f,No as ie,O as ae,Oi as p,Pi as m,Q as oe,Qn as se,Qt as ce,R as le,Ri as h,S as ue,St as de,T as fe,Ua as pe,Ut as me,Wt as he,X as ge,Y as _e,Yi as ve,Z as ye,_t as be,a as xe,ar as Se,at as Ce,bt as we,dn as g,dt as Te,es as Ee,et as De,fa as Oe,fn as ke,fs as _,ft as Ae,g as je,gt as Me,ha as v,hr as Ne,ht as Pe,is as y,it as Fe,ji as b,jo as x,ki as Ie,kr as Le,ln as S,lt as C,mt as Re,nt as ze,o as Be,ot as Ve,pn as He,pt as Ue,qi as We,qo as Ge,qr as w,qt as Ke,rr as qe,rs as Je,rt as Ye,st as Xe,ta as Ze,tt as Qe,un as $e,ut as et,v as tt,va as T,vt as nt,wi as rt,xs as it,xt as at,y as ot,yt as st,z as ct,zr as lt,zt as ut}from"./index-xDRx6PtE.js";import"./CopyButton-CBG6NS74.js";import{t as E}from"./Format-Dhp90E0J.js";import"./CapIcon-BSh7ps9d.js";import"./PlutoniumIcon-DwFXc8EK.js";import{t as dt}from"./CurrencyDisplay-BPruH0jP.js";import"./LeaderboardTribeTable-D41j92RB.js";import{t as ft}from"./RewardClaims-BNb2E-Hd.js";import{c as pt,l as mt}from"./CosmeticPreview-DoGk_eKX.js";import{n as ht,r as gt,t as _t}from"./GameStatsModal-XCQwU2EY.js";import{n as vt,r as yt}from"./LeaderboardModal-BjRGvmf5.js";import{t as bt}from"./SignedOutNotice-CiQP_3yK.js";import"./ProfileShare-C6Mo_FqJ.js";function xt(e){return e.mode===Je.FFA||e.mode===void 0&&(e.playerTeams===null||e.playerTeams===void 0)}function St(e){if(e.rankedType&&e.rankedType!==`unranked`)return T(`clan_modal.history_type_ranked`,{ranked:e.rankedType});if(xt(e))return T(`clan_modal.history_type_ffa`);let t=e.playerTeams;return t===`Humans Vs Nations`?T(`clan_modal.history_type_hvn`):t===`Duos`||t===`Trios`||t===`Quads`?T(`clan_modal.history_type_${t.toLowerCase()}`):t&&/^\d+$/.test(t)?T(`clan_modal.history_type_n_teams`,{count:Number(t)}):T(`clan_modal.history_type_team`)}var Ct=x(`images/LeaderboardIconRegularWhite.svg`),wt=x(`images/ReplayRegularIconWhite.svg`),Tt=x(`images/LinkIconWhite.svg`),Et=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`public`,labelKey:`account_modal.games_type_public`},{key:`private`,labelKey:`account_modal.games_type_private`},{key:`singleplayer`,labelKey:`account_modal.games_type_singleplayer`}],Dt=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],D=class extends f{constructor(...e){super(...e),this.publicId=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.typeFilter=`all`,this.modeFilter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncToPublicId()}syncToPublicId(){this.cachedState&&this.cachedState.publicId===this.publicId?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.typeFilter=this.cachedState.typeFilter,this.modeFilter=this.cachedState.modeFilter,this.appendFailed=!1,this.loadState=`ok`):this.publicId&&(this.typeFilter=`all`,this.modeFilter=`all`,this.reload())}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}willUpdate(e){let t=e.get(`publicId`);e.has(`publicId`)&&t!==void 0&&t!==this.publicId&&this.syncToPublicId()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setTypeFilter(e){e!==this.typeFilter&&(this.typeFilter=e,this.reload())}setModeFilter(e){e!==this.modeFilter&&(this.modeFilter=e,this.reload())}async load({append:e}){if(!this.publicId)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=e?this.nextCursor??void 0:void 0,r=await lt(this.publicId,{filter:this.modeFilter===`all`?void 0:this.modeFilter,type:this.typeFilter===`all`?void 0:this.typeFilter,cursor:n});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in r){e?this.appendFailed=!0:(this.loadState=`failed`,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...r.results]:r.results,this.nextCursor=r.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{publicId:this.publicId,typeFilter:this.typeFilter,modeFilter:this.modeFilter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}watchReplay(e){this.dispatchEvent(new CustomEvent(`view-game`,{detail:{gameId:e},bubbles:!0,composed:!0}))}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let t=`${l.shareOrigin()}${l.gamePath(e)}`;try{await We(t),v(T(`common.copied`),`green`)}catch{v(T(`common.failed_copy`),`red`)}}render(){return h`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return h`
      <div class="space-y-2">
        ${this.renderFilterRow(Et,this.typeFilter,e=>this.setTypeFilter(e))}
        ${this.renderFilterRow(Dt,this.modeFilter,e=>this.setModeFilter(e))}
      </div>
    `}renderFilterRow(e,t,n){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let r=t===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${r}
              @click=${()=>n(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${r?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${T(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?g():this.loadState===`failed`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${T(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${T(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${T(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=gt(this.games),this.groupedFor=this.games),h`
      <div class="space-y-5">
        ${this.grouped.map(e=>h`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5 pointer-events-none"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${ht(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?h`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${T(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?h`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${T(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${T(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:h`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?g():``}
      </div>
    `}renderGameRow(e){let t=null;if(e.map)try{t=ee.getMapData(e.map).webpPath}catch{t=null}let n=e.map?Ze(e.map)??e.map:null;return h`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${t?h`<div
                class="relative w-full aspect-[30/15] overflow-hidden bg-surface"
              >
                <img
                  src=${t}
                  alt=${n??``}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                ${n?h`<div
                        class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                      >
                        ${n}
                      </div>`:``}
                <div class="absolute top-2 left-2">
                  ${this.renderResultBadge(e)}
                </div>
                <div
                  class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                >
                  ${_t(e.start)}
                </div>
              </div>`:``}
        <div
          class=${t?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${T(`game_list.stats`)}
              aria-label=${T(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ct}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${T(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${T(`common.click_to_copy`)}
              aria-label=${T(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Tt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${T(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${T(`clan_modal.history_watch_replay`)}
              aria-label=${T(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${wt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${T(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center text-center border-b border-white/5"
        >
          ${this.renderField(T(`account_modal.games_clan_tag`),e.clanTag??`—`)}
          ${this.renderField(T(`account_modal.username_title`),e.username)}
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(T(`clan_modal.history_game_type`),St(e))}
          ${t?``:this.renderField(T(`clan_modal.history_map`),n??`—`)}
          ${this.renderField(T(`clan_modal.history_players`),e.totalPlayers===null?`—`:`${e.totalPlayers}`)}
          ${this.renderField(T(`clan_modal.history_duration`),Oe(e.durationSeconds))}
        </div>
      </div>
    `}renderField(e,t){return h`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e){let t,n;return e.result===`victory`?(t=T(`clan_modal.history_result_victory`),n=`text-white bg-green-600 border-green-500`):e.result===`defeat`?(t=T(`clan_modal.history_result_defeat`),n=`text-white bg-red-600 border-red-500`):(t=T(`account_modal.games_result_incomplete`),n=`text-white bg-gray-500 border-gray-400`),h`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${n}"
      >${t}</span
    >`}};p([b()],D.prototype,`publicId`,void 0),p([b({type:Object})],D.prototype,`cachedState`,void 0),p([n()],D.prototype,`games`,void 0),p([n()],D.prototype,`nextCursor`,void 0),p([n()],D.prototype,`loading`,void 0),p([n()],D.prototype,`loadingMore`,void 0),p([n()],D.prototype,`loadState`,void 0),p([n()],D.prototype,`appendFailed`,void 0),p([n()],D.prototype,`typeFilter`,void 0),p([n()],D.prototype,`modeFilter`,void 0),D=p([d(`player-game-history-view`)],D);var Ot={city:1,port:2,fact:3,defp:4,silo:5,saml:6},kt=Object.keys(Ot).sort((e,t)=>Ot[e]-Ot[t]),At={city:`unit_type.city`,defp:`unit_type.defense_post`,fact:`unit_type.factory`,port:`unit_type.port`,saml:`unit_type.sam_launcher`,silo:`unit_type.missile_silo`,wshp:`unit_type.warship`,abomb:`unit_type.atom_bomb`,hbomb:`unit_type.hydrogen_bomb`,mirv:`unit_type.mirv`,mirvw:`player_stats_table.unit.mirvw`,trade:`player_stats_table.unit.trade`,trans:`player_stats_table.unit.trans`};function O(e,t,n,r){return h`
    <div class="w-full">
      <div
        class="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2"
      >
        ${T(e)}
      </div>
      <div class="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
        <table class="w-full table-fixed text-sm text-gray-300">
          <thead>
            <tr class="bg-white/5">
              ${r===void 0?o:h`<th
                      class="px-4 py-2 text-left font-semibold text-gray-400"
                    >
                      ${T(r)}
                    </th>`}
              ${t.map(e=>h`
                  <th class="px-3 py-2 text-center font-semibold text-gray-400">
                    ${T(e)}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${n.map(e=>h`
                <tr class="hover:bg-white/5 transition-colors">
                  ${e.label===void 0?o:h`<td
                          class="px-4 py-2 text-left font-medium text-white/80"
                        >
                          ${T(e.label)}
                        </td>`}
                  ${e.values.map(e=>h`
                      <td class="px-3 py-2 text-center text-white/60">
                        ${E(e)}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </div>
  `}var jt=[`player_stats_table.built`,`player_stats_table.destroyed`,`player_stats_table.captured`,`player_stats_table.lost`],Mt=class extends f{createRenderRoot(){return this}render(){let e=this.stats,t=(e,t)=>e?.[t]??0n,n=(e,n)=>Array.from({length:n},(n,r)=>t(e,r));return h`
      <div class="grid grid-cols-1 gap-6 w-full">
        ${O(`player_stats_table.building_stats`,jt,kt.map(t=>({label:At[t],values:n(e?.units?.[t],4)})),`player_stats_table.building`)}
        ${O(`player_stats_table.warship_stats`,jt,[{values:n(e?.units?.wshp,4)}])}
        ${O(`player_stats_table.ship_arrivals`,[`player_stats_table.sent`,`player_stats_table.arrived`,`player_stats_table.captured`,`player_stats_table.destroyed`],Ge.map(t=>({label:At[t],values:n(e?.boats?.[t],4)})),`player_stats_table.ship_type`)}
        <!-- Launched and Landed count missiles this player fired; Intercepted
        counts incoming missiles their SAMs shot down (bombIntercept credits
        the SAM owner), so the last column is defensive. -->
        ${O(`player_stats_table.nuke_stats`,[`player_stats_table.launched`,`player_stats_table.landed`,`player_stats_table.intercepted`],te.map(t=>({label:At[t],values:n(e?.bombs?.[t],3)})),`player_stats_table.weapon`)}
        ${O(`player_stats_table.attack_stats`,[`player_stats_table.sent`,`player_stats_table.incoming`,`player_stats_table.cancelled`],[{values:n(e?.attacks,3)}])}
        ${O(`player_stats_table.gold_stats`,[`player_stats_table.workers`,`player_stats_table.war`,`player_stats_table.trade`,`player_stats_table.piracy`,`player_stats_table.trains`,`player_stats_table.trains_external`],[{values:n(e?.gold,6)}])}
        ${O(`player_stats_table.diplomacy_stats`,[`player_stats_table.betrayals`],[{values:[e?.betrayals??0n]}])}
      </div>
    `}};p([b({type:Object})],Mt.prototype,`stats`,void 0),Mt=p([d(`player-stats-table`)],Mt);var Nt={cities:`player_stats_tree.stats_cities_per_game`,ports:`player_stats_tree.stats_ports_per_game`,factories:`player_stats_tree.stats_factories_per_game`,defensePosts:`player_stats_tree.stats_defense_posts_per_game`,transports:`player_stats_tree.stats_transports_sent_per_game`,landings:`player_stats_tree.stats_transports_landed_per_game`,tradeArrived:`player_stats_tree.stats_trade_arrived_per_game`,tradeCaptured:`player_stats_tree.stats_trade_captured_per_game`,outgoing:`player_stats_tree.stats_troops_sent_per_game`,incoming:`player_stats_tree.stats_troops_incoming_per_game`,nukes:`player_stats_tree.stats_nukes_launched_per_game`,warships:`player_stats_tree.stats_warships_built_per_game`,tradeGold:`player_stats_tree.stats_trade_gold_per_game`,piracyGold:`player_stats_tree.stats_piracy_gold_per_game`,trainGold:`player_stats_tree.stats_train_gold_per_game`,othersTrainGold:`player_stats_tree.stats_others_train_gold_per_game`},Pt={cities:`player_stats_table.built`,ports:`player_stats_table.built`,factories:`player_stats_table.built`,defensePosts:`player_stats_table.built`,transports:`player_stats_tree.stats_transports_sent_short`,landings:`player_stats_tree.stats_transports_landed_short`,tradeArrived:`player_stats_tree.stats_trade_arrived_short`,tradeCaptured:`player_stats_tree.stats_trade_captured_short`,outgoing:`player_stats_tree.stats_outgoing_short`,incoming:`player_stats_table.incoming`,nukes:`player_stats_table.launched`,warships:`player_stats_table.built`,tradeGold:`player_stats_table.trade`,piracyGold:`player_stats_table.piracy`,trainGold:`player_stats_table.trains`,othersTrainGold:`player_stats_table.trains_external`},Ft=[{heading:`player_stats_tree.stats_group_buildings`,keys:[`cities`,`ports`,`factories`,`defensePosts`]},{heading:`player_stats_tree.stats_group_naval`,keys:[`transports`,`landings`,`tradeArrived`,`tradeCaptured`]},{heading:`player_stats_tree.stats_group_combat`,keys:[`outgoing`,`incoming`,`nukes`,`warships`]},{heading:`player_stats_tree.stats_group_gold`,keys:[`tradeGold`,`piracyGold`,`trainGold`,`othersTrainGold`]}],It={city:`images/CityIconWhite.svg`,port:`images/PortIcon.svg`,factory:`images/FactoryIconWhite.svg`,defensePost:`images/ShieldIconWhite.svg`,transport:`images/BoatIconWhite.svg`,tradeShip:`images/TradeShipIconWhite.svg`,troop:`images/SoldierIcon.svg`,nuke:`images/NukeIconWhite.svg`,warship:`images/DestroyerIconWhite.svg`,gold:`images/GoldCoinIcon.svg`},Lt=new Set([`troop`]),Rt=`ml-1 inline-block h-[1em] w-[1em] object-contain`,zt={city:1.1,port:1.11,factory:1.1,warship:1.1,tradeShip:.5,gold:.9,nuke:.9},Bt={cities:`city`,ports:`port`,factories:`factory`,defensePosts:`defensePost`,transports:`transport`,landings:`transport`,tradeArrived:`tradeShip`,tradeCaptured:`tradeShip`,outgoing:`troop`,incoming:`troop`,nukes:`nuke`,warships:`warship`,tradeGold:`gold`,piracyGold:`gold`,trainGold:`gold`,othersTrainGold:`gold`},Vt=`text-emerald-300 border-emerald-400/20`,Ht=`text-blue-300 border-blue-400/20`,k=`text-rose-300 border-rose-400/20`,A=`text-amber-300 border-amber-400/20`,Ut={cities:Vt,ports:Vt,factories:Vt,defensePosts:Vt,transports:Ht,landings:Ht,tradeArrived:Ht,tradeCaptured:Ht,outgoing:k,incoming:k,nukes:k,warships:k,tradeGold:A,piracyGold:A,trainGold:A,othersTrainGold:A};function j(e,t){if(t<=0n)return`—`;let n=Number(e)/Number(t);return n>=1e3?E(n):n>=10?Math.round(n).toString():n.toFixed(1)}function Wt(e){let t=e.total,n=e.stats,r=n?.attacks?.[0]??0n,i=n?.attacks?.[1]??0n,a=n?.gold?.[2]??0n,o=n?.gold?.[3]??0n,s=n?.gold?.[4]??0n,c=n?.gold?.[5]??0n,l=n?.units?.city?.[0]??0n,ee=n?.units?.port?.[0]??0n,te=n?.units?.fact?.[0]??0n,u=n?.units?.defp?.[0]??0n,ne=n?.units?.wshp?.[0]??0n,re=(n?.bombs?.abomb?.[0]??0n)+(n?.bombs?.hbomb?.[0]??0n)+(n?.bombs?.mirv?.[0]??0n),d=n?.boats?.trans?.[0]??0n,f=n?.boats?.trans?.[1]??0n,ie=n?.boats?.trade?.[1]??0n,ae=n?.boats?.trade?.[2]??0n,p=e.recentGames??[],m=e.recent?.games??p.length,oe=e.recent?.wins??p.filter(e=>e.won).length;return{winRate:t>0n?`${(Number(e.wins)/Number(t)*100).toFixed(1)}%`:`—`,recentWinRate:m>0?`${(oe/m*100).toFixed(1)}%`:`—`,played:E(t),wins:E(e.wins),losses:E(e.losses),metrics:[{key:`cities`,value:j(l,t)},{key:`ports`,value:j(ee,t)},{key:`factories`,value:j(te,t)},{key:`defensePosts`,value:j(u,t)},{key:`transports`,value:j(d,t)},{key:`landings`,value:j(f,t)},{key:`tradeArrived`,value:j(ie,t)},{key:`tradeCaptured`,value:j(ae,t)},{key:`outgoing`,value:j(r,t)},{key:`incoming`,value:j(i,t)},{key:`nukes`,value:j(re,t)},{key:`warships`,value:j(ne,t)},{key:`tradeGold`,value:j(a,t)},{key:`piracyGold`,value:j(o,t)},{key:`trainGold`,value:j(s,t)},{key:`othersTrainGold`,value:j(c,t)}]}}var Gt=class extends f{createRenderRoot(){return this}renderMetric(e,t){let n=Pt[e],r=T(Nt[e]),i=Bt[e],a=`transform:scale(${zt[i]??1})${Lt.has(i)?`;filter:invert(1)`:``}`;return h`
      <div
        data-stat=${e}
        title=${r}
        class="min-w-0 rounded-xl border bg-white/5 px-3 py-3 text-center ${Ut[e]}"
      >
        <div
          data-label
          aria-hidden="true"
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${T(n)}
        </div>
        <span class="sr-only">${r}</span>
        <div
          class="mt-1 truncate text-2xl font-black leading-none tabular-nums"
        >
          ${t}<img
            data-unit
            src=${x(It[i])}
            style=${a}
            alt=""
            aria-hidden="true"
            class="${Rt} align-[-0.1em]"
          /><span data-per-game class="ml-1 text-xs font-semibold text-white/35"
            >${T(`player_stats_tree.stats_per_game_suffix`)}</span
          >
        </div>
      </div>
    `}render(){if(!this.leaf)return h``;let e=Wt(this.leaf),t=new Map(e.metrics.map(e=>[e.key,e.value])),n=this.leaf.recent?.games??this.leaf.recentGames?.length??0,r=this.leaf.total>100n&&n>0,i=[{key:`played`,label:`player_stats_tree.stats_played`,value:e.played,tone:`text-blue-300`},{key:`victories`,label:`player_stats_tree.stats_victories`,value:e.wins,tone:`text-emerald-300`},{key:`losses`,label:`player_stats_tree.stats_losses`,value:e.losses,tone:`text-rose-300`}];return h`
      <section
        class="space-y-3"
        aria-label=${T(`player_stats_tree.stats_summary`)}
      >
        <div
          data-win-rate
          class="relative overflow-hidden rounded-xl border border-malibu-blue/25 bg-gradient-to-br from-malibu-blue/15 via-white/5 to-transparent px-4 py-3"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-aquarius/10 blur-2xl"
          ></div>
          <div
            class="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,20rem)] sm:items-center"
          >
            <!-- Flex, not a 2-col grid: the halves of a grid would each take
            50% of this flexible column, so the two rates drift apart as the
            viewport widens. Flex sizes them to content and keeps the gap
            fixed. -->
            <div class="flex flex-wrap items-start gap-x-8 gap-y-3">
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                >
                  ${T(`player_stats_tree.stats_win_rate`)}
                </div>
                <div
                  class="mt-1 text-3xl font-black leading-none tabular-nums text-emerald-300"
                >
                  ${e.winRate}
                </div>
              </div>
              ${r?h`
                      <div data-last-100>
                        <div
                          class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                        >
                          ${T(`player_stats_tree.stats_last_100`)}
                        </div>
                        <div
                          class="mt-1 text-3xl font-black leading-none tabular-nums text-cyan-300"
                        >
                          ${e.recentWinRate}
                        </div>
                      </div>
                    `:o}
            </div>
            <div
              data-record-group
              class="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-inner shadow-black/20"
            >
              ${i.map((e,t)=>h`
                  <div
                    data-record-stat=${e.key}
                    class="min-w-0 px-2 py-3 text-center ${t===0?``:`border-l border-white/10`}"
                  >
                    <div
                      class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
                      title=${T(e.label)}
                    >
                      ${T(e.label)}
                    </div>
                    <div
                      class="mt-1 truncate text-xl font-black leading-none tabular-nums ${e.tone}"
                    >
                      ${e.value}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <div class="space-y-3">
          ${Ft.map(e=>h`
              <div data-metric-group=${e.heading}>
                <div
                  class="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/45"
                >
                  ${T(e.heading)}
                </div>
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  ${e.keys.map(e=>this.renderMetric(e,t.get(e)??`—`))}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};p([b({attribute:!1})],Gt.prototype,`leaf`,void 0),Gt=p([d(`player-stats-summary`)],Gt);var Kt=new Set,qt=new Set([3]),M=`all`,Jt=[y.Public,y.Private,`Ranked`,y.Singleplayer],N=class extends f{constructor(...e){super(...e),this.selectedType=M,this.selectedMode=M,this.selectedDifficulty=M,this.selectedRankedType=M}get typeNode(){if(!(this.selectedType===M||this.selectedType===`Ranked`))return this.statsTree?.[this.selectedType]}get availableTypes(){return this.statsTree?Jt.filter(e=>e===`Ranked`?Object.keys(this.statsTree?.Ranked??{}).length>0:Object.keys(this.statsTree?.[e]??{}).length>0):[]}get availableModes(){return this.typeNode?ie.filter(e=>this.typeNode?.[e]):[]}get availableRankedTypes(){return this.statsTree?.Ranked?Object.keys(this.statsTree.Ranked).filter(e=>Object.values(_).includes(e)):[]}get availableDifficulties(){if(!this.typeNode||this.selectedType===y.Public)return[];let e=this.selectedMode===M?this.availableModes:[this.selectedMode];return Object.values(Ee).filter(t=>e.some(e=>this.typeNode?.[e]?.[t]))}labelForMode(e){return e===Je.FFA?T(`game_mode.ffa`):e===Je.Team?T(`game_mode.teams`):T(`game_mode.hvn`)}labelForType(e){return e===M?T(`player_stats_tree.all`):e===`Ranked`?T(`player_stats_tree.ranked`):e===y.Public?T(`player_stats_tree.public`):e===y.Private?T(`player_stats_tree.private`):T(`player_stats_tree.solo`)}renderFilterRow(e){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e}
      </div>
    `}renderFilterTab(e,t,n,r){return h`
      <button
        type="button"
        role="tab"
        aria-selected=${t}
        title=${r??o}
        @click=${n}
        class="grow basis-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
      >
        ${e}
      </button>
    `}labelForRankedType(e){switch(e){case _.OneVOne:return T(`player_stats_tree.ranked_1v1`);case _.TwoVTwo:return T(`player_stats_tree.ranked_2v2`);case _.FreeForAll:return T(`player_stats_tree.ranked_ffa`);case _.ClanWars:return T(`player_stats_tree.ranked_clanwars`)}}createRenderRoot(){return this}getSelectedLeaf(){let e;if(e=this.selectedType===M?this.mergeLeaves(this.availableTypes.flatMap(e=>e===`Ranked`?this.getRankedLeaves(M):this.getGameTypeLeaves(e,M,M))):this.selectedType===`Ranked`?this.mergeLeaves(this.getRankedLeaves(this.selectedRankedType)):this.mergeLeaves(this.getGameTypeLeaves(this.selectedType,this.selectedMode,this.selectedType===y.Public?M:this.selectedDifficulty)),!e)return null;let t=this.getSelectedRecentStats();return t?{...e,recent:t}:e}getSelectedRecentStats(){let e=this.statsTree?.recent;if(!e)return;if(this.selectedType===M)return e.all;if(this.selectedType===`Ranked`){let t=e.Ranked;return t?this.selectedRankedType===M?t.all:t[this.selectedRankedType]:void 0}let t=e[this.selectedType];if(!t)return;if(this.selectedMode===M)return this.selectedType===y.Public||this.selectedDifficulty===M?t.all:t[this.selectedDifficulty];let n=t[this.selectedMode];if(n)return this.selectedType===y.Public||this.selectedDifficulty===M?n.all:n[this.selectedDifficulty]}getGameTypeLeaves(e,t,n){let r=this.statsTree?.[e];return r?(t===M?ie.filter(e=>r[e]):[t]).flatMap(e=>{let t=r[e];return t?(n===M?Object.keys(t).filter(it):[n]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}):[]}getRankedLeaves(e){let t=this.statsTree?.Ranked;return t?(e===M?this.availableRankedTypes:[e]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}mergeLeaves(e){let t=this.reduceLeaves(e);if(t===null)return null;let n=e.length===1?e[0].recent:void 0;return n===void 0?t:{...t,recent:n}}reduceLeaves(e){return e.reduce((e,t)=>e?{wins:e.wins+t.wins,losses:e.losses+t.losses,total:e.total+t.total,stats:this.mergeStats(e.stats,t.stats),recentGames:this.mergeRecentGames(e.recentGames,t.recentGames)}:{wins:t.wins,losses:t.losses,total:t.total,stats:this.cloneStats(t.stats),recentGames:this.mergeRecentGames(void 0,t.recentGames)},null)}mergeRecentGames(e,t){if(!e&&!t)return;let n=new Map;for(let r of[...e??[],...t??[]])n.set(r.gameId,r);return[...n.values()].sort((e,t)=>e.gameId===t.gameId?0:e.gameId>t.gameId?-1:1).slice(0,100)}syncSelection(){let e=this.availableTypes;if(this.selectedType!==M&&!e.includes(this.selectedType)&&(this.selectedType=M),this.selectedType===M)return;if(this.selectedType===`Ranked`){let e=this.availableRankedTypes;this.selectedRankedType!==M&&!e.includes(this.selectedRankedType)&&(this.selectedRankedType=M);return}let t=this.availableModes;this.selectedMode!==M&&!t.includes(this.selectedMode)&&(this.selectedMode=M);let n=this.availableDifficulties;this.selectedDifficulty!==M&&!n.includes(this.selectedDifficulty)&&(this.selectedDifficulty=M)}willUpdate(e){e.has(`statsTree`)&&(this.selectedType=M,this.selectedMode=M,this.selectedDifficulty=M,this.selectedRankedType=M),(e.has(`statsTree`)||e.has(`selectedType`)||e.has(`selectedMode`)||e.has(`selectedDifficulty`)||e.has(`selectedRankedType`))&&this.syncSelection()}setGameType(e){this.selectedType!==e&&(this.selectedType=e,this.requestUpdate())}setMode(e){this.selectedMode!==e&&(this.selectedMode=e,this.requestUpdate())}setRankedType(e){this.selectedRankedType!==e&&(this.selectedRankedType=e,this.requestUpdate())}setDifficulty(e){this.selectedDifficulty!==e&&(this.selectedDifficulty=e,this.requestUpdate())}mergeStats(e,t){if(!(!e&&!t))return e?t?{attacks:this.mergeStatArrays(e.attacks,t.attacks,qt),betrayals:this.mergeStatValue(e.betrayals,t.betrayals),killedAt:this.mergeStatValue(e.killedAt,t.killedAt),conquests:this.mergeStatArrays(e.conquests,t.conquests),boats:this.mergeStatRecord(e.boats,t.boats),bombs:this.mergeStatRecord(e.bombs,t.bombs),gold:this.mergeStatArrays(e.gold,t.gold),units:this.mergeStatRecord(e.units,t.units)}:this.cloneStats(e):this.cloneStats(t)}mergeStatValue(e,t){if(!(e===void 0&&t===void 0))return(e??0n)+(t??0n)}mergeStatArrays(e,t,n=Kt){if(!e&&!t)return;let r=Math.max(e?.length??0,t?.length??0),i=[];for(let a=0;a<r;a+=1){let r=e?.[a]??0n,o=t?.[a]??0n;i[a]=n.has(a)?r>o?r:o:r+o}return i}mergeStatRecord(e,t){if(!e&&!t)return;let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=this.mergeStatArrays(e?.[r],t?.[r]);i&&(n[r]=i)}),Object.keys(n).length?n:void 0}cloneStats(e){if(e)return{attacks:e.attacks?[...e.attacks]:void 0,betrayals:e.betrayals,killedAt:e.killedAt,conquests:e.conquests?[...e.conquests]:void 0,boats:e.boats?{...e.boats}:void 0,bombs:e.bombs?{...e.bombs}:void 0,gold:e.gold?[...e.gold]:void 0,units:e.units?{...e.units}:void 0}}render(){let e=this.availableTypes,t=this.availableModes,n=this.availableDifficulties,r=this.availableRankedTypes,i=this.getSelectedLeaf();return h`
      <div class="flex flex-col gap-4">
        <!-- Filters: a type row, then a context-dependent second row (ranked
             type / mode / difficulty), styled like the game-history tab. -->
        <div class="space-y-2">
          ${this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedType===M,()=>this.setGameType(M)),...e.map(e=>this.renderFilterTab(this.labelForType(e),this.selectedType===e,()=>this.setGameType(e)))])}
          ${this.selectedType===`Ranked`&&r.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedRankedType===M,()=>this.setRankedType(M)),...r.map(e=>this.renderFilterTab(this.labelForRankedType(e)??``,this.selectedRankedType===e,()=>this.setRankedType(e)))]):o}
          ${t.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedMode===M,()=>this.setMode(M),T(`player_stats_tree.mode`)),...t.map(e=>this.renderFilterTab(this.labelForMode(e),this.selectedMode===e,()=>this.setMode(e),T(`player_stats_tree.mode`)))]):o}
          ${n.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedDifficulty===M,()=>this.setDifficulty(M),T(`difficulty.difficulty`)),...n.map(e=>this.renderFilterTab(T(`difficulty.${e.toLowerCase()}`),this.selectedDifficulty===e,()=>this.setDifficulty(e),T(`difficulty.difficulty`)))]):o}
        </div>

        ${i?h`
                <div class="border-t border-white/10">
                  <div class="py-3">
                    <player-stats-summary .leaf=${i}></player-stats-summary>
                  </div>

                  <div class="border-t border-white/10 pt-6">
                    <player-stats-table
                      .stats=${i?.stats??null}
                    ></player-stats-table>
                  </div>
                </div>
              `:h`
                <div
                  class="py-12 text-center text-white/30 italic border border-white/5 rounded-xl bg-white/5"
                >
                  ${T(`player_stats_tree.no_stats`)}
                </div>
              `}
      </div>
    `}};p([b({type:Object})],N.prototype,`statsTree`,void 0),p([n()],N.prototype,`selectedType`,void 0),p([n()],N.prototype,`selectedMode`,void 0),p([n()],N.prototype,`selectedDifficulty`,void 0),p([n()],N.prototype,`selectedRankedType`,void 0),N=p([d(`player-stats-tree-view`)],N);var Yt=`font-bold text-blue-300 truncate hover:underline`;function Xt(e,t){e.dispatchEvent(new CustomEvent(`view-profile`,{detail:{publicId:t},bubbles:!0,composed:!0}))}function P(e,t,n,r=``){return h`<player-name
    class=${r}
    .username=${t}
    .publicId=${n}
    .nameClass=${Yt}
    .onNameClick=${()=>Xt(e,n)}
  ></player-name>`}var Zt=10,Qt=90,$t=110,en=`profile-card-pulse-fade`,tn=`profile-card-gold-ring`,nn=0,rn=[];function an(){try{return window.self!==window.top}catch{return!0}}function on(){return!ke()&&document.visibilityState!==`hidden`&&!an()}var F=class extends f{constructor(...e){super(...e),this.patternId=`profile-card-hex-${nn++}`,this.variant=`full`,this.username=``,this.clanTag=null,this.progress=null,this.prestigeable=!1,this.provisional=!1,this.openKey=void 0,this.intro=!1,this.pulse=null,this.introDecided=!1,this.pulseMeasured=!1,this.onVisibilityChange=()=>{document.visibilityState===`hidden`&&this.stopPulse()},this.onPulseEnd=e=>{let t=this.pulse?.kind===`gold`?tn:en;e.animationName===t&&this.stopPulse()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),cn()}disconnectedCallback(){super.disconnectedCallback(),this.stopPulse()}get compact(){return this.variant===`compact`}willUpdate(e){if(super.willUpdate(e),this.introDecided||this.compact||this.progress===null)return;this.introDecided=!0;let t=this.openKey;if(t!==void 0){if(rn.includes(t))return;rn.push(t),rn.length>8&&rn.shift()}this.intro=on()}updated(e){super.updated(e),!(!this.intro||this.pulseMeasured)&&(this.pulseMeasured=!0,this.startPulse())}async startPulse(){let e=this.querySelector(`[data-profile-card="full"]`);if(e===null)return;let t=e.querySelector(`level-badge`);if(await t?.updateComplete,!this.isConnected||!this.intro)return;let n=e.getBoundingClientRect();if(n.width===0||n.height===0)return;let r=e.offsetWidth>0?e.offsetWidth/n.width:1,i=n.width*r,a=n.height*r,o=t?.getBoundingClientRect(),s=o&&o.width>0?o:n,c=(s.left+s.width/2-n.left)*r,l=(s.top+s.height/2-n.top)*r,ee=Math.max(Math.hypot(c,l),Math.hypot(i-c,l),Math.hypot(c,a-l),Math.hypot(i-c,a-l)),te=this.progress?.legend?`gold`:`blue`;this.pulse={kind:te,cx:Math.round(c),cy:Math.round(l),reach:Math.round(ee+(te===`gold`?$t:Qt))},document.addEventListener(`visibilitychange`,this.onVisibilityChange)}stopPulse(){document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.pulse=null}renderLevelLine(e){let t=this.compact?`text-sm tracking-wider`:`text-lg tracking-widest sm:text-xl`,n=fe(e.prestige);return e.legend?h`<div
        data-profile-level-line
        class="bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-yellow-300 bg-clip-text font-black uppercase text-transparent ${t}"
      >
        ${T(`progression.legend`)}
        <span class="text-white/40">·</span>
        ${T(`progression.prestige`,{prestige:n})}
      </div>`:h`<div
      data-profile-level-line
      class="font-black uppercase text-white ${t}"
    >
      ${n>0?h`<span class="text-yellow-300"
                >${T(`progression.prestige`,{prestige:n})}</span
              >
              <span class="text-white/30">·</span>`:o}
      ${T(`progression.level`,{level:e.level})}
    </div>`}renderProvisional(){return this.provisional?h`<div
      data-profile-provisional
      class="mt-0.5 text-xs font-semibold text-amber-200/80"
    >
      ${T(`progression.provisional_label`)}
    </div>`:o}renderBar(e){return h`<div
      data-xp-bar
      class="relative w-full overflow-hidden rounded-sm bg-white/15 ${this.compact?`h-2`:`h-3`}"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(e*100)}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
        style="width: ${e*100}%"
      ></div>
      ${Array.from({length:Zt-1},(e,t)=>h`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[2px] -translate-x-1/2 bg-[#0b1424]"
            style="left: ${(t+1)*100/Zt}%"
          ></span>`)}
    </div>`}renderXp(e){let{xpInLevel:t,xpForNext:n}=e,r=t!==void 0&&n!==void 0,i=e.legend?1:ae(t??0,n??0),a=this.compact?o:h`<div data-profile-lifetime class="truncate">
          <span
            class="text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
            >${T(`profile_card.lifetime_xp`)}</span
          >
          <span class="ml-1 font-black tabular-nums text-yellow-300"
            >${je(e.lifetimeXp)}</span
          >
        </div>`;return h`<div class=${this.compact?`mt-1.5`:`mt-3`}>
      ${r?this.renderBar(i):o}
      <div
        class="mt-1 flex items-baseline justify-between gap-3 text-xs ${this.compact?`justify-end`:``}"
      >
        ${a}
        ${r?h`<div
                data-profile-xp
                class="shrink-0 font-semibold tabular-nums text-white/55"
              >
                ${tt(t,e.legend?0:n)}
              </div>`:o}
      </div>
    </div>`}renderCompactXp(e){let{xpInLevel:t,xpForNext:n}=e;if(t===void 0||n===void 0)return o;let r=e.legend?1:ae(t,n);return h`<div class="w-full shrink-0 sm:w-64">
      <div
        data-profile-xp
        class="mb-1.5 text-right text-xs font-semibold tabular-nums text-white/60"
      >
        ${tt(t,e.legend?0:n)}
      </div>
      ${this.renderBar(r)}
    </div>`}canPrestige(e){return this.prestigeable&&e.canPrestige===!0}renderPrestigeButton(){return h`<button
      type="button"
      data-profile-prestige
      class="profile-prestige-button rounded-xl border border-yellow-300/70 bg-gradient-to-b from-yellow-300 to-amber-500 px-6 py-2.5 text-sm font-black uppercase tracking-widest text-zinc-900 transition-transform hover:-translate-y-0.5"
      @click=${()=>this.dispatchEvent(new CustomEvent(`prestige-request`,{bubbles:!0,composed:!0}))}
    >
      ${T(`prestige.button`)}
    </button>`}renderPattern(e,t,n){return h`<svg
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full ${n.className}"
      style=${n.style??o}
    >
      <defs>
        <pattern
          id=${e}
          width="60"
          height="103.92"
          patternUnits="userSpaceOnUse"
        >
          ${t}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#${e})"></rect>
    </svg>`}hexPath(e,t,n){return re`<path
      d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 69.28 L30 103.92"
      fill="none"
      stroke=${e}
      stroke-opacity=${t}
      stroke-width=${n}
    ></path>`}renderBackground(e){return this.renderPattern(this.patternId,e?this.hexPath(`#facc15`,.075,1.5):this.hexPath(`#2dd4bf`,.07,1.5),{className:``})}renderPulse(e){let t=e.kind===`gold`?re`${this.hexPath(`#f59e0b`,.25,6)}${this.hexPath(`#fde68a`,.8,1.8)}`:this.hexPath(`#7dd3fc`,.75,2),n=this.renderPattern(`${this.patternId}-pulse`,t,{className:`profile-card-pulse profile-card-pulse-${e.kind}`,style:`--cx: ${e.cx}px; --cy: ${e.cy}px; --reach: ${e.reach}px`});return h`<div
      data-profile-pulse=${e.kind}
      class="pointer-events-none absolute inset-0"
      @animationend=${this.onPulseEnd}
    >
      ${n}
    </div>`}renderBadge(e,t){return h`<div class="relative grid shrink-0 place-items-center">
      <div
        aria-hidden="true"
        class="absolute rounded-full ${this.compact?`-inset-4`:`-inset-8`}"
        style="background: radial-gradient(circle, ${t}55 0%, transparent 70%)"
      ></div>
      <level-badge
        class="relative"
        .level=${e.level}
        .prestige=${e.prestige}
        .legend=${e.legend}
        .size=${this.compact?64:120}
      ></level-badge>
    </div>`}render(){let e=this.progress;if(e===null)return o;let t=ot(e.prestige,e.legend),n=this.clanTag===null?o:h`<span
            data-profile-clan
            class="font-black tracking-wider text-aquarius ${this.compact?`shrink-0 text-sm`:`block text-sm`}"
            >[${this.clanTag}]</span
          >`,{base:r,discriminator:i}=xe(this.username),a=i===null?r:`${r}#${i}`,s=h`<span
      data-profile-name
      class="truncate font-black leading-tight ${this.compact?`text-2xl`:`block text-3xl sm:text-4xl`}"
      title=${a}
      >${Be(this.username,``)}</span
    >`;if(this.compact)return h`<section
        data-profile-card="compact"
        class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] px-5 py-4 text-white"
      >
        ${this.renderBackground(!1)}
        <div
          class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <div class="flex min-w-0 flex-1 items-center gap-4">
            ${this.renderBadge(e,t)}
            <div class="min-w-0">
              <div class="flex min-w-0 items-baseline gap-2">
                ${n} ${s}
              </div>
              <div class="mt-0.5">${this.renderLevelLine(e)}</div>
              ${this.renderProvisional()}
            </div>
          </div>
          ${this.canPrestige(e)?h`<div class="flex shrink-0 justify-end">
                  ${this.renderPrestigeButton()}
                </div>`:this.renderCompactXp(e)}
        </div>
      </section>`;let c=e.legend;return h`<section
      data-profile-card="full"
      ?data-profile-legend=${c}
      class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] p-5 text-white sm:p-6 ${c?`profile-card-legend`:``} ${this.intro?`profile-card-intro`:``}"
    >
      ${this.renderBackground(c)}
      ${this.pulse===null?o:this.renderPulse(this.pulse)}
      <div
        class="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
      >
        ${this.renderBadge(e,t)}
        <div class="w-full min-w-0 flex-1 text-center sm:text-left">
          ${n} ${s} ${this.renderLevelLine(e)}
          ${this.renderProvisional()} ${this.renderXp(e)}
          ${this.canPrestige(e)?h`<div
                  class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
                >
                  <span class="text-sm text-yellow-100/80"
                    >${T(`prestige.ready`)}</span
                  >
                  ${this.renderPrestigeButton()}
                </div>`:o}
        </div>
      </div>
    </section>`}};p([b({type:String})],F.prototype,`variant`,void 0),p([b({type:String})],F.prototype,`username`,void 0),p([b({attribute:!1})],F.prototype,`clanTag`,void 0),p([b({attribute:!1})],F.prototype,`progress`,void 0),p([b({type:Boolean})],F.prototype,`prestigeable`,void 0),p([b({type:Boolean})],F.prototype,`provisional`,void 0),p([b({attribute:!1})],F.prototype,`openKey`,void 0),p([n()],F.prototype,`intro`,void 0),p([n()],F.prototype,`pulse`,void 0),F=p([d(`profile-card`)],F);var sn=`profile-card-styles`;function cn(){if(document.getElementById(sn))return;let e=document.createElement(`style`);e.id=sn,e.textContent=dn,document.head.appendChild(e)}var ln=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave1) - var(--band)),
    rgba(0, 0, 0, 0.35) calc(var(--pc-wave1) - var(--band) * 0.55),
    #000 calc(var(--pc-wave1) - var(--band) * 0.1),
    transparent calc(var(--pc-wave1) + var(--band) * 0.2)),
  radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave2) - var(--band) * 0.8),
    rgba(0, 0, 0, 0.45) calc(var(--pc-wave2) - var(--band) * 0.15),
    transparent calc(var(--pc-wave2) + var(--band) * 0.15))`,un=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-gold) - var(--band)),
    rgba(0, 0, 0, 0.28) calc(var(--pc-gold) - var(--band) * 0.55),
    rgba(0, 0, 0, 0.7) calc(var(--pc-gold) - var(--band) * 0.12),
    transparent calc(var(--pc-gold) + var(--band) * 0.18))`,dn=`
@property --pc-wave1 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-wave2 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-gold { syntax: "<length>"; inherits: false; initial-value: 0px; }

/* Opening: the badge settles in, the XP bar fills, one sheen crosses. */
.profile-card-intro level-badge {
  animation: profile-card-badge-in 520ms cubic-bezier(0.2, 0.9, 0.3, 1.25) 100ms both;
}
@keyframes profile-card-badge-in {
  from { opacity: 0; transform: scale(0.7); }
}
.profile-card-intro [data-xp-bar-fill] {
  transform-origin: left center;
  animation: profile-card-bar-in 900ms cubic-bezier(0.2, 0.8, 0.2, 1) 250ms both;
}
@keyframes profile-card-bar-in {
  from { transform: scaleX(0); }
}
.profile-card-intro::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.1) 47%,
    rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.1) 53%, transparent 65%);
  transform: translateX(-100%);
  animation: profile-card-sheen 1100ms ease-out 450ms both;
}
@keyframes profile-card-sheen {
  to { transform: translateX(100%); }
}

/* The pulse layers. */
.profile-card-pulse-blue {
  --band: ${Qt}px;
  filter: drop-shadow(0 0 4px #38bdf8);
  -webkit-mask-image: ${ln};
  mask-image: ${ln};
  animation:
    profile-card-wave1 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 150ms both,
    profile-card-wave2 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 560ms both,
    ${en} 2400ms linear both;
}
@keyframes profile-card-wave1 {
  from { --pc-wave1: 0px; }
  to { --pc-wave1: var(--reach); }
}
@keyframes profile-card-wave2 {
  from { --pc-wave2: 0px; }
  to { --pc-wave2: var(--reach); }
}
@keyframes ${en} {
  0%, 70% { opacity: 1; }
  100% { opacity: 0; }
}
.profile-card-pulse-gold {
  --band: ${$t}px;
  -webkit-mask-image: ${un};
  mask-image: ${un};
  animation: ${tn} 3600ms cubic-bezier(0.33, 0.5, 0.5, 1) 300ms 8 both;
}
@keyframes ${tn} {
  0% { --pc-gold: 0px; opacity: 0; }
  6% { opacity: 1; }
  70% { opacity: 1; }
  100% { --pc-gold: var(--reach); opacity: 0; }
}

/* A Legend's full card: a thin gold edge and a gold-tinted pattern. */
.profile-card-legend {
  border-color: rgba(250, 204, 21, 0.38);
  box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.12), 0 0 28px rgba(250, 204, 21, 0.1),
    inset 0 0 40px rgba(250, 204, 21, 0.05);
  background-image: linear-gradient(135deg, rgba(250, 204, 21, 0.06), transparent 45%),
    linear-gradient(to bottom right, #0b1424, #132644);
}
/* Its Legend line shimmers once as the card opens. */
.profile-card-legend.profile-card-intro [data-profile-level-line] {
  background-size: 200% 100%;
  animation: profile-card-line-shimmer 2.4s ease-in-out both;
}
@keyframes profile-card-line-shimmer {
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
}

/* The Prestige button glows on and off: the glow is its own layer, and only
   that layer's opacity animates. */
.profile-prestige-button {
  position: relative;
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.45);
}
.profile-prestige-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 22px rgba(250, 204, 21, 0.9);
  opacity: 0;
  pointer-events: none;
  animation: profile-prestige-glow 1.8s ease-in-out infinite;
}
@keyframes profile-prestige-glow {
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .profile-card-intro level-badge,
  .profile-card-intro [data-xp-bar-fill],
  .profile-card-legend.profile-card-intro [data-profile-level-line],
  .profile-prestige-button::before {
    animation: none;
  }
  .profile-card-intro::after,
  .profile-card-pulse {
    display: none;
  }
}
`;function fn(e,t){for(let n of e)if(n.cosmetic!==null&&(n.type===`effect`?`effect:${n.key.split(`:`).slice(2).join(`:`)}`:n.key)===t)return n;return null}function pn(e){return e.split(`_`).filter(e=>e.length>0).map(e=>e[0].toUpperCase()+e.substring(1)).join(` `)}function mn(e){return e?h`<img
      src=${e}
      alt=""
      class="h-full w-full object-contain"
      draggable="false"
    />`:h`<svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    aria-hidden="true"
  >
    <path
      fill="var(--tier)"
      d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"
    />
  </svg>`}function hn(e){let t=e.cosmetic??null;return t===null?null:{name:pn(t.name),typeLabel:``,preview:mn(t.url)}}async function gn(e){if((e.cosmetic??null)===null)return null;let t=null;try{t=fn(Ne(await Se(),!1,null),e.flareName)}catch(e){console.warn(`describeFlareCosmetic: catalog unavailable`,e)}return t===null?hn(e):{name:pt(t),typeLabel:mt(t),preview:h`<cosmetic-preview
      class="block h-full w-full"
      .resolved=${t}
      size="card"
    ></cosmetic-preview>`}}var _n=`rounded-xl border border-white/10 bg-white/5 px-5 py-[18px] mb-4 last:mb-0`,vn=`text-xs font-bold uppercase tracking-[0.12em] text-white/45`;function yn(e){let t=new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function bn(e){let t=new Map;for(let n of e.prestigeHistory??[])t.has(n.rank)||t.set(n.rank,n.at);let n=[];for(let r=1;r<=fe(e.prestige);r++)n.push({rank:r,at:t.get(r)??null});return n}function xn(e){let t=fe(e.prestige),n=new Map;for(let r of e.milestones??[]){if(!Number.isInteger(r.level)||r.level<1||!Number.isInteger(r.prestige)||r.prestige<0||r.prestige>t)continue;let e=n.get(r.prestige);e===void 0&&(e=new Map,n.set(r.prestige,e)),e.has(r.level)||e.set(r.level,r.at)}let r=(e,t)=>e-t,i=n.get(t)??new Map,a=[{prestige:t,current:!0,slots:[...new Set([...ue,...i.keys()])].sort(r).map(t=>{let n=i.get(t)??null;return{level:t,reached:n!==null||e.level>=t,at:n}})}],o=[...n.keys()].filter(e=>e<t).sort((e,t)=>t-e);for(let e of o){let t=n.get(e);a.push({prestige:e,current:!1,slots:[...t.keys()].sort(r).map(e=>({level:e,reached:!0,at:t.get(e)}))})}return a}var Sn=55,Cn=380,wn=2500,Tn=null;function En(){return Tn??=se(()=>import(`./RewardTrack-q2iZv1PQ.js`),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).catch(e=>{throw Tn=null,e}),Tn}var Dn;function On(e,t){return e===!1||e.player.publicId!==t?{rewards:null,rewardsFrom:null}:{rewards:e.player.rewards??[],rewardsFrom:e.player.progress??null}}var I=class extends f{constructor(...e){super(...e),this.progress=null,this.publicId=null,this.confirmedLevel=null,this.provisional=!1,this.popKey=void 0,this.loadConfig=ce,this.loadUserMe=u,this.claim=Le,this.alert=a,this.describeCosmetic=gn,this.loadTrackModule=En,this.ready=!1,this.track=null,this.claiming=!1,this.loadedFor=void 0,this.loadToken=0,this.claimToken=0,this.popDecided=!1,this.popping=!1,this.popTimer=null,this.onUserMe=e=>{let t=e.detail,n=this.track;!n?.rewards||t===!1||!t?.player||t.player.publicId===this.publicId&&(this.track={...n,...On(t,this.publicId)})},this.onScored=e=>{let t=this.track;if(!t?.rewards||ne(e).length===0||(t.rewardsFrom?.lifetimeXp??0)>=Ke(e))return;let n=this.publicId;this.loadOwnAccount(n).then(e=>{this.track!==t||e===!1||(this.track={...t,...On(e,n)})})}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),An(),document.addEventListener(`userMeResponse`,this.onUserMe),document.addEventListener(ut,this.onScored),this.claiming&&=!1}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(ut,this.onScored),this.claimToken++,this.popTimer!==null&&clearTimeout(this.popTimer),this.popTimer=null,this.endPop()}willUpdate(e){super.willUpdate(e),this.progress!==null&&this.publicId!==this.loadedFor&&(this.loadedFor=this.publicId,this.loadTrack(this.publicId))}async loadTrack(e){let t=++this.loadToken;this.ready=!1,this.track=null;let n=setTimeout(()=>{t===this.loadToken&&(this.ready=!0)},wn),[r,i,a]=await Promise.all([this.loadConfig().catch(()=>!1),this.loadOwnAccount(e),this.loadTrackModule().catch(e=>(console.warn(`ProfileProgression: reward track failed to load`,e),null))]);clearTimeout(n),t===this.loadToken&&(this.track=a!==null&&r!==!1&&a.trackHasRewards(r)?{config:r,...On(i,e),model:a.rewardTrackModel}:null,this.ready=!0)}trackConfirmedLevel(e){let t=this.track?.rewardsFrom,n=this.confirmedLevel;return!t||t.prestige!==e.prestige?n:t.level<(n??e.level)?t.level:n}async loadOwnAccount(e){if(e===null)return!1;let t=await this.loadUserMe().catch(()=>!1);return t===!1||t.player.publicId!==e?t:(w(),this.loadUserMe().catch(()=>!1))}async claimAll(){let e=this.track,t=this.progress;if(this.claiming||e===null||t===null)return;let n=e.rewards;if(n===null)return;let r=new Set(e.model(t,e.config,n,this.trackConfirmedLevel(t)).claim?.ids??[]),i=n.filter(e=>r.has(e.id));if(i.length===0)return;let a=this.claimToken;this.claiming=!0;try{let t=await ft(i,{claim:this.claim,stopped:()=>a!==this.claimToken}),r=t.currency,o=new Set(t.claimedIds),s=new Map(t.held.map(e=>[e.id,e.held])),c=t.creditedIds.length<t.claimedIds.length||s.size>0;if(a!==this.claimToken){this.loadedFor=void 0;return}if(o.size>0||s.size>0){let t=n.filter(e=>!o.has(e.id)).map(e=>{let t=s.get(e.id);return t===void 0?e:{...e,held:t}});if(c){let e=await this.loadUserMe().catch(()=>!1);e!==!1&&(t=e.player.rewards??[],r=e.player.currency??r)}this.track===e&&(this.track={...e,rewards:t}),this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:r,rewards:t},bubbles:!0,composed:!0}))}t.failed&&await this.alert(T(`account_modal.claim_failed`))}finally{a===this.claimToken&&(this.claiming=!1)}}updated(e){super.updated(e),!(!this.ready||this.progress===null)&&(this.popDecided||(this.popDecided=!0,this.startPop()),this.popping&&this.orderPop())}startPop(){let e=this.popKey;if(e!==void 0){if(e===Dn)return;Dn=e}ke()||(this.popping=!0,this.classList.add(`pp-anim`),this.popTimer=setTimeout(()=>{this.popTimer=null,this.endPop()},1240))}endPop(){this.popping=!1,this.classList.remove(`pp-anim`)}async orderPop(){let e=this.querySelector(`reward-track`);if(e!==null&&await e.updateComplete,!this.popping)return;let t=[...this.querySelectorAll(`[data-pp]`)];t.forEach((e,t)=>e.style.setProperty(`--i`,String(Math.min(t,12))));let n=this.querySelector(`[data-next-milestone]`),r=n===null?0:Math.min(t.indexOf(n),12);this.style.setProperty(`--ring-delay`,`${Math.max(0,r)*Sn+Cn}ms`)}render(){let e=this.progress;if(e===null||!this.ready)return o;let t=this.track;return h`
      ${t===null?o:h`<reward-track
              .progress=${e}
              .config=${t.config}
              .rewards=${t.rewards}
              .confirmedLevel=${this.trackConfirmedLevel(e)}
              .provisional=${this.provisional}
              .claiming=${this.claiming}
              .describeCosmetic=${this.describeCosmetic}
              @claim-all=${()=>void this.claimAll()}
            ></reward-track>`}
      ${this.renderHistory(e)}
      ${this.renderMilestones(this.confirmedLevel===null?e:{...e,level:this.confirmedLevel})}
    `}renderHistory(e){let t=bn(e);return h`
      <section class=${_n} data-prestige-history>
        <h3 class="mb-3.5 ${vn}">
          ${T(`player_profile.prestige_history`)}
        </h3>
        ${t.length===0?h`<p class="text-sm text-white/50" data-no-prestige data-pp>
                ${T(`player_profile.no_prestige`)}
              </p>`:h`<div class="flex flex-wrap gap-3">
                ${t.map(e=>this.renderPrestigeTile(e))}
              </div>`}
      </section>
    `}renderPrestigeTile(e){let t=e.at===null?null:yn(e.at);return h`
      <div
        class="flex flex-[1_1_150px] items-center gap-2.5 rounded-[10px] border border-white/[0.06] bg-black/20 px-3.5 py-2.5"
        data-prestige-tile=${e.rank}
        data-pp
      >
        <level-badge
          .level=${1}
          .prestige=${e.rank}
          .size=${36}
        ></level-badge>
        <div class="min-w-0">
          <div class="font-bold text-white">
            ${T(`progression.prestige`,{prestige:e.rank})}
          </div>
          ${t===null?o:h`<div class="text-xs text-white/50" data-date>${t}</div>`}
        </div>
      </div>
    `}renderMilestones(e){return h`
      <section class=${_n} data-milestones>
        <h3 class="mb-3.5 ${vn}">
          ${T(`player_profile.milestones`)}
        </h3>
        ${xn(e).map(t=>this.renderRun(t,e.legend))}
      </section>
    `}runLabel(e,t){return e.current&&t?T(`player_profile.legend_run`,{prestige:e.prestige}):e.current?e.prestige===0?T(`player_profile.current_run`):T(`player_profile.current_run_prestige`,{prestige:e.prestige}):e.prestige===0?T(`player_profile.first_run`):T(`progression.prestige`,{prestige:e.prestige})}renderRun(e,t){let n=e.current?e.slots.find(e=>!e.reached):void 0;return h`
      <div
        class="mb-4 last:mb-0"
        data-milestone-run=${e.prestige}
        ?data-current-run=${e.current}
      >
        <h4 class="mb-2.5 mt-1 text-sm font-bold text-white" data-pp>
          ${this.runLabel(e,t)}
        </h4>
        <div class="flex flex-wrap gap-2.5">
          ${e.slots.map(r=>this.renderSlot(e.prestige,r,e.current&&t&&r.level===100,r===n))}
        </div>
      </div>
    `}renderSlot(e,t,n,r){let i=t.at===null?null:yn(t.at),a=t.reached?i:T(`player_profile.milestone_not_yet`);return h`
      <div
        class="flex w-[78px] flex-col items-center gap-1.5 ${t.reached?``:`opacity-30`}"
        data-milestone=${t.level}
        ?data-reached=${t.reached}
        ?data-next-milestone=${r}
        data-pp
      >
        <level-badge
          .level=${t.level}
          .prestige=${e}
          .legend=${n}
          .size=${40}
        ></level-badge>
        ${a===null?o:h`<div
                class="text-center text-[11px] text-white/55"
                data-caption
              >
                ${a}
              </div>`}
      </div>
    `}};p([b({attribute:!1})],I.prototype,`progress`,void 0),p([b({attribute:!1})],I.prototype,`publicId`,void 0),p([b({attribute:!1})],I.prototype,`confirmedLevel`,void 0),p([b({type:Boolean})],I.prototype,`provisional`,void 0),p([b({attribute:!1})],I.prototype,`popKey`,void 0),p([n()],I.prototype,`ready`,void 0),p([n()],I.prototype,`track`,void 0),p([n()],I.prototype,`claiming`,void 0),I=p([d(`profile-progression`)],I);var kn=`profile-progression-styles`;function An(){if(document.getElementById(kn))return;let e=document.createElement(`style`);e.id=kn,e.textContent=jn,document.head.appendChild(e)}var jn=`
profile-progression.pp-anim [data-pp] {
  animation: pp-pop ${Cn}ms cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
  animation-delay: calc(var(--i, 0) * ${Sn}ms);
}
@keyframes pp-pop {
  from { opacity: 0; transform: translateY(8px) scale(0.8); }
}
profile-progression [data-next-milestone] { opacity: 0.6; }
profile-progression [data-next-milestone] level-badge {
  border-radius: 9999px;
  outline: 2px dashed rgba(250, 204, 21, 0.6);
  outline-offset: 3px;
  animation: pp-breathe 2.4s ease-in-out var(--ring-delay, 0ms) infinite;
}
@keyframes pp-breathe {
  0%, 100% { outline-color: rgba(250, 204, 21, 0.25); }
  50% { outline-color: rgba(250, 204, 21, 0.85); }
}
@media (prefers-reduced-motion: reduce) {
  profile-progression.pp-anim [data-pp],
  profile-progression [data-next-milestone] level-badge { animation: none; }
}
`,Mn={0:`pl-1.5`,1:`pl-5`,2:`pl-9`};function Nn(e){switch(e){case`duos`:return T(`clan_modal.history_type_duos`);case`trios`:return T(`clan_modal.history_type_trios`);case`quads`:return T(`clan_modal.history_type_quads`);case`1v1`:return T(`clan_modal.stats_1v1`);default:return T(`clan_modal.stats_team_count`,{count:e})}}function Pn(e){return e.wins>0||e.losses>0}var L=class extends f{constructor(...e){super(...e),this.expandedTotal=!1,this.expandedTeam=!1,this.expandedRanked=!1,this.toggleTotal=()=>{this.expandedTotal=!this.expandedTotal},this.toggleTeam=()=>{this.expandedTeam=!this.expandedTeam},this.toggleRanked=()=>{this.expandedRanked=!this.expandedRanked}}createRenderRoot(){return this}get teamSubKeys(){return de.filter(e=>Pn(this.stats[e]))}get rankedSubKeys(){return at.filter(e=>Pn(this.stats[e]))}setAllExpanded(e){this.expandedTotal=e,this.expandedTeam=e,this.expandedRanked=e}renderRow(e,t,n,r){let i=Jn(e,t.wins,t.losses),a=!!r&&!r.disabled,o=h`
      <span
        class="w-3 h-3 shrink-0 flex items-center justify-center text-white/40 transition-transform duration-150
          ${r?.expanded?`rotate-90`:``}"
        aria-hidden="true"
      >
        ${a?h`<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-2.5 h-2.5"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>`:``}
      </span>
    `,s=`${Mn[n]} pr-1.5 py-0.5`;if(!r||r.disabled)return h`
        <div class="flex items-center gap-2 ${s}">
          ${o}
          <div class="flex-1 min-w-0">${i}</div>
        </div>
      `;let c=T(r.expanded?`clan_modal.stats_collapse`:`clan_modal.stats_expand`);return h`
      <button
        type="button"
        class="w-full flex items-center gap-2 ${s} text-left rounded-md transition-colors cursor-pointer
          hover:bg-white/10 focus-visible:bg-white/10 focus:outline-none
          ${r.expanded?`bg-white/5`:``}"
        @click=${r.onToggle}
        title=${c}
        aria-expanded=${r.expanded}
      >
        ${o}
        <div class="flex-1 min-w-0">${i}</div>
      </button>
    `}render(){if(!this.stats)return h``;let e=this.teamSubKeys,t=this.rankedSubKeys;return h`
      <div class="space-y-0">
        ${this.renderRow(T(`clan_modal.stats_total`),this.stats.total,0,{expanded:this.expandedTotal,onToggle:this.toggleTotal,disabled:!1})}
        ${this.expandedTotal?h`
                ${this.renderRow(T(`clan_modal.history_type_ffa`),this.stats.ffa,1)}
                ${this.renderRow(T(`clan_modal.stats_team`),this.stats.team,1,{expanded:this.expandedTeam,onToggle:this.toggleTeam,disabled:e.length===0})}
                ${this.expandedTeam?h`${e.map(e=>this.renderRow(Nn(e),this.stats[e],2))}`:``}
                ${this.renderRow(T(`clan_modal.stats_hvn`),this.stats.hvn,1)}
                ${this.renderRow(T(`clan_modal.stats_ranked`),this.stats.ranked,1,{expanded:this.expandedRanked,onToggle:this.toggleRanked,disabled:t.length===0})}
                ${this.expandedRanked?h`${t.map(e=>this.renderRow(Nn(e),this.stats[e],2))}`:``}
              `:``}
      </div>
    `}};p([b({type:Object})],L.prototype,`stats`,void 0),p([n()],L.prototype,`expandedTotal`,void 0),p([n()],L.prototype,`expandedTeam`,void 0),p([n()],L.prototype,`expandedRanked`,void 0),L=p([d(`clan-stats-breakdown`)],L);function Fn(e){return e==="default"?`asc`:`desc`}var In=new Map;function R(e){let t=In.get(e);return t||(t=new Date(e).toLocaleDateString(),In.set(e,t)),t}function Ln(e){return T(`clan_modal.role_${e}`)}function Rn(e){return e===`leader`?h`<span class="text-sm">👑</span>`:e===`officer`?h`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>`:h`<svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-4 text-white/40"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>`}function zn(e,t){return h`
    <div class="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
      <div
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1"
      >
        ${e}
      </div>
      <div class="text-white font-bold text-sm truncate">${t}</div>
    </div>
  `}function Bn(e,t,n){return h`
    <div class="flex items-center gap-1">
      <button
        @click=${()=>n(1)}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;&lt;
      </button>
      <button
        @click=${()=>n(Math.max(1,e-1))}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;
      </button>
      <span class="text-xs text-white/50 font-medium px-1">
        ${e} / ${t}
      </span>
      <button
        @click=${()=>n(Math.min(t,e+1))}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;
      </button>
      <button
        @click=${()=>n(t)}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;&gt;
      </button>
    </div>
  `}function Vn(e,t,n){return h`
    <div
      class="flex items-center justify-center gap-1 pt-4 border-t border-white/10"
    >
      ${Bn(e,t,n)}
    </div>
  `}function z(e,t,n=`clan_modal.search_members_placeholder`,r){let i=h`
    <div class="relative w-full sm:flex-1 sm:min-w-0">
      <input
        type="text"
        .value=${t}
        @input=${e}
        class="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
        placeholder="${T(n)}"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </div>
  `;return r?h`
    <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
      ${i}${r}
    </div>
  `:h`<div class="mb-3">${i}</div>`}var Hn=[{value:`default`,labelKey:`clan_modal.sort_default`},{value:`winsTotal`,labelKey:`clan_modal.sort_total_wins`},{value:`lossesTotal`,labelKey:`clan_modal.sort_total_losses`},{value:`winsFfa`,labelKey:`clan_modal.sort_ffa_wins`},{value:`lossesFfa`,labelKey:`clan_modal.sort_ffa_losses`},{value:`winsTeam`,labelKey:`clan_modal.sort_team_wins`},{value:`lossesTeam`,labelKey:`clan_modal.sort_team_losses`},{value:`winsHvn`,labelKey:`clan_modal.sort_hvn_wins`},{value:`lossesHvn`,labelKey:`clan_modal.sort_hvn_losses`},{value:`winsRanked`,labelKey:`clan_modal.sort_ranked_wins`},{value:`lossesRanked`,labelKey:`clan_modal.sort_ranked_losses`},{value:`wins1v1`,labelKey:`clan_modal.sort_1v1_wins`},{value:`losses1v1`,labelKey:`clan_modal.sort_1v1_losses`},{value:`eloContributed`,labelKey:`clan_modal.sort_elo_contributed`}];function Un(e){return h`
    <span
      class="flex flex-col items-start justify-center gap-[3px] w-4 h-4"
      aria-hidden="true"
    >
      ${(e===`asc`?[`w-1.5`,`w-2.5`,`w-3.5`]:[`w-3.5`,`w-2.5`,`w-1.5`]).map(e=>h`<span class="${e} h-[2px] bg-current rounded-sm"></span>`)}
    </span>
  `}function Wn(){return h`<span
    data-chevron
    class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
    aria-hidden="true"
  >
    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
        clip-rule="evenodd"
      />
    </svg>
  </span>`}function Gn(e,t,n,r){let i=T(t===`asc`?`clan_modal.sort_order_asc`:`clan_modal.sort_order_desc`);return h`
    <div class="flex items-center gap-2 shrink-0">
      <label
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline"
      >
        ${T(`clan_modal.sort_by`)}
      </label>
      <div class="relative flex-1 sm:flex-none">
        <select
          aria-label=${T(`clan_modal.sort_by`)}
          @change=${e=>n(e.target.value)}
          class="w-full h-10 appearance-none pl-3 pr-9 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
        >
          ${Hn.map(t=>h`
              <option
                value=${t.value}
                ?selected=${t.value===e}
                class="bg-neutral-900"
              >
                ${T(t.labelKey)}
              </option>
            `)}
        </select>
        ${Wn()}
      </div>
      <button
        type="button"
        @click=${r}
        title=${i}
        aria-label=${i}
        class="h-10 w-10 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all"
      >
        ${Un(t)}
      </button>
    </div>
  `}var Kn=[10,25,50];function qn(e,t,n,r,i){let a=Math.ceil(t/n);return t<=Kn[0]?``:h`
    <div
      class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10"
    >
      <div class="flex items-center gap-2">
        <span
          class="text-[10px] font-bold text-white/40 uppercase tracking-wider"
        >
          ${T(`clan_modal.per_page`)}
        </span>
        ${Kn.map(e=>h`
            <button
              @click=${()=>i(e)}
              class="px-2 py-1 text-xs font-bold rounded-lg transition-all
                ${n===e?`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`:`text-white/40 hover:text-white/70 border border-transparent`}"
            >
              ${e}
            </button>
          `)}
      </div>
      ${Bn(e,a,r)}
    </div>
  `}function Jn(e,t,n){let r=t+n,i=r>0,a=i?Math.round(t/r*100):0,o=i?t/r*100:0,s=i?100-o:0,c=i?a>=50?`text-green-400`:`text-red-400/90`:`text-white/25`;return h`
    <div class="flex items-center gap-2">
      <span
        class="text-[10px] font-bold uppercase tracking-wider text-white/50 w-14 shrink-0 truncate"
        title=${e}
      >
        ${e}
      </span>
      <div
        class="relative flex-1 h-5 rounded-md overflow-hidden bg-white/5"
        role="img"
        aria-label="${t} wins, ${n} losses"
      >
        <div class="absolute inset-0 flex">
          ${t>0?h`<div
                  class="bg-malibu-blue h-full"
                  style="width:${o}%"
                ></div>`:``}
          ${n>0?h`<div
                  class="bg-red-500 h-full"
                  style="width:${s}%"
                ></div>`:``}
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-[11px] font-bold text-white tabular-nums whitespace-nowrap pointer-events-none"
        >
          <span>${t>0?`${t}W`:``}</span>
          <span>${n>0?`${n}L`:``}</span>
        </div>
      </div>
      <span
        class="text-xs font-bold shrink-0 tabular-nums w-9 text-right ${c}"
      >
        ${i?`${a}%`:`—`}
      </span>
    </div>
  `}function Yn(e){return e?h`
    <div class="mt-1.5">
      <clan-stats-breakdown .stats=${e}></clan-stats-breakdown>
    </div>
  `:``}function Xn(e){return e.some(vt)}function Zn(e){return e==null?``:h`<span
    data-elo-contributed
    class="text-xs font-bold tabular-nums whitespace-nowrap ${e>0?`text-green-400`:e<0?`text-red-400`:`text-white/50`}"
    title=${T(`clan_modal.elo_contributed_tooltip`)}
    >${T(`clan_modal.elo_contributed`,{elo:e>0?`+${e}`:`${e}`})}</span
  >`}function Qn(e,t,n,r=!1){let i=e.publicId===t;return h`
    <div
      class="flex flex-col py-2.5 px-3 rounded-xl border
        ${i?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
            ${i?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
        >
          ${Rn(e.role)}
        </div>
        <div class="flex-1 min-w-0 flex flex-col">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0 flex items-center gap-2">
              ${yt(e,vt(e),r)}
              ${P(n,e.username,e.publicId,`min-w-0`)}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              ${Zn(e.eloContributed)}
              <span
                class="text-white/30 text-[10px] text-right whitespace-nowrap"
                >${T(`clan_modal.joined_date`,{date:R(e.joinedAt)})}</span
              >
            </div>
          </div>
        </div>
      </div>
      ${Yn(e.stats)}
    </div>
  `}function $n(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||e.role.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}function er(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}function tr(e,t=Date.now()){if(!e)return null;let n=new Date(e).getTime()-t;if(!(n>0))return null;let r=Math.ceil(n/6e4),i=Math.floor(r/60);return i>=24?T(`clan_modal.boost_remaining_days`,{days:Math.floor(i/24),hours:i%24}):T(`clan_modal.boost_remaining`,{hours:i,minutes:r%60})}var B=class extends f{constructor(...e){super(...e),this.clanTag=``,this.bans=[],this.bansTotal=0,this.bansPage=1,this.bansLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadBans(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadBans(e,t=!0){t?this.loading=!0:this.memberActionPending=!0;try{let t=await ze(this.clanTag,e);if(!t){v(T(`clan_modal.error_failed`),`red`);return}if(t.results.length===0&&e>1){await this.loadBans(1,!1);return}this.bans=t.results,this.bansTotal=t.total,this.bansLimit=t.limit,this.bansPage=t.page}finally{t?this.loading=!1:this.memberActionPending=!1}}async handleUnban(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await nt(this.clanTag,e);if(t!==!0){v(T(t.error),`red`);return}this.bans=this.bans.filter(t=>t.publicId!==e),this.bansTotal--,v(T(`clan_modal.member_unbanned`),`green`),this.bans.length===0&&this.bansPage>1&&await this.loadBans(this.bansPage-1,!1)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return g();let e=Math.ceil(this.bansTotal/this.bansLimit),t=this.memberSearch?this.bans.filter(e=>{let t=this.memberSearch.toLowerCase();return e.publicId.toLowerCase().includes(t)||(e.username?.toLowerCase().includes(t)??!1)}):this.bans;return h`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${T(`clan_modal.banned_players_count`,{count:this.bansTotal})}
        </div>
        ${z(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_members_placeholder`)}
        ${t.length===0?h`<div
                class="flex flex-col items-center justify-center p-12 text-center"
              >
                <p class="text-white/40 text-sm">
                  ${T(`clan_modal.no_bans`)}
                </p>
              </div>`:h`
                <div class="space-y-3">
                  ${t.map(e=>h`
                      <div
                        class="bg-white/5 rounded-xl border border-white/10 p-4 space-y-2"
                      >
                        <div class="flex items-center gap-2">
                          <div
                            class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          </div>
                          ${P(this,e.username,e.publicId)}
                          <span class="text-white/30 text-xs shrink-0"
                            >${T(`clan_modal.banned_by_label`)}</span
                          >
                          ${P(this,e.bannedByUsername,e.bannedBy)}
                          <span class="text-white/30 text-xs shrink-0"
                            >${R(e.createdAt)}</span
                          >
                          <div class="flex-1"></div>
                          <button
                            @click=${()=>this.handleUnban(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
                          >
                            ${T(`clan_modal.unban`)}
                          </button>
                        </div>
                        ${e.reason?h`<div class="text-white/50 text-xs pl-10">
                                ${T(`clan_modal.ban_reason`,{reason:e.reason})}
                              </div>`:``}
                      </div>
                    `)}
                </div>
                ${e>1?Vn(this.bansPage,e,e=>this.loadBans(e,!1)):``}
              `}
      </div>
    `}};p([b()],B.prototype,`clanTag`,void 0),p([n()],B.prototype,`bans`,void 0),p([n()],B.prototype,`bansTotal`,void 0),p([n()],B.prototype,`bansPage`,void 0),p([n()],B.prototype,`bansLimit`,void 0),p([n()],B.prototype,`memberActionPending`,void 0),p([n()],B.prototype,`loading`,void 0),B=p([d(`clan-bans-view`)],B);var V=class extends f{constructor(...e){super(...e),this.pending=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display=`block`}onClick(){this.dispatchEvent(new CustomEvent(`clan-select`,{detail:{tag:this.clan.tag,source:this.source},bubbles:!0,composed:!0}))}renderBadge(){let e=`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0`;return this.clanRole?h`<span class="${e} ${this.clanRole===`leader`?`bg-amber-500/20 text-amber-400 border border-amber-500/30`:`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`}"
        >${Ln(this.clanRole)}</span
      >`:this.pending?h`<span
        class="${e} bg-amber-500/20 text-amber-400 border border-amber-500/30"
        >${T(`clan_modal.request_pending`)}</span
      >`:this.clan.isOpen?h`<span
        class="${e} bg-green-500/20 text-green-400 border border-green-500/30"
        >${T(`clan_modal.open`)}</span
      >`:h`<span
      class="${e} bg-red-500/20 text-red-400 border border-red-500/30"
      >${T(`clan_modal.invite_only`)}</span
    >`}render(){let e=this.clan;return h`
      <button
        @click=${()=>this.onClick()}
        class="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br ${e.isOpen?`from-malibu-blue/20 to-aquarius/20`:`from-amber-500/20 to-orange-500/20`} flex items-center justify-center border border-white/10 shrink-0"
          >
            <span class="text-white font-bold text-sm">${e.tag}</span>
          </div>
          <div class="flex-1 min-w-0">
            <span class="text-white font-bold truncate block"
              >${e.name}</span
            >
            <div
              class="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-white/40"
            >
              <span
                >${T(`clan_modal.member_count`,{count:e.memberCount??0})}</span
              >
              <!-- Balances ride along on the clan payload — no extra request.
                   Renders nothing when the API reported neither. -->
              <currency-display
                compact
                .hard=${e.hardBalance??null}
                .soft=${e.softBalance??null}
              ></currency-display>
            </div>
          </div>
          ${this.clan.boosted?h`<span
                  data-boosted
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 bg-malibu-blue/15 text-aquarius border border-malibu-blue/40 shadow-malibu-blue-pill"
                  >${T(`clan_modal.boosted`)}</span
                >`:``}
          ${this.renderBadge()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};p([b({type:Object})],V.prototype,`clan`,void 0),p([b()],V.prototype,`clanRole`,void 0),p([b({type:Boolean})],V.prototype,`pending`,void 0),p([b()],V.prototype,`source`,void 0),V=p([d(`clan-card`)],V);var nr=[{value:`random`,labelKey:`clan_modal.sort_browse_random`},{value:`memberCount`,labelKey:`clan_modal.sort_browse_members`},{value:`winScore`,labelKey:`clan_modal.sort_browse_win_score`},{value:`winScoreLow`,labelKey:`clan_modal.sort_browse_win_score_low`},{value:`createdAt`,labelKey:`clan_modal.sort_browse_oldest`},{value:`softBalance`,labelKey:`clan_modal.sort_browse_richest`},{value:`name`,labelKey:`clan_modal.sort_browse_name`}],rr=[{value:`all`,labelKey:`clan_modal.filter_browse_all`},{value:`open`,labelKey:`clan_modal.filter_browse_open`},{value:`inviteOnly`,labelKey:`clan_modal.filter_browse_invite_only`}],ir=`w-full h-full min-h-10 appearance-none pl-3 pr-9 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm`,H=class extends f{constructor(...e){super(...e),this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedState=null,this.searchQuery=``,this.browseData=null,this.browsePage=1,this.browseSort=`random`,this.browseFilter=`all`,this.loading=!1,this.errorMsg=``,this.searchDebounce=null,this.pinnedBucket=void 0,this.asyncGeneration=0}createRenderRoot(){return this}emitState(){this.dispatchEvent(new CustomEvent(`browse-updated`,{detail:{data:this.browseData,page:this.browsePage,query:this.searchQuery,sort:this.browseSort,filter:this.browseFilter},bubbles:!0,composed:!0}))}async loadBrowse(){let e=++this.asyncGeneration;this.loading=!0,this.errorMsg=``;try{let t=await Te(this.searchQuery||void 0,this.browsePage,void 0,this.browseSort,this.pinnedBucket,this.browseFilter);if(e!==this.asyncGeneration)return;if(t===!1)throw Error(`fetch failed`);this.browseData=t,this.pinnedBucket=t.bucket,this.emitState()}catch{if(e!==this.asyncGeneration)return;this.errorMsg=T(`clan_modal.error_loading`)}finally{e===this.asyncGeneration&&(this.loading=!1)}}onSearchInput(e){this.searchQuery=e.target.value,this.searchDebounce&&clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout(()=>{this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()},400)}onSortChange(e){this.browseSort=e,this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()}onFilterChange(e){this.browseFilter=e,this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()}connectedCallback(){super.connectedCallback(),this.cachedState?.data?(this.browseData=this.cachedState.data,this.browsePage=this.cachedState.page,this.searchQuery=this.cachedState.query,this.browseSort=this.cachedState.sort,this.browseFilter=this.cachedState.filter,this.pinnedBucket=this.cachedState.data.bucket):this.loadBrowse()}disconnectedCallback(){this.searchDebounce&&clearTimeout(this.searchDebounce),super.disconnectedCallback()}render(){if(this.loading&&!this.browseData)return g();let e=this.browseData?Math.ceil(this.browseData.total/this.browseData.limit):0,t=new Set(this.myPendingRequests.map(e=>e.tag)),n=(this.browseData?.results??[]).filter(e=>!this.myClanRoles.has(e.tag)),r=(this.browseData?.boostedBlock??[]).filter(e=>!this.myClanRoles.has(e.tag)),i=this.searchQuery.length>=2,a=i&&this.browseSort===`random`?`name`:this.browseSort,o=i?nr.filter(e=>e.value!==`random`):nr;return h`
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row gap-2">
          <div class="relative flex-1">
            <input
              type="text"
              .value=${this.searchQuery}
              @input=${e=>this.onSearchInput(e)}
              class="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
              placeholder="${T(`clan_modal.search_placeholder`)}"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <label
              class="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline"
            >
              ${T(`clan_modal.sort_by`)}
            </label>
            <div class="relative flex-1 sm:flex-none h-full">
              <select
                data-browse-sort
                aria-label=${T(`clan_modal.sort_by`)}
                @change=${e=>this.onSortChange(e.target.value)}
                class=${ir}
              >
                ${o.map(e=>h`
                    <option
                      value=${e.value}
                      .selected=${e.value===a}
                      class="bg-neutral-900"
                    >
                      ${T(e.labelKey)}
                    </option>
                  `)}
              </select>
              ${Wn()}
            </div>
            <div class="relative flex-1 sm:flex-none h-full">
              <select
                data-browse-filter
                aria-label=${T(`clan_modal.filter_browse_label`)}
                @change=${e=>this.onFilterChange(e.target.value)}
                class=${ir}
              >
                ${rr.map(e=>h`
                    <option
                      value=${e.value}
                      .selected=${e.value===this.browseFilter}
                      class="bg-neutral-900"
                    >
                      ${T(e.labelKey)}
                    </option>
                  `)}
              </select>
              ${Wn()}
            </div>
          </div>
        </div>

        ${this.errorMsg?h`<p class="text-red-400 text-sm text-center py-4">
                ${this.errorMsg}
              </p>`:``}
        ${r.length>0?h`<section
                data-boosted-block
                class="space-y-3 rounded-2xl border border-malibu-blue/50 bg-malibu-blue/5 shadow-malibu-blue p-3"
              >
                <h3
                  class="text-[10px] font-bold text-aquarius uppercase tracking-wider px-1"
                >
                  ${T(`clan_modal.boosted_clans`)}
                </h3>
                ${r.map(e=>h`<clan-card
                      .clan=${e}
                      source="boosted"
                      ?pending=${t.has(e.tag)}
                    ></clan-card>`)}
              </section>`:``}

        <div class="space-y-3">
          ${n.length===0&&this.browseData?h`<p class="text-white/40 text-sm text-center py-8">
                  ${T(`clan_modal.no_results`)}
                </p>`:n.map(e=>h`<clan-card
                      .clan=${e}
                      ?pending=${t.has(e.tag)}
                    ></clan-card>`)}
        </div>

        ${e>1?h`
                <div class="flex items-center justify-center gap-2 pt-2">
                  <button
                    @click=${()=>{this.browsePage=Math.max(1,this.browsePage-1),this.loadBrowse()}}
                    ?disabled=${this.browsePage<=1}
                    class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                  >
                    &lt;
                  </button>
                  <span class="text-xs text-white/50 font-medium">
                    ${this.browsePage} / ${e}
                  </span>
                  <button
                    @click=${()=>{this.browsePage=Math.min(e,this.browsePage+1),this.loadBrowse()}}
                    ?disabled=${this.browsePage>=e}
                    class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage>=e?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                  >
                    &gt;
                  </button>
                </div>
              `:``}
      </div>
    `}};p([b({type:Object})],H.prototype,`myClanRoles`,void 0),p([b({type:Array})],H.prototype,`myPendingRequests`,void 0),p([b({type:Object})],H.prototype,`cachedState`,void 0),p([n()],H.prototype,`searchQuery`,void 0),p([n()],H.prototype,`browseData`,void 0),p([n()],H.prototype,`browsePage`,void 0),p([n()],H.prototype,`browseSort`,void 0),p([n()],H.prototype,`browseFilter`,void 0),p([n()],H.prototype,`loading`,void 0),p([n()],H.prototype,`errorMsg`,void 0),H=p([d(`clan-browse-view`)],H);var U=3600*1e3,ar=24*U;function or(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID();let e=crypto.getRandomValues(new Uint8Array(16));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function sr(e){return e>=ar&&e%ar===0?T(`clan_modal.boost_days`,{days:e/ar}):cr(e)}function cr(e){return T(`clan_modal.boost_hours`,{hours:Math.round(e/U*10)/10})}var W=class extends f{constructor(...e){super(...e),this.clanTag=``,this.status=null,this.loadFailed=!1,this.selectedTier=null,this.submitting=!1,this.serverError=null,this.tierLocked=!1,this.idempotencyKey=or(),this.portal=null,this.previouslyFocused=null,this.onKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.cancel())}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeydown,!0),this.loadStatus()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this.onKeydown,!0),this.portal&&=(m(h``,this.portal),this.portal.remove(),null),this.previouslyFocused?.isConnected&&this.previouslyFocused.focus(),this.previouslyFocused=null}focusDialog(){this.updateComplete.then(()=>{(this.portal?.querySelector(`[role="radio"][aria-checked="true"]`)??this.portal?.querySelector(`[role="dialog"]`))?.focus()})}async loadStatus(){let e=await Ye(this.clanTag);if(this.isConnected){if(e===!1){this.loadFailed=!0,this.focusDialog();return}this.status=e,this.selectedTier=e.tiers[0]?.tier??null,this.focusDialog()}}tier(){return this.status?.tiers.find(e=>e.tier===this.selectedTier)??null}currencyLabel(e){return T(e===`hard`?`cosmetics.hard`:`cosmetics.soft`)}clanBalance(e){return this.status?BigInt(e===`hard`?this.status.hardBalance:this.status.softBalance):0n}blocker(){let e=this.status,t=this.tier();if(!e||!t)return null;let n=e.eligibility;return n.memberCount<n.minMembers?T(`clan_modal.boost_error_not_enough_members`,{min:n.minMembers}):n.recentlyActive?t.currency===`soft`&&e.softLimit.usedMs+t.durationMs>e.softLimit.capMs?T(`clan_modal.boost_error_daily_limit`):BigInt(t.price)>this.clanBalance(t.currency)?T(`clan_modal.boost_error_insufficient_balance`,{currency:this.currencyLabel(t.currency)}):null:T(`clan_modal.boost_error_not_recently_active`)}canSubmit(){return!this.submitting&&this.tier()!==null&&this.blocker()===null}selectTier(e){this.submitting||this.tierLocked||e===this.selectedTier||(this.selectedTier=e,this.serverError=null)}onTierKeydown(e){let t=e.key===`ArrowRight`||e.key===`ArrowDown`?1:e.key===`ArrowLeft`||e.key===`ArrowUp`?-1:0,n=this.status?.tiers??[];if(t===0||n.length===0)return;e.preventDefault();let r=n[(n.findIndex(e=>e.tier===this.selectedTier)+t+n.length)%n.length];this.selectTier(r.tier),this.updateComplete.then(()=>this.portal?.querySelector(`[data-tier="${this.selectedTier}"]`)?.focus())}cancel(){this.submitting||this.dispatchEvent(new CustomEvent(`cancel`))}async submit(){let e=this.tier();if(!(!this.canSubmit()||!e)){this.submitting=!0,this.serverError=null;try{let t=await ye(this.clanTag,e.tier,this.idempotencyKey);if(`error`in t){t.error===`clan_modal.error_network`&&(this.tierLocked=!0),this.serverError=T(t.error,{currency:this.currencyLabel(e.currency),min:this.status?.eligibility.minMembers??0});return}this.dispatchEvent(new CustomEvent(`boosted`,{detail:{endsAt:t.endsAt}}))}finally{this.submitting=!1}}}render(){return this.portal&&m(this.renderOverlay(),this.portal),h``}renderTier(e){let t=e.tier===this.selectedTier;return h`
      <button
        type="button"
        role="radio"
        aria-checked=${t}
        tabindex=${t?0:-1}
        data-tier=${e.tier}
        ?disabled=${this.submitting||this.tierLocked&&!t}
        @click=${()=>this.selectTier(e.tier)}
        class="flex-1 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all ${t?`bg-malibu-blue/15 border-aquarius/70 ring-2 ring-malibu-blue/40 text-white`:`bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white`} disabled:opacity-50 disabled:pointer-events-none"
      >
        <span class="text-xs font-bold uppercase tracking-wider">
          ${T(`clan_modal.boost_tier_${e.tier}`)}
        </span>
        <span class="text-[11px]">${sr(e.durationMs)}</span>
        <span class="flex items-center gap-1 text-sm font-bold">
          ${this.currencyIcon(e.currency)}
          ${dt(e.price)}
        </span>
      </button>
    `}currencyIcon(e){return e===`hard`?h`<plutonium-icon .size=${14}></plutonium-icon>`:h`<cap-icon .size=${16}></cap-icon>`}balanceLabel(e){return T(`clan_modal.boost_clan_balance`,{balance:`${dt(this.clanBalance(e).toString())} ${this.currencyLabel(e)}`})}renderLimitMeter(e){let{usedMs:t,capMs:n}=e.softLimit,r=n>0?Math.min(100,t/n*100):0,i=T(`clan_modal.boost_limit_used`,{used:cr(t),cap:cr(n)});return h`<span
      data-limit-meter
      title=${i}
      aria-label=${i}
      class="flex items-center gap-2 text-white/50"
    >
      <cap-icon .size=${14}></cap-icon>
      <span class="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <span
          data-limit-fill
          class="block h-full rounded-full bg-aquarius"
          style="width: ${r}%"
        ></span>
      </span>
      ${T(`clan_modal.boost_limit_short`,{used:Math.round(t/U*10)/10,cap:Math.round(n/U*10)/10})}
    </span>`}renderBody(){if(this.loadFailed)return h`<p class="text-red-400 text-sm" role="alert">
        ${T(`clan_modal.boost_error_failed`)}
      </p>`;let e=this.status;if(!e)return h`<p class="text-white/40 text-sm">…</p>`;let t=this.tier(),n=tr(e.boostEndsAt),r=this.serverError??this.blocker();return h`
      <div
        role="radiogroup"
        aria-label=${T(`clan_modal.boost_tier_label`)}
        @keydown=${e=>this.onTierKeydown(e)}
        class="flex gap-2 mb-4"
      >
        ${e.tiers.map(e=>this.renderTier(e))}
      </div>

      <div class="flex items-center justify-between gap-3 text-xs">
        ${t?h`<span
                data-clan-balance
                title=${this.balanceLabel(t.currency)}
                aria-label=${this.balanceLabel(t.currency)}
                class="flex items-center gap-1.5 font-bold text-white/80"
              >
                ${this.currencyIcon(t.currency)}
                ${dt(this.clanBalance(t.currency).toString())}
              </span>`:h`<span></span>`}
        ${this.renderLimitMeter(e)}
      </div>

      ${n?h`<p
              data-boost-running
              class="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-malibu-blue/15 text-aquarius border border-malibu-blue/40"
            >
              ${T(`clan_modal.boost_time_left`,{remaining:n})}
            </p>`:``}
      ${r?h`<p class="text-red-400 text-xs mt-3" role="alert">${r}</p>`:``}

      <p class="mt-3 text-[11px] text-white/40">
        ${T(`clan_modal.boost_final`)}
      </p>
    `}renderOverlay(){return h`
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="clan-boost-dialog-title"
        tabindex="-1"
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80 focus:outline-none"
        @click=${e=>{e.target===e.currentTarget&&this.cancel()}}
      >
        <!-- A section, not a div: the Halloween theme restyles
             [role="dialog"] > div (translucent purple, orange border), and
             this panel keeps its own look like the donate dialog. -->
        <section
          data-boost-panel
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-malibu-blue/50 bg-surface shadow-2xl"
        >
          <h2
            id="clan-boost-dialog-title"
            class="text-lg font-bold text-white mb-1"
          >
            ${T(`clan_modal.boost_title`,{tag:this.clanTag})}
          </h2>
          <p class="text-white/50 text-xs mb-4">
            ${T(`clan_modal.boost_subtitle`)}
          </p>

          ${this.renderBody()}

          <div class="flex gap-3 mt-5">
            <button
              type="button"
              @click=${()=>this.cancel()}
              ?disabled=${this.submitting}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              ${T(`common.cancel`)}
            </button>
            <button
              type="button"
              data-action="buy-boost"
              @click=${()=>void this.submit()}
              ?disabled=${!this.canSubmit()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all disabled:opacity-50 disabled:pointer-events-none border-0 bg-malibu-blue hover:bg-aquarius"
            >
              ${T(this.submitting?`clan_modal.boost_submitting`:`clan_modal.boost_confirm`)}
            </button>
          </div>
        </section>
      </div>
    `}};p([b()],W.prototype,`clanTag`,void 0),p([n()],W.prototype,`status`,void 0),p([n()],W.prototype,`loadFailed`,void 0),p([n()],W.prototype,`selectedTier`,void 0),p([n()],W.prototype,`submitting`,void 0),p([n()],W.prototype,`serverError`,void 0),p([n()],W.prototype,`tierLocked`,void 0),W=p([d(`clan-boost-dialog`)],W);function lr(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID();let e=crypto.getRandomValues(new Uint8Array(16));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function ur(e){return BigInt(Math.trunc(e))}var G=class extends f{constructor(...e){super(...e),this.clanTag=``,this.currencyType=`soft`,this.amountInput=``,this.balances=null,this.submitting=!1,this.serverError=null,this.idempotencyKey=lr(),this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),this.loadBalances()}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(m(h``,this.portal),this.portal.remove(),null)}async loadBalances(){let e=await u();this.isConnected&&(!e||!e.player.currency||(this.balances=e.player.currency))}currencyLabel(e=this.currencyType){return T(e===`hard`?`cosmetics.hard`:`cosmetics.soft`)}parsedAmount(){let e=this.amountInput.trim();if(!/^\d+$/.test(e))return null;let t=BigInt(e);return t>0n?t:null}exceedsBalance(e){return this.balances?e>ur(this.balances[this.currencyType]):!1}validationError(){if(this.amountInput.trim()===``)return null;let e=this.parsedAmount();return e===null?T(`clan_modal.donate_invalid_amount`):this.exceedsBalance(e)?T(`clan_modal.donate_insufficient`,{currency:this.currencyLabel()}):null}canSubmit(){let e=this.parsedAmount();return!this.submitting&&e!==null&&!this.exceedsBalance(e)}selectCurrency(e){this.submitting||e===this.currencyType||(this.currencyType=e,this.serverError=null)}onAmountInput(e){this.amountInput=e.target.value,this.serverError=null}cancel(){this.submitting||this.dispatchEvent(new CustomEvent(`cancel`))}async submit(){let e=this.parsedAmount();if(!(!this.canSubmit()||e===null)){this.submitting=!0,this.serverError=null;try{let t=await Qe(this.clanTag,this.currencyType,e.toString(),this.idempotencyKey);if(t!==!0){this.serverError=T(t.error,{currency:this.currencyLabel()});return}this.dispatchEvent(new CustomEvent(`donated`,{detail:{currencyType:this.currencyType,amount:e.toString()}}))}finally{this.submitting=!1}}}render(){return this.portal&&m(this.renderOverlay(),this.portal),h``}renderCurrencyOption(e){let t=this.currencyType===e,n=this.balances?dt(this.balances[e]):null,r=e===`hard`?`bg-green-500/15 border-green-400/70 ring-2 ring-green-400/40 text-white`:`bg-amber-500/15 border-amber-400/70 ring-2 ring-amber-400/40 text-white`;return h`
      <button
        type="button"
        role="radio"
        aria-checked=${t}
        data-currency=${e}
        ?disabled=${this.submitting}
        @click=${()=>this.selectCurrency(e)}
        class="relative flex-1 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all ${t?r:`bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white`} disabled:opacity-50 disabled:pointer-events-none"
      >
        ${t?h`<span
                data-check
                class="absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${e===`hard`?`bg-green-400`:`bg-amber-400`} text-black flex items-center justify-center"
              >
                <svg
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>`:``}
        <span
          class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
        >
          ${e===`hard`?h`<plutonium-icon .size=${14}></plutonium-icon>`:h`<cap-icon .size=${16}></cap-icon>`}
          ${this.currencyLabel(e)}
        </span>
        <span class="text-[11px] text-white/50">
          ${n===null?`…`:T(`clan_modal.donate_your_balance`,{balance:n})}
        </span>
      </button>
    `}renderOverlay(){let e=this.currencyType===`hard`,t=this.validationError(),n=this.serverError??t,r=this.canSubmit();return h`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.cancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border ${e?`border-red-500/50`:`border-amber-500/50`} bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-1">
            ${T(`clan_modal.donate_title`,{tag:this.clanTag})}
          </h2>
          <p class="text-white/50 text-xs mb-4">
            ${T(`clan_modal.donate_subtitle`)}
          </p>

          <div role="radiogroup" class="flex gap-2 mb-4">
            ${this.renderCurrencyOption(`soft`)}
            ${this.renderCurrencyOption(`hard`)}
          </div>

          <label
            class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
            for="clan-donate-amount"
            >${T(`clan_modal.donate_amount`)}</label
          >
          <input
            id="clan-donate-amount"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="0"
            .value=${this.amountInput}
            ?disabled=${this.submitting}
            @input=${e=>this.onAmountInput(e)}
            @keydown=${e=>{e.key===`Enter`&&this.submit()}}
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm disabled:opacity-50"
          />
          ${n?h`<p class="text-red-400 text-xs mt-2" role="alert">
                  ${n}
                </p>`:``}

          <div
            class="mt-4 rounded-xl border p-3 text-xs ${e?`border-red-500/40 bg-red-500/10 text-red-300`:`border-amber-500/30 bg-amber-500/10 text-amber-300`}"
          >
            <p class="font-bold">
              ${T(`clan_modal.donate_irreversible`)}
            </p>
            ${e?h`<p class="mt-1">
                    ${T(`clan_modal.donate_irreversible_hard`)}
                  </p>`:``}
          </div>

          <div class="flex gap-3 mt-5">
            <button
              type="button"
              @click=${()=>this.cancel()}
              ?disabled=${this.submitting}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              ${T(`common.cancel`)}
            </button>
            <button
              type="button"
              data-action="donate"
              @click=${()=>void this.submit()}
              ?disabled=${!r}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all disabled:opacity-50 disabled:pointer-events-none border-0 ${e?`bg-red-600 hover:bg-red-700`:`bg-amber-600 hover:bg-amber-700`}"
            >
              ${T(this.submitting?`clan_modal.donate_submitting`:`clan_modal.donate`)}
            </button>
          </div>
        </div>
      </div>
    `}};p([b()],G.prototype,`clanTag`,void 0),p([n()],G.prototype,`currencyType`,void 0),p([n()],G.prototype,`amountInput`,void 0),p([n()],G.prototype,`balances`,void 0),p([n()],G.prototype,`submitting`,void 0),p([n()],G.prototype,`serverError`,void 0),G=p([d(`clan-donate-dialog`)],G);var K=class extends f{constructor(...e){super(...e),this.clanTag=``,this.joinSource=void 0,this.myPublicId=null,this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedDetail=null,this.detailTab=`overview`,this.cachedClan=null,this.selectedClan=null,this.discordMeta=null,this.myRole=null,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.pendingRequestCount=0,this.loading=!1,this.actionPending=!1,this.allStatsExpanded=!1,this.membersLoadInFlight=!1,this.memberSearch=``,this.donateOpen=!1,this.boostOpen=!1,this.memberSearchDebounce=null,this.memberLoadSeq=0,this.asyncGeneration=0,this.boostTicker=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.boostTicker=setInterval(()=>{this.selectedClan?.boostEndsAt&&this.requestUpdate()},6e4),this.cachedDetail&&this.cachedDetail.tag===this.clanTag?this.restoreFromCache(this.cachedDetail):this.clanTag&&this.loadDetail()}restoreFromCache(e){this.selectedClan=this.cachedClan,this.members=e.members,this.membersTotal=e.membersTotal,this.pendingRequestCount=e.pendingRequestCount,this.memberPage=1;let t=this.myClanRoles.get(this.clanTag);this.myRole=t??null,this.discordMeta=null,this.cachedClan?.discordUrl&&this.loadDiscordMeta(this.cachedClan.discordUrl,this.clanTag,this.asyncGeneration)}async loadDiscordMeta(e,t,n){let r=await Ae(e);n!==this.asyncGeneration||this.clanTag!==t||(this.discordMeta=r)}disconnectedCallback(){this.boostTicker&&clearInterval(this.boostTicker),this.boostTicker=null,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}updated(){this.allStatsExpanded&&this.querySelectorAll(`clan-stats-breakdown`).forEach(e=>e.setAllExpanded(!0))}async loadDetail(){let e=++this.asyncGeneration;this.memberLoadSeq++,this.loading=!0,this.myRole=null,this.pendingRequestCount=0,this.memberSearch=``;let t=this.detailTab===`members`&&this.myClanRoles.has(this.clanTag),n=Fe(this.clanTag);t&&this.loadInitialMembers();let r=await n;if(e===this.asyncGeneration){if(this.loading=!1,!r){v(T(`clan_modal.failed_to_load_clan`),`red`),this.dispatchEvent(new CustomEvent(`navigate-back`,{bubbles:!0,composed:!0}));return}this.selectedClan=r,this.discordMeta=null,r.discordUrl&&this.loadDiscordMeta(r.discordUrl,this.clanTag,e),this.memberPage=1,t||(this.members=[],this.membersTotal=0),this.myRole=this.myClanRoles.get(this.clanTag)??null,this.dispatchEvent(new CustomEvent(`detail-loaded`,{detail:{clan:r,myRole:this.myRole,members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}}async loadInitialMembers(){if(this.membersLoadInFlight||!this.clanTag||!this.myClanRoles.has(this.clanTag)||this.members.length>0)return;let e=this.clanTag;this.membersLoadInFlight=!0;try{let t=await C(e,1,this.membersPerPage,this.memberSort,this.memberOrder);if(e!==this.clanTag||!t)return;this.members=t.results,this.membersTotal=t.total,this.pendingRequestCount=t.pendingRequests??0,this.memberPage=1,this.dispatchEvent(new CustomEvent(`members-loaded`,{detail:{members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}finally{this.membersLoadInFlight=!1}}willUpdate(e){(e.has(`detailTab`)||e.has(`selectedClan`))&&this.detailTab===`members`&&this.selectedClan&&this.members.length===0&&this.myClanRoles.has(this.clanTag)&&this.loadInitialMembers()}async loadMemberPage(e,t=this.memberSearch){if(!this.selectedClan)return;let n=++this.memberLoadSeq,r=t?await C(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await C(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)&&r){if(r.results.length===0&&e>1){await this.loadMemberPage(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan.memberCount!==r.total&&(this.selectedClan={...this.selectedClan,memberCount:r.total})}}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=Fn(e),this.loadMemberPage(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMemberPage(1)}async handleJoin(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await Ue(this.selectedClan.tag,this.joinSource);if(`error`in e){e.error===`clan_modal.sign_in_for_clans`&&window.showPage?.(`page-account`),v(e.reason?T(e.error,{reason:e.reason}):T(e.error),`red`);return}w(),e.status===`joined`?(this.myRole=`member`,await this.loadMemberPage(1),this.dispatchEvent(new CustomEvent(`clan-joined`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent(`request-sent`,{detail:{tag:this.selectedClan.tag,name:this.selectedClan.name},bubbles:!0,composed:!0})),v(T(`clan_modal.join_request_sent`),`green`))}finally{this.actionPending=!1}}}async handleLeave(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await Pe(this.selectedClan.tag);if(e!==!0){v(T(e.error),`red`);return}w(),this.dispatchEvent(new CustomEvent(`clan-left`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0})),v(T(`clan_modal.left_clan`),`green`)}finally{this.actionPending=!1}}}async handleDonated(e){this.donateOpen=!1;let t=this.selectedClan;if(!t)return;let{currencyType:n,amount:r}=e.detail;v(T(`clan_modal.donate_success`,{amount:BigInt(r).toLocaleString(),currency:T(n===`hard`?`cosmetics.hard`:`cosmetics.soft`),tag:t.tag}),`green`),qe();let i=this.asyncGeneration,a=await Fe(t.tag);!a||i!==this.asyncGeneration||this.clanTag!==t.tag||this.applyRefreshedClan(a)}async handleBoosted(e){this.boostOpen=!1;let t=this.selectedClan;if(!t)return;v(T(`clan_modal.boost_success`,{tag:t.tag,remaining:tr(e.detail.endsAt)??``}),`green`);let n=this.asyncGeneration,r=await Fe(t.tag);!r||n!==this.asyncGeneration||this.clanTag!==t.tag||this.applyRefreshedClan(r)}applyRefreshedClan(e){this.selectedClan=e,this.dispatchEvent(new CustomEvent(`clan-refreshed`,{detail:{clan:e},bubbles:!0,composed:!0}))}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMemberPage(1,t)},200))}render(){if(this.loading)return g();let e=this.selectedClan;if(!e)return``;let t=this.myRole!==null,n=this.myRole===`leader`,r=this.myRole===`officer`,i=n||r,a=this.myPendingRequests.some(t=>t.tag===e.tag);if(this.detailTab===`members`)return t?this.membersLoadInFlight&&this.members.length===0?g():h`
        <div class="space-y-6">
          ${i&&this.pendingRequestCount>0?this.renderRequestsButton():``}
          ${this.renderMembersList()}
        </div>
      `:h`
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/40 text-sm">
              ${T(`clan_modal.members_visible_to_members`)}
            </p>
          </div>
        `;let o=tr(e.boostEndsAt),s=h`
      ${o?h`<div
              data-boost-left
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-malibu-blue/15 text-aquarius border border-malibu-blue/40 shadow-malibu-blue-pill"
            >
              ${T(`clan_modal.boost_time_left`,{remaining:o})}
            </div>`:``}
      <div
        data-clan-actions
        class="grid grid-cols-2 gap-3 [&>:last-child:nth-child(odd)]:col-span-2"
      >
        ${this.renderActionButtons(t,n,r,a,e)}
      </div>
      ${this.donateOpen&&t?h`<clan-donate-dialog
              .clanTag=${e.tag}
              @donated=${e=>void this.handleDonated(e)}
              @cancel=${()=>this.donateOpen=!1}
            ></clan-donate-dialog>`:``}
      ${this.boostOpen&&(n||r)?h`<clan-boost-dialog
              .clanTag=${e.tag}
              @boosted=${e=>void this.handleBoosted(e)}
              @cancel=${()=>this.boostOpen=!1}
            ></clan-boost-dialog>`:``}
    `;return e.discordUrl?h`
        <div class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-5 items-start">
            <div class="sm:col-span-3 flex flex-col gap-4">
              ${this.renderDescriptionCard(e)}
              <div class="grid grid-cols-2 gap-4">
                ${this.renderStatTiles(e)}
              </div>
            </div>
            <div class="sm:col-span-2">
              ${this.renderDiscordCard(e.discordUrl)}
            </div>
          </div>
          ${s}
        </div>
      `:h`
      <div class="space-y-6">
        ${this.renderDescriptionCard(e)}
        <div class="grid grid-cols-2 gap-3">${this.renderStatTiles(e)}</div>
        ${s}
      </div>
    `}renderRequestsButton(){return h`
      <button
        @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-requests`,{bubbles:!0,composed:!0}))}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${T(`clan_modal.join_requests`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${T(`clan_modal.pending_requests_count`,{count:this.pendingRequestCount})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${this.pendingRequestCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}toggleAllStats(){this.allStatsExpanded=!this.allStatsExpanded;let e=this.allStatsExpanded;this.querySelectorAll(`clan-stats-breakdown`).forEach(t=>t.setAllExpanded(e))}renderMembersList(){let e=$n(this.members,this.memberSearch),t=Xn(e),n=T(this.allStatsExpanded?`common.collapse_all`:`common.expand_all`);return h`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${T(`clan_modal.members`)}
          </h3>
          <button
            type="button"
            @click=${()=>this.toggleAllStats()}
            class="text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
            title=${n}
            aria-pressed=${this.allStatsExpanded}
          >
            ${n}
          </button>
        </div>
        ${z(e=>this.onSearchInput(e),this.memberSearch,void 0,Gn(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
        <div class="space-y-2">
          ${e.map(e=>Qn(e,this.myPublicId,this,t))}
        </div>
        ${qn(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMemberPage(e),e=>{this.membersPerPage=e,this.loadMemberPage(1)})}
      </div>
    `}renderDescriptionCard(e){return h`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5">
        <p class="text-white/70 text-sm">
          ${e.description||T(`clan_modal.no_description`)}
        </p>
      </div>
    `}renderStatTiles(e){return h`
      ${zn(T(`clan_modal.members`),`${e.memberCount??0}`)}
      ${zn(T(`clan_modal.status`),e.isOpen?T(`clan_modal.open`):T(`clan_modal.invite_only`))}
    `}renderDiscordCard(e){let t=this.discordMeta,n=t?.valid===!0,r=t?.serverName??T(`clan_modal.discord_default_name`),i=t?.valid===!1,a=n?t?.bannerUrl??null:null,o=n?t?.description??null:null,s=n&&(typeof t?.onlineCount==`number`||typeof t?.memberCount==`number`);return h`
      <div
        class="h-full flex flex-col rounded-xl border border-[#5865F2]/25 bg-[#5865F2]/10 overflow-hidden"
      >
        ${a?h`<div
                class="relative w-full aspect-video max-h-56 overflow-hidden"
              >
                <img
                  src=${a}
                  alt=""
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                ></div>
              </div>`:``}
        <div class="p-5 flex flex-col flex-1">
          ${a?``:h`<div class="flex items-center gap-2 mb-4">
                  <svg
                    class="w-5 h-5 text-[#5865F2]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    />
                  </svg>
                  <h3
                    class="text-sm font-bold text-white/60 uppercase tracking-wider"
                  >
                    ${T(`clan_modal.discord_section_title`)}
                  </h3>
                </div>`}
          <div class="flex items-center gap-3.5">
            ${t?.iconUrl?h`<img
                    src=${t.iconUrl}
                    alt=""
                    class="w-12 h-12 rounded-2xl shrink-0 object-cover ring-1 ring-white/10"
                  />`:h`<div
                    class="w-12 h-12 rounded-2xl bg-[#5865F2] flex items-center justify-center shrink-0 text-white text-lg font-bold"
                  >
                    ${r.charAt(0).toUpperCase()}
                  </div>`}
            <div class="min-w-0 flex-1">
              <div class="text-white text-sm font-bold truncate">
                ${r}
              </div>
              ${s?h`<div
                      class="flex items-center gap-1.5 mt-1 text-white/50 text-xs"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"
                      ></span>
                      ${T(`clan_modal.discord_online_members`,{online:t?.onlineCount??0,members:t?.memberCount??0})}
                    </div>`:``}
            </div>
          </div>
          ${o?h`<p
                  class="mt-3 text-white/50 text-xs leading-relaxed line-clamp-2"
                >
                  ${o}
                </p>`:``}
          <!-- Grows when the card is stretched taller than its content,
               pinning the button to the bottom (aligned with Manage). -->
          <div class="flex-1"></div>
          ${i?h`<p class="text-amber-400/80 text-xs mt-4">
                  ${T(`clan_modal.discord_invite_unavailable`)}
                </p>`:h`<a
                  href=${e}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white uppercase tracking-wider bg-[#5865F2] hover:bg-[#4752c4] active:bg-[#3c45a5] rounded-xl transition-all shadow-lg shadow-[#5865F2]/20"
                >
                  ${T(`clan_modal.open_discord`)}
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>`}
        </div>
      </div>
    `}renderActionButtons(e,t,n,r,i){let a=[];return!e&&this.myPublicId===null?a.push(h`
        <button
          @click=${()=>window.showPage?.(`page-account`)}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all"
        >
          ${T(`clan_modal.sign_in_to_join`)}
        </button>
      `):!e&&r?a.push(h`
        <button
          disabled
          class="w-full px-4 py-3 text-sm font-bold text-white/40 uppercase tracking-wider bg-white/5 rounded-xl border border-white/10 cursor-not-allowed"
        >
          ${T(`clan_modal.request_pending`)}
        </button>
      `):!e&&i.isOpen?a.push(h`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          ${T(`clan_modal.join_clan`)}
        </button>
      `):!e&&!i.isOpen&&a.push(h`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${T(`clan_modal.request_invite`)}
        </button>
      `),e&&a.push(h`
        <button
          @click=${()=>this.donateOpen=!0}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5"
        >
          ${T(`clan_modal.donate`)}
        </button>
      `),(t||n)&&(a.push(h`
        <button
          data-action="boost"
          @click=${()=>this.boostOpen=!0}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all"
        >
          ${T(`clan_modal.boost`)}
        </button>
      `),a.push(h`
        <button
          @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-manage`,{bubbles:!0,composed:!0}))}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-white/10 hover:bg-white/15 rounded-xl transition-all border border-white/10"
        >
          ${T(`clan_modal.manage_clan`)}
        </button>
      `)),e&&!t&&a.push(h`
        <button
          @click=${()=>this.handleLeave()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white/70 uppercase tracking-wider bg-red-600/30 hover:bg-red-600/50 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${T(`clan_modal.leave_clan`)}
        </button>
      `),a}};p([b()],K.prototype,`clanTag`,void 0),p([b()],K.prototype,`joinSource`,void 0),p([b()],K.prototype,`myPublicId`,void 0),p([b({type:Object})],K.prototype,`myClanRoles`,void 0),p([b({type:Array})],K.prototype,`myPendingRequests`,void 0),p([b({type:Object})],K.prototype,`cachedDetail`,void 0),p([b()],K.prototype,`detailTab`,void 0),p([b({type:Object})],K.prototype,`cachedClan`,void 0),p([n()],K.prototype,`selectedClan`,void 0),p([n()],K.prototype,`discordMeta`,void 0),p([n()],K.prototype,`myRole`,void 0),p([n()],K.prototype,`members`,void 0),p([n()],K.prototype,`membersTotal`,void 0),p([n()],K.prototype,`memberPage`,void 0),p([n()],K.prototype,`membersPerPage`,void 0),p([n()],K.prototype,`memberSort`,void 0),p([n()],K.prototype,`memberOrder`,void 0),p([n()],K.prototype,`pendingRequestCount`,void 0),p([n()],K.prototype,`loading`,void 0),p([n()],K.prototype,`actionPending`,void 0),p([n()],K.prototype,`allStatsExpanded`,void 0),p([n()],K.prototype,`membersLoadInFlight`,void 0),p([n()],K.prototype,`memberSearch`,void 0),p([n()],K.prototype,`donateOpen`,void 0),p([n()],K.prototype,`boostOpen`,void 0),K=p([d(`clan-detail-view`)],K);var dr=[{key:`recent`,labelKey:`clan_modal.donations_recent`},{key:`top`,labelKey:`clan_modal.donations_top`}],fr=[{key:`all`,labelKey:`clan_modal.donations_filter_all`},{key:`soft`,labelKey:`cosmetics.soft`,icon:h`<cap-icon .size=${14}></cap-icon>`},{key:`hard`,labelKey:`cosmetics.hard`,icon:h`<plutonium-icon .size=${14}></plutonium-icon>`}],pr=[{key:`all`,labelKey:`clan_modal.donations_period_all`},{key:`month`,labelKey:`clan_modal.donations_period_month`},{key:`week`,labelKey:`clan_modal.donations_period_week`}],mr={1:{icon:`👑`,badge:`bg-yellow-400/10 ring-1 ring-yellow-400/30`,row:`bg-yellow-400/[0.06] border-yellow-400/25`},2:{icon:`🥈`,badge:`bg-slate-400/10 ring-1 ring-slate-400/30`,row:`bg-slate-300/[0.05] border-slate-300/20`},3:{icon:`🥉`,badge:`bg-amber-600/10 ring-1 ring-amber-600/30`,row:`bg-amber-600/[0.06] border-amber-600/25`}},q=class extends f{constructor(...e){super(...e),this.clanTag=``,this.mode=`recent`,this.donations=[],this.donors=[],this.total=0,this.page=1,this.perPage=10,this.filter=`all`,this.period=`all`,this.leaderTotal=0n,this.loading=!1,this.loadState=`ok`,this.asyncGeneration=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.clanTag&&this.load()}async load(){if(!this.clanTag)return;let e=++this.asyncGeneration;if(this.loading=!0,this.loadState=`ok`,this.mode===`top`){let t=await Ce(this.clanTag,{currencyType:this.filter===`hard`?`hard`:`soft`,period:this.period,page:this.page,limit:this.perPage});if(e!==this.asyncGeneration)return;this.applyResult(t,e=>{this.donors=e,this.page===1&&(this.leaderTotal=BigInt(e[0]?.total??0))})}else{let t=await Ve(this.clanTag,{page:this.page,limit:this.perPage,currencyType:this.filter===`all`?void 0:this.filter});if(e!==this.asyncGeneration)return;this.applyResult(t,e=>this.donations=e)}}applyResult(e,t){if(this.loading=!1,this.donations=[],this.donors=[],`error`in e){this.loadState=e.error,this.total=0;return}t(e.results),this.total=e.total}setMode(e){e!==this.mode&&(this.mode=e,e===`top`&&this.filter===`all`&&(this.filter=`soft`),this.page=1,this.load())}setFilter(e){e!==this.filter&&(this.filter=e,this.page=1,this.load())}setPeriod(e){e!==this.period&&(this.period=e,this.page=1,this.load())}setPage(e){e!==this.page&&(this.page=e,this.load())}setPerPage(e){e!==this.perPage&&(this.perPage=e,this.page=1,this.load())}render(){if(this.loadState===`forbidden`)return h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${T(`clan_modal.donations_members_only`)}
          </p>
        </div>
      `;let e=this.mode===`top`;return h`<div class="space-y-3">
      ${this.renderTabs(dr,this.mode,e=>this.setMode(e),`mode`)}
      <div class="flex flex-wrap items-center justify-between gap-2">
        ${this.renderTabs(e?fr.filter(e=>e.key!==`all`):fr,this.filter,e=>this.setFilter(e),`currency`,!0)}
        ${e?this.renderTabs(pr,this.period,e=>this.setPeriod(e),`period`,!0):null}
      </div>
      ${this.renderBody()}
    </div>`}renderTabs(e,t,n,r,i=!1){return h`
      <div
        role="tablist"
        data-tabs=${r}
        class="${i?`inline-flex`:`flex`} gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let r=t===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${r}
              data-tab=${e.key}
              @click=${()=>n(e.key)}
              class="${i?``:`flex-1`} inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${r?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${e.icon??null}${T(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){if(this.loading)return g();if(this.loadState===`failed`)return h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${T(`clan_modal.donations_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${T(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `;let e=this.mode===`top`;return(e?this.donors:this.donations).length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${T(e?`clan_modal.donations_top_empty`:`clan_modal.donations_empty`)}
          </p>
        </div>
      `:h`
      <div class="space-y-2">
        ${e?this.donors.map(e=>this.renderDonorRow(e)):this.donations.map(e=>this.renderRow(e))}
      </div>
      ${qn(this.page,this.total,this.perPage,e=>this.setPage(e),e=>this.setPerPage(e))}
    `}renderRow(e){let t=e.currencyType===`hard`;return h`
      <div
        data-donation-id=${e.id}
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border bg-white/5 border-white/10"
      >
        <div class="flex-1 min-w-0 flex flex-col">
          ${e.createdBy===null?h`<span class="text-sm text-white/40 italic"
                  >${T(`clan_modal.donations_deleted_player`)}</span
                >`:h`<div class="min-w-0">
                  ${P(this,e.createdByUsername,e.createdBy)}
                </div>`}
          <span class="text-white/30 text-[10px] whitespace-nowrap"
            >${_t(e.createdAt)}</span
          >
        </div>
        <currency-display
          class="shrink-0"
          .hard=${t?e.amount:null}
          .soft=${t?null:e.amount}
        ></currency-display>
      </div>
    `}renderDonorRow(e){let t=this.filter===`hard`,n=mr[e.rank],r=BigInt(e.total),i=this.leaderTotal>0n?Math.min(100,Number(r*1000n/this.leaderTotal)/10):0;return h`
      <div
        data-donor-id=${e.playerId}
        data-rank=${e.rank}
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border ${n?.row??`bg-white/5 border-white/10`}"
      >
        <span
          class="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg font-bold tabular-nums ${n?`text-lg ${n.badge}`:`text-sm text-white/40 bg-white/5`}"
          >${n?.icon??e.rank}</span
        >
        <div class="flex-1 min-w-0 flex flex-col gap-1">
          <div class="flex items-baseline justify-between gap-3 min-w-0">
            <div class="min-w-0">
              ${P(this,e.username,e.playerId)}
            </div>
            <currency-display
              class="shrink-0"
              .hard=${t?e.total:null}
              .soft=${t?null:e.total}
            ></currency-display>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                data-share
                class="h-full rounded-full ${t?`bg-green-400/60`:`bg-amber-600/70`}"
                style="width: ${i}%"
              ></div>
            </div>
            <span class="shrink-0 text-white/30 text-[10px] whitespace-nowrap"
              >${T(`clan_modal.donations_count`,{count:e.donations})}</span
            >
          </div>
        </div>
      </div>
    `}};p([b()],q.prototype,`clanTag`,void 0),p([n()],q.prototype,`mode`,void 0),p([n()],q.prototype,`donations`,void 0),p([n()],q.prototype,`donors`,void 0),p([n()],q.prototype,`total`,void 0),p([n()],q.prototype,`page`,void 0),p([n()],q.prototype,`perPage`,void 0),p([n()],q.prototype,`filter`,void 0),p([n()],q.prototype,`period`,void 0),p([n()],q.prototype,`loading`,void 0),p([n()],q.prototype,`loadState`,void 0),q=p([d(`clan-donations-view`)],q);var hr=x(`images/LeaderboardIconRegularWhite.svg`),gr=x(`images/ReplayRegularIconWhite.svg`),_r=x(`images/LinkIconWhite.svg`),vr=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],J=class extends f{constructor(...e){super(...e),this.clanTag=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.filter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.cachedState&&this.cachedState.tag===this.clanTag?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.filter=this.cachedState.filter):this.clanTag&&this.reload()}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setFilter(e){e!==this.filter&&(this.filter=e,this.reload())}async load({append:e}){if(!this.clanTag)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=this.filter===`all`?void 0:this.filter,r=e?this.nextCursor??void 0:void 0,i=await Xe(this.clanTag,{filter:n,cursor:r});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in i){e?this.appendFailed=!0:(this.loadState=i.error,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...i.results]:i.results,this.nextCursor=i.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{tag:this.clanTag,filter:this.filter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}async watchReplay(e){try{let t=encodeURIComponent(e),n=ve(l.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}})),this.dispatchEvent(new CustomEvent(`close-clan-modal`,{bubbles:!0,composed:!0}))}catch{v(T(`clan_modal.error_failed`),`red`)}}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let t=`${l.shareOrigin()}${l.gamePath(e)}`;try{await We(t),v(T(`common.copied`),`green`)}catch{v(T(`common.failed_copy`),`red`)}}render(){return this.loadState===`forbidden`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${T(`clan_modal.history_members_only`)}
          </p>
        </div>
      `:h`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${vr.map(e=>{let t=this.filter===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${t}
              @click=${()=>this.setFilter(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${T(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?g():this.loadState===`failed`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${T(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${T(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${T(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=gt(this.games),this.groupedFor=this.games),h`
      <div class="space-y-5">
        ${this.grouped.map(e=>h`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5 pointer-events-none"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${ht(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?h`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${T(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?h`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${T(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${T(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:h`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?g():``}
      </div>
    `}renderGameRow(e){let t=null;if(e.map)try{t=ee.getMapData(e.map).webpPath}catch{t=null}let n=e.map?Ze(e.map)??e.map:null,r=[],i=[];for(let t of e.clanPlayers)(t.won?r:i).push(t);return h`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${t?h`<div
                class="relative w-full aspect-[30/11] overflow-hidden bg-surface"
              >
                <img
                  src=${t}
                  alt=${n??``}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                ${n?h`<div
                        class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                      >
                        ${n}
                      </div>`:``}
                <div class="absolute top-2 left-2">
                  ${this.renderResultBadge(e,r)}
                </div>
                <div
                  class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                >
                  ${_t(e.start)}
                </div>
              </div>`:``}
        <div
          class=${t?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${T(`game_list.stats`)}
              aria-label=${T(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${hr}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${T(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${T(`common.click_to_copy`)}
              aria-label=${T(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${_r}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${T(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${T(`clan_modal.history_watch_replay`)}
              aria-label=${T(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${gr}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${T(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(T(`clan_modal.history_game_type`),St(e))}
          ${t?``:this.renderField(T(`clan_modal.history_map`),n??`—`)}
          ${this.renderPlayersField(e)}
          ${this.renderField(T(`clan_modal.history_duration`),Oe(e.durationSeconds))}
        </div>
        ${this.renderPlayerLists(e,r,i)}
      </div>
    `}renderField(e,t){return h`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e,t){let n=e.result;if(!n)return h``;let r=e.clanPlayers.length,i=t.length,a=(xt(e)||e.rankedType!==void 0&&e.rankedType!==`unranked`)&&r>1&&i>0&&i<r,o,s;return a?(o=T(`clan_modal.history_result_partial`,{wins:i,total:r}),s=`text-white bg-amber-500 border-amber-400`):n===`victory`?(o=T(`clan_modal.history_result_victory`),s=`text-white bg-green-600 border-green-500`):(o=T(`clan_modal.history_result_defeat`),s=`text-white bg-red-600 border-red-500`),h`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${s}"
      >${o}</span
    >`}renderPlayerLists(e,t,n){return e.clanPlayers.length===0?``:h`
      ${t.length>0?this.renderPlayerSection(T(`clan_modal.history_clan_winners`),t,`text-green-400`,`winners`):``}
      ${n.length>0?this.renderPlayerSection(T(`clan_modal.history_clan_members`),n,`text-white/40`,`losers`):``}
    `}renderPlayerSection(e,t,n,r){return h`
      <div
        class="px-4 py-2 border-t border-white/5 text-xs text-white/60 flex flex-wrap items-center gap-x-1 gap-y-1"
        data-player-section=${r}
      >
        <span
          class="text-[10px] font-bold uppercase tracking-wider mr-1 ${n}"
          >${e}:</span
        >
        ${t.map((e,t)=>t===0?this.renderClanPlayerName(e):h`<span
                class="inline-flex items-center gap-x-1 min-w-0 max-w-full"
              >
                <span
                  class="text-white text-2xl leading-none select-none"
                  aria-hidden="true"
                  data-name-separator
                  >&middot;</span
                >${this.renderClanPlayerName(e)}
              </span>`)}
      </div>
    `}renderClanPlayerName(e){return h`
      <span class="inline-flex items-center gap-1 min-w-0 max-w-full">
        <button
          type="button"
          class="font-bold text-blue-300 truncate hover:underline"
          title=${T(`player_profile.view`)}
          @click=${()=>Xt(this,e.publicId)}
        >
          ${e.username}
        </button>
        ${e.verified===!0?c():o}
      </span>
    `}renderPlayersField(e){let t=e.rankedType!==void 0&&e.rankedType!==`unranked`,n=e.totalPlayers??null;return t?this.renderField(T(`clan_modal.history_players`),n===null?`—`:`${n}`):this.renderField(T(`clan_modal.history_clan_players`),n===null?`${e.clanPlayers.length}`:T(`clan_modal.history_clan_players_value`,{clanCount:e.clanPlayers.length,total:n}))}};p([b()],J.prototype,`clanTag`,void 0),p([b({type:Object})],J.prototype,`cachedState`,void 0),p([n()],J.prototype,`games`,void 0),p([n()],J.prototype,`nextCursor`,void 0),p([n()],J.prototype,`loading`,void 0),p([n()],J.prototype,`loadingMore`,void 0),p([n()],J.prototype,`loadState`,void 0),p([n()],J.prototype,`appendFailed`,void 0),p([n()],J.prototype,`filter`,void 0),J=p([d(`clan-game-history-view`)],J);var Y=class extends f{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.myPublicId=null,this.myRole=null,this.manageName=``,this.manageDescription=``,this.manageDiscordUrl=``,this.manageIsOpen=!0,this.saving=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.memberActionPending=!1,this.loading=!1,this.confirmAction=null,this.confirmTargetId=null,this.pendingRequestCount=0,this.actionPending=!1,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.selectedClan&&(this.manageName=this.selectedClan.name,this.manageDescription=this.selectedClan.description??``,this.manageDiscordUrl=this.selectedClan.discordUrl??``,this.manageIsOpen=this.selectedClan.isOpen??!0),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await C(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await C(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan&&this.selectedClan.memberCount!==r.total&&this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{memberCount:r.total},bubbles:!0,composed:!0})),this.loading=!1}}async handleSaveSettings(){let e=this.selectedClan;if(!e)return;let t={};if(this.manageName!==e.name&&(t.name=this.manageName),(this.manageDescription??``)!==(e.description??``)&&(t.description=this.manageDescription),(this.manageDiscordUrl??``)!==(e.discordUrl??``)&&(t.discordUrl=this.manageDiscordUrl),this.manageIsOpen!==(e.isOpen??!0)&&(t.isOpen=this.manageIsOpen),Object.keys(t).length===0)return;this.saving=!0;let n=await st(this.clanTag,t);if(`error`in n){v(T(n.error),`red`),this.saving=!1;return}this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{name:n.name,description:n.description,discordUrl:n.discordUrl,isOpen:n.isOpen},bubbles:!0,composed:!0})),this.saving=!1,v(T(`clan_modal.settings_saved`),`green`),this.dispatchEvent(new CustomEvent(`navigate-detail`,{bubbles:!0,composed:!0}))}async handlePromote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await Me(this.clanTag,e);if(t!==!0){v(T(t.error),`red`);return}await this.loadMembers(this.memberPage),v(T(`clan_modal.member_promoted`),`green`)}finally{this.memberActionPending=!1}}}async handleDemote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await oe(this.clanTag,e);if(t!==!0){v(T(t.error),`red`);return}await this.loadMembers(this.memberPage),v(T(`clan_modal.member_demoted`),`green`)}finally{this.memberActionPending=!1}}}async handleKick(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await Re(this.clanTag,e);if(t!==!0){v(T(t.error),`red`);return}await this.loadMembers(this.memberPage),v(T(`clan_modal.member_kicked`),`green`)}finally{this.memberActionPending=!1}}}async handleBan(e,t){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await ge(this.clanTag,e,t.trim().slice(0,200)||void 0);if(n!==!0){v(T(n.error),`red`);return}await this.loadMembers(this.memberPage),v(T(`clan_modal.member_banned`),`green`)}finally{this.memberActionPending=!1}}}async handleDisband(){if(!this.actionPending){this.actionPending=!0;try{let e=await De(this.clanTag);if(e!==!0){v(T(e.error),`red`);return}w(),this.dispatchEvent(new CustomEvent(`clan-disbanded`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),v(T(`clan_modal.clan_disbanded`),`green`)}finally{this.actionPending=!1}}}clearConfirm(){this.confirmAction=null,this.confirmTargetId=null}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=Fn(e),this.loadMembers(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMembers(1)}render(){if(this.loading)return g();let e=this.selectedClan;return e?h`${this.renderManageContent(e)}${this.renderConfirmOverlay()}`:``}renderConfirmOverlay(){return this.confirmAction?this.confirmAction===`disband`?h`<confirm-dialog
        .message=${T(`clan_modal.confirm_disband`,{tag:this.selectedClan?.tag??``,name:this.selectedClan?.name??``})}
        variant="danger"
        ?disabled=${this.actionPending}
        @confirm=${()=>{this.clearConfirm(),this.handleDisband()}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`kick`&&this.confirmTargetId?h`<confirm-dialog
        .message=${T(`clan_modal.confirm_kick`)}
        variant="warning"
        ?disabled=${this.memberActionPending}
        @confirm=${()=>{let e=this.confirmTargetId;this.clearConfirm(),this.handleKick(e)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`ban`&&this.confirmTargetId?h`<confirm-dialog
        .message=${T(`clan_modal.confirm_ban`)}
        variant="warning"
        textareaPlaceholder=${T(`clan_modal.ban_reason_prompt`)}
        ?disabled=${this.memberActionPending}
        @confirm=${e=>{let t=this.confirmTargetId,n=e.detail.text;this.clearConfirm(),this.handleBan(t,n)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:``:``}renderManageContent(e){return h`
      <div class="space-y-6">
        <!-- Edit Settings -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${T(`clan_modal.clan_settings`)}
          </h3>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${T(`clan_modal.clan_name`)}</label
            >
            <input
              type="text"
              .value=${this.manageName}
              @input=${e=>this.manageName=e.target.value}
              maxlength="35"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
            />
          </div>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${T(`clan_modal.description`)}</label
            >
            <textarea
              .value=${this.manageDescription}
              @input=${e=>this.manageDescription=e.target.value}
              maxlength="200"
              rows="3"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm resize-none"
            ></textarea>
          </div>
          ${this.myRole===`leader`?h`
                  <div>
                    <label
                      class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
                      >${T(`clan_modal.discord_url_label`)}</label
                    >
                    <input
                      type="url"
                      .value=${this.manageDiscordUrl}
                      @input=${e=>this.manageDiscordUrl=e.target.value}
                      placeholder="https://discord.gg/..."
                      maxlength="255"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
                    />
                    <p class="text-white/40 text-xs mt-2">
                      ${T(`clan_modal.discord_url_hint`)}
                    </p>
                  </div>
                `:``}
          <div class="flex items-center justify-between">
            <div>
              <div class="text-white text-sm font-bold">
                ${T(`clan_modal.open_clan`)}
              </div>
              <div class="text-white/40 text-xs">
                ${T(`clan_modal.open_clan_desc`)}
              </div>
            </div>
            <button
              role="switch"
              aria-checked="${this.manageIsOpen}"
              aria-label="${T(`clan_modal.open_clan`)}"
              @click=${()=>this.manageIsOpen=!this.manageIsOpen}
              class="relative w-12 h-7 rounded-full transition-all ${this.manageIsOpen?`bg-malibu-blue`:`bg-white/20`}"
            >
              <div
                class="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all ${this.manageIsOpen?`left-6`:`left-1`}"
              ></div>
            </button>
          </div>
          <button
            @click=${()=>this.handleSaveSettings()}
            ?disabled=${this.saving}
            class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50"
          >
            ${this.saving?T(`clan_modal.saving`):T(`clan_modal.save_changes`)}
          </button>
        </div>

        <!-- Member Management -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${T(`clan_modal.members`)} (${e.memberCount??0})
          </h3>
          ${z(e=>this.onSearchInput(e),this.memberSearch,void 0,Gn(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
          ${h`
              <div class="space-y-2">
                ${$n(this.members,this.memberSearch).map(e=>this.renderManageMemberRow(e))}
              </div>
              ${qn(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMembers(e),e=>{this.membersPerPage=e,this.loadMembers(1)})}
            `}
        </div>

        <!-- Danger Zone -->
        <div
          class="bg-red-500/5 rounded-2xl border border-red-500/20 p-6 space-y-4"
        >
          <h3
            class="text-sm font-bold text-red-400/80 uppercase tracking-wider"
          >
            ${T(`clan_modal.danger_zone`)}
          </h3>
          <button
            @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-bans`,{bubbles:!0,composed:!0}))}
            class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30"
          >
            ${T(`clan_modal.banned_players`)}
          </button>
          ${this.myRole===`leader`?h`
                  <button
                    @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-transfer`,{bubbles:!0,composed:!0}))}
                    class="w-full px-6 py-3 text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-600/20 hover:bg-amber-600/30 rounded-xl transition-all border border-amber-500/30"
                  >
                    ${T(`clan_modal.transfer_leadership`)}
                  </button>
                  <button
                    @click=${()=>{this.confirmAction=`disband`,this.confirmTargetId=null}}
                    ?disabled=${this.confirmAction===`disband`}
                    class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${T(`clan_modal.disband_clan`)}
                  </button>
                `:``}
        </div>
      </div>
    `}renderManageMemberRow(e){let t=e.role===`leader`,n=e.publicId===this.myPublicId,r=!n&&!t&&(this.myRole===`leader`||this.myRole===`officer`&&e.role===`member`),i=!n&&this.myRole===`leader`&&e.role===`member`,a=!n&&this.myRole===`leader`&&e.role===`officer`;return h`
      <div
        class="flex flex-col py-2.5 px-3 rounded-xl border
        ${n?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
      >
        <div class="flex items-center flex-wrap gap-1.5">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
          ${n?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
          >
            ${Rn(e.role)}
          </div>
          ${P(this,e.username,e.publicId)}
          <span class="text-white/30 text-[10px] whitespace-nowrap">
            ${T(`clan_modal.joined_date`,{date:R(e.joinedAt)})}
          </span>
          <div class="flex items-center gap-1.5 ml-auto flex-wrap justify-end">
            ${i?h`<button
                    @click=${()=>this.handlePromote(e.publicId)}
                    ?disabled=${this.memberActionPending}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400/70 border border-purple-500/20 hover:bg-purple-500/20 hover:text-purple-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${T(`clan_modal.promote`)}
                  </button>`:``}
            ${a?h`<button
                    @click=${()=>this.handleDemote(e.publicId)}
                    ?disabled=${this.memberActionPending}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${T(`clan_modal.demote`)}
                  </button>`:``}
            ${r?h`
                    <button
                      @click=${()=>{this.confirmAction=`kick`,this.confirmTargetId=e.publicId}}
                      ?disabled=${this.memberActionPending||this.confirmAction!==null}
                      class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${T(`clan_modal.kick`)}
                    </button>
                    <button
                      @click=${()=>{this.confirmAction=`ban`,this.confirmTargetId=e.publicId}}
                      ?disabled=${this.memberActionPending||this.confirmAction!==null}
                      class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${T(`clan_modal.ban`)}
                    </button>
                  `:``}
          </div>
        </div>
      </div>
    `}};p([b()],Y.prototype,`clanTag`,void 0),p([b({type:Object})],Y.prototype,`selectedClan`,void 0),p([b()],Y.prototype,`myPublicId`,void 0),p([b()],Y.prototype,`myRole`,void 0),p([n()],Y.prototype,`manageName`,void 0),p([n()],Y.prototype,`manageDescription`,void 0),p([n()],Y.prototype,`manageDiscordUrl`,void 0),p([n()],Y.prototype,`manageIsOpen`,void 0),p([n()],Y.prototype,`saving`,void 0),p([n()],Y.prototype,`members`,void 0),p([n()],Y.prototype,`membersTotal`,void 0),p([n()],Y.prototype,`memberPage`,void 0),p([n()],Y.prototype,`membersPerPage`,void 0),p([n()],Y.prototype,`memberSort`,void 0),p([n()],Y.prototype,`memberOrder`,void 0),p([n()],Y.prototype,`memberActionPending`,void 0),p([n()],Y.prototype,`loading`,void 0),p([n()],Y.prototype,`confirmAction`,void 0),p([n()],Y.prototype,`confirmTargetId`,void 0),p([n()],Y.prototype,`pendingRequestCount`,void 0),p([n()],Y.prototype,`actionPending`,void 0),p([n()],Y.prototype,`memberSearch`,void 0),Y=p([d(`clan-manage-view`)],Y);function yr(){let e=pe();return e===`localhost`?`http://clanmap.localhost:8787`:`https://clanmap.${e}`}var br=class extends f{constructor(...e){super(...e),this.loading=!0,this.onMessage=async e=>{let t=yr();if(e.origin!==t||!this.frame||e.source!==this.frame.contentWindow)return;if(e.data?.type===`clanmap:loaded`){this.loading=!1;return}if(e.data?.type!==`clanmap:ready`)return;let n=await rt();if(!n)return;let r=this.frame?.contentWindow;r&&r.postMessage({type:`clanmap:auth`,jwt:n.jwt},t)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.onMessage)}disconnectedCallback(){window.removeEventListener(`message`,this.onMessage),super.disconnectedCallback()}render(){return h`<div class="relative w-full h-full">
      <iframe
        src=${yr()+`/`}
        title=${T(`clan_modal.map_frame_title`)}
        allow="fullscreen"
        allowfullscreen
        class="block w-full h-full border-0 bg-[#0e1116]"
      ></iframe>
      ${this.loading?h`<div
              role="status"
              aria-label=${T(`clan_modal.map_loading`)}
              class="absolute inset-0 flex items-center justify-center bg-[#0e1116]"
            >
              <div
                class="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"
              ></div>
            </div>`:``}
    </div>`}};p([Ie(`iframe`)],br.prototype,`frame`,void 0),p([n()],br.prototype,`loading`,void 0),br=p([d(`clan-map-view`)],br);var xr=class extends f{constructor(...e){super(...e),this.myPendingRequests=[],this.actionPending=!1}createRenderRoot(){return this}async handleWithdrawRequest(e){if(!this.actionPending){this.actionPending=!0;try{let t=await we(e);if(t!==!0){v(T(t.error),`red`);return}w(),v(T(`clan_modal.join_request_cancelled`),`green`),this.dispatchEvent(new CustomEvent(`request-withdrawn`,{detail:{tag:e},bubbles:!0,composed:!0}))}finally{this.actionPending=!1}}}render(){return h`
      <div>
        ${this.myPendingRequests.length===0?h`<p class="text-white/40 text-sm text-center py-8">
                ${T(`clan_modal.no_pending_applications`)}
              </p>`:h`
                <div class="space-y-3">
                  ${this.myPendingRequests.map(e=>h`
                      <div
                        class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                      >
                        <div
                          class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0"
                        >
                          <span class="text-amber-400 font-bold text-xs"
                            >${e.tag}</span
                          >
                        </div>
                        <div class="flex-1 min-w-0">
                          <span
                            class="text-white font-bold text-sm truncate block"
                            >${e.name}</span
                          >
                          <span class="text-white/30 text-xs">
                            ${T(`clan_modal.applied`)}
                            ${R(e.createdAt)}
                          </span>
                        </div>
                        <button
                          @click=${()=>this.handleWithdrawRequest(e.tag)}
                          ?disabled=${this.actionPending}
                          class="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/20 hover:bg-red-500/25 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                          ${T(`clan_modal.cancel_request`)}
                        </button>
                      </div>
                    `)}
                </div>
              `}
      </div>
    `}};p([b({type:Array})],xr.prototype,`myPendingRequests`,void 0),p([n()],xr.prototype,`actionPending`,void 0),xr=p([d(`clan-my-requests-view`)],xr);var X=class extends f{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.requests=[],this.requestsTotal=0,this.requestsPage=1,this.requestsLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadRequests(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadRequests(e,t=!0){t?this.loading=!0:this.memberActionPending=!0;try{let n=await et(this.clanTag,e);if(!n){t&&v(T(`clan_modal.failed_to_load_requests`),`red`);return}this.requests=n.results,this.requestsTotal=n.total,this.requestsLimit=n.limit,this.requestsPage=e}finally{t?this.loading=!1:this.memberActionPending=!1}}async handleApprove(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await _e(this.clanTag,e);if(t!==!0){v(T(t.error),`red`);return}this.requests=this.requests.filter(t=>t.publicId!==e),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-approved`,{detail:{publicId:e},bubbles:!0,composed:!0})),v(T(`clan_modal.request_approved`),`green`)}finally{this.memberActionPending=!1}}}async handleDeny(t){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await e(this.clanTag,t);if(n!==!0){v(T(n.error),`red`);return}this.requests=this.requests.filter(e=>e.publicId!==t),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-denied`,{detail:{publicId:t},bubbles:!0,composed:!0})),v(T(`clan_modal.request_denied`),`green`)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return g();let e=Math.ceil(this.requestsTotal/this.requestsLimit),t=er(this.requests,this.memberSearch);return h`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${T(`clan_modal.pending_requests_count`,{count:this.requestsTotal})}
        </div>
        ${z(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_requests_placeholder`)}
        ${t.length===0?h`<div
                class="flex flex-col items-center justify-center p-12 text-center"
              >
                <p class="text-white/40 text-sm">
                  ${T(`clan_modal.no_requests`)}
                </p>
              </div>`:h`
                <div class="space-y-3">
                  ${t.map(e=>h`
                      <div
                        class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                      >
                        <div class="flex-1 min-w-0">
                          ${P(this,e.username,e.publicId)}
                          <span class="text-white/30 text-[10px]">
                            ${T(`clan_modal.requested_on`,{tag:this.selectedClan?.tag??this.clanTag,date:R(e.createdAt)})}
                          </span>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                          <button
                            @click=${()=>this.handleApprove(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                          >
                            ${T(`clan_modal.approve`)}
                          </button>
                          <button
                            @click=${()=>this.handleDeny(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                          >
                            ${T(`clan_modal.deny`)}
                          </button>
                        </div>
                      </div>
                    `)}
                </div>
              `}
        ${e>1?Vn(this.requestsPage,e,e=>this.loadRequests(e,!1)):``}
      </div>
    `}};p([b()],X.prototype,`clanTag`,void 0),p([b({type:Object})],X.prototype,`selectedClan`,void 0),p([n()],X.prototype,`requests`,void 0),p([n()],X.prototype,`requestsTotal`,void 0),p([n()],X.prototype,`requestsPage`,void 0),p([n()],X.prototype,`requestsLimit`,void 0),p([n()],X.prototype,`memberActionPending`,void 0),p([n()],X.prototype,`loading`,void 0),X=p([d(`clan-requests-view`)],X);var Z=class extends f{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.transferTarget=null,this.actionPending=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.loading=!1,this.errorMsg=``,this.confirmAction=null,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await C(this.clanTag,e,this.membersPerPage,`default`,void 0,t):await C(this.clanTag,e,this.membersPerPage);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=r.page,this.transferTarget=null,this.loading=!1}}async handleTransfer(){if(!(!this.transferTarget||this.actionPending)){this.actionPending=!0,this.errorMsg=``;try{let e=await be(this.clanTag,this.transferTarget);if(e!==!0){v(T(e.error),`red`),this.errorMsg=T(e.error);return}w(),this.dispatchEvent(new CustomEvent(`leadership-transferred`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),v(T(`clan_modal.leadership_transferred`),`green`)}finally{this.actionPending=!1}}}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}render(){if(this.loading)return g();let e=this.members.filter(e=>e.role!==`leader`),t=Math.ceil(this.membersTotal/this.membersPerPage);return h`
      ${this.renderContent(e,t)}
      ${this.renderConfirmOverlay()}
    `}renderConfirmOverlay(){return this.confirmAction!==`transfer`||!this.transferTarget?``:h`<confirm-dialog
      .message=${T(`clan_modal.confirm_transfer`,{name:this.transferTarget})}
      variant="warning"
      ?disabled=${this.actionPending}
      @confirm=${()=>{this.confirmAction=null,this.handleTransfer()}}
      @cancel=${()=>{this.confirmAction=null}}
    ></confirm-dialog>`}renderContent(e,t){return h`
      <div class="space-y-6">
        ${this.errorMsg?h`<p class="text-red-400 text-sm">${this.errorMsg}</p>`:``}

        <div class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-4">
          <p class="text-amber-400/80 text-sm">
            ${T(`clan_modal.transfer_warning`)}
          </p>
        </div>

        ${z(e=>this.onSearchInput(e),this.memberSearch)}

        <div class="space-y-2">
          ${$n(e,this.memberSearch).map(e=>h`
              <div
                class="relative w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border transition-all text-left
                      ${this.transferTarget===e.publicId?`bg-amber-500/10 border-amber-500/20`:`bg-white/5 border-white/10 hover:bg-white/10`}"
              >
                <button
                  type="button"
                  @click=${()=>this.transferTarget=e.publicId}
                  aria-pressed=${this.transferTarget===e.publicId}
                  aria-labelledby=${`transfer-target-${e.publicId}`}
                  class="absolute inset-0 w-full h-full rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                ></button>
                <div
                  class="relative pointer-events-none w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-xs font-bold shrink-0"
                >
                  ${Rn(e.role)}
                </div>
                <div
                  id=${`transfer-target-${e.publicId}`}
                  class="relative pointer-events-none flex-1 min-w-0"
                >
                  <span
                    class="pointer-events-auto inline-flex max-w-full min-w-0"
                  >
                    ${P(this,e.username,e.publicId)}
                  </span>
                </div>
                <span
                  class="relative pointer-events-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0
                        ${e.role===`officer`?`bg-purple-500/20 text-purple-400 border border-purple-500/30`:`bg-white/10 text-white/40 border border-white/10`}"
                >
                  ${Ln(e.role)}
                </span>
                ${this.transferTarget===e.publicId?h`<svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="relative pointer-events-none w-5 h-5 text-amber-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>`:``}
              </div>
            `)}
        </div>

        ${t>1?Vn(this.memberPage,t,e=>this.loadMembers(e)):``}

        <button
          @click=${()=>this.confirmAction=`transfer`}
          class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider rounded-xl transition-all border disabled:opacity-50 disabled:pointer-events-none
                ${this.transferTarget&&!this.actionPending?`bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-amber-900/40 border-white/5`:`bg-white/5 border-white/10 text-white/30 cursor-not-allowed`}"
          ?disabled=${!this.transferTarget||this.actionPending}
        >
          ${this.transferTarget?T(`clan_modal.confirm_transfer`,{name:this.transferTarget}):T(`clan_modal.select_new_leader`)}
        </button>
      </div>
    `}};p([b()],Z.prototype,`clanTag`,void 0),p([b({type:Object})],Z.prototype,`selectedClan`,void 0),p([n()],Z.prototype,`transferTarget`,void 0),p([n()],Z.prototype,`actionPending`,void 0),p([n()],Z.prototype,`members`,void 0),p([n()],Z.prototype,`membersTotal`,void 0),p([n()],Z.prototype,`memberPage`,void 0),p([n()],Z.prototype,`membersPerPage`,void 0),p([n()],Z.prototype,`loading`,void 0),p([n()],Z.prototype,`errorMsg`,void 0),p([n()],Z.prototype,`confirmAction`,void 0),p([n()],Z.prototype,`memberSearch`,void 0),Z=p([d(`clan-transfer-view`)],Z);var Sr=[`map`,`my-clans`,`browse`];function Cr(e){return Sr.includes(e)}var Q=class extends $e{constructor(){super(),this.routerName=`clan`,this.view=`list`,this.loading=!1,this.signedOut=!1,this.myClans=[],this.myPendingRequests=[],this.selectedClanTag=``,this.selectedClan=null,this.myRole=null,this.myPublicId=null,this.myClanRoles=new Map,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.preserveStateForModalHandoff=!1,this.returningFromModalHandoff=!1,this.profileOpenedFromTab=`members`,this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.previousListTab=`my-clans`,this.joinSource=void 0,this.activeTab=`my-clans`}get onListView(){return this.view===`list`&&!this.selectedClanTag}get onDetailView(){return this.view===`detail`&&!!this.selectedClanTag}modalConfig(){return{tabs:this.onListView?[{key:`map`,label:T(`clan_modal.tab_map_alpha`)},{key:`my-clans`,label:T(`clan_modal.my_clans`)},{key:`browse`,label:T(`clan_modal.browse`)}]:this.onDetailView?[{key:`overview`,label:T(`clan_modal.tab_overview`)},{key:`members`,label:T(`clan_modal.members`)},{key:`game-history`,label:T(`clan_modal.tab_game_history`)},{key:`donations`,label:T(`clan_modal.tab_donations`)}]:[]}}renderHeaderSlot(){return this.onListView?S({title:T(`clan_modal.title`),onBack:()=>this.close(),ariaLabel:T(`common.back`)}):this.renderSubViewHeader()}renderBody(){return h`<div class=${this.onListView&&this.activeTab===`map`?`h-full`:`p-4 lg:p-[1.4rem]`}>
      ${this.renderInner()}
    </div>`}onTabEnter(e){if(Cr(e)){this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.detailCache=null,this.gameHistoryCache=null,e===`my-clans`&&this.loadMyClans();return}}tagPill(e){return h`<span
      class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/50 border border-white/10"
      >[${e}]</span
    >`}clanBalances(e){return h`<div class="flex items-center gap-3">
      <currency-display
        .hard=${e.hardBalance??null}
        .soft=${e.softBalance??null}
      ></currency-display>
      ${this.tagPill(e.tag)}
    </div>`}backToProfile(){let e=this.openedFromProfile;if(e===null)return!1;let t=this.openedFromProfileOrigin;return this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.close(),document.querySelector(`player-profile-modal`)?.returnFromClan(e,t),!0}renderSubViewHeader(){let e=this.selectedClan,t=T(`common.back`);return this.view===`my-requests`?S({title:T(`clan_modal.pending_applications`),onBack:()=>this.view=`list`,ariaLabel:t}):this.view===`manage`?S({title:T(`clan_modal.manage_clan`),onBack:()=>this.view=`detail`,ariaLabel:t,rightContent:e?this.tagPill(e.tag):void 0}):this.view===`transfer`?S({title:T(`clan_modal.transfer_leadership`),onBack:()=>this.view=`manage`,ariaLabel:t}):this.view===`requests`?S({title:T(`clan_modal.join_requests`),onBack:()=>this.view=`detail`,ariaLabel:t}):this.view===`bans`?S({title:T(`clan_modal.banned_players`),onBack:()=>this.view=`manage`,ariaLabel:t}):S({title:e?.name??T(`clan_modal.title`),onBack:()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,He.syncArgs(`clan`,{clan:null,tag:null}),this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))},ariaLabel:t,rightContent:e?this.clanBalances(e):void 0})}onOpen(e){if(this.returningFromModalHandoff){this.returningFromModalHandoff=!1;return}this.openedFromProfile=null,this.openedFromProfileOrigin=null;let t=typeof e?.clan==`string`?e.clan.trim():typeof e?.tag==`string`?e.tag.trim():``;t&&this.openDetail(t.toUpperCase()),this.loadMyClans()}onClose(){this.preserveStateForModalHandoff||(this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.activeTab=`my-clans`,this.previousListTab=`my-clans`,this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.returningFromModalHandoff=!1)}async loadMyClans(){this.loading=!0;try{let e=await u();if(!this.isModalOpen)return;if(!e||Object.keys(e.user).length===0){this.signedOut=!0,this.myPublicId=null,this.myPendingRequests=[],this.myClanRoles=new Map,this.myClans=[];return}this.signedOut=!1,this.myPublicId=e.player.publicId,this.myPendingRequests=e.player.clanRequests??[];let t=new Map,n=[];for(let r of e.player.clans??[])t.set(r.tag,r.role),n.push({tag:r.tag,name:r.name,description:``,isOpen:!1,memberCount:r.memberCount,softBalance:r.softBalance,hardBalance:r.hardBalance});this.myClanRoles=t,this.myClans=n}finally{this.loading=!1}}renderInner(){return this.loading?this.renderLoadingSpinner():this.view===`my-requests`?h`<clan-my-requests-view
        .myPendingRequests=${this.myPendingRequests}
        @navigate-back=${()=>this.view=`list`}
        @request-withdrawn=${e=>{this.myPendingRequests=this.myPendingRequests.filter(t=>t.tag!==e.detail.tag),this.myPendingRequests.length===0&&(this.view=`list`)}}
      ></clan-my-requests-view>`:this.selectedClanTag?this.view===`manage`?h`<clan-manage-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          .myPublicId=${this.myPublicId}
          .myRole=${this.myRole}
          @navigate-detail=${()=>this.view=`detail`}
          @navigate-bans=${()=>this.view=`bans`}
          @navigate-transfer=${()=>this.view=`transfer`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @clan-updated=${e=>{this.selectedClan&&={...this.selectedClan,...e.detail},this.detailCache=null,w()}}
          @clan-disbanded=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.myClans=this.myClans.filter(t=>t.tag!==e.detail.tag),this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        ></clan-manage-view>`:this.view===`transfer`?h`<clan-transfer-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @leadership-transferred=${()=>{this.loadMyClans().then(()=>this.openDetail(this.selectedClanTag))}}
        ></clan-transfer-view>`:this.view===`requests`?h`<clan-requests-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`detail`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @request-approved=${()=>{this.selectedClan&&={...this.selectedClan,memberCount:(this.selectedClan.memberCount??0)+1},this.detailCache=null}}
        ></clan-requests-view>`:this.view===`bans`?h`<clan-bans-view
          .clanTag=${this.selectedClanTag}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-bans-view>`:this.activeTab===`donations`?h`<clan-donations-view
          .clanTag=${this.selectedClanTag}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-donations-view>`:this.activeTab===`game-history`?h`<clan-game-history-view
          .clanTag=${this.selectedClanTag}
          .cachedState=${this.gameHistoryCache?.tag===this.selectedClanTag?this.gameHistoryCache:null}
          @history-updated=${e=>{this.gameHistoryCache=e.detail}}
          @view-stats=${e=>this.openGameStats(e.detail.gameId)}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @close-clan-modal=${()=>this.close()}
        ></clan-game-history-view>`:h`<clan-detail-view
        .clanTag=${this.selectedClanTag}
        .joinSource=${this.joinSource}
        .cachedClan=${this.selectedClan}
        .myPublicId=${this.myPublicId}
        .myClanRoles=${this.myClanRoles}
        .myPendingRequests=${this.myPendingRequests}
        .detailTab=${this.activeTab===`members`?`members`:`overview`}
        .cachedDetail=${this.detailCache?.tag===this.selectedClanTag?this.detailCache:null}
        @navigate-back=${()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))}}
        @detail-loaded=${e=>{this.selectedClan=e.detail.clan,this.myRole=e.detail.myRole,this.detailCache={tag:e.detail.clan.tag,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount}}}
        @members-loaded=${e=>{!this.detailCache||this.detailCache.tag!==this.selectedClanTag||(this.detailCache={...this.detailCache,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount})}}
        @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        @navigate-manage=${()=>this.view=`manage`}
        @navigate-requests=${()=>this.view=`requests`}
        @clan-refreshed=${e=>{this.selectedClan=e.detail.clan,this.myClans=this.myClans.map(t=>t.tag===e.detail.clan.tag?{...t,softBalance:e.detail.clan.softBalance,hardBalance:e.detail.clan.hardBalance}:t)}}
        @clan-joined=${e=>{this.myClanRoles=new Map([...this.myClanRoles,[e.detail.tag,`member`]]),this.detailCache=null,this.openDetail(e.detail.tag)}}
        @clan-left=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        @request-sent=${e=>{this.myPendingRequests=[...this.myPendingRequests,{tag:e.detail.tag,name:e.detail.name,createdAt:new Date().toISOString()}]}}
      ></clan-detail-view>`:this.activeTab===`map`?this.isModalOpen?h`<clan-map-view class="block h-full"></clan-map-view>`:h``:h`
      ${this.activeTab===`my-clans`?this.renderMyClans():h`<clan-browse-view
              .myClanRoles=${this.myClanRoles}
              .myPendingRequests=${this.myPendingRequests}
              .cachedState=${this.browseCache}
              @browse-updated=${e=>{this.browseCache=e.detail}}
              @clan-select=${e=>this.openDetail(e.detail.tag,e.detail.source)}
            ></clan-browse-view>`}
    `}openDetail(e,t){this.joinSource=t,this.selectedClanTag!==e&&(this.gameHistoryCache=null),Cr(this.activeTab)&&(this.previousListTab=this.activeTab),this.selectedClanTag=e,this.view=`detail`,He.syncArgs(`clan`,{clan:e,tag:null}),this.setActiveTab(`overview`)}openGameStats(e){let t=document.querySelector(`game-stats-modal`);if(t){this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0,this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}openPlayerProfile(e){let t=document.querySelector(`player-profile-modal`);if(t){this.profileOpenedFromTab=this.activeTab===`game-history`||this.activeTab===`donations`?this.activeTab:`members`,this.profileOpenedFromTab===`game-history`&&(this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0),this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}returnFromPlayerProfile(){if(!this.selectedClanTag){this.open({});return}if(this.view!==`detail`){this.returningFromModalHandoff=!0,this.open({clan:this.selectedClanTag});return}this.profileOpenedFromTab===`game-history`?this.returnToGameHistory():this.returnToDetailTab(this.profileOpenedFromTab)}openFromProfile(e,t,n){this.open({clan:e}),this.openedFromProfile=t,this.openedFromProfileOrigin=n}returnToDetailTab(e){let t=this.selectedClanTag;t&&(this.returningFromModalHandoff=!0,this.open({clan:t,tab:e}))}returnToGameHistory(){let e=this.selectedClanTag;e&&(this.returningFromModalHandoff=!0,this.open({clan:e,tab:`game-history`}),this.restoreGameHistoryScroll())}async restoreGameHistoryScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`clan-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gameHistoryScrollTop)}renderMyClans(){if(this.signedOut)return bt(()=>{this.close(),window.showPage?.(`page-account`)},T(`clan_modal.sign_in_for_clans`));let e=this.myClans.length>0,t=this.myPendingRequests.length>0;return!e&&!t?h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <p class="text-white/40 text-sm mb-4">
            ${T(`clan_modal.no_clans`)}
          </p>
          <button
            @click=${()=>this.setActiveTab(`browse`)}
            class="px-6 py-2 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
          >
            ${T(`clan_modal.browse`)}
          </button>
        </div>
      `:h`
      <div class="space-y-3">
        ${t?this.renderPendingRequestsButton():``}
        ${this.myClans.map(e=>h`
            <clan-card
              .clan=${e}
              .clanRole=${this.myClanRoles.get(e.tag)}
              @clan-select=${e=>this.openDetail(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `}renderPendingRequestsButton(){let e=this.myPendingRequests.length;return h`
      <button
        @click=${()=>this.view=`my-requests`}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${T(`clan_modal.pending_applications`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${T(`clan_modal.pending_requests_count`,{count:e})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${e}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};p([n()],Q.prototype,`view`,void 0),p([n()],Q.prototype,`loading`,void 0),p([n()],Q.prototype,`signedOut`,void 0),p([n()],Q.prototype,`myClans`,void 0),p([n()],Q.prototype,`myPendingRequests`,void 0),p([n()],Q.prototype,`selectedClanTag`,void 0),p([n()],Q.prototype,`selectedClan`,void 0),p([n()],Q.prototype,`myRole`,void 0),p([n()],Q.prototype,`myClanRoles`,void 0),Q=p([d(`clan-modal`)],Q);async function wr(e){try{let n=await t(e),r=n===!1?null:n;if(r===null){let t=await u();if(t===!1||t.player.publicId!==e)return null;r=t.player.progress??null}return r!==null&&me(e,r),r}catch{return null}}var Tr=0,$=class extends $e{constructor(...e){super(...e),this.routerName=`profile`,this.publicId=null,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.progress=null,this.loading=!1,this.openedLink=null,this.openedFrom=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.loadGeneration=0,this.wantsProgressionTab=!1,this.openCount=0,this.progressRead=0,this.handleProvisionalChanged=e=>{ne(e).length>0&&this.rereadProgress(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),document.addEventListener(ut,this.handleProvisionalChanged)}disconnectedCallback(){document.removeEventListener(ut,this.handleProvisionalChanged),super.disconnectedCallback()}rereadProgress(){let e=this.publicId;if(e===null||this.progress===null||!this.isConnected||!this.isOpen()||!s(e))return;let t=this.loadGeneration,n=++this.progressRead;wr(e).then(r=>{t!==this.loadGeneration||n!==this.progressRead||r===null||this.publicId!==e||(this.progress=r)})}progressView(){return this.progress===null?null:he(this.publicId,this.progress)}modalConfig(){return{maxWidth:`960px`,tabs:[{key:`stats`,label:T(`account_modal.tab_stats`)},{key:`games`,label:T(`account_modal.tab_games`)},{key:`clans`,label:T(`account_modal.tab_clans`)},...this.progress===null?[]:[{key:`progression`,label:T(`account_modal.tab_progression`)}]]}}renderHeaderSlot(){return S({title:T(`player_profile.title`),titleContent:this.username?h`<span
            class="text-white text-xl lg:text-2xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
          >
            ${Be(this.username)}
            ${r(this.username)?c(`w-5 h-5`):o}
          </span>`:void 0,onBack:()=>this.back(),ariaLabel:T(`common.back`),rightContent:this.publicId?h`
            <player-name
              class="shrink-0"
              .publicId=${this.publicId}
              .copyText=${ct(this.publicId)}
            ></player-name>
          `:void 0})}renderBody(e){return h`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
    `}renderTab(e){switch(e){case`games`:return this.renderGames();case`clans`:return this.renderClans();case`progression`:return this.renderProgression();default:return this.renderProfile()}}renderClans(){return this.loading?this.renderLoadingSpinner(T(`player_profile.loading`)):this.profileLoaded()?this.clans.length===0?h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🛡️</span>
          <p class="text-white/40 text-sm">
            ${T(`player_profile.no_clans`)}
          </p>
        </div>
      `:h`
      <div class="space-y-3">
        ${this.clans.map(e=>h`
            <clan-card
              .clan=${{tag:e.tag,name:e.name,description:``,isOpen:!1,memberCount:e.memberCount,softBalance:e.softBalance,hardBalance:e.hardBalance}}
              .clanRole=${e.role}
              @clan-select=${e=>this.openClan(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `:this.renderNotFound()}openClan(e){let t=this.publicId;t!==null&&document.querySelector(`clan-modal`)?.openFromProfile(e,t,this.openedFrom)}returnFromClan(e,t){this.open({publicID:e,tab:`clans`}),this.openedFrom=t}renderGames(){let e=this.publicId;return e?h`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🎮</span>
          <p class="text-white/40 text-sm">
            ${T(`account_modal.no_games`)}
          </p>
        </div>
      `}renderProfile(){if(this.loading)return this.renderLoadingSpinner(T(`player_profile.loading`));let e=this.publicId;if(!this.profileLoaded()||e===null)return this.renderNotFound();let t=this.progressView();return h`
      ${t===null?o:h`<profile-card
              class="mb-4 block"
              .username=${this.username??this.publicId??``}
              .clanTag=${this.displayClanTag}
              .progress=${t.progress}
              .provisional=${t.provisional}
              .openKey=${`profile-${this.openCount}`}
            ></profile-card>`}
      <profile-share
        class="mb-[18px] block"
        .url=${ct(e)}
        .name=${this.username??e}
      ></profile-share>
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `}renderProgression(){let e=this.progressView();return e===null?this.renderProfile():h`<profile-progression
      .progress=${e.progress}
      .confirmedLevel=${e.confirmedLevel}
      .provisional=${e.provisional}
      .publicId=${this.publicId}
      .popKey=${`profile-${this.openCount}`}
    ></profile-progression>`}profileLoaded(){return!!this.publicId&&!!this.statsTree}renderNotFound(){return h`
      <div
        class="mx-auto flex max-w-2xl flex-col items-center px-6 py-12 text-center"
        data-not-found
      >
        <div
          class="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="8" r="4" />
            <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 3 .8" />
            <path d="M17 14.5a2.5 2.5 0 1 1 3.2 2.4c-.7.2-1.2.8-1.2 1.6" />
            <path d="M19 21h.01" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-white">
          ${T(`player_profile.not_found_title`)}
        </h2>
        <p class="mt-2 max-w-md text-sm text-white/60">
          ${T(`player_profile.not_found_body`)}
        </p>
        ${this.openedLink===null?o:h`<p
                class="mt-3 break-all font-mono text-xs text-white/35"
                data-opened-link
              >
                ${this.openedLink}
              </p>`}
        <!-- Side by side where there's room, stacked on a phone. -->
        <div
          class="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          data-not-found-actions
        >
          <o-button
            variant="primary"
            size="md"
            translationKey="player_profile.play"
            data-action="play"
            @click=${()=>this.goHome()}
          ></o-button>
          <o-button
            variant="secondary"
            size="md"
            translationKey="player_profile.view_leaderboard"
            data-action="leaderboard"
            @click=${()=>this.openLeaderboard()}
          ></o-button>
        </div>
      </div>
    `}goHome(){this.close()}openLeaderboard(){this.close(),document.querySelector(`leaderboard-modal`)?.open()}open(e){let t=this.isOpen(),n=this.publicId;super.open(e),t&&this.isOpen()&&this.publicId!==n&&He.syncOpened(this.routerName,e)}onOpen(e){let t=typeof e?.publicID==`string`&&e.publicID.length>0?e.publicID:null;if(this.restoreGamesScrollAfterOpen&&t!==null&&t===this.publicId){this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll();return}this.wantsProgressionTab=typeof e?.tab==`string`?e.tab===`progression`:this.activeTab===`progression`,(this.wantsProgressionTab||this.activeTab===`progression`)&&(this.activeTab=`stats`),this.openedFrom=null,this.openCount=++Tr,this.publicId=t,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.progress=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.openedLink=t!==null&&He.isPathRouted(`profile`)&&le(window.location.pathname)===t?`${window.location.host}${window.location.pathname}`:null,this.loading=t!==null,t!==null&&this.loadProfile(t)}async loadProfile(e){let t=++this.loadGeneration,n=()=>t===this.loadGeneration&&this.publicId===e,r=++this.progressRead;wr(e).then(e=>{if(!n()||r!==this.progressRead)return;this.progress=e;let t=this.wantsProgressionTab;this.wantsProgressionTab=!1,t&&e!==null&&this.activeTab===`stats`&&this.isOpen()&&this.setActiveTab(`progression`)});let a=await i(e);n()&&(this.loading=!1,this.statsTree=a===!1?null:a.stats,this.username=a===!1?null:a.username??null,this.clans=a===!1?[]:a.clans??[],this.displayClanTag=a===!1?null:a.displayClanTag??null)}onClose(){}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromProfile(e,this.publicId??void 0)}viewGame(e){this.close();let t=encodeURIComponent(e),n=ve(l.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({publicID:this.publicId??void 0,tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}openFromClan(e){this.open({publicID:e}),this.openedFrom=`clan`}openFromLeaderboard(e){this.open({publicID:e}),this.openedFrom=`leaderboard`}openFromAccount(e){this.open({publicID:e}),this.openedFrom=`account`}back(){let e=this.openedFrom;this.close(),e===`clan`?document.querySelector(`clan-modal`)?.returnFromPlayerProfile():e===`leaderboard`?document.querySelector(`leaderboard-modal`)?.open():e===`account`&&document.querySelector(`account-modal`)?.returnToFriends()}};p([n()],$.prototype,`publicId`,void 0),p([n()],$.prototype,`username`,void 0),p([n()],$.prototype,`statsTree`,void 0),p([n()],$.prototype,`clans`,void 0),p([n()],$.prototype,`displayClanTag`,void 0),p([n()],$.prototype,`progress`,void 0),p([n()],$.prototype,`loading`,void 0),p([n()],$.prototype,`openedLink`,void 0),$=p([d(`player-profile-modal`)],$);export{$ as PlayerProfileModal,gn as a,vn as i,Q as n,hn as o,ct as playerProfileUrl,_n as r,P as s,wr as t};