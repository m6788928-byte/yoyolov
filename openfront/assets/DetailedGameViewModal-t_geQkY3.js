import{$i as e,Ai as t,Bi as n,Bn as r,Fi as i,Fn as a,Ia as o,In as s,Ki as c,La as ee,Mi as te,Nn as ne,Oi as l,Pn as re,Ri as u,Rn as ie,_n as ae,_s as d,ds as f,fa as p,fi as m,ja as h,ln as oe,ra as se,rs as ce,ts as g,un as le,va as _,vn as v,xn as ue,yn as de,zn as fe}from"./index-xDRx6PtE.js";import{t as y}from"./StyledSelect-DPidSi-H.js";import{t as pe}from"./repeat-LaPbzw7b.js";var b=[`ffa`,`teams`,`hvn`],x=[`public`,`hosted`],S=[g,d,f],C=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],me=[...S,...C],w={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},T={[g]:2,[d]:3,[f]:4};function he(e){let t=e.gameConfig,n=t?.maxPlayers??null,r=t?.playerTeams,i=e.publicGameType===`hosted`?`hosted`:`public`,a=e.numClients??0;if(t?.gameMode!==ce.Team)return{mode:`ffa`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};if(r===`Humans Vs Nations`)return{mode:`hvn`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};let o=null,s=null,c=null;if(typeof r==`number`)o=String(r),s=r,c=n!==null&&r>0?Math.floor(n/r):null;else if(typeof r==`string`){let e=T[r];e!==void 0&&(o=r,c=e,s=n===null?null:Math.floor(n/e))}return{mode:`teams`,source:i,joined:a,capacity:n,teamConfig:o,teamCount:s,teamSize:c}}function E(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function D(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function ge(e,t){let n=he(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!D(n.joined,t.minJoined,t.maxJoined)||!D(n.capacity,t.minCapacity,t.maxCapacity)||!D(n.teamSize,t.minTeamSize,t.maxTeamSize))}function _e(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function ve(e,t){return e.filter(e=>ge(e,t)).sort(_e)}function O(e){let t=h.currentPlayerId();return t===null?e:`${e}:${t}`}function k(){if(h.currentPlayerId()===null)return;let e=O(A);if(localStorage.getItem(e)!==null)return;let t=localStorage.getItem(A);if(t===null)return;let n=localStorage.getItem(j),r=O(j);try{localStorage.setItem(e,t),n!==null&&localStorage.setItem(r,n)}catch(t){throw localStorage.removeItem(e),n!==null&&localStorage.removeItem(r),t}localStorage.removeItem(A),n!==null&&localStorage.removeItem(j)}var A=`detailed-view-filter-profiles`,j=`detailed-view-default-filter-profile`,M=32;function N(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function P(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function F(e){if(typeof e!=`object`||!e)return{...w};let t=e;return{modes:N(t.modes,b),sources:N(t.sources,x),teamConfigs:N(t.teamConfigs,me),hideEmpty:t.hideEmpty===!0,minJoined:P(t.minJoined),maxJoined:P(t.maxJoined),minCapacity:P(t.minCapacity),maxCapacity:P(t.maxCapacity),minTeamSize:P(t.minTeamSize),maxTeamSize:P(t.maxTeamSize)}}function I(){return Object.create(null)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(){let e;try{k();let t=localStorage.getItem(O(A));if(t===null)return I();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),I()}if(typeof e!=`object`||!e||Array.isArray(e))return I();let t=I();for(let[n,r]of Object.entries(e))t[n]=F(r);return t}function z(e){try{localStorage.setItem(O(A),JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function ye(e,t){let n=e.trim().slice(0,M),r=R();return n===``||!L(r,n)&&Object.keys(r).length>=20?r:(r[n]=F(t),z(r),r)}function be(e){let t=R();return L(t,e)?(delete t[e],z(t),B()===e&&H(``),t):t}function B(){try{return k(),localStorage.getItem(O(`detailed-view-default-filter-profile`))??``}catch(e){return console.warn(`Failed to read default lobby filter profile`,e),``}}function V(e){let t=B();return L(e,t)?t:``}function H(e){try{e===``?localStorage.removeItem(O(j)):localStorage.setItem(O(j),e)}catch(e){console.warn(`Failed to save default lobby filter profile`,e)}}var U=[`ffa`,`team`,`special`],W=6,G=`all`,K=`h-40`,xe=220,Se=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,Ce=`bg-malibu-blue text-white border-malibu-blue`,we=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends le{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...w},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.defaultProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new ue(e=>{this.lobbies=e,this.serverTimeOffset=c(e.serverTime);for(let t of E(e.games))s.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.appliedForAccount=void 0,this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=G}modalConfig(){return{tabs:[...U.map(e=>({key:e,label:_(`detailed_view.pane_${e}`)})),{key:G,label:_(`detailed_view.tab_all`)}]}}loadAccountProfiles(){this.profiles=R(),this.defaultProfile=V(this.profiles);let e=h.currentPlayerId();this.appliedForAccount!==e&&(this.appliedForAccount=e,this.filters={...w},this.selectedProfile=``,this.profileName=``,this.applyProfile(this.defaultProfile))}onOpen(){this.loadAccountProfiles(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let e=de();e!==null&&this.applyUserMe(e.response),ee()&&(this.desktopUpdateState=o(),this.desktopSessionState=m()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(e){this.viewerSignedIn=fe(e),this.viewerTrusted=r(e),this.loadAccountProfiles(),n.isOnGamePortal()&&n.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(){super.willUpdate(),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${xe}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let e=this.activeFilterCount();return oe({title:_(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:_(`common.back`),rightContent:u`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${e>0?_(`detailed_view.filters_with_count`,{count:e}):_(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(e){if(this.lobbies===null)return this.renderLoadingSpinner();let t=E(this.lobbies.games),n=ve(t,this.filters),r=(e,t)=>e.filter(e=>e.publicGameType===t);return u`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?ie(this.viewerSignedIn,()=>this.showTrustRequired=!1):i}
        ${this.showFilters?this.renderFilterPanel():i}
        ${n.length===0?u`<p class="py-12 text-center text-sm text-white/50">
                ${_(`detailed_view.no_lobbies`)}
              </p>`:e===G?u`
                  <!-- One pane per scheduled bucket, cards stacked within it. -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
                  >
                    ${U.map(e=>this.renderPane(_(`detailed_view.pane_${e}`),r(n,e),r(t,e).length))}
                  </div>
                  ${this.renderHostedPane(r(n,`hosted`))}
                `:this.renderTypeTab(r(n,e),r(t,e).length)}
      </div>
    `}renderTypeTab(e,t){let n=Math.max(0,W-t);return e.length===0&&n===0?u`<p class="py-12 text-center text-sm text-white/50">
        ${_(`detailed_view.pane_empty`)}
      </p>`:u`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(e,n)}
      </div>
    `}paneHeading(e,t){return _(`detailed_view.pane_heading`,{name:e,count:t})}renderPane(e,t,n){let r=Math.max(0,W-n);return u`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(e,t.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${t.length===0&&r===0?u`<p
                  class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
                >
                  ${_(`detailed_view.pane_empty`)}
                </p>`:i}
          ${this.renderSlots(t,r)}
        </div>
      </section>
    `}renderSlots(e,t){return u`
      ${pe(e,e=>e.gameID,e=>u`<div class="${K}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return u`
      <div
        class="${K} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${_(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(e){return e.length===0?i:u`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(_(`detailed_view.pane_hosted`),e.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(e,0)}
        </div>
      </section>
    `}renderCard(t){let n=t.gameConfig;if(!n)return i;let r=t.startsAt??t.autoStartAt;return a({lobby:t,subtitle:e(n),timeDisplay:this.timeDisplay(t,r),timeDisplayUppercase:r===void 0,heightClass:`h-full`,blocked:v(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(t)})}timeDisplay(e,t){if(t===void 0)return e.publicGameType===`hosted`?_(`public_lobby.waiting_for_players`):_(`detailed_view.queue_position`,{position:((this.lobbies?.games[e.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(t=>t.gameID===e.gameID)??-1)+1});let n=se(t,this.serverTimeOffset);return n>0?p(n):_(`public_lobby.starting_game`)}renderFilterPanel(){return u`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(_(`detailed_view.mode`),b.map(e=>({value:e,label:_(`detailed_view.mode_${e}`),active:this.filters.modes.includes(e)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(_(`detailed_view.source`),x.map(e=>({value:e,label:_(`detailed_view.source_${e}`),active:this.filters.sources.includes(e)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(_(`detailed_view.per_team`),S.map(e=>({value:e,label:_(`detailed_view.layout_${e.toLowerCase()}`),active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(_(`detailed_view.team_count`),C.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(_(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(_(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(_(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
        </div>

        <div class="flex items-center justify-between gap-3 flex-wrap">
          <label
            class="flex items-center gap-2 text-xs text-white/70 cursor-pointer"
          >
            <input
              type="checkbox"
              class="w-4 h-4 accent-malibu-blue"
              .checked=${this.filters.hideEmpty}
              @change=${e=>this.patchFilters({hideEmpty:e.target.checked})}
            />
            ${_(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${_(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return u`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>u`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${Se} ${e.active?Ce:we}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(e,t,n){return u`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${_(`detailed_view.min`)}"
            placeholder=${_(`detailed_view.min`)}
            .value=${$(this.filters[t])}
            @change=${e=>this.setBound(t,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${_(`detailed_view.max`)}"
            placeholder=${_(`detailed_view.max`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let e=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return u`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${_(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${y({options:[{value:``,label:_(`detailed_view.no_profile`)},...e.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:_(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${_(`detailed_view.profile_name`)}
            aria-label=${_(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${_(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${_(`detailed_view.delete_profile`)}
          </button>
        </div>
        <span class="${J} mt-3"
          >${_(`detailed_view.default_profile`)}</span
        >
        ${y({options:[{value:``,label:_(`detailed_view.no_default_profile`)},...e.map(e=>({value:e,label:e}))],value:this.defaultProfile,onChange:e=>this.setDefaultProfile(e),ariaLabel:_(`detailed_view.default_profile`),className:`w-full sm:w-1/2`})}
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...w},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=L(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=ye(e,this.filters),this.selectedProfile=L(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=be(this.selectedProfile),this.selectedProfile=``,this.defaultProfile=V(this.profiles))}setDefaultProfile(e){H(e),this.defaultProfile=V(this.profiles)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return v(this.desktopUpdateState,this.desktopSessionState)?(ae(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!re(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){ne(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0}))}}};l([t()],Z.prototype,`lobbies`,void 0),l([t()],Z.prototype,`filters`,void 0),l([t()],Z.prototype,`showFilters`,void 0),l([t()],Z.prototype,`profiles`,void 0),l([t()],Z.prototype,`selectedProfile`,void 0),l([t()],Z.prototype,`defaultProfile`,void 0),l([t()],Z.prototype,`profileName`,void 0),l([t()],Z.prototype,`desktopUpdateState`,void 0),l([t()],Z.prototype,`viewerTrusted`,void 0),l([t()],Z.prototype,`viewerSignedIn`,void 0),l([t()],Z.prototype,`showTrustRequired`,void 0),l([t()],Z.prototype,`desktopSessionState`,void 0),Z=l([te(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};