"use strict";(self.webpackChunkkonrad_website=self.webpackChunkkonrad_website||[]).push([[7688],{7688:(t,e,s)=>{s.d(e,{OutOfCanvasUpdater:()=>a});const o=(t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e;class a{constructor(t){this._updateOutMode=async(t,e,s,o)=>{for(const a of this.updaters)await a.update(t,o,e,s)},this.container=t,this.updaters=[]}async init(t){this.updaters=[];const e=t.options.move.outModes;if(o(e,"bounce")){const{BounceOutMode:t}=await s.e(5411).then(s.bind(s,5411));this.updaters.push(new t(this.container))}else if(o(e,"out")){const{OutOutMode:t}=await s.e(7885).then(s.bind(s,7885));this.updaters.push(new t(this.container))}else if(o(e,"destroy")){const{DestroyOutMode:t}=await s.e(683).then(s.bind(s,683));this.updaters.push(new t(this.container))}else if(o(e,"none")){const{NoneOutMode:t}=await s.e(1313).then(s.bind(s,1313));this.updaters.push(new t(this.container))}}isEnabled(t){return!t.destroyed&&!t.spawning}async update(t,e){var s,o,a,i;const n=t.options.move.outModes;await this._updateOutMode(t,e,null!==(s=n.bottom)&&void 0!==s?s:n.default,"bottom"),await this._updateOutMode(t,e,null!==(o=n.left)&&void 0!==o?o:n.default,"left"),await this._updateOutMode(t,e,null!==(a=n.right)&&void 0!==a?a:n.default,"right"),await this._updateOutMode(t,e,null!==(i=n.top)&&void 0!==i?i:n.default,"top")}}}}]);
//# sourceMappingURL=7688.81291ec4.chunk.js.map