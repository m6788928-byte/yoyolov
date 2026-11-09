import{Ai as e,Lo as t,Mi as n,Oi as r,Ri as i,ln as a,un as o,va as s}from"./index-xDRx6PtE.js";import"./RewardsPanel-B1rmza7G.js";var c=class extends o{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(t)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return a({title:s(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:s(`common.back`)})}renderBody(){return i`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};r([e()],c.prototype,`rewards`,void 0),r([e()],c.prototype,`signedIn`,void 0),c=r([n(`rewards-modal`)],c);export{c as RewardsModal};