(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={App:"App_App__1vXKE",note_create:"App_note_create__3hoez"}},16:function(e,t,n){e.exports={notes:"Notes_notes__1mdpA"}},18:function(e,t,n){e.exports=n(38)},26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),l=(n(26),n(3)),i=n(10),s=n.n(i),u=n(6),_=n(5),f=n.n(_),m=n(7),d=n.n(m),p=function(e){var t=e.title,n=e.onClick;return o.a.createElement("p",{className:d.a.tag,onClick:function(){return n(t)}},t)},b=function(e){var t=e.tags,n=e.onClick,a=e.tagsTitle;return o.a.createElement("div",{className:d.a.tags},o.a.createElement("p",{className:d.a.tags_title},a),t.map(function(e){return o.a.createElement(p,{title:e,key:e,onClick:n})}))},g=n(1),E=n(2),T=function(e){if(!e.includes("#"))return[];var t=e.split("#").map(function(e){return e.split(" ")[0]}).filter(function(e){return!!e});return"#"!==e[0]&&t.shift(),Object(E.a)(new Set(t))},v=function(e,t){return t.length?e.filter(function(e){var n=!1;return t.forEach(function(t){e.tags.includes(t)&&(n=!0)}),n}):Object(E.a)(e)},N={title:"Task",id:0,tags:['shop"'],note:'You need to develop a single-page application by using\nReact/Redux javascript frameworks: a text editor for notes\nwith twitter-style tags support.\n\nMain application features:\nCreate, edit and delete notes. Also, filtering notes by tags.\nWhile adding/editing note, the user should have an option to\ncreate a tag using # symbol.\nExample:\nUser enters texts "I wanna go #shop" and during or at the end\nof the input appropriate tag should be created and displayed.\nYou can use client or server-side data storage of your choice.\nUI design is not important.\nThe project should be uploaded to GitHub/GitLab/Bitbucket.\n\nWill be a plus:\ntest code coverage\ngulp/browserify for project building'},O={notes:[N],notesToShow:[N],tags:['shop"'],filterTags:[]},h=function(e){return{type:"ADD_FILTER_TAG",payload:e}},y=function(e){var t=e.note,n=Object(g.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:f.a.note_title},t.title),o.a.createElement("p",{className:f.a.note_text},t.note),o.a.createElement(b,{tags:t.tags,tagsTitle:"Tags:",onClick:function(e){n(h(e))}}))},j=n(4),w=n.n(j),S=function(e){var t=e.onNoteSave,n=e.onNoteSaveCancel,r=e.noteTitle,c=void 0===r?"":r,i=e.noteTextValue,s=void 0===i?"":i,u=e.title,_=void 0===u?"Type new note here":u,f=Object(a.useState)(!1),m=Object(l.a)(f,2),d=m[0],p=m[1],E=Object(a.useState)(!1),v=Object(l.a)(E,2),N=v[0],O=v[1],y=Object(a.useState)(c),j=Object(l.a)(y,2),S=j[0],x=j[1],C=Object(a.useState)(s),k=Object(l.a)(C,2),F=k[0],A=k[1],R=Object(a.useState)(T(s)),I=Object(l.a)(R,2),L=I[0],D=I[1],Y=Object(g.b)();return o.a.createElement("div",{className:w.a.create_note},o.a.createElement("h3",null,_),o.a.createElement("div",{className:w.a.fields_div},o.a.createElement("label",{htmlFor:"title",className:w.a.title_label},"Title:"),o.a.createElement("input",{value:S,onChange:function(e){p(!1),x(e.target.value)},type:"text",id:"title",placeholder:"Type your note title here..."}),d&&o.a.createElement("p",{className:w.a.error_message},"Title shouldn't be empty"),o.a.createElement("label",{htmlFor:"note",className:w.a.note_label},"Note:"),o.a.createElement("textarea",{value:F,onChange:function(e){O(!1),A(e.target.value),D(T(e.target.value))},id:"note",className:w.a.note_text,placeholder:"Type your note here..."}),N&&o.a.createElement("p",{className:w.a.error_message},"Note shouldn't be empty"),o.a.createElement(b,{tags:L,tagsTitle:"Tags:",onClick:function(e){Y(h(e))}})),o.a.createElement("div",{className:w.a.button_group},o.a.createElement("button",{onClick:function(){S.trim()||p(!0),F.trim()||O(!0),S.trim()&&F.trim()&&t({title:S,note:F,tags:L})},className:w.a.btn_save},"Save"),o.a.createElement("button",{onClick:function(){n()},className:w.a.btn_cancel},"Cancel")))},x=function(e){var t=e.note,n=Object(a.useState)(!1),r=Object(l.a)(n,2),c=r[0],i=r[1],s=Object(g.b)();return o.a.createElement("div",{className:f.a.note},o.a.createElement("div",{className:f.a.note_info},c?o.a.createElement(S,{title:"Edit your note",noteTextValue:t.note,noteTitle:t.title,onNoteSaveCancel:function(){i(!1)},onNoteSave:function(e){s(function(e){return{type:"EDIT_NOTE",payload:e}}(Object(u.a)({},t,e))),i(!1)}}):o.a.createElement(y,{note:t})),o.a.createElement("div",{className:f.a.note_btn_grp},!c&&o.a.createElement("button",{onClick:function(){i(!0)},className:f.a.btn_edit},"Edit"),o.a.createElement("button",{onClick:function(){s({type:"DELETE_NOTE",payload:t.id})},className:f.a.btn_delete},"Delete")))},C=n(16),k=n.n(C),F=function(){var e=Object(g.c)(function(e){return e.notesToShow});return o.a.createElement("div",{className:k.a.notes},e.length?e.map(function(e){return o.a.createElement(x,{note:e,key:e.id})}):o.a.createElement("p",null,"You don't have notes, but you can create a new one :)"))},A=function(){var e,t,n=Object(g.b)(),a=Object(g.c)(function(e){return e.filterTags}),r=Object(g.c)(function(e){return e.tags});return o.a.createElement("div",null,o.a.createElement(b,{tags:a,onClick:function(e){n(function(e){return{type:"REMOVE_FILTER_TAG",payload:e}}(e))},tagsTitle:"Notes are filtered by tags:"}),o.a.createElement(b,{tags:(e=r,t=a,e.filter(function(e){return!t.includes(e)})),onClick:function(e){n(h(e))},tagsTitle:"You can filter notes by tags:"}))},R=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(g.b)();return o.a.createElement("div",{className:s.a.App},o.a.createElement("h1",null,"Notes"),o.a.createElement("p",{style:{color:"green"}},"You can add tag to your note by adding # before it"),o.a.createElement(A,null),n?o.a.createElement("div",{className:s.a.note_create},o.a.createElement(S,{onNoteSave:function(e){c(function(e){return{type:"CREATE_NOTE",payload:e}}(e)),r(!1)},onNoteSaveCancel:function(){r(!1)},title:"Type new note here"})):o.a.createElement("button",{onClick:function(){r(!0)}},"Create new note"),o.a.createElement(F,null))},I=n(17),L=Object(I.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTE":var n=Math.max.apply(Math,Object(E.a)(e.notes.map(function(e){return e.id})).concat([0])),a=Object(E.a)(new Set(e.tags.concat(t.payload.tags))),o=[Object(u.a)({},t.payload,{id:n+1})].concat(Object(E.a)(e.notes));return Object(u.a)({},e,{tags:a,notes:o,notesToShow:o,filterTags:[]});case"EDIT_NOTE":var r=e.notes.findIndex(function(e){return e.id===t.payload.id}),c=Object(E.a)(e.notes);c[r]=t.payload;var l=Object(E.a)(new Set(c.flatMap(function(e){return e.tags}))),i=e.filterTags.filter(function(e){return l.includes(e)}),s=v(c,i);return Object(u.a)({},e,{tags:l,notes:c,filterTags:i,notesToShow:s});case"DELETE_NOTE":var _=Object(E.a)(e.notes.filter(function(e){return e.id!==t.payload})),f=Object(E.a)(new Set(_.flatMap(function(e){return e.tags}))),m=e.filterTags.filter(function(e){return f.includes(e)}),d=v(_,m);return Object(u.a)({},e,{tags:f,filterTags:m,notes:_,notesToShow:d});case"ADD_FILTER_TAG":var p=Object(E.a)(new Set(e.filterTags.concat([t.payload]))),b=v(e.notes,p);return Object(u.a)({},e,{filterTags:p,notesToShow:b});case"REMOVE_FILTER_TAG":var g=Object(E.a)(e.filterTags.filter(function(e){return e!==t.payload})),T=v(e.notes,g);return Object(u.a)({},e,{filterTags:g,notesToShow:T});default:return e}});c.a.createRoot(document.getElementById("root")).render(o.a.createElement(g.a,{store:L},o.a.createElement(R,null)))},4:function(e,t,n){e.exports={create_note:"NoteForm_create_note__3KfVz",fields_div:"NoteForm_fields_div__3TbFX",title_label:"NoteForm_title_label__388T7",note_label:"NoteForm_note_label__2m9Ng",note_text:"NoteForm_note_text__3fPOG",error_message:"NoteForm_error_message__160Qf",button_group:"NoteForm_button_group__18LFg",btn_save:"NoteForm_btn_save__1_Nca",btn_cancel:"NoteForm_btn_cancel__1YfO3"}},5:function(e,t,n){e.exports={note:"Note_note__2WmNJ",note_info:"Note_note_info__1tx9Q",note_text:"Note_note_text__39L3F",note_title:"Note_note_title__39t8p",note_btn_grp:"Note_note_btn_grp__1LfOW",btn_edit:"Note_btn_edit__3vxul",btn_delete:"Note_btn_delete__36YEw"}},7:function(e,t,n){e.exports={tags:"Tags_tags__32rYV",tags_title:"Tags_tags_title__tmo8c",tag:"Tags_tag__1wKlH"}}},[[18,2,1]]]);
//# sourceMappingURL=main.9b356583.chunk.js.map