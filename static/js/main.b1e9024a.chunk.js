(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={App:"App_App__2LysQ"}},13:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__nmxXt",filterInput:"Filter_filterInput__1a1cP"}},16:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={input:"Contact_form_input__O1buV",labelName:"Contact_form_labelName__4G4Bx",labelNumber:"Contact_form_labelNumber__iA6KQ",btnSubmit:"Contact_form_btnSubmit__2AwjA",form:"Contact_form_form__3EHzn"}},21:function(t,e,n){},3:function(t,e,n){t.exports={contactsTitle:"Contacts_contactsTitle__3jvKq",contactsList:"Contacts_contactsList__NbQN2",contactsItem:"Contacts_contactsItem__2pP7d",contactsParagraph:"Contacts_contactsParagraph__ZVbD_",contactsNumber:"Contacts_contactsNumber__2ScFW",contactsBtn:"Contacts_contactsBtn__1Ryuq"}},31:function(t,e,n){"use strict";n.r(e);var a=n(6),c=n.n(a),s=n(14),r=n.n(s),o=(n(21),n(17)),i=n(7),l=n(8),u=n(10),m=n(9),b=n(1),d=n(12),h=n.n(d),p=n(15),j=n(2),f=n.n(j),_=n(4),C=n.n(_),O=n(0),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=C.a.generate(),t.numberId=C.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){var n=t.props.submit;alert("Contact has been saved:"+t.state.name),e.preventDefault(),n(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{className:f.a.labelName,htmlFor:this.nameId,children:"Name"}),Object(O.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameId}),Object(O.jsx)("label",{className:f.a.labelNumber,htmlFor:this.numberId,children:"Number"}),Object(O.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberId}),Object(O.jsx)("button",{type:"submit",className:f.a.btnSubmit,children:"Add contact"})]})}}]),n}(b.Component),N=n(16),g=n(13),v=n.n(g),y=function(t){var e=t.filter,n=t.onChangeFilter;return Object(O.jsxs)(b.Fragment,{children:[Object(O.jsx)("label",{className:v.a.filterLabel,children:"Find contacts by name"}),Object(O.jsx)("input",{className:v.a.filterInput,value:e,onChange:n})]})},A=n(3),S=n.n(A),F=function(t){var e=t.contacts,n=t.deleteContact;return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:S.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{className:S.a.contactsItem,children:[Object(O.jsxs)("p",{className:S.a.contactsParagraph,children:[a,":"]}),Object(O.jsx)("p",{className:S.a.contactsNumber,children:c}),Object(O.jsx)("button",{type:"button",onClick:function(){n(e)},className:S.a.contactsBtn,children:"Delete contact"})]},e)}))})})},I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:N,filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.state.contacts.some((function(t){return n===t.name}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(o.a)(e),[{name:n,number:a,id:C()()}])}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFiltredElem=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:h.a.App,children:[Object(O.jsx)("h1",{children:"Phoonebook"}),Object(O.jsx)(x,{submit:this.addContact}),Object(O.jsx)("h2",{className:h.a.contactsTitle,children:"Contacts \ud83d\udcde"}),Object(O.jsx)(y,{filter:this.state.filter,onChangeFilter:this.changeFilter}),Object(O.jsx)(F,{contacts:this.getFiltredElem(),deleteContact:this.deleteContact})]})}}]),n}(b.Component),w=I;r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b1e9024a.chunk.js.map