(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={inputTitle:"Filter_inputTitle__L0KSP",input:"Filter_input__2bfvl"}},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),r=n(11),s=n.n(r),l=n(12),o=n(4),u=n(5),b=n(6),d=n(8),h=n(7),j=(n(18),n(21));function m(){return Object(j.a)()}var p=n(3),f=n.n(p),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state.name,t.state.number)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:f.a.inputTitle,children:"Name"}),Object(a.jsx)("input",{name:"name",value:e,onChange:this.handleChange,className:f.a.input})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:f.a.inputTitle,children:"Number"}),Object(a.jsx)("input",{name:"number",value:n,onChange:this.handleChange,className:f.a.input})]}),Object(a.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})})}}]),n}(c.Component),C=n(2),v=n.n(C),x=function(t){var e=t.contact,n=t.handleDelete;return Object(a.jsxs)("div",{className:v.a.wrapper,children:[Object(a.jsxs)("li",{className:v.a.contactListItem,children:[e.name,": ",e.number]}),Object(a.jsx)("button",{type:"button",onClick:n,className:v.a.btnDelete,children:"Delete"})]})},_=function(t){var e=t.visibleContacts,n=t.handleDelete;return Object(a.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){return Object(a.jsx)(x,{contact:t,handleDelete:function(){return n(t.id)}},t.id)}))})},g=n(10),L=n.n(g),N=function(t){var e=t.handleChange,n=t.filter;return Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:L.a.inputTitle,children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",name:"filter",value:n,onChange:e,className:L.a.input})]})},y=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleFilter=function(t,e){return e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts"));else{var a={id:m(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))}},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.handleFilter(e,n);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{addContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(N,{handleChange:this.handleChange,filter:n}),Object(a.jsx)(_,{visibleContacts:c,handleDelete:this.handleDelete})]})})}}]),n}(c.Component);y.defaultProps={};var F=y;s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={wrapper:"ContactList_wrapper__XmJN0",contactList:"ContactList_contactList__1d_lR",contactListItem:"ContactList_contactListItem__2iXEn",btnDelete:"ContactList_btnDelete__3Lin7"}},3:function(t,e,n){t.exports={inputTitle:"ContactForm_inputTitle__178aT",input:"ContactForm_input__1CIO8",btn:"ContactForm_btn__2LFFQ"}}},[[19,1,2]]]);
//# sourceMappingURL=main.37fc1c23.chunk.js.map