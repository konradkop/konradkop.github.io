"use strict";(self.webpackChunkkonrad_website=self.webpackChunkkonrad_website||[]).push([[8e3],{8e3:(t,i,c)=>{c.d(i,{clickAttract:()=>r,hoverAttract:()=>u});var e=c(4409);const n=1,a=1,o=0;function s(t,i,c,o,s){const r=t.actualOptions.interactivity.modes.attract;if(!r)return;const u=t.particles.quadTree.query(o,s);for(const l of u){const{dx:t,dy:o,distance:s}=(0,e.vr)(l.position,i),u=r.speed*r.factor,f=(0,e.qE)((0,e.il)(r.easing)(a-s/c)*u,n,r.maxSpeed),p=e.Mi.create(s?t/s*f:u,s?o/s*f:u);l.position.subFrom(p)}}function r(t,i){t.attract||(t.attract={particles:[]});const{attract:c}=t;if(c.finish||(c.count||(c.count=0),c.count++,c.count===t.particles.count&&(c.finish=!0)),c.clicking){const c=t.interactivity.mouse.clickPosition,n=t.retina.attractModeDistance;if(!n||n<o||!c)return;s(t,c,n,new e.jl(c.x,c.y,n),(t=>i(t)))}else!1===c.clicking&&(c.particles=[])}function u(t,i){const c=t.interactivity.mouse.position,n=t.retina.attractModeDistance;!n||n<o||!c||s(t,c,n,new e.jl(c.x,c.y,n),(t=>i(t)))}}}]);
//# sourceMappingURL=8000.0a4cf58b.chunk.js.map