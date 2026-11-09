import{Fi as e,Mi as t,Ni as n,Oi as r,Ri as i,ji as a,va as o}from"./index-xDRx6PtE.js";var s=class extends n{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let t=this.info;return t?i`<confirm-dialog
      .heading=${o(`store.insufficient_currency_title`,{currency:t.currency})}
      .message=${o(`store.insufficient_currency_body`,{amount:t.shortfall,currency:t.currency,item:t.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${t.canTopUp?`confirmOnly`:`none`}
      .confirmText=${t.canTopUp?o(`store.purchase_currency`,{currency:t.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:e}};r([a({attribute:!1})],s.prototype,`info`,void 0),s=r([t(`insufficient-currency-dialog`)],s);