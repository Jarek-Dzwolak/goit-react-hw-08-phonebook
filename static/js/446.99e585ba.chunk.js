"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{446:function(t,n,e){e.r(n),e.d(n,{default:function(){return N}});var c=e(791),a=e(439),r=e(434),o=e(198),s="ContactForm_form__LOCo9",i="ContactForm_input__R63vi",u="ContactForm_button__a1fWr",l=e(184),m=function(){var t=(0,r.I0)(),n=(0,c.useState)(""),e=(0,a.Z)(n,2),m=e[0],f=e[1],_=(0,c.useState)(""),d=(0,a.Z)(_,2),v=d[0],h=d[1];return(0,l.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault(),""!==m.trim()&&""!==v.trim()&&(t((0,o.uK)({name:m,number:v})),f(""),h(""))},children:[(0,l.jsx)("input",{className:i,type:"text",name:"name",placeholder:"Name",value:m,onChange:function(t){return f(t.target.value)}}),(0,l.jsx)("input",{className:i,type:"text",name:"number",placeholder:"Phone number",value:v,onChange:function(t){return h(t.target.value)}}),(0,l.jsx)("button",{className:u,type:"submit",children:"Add Contact"})]})},f="ContactItem_item__OqzD5",_="ContactItem_button__YuUNB",d=function(t){var n=t.contact,e=(0,r.I0)();return(0,l.jsxs)("li",{className:f,children:[n.name," - ",n.number,(0,l.jsx)("button",{className:_,onClick:function(){return e((0,o.GK)(n.id))},children:"Remove"})]})},v="ContactList_list__+o3Yb",h=function(){var t=(0,r.v9)((function(t){return t.contacts.contacts})),n=(0,r.v9)((function(t){return t.contacts.isLoading})),e=(0,r.v9)((function(t){return t.contacts.filter})),a=(0,r.I0)();if((0,c.useEffect)((function(){a((0,o.yF)())}),[a]),n)return(0,l.jsx)("div",{children:"Loading..."});var s=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,l.jsx)("ul",{className:v,children:s.map((function(t){return(0,l.jsx)(d,{contact:t},t.id)}))})},x=e(3),p="Filter_input__apdzF",C=function(){var t=(0,r.I0)(),n=(0,r.v9)((function(t){return t.filter}));return(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:p,type:"text",name:"filter",placeholder:"Search contacts",value:n,onChange:function(n){var e=n.target.value;t((0,x.xO)(e))}})})},j={container:"Contacts_container__P2OwI","contacts-section":"Contacts_contacts-section__BQBi0","form-section":"Contacts_form-section__75Fq3","list-section":"Contacts_list-section__vlDRv"},N=function(){return(0,l.jsx)("div",{className:j.container,children:(0,l.jsxs)("div",{className:j.contactsSection,children:[(0,l.jsx)("div",{className:j.formSection,children:(0,l.jsx)(m,{})}),(0,l.jsx)("div",{className:j.formSection,children:(0,l.jsx)(C,{})}),(0,l.jsx)("div",{className:j.listSection,children:(0,l.jsx)(h,{})})]})})}}}]);
//# sourceMappingURL=446.99e585ba.chunk.js.map