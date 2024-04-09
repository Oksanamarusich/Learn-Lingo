"use strict";(self.webpackChunklearnlingo=self.webpackChunklearnlingo||[]).push([[440],{8440:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,o,i,a,l,s,c,u=r(5861),p=r(9439),h=r(4687),f=r.n(h),d=r(2685),x=r(2791),m=r(168),g=r(2683),v=g.zo.button(t||(t=(0,m.Z)(["\n  margin-top: 64px;\n  border-radius: 12px;\n  padding: 16px 48px;\n  width: 183px;\n  height: 60px;\n  background-color: ",";\n  font-family: var(--family);\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.55556;\n  color: ",";\n  white-space: nowrap;\n  transition: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonBgColor}),(function(n){return n.theme.colors.primaryTxtColor}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.hover})),w=r(184),b=function(n){var e=n.handleLoadMore;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(v,{type:"button",onClick:e,children:"Load more"})})},j=r(999),y=r(4226),k=r(5218),Z=r(4420),z=r(4297),C=r(4330),N=r(3553),_=function(n){return n.filters.filters},A=(0,N.P1)([function(n){return n.teachers.teachers},_],(function(n,e){if(!e)return n;var r=e.languages,t=e.levels,o=e.price_per_hour;return n.filter((function(n){var e=!r||n.languages.includes(r),i=!t||n.levels.includes(t),a=!o||parseInt(n.price_per_hour)<=parseInt(o);return e&&i&&a}))})),S=r(9662),E=r(3433),U=r(5705),L=r(686),M=g.zo.section(o||(o=(0,m.Z)(["\n  padding: 10px 20px;\n  width: 100%;\n  @media only screen and (min-width: 1440px) {\n  padding: 64px 128px 32px 128px;\n  }\n"]))),P=(0,g.zo)(U.l0)(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media only screen and (min-width: 1440px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"]))),T=g.zo.label(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  font-family: var(--family);\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.28571;\n  color: ",";\n"])),(function(n){return n.theme.colors.subtitle})),I=g.zo.select(l||(l=(0,m.Z)(["\n  width: 300px;\n  border-radius: 14px;\n  padding: 14px 13px 14px 18px;\n  height: 48px;\n  outline: transparent;\n  border: 1px solid transparent;\n  background: ",";\n  font-family: var(--family);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.11111;\n  color: ",";\n  @media only screen and (min-width: 1440px) {\n    width: auto;\n  }\n"])),(function(n){return n.theme.colors.primaryBgColor}),(function(n){return n.theme.colors.primaryTxtColor})),O=g.zo.option(s||(s=(0,m.Z)(["\n  width: 300px;\n  border-radius: 14px;\n  font-family: var(--family);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.11111;\n  color: ",";\n  @media only screen and (min-width: 1440px) {\n    width: auto;\n  }\n"])),(function(n){return n.theme.colors.primaryTxtColor})),B=g.zo.button(c||(c=(0,m.Z)(["\n  border-radius: 12px;\n  padding: 16px 48px;\n  width: 300px;\n  height: 60px;\n  background-color: ",";\n  font-family: var(--family);\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.55556;\n  color: ",";\n  white-space: nowrap;\n  transition: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n  @media only screen and (min-width: 1440px) {\n    width: auto;\n  }\n"])),(function(n){return n.theme.colors.buttonBgColor}),(function(n){return n.theme.colors.primaryTxtColor}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.hover})),H=function(){var n=(0,x.useState)([]),e=(0,p.Z)(n,2),r=e[0],t=e[1],o=(0,Z.I0)(),i=r.flatMap((function(n){return n.languages})),a=(0,E.Z)(new Set(i)),l=r.flatMap((function(n){return n.levels})),s=(0,E.Z)(new Set(l)),c=r.map((function(n){return n.price_per_hour})).filter((function(n,e,r){return r.indexOf(n)===e})).sort((function(n,e){return n-e}));return(0,x.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(){var e,r,o;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,d.iH)((0,d.N8)()),n.prev=1,n.next=4,(0,d.U2)((0,d.iU)(e,"/"));case 4:(r=n.sent).exists()?(o=r.val(),t(o.teachers)):k.Am.error("No data available"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),k.Am.error("Error loading data");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,w.jsx)(M,{children:(0,w.jsx)(U.J9,{initialValues:{languages:"",levels:"",prise_per_hour:""},onSubmit:function(n,e){o((0,L.M)(n)),e.resetForm()},children:(0,w.jsxs)(P,{children:[(0,w.jsxs)(T,{children:["Languages",(0,w.jsxs)(U.gN,{name:"languages",as:I,children:[(0,w.jsx)(O,{children:"All"}),a.map((function(n,e){return(0,w.jsx)(O,{value:n,children:n},e)}))]})]}),(0,w.jsxs)(T,{children:["Level of knowledge",(0,w.jsxs)(U.gN,{name:"levels",as:I,children:[(0,w.jsx)("option",{children:"All"}),s.map((function(n,e){return(0,w.jsx)(O,{value:n,children:n},e)}))]})]}),(0,w.jsxs)(T,{children:["Prise",(0,w.jsxs)(U.gN,{name:"prise_per_hour",as:I,children:[(0,w.jsx)("option",{children:"All"}),c.map((function(n,e){return(0,w.jsxs)(O,{value:n,children:[n," $"]},e)}))]})]}),(0,w.jsx)(B,{type:"submit",children:"Search"})]})})})};function F(){var n=(0,Z.v9)(A),e=(0,Z.v9)(_),r=(0,x.useState)(!1),t=(0,p.Z)(r,2),o=t[0],i=t[1],a=(0,x.useState)(1),l=(0,p.Z)(a,2),s=l[0],c=l[1],h=(0,Z.I0)();return(0,x.useEffect)((function(){if(!e){var n=function(){var n=(0,u.Z)(f().mark((function n(){var e,r,t,o,a,l;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),e=(0,d.iH)((0,d.N8)()),t=(r=4*(s-1))+4,n.prev=4,n.next=7,(0,d.U2)((0,d.iU)(e,"/"),(0,d.Kk)(t));case 7:o=n.sent,i(!1),o.exists()?(a=o.val(),l=Object.values(a.teachers).slice(r,t),h((0,z.O)(l))):k.Am.error("No data available"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(4),console.error(n.t0),k.Am.error("Error loading data");case 16:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(){return n.apply(this,arguments)}}();n()}}),[s,h,e]),(0,x.useEffect)((function(){if(e){var n=function(){var n=(0,u.Z)(f().mark((function n(){var e,r,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,d.iH)((0,d.N8)()),n.prev=1,n.next=4,(0,d.U2)((0,d.iU)(e,"/"));case 4:(r=n.sent).exists()?(t=r.val(),h((0,z.O)(t.teachers))):k.Am.error("No data available"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),k.Am.error("Error loading data");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[e,h]),(0,w.jsxs)(y.PQ,{children:[!o&&(0,w.jsx)(H,{}),(0,w.jsxs)(y.PP,{children:[!o&&!n.length&&(0,w.jsx)(y.xv,{children:"No teachers were found for your request"}),o?(0,w.jsx)(S.a,{}):(0,w.jsx)(j.m,{data:n}),!o&&n.length<=29&&n.length>=4&&(0,w.jsx)(b,{handleLoadMore:function(){c((function(n){return n+1}))}})]}),!o&&(0,w.jsx)(y.Gn,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,w.jsx)(C.Vmf,{size:"30px"})})]})}}}]);
//# sourceMappingURL=440.6c59196d.chunk.js.map