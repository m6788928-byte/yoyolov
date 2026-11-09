import{n as e}from"./rolldown-runtime-BpQH8Ho1.js";import{Ai as t,Fi as n,Kr as r,Mi as i,Mn as a,Ni as o,Oi as s,Ri as c,Rr as l,ct as u,fs as d,ji as f,ki as p,ln as m,un as h,va as g}from"./index-xDRx6PtE.js";import"./LeaderboardTribeTable-D41j92RB.js";function _(e){let{level:t,prestige:n,legend:r}=e;if(!(t===void 0||n===void 0||r===void 0))return{level:t,prestige:n,legend:r}}function v(e){return _(e)!==void 0}function y(e){let t=_(e);return t!==void 0&&(t.legend||t.prestige>0)}function b(e,t,r,i=24){let a=t?_(e):void 0;return a===void 0?r?c`<span
    class="shrink-0"
    style="width:${i}px;height:${i}px"
    aria-hidden="true"
    data-level-slot
  ></span>`:n:c`<level-badge
      stagger
      class="shrink-0"
      .level=${a.level}
      .prestige=${a.prestige}
      ?legend=${a.legend}
      size=${i}
    ></level-badge>`}var x=class extends o{constructor(...e){super(...e),this.clanData=null,this.isLoading=!1,this.error=null,this.sortBy=`rank`,this.sortOrder=`asc`,this.hasLoaded=!1}createRenderRoot(){return this}async ensureLoaded(){this.hasLoaded||this.isLoading||await this.loadClanLeaderboard()}async loadClanLeaderboard(){this.isLoading=!0,this.error=null;try{let e=await u();if(!e)throw Error(`Failed to load clan leaderboard`);this.clanData=e,this.hasLoaded=!0,this.dispatchEvent(new CustomEvent(`date-range-change`,{detail:{start:e.start,end:e.end},bubbles:!0,composed:!0}))}catch(e){console.warn(`loadClanLeaderboard: request failed`,e),this.error=g(`leaderboard_modal.error`)}finally{this.isLoading=!1}}handleSort(e){this.sortBy===e?this.sortOrder=this.sortOrder===`asc`?`desc`:`asc`:(this.sortBy=e,this.sortOrder=e===`rank`?`asc`:`desc`)}getSortedClans(e){if(this.sortBy===`rank`){let t=[...e];return this.sortOrder===`asc`?t:t.reverse()}let t=[...e];return t.sort((e,t)=>{let n,r;switch(this.sortBy){case`elo`:if(e.elo===null||t.elo===null)return(e.elo===null)-+(t.elo===null);n=e.elo,r=t.elo;break;case`games`:n=e.games,r=t.games;break;case`winScore`:n=e.weightedWins,r=t.weightedWins;break;case`lossScore`:n=e.weightedLosses,r=t.weightedLosses;break;case`ratio`:n=e.weightedWLRatio,r=t.weightedWLRatio;break;default:return 0}return this.sortOrder===`asc`?n-r:r-n}),t}renderLoading(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"
        ></div>
        <p class="text-blue-200/80 text-sm font-bold tracking-widest uppercase">
          ${g(`common.loading`)}
        </p>
      </div>
    `}renderError(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20 shadow-lg shadow-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <p class="mb-8 text-center text-red-100/80 font-medium">
          ${this.error??g(`leaderboard_modal.error`)}
        </p>
        <button
          class="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold uppercase transition-all active:scale-95"
          @click=${()=>this.loadClanLeaderboard()}
        >
          ${g(`leaderboard_modal.try_again`)}
        </button>
      </div>
    `}renderNoData(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white/40 h-full"
      >
        <div class="bg-white/5 p-6 rounded-full mb-6 border border-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white/60 mb-2">
          ${g(`leaderboard_modal.no_data_yet`)}
        </h3>
        <p class="text-white/30 text-sm">
          ${g(`leaderboard_modal.no_stats`)}
        </p>
      </div>
    `}render(){if(this.isLoading)return this.renderLoading();if(this.error)return this.renderError();if(!this.clanData||this.clanData.clans.length===0)return this.renderNoData();let{clans:e}=this.clanData,t=this.getSortedClans(e),n=Math.max(...e.map(e=>e.games),1);return c`
      <div class="h-full">
        <div class="h-full border border-white/5 bg-black/20">
          <div
            class="h-full overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
          >
            <table class="w-full text-sm border-collapse table-fixed">
              <colgroup>
                <col style="width: 4rem" />
                <col style="width: 5rem" />
                <col style="width: 5rem" />
                <col style="width: 8rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
              </colgroup>
              <thead class="sticky top-0 z-10">
                <tr
                  class="text-white/40 text-[10px] uppercase tracking-wider border-b border-white/5 bg-[#1e2433]"
                >
                  <th class="py-4 px-4 text-center font-bold">
                    ${g(`leaderboard_modal.rank`)}
                  </th>
                  <th class="py-4 px-4 text-left font-bold">
                    ${g(`leaderboard_modal.clan`)}
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`elo`)}
                      aria-sort=${this.sortBy===`elo`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${g(`leaderboard_modal.elo`)}
                      ${this.sortBy===`elo`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`games`)}
                      aria-sort=${this.sortBy===`games`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${g(`leaderboard_modal.games`)}
                      ${this.sortBy===`games`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                    title=${g(`leaderboard_modal.win_score_tooltip`)}
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`winScore`)}
                      aria-sort=${this.sortBy===`winScore`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${g(`leaderboard_modal.win_score`)}
                      ${this.sortBy===`winScore`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                    title=${g(`leaderboard_modal.loss_score_tooltip`)}
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`lossScore`)}
                      aria-sort=${this.sortBy===`lossScore`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${g(`leaderboard_modal.loss_score`)}
                      ${this.sortBy===`lossScore`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold pr-6 cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`ratio`)}
                      aria-sort=${this.sortBy===`ratio`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${g(`leaderboard_modal.win_loss_ratio`)}
                      ${this.sortBy===`ratio`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                ${t.map((e,t)=>{let r=t+1;return c`
                    <tr
                      class="border-b border-white/5 hover:bg-white/[0.07] transition-colors group"
                    >
                      <td class="py-3 px-4 text-center">
                        <div
                          class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg ${r===1?`text-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400/20`:r===2?`text-slate-300 bg-slate-400/10 ring-1 ring-slate-400/20`:r===3?`text-amber-600 bg-amber-600/10 ring-1 ring-amber-600/20`:`text-white/40 bg-white/5`}"
                        >
                          ${r===1?`👑`:r===2?`🥈`:r===3?`🥉`:String(r)}
                        </div>
                      </td>
                      <td class="py-3 px-4 font-bold text-blue-300">
                        <div
                          class="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 inline-block"
                        >
                          ${e.clanTag}
                        </div>
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono font-bold text-white"
                      >
                        ${e.elo??`—`}
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex flex-col items-end gap-1">
                          <span class="text-white font-mono font-medium"
                            >${e.games.toLocaleString()}</span
                          >
                          <div
                            class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"
                          >
                            <div
                              class="h-full bg-blue-500/50 rounded-full"
                              style="width: ${e.games/n*100}%"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono text-green-400/90"
                      >
                        ${e.weightedWins.toLocaleString(void 0,{maximumFractionDigits:1})}
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono text-red-400/90"
                      >
                        ${e.weightedLosses.toLocaleString(void 0,{maximumFractionDigits:1})}
                      </td>
                      <td class="py-3 px-4 text-right pr-6">
                        <div class="inline-flex flex-col items-end">
                          <span
                            class="font-mono font-bold ${e.weightedWLRatio>=1?`text-green-400`:`text-red-400`}"
                            >${e.weightedWLRatio.toLocaleString(void 0,{maximumFractionDigits:2})}</span
                          >
                          <span
                            class="text-[10px] uppercase text-white/30 font-bold tracking-wider"
                            >${g(`leaderboard_modal.ratio`)}</span
                          >
                        </div>
                      </td>
                    </tr>
                  `})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}};s([t()],x.prototype,`clanData`,void 0),s([t()],x.prototype,`isLoading`,void 0),s([t()],x.prototype,`error`,void 0),s([t()],x.prototype,`sortBy`,void 0),s([t()],x.prototype,`sortOrder`,void 0),x=s([i(`leaderboard-clan-table`)],x);var S=[d.OneVOne,d.TwoVTwo,d.FreeForAll],C=()=>({[d.OneVOne]:{entries:[],userEntry:null,hasMore:!0},[d.TwoVTwo]:{entries:[],userEntry:null,hasMore:!0},[d.FreeForAll]:{entries:[],userEntry:null,hasMore:!0}}),w=e=>({rank:e.rank,playerId:e.public_id,accountUsername:e.accountUsername,elo:e.elo,games:e.total,wins:e.wins,losses:e.losses,winRate:e.total>0?e.wins/e.total:0,level:e.level,prestige:e.prestige,legend:e.legend}),T=class extends o{constructor(...e){super(...e),this.rankedType=d.OneVOne,this.ladders=C(),this.showStickyUser=!1,this.isLoading=!1,this.error=null,this.isLoadingMore=!1,this.loadMoreError=null,this.hasLoadedPlayers=!1,this.playerPageSize=50,this.currentPage=1,this.currentUserId=null,this.currentUserIdLoaded=!1}get playerData(){return this.ladders[this.rankedType].entries}get currentUserEntry(){return this.ladders[this.rankedType].userEntry}get playerHasMore(){return this.ladders[this.rankedType].hasMore}mapLadders(e){let t={...this.ladders};for(let n of S)t[n]=e(this.ladders[n]);return t}createRenderRoot(){return this}updated(e){e.has(`rankedType`)&&(this.scrollContainer&&(this.scrollContainer.scrollTop=0),this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck())}async ensureLoaded(){this.hasLoadedPlayers||this.isLoading||await this.loadPlayerLeaderboard(!0)}async loadPlayerLeaderboard(e=!1){if(e)this.currentPage=1,this.loadMoreError=null,this.ladders=C(),this.showStickyUser=!1;else if(!this.playerHasMore)return;if(!(this.isLoading||this.isLoadingMore)){e?(this.isLoading=!0,this.error=null):(this.isLoadingMore=!0,this.loadMoreError=null);try{let t=await l(this.currentPage);if(t===!1)throw Error(`Failed to load player leaderboard`);if(t===`reached_limit`){this.ladders=this.mapLadders(e=>({...e,hasMore:!1})),this.hasLoadedPlayers=!0;return}if(e&&!this.currentUserIdLoaded){this.currentUserIdLoaded=!0;let e=await r();this.currentUserId=e?e.player.publicId:null}let n=!1,i={...this.ladders};for(let e of S){let r=this.ladders[e],a=(t[e]??[]).map(w);a.length>0&&(n=!0);let o=new Set(r.entries.map(e=>e.playerId));i[e]={entries:[...r.entries,...a.filter(e=>!o.has(e.playerId))],userEntry:r.userEntry??a.find(e=>e.playerId===this.currentUserId)??null,hasMore:r.hasMore&&a.length>=this.playerPageSize}}this.ladders=i,n&&this.currentPage++,this.hasLoadedPlayers=!0,this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck()}catch(t){console.warn(`loadPlayerLeaderboard: request failed`,t),e?this.error=g(`leaderboard_modal.error`):this.loadMoreError=g(`leaderboard_modal.error`)}finally{e?this.isLoading=!1:this.isLoadingMore=!1}}}handleTabActivated(){this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck()}openProfile(e){a(`player-profile-modal`).then(()=>document.querySelector(`player-profile-modal`)?.openFromLeaderboard(e),e=>console.error(`player-profile-modal failed to load:`,e))}isVisible(){return this.isConnected&&this.getClientRects().length>0}updateStickyVisibility(){if(!this.currentUserEntry){this.showStickyUser=!1;return}if(!this.scrollContainer||!this.isVisible()){this.showStickyUser=!1;return}let e=this.scrollContainer.querySelector(`[data-current-user="true"]`);if(!e){this.showStickyUser=!0;return}let t=this.scrollContainer.getBoundingClientRect(),n=e.getBoundingClientRect(),r=n.top>=t.top&&n.bottom<=t.bottom;this.showStickyUser=!r}scheduleStickyVisibilityCheck(){this.updateComplete.then(()=>{requestAnimationFrame(()=>this.updateStickyVisibility())})}handleScroll(){this.updateStickyVisibility(),this.maybeLoadMorePlayers()}maybeLoadMorePlayers(){if(this.isLoading||this.isLoadingMore||!this.playerHasMore||this.error||this.loadMoreError||!this.scrollContainer||!this.isVisible())return;let e=this.scrollContainer.scrollTop,t=this.scrollContainer.clientHeight,n=this.scrollContainer.scrollHeight,r=e+t>=n-192;t===0||n===0||r&&this.loadPlayerLeaderboard()}schedulePlayerFillCheck(){!this.playerHasMore||this.error||this.loadMoreError||this.updateComplete.then(()=>this.maybeLoadMorePlayers())}renderStickyUserRow(e){if(!this.currentUserEntry||!this.showStickyUser)return n;let t=this.currentUserEntry;return c`
      <tfoot class="sticky bottom-0 z-20">
        <tr class="bg-blue-600 border-t border-blue-400/30 shadow-2xl">
          <td class="py-3 px-4 text-center">
            <div
              class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg bg-white/20 text-white"
            >
              ${t.rank}
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-col">
              <span
                class="text-[10px] uppercase font-bold text-blue-200/80 leading-tight"
                >${g(`leaderboard_modal.your_ranking`)}</span
              >
              <div class="flex items-center gap-2 min-w-0">
                ${b(t,y(t),e)}
                <player-name
                  class="min-w-0"
                  .username=${t.accountUsername}
                  .publicId=${t.playerId}
                  .nameClass=${`font-bold text-white truncate text-base hover:underline`}
                  .onNameClick=${()=>this.openProfile(t.playerId)}
                ></player-name>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            <span class="font-mono text-white font-bold">${t.elo}</span>
          </td>
          <td class="py-3 px-4 text-right">
            <span class="font-mono text-white font-bold">${t.games}</span>
          </td>
          <td class="py-3 px-4 text-right pr-6">
            <div class="inline-flex flex-col items-end">
              <span class="font-mono font-bold text-white"
                >${(t.winRate*100).toFixed(1)}%</span
              >
              <span
                class="text-[10px] uppercase text-blue-200/80 font-bold tracking-wider"
                >${g(`leaderboard_modal.ratio`)}</span
              >
            </div>
          </td>
        </tr>
      </tfoot>
    `}renderPlayerRow(e,t){let n=this.currentUserEntry?.playerId===e.playerId,r=e.rank,i={1:`text-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400/20`,2:`text-slate-300 bg-slate-400/10 ring-1 ring-slate-400/20`,3:`text-amber-600 bg-amber-600/10 ring-1 ring-amber-600/20`}[r]??`text-white/40 bg-white/5`,a={1:`👑`,2:`🥈`,3:`🥉`}[r]??String(r);return c`
      <tr
        data-current-user=${n?`true`:`false`}
        class="border-b border-white/5 hover:bg-white/[0.07] transition-colors group ${n?`bg-blue-500/15`:``}"
      >
        <td class="py-3 px-4 text-center">
          <div
            class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg ${i}"
          >
            ${a}
          </div>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            ${b(e,y(e),t)}
            <player-name
              class="min-w-0"
              .username=${e.accountUsername}
              .publicId=${e.playerId}
              .nameClass=${`font-bold text-blue-300 truncate text-base hover:underline`}
              .onNameClick=${()=>this.openProfile(e.playerId)}
            ></player-name>
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          <span class="font-mono text-white font-medium">${e.elo}</span>
        </td>
        <td class="py-3 px-4 text-right">
          <span class="font-mono text-white font-medium">${e.games}</span>
        </td>
        <td class="py-3 px-4 text-right pr-6">
          <div class="inline-flex flex-col items-end">
            <span
              class="font-mono font-bold ${e.winRate>=.5?`text-green-400`:`text-red-400`}"
              >${(e.winRate*100).toFixed(1)}%</span
            >
            <span
              class="text-[10px] uppercase text-white/30 font-bold tracking-wider"
              >${g(`leaderboard_modal.ratio`)}</span
            >
          </div>
        </td>
      </tr>
    `}renderPlayerFooter(){return this.isLoadingMore?c`
        <div class="flex items-center justify-center py-4 text-white/50">
          <div
            class="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mr-2"
          ></div>
          <span class="text-[10px] font-bold uppercase tracking-widest">
            ${g(`common.loading`)}
          </span>
        </div>
      `:this.loadMoreError?c`
        <div class="flex items-center justify-center py-4">
          <button
            class="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-xs font-bold uppercase transition-all active:scale-95"
            @click=${()=>this.loadPlayerLeaderboard()}
          >
            ${g(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:``}renderLoading(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"
        ></div>
        <p class="text-blue-200/80 text-sm font-bold tracking-widest uppercase">
          ${g(`common.loading`)}
        </p>
      </div>
    `}renderError(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20 shadow-lg shadow-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <p class="mb-8 text-center text-red-100/80 font-medium">
          ${this.error??g(`leaderboard_modal.error`)}
        </p>
        <button
          class="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold uppercase transition-all active:scale-95"
          @click=${()=>this.loadPlayerLeaderboard(!0)}
        >
          ${g(`leaderboard_modal.try_again`)}
        </button>
      </div>
    `}renderNoData(){return c`
      <div
        class="flex flex-col items-center justify-center p-12 text-white/40 h-full"
      >
        <div class="bg-white/5 p-6 rounded-full mb-6 border border-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white/60 mb-2">
          ${g(`leaderboard_modal.no_data_yet`)}
        </h3>
        <p class="text-white/30 text-sm">
          ${g(`leaderboard_modal.ranked_no_stats`)}
        </p>
      </div>
    `}render(){if(this.isLoading&&this.playerData.length===0)return this.renderLoading();if(this.error)return this.renderError();if(this.hasLoadedPlayers&&this.playerData.length===0)return this.renderNoData();let e=this.playerData.some(y);return c`
      <div class="h-full">
        <!--
          No bottom border: the pinned "your ranking" row sits flush against
          this edge, and a dark hairline under a saturated blue row reads as a
          stray outline. The rows above it end on their own border-b.
        -->
        <div
          class="h-full border-x border-t border-white/5 bg-black/20 relative"
        >
          <div
            class="scroll-container h-full overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
            @scroll=${()=>this.handleScroll()}
          >
            <table class="w-full text-sm border-collapse table-fixed">
              <colgroup>
                <col style="width: 4rem" />
                <col style="width: 12rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
              </colgroup>
              <thead class="sticky top-0 z-10">
                <tr
                  class="text-white/40 text-[10px] uppercase tracking-wider border-b border-white/5 bg-[#1e2433]"
                >
                  <th class="py-4 px-4 text-center font-bold">
                    ${g(`leaderboard_modal.rank`)}
                  </th>
                  <th class="py-4 px-4 text-left font-bold">
                    ${g(`leaderboard_modal.player`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold">
                    ${g(`leaderboard_modal.elo`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold">
                    ${g(`leaderboard_modal.games`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold pr-6">
                    ${g(`leaderboard_modal.win_loss_ratio`)}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${this.playerData.map(t=>this.renderPlayerRow(t,e))}
              </tbody>
              ${this.renderStickyUserRow(e)}
            </table>
            ${this.renderPlayerFooter()}
          </div>
        </div>
      </div>
    `}};s([f({attribute:!1})],T.prototype,`rankedType`,void 0),s([t()],T.prototype,`ladders`,void 0),s([t()],T.prototype,`showStickyUser`,void 0),s([t()],T.prototype,`isLoading`,void 0),s([t()],T.prototype,`error`,void 0),s([t()],T.prototype,`isLoadingMore`,void 0),s([t()],T.prototype,`loadMoreError`,void 0),s([p(`.scroll-container`)],T.prototype,`scrollContainer`,void 0),T=s([i(`leaderboard-player-list`)],T);var E=e({LeaderboardModal:()=>k}),D=[`players`,`players2v2`,`playersFfa`,`clans`,`tribes`],O={players:d.OneVOne,players2v2:d.TwoVTwo,playersFfa:d.FreeForAll},k=class extends h{constructor(...e){super(...e),this.routerName=`leaderboard`,this.clanDateRange=null,this.loadToken=0,this.lastRankedType=d.OneVOne}modalConfig(){return{tabs:[{key:`players`,label:g(`leaderboard_modal.ranked_tab`)},{key:`players2v2`,label:g(`leaderboard_modal.ranked_2v2_tab`)},{key:`playersFfa`,label:g(`leaderboard_modal.ranked_ffa_tab`)},{key:`clans`,label:g(`leaderboard_modal.clans_tab`)},{key:`tribes`,label:g(`leaderboard_modal.tribes_tab`)}]}}rankedTypeFor(e){return O[e]??null}tabComponent(e){return this.rankedTypeFor(e)===null?e===`clans`?this.clanTable:this.tribeTable:this.playerList}onOpen(){this.loadActiveTabData()}onTabEnter(){this.lastRankedType=this.rankedTypeFor(this.activeTab)??this.lastRankedType,this.loadActiveTabData()}loadActiveTabData(){let e=++this.loadToken,t=this.activeTab,n=async()=>{if(e===this.loadToken){if(this.rankedTypeFor(t)!==null){if(await this.playerList?.ensureLoaded(),e!==this.loadToken)return;this.playerList?.handleTabActivated()}else await this.tabComponent(t)?.ensureLoaded();queueMicrotask(()=>{if(e===this.loadToken)for(let e of D)e!==t&&this.tabComponent(e)?.ensureLoaded()})}};(async()=>{this.tabComponent(t)||await this.updateComplete,await n()})()}handleClanDateRangeChange(e){this.clanDateRange=e.detail}renderHeaderSlot(){let e=c``;this.clanDateRange&&(e=c`<span
        class="text-sm font-normal text-white/40 ml-2 wrap-break-words"
        >(${new Date(this.clanDateRange.start).toLocaleDateString()} - ${new Date(this.clanDateRange.end).toLocaleDateString()})</span
      >`);let t=c`<span
      class="text-sm font-normal text-white/40 ml-2 wrap-break-words italic"
      >(${g(`leaderboard_modal.refresh_time`)})</span
    >`;return m({titleContent:c`
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="text-white text-xl sm:text-2xl font-bold uppercase tracking-widest"
          >
            ${g(`leaderboard_modal.title`)}
          </span>
          ${this.activeTab===`clans`?e:``}
          ${this.rankedTypeFor(this.activeTab)!==null||this.activeTab===`tribes`?t:``}
        </div>
      `,onBack:()=>this.close(),ariaLabel:g(`common.close`)})}renderBody(){return c`
      <div class="flex-1 min-h-0 h-full">
        <leaderboard-player-list
          class=${this.rankedTypeFor(this.activeTab)===null?`hidden`:`h-full`}
          .rankedType=${this.rankedTypeFor(this.activeTab)??this.lastRankedType}
        ></leaderboard-player-list>
        <leaderboard-clan-table
          class=${this.activeTab===`clans`?`h-full`:`hidden`}
          @date-range-change=${e=>this.handleClanDateRangeChange(e)}
        ></leaderboard-clan-table>
        <leaderboard-tribe-table
          class=${this.activeTab===`tribes`?`h-full`:`hidden`}
        ></leaderboard-tribe-table>
      </div>
    `}};s([t()],k.prototype,`clanDateRange`,void 0),s([p(`leaderboard-player-list`)],k.prototype,`playerList`,void 0),s([p(`leaderboard-clan-table`)],k.prototype,`clanTable`,void 0),s([p(`leaderboard-tribe-table`)],k.prototype,`tribeTable`,void 0),k=s([i(`leaderboard-modal`)],k);export{v as n,b as r,E as t};