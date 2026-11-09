const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WorkerClient-CUcA_1rH.js","./index-xDRx6PtE.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-6Yf9fRSv.css"])))=>i.map(i=>d[i]);
import{Ai as e,Bi as t,Di as n,Ei as r,Fi as i,Ja as a,Jn as o,Mi as s,Ni as c,Oi as l,Qn as u,Ri as d,Ss as f,Vi as p,bo as m,cr as ee,es as h,fa as te,fr as g,gn as _,ha as v,is as y,ja as b,ji as x,jo as ne,ln as re,ns as S,qa as C,qi as ie,rs as w,ta as T,un as E,va as D,vs as O,ws as k,yn as A}from"./index-xDRx6PtE.js";import{a as j,i as M,n as ae,r as oe,t as se}from"./SavedGamesApi-DNXlRVEO.js";import{a as ce,i as N}from"./ToggleInputCard-DJvVy-bq.js";import{c as P,i as F,l as I,n as L,o as R,r as z,s as B,t as V,u as H}from"./GameConfigHelpers-CrUmzSS2.js";var U=/^[A-Za-z0-9_-]{1,64}$/;function W(e){let t=e.trim();if(U.test(t))return t;try{let e=new URL(t),n=new URLSearchParams(e.hash.slice(1)).get(`save`);return n!==null&&U.test(n)?n:null}catch{return null}}function le(e){return`${a.shareOrigin()}/#modal=single-player&save=${encodeURIComponent(e)}`}var G=class extends c{constructor(...e){super(...e),this.signedIn=!1,this.sharedId=null,this.busy=!1,this.expanded=!1,this.saves=`loading`,this.shared=null,this.renamingId=null,this.renameValue=``,this.pendingId=null,this.rowError=null,this.codeValue=``,this.codeInvalid=!1}createRenderRoot(){return this}willUpdate(e){e.has(`signedIn`)&&e.get(`signedIn`)!==void 0&&this.refresh(),e.has(`sharedId`)&&(this.sharedId!==null&&this.expand(),this.loadShared())}expand(){this.expanded||(this.expanded=!0,this.refresh())}toggle(){this.expanded?this.expanded=!1:this.expand()}async refresh(){if(!this.signedIn||!this.expanded)return;this.saves=`loading`;let e=await M();this.saves=e===!1?`error`:e}async loadShared(){let e=this.sharedId;if(e===null){this.shared=null;return}this.shared=`loading`;let t=await oe(e);this.sharedId===e&&(this.shared=t)}load(e,t){this.dispatchEvent(new CustomEvent(`load-saved-game`,{detail:{id:e,shared:t},bubbles:!0,composed:!0}))}openCode(e){e?.preventDefault();let t=W(this.codeValue);if(this.codeInvalid=t===null,t!==null){if(this.codeValue=``,t===this.sharedId){this.loadShared();return}this.dispatchEvent(new CustomEvent(`open-shared-save`,{detail:t,bubbles:!0,composed:!0}))}}async pasteCode(){try{this.codeValue=(await navigator.clipboard.readText()).trim(),this.codeInvalid=!1}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}replace(e){Array.isArray(this.saves)&&(this.saves=this.saves.map(t=>t.id===e.id?e:t))}errorText(e,t){return D(e===`rejected`?t?`saved_games.error.name_not_shareable`:`saved_games.error.name_invalid`:e===`not_found`?`saved_games.error.not_found`:`saved_games.error.request_failed`)}async run(e,t,n){this.pendingId=e.id,this.rowError=null;try{let r=await t();return typeof r==`string`?(this.rowError={id:e.id,message:this.errorText(r,n)},!1):(this.replace(r),!0)}finally{this.pendingId=null}}async toggleShared(e){let t=!e.public;await this.run(e,()=>j(e.id,{public:t}),t)&&t&&await this.copyLink(e.id)}async copyLink(e){try{await ie(le(e)),v(D(`saved_games.link_copied`),`green`)}catch{v(D(`saved_games.error.copy_failed`),`red`)}}startRename(e){this.renamingId=e.id,this.renameValue=e.name,this.rowError=null}async submitRename(e){let t=this.renameValue.trim();if(t===``||t===e.name){this.renamingId=null;return}await this.run(e,()=>j(e.id,{name:t}),e.public)&&(this.renamingId=null)}async deleteSave(e){if(await n(D(`saved_games.delete_confirm`,{name:e.name}))){this.pendingId=e.id,this.rowError=null;try{let t=await se(e.id);if(t===!0||t===`not_found`){Array.isArray(this.saves)&&(this.saves=this.saves.filter(t=>t.id!==e.id));return}this.rowError={id:e.id,message:this.errorText(t,!1)}}finally{this.pendingId=null}}}details(e){return[T(e.map)??e.map,te(e.tick/10),new Date(e.createdAt).toLocaleDateString()].join(` · `)}button(e,t,n={}){return d`<button
      type="button"
      class="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${n.primary?`bg-blue-600 hover:bg-blue-500 text-white`:`bg-white/5 hover:bg-white/10 text-white/80 border border-white/10`}"
      data-action=${n.attr??``}
      ?disabled=${n.disabled??!1}
      @click=${t}
    >
      ${e}
    </button>`}renderCodeForm(){return d`<form class="flex flex-col gap-1" @submit=${this.openCode}>
      <div class="flex gap-2">
        <input
          type="text"
          class="flex-1 min-w-0 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          placeholder=${D(`saved_games.code_placeholder`)}
          aria-label=${D(`saved_games.code_placeholder`)}
          data-save-code
          aria-invalid=${this.codeInvalid?`true`:`false`}
          aria-errormessage=${this.codeInvalid?`saved-game-code-error`:i}
          .value=${this.codeValue}
          @input=${e=>{this.codeValue=e.target.value,this.codeInvalid=!1}}
        />
        ${this.button(D(`common.paste`),()=>void this.pasteCode(),{attr:`paste-code`})}
        ${this.button(D(`saved_games.open`),()=>this.openCode(),{primary:!0,disabled:this.codeValue.trim()===``,attr:`open-code`})}
      </div>
      ${this.codeInvalid?d`<div
              id="saved-game-code-error"
              class="text-xs text-red-400"
              data-code-error
            >
              ${D(`saved_games.error.code_invalid`)}
            </div>`:null}
    </form>`}renderShared(){let e=this.shared;if(e===null)return null;let t;return t=e===`loading`?d`<div class="text-sm text-white/50">
        ${D(`saved_games.loading`)}
      </div>`:typeof e==`string`?d`<div class="text-sm text-red-400" data-shared-error>
        ${D(e===`not_found`?`saved_games.error.shared_not_found`:`saved_games.error.request_failed`)}
      </div>`:d`<div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-white truncate">${e.name}</div>
          <div class="text-xs text-white/50">${this.details(e)}</div>
        </div>
        ${this.button(D(`saved_games.play`),()=>this.load(e.id,!0),{primary:!0,disabled:this.busy,attr:`play-shared`})}
      </div>`,d`<div
      class="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4"
      data-shared-save
    >
      <div
        class="mb-2 text-[11px] font-bold uppercase tracking-wider text-blue-300/80"
      >
        ${D(`saved_games.shared_title`)}
      </div>
      ${t}
    </div>`}renderRow(e){let t=this.pendingId===e.id,n=this.renamingId===e.id,r=this.rowError?.id===e.id?this.rowError.message:null;return d`<li
      class="flex flex-col gap-2 rounded-lg bg-white/5 border border-white/10 p-3"
      data-save-id=${e.id}
    >
      <div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          ${n?d`<input
                  class="w-full rounded-md bg-black/30 border border-white/20 px-2 py-1 text-sm text-white"
                  maxlength="64"
                  aria-label=${D(`saved_games.rename`)}
                  .value=${this.renameValue}
                  @input=${e=>this.renameValue=e.target.value}
                  @keydown=${t=>{t.key===`Enter`&&this.submitRename(e),t.key===`Escape`&&(t.stopPropagation(),this.renamingId=null)}}
                />`:d`<div class="flex items-center gap-2">
                  <span class="font-semibold text-white truncate"
                    >${e.name}</span
                  >
                  ${e.public?d`<span
                          class="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-300"
                          >${D(`saved_games.shared_badge`)}</span
                        >`:null}
                </div>`}
          <div class="text-xs text-white/50">${this.details(e)}</div>
        </div>
        ${this.button(D(`saved_games.play`),()=>this.load(e.id,!1),{primary:!0,disabled:this.busy||t,attr:`play`})}
      </div>
      <div class="flex flex-wrap gap-2">
        ${n?d`${this.button(D(`saved_games.rename_save`),()=>void this.submitRename(e),{disabled:t,attr:`rename-save`})}
              ${this.button(D(`common.cancel`),()=>this.renamingId=null,{disabled:t})}`:this.button(D(`saved_games.rename`),()=>this.startRename(e),{disabled:t,attr:`rename`})}
        ${this.button(D(e.public?`saved_games.unshare`:`saved_games.share`),()=>void this.toggleShared(e),{disabled:t,attr:`toggle-share`})}
        ${e.public?this.button(D(`saved_games.copy_link`),()=>void this.copyLink(e.id),{attr:`copy-link`}):null}
        ${this.button(D(`saved_games.delete`),()=>void this.deleteSave(e),{disabled:t,attr:`delete`})}
      </div>
      ${r===null?null:d`<div class="text-xs text-red-400" data-row-error>
              ${r}
            </div>`}
    </li>`}renderOwn(){if(!this.signedIn)return null;let e=this.saves,t;return t=e===`loading`?d`<div class="text-sm text-white/50">
        ${D(`saved_games.loading`)}
      </div>`:e===`error`?d`<div class="text-sm text-red-400">
        ${D(`saved_games.error.list_failed`)}
      </div>`:e.length===0?d`<div class="text-sm text-white/50" data-saves-empty>
        ${D(`saved_games.empty`)}
      </div>`:d`<ul class="flex flex-col gap-2">
        ${e.map(e=>this.renderRow(e))}
      </ul>`,d`<div data-own-saves>${t}</div>`}render(){let e=this.expanded;return d`<div class="w-full">
      <button
        type="button"
        aria-expanded=${e}
        data-saved-games-toggle
        @click=${this.toggle}
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-bold text-white uppercase tracking-wider transition-all duration-200 active:scale-[0.99] ${e?`bg-malibu-blue/20 border-malibu-blue/50`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`}"
      >
        <svg
          class="w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${e?`rotate-90`:``}"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 2l5 4-5 4z" />
        </svg>
        ${D(`saved_games.title`)}
      </button>
      ${e?d`<div class="mt-4 flex flex-col gap-4">
              ${this.renderCodeForm()}${this.renderShared()}${this.renderOwn()}
            </div>`:null}
    </div>`}};l([x({type:Boolean})],G.prototype,`signedIn`,void 0),l([x({attribute:!1})],G.prototype,`sharedId`,void 0),l([x({type:Boolean})],G.prototype,`busy`,void 0),l([e()],G.prototype,`expanded`,void 0),l([e()],G.prototype,`saves`,void 0),l([e()],G.prototype,`shared`,void 0),l([e()],G.prototype,`renamingId`,void 0),l([e()],G.prototype,`renameValue`,void 0),l([e()],G.prototype,`pendingId`,void 0),l([e()],G.prototype,`rowError`,void 0),l([e()],G.prototype,`codeValue`,void 0),l([e()],G.prototype,`codeInvalid`,void 0),G=l([s(`saved-games-panel`)],G);var K=15e3,q=6e4;function J(e,t,n){let r,i=new Promise(e=>{r=setTimeout(()=>e(n()),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var Y=class extends Error{constructor(e){super(e),this.messageKey=e}},ue=[O.City,O.DefensePost,O.Factory,O.SAMLauncher,O.HydrogenBomb,O.MIRV],X={selectedMap:k.World,selectedDifficulty:h.Easy,bots:400,infiniteGold:!1,infiniteTroops:!1,compactMap:!1,maxTimer:!1,maxTimerValue:void 0,instantBuild:!1,randomSpawn:!1,useRandomMap:!1,gameMode:w.FFA,teamCount:2,goldMultiplier:!1,goldMultiplierValue:void 0,startingGold:!1,startingGoldValue:void 0,disabledUnits:[],customAlliances:!1,customAllianceMinutes:void 0,waterNukes:!1,doomsdayClock:!1,doomsdayClockSpeed:`normal`,overtime:!1,overtimeStartMinutes:void 0},Z=null,Q=null;async function de(){return Z||(Q??=(async()=>{let e=new Set,t=!1;return await Promise.all(f.map(async n=>{try{(await o.getMapData(n.type).manifest()).nations.length>0&&e.add(n.type)}catch{t=!0}})),t?(Q=null,null):(Z=e,e)})(),Q)}var $=class extends E{constructor(...e){super(...e),this.routerName=`single-player`,this.selectedMap=X.selectedMap,this.selectedDifficulty=X.selectedDifficulty,this.nations=0,this.defaultNationCount=0,this.bots=X.bots,this.infiniteGold=X.infiniteGold,this.infiniteTroops=X.infiniteTroops,this.compactMap=X.compactMap,this.maxTimer=X.maxTimer,this.maxTimerValue=X.maxTimerValue,this.instantBuild=X.instantBuild,this.randomSpawn=X.randomSpawn,this.useRandomMap=X.useRandomMap,this.gameMode=X.gameMode,this.teamCount=X.teamCount,this.showAchievements=!1,this.mapWins=new Map,this.eligibleMaps=null,this.userMeResponse=!1,this.goldMultiplier=X.goldMultiplier,this.goldMultiplierValue=X.goldMultiplierValue,this.startingGold=X.startingGold,this.startingGoldValue=X.startingGoldValue,this.disabledUnits=[...X.disabledUnits],this.customAlliances=X.customAlliances,this.customAllianceMinutes=X.customAllianceMinutes,this.waterNukes=X.waterNukes,this.doomsdayClock=X.doomsdayClock,this.doomsdayClockSpeed=X.doomsdayClockSpeed,this.overtime=X.overtime,this.overtimeStartMinutes=X.overtimeStartMinutes,this.starting=!1,this.sharedSaveId=null,this.startAttempt=0,this.overlayAttempt=0,this.mapLoader=o,this.toggleAchievements=()=>{this.showAchievements=!this.showAchievements,this.showAchievements&&this.ensureEligibleMaps()},this.handleUserMeResponse=e=>{this.userMeResponse=e.detail,this.applyAchievements(e.detail)},this.handleConfigRandomMapSelected=()=>{this.handleSelectRandomMap()},this.handleConfigMapSelected=e=>{let t=e;this.handleMapSelection(t.detail.map)},this.handleConfigDifficultySelected=e=>{let t=e;this.handleDifficultySelection(t.detail.difficulty)},this.handleConfigDoomsdayClockSpeedSelected=e=>{let t=e;this.doomsdayClockSpeed=t.detail.speed},this.handleConfigGameModeSelected=e=>{let t=e;this.handleGameModeSelection(t.detail.mode)},this.handleConfigTeamCountSelected=e=>{let t=e;this.handleTeamCountSelection(t.detail.count)},this.handleConfigOptionToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.instant_build`:this.instantBuild=n;break;case`game_settings.random_spawn`:this.randomSpawn=n;break;case`game_settings.infinite_gold`:this.infiniteGold=n;break;case`game_settings.infinite_troops`:this.infiniteTroops=n;break;case`game_settings.compact_map`:this.handleCompactMapChange(n);break;case`game_settings.water_nukes`:this.waterNukes=n;break;case`game_settings.doomsday_clock`:this.doomsdayClock=n;break;default:break}},this.handleConfigUnitToggleChanged=e=>{let{unit:t,checked:n}=e.detail;this.disabledUnits=F(this.disabledUnits,t,n)},this.handleBotsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.bots=t)},this.handleNationsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.nations=t)},this.handleMaxTimerToggle=(e,t)=>{this.maxTimer=e,this.maxTimerValue=H(t)},this.handleGoldMultiplierToggle=(e,t)=>{this.goldMultiplier=e,this.goldMultiplierValue=H(t)},this.handleStartingGoldToggle=(e,t)=>{this.startingGold=e,this.startingGoldValue=H(t)},this.handleCustomAlliancesToggle=(e,t)=>{this.customAlliances=e,this.customAllianceMinutes=H(t)},this.handleOvertimeToggle=(e,t)=>{this.overtime=e,this.overtimeStartMinutes=H(t)},this.handleOvertimeMinutesKeyDown=e=>{P(e,[`-`,`+`,`e`])},this.handleOvertimeMinutesInput=e=>{let t=e.target,n=B(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.overtimeStartMinutes=n)},this.handleCustomAllianceMinutesKeyDown=e=>{P(e,[`-`,`+`,`e`])},this.handleCustomAllianceMinutesInput=e=>{let t=e.target,n=B(t,{min:0,max:15});n!==void 0&&(this.customAllianceMinutes=n)},this.handleMaxTimerValueKeyDown=e=>{P(e,[`-`,`+`,`e`])},this.handleMaxTimerValueChanges=e=>{let t=e.target,n=B(t,{min:1,max:120,stripPattern:/[e+-]/gi});this.maxTimerValue=n},this.handleGoldMultiplierValueKeyDown=e=>{P(e,[`+`,`-`,`e`,`E`])},this.handleGoldMultiplierValueChanges=e=>{let t=e.target,n=R(t,{min:.1,max:1e3});n===void 0?(this.goldMultiplierValue=void 0,t.value=``):this.goldMultiplierValue=n},this.handleStartingGoldValueKeyDown=e=>{P(e,[`-`,`+`,`e`,`E`])},this.handleStartingGoldValueChanges=e=>{let t=e.target,n=R(t,{min:.1,max:1e3});n===void 0?(this.startingGoldValue=void 0,t.value=``):this.startingGoldValue=n},this.handleLoadSavedGame=e=>{let{id:t,shared:n}=e.detail;this.startSavedGame(t,n)}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse);let e=A();e!==null&&(this.userMeResponse=e.response,this.applyAchievements(e.response)),this.loadNationCount()}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}async ensureEligibleMaps(){if(this.eligibleMaps)return;let e=await de();e&&(this.eligibleMaps=e)}medalCounts(){let e={[h.Easy]:0,[h.Medium]:0,[h.Hard]:0,[h.Impossible]:0};if(!this.eligibleMaps)return e;for(let[t,n]of this.mapWins)if(this.eligibleMaps.has(t))for(let t of n)e[t]++;return e}renderNotLoggedInBanner(){return t.isOnGamePortal()?d``:d`<button
      class="px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 whitespace-nowrap shrink-0 cursor-pointer hover:bg-yellow-500/30"
      @click=${()=>{this.close(),window.showPage?.(`page-account`)}}
    >
      ${D(`single_modal.sign_in_for_achievements`)}
    </button>`}applyAchievements(e){if(!e){this.mapWins=new Map;return}let t=e.player.achievements.singleplayerMap,n=new Map;for(let e of t){let{mapName:t,difficulty:r}=e??{},i=typeof t==`string`&&Object.values(k).includes(t),a=typeof r==`string`&&Object.values(h).includes(r);if(!i||!a)continue;let o=t,s=n.get(o)??new Set;s.add(r),n.set(o,s)}this.mapWins=n}renderHeaderSlot(){return re({title:D(`main.solo`)||`Solo`,onBack:()=>this.close(),ariaLabel:D(`common.back`),rightContent:C(this.userMeResponse)?d`<button
              @click=${this.toggleAchievements}
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all shrink-0 ${this.showAchievements?`bg-yellow-500/10 border-yellow-500/30 text-yellow-400`:`text-white/60`}"
            >
              <img
                src=${ne(`images/MedalIconWhite.svg`)}
                class="w-4 h-4 opacity-80 shrink-0"
                style="${this.showAchievements?``:`filter: grayscale(1);`}"
              />
              <span
                class="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >${D(`single_modal.toggle_achievements`)}</span
              >
            </button>
            ${this.showAchievements?this.renderMedalOverview():null}`:this.renderNotLoggedInBanner()})}renderMedalOverview(){let e=this.medalCounts(),t=this.eligibleMaps?.size??null;return d`<div class="basis-full w-full">
      <div
        class="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-yellow-400/80 shrink-0"
        >
          ${D(`single_modal.medals_earned`)}
        </span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          ${N.map(t=>this.renderMedalStat(t,e[t]))}
        </div>
        <span
          class="ml-auto text-[11px] font-semibold uppercase tracking-wider text-white/40 shrink-0"
        >
          ${D(`single_modal.medals_of_maps`,{total:t??`…`})}
        </span>
      </div>
    </div>`}renderMedalStat(e,t){return d`<div
      class="flex items-center gap-1.5"
      title=${D(`difficulty.${e.toLowerCase()}`)}
    >
      ${ce(e,`w-4 h-4`)}
      <span class="text-xs font-medium text-white/50 hidden sm:inline"
        >${D(`difficulty.${e.toLowerCase()}`)}</span
      >
      <span class="text-sm font-bold text-white tabular-nums">${t}</span>
    </div>`}renderBody(){let e=[d`<toggle-input-card
        .labelKey=${`game_settings.max_timer`}
        .checked=${this.maxTimer}
        .inputId=${`end-timer-value`}
        .inputMin=${1}
        .inputMax=${120}
        .inputValue=${this.maxTimerValue}
        .inputAriaLabel=${D(`game_settings.max_timer`)}
        .inputPlaceholder=${D(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleMaxTimerToggle}
        .onInput=${this.handleMaxTimerValueChanges}
        .onKeyDown=${this.handleMaxTimerValueKeyDown}
      ></toggle-input-card>`,d`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.goldMultiplier}
        .inputId=${`gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.goldMultiplierValue}
        .inputAriaLabel=${D(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleGoldMultiplierToggle}
        .onChange=${this.handleGoldMultiplierValueChanges}
        .onKeyDown=${this.handleGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,d`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.startingGold}
        .inputId=${`starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.startingGoldValue}
        .inputAriaLabel=${D(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleStartingGoldToggle}
        .onChange=${this.handleStartingGoldValueChanges}
        .onKeyDown=${this.handleStartingGoldValueKeyDown}
      ></toggle-input-card>`,d`<toggle-input-card
        .labelKey=${`game_settings.custom_alliances`}
        .checked=${this.customAlliances}
        .inputMin=${0}
        .inputMax=${15}
        .inputStep=${1}
        .inputValue=${this.customAllianceMinutes}
        .inputAriaLabel=${D(`game_settings.custom_alliances`)}
        .inputPlaceholder=${D(`game_settings.mins_placeholder`)}
        .defaultInputValue=${0}
        .minValidOnEnable=${0}
        .zeroLabel=${`(${D(`public_game_modifier.disable_alliances`)})`}
        .onToggle=${this.handleCustomAlliancesToggle}
        .onInput=${this.handleCustomAllianceMinutesInput}
        .onKeyDown=${this.handleCustomAllianceMinutesKeyDown}
      ></toggle-input-card>`,d`<toggle-input-card
        .labelKey=${`game_settings.overtime`}
        .checked=${this.overtime}
        .inputMin=${1}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.overtimeStartMinutes}
        .inputAriaLabel=${D(`game_settings.overtime`)}
        .inputPlaceholder=${D(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleOvertimeToggle}
        .onInput=${this.handleOvertimeMinutesInput}
        .onKeyDown=${this.handleOvertimeMinutesKeyDown}
      ></toggle-input-card>`];return d`
      <div class="flex flex-col h-full">
        <div
          class="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-4 pb-6 mr-1 mx-auto w-full max-w-5xl"
        >
          <saved-games-panel
            class="block mb-6"
            .signedIn=${C(this.userMeResponse)}
            .sharedId=${this.sharedSaveId}
            .busy=${this.starting}
            @load-saved-game=${this.handleLoadSavedGame}
            @open-shared-save=${e=>this.sharedSaveId=e.detail}
          ></saved-games-panel>
          <game-config-settings
            class="block"
            .sectionGapClass=${`space-y-6`}
            .settings=${{map:{selected:this.selectedMap,useRandom:this.useRandomMap,showMedals:this.showAchievements,mapWins:this.mapWins},difficulty:{selected:this.selectedDifficulty,disabled:this.nations===0},gameMode:{selected:this.gameMode},teamCount:{selected:this.teamCount},options:{titleKey:`game_settings.options`,bots:{value:this.bots,labelKey:`game_settings.bots`,disabledKey:`common.disabled`},nations:{value:this.nations,defaultValue:this.defaultNationCount,labelKey:`game_settings.nations`,disabledKey:`common.disabled`},toggles:[{labelKey:`game_settings.instant_build`,checked:this.instantBuild},{labelKey:`game_settings.random_spawn`,checked:this.randomSpawn},{labelKey:`game_settings.infinite_gold`,checked:this.infiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.infiniteTroops},{labelKey:`game_settings.compact_map`,checked:this.compactMap},{labelKey:`game_settings.water_nukes`,checked:this.waterNukes},{labelKey:`game_settings.doomsday_clock`,checked:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed}],inputCards:e},unitTypes:{titleKey:`game_settings.disable_units`,disabledUnits:this.disabledUnits}}}
            @map-selected=${this.handleConfigMapSelected}
            @random-map-selected=${this.handleConfigRandomMapSelected}
            @difficulty-selected=${this.handleConfigDifficultySelected}
            @doomsday-clock-speed-selected=${this.handleConfigDoomsdayClockSpeedSelected}
            @game-mode-selected=${this.handleConfigGameModeSelected}
            @team-count-selected=${this.handleConfigTeamCountSelected}
            @bots-changed=${this.handleBotsChange}
            @nations-changed=${this.handleNationsChange}
            @option-toggle-changed=${this.handleConfigOptionToggleChanged}
            @unit-toggle-changed=${this.handleConfigUnitToggleChanged}
          ></game-config-settings>
        </div>

        <!-- Footer Action -->
        <div class="p-6 border-t border-white/10 bg-black/20 shrink-0">
          ${C(this.userMeResponse)&&this.hasOptionsChanged()?d`<div
                  class="mb-4 px-4 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider text-center"
                >
                  ${D(`single_modal.options_changed_no_achievements`)}
                </div>`:null}
          <o-button
            variant="primary"
            width="block"
            size="lg"
            translationKey=${this.starting?`game_settings.starting`:`game_settings.start`}
            .disable=${this.starting}
            @click=${this.startGame}
          ></o-button>
        </div>
      </div>
    `}hasOptionsChanged(){return this.nations!==this.defaultNationCount||this.bots!==X.bots||this.infiniteGold!==X.infiniteGold||this.infiniteTroops!==X.infiniteTroops||this.compactMap!==X.compactMap||this.maxTimer!==X.maxTimer||this.instantBuild!==X.instantBuild||this.randomSpawn!==X.randomSpawn||this.gameMode!==X.gameMode||this.goldMultiplier!==X.goldMultiplier||this.startingGold!==X.startingGold||this.customAlliances!==X.customAlliances||this.customAllianceMinutes!==X.customAllianceMinutes||this.waterNukes!==X.waterNukes||this.doomsdayClock!==X.doomsdayClock||this.doomsdayClock&&this.doomsdayClockSpeed!==X.doomsdayClockSpeed||this.overtime!==X.overtime||this.disabledUnits.length>0}onClose(){if(this.startAttempt++,this.overlayAttempt!==0){this.overlayAttempt=0;let e=document.querySelector(`game-starting-modal`);e instanceof _&&e.hide()}this.sharedSaveId=null,this.resetOptions()}async startTutorial(){g(),!this.starting&&await this.launch(async({resolvedName:e,cosmetics:t},n)=>{let r=m();return{gameID:r,gameStartInfo:{gameID:r,players:[{clientID:m(),username:e.name,clanTag:n?.getClanTag()??null,cosmetics:t}],config:{gameMap:k.Tutorial,gameMapSize:S.Normal,gameType:y.Singleplayer,gameMode:w.FFA,difficulty:h.Easy,bots:0,nations:`default`,infiniteGold:!1,donateGold:!1,donateTroops:!1,infiniteTroops:!1,instantBuild:!1,randomSpawn:!1,disableAlliances:!0,disabledUnits:ue,startingGold:75e4,tutorial:!0},lobbyCreatedAt:Date.now()},source:`singleplayer`}})}async startSoloWithGuide(){g(),this.resetOptions(),await this.loadNationCount(),new b().setTutorialDismissed(!1),await this.startGame()}resetOptions(){this.starting=!1,this.selectedMap=X.selectedMap,this.selectedDifficulty=X.selectedDifficulty,this.gameMode=X.gameMode,this.useRandomMap=X.useRandomMap,this.bots=X.bots,this.nations=0,this.defaultNationCount=0,this.infiniteGold=X.infiniteGold,this.infiniteTroops=X.infiniteTroops,this.compactMap=X.compactMap,this.maxTimer=X.maxTimer,this.maxTimerValue=X.maxTimerValue,this.instantBuild=X.instantBuild,this.randomSpawn=X.randomSpawn,this.teamCount=X.teamCount,this.disabledUnits=[...X.disabledUnits],this.goldMultiplier=X.goldMultiplier,this.goldMultiplierValue=X.goldMultiplierValue,this.startingGold=X.startingGold,this.startingGoldValue=X.startingGoldValue,this.customAlliances=X.customAlliances,this.customAllianceMinutes=X.customAllianceMinutes,this.waterNukes=X.waterNukes,this.doomsdayClock=X.doomsdayClock,this.doomsdayClockSpeed=X.doomsdayClockSpeed,this.overtime=X.overtime,this.overtimeStartMinutes=X.overtimeStartMinutes}onOpen(e){let t=e?.save;this.sharedSaveId=typeof t==`string`?W(t):null,this.querySelector(`saved-games-panel`)?.refresh(),this.loadNationCount(),g()}handleSelectRandomMap(){this.useRandomMap=!0,this.selectedMap=z(),this.loadNationCount()}handleMapSelection(e){this.selectedMap=e,this.useRandomMap=!1,this.loadNationCount()}handleDifficultySelection(e){this.selectedDifficulty=e}handleCompactMapChange(e){this.compactMap=e,this.bots=V(this.bots,e),this.nations=L(this.nations,this.defaultNationCount,e)}getEndTimerInput(){return this.renderRoot.querySelector(`#end-timer-value`)??this.querySelector(`#end-timer-value`)}handleGameModeSelection(e){this.gameMode=e}handleTeamCountSelection(e){this.teamCount=e}async resolveNameAndCosmetics(e){let t=()=>e?.resolvedName()??p();return await J((async()=>{await e?.whenSeeded();let n=t();return{resolvedName:n,cosmetics:await ee({verified:n.verified})}})(),K,()=>{console.warn(`Start preparation exceeded its deadline; starting on defaults`);let e=t();return{resolvedName:e,cosmetics:e.verified?{verified:!0}:{}}})}awaitMidgameAd(){return J(t.requestMidgameAd(),q,()=>{console.warn(`Midgame ad never signalled completion; starting anyway`)})}async startGame(){if(this.starting)return;let e;if(this.maxTimer){if(!this.maxTimerValue||this.maxTimerValue<=0){console.error(`Max timer is enabled but no valid value is set`),await r(D(`single_modal.max_timer_invalid`)||`Please enter a valid max timer value (1-120 minutes)`);let e=this.getEndTimerInput();e&&(e.focus(),e.select());return}e=Math.max(1,Math.min(120,this.maxTimerValue))}await this.launch(async({resolvedName:t,cosmetics:n},r)=>{console.log(`Starting single player game with map: ${k[this.selectedMap]}${this.useRandomMap?` (Randomly selected)`:``}`);let i=m(),a=m();return{gameID:a,gameStartInfo:{gameID:a,players:[{clientID:i,username:t.name,clanTag:r?.getClanTag()??null,cosmetics:n}],config:{gameMap:this.selectedMap,gameMapSize:this.compactMap?S.Compact:S.Normal,gameType:y.Singleplayer,gameMode:this.gameMode,playerTeams:this.teamCount,difficulty:this.selectedDifficulty,maxTimerValue:e,bots:this.bots,infiniteGold:this.infiniteGold,donateGold:this.gameMode===w.Team,donateTroops:this.gameMode===w.Team,infiniteTroops:this.infiniteTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,disabledUnits:this.disabledUnits.filter(e=>Object.values(O).includes(e)),nations:I(this.nations,this.defaultNationCount),...this.goldMultiplier&&this.goldMultiplierValue?{goldMultiplier:this.goldMultiplierValue}:{},...this.startingGold&&this.startingGoldValue!==void 0?{startingGold:Math.round(this.startingGoldValue*1e6)}:{},...this.customAlliances?{customAllianceDuration:this.customAllianceMinutes??0}:{},...this.waterNukes?{waterNukes:!0}:{},...this.doomsdayClock?{doomsdayClock:{enabled:!0,speed:this.doomsdayClockSpeed}}:{},...this.overtime?{overtime:{enabled:!0,startMinutes:this.overtimeStartMinutes??30}}:{}},lobbyCreatedAt:Date.now()},source:`singleplayer`}})}async startSavedGame(e,t){if(!this.starting)try{await this.launch(async({resolvedName:n,cosmetics:r},i)=>{let a=await ae(e,t);if(typeof a==`string`)throw new Y(a===`not_found`?`saved_games.error.not_found`:`saved_games.error.download_failed`);let{readSnapshotHeader:o}=await u(async()=>{let{readSnapshotHeader:e}=await import(`./WorkerClient-CUcA_1rH.js`).then(e=>e.n);return{readSnapshotHeader:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url),s;try{s=await o(a)}catch(e){throw console.warn(`Saved game is not a snapshot this build reads`,e),new Y(`saved_games.error.unreadable`)}let c=s.humans[0];if(s.gameConfig.gameType!==y.Singleplayer||s.humans.length!==1)throw new Y(`saved_games.error.not_singleplayer`);console.log(`Resuming saved game ${e} on ${s.gameConfig.gameMap} at tick ${s.tick}`);let l=m();return{gameID:l,gameStartInfo:{gameID:l,players:[{clientID:c.clientID,username:n.name,clanTag:i?.getClanTag()??null,cosmetics:r}],config:s.gameConfig,lobbyCreatedAt:Date.now()},snapshot:a,source:`singleplayer`}})}catch(e){e instanceof Y||console.error(`Failed to start the saved game`,e),await r(D(e instanceof Y?e.messageKey:`saved_games.error.load_failed`))}}async launch(e){this.starting=!0;let t=++this.startAttempt,n=document.querySelector(`game-starting-modal`),r=n instanceof _?n:null;this.overlayAttempt=t,r?.show();try{let n=document.querySelector(`username-input`),r=await this.resolveNameAndCosmetics(n);if(t!==this.startAttempt)return;let i=await e(r,n);if(t!==this.startAttempt||(await this.awaitMidgameAd(),t!==this.startAttempt))return;this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:i,bubbles:!0,composed:!0})),this.overlayAttempt=0,this.close()}finally{t===this.startAttempt&&(this.starting=!1),this.overlayAttempt===t&&(this.overlayAttempt=0,r?.hide())}}async loadNationCount(){let e=this.selectedMap;try{let t=await this.mapLoader.getMapData(e).manifest();this.selectedMap===e&&(this.defaultNationCount=t.nations.length,this.nations=this.compactMap?Math.max(0,Math.floor(t.nations.length*.25)):t.nations.length)}catch(e){console.warn(`Failed to load nation count`,e)}}};l([e()],$.prototype,`selectedMap`,void 0),l([e()],$.prototype,`selectedDifficulty`,void 0),l([e()],$.prototype,`nations`,void 0),l([e()],$.prototype,`defaultNationCount`,void 0),l([e()],$.prototype,`bots`,void 0),l([e()],$.prototype,`infiniteGold`,void 0),l([e()],$.prototype,`infiniteTroops`,void 0),l([e()],$.prototype,`compactMap`,void 0),l([e()],$.prototype,`maxTimer`,void 0),l([e()],$.prototype,`maxTimerValue`,void 0),l([e()],$.prototype,`instantBuild`,void 0),l([e()],$.prototype,`randomSpawn`,void 0),l([e()],$.prototype,`useRandomMap`,void 0),l([e()],$.prototype,`gameMode`,void 0),l([e()],$.prototype,`teamCount`,void 0),l([e()],$.prototype,`showAchievements`,void 0),l([e()],$.prototype,`mapWins`,void 0),l([e()],$.prototype,`eligibleMaps`,void 0),l([e()],$.prototype,`userMeResponse`,void 0),l([e()],$.prototype,`goldMultiplier`,void 0),l([e()],$.prototype,`goldMultiplierValue`,void 0),l([e()],$.prototype,`startingGold`,void 0),l([e()],$.prototype,`startingGoldValue`,void 0),l([e()],$.prototype,`disabledUnits`,void 0),l([e()],$.prototype,`customAlliances`,void 0),l([e()],$.prototype,`customAllianceMinutes`,void 0),l([e()],$.prototype,`waterNukes`,void 0),l([e()],$.prototype,`doomsdayClock`,void 0),l([e()],$.prototype,`doomsdayClockSpeed`,void 0),l([e()],$.prototype,`overtime`,void 0),l([e()],$.prototype,`overtimeStartMinutes`,void 0),l([e()],$.prototype,`starting`,void 0),l([e()],$.prototype,`sharedSaveId`,void 0),$=l([s(`single-player-modal`)],$);export{q as MIDGAME_AD_DEADLINE_MS,K as START_PREPARE_DEADLINE_MS,$ as SinglePlayerModal};