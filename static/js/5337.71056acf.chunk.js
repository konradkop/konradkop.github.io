"use strict";(self.webpackChunkkonrad_website=self.webpackChunkkonrad_website||[]).push([[5337],{5337:(i,n,e)=>{e.d(n,{applyDistance:()=>y,getProximitySpeedFactor:()=>d,initSpin:()=>u,move:()=>p,spin:()=>v});var t=e(4409);const o=.5,a=0,s=1,c=60,l=0,r=.01;function y(i){var n,e;const s=i.initialPosition,{dx:c,dy:l}=(0,t.vr)(s,i.position),r=Math.abs(c),y=Math.abs(l),{maxDistance:p}=i.retina,v=p.horizontal,d=p.vertical;if(!v&&!d)return;const u=null!==(e=d&&y>=d)&&void 0!==e&&e;if(!(null!==(n=v&&r>=v)&&void 0!==n&&n)&&!u||i.misplaced){if((!v||r<v)&&(!d||y<d)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const n=i.position,e=i.velocity;v&&(n.x<s.x&&e.x<a||n.x>s.x&&e.x>a)&&(e.x*=-(0,t.G0)()),d&&(n.y<s.y&&e.y<a||n.y>s.y&&e.y>a)&&(e.y*=-(0,t.G0)())}}else i.misplaced=!!v&&r>v||!!d&&y>d,v&&(i.velocity.x=i.velocity.y*o-i.velocity.x),d&&(i.velocity.y=i.velocity.x*o-i.velocity.y)}async function p(i,n,e,o,l,r){await async function(i,n){var e;const o=i.options,a=o.move.path;if(!a.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=n.value);const c=await(null===(e=i.pathGenerator)||void 0===e?void 0:e.generate(i,n));c&&i.velocity.addTo(c);a.clamp&&(i.velocity.x=(0,t.qE)(i.velocity.x,-s,s),i.velocity.y=(0,t.qE)(i.velocity.y,-s,s));i.lastPathTime-=i.pathDelay}(i,r);const y=i.gravity,p=null!==y&&void 0!==y&&y.enable&&y.inverse?-s:s;l&&e&&(i.velocity.x+=l*r.factor/(c*e)),null!==y&&void 0!==y&&y.enable&&e&&(i.velocity.y+=p*(y.acceleration*r.factor)/(c*e));const v=i.moveDecay;i.velocity.multTo(v);const d=i.velocity.mult(e);null!==y&&void 0!==y&&y.enable&&o>a&&(!y.inverse&&d.y>=a&&d.y>=o||y.inverse&&d.y<=a&&d.y<=-o)&&(d.y=p*o,e&&(i.velocity.y=d.y/e));const u=i.options.zIndex,x=(s-i.zIndexFactor)**u.velocityRate;d.multTo(x);const{position:h}=i;h.addTo(d),n.vibrate&&(h.x+=Math.sin(h.x*Math.cos(h.y)),h.y+=Math.cos(h.y*Math.sin(h.x)))}function v(i,n){const e=i.container;if(!i.spin)return;const t={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*t.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*t.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;const a=Math.max(e.canvas.size.width,e.canvas.size.height),c=a*o;i.spin.radius>c?(i.spin.radius=c,i.spin.acceleration*=-s):i.spin.radius<l&&(i.spin.radius=l,i.spin.acceleration*=-s),i.spin.angle+=n*r*(s-i.spin.radius/a)}function d(i){return i.slow.inRange?i.slow.factor:s}function u(i){var n;const e=i.container,o=i.options.move.spin;if(!o.enable)return;const a=null!==(n=o.position)&&void 0!==n?n:{x:50,y:50},s={x:.01*a.x*e.canvas.size.width,y:.01*a.y*e.canvas.size.height},c=i.getPosition(),l=(0,t.Yf)(c,s),r=(0,t.VG)(o.acceleration);i.retina.spinAcceleration=r*e.retina.pixelRatio;i.spin={center:s,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:l,acceleration:i.retina.spinAcceleration}}}}]);
//# sourceMappingURL=5337.71056acf.chunk.js.map