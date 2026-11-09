import{Ci as e,Ei as t,Mi as n,Oi as r,Ri as i,ln as a,un as o,va as s}from"./index-xDRx6PtE.js";import"./Difficulties-DTbLFscd.js";var c=class extends o{constructor(){super(),this.isAttemptingLogin=!1,this.retryInterval=void 0,this.loginGeneration=0,this.token=null,this.email=null,this.attemptCount=0}modalConfig(){return{maxWidth:`620px`}}renderHeaderSlot(){return a({title:s(`token_login_modal.title`),onBack:()=>this.close(),ariaLabel:s(`common.back`)})}renderBody(){return i`
      <div class="flex-1 flex flex-col gap-4 p-6">
        ${this.email?this.loginSuccess(this.email):this.loggingIn()}
      </div>
    `}loggingIn(){return i`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-blue-400/40 bg-blue-500/10 flex items-center justify-center"
        >
          <div
            class="w-6 h-6 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"
          ></div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-semibold text-white">${s(`token_login_modal.title`)}</p>
          <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-blue-400/80 animate-pulse"></div>
          </div>
        </div>
      </div>
    `}loginSuccess(e){return i`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-500/10 flex items-center justify-center"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
        <p class="text-base text-white/90">${s(`token_login_modal.success`,{email:e})}</p>
      </div>
    `}openWithToken(e){this.token=e,this.open()}open(e){this.token&&super.open(e)}onOpen(){this.loginGeneration++,this.email=null,this.attemptCount=0,this.isAttemptingLogin=!1,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.requestUpdate(),this.retryInterval=setInterval(()=>this.tryLogin(),3e3),this.tryLogin()}onClose(){this.loginGeneration++,this.token=null,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.attemptCount=0,this.isAttemptingLogin=!1}async tryLogin(){let n=this.loginGeneration;if(!this.isAttemptingLogin){if(this.attemptCount>3){this.close(),t(s(`error_modal.login_failed`));return}if(this.attemptCount++,this.isAttemptingLogin=!0,this.token===null){this.close();return}try{let r=await e(this.token);if(n!==this.loginGeneration||r.status===`retry`)return;if(r.status===`failed`){clearInterval(this.retryInterval),this.close();let e={consumed:`error_modal.login_token_consumed`,expired:`error_modal.login_token_expired`,invalid:`error_modal.login_token_invalid`}[r.code];t(s(e));return}this.email=r.email,clearInterval(this.retryInterval),this.successTimeout=setTimeout(()=>{n===this.loginGeneration&&(this.close(),window.location.reload())},1e3),this.requestUpdate()}catch(e){n===this.loginGeneration&&console.error(e)}finally{n===this.loginGeneration&&(this.isAttemptingLogin=!1)}}}};c=r([n(`token-login`)],c);export{c as TokenLoginModal};