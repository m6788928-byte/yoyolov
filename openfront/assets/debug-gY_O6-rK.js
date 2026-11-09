import{ao as e,co as t,io as n,lo as r,oo as i,so as a}from"./index-xDRx6PtE.js";import{t as o}from"./gl-DKfDlqGc.js";import{r as s,t as c}from"./RenderSettings-BlwIczCg.js";var l=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},u=class extends l{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function d(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var f={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:d,toHexString:d},p={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},m=[f,p,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=p.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return p.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=p.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return p.toHexString(i)}}];function h(e){return m.find(t=>t.match(e))}var g=class extends l{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=h(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=d(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},_=class extends l{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},v=class extends l{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},y=class extends l{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},b=class extends l{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},x=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function S(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var C=!1,w=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!C&&o&&(S(x),C=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new y(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new v(this,e,t,n,r,i);case`boolean`:return new u(this,e,t);case`string`:return new b(this,e,t);case`function`:return new _(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new g(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof _||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof _)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},T=8;function E(e){return e===`nukeExplosion`?4:T}var D={transportShipTrail:[`gradient`,`transition`],nukeTrail:[`gradient`,`transition`,`spiral`],structures:[`gradient`,`transition`],warship:[`gradient`,`transition`],train:[`gradient`,`transition`],railroad:[`gradient`,`transition`],nukeExplosion:[`shockwave`,`sparkles`,`embers`]};function O(t){return{enabled:!1,type:D[t][0],nukeType:e[0],colorCount:2,colors:[`#ff4dd2`,`#4dd2ff`,`#ffffff`,`#ffb84d`,`#b84dff`,`#4dff88`,`#ff4d4d`,`#ffff4d`],colorSize:4,movementSpeed:10,frequency:1,radius:6,strands:3,rotationSpeed:4,size:210,speed:140,thickness:4,transitionSpeed:0,density:300}}function k(e,t){let n=[`colorCount`,`colors`];return e===`nukeExplosion`?(n.push(`nukeType`,`size`,`speed`,`thickness`,`transitionSpeed`),t!==`shockwave`&&n.push(`density`),new Set(n)):(t===`transition`?n.push(`frequency`):t===`spiral`?n.push(`radius`,`strands`,`rotationSpeed`):n.push(`colorSize`,`movementSpeed`),new Set(n))}function A(e){return t.includes(e)}function j(e,t){let n=t.colors.slice(0,Math.min(Math.max(Math.round(t.colorCount),0),E(e))),o;o=e===`nukeExplosion`?{type:t.type,nukeType:t.nukeType,colors:n,size:t.size,speed:t.speed,thickness:t.thickness,transitionSpeed:t.transitionSpeed,...t.type===`shockwave`?{}:{density:t.density}}:t.type===`transition`?{type:t.type,colors:n,frequency:t.frequency}:t.type===`spiral`?{type:t.type,colors:n,radius:t.radius,strands:t.strands,rotationSpeed:t.rotationSpeed}:{type:t.type,colors:n,colorSize:t.colorSize,movementSpeed:t.movementSpeed};let s=(e===`nukeExplosion`?i:A(e)?r:a).safeParse(o);return s.success?s.data:null}function M(e,t){let n=j(e,t);return n?JSON.stringify({effectType:e,attributes:n},null,2):null}var N={transportShipTrail:`Transport Ship Trail`,nukeTrail:`Nuke Trail`,structures:`Structures`,warship:`Warship`,train:`Train`,railroad:`Railroad`,nukeExplosion:`Nuke Explosion`},P=[[`colorSize`,`Color Size (tiles)`,.5,40,.5],[`movementSpeed`,`Movement (tiles/s)`,-50,50,.5],[`frequency`,`Frequency (colors/s)`,-10,10,.1],[`radius`,`Radius (tiles)`,1,30,.5],[`strands`,`Strands`,1,8,1],[`rotationSpeed`,`Rotation (rad/s)`,-20,20,.1],[`size`,`Size (tiles)`,10,800,5],[`speed`,`Speed (tiles/s)`,5,1e3,5],[`thickness`,`Thickness (tiles)`,.5,40,.5],[`transitionSpeed`,`Transition (colors/s)`,-10,10,.1],[`density`,`Density`,2,2e3,1]];function F(t,r){let i=[];for(let a of n){let n=O(a);i.push({effectType:a,state:n});let o=t.addFolder(N[a]),s=[],c=[],l=()=>{let e=n.enabled?j(a,n):null;n.enabled&&!e&&console.warn(`Effect editor: ${a} attributes are invalid`),r.setOverride(a,e)},u=()=>{let e=k(a,n.type);for(let[t,n]of s)n.show(e.has(t));c.forEach((t,r)=>t.show(e.has(`colors`)&&r<n.colorCount))};o.add(n,`enabled`).name(`Enabled`).onChange(l),o.add(n,`type`,[...D[a]]).name(`Type`).onChange(()=>{u(),l()}),a===`nukeExplosion`&&s.push([`nukeType`,o.add(n,`nukeType`,[...e]).name(`Bomb`).onChange(l)]);let d=new Set;for(let e of D[a])for(let t of k(a,e))d.add(t);for(let[e,t,r,i,a]of P)d.has(e)&&s.push([e,o.add(n,e,r,i,a).name(t).onChange(l)]);s.push([`colorCount`,o.add(n,`colorCount`,0,E(a),1).name(`Colors`).onChange(()=>{u(),l()})]);for(let e=0;e<E(a);e++)c.push(o.addColor(n.colors,String(e)).name(`Color ${e}`).onChange(l));o.add({copy:()=>{let e=M(a,n);e?navigator.clipboard.writeText(e):console.warn(`Effect editor: ${a} is invalid`)}},`copy`).name(`Copy catalog JSON`),u(),o.close()}let a=()=>{for(let{effectType:e,state:t}of i)t.enabled&&(t.enabled=!1,r.setOverride(e,null));t.controllersRecursive().forEach(e=>e.updateDisplay())};return t.add({disableAll:a},`disableAll`).name(`Disable All`),a}function I(e,t,n={}){return{kind:`folder`,label:e,closed:n.closed??!0,children:t}}function L(e,t,n,r,i,a){let o=i[t],s=i[n],c=i[r],l={color:{r:e[t],g:e[n],b:e[r]}},u;return{draw(i){return u=i.addColor(l,`color`).onChange(i=>{e[t]=i.r,e[n]=i.g,e[r]=i.b}),a&&u.name(a),u},isModified:()=>e[t]!==o||e[n]!==s||e[r]!==c,resetToDefault(){e[t]=o,e[n]=s,e[r]=c,l.color={r:o,g:s,b:c},u?.load(`#`+[o,s,c].map(e=>Math.round(e*255).toString(16).padStart(2,`0`)).join(``))},updateDisplay(){l.color={r:e[t],g:e[n],b:e[r]},u?.updateDisplay()}}}function R(e,t,n,r,i,a,o){let s=n[t],c;return{draw(n){return c=n.add(e,t,r,i,a),o&&c.name(o),c},isModified:()=>e[t]!==s,resetToDefault(){e[t]=s,c?.updateDisplay()},updateDisplay(){c?.updateDisplay()}}}function z(e,t,n,r){let i=n[t],a;return{draw(n){return a=n.add(e,t),r&&a.name(r),a},isModified:()=>e[t]!==i,resetToDefault(){e[t]=i,a?.updateDisplay()},updateDisplay(){a?.updateDisplay()}}}function B(e,t){return[I(`Pass Enables`,[z(e.passEnabled,`terrain`,t.passEnabled),z(e.passEnabled,`territory`,t.passEnabled),z(e.passEnabled,`borderCompute`,t.passEnabled),z(e.passEnabled,`borderStamp`,t.passEnabled),z(e.passEnabled,`trail`,t.passEnabled),z(e.passEnabled,`structure`,t.passEnabled),z(e.passEnabled,`unit`,t.passEnabled),z(e.passEnabled,`name`,t.passEnabled),z(e.passEnabled,`falloutBloom`,t.passEnabled),z(e.passEnabled,`railroad`,t.passEnabled),z(e.passEnabled,`fx`,t.passEnabled),z(e.passEnabled,`bar`,t.passEnabled),z(e.passEnabled,`nameDebug`,t.passEnabled,`Name Debug Boxes`)]),I(`Fallout Bloom`,[R(e.falloutBloom,`broilSpeedCold`,t.falloutBloom,0,.05,1e-4),R(e.falloutBloom,`broilSpeedHot`,t.falloutBloom,0,.05,1e-4),R(e.falloutBloom,`noiseFreq1`,t.falloutBloom,0,.5,.001),R(e.falloutBloom,`noiseFreq2`,t.falloutBloom,0,.5,.001),R(e.falloutBloom,`contrastLoCold`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`contrastLoHot`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`contrastHiCold`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`contrastHiHot`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`metaFreq`,t.falloutBloom,0,.2,.001),R(e.falloutBloom,`intensityCold`,t.falloutBloom,0,10,.05),R(e.falloutBloom,`intensityHot`,t.falloutBloom,0,20,.1),R(e.falloutBloom,`metaInfluenceCold`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`metaInfluenceHot`,t.falloutBloom,0,1,.01),R(e.falloutBloom,`opacityFadeEnd`,t.falloutBloom,0,1,.01),L(e.falloutBloom,`bloomR`,`bloomG`,`bloomB`,t.falloutBloom,`Bloom Color`),R(e.falloutBloom,`bloomCoverage`,t.falloutBloom,0,10,.1),R(e.falloutBloom,`heatDecayPerTick`,t.falloutBloom,0,5,.01),L(e.falloutBloom,`particleColorDarkR`,`particleColorDarkG`,`particleColorDarkB`,t.falloutBloom,`Particle Color Dark`),L(e.falloutBloom,`particleColorBrightR`,`particleColorBrightG`,`particleColorBrightB`,t.falloutBloom,`Particle Color Bright`),R(e.falloutBloom,`particleThresholdUnowned`,t.falloutBloom,.5,1,.005),R(e.falloutBloom,`particleThresholdOwned`,t.falloutBloom,.5,1,.005),R(e.falloutBloom,`particleFlickerSpeed`,t.falloutBloom,0,2,.01),R(e.falloutBloom,`particleStrength`,t.falloutBloom,0,5,.01),R(e.falloutBloom,`particleFreshScale`,t.falloutBloom,0,1,.01)]),I(`Lighting`,[z(e.lighting,`enabled`,t.lighting),R(e.lighting,`ambient`,t.lighting,0,1,.01),R(e.lighting,`falloffPower`,t.lighting,.5,5,.1),R(e.lighting,`falloutLightIntensity`,t.lighting,0,20,.1),R(e.lighting,`falloutLightThreshold`,t.lighting,0,.5,.001),R(e.lighting,`blurZoomDivisor`,t.lighting,1,20,.5),R(e.lighting,`lightRadiusMultiplier`,t.lighting,.1,5,.1),L(e.lighting,`falloutLightR`,`falloutLightG`,`falloutLightB`,t.lighting,`Fallout Light Color`),R(e.lighting,`emberLightIntensity`,t.lighting,0,20,.1),L(e.lighting,`emberLightR`,`emberLightG`,`emberLightB`,t.lighting,`Ember Light Color`)]),I(`Map Overlay`,[R(e.mapOverlay,`trailAlpha`,t.mapOverlay,0,1,.01),R(e.mapOverlay,`defenseCheckerDarken`,t.mapOverlay,0,1,.01),R(e.mapOverlay,`territoryDefenseDarken`,t.mapOverlay,0,1,.01),R(e.mapOverlay,`territorySaturation`,t.mapOverlay,0,1,.01,`Territory Saturation`),R(e.mapOverlay,`territoryAlpha`,t.mapOverlay,0,1,.01,`Territory Alpha`),R(e.mapOverlay,`staleNukeBase`,t.mapOverlay,0,.3,.005),R(e.mapOverlay,`staleNukeVariation`,t.mapOverlay,0,.3,.005),R(e.mapOverlay,`staleNukeAlpha`,t.mapOverlay,0,1,.01),L(e.mapOverlay,`staleNukeR`,`staleNukeG`,`staleNukeB`,t.mapOverlay,`Stale Nuke Color`),R(e.mapOverlay,`highlightBrighten`,t.mapOverlay,0,1,.01,`Highlight Brighten (border)`),R(e.mapOverlay,`highlightFillBrighten`,t.mapOverlay,0,1,.01,`Highlight Brighten (fill)`),R(e.mapOverlay,`highlightThicken`,t.mapOverlay,0,10,1,`Highlight Thicken (tiles)`),I(`Railroad`,[R(e.railroad,`railMinZoom`,t.railroad,0,10,.1,`Min Zoom`),R(e.railroad,`railFadeRange`,t.railroad,0,5,.1,`Fade Range`),R(e.railroad,`railDetailZoom`,t.railroad,0,20,.1,`Detail Zoom`),R(e.railroad,`railAlpha`,t.railroad,0,1,.01,`Alpha`),R(e.railroad,`railThickness`,t.railroad,.5,3,.1,`Thickness`)])]),I(`Structure`,[R(e.structure,`iconSize`,t.structure,10,100,1),R(e.structure,`dotsZoomThreshold`,t.structure,.1,2,.05),R(e.structure,`iconScaleFactorZoomedOut`,t.structure,.5,3,.05),R(e.structure,`highlightOutlineWidth`,t.structure,0,.2,.005,`Highlight Outline W`),R(e.structure,`highlightDimAlpha`,t.structure,0,1,.01,`Highlight Dim Alpha`),I(`Per-Shape`,Object.entries(e.structure.shapes).map(([e,n])=>I(e,[R(n,`scale`,t.structure.shapes[e],.5,2,.05,`Frame Scale`),R(n,`iconFill`,t.structure.shapes[e],.2,1.5,.05,`Icon Fill`)])))]),I(`Structure Level`,[R(e.structureLevel,`scale`,t.structureLevel,.5,3,.05,`Scale`),R(e.structureLevel,`outlineWidth`,t.structureLevel,0,20,.1,`Outline Width (px)`),R(e.structureLevel,`offsetY`,t.structureLevel,-2,2,.05,`Height Above Icon`)]),I(`Bar`,[R(e.bar,`healthBarW`,t.bar,3,30,1,`Health Width`),R(e.bar,`healthBarH`,t.bar,1,10,1,`Health Height`),R(e.bar,`healthBarOffsetY`,t.bar,-20,0,1,`Health Offset Y`),R(e.bar,`progressBarW`,t.bar,3,30,1,`Progress Width`),R(e.bar,`progressBarH`,t.bar,1,10,1,`Progress Height`),R(e.bar,`progressBarOffsetY`,t.bar,0,20,1,`Progress Offset Y`),R(e.bar,`borderWidth`,t.bar,0,3,.5,`Border Width`),R(e.bar,`threshold1`,t.bar,0,1,.05,`Red→Orange`),R(e.bar,`threshold2`,t.bar,0,1,.05,`Orange→Yellow`),R(e.bar,`threshold3`,t.bar,0,1,.05,`Yellow→Green`),L(e.bar,`colorRedR`,`colorRedG`,`colorRedB`,t.bar,`Red`),L(e.bar,`colorOrangeR`,`colorOrangeG`,`colorOrangeB`,t.bar,`Orange`),L(e.bar,`colorYellowR`,`colorYellowG`,`colorYellowB`,t.bar,`Yellow`),L(e.bar,`colorGreenR`,`colorGreenG`,`colorGreenB`,t.bar,`Green`)]),I(`Unit`,[R(e.unit,`unitSize`,t.unit,4,64,1),R(e.unit,`flickerSpeed`,t.unit,0,2,.01),L(e.unit,`angryR`,`angryG`,`angryB`,t.unit,`Angry Color`)]),I(`Name`,[R(e.name,`lerpSpeed`,t.name,1,30,.5),R(e.name,`cullThreshold`,t.name,0,.05,.001),R(e.name,`nameScaleFactor`,t.name,.1,1,.05),R(e.name,`nameScaleCap`,t.name,1,10,.5),R(e.name,`troopSizeMultiplier`,t.name,.1,2,.05),R(e.name,`outlineWidth`,t.name,0,10,.1,`Outline Width (px)`),L(e.name,`outlineR`,`outlineG`,`outlineB`,t.name,`Outline Color`),z(e.name,`outlineUsePlayerColor`,t.name,`Outline = Player Color`),z(e.name,`fillUsePlayerColor`,t.name,`Fill = Player Color`),R(e.name,`emojiRowOffset`,t.name,0,5,.1,`Emoji Row Offset`),R(e.name,`statusRowOffset`,t.name,0,5,.1,`Status Row Offset`),R(e.name,`statusOutlineWidth`,t.name,0,16,.5,`Status Outline Width`),R(e.name,`hoverFadeAlpha`,t.name,0,1,.05,`Hover Fade Alpha`),R(e.name,`hoverGlowWidth`,t.name,0,8,.25,`Hover Glow Width`),R(e.name,`hoverGlowAlpha`,t.name,0,1,.05,`Hover Glow Alpha`)]),I(`FX`,[R(e.fx,`shockwaveRingWidth`,t.fx,.01,.2,.005),R(e.fx,`attackRingScreenPx`,t.fx,5,60,1,`Attack Ring Size (px)`),R(e.fx,`nukeShockwaveDurationMs`,t.fx,200,5e3,100,`Nuke Shock Duration`),R(e.fx,`nukeShockwaveRadiusFactor`,t.fx,.5,3,.1,`Nuke Shock Radius ×`),R(e.fx,`samShockwaveDurationMs`,t.fx,200,3e3,50,`SAM Shock Duration`),R(e.fx,`samShockwaveRadius`,t.fx,10,100,5,`SAM Shock Radius`),R(e.fx,`debrisLifetimeMs`,t.fx,1e3,15e3,500,`Debris Lifetime`),R(e.fx,`debrisFadeIn`,t.fx,0,.5,.01,`Debris Fade In`),R(e.fx,`debrisFadeOut`,t.fx,.3,1,.01,`Debris Fade Out`),R(e.fx,`conquestLifetimeMs`,t.fx,500,8e3,250,`Conquest Lifetime`),R(e.fx,`conquestFadeIn`,t.fx,0,.5,.01,`Conquest Fade In`),R(e.fx,`conquestFadeOut`,t.fx,.3,1,.01,`Conquest Fade Out`),R(e.fx,`nukeRadiusAtom`,t.fx,10,400,5,`Atom Bomb Radius`),R(e.fx,`nukeRadiusHydro`,t.fx,10,400,5,`Hydrogen Bomb Radius`),R(e.fx,`nukeRadiusMirv`,t.fx,10,400,5,`MIRV Warhead Radius`),R(e.fx,`debrisDensity`,t.fx,0,4,.1,`Debris Density ×`)]),I(`Nuke Trajectory`,[R(e.nukeTrajectory,`lineWidth`,t.nukeTrajectory,.5,5,.25,`Line Width (px)`),R(e.nukeTrajectory,`outlineWidth`,t.nukeTrajectory,0,4,.25,`Outline Width (px)`),R(e.nukeTrajectory,`dashTargetable`,t.nukeTrajectory,1,30,1,`Dash (targetable)`),R(e.nukeTrajectory,`gapTargetable`,t.nukeTrajectory,1,20,1,`Gap (targetable)`),R(e.nukeTrajectory,`dashUntargetable`,t.nukeTrajectory,1,20,1,`Dash (untargetable)`),R(e.nukeTrajectory,`gapUntargetable`,t.nukeTrajectory,1,20,1,`Gap (untargetable)`),L(e.nukeTrajectory,`lineR`,`lineG`,`lineB`,t.nukeTrajectory,`Line Color`),L(e.nukeTrajectory,`interceptR`,`interceptG`,`interceptB`,t.nukeTrajectory,`Intercept Color`),L(e.nukeTrajectory,`outlineR`,`outlineG`,`outlineB`,t.nukeTrajectory,`Outline Color`),L(e.nukeTrajectory,`interceptOutlineR`,`interceptOutlineG`,`interceptOutlineB`,t.nukeTrajectory,`Intercept Outline`),R(e.nukeTrajectory,`markerCircleRadius`,t.nukeTrajectory,2,16,1,`Circle Marker (px)`),R(e.nukeTrajectory,`markerXRadius`,t.nukeTrajectory,2,64,1,`X Marker (px)`)]),I(`Nuke Telegraph`,[R(e.nukeTelegraph,`strokeWidth`,t.nukeTelegraph,.5,5,.25,`Stroke Width`),R(e.nukeTelegraph,`dashLen`,t.nukeTelegraph,2,30,1,`Dash Length`),R(e.nukeTelegraph,`gapLen`,t.nukeTelegraph,1,20,1,`Gap Length`),R(e.nukeTelegraph,`rotationSpeed`,t.nukeTelegraph,0,60,1,`Rotation Speed`),R(e.nukeTelegraph,`baseAlpha`,t.nukeTelegraph,0,1,.05,`Base Alpha`),R(e.nukeTelegraph,`pulseAmplitude`,t.nukeTelegraph,0,.5,.01,`Pulse Amplitude`),R(e.nukeTelegraph,`pulseSpeed`,t.nukeTelegraph,0,10,.5,`Pulse Speed`),R(e.nukeTelegraph,`fillAlphaOffset`,t.nukeTelegraph,0,1,.05,`Fill Alpha Offset`),L(e.nukeTelegraph,`colorR`,`colorG`,`colorB`,t.nukeTelegraph,`Color`)]),I(`Move Indicator`,[R(e.moveIndicator,`startRadius`,t.moveIndicator,1,40,1,`Start Radius (px)`),R(e.moveIndicator,`chevronSize`,t.moveIndicator,1,20,.5,`Chevron Size (px)`),R(e.moveIndicator,`lineWidth`,t.moveIndicator,.5,6,.25,`Line Width (px)`),R(e.moveIndicator,`duration`,t.moveIndicator,100,3e3,50,`Duration (ms)`),R(e.moveIndicator,`converge`,t.moveIndicator,0,1,.05,`Converge`)]),I(`SAM Radius`,[R(e.samRadius,`strokeWidth`,t.samRadius,.5,5,.1,`Stroke Width`),R(e.samRadius,`dashLen`,t.samRadius,2,30,1,`Dash Length`),R(e.samRadius,`gapLen`,t.samRadius,1,20,1,`Gap Length`),R(e.samRadius,`rotationSpeed`,t.samRadius,0,40,1,`Rotation Speed`),R(e.samRadius,`alpha`,t.samRadius,0,1,.05,`Alpha`),R(e.samRadius,`outlineWidth`,t.samRadius,0,2,.05,`Outline Width`),R(e.samRadius,`outlineSoftness`,t.samRadius,0,1,.05,`Outline Softness`)]),I(`Bonus Popup`,[R(e.bonusPopup,`scale`,t.bonusPopup,1,12,.5,`Scale`),R(e.bonusPopup,`lifetimeMs`,t.bonusPopup,500,5e3,100,`Lifetime (ms)`),R(e.bonusPopup,`riseSpeed`,t.bonusPopup,0,10,.5,`Rise Speed`),R(e.bonusPopup,`yOffset`,t.bonusPopup,-10,10,.5,`Y Offset`),R(e.bonusPopup,`outlineWidth`,t.bonusPopup,0,5,.1,`Outline Width`),L(e.bonusPopup,`colorR`,`colorG`,`colorB`,t.bonusPopup,`Color`),R(e.bonusPopup,`minScreenScale`,t.bonusPopup,0,1,.01,`Min Screen Scale`),R(e.bonusPopup,`cullZoom`,t.bonusPopup,0,2,.05,`Cull Zoom`)]),I(`Spawn Overlay`,[R(e.spawnOverlay,`highlightRadius`,t.spawnOverlay,1,20,1,`Highlight Radius`),R(e.spawnOverlay,`highlightAlpha`,t.spawnOverlay,0,1,.05,`Highlight Alpha`),R(e.spawnOverlay,`selfMinRad`,t.spawnOverlay,1,30,.5,`Self Min Radius`),R(e.spawnOverlay,`selfMaxRad`,t.spawnOverlay,5,50,.5,`Self Max Radius`),R(e.spawnOverlay,`mateMinRad`,t.spawnOverlay,1,20,.5,`Mate Min Radius`),R(e.spawnOverlay,`mateMaxRad`,t.spawnOverlay,5,30,.5,`Mate Max Radius`),R(e.spawnOverlay,`animSpeed`,t.spawnOverlay,.001,.02,.001,`Anim Speed`),R(e.spawnOverlay,`gradientInnerEdge`,t.spawnOverlay,.001,.1,.001,`Gradient Inner Edge`),R(e.spawnOverlay,`gradientSolidEnd`,t.spawnOverlay,.01,.5,.01,`Gradient Solid End`)]),I(`Alt View`,[R(e.altView,`gridFontSize`,t.altView,6,32,1,`Grid Font Size`),z(e.altView,`recolorStructures`,t.altView,`Recolor Structures`),R(e.altView,`fillAlpha`,t.altView,0,1,.01,`Fill Alpha`)]),I(`Light Configs`,Object.entries(e.lightConfigs).map(([e,n])=>I(e,[R(n,`radius`,t.lightConfigs[e],1,60,1),R(n,`intensity`,t.lightConfigs[e],0,10,.1)])))]}function V(e,t){let n=[];for(let r of e)if(H(r)){let e=t.addFolder(r.label);n.push(...V(r.children,e)),r.closed&&e.close()}else r.draw(t),n.push(r);return n}function H(e){return e.kind===`folder`}function U(e){let t=e.domElement.querySelector(`.title, .lil-title`);if(!t)return;t.style.cursor=`grab`;let n=!1,r=!1,i=0,a=0,o=0,s=0;t.addEventListener(`mousedown`,c=>{n=!0,r=!1,t.style.cursor=`grabbing`;let l=e.domElement.getBoundingClientRect();i=c.clientX,a=c.clientY,o=l.left,s=l.top,e.domElement.style.left=l.left+`px`,e.domElement.style.right=`auto`,c.preventDefault()}),window.addEventListener(`mousemove`,t=>{n&&(r=!0,e.domElement.style.left=o+t.clientX-i+`px`,e.domElement.style.top=s+t.clientY-a+`px`)}),window.addEventListener(`mouseup`,()=>{n&&(n=!1,t.style.cursor=`grab`)}),t.addEventListener(`click`,e=>{r&&e.stopPropagation()},{capture:!0})}function W(e,t,n,r,i){e.add({dump:()=>s(t)},`dump`).name(`Download JSON`);let a=document.createElement(`input`);a.type=`file`,a.accept=`.json`,a.style.display=`none`,document.body.appendChild(a),a.addEventListener(`change`,()=>{let e=a.files?.[0];if(!e)return;let r=new FileReader;r.onload=()=>{try{o(t,JSON.parse(r.result)),n.forEach(e=>e.updateDisplay()),i?.()}catch(e){console.error(`Failed to load render settings:`,e)}},r.readAsText(e),a.value=``}),e.add({load:()=>a.click()},`load`).name(`Load JSON`),e.add({reset:()=>{o(t,r()),n.forEach(e=>e.resetToDefault()),i?.()}},`reset`).name(`Reset to Defaults`)}var G=`lil-modified`,K=!1;function q(){if(K)return;K=!0;let e=document.createElement(`style`);e.textContent=`
    .${G} .lil-name { color: #5ba8d6; }
    .lil-reset-menu {
      position: fixed;
      z-index: 10000;
      background: #1a1a2e;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 4px 0;
      font: 12px sans-serif;
      color: #ccc;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }
    .lil-reset-menu div {
      padding: 4px 16px;
      cursor: pointer;
      white-space: nowrap;
    }
    .lil-reset-menu div:hover {
      background: #2a2a4e;
      color: #fff;
    }
  `,document.head.appendChild(e)}function J(){let e=document.createElement(`div`);return e.className=`lil-reset-menu`,e.style.display=`none`,document.body.appendChild(e),document.addEventListener(`mousedown`,t=>{e.contains(t.target)||(e.style.display=`none`)}),e}function Y(e,t,n){q();let r=J(),i=e.controllersRecursive();i.filter(e=>!(e instanceof _)).forEach((e,i)=>{let a=t[i],o=()=>e.domElement.classList.toggle(G,a.isModified());o();let s=e._onChange;e.onChange(function(...t){s?.apply(e,t),o()}),e.$name.addEventListener(`contextmenu`,e=>{if(!a.isModified())return;e.preventDefault(),e.stopPropagation(),r.innerHTML=``;let t=document.createElement(`div`);t.textContent=`Reset to default`,t.addEventListener(`mousedown`,e=>{e.stopPropagation(),a.resetToDefault(),o(),n?.(),r.style.display=`none`}),r.appendChild(t),r.style.left=e.clientX+`px`,r.style.top=e.clientY+`px`,r.style.display=``})}),n&&i.forEach(e=>e.onFinishChange(n))}function X(e,t,n=c,r){let i=new w({title:`Render Debug GUI`,width:320});i.domElement.style.position=`fixed`,i.domElement.style.top=`8px`,i.domElement.style.right=`8px`,i.domElement.style.zIndex=`100`,U(i);let a=i.addFolder(`Effect Editor`),o=F(a,t);a.close();let s=i.addFolder(`Render Settings`),l=V(B(e,n()),s);return W(s,e,l,n,r),Y(s,l,r),s.close(),i.close(),{open:()=>i.open(),destroy:()=>{o(),i.destroy()}}}export{X as createDebugGui};