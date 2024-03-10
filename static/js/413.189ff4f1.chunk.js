"use strict";(self.webpackChunkreact_project_learn_lingo=self.webpackChunkreact_project_learn_lingo||[]).push([[413],{9013:function(n,e,l){l.r(e),l.d(e,{default:function(){return B}});var r=l(9439),i=l(1413),a=l(5705),t=l(168),o=l(2683),s=l(1607),c=l(2791);var u,d,p,h,x=l.p+"static/media/chevron-down.24cd320d509ea2ebbeb4265f8030bafb.svg",g=(0,o.ZP)(a.l0)(u||(u=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n  margin-bottom: ",";\n"])),s.r.spacing(10),s.r.spacing(16)),v=o.ZP.label(d||(d=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.29;\n  color: ",";\n"])),s.r.spacing(4),s.r.colors.secondaryText),f=(0,o.ZP)(a.gN)(p||(p=(0,t.Z)(["\n  padding: 14px 18px;\n  border-radius: 14px;\n  outline: none;\n  border: none;\n  appearance: none;\n  overflow: hidden;\n  background: right 14px center no-repeat url(","), ",";\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n  cursor: pointer;\n\n  &.language {\n    width: 221px;\n  }\n  &.level {\n    width: 246px;\n  }\n  &.price {\n    width: 124px;\n  }\n\n  option {\n    color: ",";\n  }\n"])),x,s.r.colors.bg,s.r.colors.secondaryText),j=o.ZP.button(h||(h=(0,t.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 16px 28px;\n  color: ",";\n  background: transparent;\n  border: 2px solid rgba(18, 20, 23, 0.2);\n  border-radius: 12px;\n  height: 28px;\n  margin-top: 34px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.11;\n  transition: border ",", color ",";\n  &:hover {\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),s.r.colors.primary,s.r.transition,s.r.transition,s.r.colors.accent,s.r.colors.accent),m=l(4420),b=l(6895),Z=l(184),C=function(){var n=(0,m.I0)(),e=(0,c.useState)({language:"all",level:"all",price:"all"}),l=(0,r.Z)(e,2),t=l[0],o=l[1];(0,c.useEffect)((function(){n((0,b.T)(t))}),[t,n]);var s=function(n){o((function(e){return(0,i.Z)((0,i.Z)({},e),{},{language:n.target.value})}))},u=function(n){o((function(e){return(0,i.Z)((0,i.Z)({},e),{},{level:n.target.value})}))},d=function(n){o((function(e){return(0,i.Z)((0,i.Z)({},e),{},{price:n.target.value})}))},p=function(){o({language:"all",level:"all",price:"all"})};return(0,Z.jsx)(a.J9,{initialValues:t,children:function(){return(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(v,{children:["Languages",(0,Z.jsxs)(f,{className:"language",name:"language",as:"select",onChange:s,value:t.language,children:[(0,Z.jsx)("option",{value:"all",children:"All"}),(0,Z.jsx)("option",{value:"English",children:"English"}),(0,Z.jsx)("option",{value:"Spanish",children:"Spanish"}),(0,Z.jsx)("option",{value:"French",children:"French"}),(0,Z.jsx)("option",{value:"German",children:"German"}),(0,Z.jsx)("option",{value:"Italian",children:"Italian"}),(0,Z.jsx)("option",{value:"Mandarin Chinese",children:"Chinese"}),(0,Z.jsx)("option",{value:"Vietnamese",children:"Vietnamese"})]})]}),(0,Z.jsxs)(v,{children:["Level of knowledge",(0,Z.jsxs)(f,{className:"level",name:"level",as:"select",onChange:u,value:t.level,children:[(0,Z.jsx)("option",{value:"all",children:"All"}),(0,Z.jsx)("option",{value:"A1 Beginner",children:"A1 Beginner"}),(0,Z.jsx)("option",{value:"A2 Elementary",children:"A2 Elementary"}),(0,Z.jsx)("option",{value:"B1 Intermediate",children:"B1 Intermediate"}),(0,Z.jsx)("option",{value:"B2 Upper-Intermediate",children:"B2 Upper-Intermediate"}),(0,Z.jsx)("option",{value:"C1 Advanced",children:"C1 Advanced"}),(0,Z.jsx)("option",{value:"C2 Proficient",children:"C2 Proficient"})]})]}),(0,Z.jsxs)(v,{children:["Price",(0,Z.jsxs)(f,{className:"price",name:"price",as:"select",onChange:d,value:t.price,children:[(0,Z.jsx)("option",{value:"all",children:"All"}),(0,Z.jsx)("option",{value:"25",children:"25$"}),(0,Z.jsx)("option",{value:"30",children:"30$"}),(0,Z.jsx)("option",{value:"35",children:"35$"}),(0,Z.jsx)("option",{value:"27",children:"27$"}),(0,Z.jsx)("option",{value:"32",children:"32$"}),(0,Z.jsx)("option",{value:"28",children:"28$"})]})]}),(0,Z.jsx)(j,{type:"button",onClick:p,children:"Reset"})]})}})},w=l(1308),y=l(9599),A=l(6351),k=function(n){var e=n.visibleCards,l=(0,m.I0)(),r=(0,m.v9)(A.sx);return(0,c.useEffect)((function(){l((0,y.r)())}),[l]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("ul",{children:r.slice(0,e).map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(w.V,{card:n})},n.id)}))})})},I=l(5980),P=l(1314),$=function(){var n=(0,c.useState)(4),e=(0,r.Z)(n,2),l=e[0],i=e[1],a=(0,m.v9)(A.sx),t=(0,m.v9)(A.NH);return(0,Z.jsxs)(I.$,{children:[(0,Z.jsx)(C,{}),t&&(0,Z.jsx)(P.a,{}),!t&&0===a.length&&(0,Z.jsx)("p",{children:"No teachers found based on the selected filters \ud83d\ude15"}),(0,Z.jsx)(k,{visibleCards:l}),l<a.length&&(0,Z.jsx)(I.A,{onClick:function(){i((function(n){return n+4}))},style:{margin:"0 auto"},children:"Load more"})]})},B=function(){return(0,Z.jsx)($,{})}}}]);
//# sourceMappingURL=413.189ff4f1.chunk.js.map