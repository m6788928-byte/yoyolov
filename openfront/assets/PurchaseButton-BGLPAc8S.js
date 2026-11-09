import{Ai as e,Ao as t,Ei as n,Fi as r,Ja as i,Kr as a,Mi as o,Ni as s,Oi as c,Pi as l,Ri as u,br as d,ji as f,qr as p,rr as m,ur as h,va as g,xr as _}from"./index-xDRx6PtE.js";import"./CapIcon-BSh7ps9d.js";import"./PlutoniumIcon-DwFXc8EK.js";import"./InsufficientCurrencyDialog-aHUQwzfQ.js";function v(e){return e.colorPalette?`pattern:${e.name}:${e.colorPalette.name}`:`pattern:${e.name}`}function ee(e,t){let n=new Map(t.map(e=>[e.key,e])),r=new Map(t.filter(e=>e.type===`effect`).map(e=>[`${e.effectType}:${e.cosmetic?.name}`,e])),i=[],a=(e,t,r,a,o)=>{let s=n.get(t)??null;i.push({type:e,key:t,name:r,resolved:s,pattern:a,imageUrl:o,relationship:s?.relationship??`unknown`})};e.pattern&&a(`pattern`,v(e.pattern),e.pattern.name,e.pattern,null),e.skin&&a(`skin`,`skin:${e.skin.name}`,e.skin.name,null,e.skin.url),e.crown&&a(`crown`,`crown:${e.crown.name}`,e.crown.name,null,e.crown.url);for(let t of Object.values(e.effects??{}))a(`effect`,(r.get(`${t.effectType}:${t.name}`)??null)?.key??`effect:${t.effectType}:${t.name}`,t.name,null,null);return i}function te(e){return e.relationship===`purchasable`?e.type===`effect`?`#modal=store&tab=effects`:`#modal=store&tab=cosmetics&item=${encodeURIComponent(e.key)}`:null}function ne(e,t){return e===t?!0:!e.startsWith(`pattern:`)||!t.startsWith(`pattern:`)?!1:e.split(`:`)[1]===t.split(`:`)[1]}function y(e){"@babel/helpers - typeof";return y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},y(e)}var b=`dahlia`,x=function(e){return e===3?`v3`:e},S=`https://js.stripe.com`,C=`${S}/${b}/stripe.js`,w=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,T=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,E=`loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used`,D=function(e){return w.test(e)||T.test(e)},O=function(){for(var e=document.querySelectorAll(`script[src^="${S}"]`),t=0;t<e.length;t++){var n=e[t];if(D(n.src))return n}return null},k=function(e){var t=e&&!e.advancedFraudSignals?`?advancedFraudSignals=false`:``,n=document.createElement(`script`);n.src=`${C}${t}`;var r=document.head||document.body;if(!r)throw Error(`Expected document.body not to be null. Stripe.js requires a <body> element.`);return r.appendChild(n),n},re=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:`stripe-js`,version:`9.15.0`,startTime:t})},A=null,j=null,M=null,N=function(e){return function(t){e(Error(`Failed to load Stripe.js`,{cause:t}))}},P=function(e,t){return function(){window.Stripe?e(window.Stripe):t(Error(`Stripe.js not available`))}},F=function(e){return A===null?(A=new Promise(function(t,n){if(typeof window>`u`||typeof document>`u`){t(null);return}if(window.Stripe&&e&&console.warn(E),window.Stripe){t(window.Stripe);return}try{var r=O();if(r&&e)console.warn(E);else if(!r)r=k(e);else if(r&&M!==null&&j!==null){var i;r.removeEventListener(`load`,M),r.removeEventListener(`error`,j),(i=r.parentNode)==null||i.removeChild(r),r=k(e)}M=P(t,n),j=N(n),r.addEventListener(`load`,M),r.addEventListener(`error`,j)}catch(e){n(e);return}}),A.catch(function(e){return A=null,Promise.reject(e)})):A},I=function(e,t,n){if(e===null)return null;var r=t[0];if(typeof r!=`string`)throw Error(`Expected publishable key to be of type string, got type ${y(r)} instead.`);var i=r.match(/^pk_test/),a=x(e.version),o=b;i&&a!==o&&console.warn(`Stripe.js@${a} was loaded on the page, but @stripe/stripe-js@9.15.0 expected Stripe.js@${o}. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning`);var s=e.apply(void 0,t);return re(s,n),s},L=function(e){var t=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    ${JSON.stringify(e)}
`;if(e===null||y(e)!==`object`)throw Error(t);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals==`boolean`)return e;throw Error(t)},R,z=!1,B=function(){var e=[...arguments];z=!0;var t=Date.now();return F(R).then(function(n){return I(n,e,t)})};B.setLoadParameters=function(e){if(z&&R){var t=L(e);if(Object.keys(t).reduce(function(t,n){return t&&e[n]===R?.[n]},!0))return}if(z)throw Error(`You cannot change load parameters after calling loadStripe`);R=L(e)};function V(){let e;try{e=i.stripePublishableKey()}catch{return null}return e===void 0||e===``?null:e}function H(e,n){return e.startsWith(`pk_live_`)===(n===t.Prod)}function U(){let e=V();return _()===`stripe`&&e!==null&&H(e,i.env())}var W=null;function G(){let e=V();return e===null?Promise.resolve(null):(W??=B(e).catch(e=>(console.warn(`getStripe: Stripe.js failed to load`,e),W=null,null)),W)}function K(e){return`${window.location.origin}/#purchase-completed?type=${e}`}var q=class e{constructor(e,t,n,r){this.stripe=e,this.elements=t,this.request=n,this.amountCents=r,this.clientSecret=null,this.pendingUpdate=Promise.resolve()}static async create(t,n){let r=await G();return r===null?null:new e(r,r.elements({mode:`payment`,amount:n,currency:`usd`,paymentMethodTypes:[`card`,`link`],appearance:{theme:`night`}}),t,n)}createExpressCheckoutElement(e){return this.elements.create(`expressCheckout`,{buttonHeight:44,emailRequired:e.emailRequired,paymentMethods:{link:`never`,paypal:`never`,amazonPay:`never`,klarna:`never`}})}createPaymentElement(){return this.elements.create(`payment`)}update(e,t){this.request=e,t!==this.amountCents&&(this.amountCents=t,this.pendingUpdate=this.elements.update({amount:t})),this.clientSecret=null}async confirm(e={}){try{return await this.confirmInner(e)}catch(e){return console.error(`inline checkout confirm failed`,e),{kind:`error`,message:g(`store.purchase_failed`),stage:`checkout`}}}async confirmInner(e){await this.pendingUpdate;let{error:t}=await this.elements.submit();if(t)return{kind:`error`,message:t.message??g(`store.checkout_failed`),stage:`checkout`};if(this.clientSecret===null){let e=await d(this.request);if(e.kind===`error`)return{kind:`error`,message:e.error.message,refetchCatalog:e.error.refetchCatalog,stage:`checkout`};if(e.kind===`redirect`)return window.location.href=e.redirectUrl,{kind:`redirecting`};let t=(await this.stripe.retrievePaymentIntent(e.clientSecret).catch(()=>null))?.paymentIntent?.amount;if(t!==void 0&&t!==this.amountCents)return console.error(`inline checkout amount mismatch: intent ${t}, elements ${this.amountCents}`),{kind:`error`,message:g(`store.checkout_failed`),stage:`checkout`,useFallback:!0};this.clientSecret=e.clientSecret}let{error:n,paymentIntent:r}=await this.stripe.confirmPayment({elements:this.elements,clientSecret:this.clientSecret,confirmParams:{return_url:K(this.request.kind),...e.receiptEmail?{receipt_email:e.receiptEmail}:{}},redirect:`if_required`});return n?{kind:`error`,message:n.message??g(`store.purchase_failed`),stage:`payment`}:(this.clientSecret=null,r?.status===`succeeded`?{kind:`success`}:{kind:`pending`})}},J=2500,Y=class extends s{constructor(...e){super(...e),this.request=null,this.amountCents=0,this.priceLabel=``,this.successMessageKey=``,this.walletVisible=!1,this.modalOpen=!1,this.confirming=!1,this.cardReady=!1,this.modalError=null,this.fallbackBusy=!1,this.emailRequired=!1,this.emailValue=``,this.session=null,this.sessionPromise=null,this.expressElement=null,this.paymentElement=null,this.portal=null,this.syncedKey=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){this.expressElement?.destroy(),this.expressElement=null,this.destroyPaymentElement(),this.session=null,this.sessionPromise=null,this.walletVisible=!1,this.modalOpen=!1,this.portal&&=(l(u``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}ensureSession(){return this.request===null||!U()?Promise.resolve(null):(this.sessionPromise??=q.create(this.request,this.amountCents).then(e=>e===null?(this.sessionPromise=null,null):(this.session=e,this.syncSession(),e)).catch(e=>(console.warn(`inline-checkout: session creation failed`,e),this.sessionPromise=null,null)),this.sessionPromise)}syncSession(){if(this.session===null||this.request===null)return;let e=JSON.stringify([this.request,this.amountCents]);e!==this.syncedKey&&(this.syncedKey=e,this.session.update(this.request,this.amountCents))}firstUpdated(){this.initWallet()}updated(e){super.updated(e),(e.has(`request`)||e.has(`amountCents`))&&this.syncSession()}async needsEmail(){let e=await a();return e!==!1&&!e.user.email&&!e.user.google}async initWallet(){let[e,t]=await Promise.all([this.ensureSession(),this.needsEmail()]);if(e===null||this.expressElement!==null)return;let n=this.querySelector(`[data-express-checkout]`);if(n===null||!this.isConnected)return;let r=e.createExpressCheckoutElement({emailRequired:t});r.on(`ready`,({availablePaymentMethods:e})=>{this.walletVisible=e!==void 0}),r.on(`confirm`,e=>void this.confirmWallet(e)),r.mount(n),this.expressElement=r}async confirmWallet(e){if(this.session===null||this.confirming){e.paymentFailed({reason:`fail`});return}this.confirming=!0;try{let t=await this.session.confirm({receiptEmail:e.billingDetails?.email??null});if(t.kind===`error`){if(t.stage===`checkout`&&e.paymentFailed({reason:`fail`}),t.refetchCatalog&&h(),t.useFallback&&this.onFallback){await this.runFallback();return}await n(t.message);return}if(t.kind===`redirecting`){e.paymentFailed({reason:`fail`});return}await this.settle(t)}finally{this.confirming=!1}}async openCardModal(){let[e,t]=await Promise.all([this.ensureSession(),this.needsEmail()]);if(e===null){await this.runFallback();return}this.emailRequired=t,this.modalOpen=!0,this.modalError=null,this.cardReady=!1,await this.updateComplete;let n=this.portal?.querySelector(`[data-payment-element]`);if(!n||this.paymentElement!==null)return;let r=e.createPaymentElement();r.on(`ready`,()=>{this.cardReady=!0}),r.mount(n),this.paymentElement=r}destroyPaymentElement(){this.paymentElement?.destroy(),this.paymentElement=null,this.cardReady=!1}closeCardModal(){this.confirming||(this.modalOpen=!1,this.modalError=null,this.destroyPaymentElement())}emailLooksValid(){return/^\S+@\S+\.\S+$/.test(this.emailValue.trim())}async confirmCard(){if(!(this.session===null||this.confirming||!this.cardReady)&&!(this.emailRequired&&!this.emailLooksValid())){this.confirming=!0,this.modalError=null;try{let e=await this.session.confirm({receiptEmail:this.emailRequired?this.emailValue.trim():null});if(e.kind===`error`){if(e.refetchCatalog&&h(),e.useFallback&&this.onFallback){this.modalOpen=!1,this.destroyPaymentElement(),await this.runFallback();return}this.modalError=e.message;return}this.modalOpen=!1,this.destroyPaymentElement(),await this.settle(e)}finally{this.confirming=!1}}}async settle(e){if(e.kind!==`redirecting`){if(e.kind===`success`){await n(g(this.successMessageKey)),p(),window.location.reload();return}m(),setTimeout(()=>void m(),J),await n(g(`store.purchase_pending`))}}async runFallback(){if(!(!this.onFallback||this.fallbackBusy)){this.fallbackBusy=!0;try{await this.onFallback()}catch(e){console.error(`inline-checkout fallback failed`,e),await n(g(`store.checkout_failed`))}finally{this.fallbackBusy=!1}}}onPriceClick(e){e.stopPropagation(),U()?this.openCardModal():this.runFallback()}render(){this.portal&&l(this.modalOpen?this.renderModal():u``,this.portal);let e=U()?g(`store.pay_with_card`):this.priceLabel;return u`
      <div class="flex w-full flex-col gap-1">
        <div
          data-express-checkout
          class=${this.walletVisible?`w-full`:`hidden`}
        ></div>
        ${this.walletVisible?u`<button
                data-pay-with-card
                class="w-full border-0 bg-transparent py-1 text-center text-xs font-semibold text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200 hover:text-white disabled:opacity-50"
                ?disabled=${this.fallbackBusy||this.confirming}
                @click=${e=>this.onPriceClick(e)}
              >
                ${g(`store.pay_with_card`)}
              </button>`:u`<button
                class="purchase-sparkle-btn relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center
               hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] disabled:opacity-50"
                ?disabled=${this.fallbackBusy||this.confirming}
                @click=${e=>this.onPriceClick(e)}
              >
                <span class="purchase-sparkle-streak"></span>
                ${e}
              </button>`}
      </div>
    `}renderModal(){return u`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.closeCardModal()}}
      >
        <div
          class="relative mx-4 max-h-[85vh] w-full max-w-sm overflow-y-auto p-6 rounded-2xl border border-white/15 bg-surface shadow-2xl"
        >
          <button
            @click=${()=>this.closeCardModal()}
            ?disabled=${this.confirming}
            aria-label=${g(`common.close`)}
            class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
          >
            ×
          </button>
          <h2 class="text-lg font-bold text-white mb-4 pr-8">
            ${g(`store.pay_with_card`)}
          </h2>
          ${this.emailRequired?u`<label
                    class="mb-1 block text-xs font-medium text-white/70"
                    for="inline-checkout-email"
                    >${g(`store.card_email_label`)}</label
                  >
                  <input
                    id="inline-checkout-email"
                    data-checkout-email
                    type="email"
                    autocomplete="email"
                    .value=${this.emailValue}
                    ?disabled=${this.confirming}
                    @input=${e=>{this.emailValue=e.target.value}}
                    class="mb-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <p class="mb-3 text-xs text-white/50">
                    ${g(`store.card_email_hint`)}
                  </p>`:r}
          <div data-payment-element class="mb-4 min-h-[6rem]"></div>
          ${this.modalError===null?r:u`<p class="mb-4 text-sm font-medium text-red-300">
                  ${this.modalError}
                </p>`}
          <button
            @click=${()=>void this.confirmCard()}
            ?disabled=${this.confirming||!this.cardReady||this.emailRequired&&!this.emailLooksValid()}
            class="w-full min-h-11 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            ${this.confirming?u`<span
                    class="inline-block h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                  ></span>`:r}
            ${g(`store.pay_amount`,{amount:this.priceLabel})}
          </button>
        </div>
      </div>
    `}};c([f({type:Object})],Y.prototype,`request`,void 0),c([f({type:Number})],Y.prototype,`amountCents`,void 0),c([f({type:String})],Y.prototype,`priceLabel`,void 0),c([f({type:String})],Y.prototype,`successMessageKey`,void 0),c([f({type:Function})],Y.prototype,`onFallback`,void 0),c([e()],Y.prototype,`walletVisible`,void 0),c([e()],Y.prototype,`modalOpen`,void 0),c([e()],Y.prototype,`confirming`,void 0),c([e()],Y.prototype,`cardReady`,void 0),c([e()],Y.prototype,`modalError`,void 0),c([e()],Y.prototype,`fallbackBusy`,void 0),c([e()],Y.prototype,`emailRequired`,void 0),c([e()],Y.prototype,`emailValue`,void 0),Y=c([o(`inline-checkout`)],Y);var X=`purchase-button-styles`;if(!document.getElementById(X)){let e=document.createElement(`style`);e.id=X,e.textContent=`
    @keyframes purchase-streak {
      0%   { left: -60%; opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { left: 160%; opacity: 0; }
    }
    .purchase-sparkle-streak {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.5) 50%, transparent 100%);
      transform: skewX(-15deg);
      opacity: 0;
    }
    .purchase-btn-wrap:hover .purchase-sparkle-streak,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-streak {
      animation: purchase-streak 0.7s ease-in-out;
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn {
      background: rgb(37,99,235);
      border-color: rgb(96,165,250);
      color: white;
      box-shadow: 0 0 20px rgba(96,165,250,0.6);
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn-hard,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn-hard {
      background: rgb(29,78,216);
      border-color: rgb(96,165,250);
      color: white;
      box-shadow: 0 0 20px rgba(96,165,250,0.6);
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn-soft,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn-soft {
      background: rgb(180,83,9);
      border-color: rgb(217,119,6);
      color: white;
      box-shadow: 0 0 20px rgba(217,119,6,0.6);
    }
    @keyframes purchase-pulse {
      0%   { box-shadow: 0 0 15px rgba(96,165,250,0.6), 0 0 30px rgba(37,99,235,0.3); }
      50%  { box-shadow: 0 0 25px rgba(96,165,250,0.9), 0 0 50px rgba(37,99,235,0.5); }
      100% { box-shadow: 0 0 15px rgba(96,165,250,0.6), 0 0 30px rgba(37,99,235,0.3); }
    }
    .purchase-sparkle-btn:hover {
      background: rgb(29,78,216) !important;
      border-color: rgb(96,165,250) !important;
      color: white !important;
      animation: purchase-pulse 1.2s ease-in-out infinite !important;
    }
    .purchase-sparkle-btn-hard:hover {
      background: rgb(29,78,216) !important;
      border-color: rgb(96,165,250) !important;
      color: white !important;
      animation: purchase-pulse 1.2s ease-in-out infinite !important;
    }
    @keyframes purchase-pulse-soft {
      0%   { box-shadow: 0 0 15px rgba(217,119,6,0.6), 0 0 30px rgba(180,83,9,0.3); }
      50%  { box-shadow: 0 0 25px rgba(217,119,6,0.9), 0 0 50px rgba(180,83,9,0.5); }
      100% { box-shadow: 0 0 15px rgba(217,119,6,0.6), 0 0 30px rgba(180,83,9,0.3); }
    }
    .purchase-sparkle-btn-soft:hover {
      background: rgb(180,83,9) !important;
      border-color: rgb(217,119,6) !important;
      color: white !important;
      animation: purchase-pulse-soft 1.2s ease-in-out infinite !important;
    }
    @keyframes purchase-ember-0 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-35px) translateX(5px) scale(0.2); opacity: 0; }
    }
    @keyframes purchase-ember-1 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-30px) translateX(-6px) scale(0.3); opacity: 0; }
    }
    @keyframes purchase-ember-2 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-40px) translateX(3px) scale(0.2); opacity: 0; }
    }
    @keyframes purchase-ember-3 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-28px) translateX(-4px) scale(0.3); opacity: 0; }
    }
    .purchase-ember {
      pointer-events: none;
      position: absolute;
      top: var(--purchase-particle-top, 0px);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: rgba(96,165,250,0.9);
      box-shadow: 0 0 4px rgba(96,165,250,0.8);
      opacity: 0;
      display: none;
    }
    .purchase-ember-0 { left: 20%; animation: purchase-ember-0 1.2s ease-out infinite; }
    .purchase-ember-1 { left: 40%; animation: purchase-ember-1 1.5s ease-out infinite 0.25s; }
    .purchase-ember-2 { left: 60%; animation: purchase-ember-2 1.3s ease-out infinite 0.5s; }
    .purchase-ember-3 { left: 80%; animation: purchase-ember-3 1.6s ease-out infinite 0.15s; }
    .purchase-btn-wrap:hover .purchase-ember,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-ember {
      display: block;
    }
    @keyframes purchase-burst-a { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-70px) translateX(14px) scale(0); opacity:0; } }
    @keyframes purchase-burst-b { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-60px) translateX(-12px) scale(0); opacity:0; } }
    @keyframes purchase-burst-c { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-80px) translateX(8px) scale(0); opacity:0; } }
    @keyframes purchase-burst-d { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-55px) translateX(-16px) scale(0); opacity:0; } }
    @keyframes purchase-burst-e { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-75px) translateX(18px) scale(0); opacity:0; } }
    @keyframes purchase-burst-f { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-65px) translateX(-6px) scale(0); opacity:0; } }
    .purchase-burst {
      pointer-events: none;
      position: absolute;
      top: var(--purchase-particle-top, 0px);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(96,165,250,1);
      box-shadow: 0 0 6px rgba(96,165,250,0.9), 0 0 2px rgba(255,255,255,0.5);
      opacity: 0;
      display: none;
    }
    .purchase-burst-0  { left: 3%;  animation: purchase-burst-a 0.9s  ease-out infinite 0.00s; }
    .purchase-burst-1  { left: 8%;  animation: purchase-burst-d 1.1s  ease-out infinite 0.73s; }
    .purchase-burst-2  { left: 12%; animation: purchase-burst-c 0.95s ease-out infinite 0.41s; }
    .purchase-burst-3  { left: 16%; animation: purchase-burst-f 1.05s ease-out infinite 0.17s; }
    .purchase-burst-4  { left: 20%; animation: purchase-burst-b 0.85s ease-out infinite 0.89s; }
    .purchase-burst-5  { left: 24%; animation: purchase-burst-e 1.0s  ease-out infinite 0.53s; }
    .purchase-burst-6  { left: 28%; animation: purchase-burst-a 1.1s  ease-out infinite 0.29s; }
    .purchase-burst-7  { left: 32%; animation: purchase-burst-c 0.9s  ease-out infinite 0.97s; }
    .purchase-burst-8  { left: 36%; animation: purchase-burst-f 1.05s ease-out infinite 0.61s; }
    .purchase-burst-9  { left: 40%; animation: purchase-burst-d 0.95s ease-out infinite 0.07s; }
    .purchase-burst-10 { left: 44%; animation: purchase-burst-b 1.0s  ease-out infinite 0.83s; }
    .purchase-burst-11 { left: 48%; animation: purchase-burst-e 0.85s ease-out infinite 0.37s; }
    .purchase-burst-12 { left: 52%; animation: purchase-burst-a 1.1s  ease-out infinite 0.67s; }
    .purchase-burst-13 { left: 56%; animation: purchase-burst-f 0.9s  ease-out infinite 0.11s; }
    .purchase-burst-14 { left: 60%; animation: purchase-burst-c 1.05s ease-out infinite 0.79s; }
    .purchase-burst-15 { left: 64%; animation: purchase-burst-d 0.95s ease-out infinite 0.47s; }
    .purchase-burst-16 { left: 68%; animation: purchase-burst-b 1.0s  ease-out infinite 0.23s; }
    .purchase-burst-17 { left: 72%; animation: purchase-burst-e 0.85s ease-out infinite 1.03s; }
    .purchase-burst-18 { left: 76%; animation: purchase-burst-a 1.1s  ease-out infinite 0.57s; }
    .purchase-burst-19 { left: 80%; animation: purchase-burst-f 0.95s ease-out infinite 0.31s; }
    .purchase-burst-20 { left: 6%;  animation: purchase-burst-b 0.92s ease-out infinite 0.15s; }
    .purchase-burst-21 { left: 14%; animation: purchase-burst-e 1.08s ease-out infinite 0.86s; }
    .purchase-burst-22 { left: 22%; animation: purchase-burst-a 0.88s ease-out infinite 0.44s; }
    .purchase-burst-23 { left: 30%; animation: purchase-burst-d 1.02s ease-out infinite 0.71s; }
    .purchase-burst-24 { left: 38%; animation: purchase-burst-f 0.93s ease-out infinite 0.03s; }
    .purchase-burst-25 { left: 46%; animation: purchase-burst-c 1.07s ease-out infinite 0.59s; }
    .purchase-burst-26 { left: 54%; animation: purchase-burst-b 0.87s ease-out infinite 0.92s; }
    .purchase-burst-27 { left: 62%; animation: purchase-burst-e 0.98s ease-out infinite 0.26s; }
    .purchase-burst-28 { left: 70%; animation: purchase-burst-a 1.12s ease-out infinite 0.64s; }
    .purchase-burst-29 { left: 78%; animation: purchase-burst-d 0.91s ease-out infinite 0.38s; }
    .purchase-burst-30 { left: 84%; animation: purchase-burst-c 1.03s ease-out infinite 0.77s; }
    .purchase-burst-31 { left: 88%; animation: purchase-burst-f 0.86s ease-out infinite 0.09s; }
    .purchase-burst-32 { left: 92%; animation: purchase-burst-b 1.06s ease-out infinite 0.52s; }
    .purchase-burst-33 { left: 96%; animation: purchase-burst-e 0.94s ease-out infinite 0.81s; }
    .purchase-burst-34 { left: 10%; animation: purchase-burst-d 0.89s ease-out infinite 0.34s; }
    .purchase-burst-35 { left: 26%; animation: purchase-burst-a 1.04s ease-out infinite 0.96s; }
    .purchase-burst-36 { left: 42%; animation: purchase-burst-f 0.91s ease-out infinite 0.19s; }
    .purchase-burst-37 { left: 58%; animation: purchase-burst-c 1.09s ease-out infinite 0.69s; }
    .purchase-burst-38 { left: 74%; animation: purchase-burst-b 0.87s ease-out infinite 0.46s; }
    .purchase-burst-39 { left: 90%; animation: purchase-burst-e 1.01s ease-out infinite 0.13s; }
    .purchase-btn-wrap:hover .purchase-burst,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-burst {
      display: block;
    }
    @keyframes cosmetic-spin {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .cosmetic-loading-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.6);
      border-radius: 0.75rem;
      z-index: 20;
    }
    .cosmetic-loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255,255,255,0.2);
      border-top-color: rgb(96,165,250);
      border-radius: 50%;
      animation: cosmetic-spin 0.8s linear infinite;
    }
  `,document.head.appendChild(e)}function Z(e,t){return t!==null&&t>e}function Q(e,t,n,r){let i=u`<span
    aria-hidden="true"
    class="shrink-0"
    style="width:${t}px"
  ></span>`;return Z(n,r)?u`${e}<span
      class="flex flex-col items-center gap-0.5 leading-none"
    >
      <span class="font-black text-white"
        ><span class="sr-only">${g(`store.sale_now`)} </span
        >${n.toLocaleString()}</span
      >
      <s
        data-sale-tag
        class="text-[11px] font-semibold text-white/55 decoration-aquarius decoration-2"
        ><span class="sr-only">${g(`store.sale_was`)} </span
        >${r.toLocaleString()}</s
      > </span
    >${i}`:u`${e}<span>${n.toLocaleString()}</span>${i}`}var $=class extends s{constructor(...e){super(...e),this.product=null,this.dollarPrice=``,this.priceHard=null,this.priceSoft=null,this.listPriceHard=null,this.listPriceSoft=null,this.rarity=`common`,this.dollarLabelKey=``,this.priceSuffix=``,this.itemName=``,this.reserveDollar=!1,this.reserveHard=!1,this.reserveSoft=!1,this.inlineCheckout=null,this.insufficient=null,this.confirmingPurchase=null,this.busy=!1}createRenderRoot(){return this}get offersDollar(){return!!((this.product??this.dollarPrice)&&this.onPurchaseDollar)}get offersHard(){return this.priceHard!==null&&this.onPurchaseHard!==void 0}get offersSoft(){return this.priceSoft!==null&&this.onPurchaseSoft!==void 0}handleClick(e,t){e.stopPropagation(),this.executePurchase(t)}requestCurrencyPurchase(e){let t=e===`hard`?this.onPurchaseHard:this.onPurchaseSoft;!t||this.busy||(this.confirmingPurchase={method:e,amount:(e===`hard`?this.priceHard:this.priceSoft)??0,itemName:this.itemName,handler:t})}executePurchase(e){!e||this.busy||(this.busy=!0,Promise.resolve().then(()=>e()).then(e=>{e&&(this.insufficient=e)}).catch(e=>{console.error(`Purchase callback failed`,e),n(g(`store.purchase_failed`))}).finally(()=>this.busy=!1))}showInsufficient(e){this.insufficient=e}renderDollarButton(){let e=this.dollarPrice||this.product?.price;return e?this.inlineCheckout?u`<inline-checkout
        class="block w-full"
        .request=${this.inlineCheckout.request}
        .amountCents=${this.inlineCheckout.amountCents}
        .successMessageKey=${this.inlineCheckout.successMessageKey}
        .priceLabel=${e}
        .onFallback=${this.onPurchaseDollar}
      ></inline-checkout>`:u`
      <button
        class="purchase-sparkle-btn relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center
         hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>this.handleClick(e,this.onPurchaseDollar)}
      >
        <span class="purchase-sparkle-streak"></span>
        ${this.dollarLabelKey?u`${g(this.dollarLabelKey)} `:r}${e}${this.priceSuffix}
      </button>
    `:r}renderHardButton(){return u`
      <button
        class="purchase-sparkle-btn-hard relative overflow-hidden w-full min-h-11 px-2 py-1.5 ${Z(this.priceHard,this.listPriceHard)?`bg-blue-500/30 border-blue-400/70`:`bg-blue-500/20 border-blue-500/40`} text-blue-300 border rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2
         hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>{e.stopPropagation(),this.requestCurrencyPurchase(`hard`)}}
      >
        ${Q(u`<plutonium-icon
            .size=${20}
            style="margin-top:3px"
          ></plutonium-icon>`,20,this.priceHard,this.listPriceHard)}
      </button>
    `}renderSoftButton(){return u`
      <button
        class="purchase-sparkle-btn-soft relative overflow-hidden w-full min-h-11 px-2 py-1.5 ${Z(this.priceSoft,this.listPriceSoft)?`bg-amber-600/30 border-amber-500/70`:`bg-amber-700/20 border-amber-700/30`} text-amber-600 border rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2
         hover:bg-amber-700 hover:border-amber-600 hover:text-white hover:shadow-[0_0_20px_rgba(217,119,6,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>{e.stopPropagation(),this.requestCurrencyPurchase(`soft`)}}
      >
        ${Q(u`<cap-icon .size=${22} style="margin-top:3px"></cap-icon>`,22,this.priceSoft,this.listPriceSoft)}
      </button>
    `}renderReservedLine(){return u`<span
      aria-hidden="true"
      class="invisible block w-full min-h-11 px-2 py-1.5 border rounded-lg text-base font-bold"
      >0</span
    >`}render(){let e=this.offersDollar,t=this.offersHard,n=this.offersSoft;return!e&&!t&&!n?r:u`
      <div
        class="no-game-portal w-full mt-2 relative purchase-btn-wrap"
        style="--purchase-particle-top: ${((!e&&this.reserveDollar?1:0)+(!e&&!t&&this.reserveHard?1:0))*3}rem"
        aria-busy=${this.busy?`true`:r}
      >
        ${this.rarity===`common`?null:u`<span class="purchase-ember purchase-ember-0"></span>
                <span class="purchase-ember purchase-ember-1"></span>
                <span class="purchase-ember purchase-ember-2"></span>
                <span class="purchase-ember purchase-ember-3"></span>
                ${Array.from({length:40},(e,t)=>u`<span
                      class="purchase-burst purchase-burst-${t}"
                    ></span>`)}`}
        <div class="flex flex-col gap-1 w-full">
          ${e?this.renderDollarButton():this.reserveDollar?this.renderReservedLine():null}
          ${t?this.renderHardButton():this.reserveHard?this.renderReservedLine():null}
          ${n?this.renderSoftButton():this.reserveSoft?this.renderReservedLine():null}
        </div>
        ${this.busy?u`<div class="cosmetic-loading-overlay">
                <div class="cosmetic-loading-spinner"></div>
              </div>`:r}
      </div>
      ${this.confirmingPurchase?u`<confirm-dialog
              .heading=${g(`store.confirm_purchase_title`)}
              .message=${g(`store.confirm_purchase_body`,{item:this.confirmingPurchase.itemName,amount:this.confirmingPurchase.amount,currency:g(this.confirmingPurchase.method===`hard`?`cosmetics.hard`:`cosmetics.soft`)})}
              variant="warning"
              @confirm=${()=>{let e=this.confirmingPurchase;this.confirmingPurchase=null,this.executePurchase(e?.handler)}}
              @cancel=${()=>this.confirmingPurchase=null}
            ></confirm-dialog>`:r}
      <insufficient-currency-dialog
        .info=${this.insufficient}
        @close=${()=>this.insufficient=null}
      ></insufficient-currency-dialog>
    `}};c([f({type:Object})],$.prototype,`product`,void 0),c([f({type:String})],$.prototype,`dollarPrice`,void 0),c([f({type:Number})],$.prototype,`priceHard`,void 0),c([f({type:Number})],$.prototype,`priceSoft`,void 0),c([f({type:Number})],$.prototype,`listPriceHard`,void 0),c([f({type:Number})],$.prototype,`listPriceSoft`,void 0),c([f({type:String})],$.prototype,`rarity`,void 0),c([f({type:String})],$.prototype,`dollarLabelKey`,void 0),c([f({type:String})],$.prototype,`priceSuffix`,void 0),c([f({type:String})],$.prototype,`itemName`,void 0),c([f({type:Boolean})],$.prototype,`reserveDollar`,void 0),c([f({type:Boolean})],$.prototype,`reserveHard`,void 0),c([f({type:Boolean})],$.prototype,`reserveSoft`,void 0),c([f({type:Object})],$.prototype,`inlineCheckout`,void 0),c([f({type:Function})],$.prototype,`onPurchaseDollar`,void 0),c([f({type:Function})],$.prototype,`onPurchaseHard`,void 0),c([f({type:Function})],$.prototype,`onPurchaseSoft`,void 0),c([e()],$.prototype,`insufficient`,void 0),c([e()],$.prototype,`confirmingPurchase`,void 0),c([e()],$.prototype,`busy`,void 0),$=c([o(`purchase-button`)],$);function ie(e){let t=new Map;for(let n of e.querySelectorAll(`purchase-button`)){let e=n.closest(`cosmetic-card, custom-currency-card`)??n,r=t.get(e.offsetTop);r?r.push(n):t.set(e.offsetTop,[n])}for(let e of t.values()){let t=e.some(e=>e.offersDollar),n=e.some(e=>e.offersHard),r=e.some(e=>e.offersSoft);for(let i of e)i.reserveDollar=t,i.reserveHard=n,i.reserveSoft=r}}export{te as i,ee as n,ne as r,ie as t};