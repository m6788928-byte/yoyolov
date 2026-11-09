import{Mi as e,Ni as t,Oi as n,Ri as r,ji as i,va as a}from"./index-xDRx6PtE.js";import"./CapIcon-BSh7ps9d.js";import"./PlutoniumIcon-DwFXc8EK.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends t{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=o(this.hard),t=o(this.soft);if(e===null&&t===null)return r``;let n=this.compact,i=n?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=n?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=n?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return r`
      <div class="${i}">
        ${e===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${a(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${n?12:16}></plutonium-icon>
                <span class="${s}">${e}</span>
              </div>`}
        ${t===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${a(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${n?14:20}
                  style=${n?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${t}</span>
              </div>`}
      </div>
    `}};n([i({attribute:!1})],s.prototype,`hard`,void 0),n([i({attribute:!1})],s.prototype,`soft`,void 0),n([i({type:Boolean})],s.prototype,`compact`,void 0),s=n([e(`currency-display`)],s);export{o as t};