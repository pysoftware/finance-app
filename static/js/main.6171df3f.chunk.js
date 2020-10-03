(this["webpackJsonpfinance-app"]=this["webpackJsonpfinance-app"]||[]).push([[0],{271:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(22),c=n.n(o),i=(n(69),n(61)),u=n(59),l=n(11),s=function(e){var t=e.Spinner;return function(e){var n=e.classes,o=e.children;return e.isLoading?a.a.createElement("div",{className:n.loader},a.a.createElement(t,null)):a.a.createElement(r.Fragment,null,o)}},d=(n(75),function(){return a.a.createElement("div",{className:"loader"},a.a.createElement("div",{className:"lds-dual-ring"}))}),f=Object(l.d)(Object(u.a)({loader:"\n    min-height: 200px;\n    position: relative;\n  "}))(s({Spinner:d})),m=n(10),p=n(5),g=n(276),h=n(277),y=function(e){var t=e.title,n=e.sumLimit,o=e.costsSumPerMonth,c=e.onDelete,i=e.onEdit,u=Object(r.useMemo)((function(){return{display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:5,fontSize:15}}),[]);return a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,a.a.createElement(p.Card.Title,null,null===t||void 0===t?void 0:t.toUpperCase()),a.a.createElement(p.Card.Text,{text:"muted"},"\u0422\u0440\u0430\u0442\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ",o," \u20bd"),n>0&&a.a.createElement(p.Card.Text,{text:"muted"},"\u041b\u0438\u043c\u0438\u0442 \u043d\u0430 \u043c\u0435\u0441\u044f\u0446: ",n," \u20bd")),a.a.createElement(p.Card.Footer,{className:"d-flex justify-content-between"},a.a.createElement(p.Button,{success:!0,mr:5,onClick:i},a.a.createElement(g.a,{style:u}),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement(p.Button,{danger:!0,onClick:c},a.a.createElement(h.a,{style:Object(m.a)({},u)}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))},E=Object(l.d)()(y),v=function(e){var t=e.categories,n=e.isLoading,o=e.fetchCategories,c=e.deleteCategory,u=e.onEditCategory;return Object(r.useEffect)((function(){o()}),[o]),a.a.createElement(f,{isLoading:n},function(){var e=[];return t.map((function(n,r){if(r%2===0&&(e=[]),e.push(a.a.createElement(E,{key:n.id,title:n.title,sumLimit:n.sum_limit,costsSumPerMonth:n.costsSumPerMonth,onEdit:function(){return u(n.id)},onDelete:function(){return c(n.id)}})),r>0&&r%2!==0||t.length===r+1)return a.a.createElement(p.Card.Deck,{mb:"3",mt:"3",key:r},Object(i.a)(e))}))}())},b=n(13),S=n(7),w=n.n(S),C=n(54),O=n(8),I=n(29);n(275),n(266),n(269);I.initializeApp({apiKey:"AIzaSyD6NVbBtWaZm5P3j4ZHh1Bqs4TatJlYmS4",authDomain:"finance-app-6cdfc.firebaseapp.com",databaseURL:"https://finance-app-6cdfc.firebaseio.com",projectId:"finance-app-6cdfc",storageBucket:"finance-app-6cdfc.appspot.com",messagingSenderId:"618921567953",appId:"1:618921567953:web:5e0513acafd208704647f0",measurementId:"G-H2X987S04D"}),I.analytics();var j=I.firestore(),x=I,k=n(6),L=n.n(k),T=Symbol("SET_IS_LOADING"),_=function(e,t){var n=t.loadingStatus;return L()(e,{isLoading:{$set:n}})},M=function(e){return{type:T,payload:{loadingStatus:e}}},D=Symbol("SET_CATEGORIES"),F=function(e,t){return L()(e,{categories:{$set:t}})},N=function(e){return{type:D,payload:e}},$=Symbol("SET_ERROR"),R=function(e,t){return L()(e,{error:{$set:t}})},G=function(e){return{type:$,payload:e}},A=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(M(!0)),n=j.collection("costs"),r=[],e.next=6,j.collection("categories").get().then(function(){var e=Object(O.a)(w.a.mark((function e(t){var a,o,c,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.docs,o=Object(C.a)(a),e.prev=2,o.s();case 4:if((c=o.n()).done){e.next=12;break}return i=c.value,u=0,e.next=9,n.where("categoryId","==",j.doc("categories/".concat(i.id))).get().then((function(e){e.docs.forEach((function(e){return u+=e.data().sum}))}));case 9:r.push(Object(m.a)({id:i.id,costsSumPerMonth:u},i.data()));case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),o.e(e.t0);case 17:return e.prev=17,o.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(t){return e.apply(this,arguments)}}());case 6:t(N(r)),t(G(null)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),t(G("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f."));case 14:return e.prev=14,t(M(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(t){return e.apply(this,arguments)}}()},B=Symbol("SET_IS_LOADING"),P=function(e,t){return L()(e,{isLoading:{$set:t}})},Y=function(e){return{type:B,payload:e}},W=Symbol("SET_TOTAL_SUM"),z=function(e,t){return L()(e,{totalSum:{$set:t}})},H=function(e){return{type:W,payload:e}},U=Symbol("SET_ERROR"),J=function(e,t){return L()(e,{error:{$set:t}})},Z=function(e){return{type:U,payload:e}},q=Symbol("SET_INCOMES_PER_MONTH"),K=function(e,t){return L()(e,{incomesPerMonth:{$set:t}})},V=function(e){return{type:q,payload:e}},X=Symbol("SET_LOSSES_PER_MONTH"),Q=function(e,t){return L()(e,{lossesPerMonth:{$set:t}})},ee=function(e){return{type:X,payload:e}},te=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n,r,a,o,c,i,u,l,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Y(!0)),n=new Date,e.next=5,j.collection("costs").where("date",">=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),1))).where("date","<=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),31))).get();case 5:return r=e.sent,a=r.docs,e.next=9,j.collection("incomes").where("date",">=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),1))).where("date","<=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),31))).get();case 9:return o=e.sent,c=o.docs,e.next=13,j.collection("incomes").get();case 13:i=e.sent,i.docs,u=a.reduce((function(e,t){return e+t.data().sum}),0),l=c.reduce((function(e,t){return e+t.data().sum}),0),s=l-u,t(ee(u)),t(V(l)),t(H(s)),t(Z(null)),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),console.error(e.t0),t(Z("\u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."));case 28:return e.prev=28,t(Y(!1)),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[0,24,28,31]])})));return function(t){return e.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=j.batch(),t.next=4,j.collection("costs").where("categoryId","==",j.doc("categories/".concat(e))).get();case 4:return t.sent.forEach((function(e){r.delete(e.ref)})),t.next=8,j.collection("categories").doc(e).delete();case 8:return t.next=10,r.commit();case 10:n(te()),n(A()),n(G(null)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0),n(G("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"));case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},re=Symbol("SET_ERROR"),ae=function(e,t){return L()(e,{error:{$set:t}})},oe=function(e){return{type:re,payload:e}},ce=Symbol("SET_ENTITY"),ie=function(e,t){return L()(e,{entity:{$merge:Object(m.a)({},t)}})},ue=function(e){return{type:ce,payload:e}},le={isShowing:!1,isLoadingEntity:!1,isLoadingCosts:!1,error:null,entity:{id:"",title:"",sum_limit:0},costs:[]},se=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(oe(null)),t(ue(le.entity));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=Symbol("SET_IS_SHOWING"),fe=function(e){return L()(e,{isShowing:{$set:!e.isShowing}})},me=function(){return{type:de,payload:null}},pe=Symbol("SET_COSTS"),ge=function(e,t){return L()(e,{costs:{$set:t}})},he=function(e){return{type:pe,payload:e}},ye=Symbol("SET_IS_LOADING_COSTS"),Ee=function(e,t){return L()(e,{isLoadingCosts:{$set:t}})},ve=function(e){return{type:ye,payload:e}},be=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var r,a,o,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(ve(!0)),r=new Date,t.next=5,j.collection("costs").where("categoryId","==",j.doc("categories/".concat(e))).where("date",">=",x.firestore.Timestamp.fromDate(new Date(r.getFullYear(),r.getMonth(),1))).where("date","<=",x.firestore.Timestamp.fromDate(new Date(r.getFullYear(),r.getMonth(),31))).get();case 5:a=t.sent,o=a.docs,c=o.map((function(e){return Object(m.a)({id:e.id},e.data())})),n(he(c)),n(oe(null)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0),n(oe("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f."));case 16:return t.prev=16,n(ve(!1)),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,12,16,19]])})));return function(e){return t.apply(this,arguments)}}()},Se=Symbol("SET_IS_LOADING_ENTITY"),we=function(e,t){return L()(e,{isLoadingEntity:{$set:t}})},Ce=function(e){return{type:Se,payload:e}},Oe=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n,r){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Ce(!0)),t.next=4,j.collection("categories").doc(e).get();case 4:if((a=t.sent).exists){t.next=8;break}return n(oe("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0422\u0430\u043a\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),t.abrupt("return");case 8:n(ue(Object(m.a)({id:a.id,title:a.data().title.capitalize()},a.data()))),n(oe(null)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0),n(oe("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f."));case 16:return t.prev=16,n(Ce(!1)),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,12,16,19]])})));return function(e,n){return t.apply(this,arguments)}}()},Ie=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(me()),n(se()),t.next=5,n(Oe(e));case 5:return t.next=7,n(be(e));case 7:n(oe(null)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),n(oe("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0443\u0449\u043d\u043d\u043e\u0441\u0442\u0438"));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},je=function(e){return{fetchCategories:function(){return e(A())},deleteCategory:function(t){return e(ne(t))},onEditCategory:function(t){return e(Ie(t))}}},xe=Object(l.d)(Object(b.b)((function(e){var t=e.categories;return{isLoading:t.isLoading,categories:t.categories,error:t.error}}),je))(v),ke=n(56),Le=n(57),Te=n(63),_e=n(60),Me=function(e){Object(Te.a)(n,e);var t=Object(_e.a)(n);function n(){var e;Object(ke.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).el=document.createElement("div"),e}return Object(Le.a)(n,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return c.a.createPortal(e,this.el)}}]),n}(r.Component),De=(n(271),function(e){var t=e.onCancel,n=e.children,r=e.isShowing;return a.a.createElement(a.a.Fragment,null,r&&a.a.createElement(Me,null,a.a.createElement("div",{className:"modalOverlay",onClick:t}),a.a.createElement("div",{className:"modalWindow"},n)))});De.defaultProps={isOpen:!1,children:null};var Fe=De,Ne=function(e){var t=e.isShowing,n=e.categories,o=e.isLoading,c=e.error,i=e.entity,u=i.sum,l=i.categoryId,s=e.init,d=e.setIsShowing,m=e.addCosts,g=e.onChangeEntity;return Object(r.useEffect)((function(){t&&s()}),[t]),a.a.createElement(Fe,{isShowing:t,onCancel:d},a.a.createElement(f,{isLoading:o},a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,c&&a.a.createElement(p.Alert,{danger:!0},c),a.a.createElement(p.Card.Title,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u0442\u0443"),a.a.createElement(p.Form,null,a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u0421\u0443\u043c\u043c\u0430"),a.a.createElement(p.Form.Input,{value:u,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:function(e){var t=e.target.value;return g({sum:t})}})),n.length&&a.a.createElement(p.Form.Group,null,a.a.createElement("label",{htmlFor:"exampleControlsInput1"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),a.a.createElement(p.Form.Select,{value:l,onChange:function(e){var t=e.target.value;return g({categoryId:t})}},a.a.createElement("option",{value:""},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435"),n.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.data().title.capitalize())})))))),a.a.createElement(p.Card.Footer,null,a.a.createElement(p.Button,{onClick:m,success:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u0442\u0443")))))},$e=Symbol("SET_IS_SHOWING"),Re=function(e){return L()(e,{isShowing:{$set:!e.isShowing}})},Ge=function(){return{type:$e,payload:null}},Ae=Symbol("SET_IS_LOADING"),Be=function(e,t){return L()(e,{isLoading:{$set:t}})},Pe=function(e){return{type:Ae,payload:e}},Ye=Symbol("SET_CATEGORIES"),We=function(e,t){return L()(e,{categories:{$set:t}})},ze=function(e){return{type:Ye,payload:e}},He=Symbol("SET_ERROR"),Ue=function(e,t){return L()(e,{error:{$set:t}})},Je=function(e){return{type:He,payload:e}},Ze=Symbol("SET_ENTITY"),qe=function(e,t){return L()(e,{entity:{$merge:Object(m.a)({},t)}})},Ke=function(e){return{type:Ze,payload:e}},Ve={isShowing:!1,categories:[],isLoading:!0,error:null,entity:{sum:"",categoryId:""}},Xe=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Je(null)),t(Ke(Ve.entity));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Qe=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Xe()),t(Pe(!0)),e.next=5,j.collection("categories").get();case 5:n=e.sent,r=n.docs,t(ze(r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),t(Je("\n          \u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n          \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.\n        "));case 14:return e.prev=14,t(Pe(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(t){return e.apply(this,arguments)}}()},et=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t,n){var r,a,o,c,i,u,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t(Pe(!0)),r=n(),a=r.addCostsModal.entity,o=a.sum,c=a.categoryId,i=r.editCategoryModal,u=i.isShowing,l=i.entity.id,(0===+o||+o)&&c){e.next=6;break}return t(Je("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f")),e.abrupt("return");case 6:return e.next=8,j.collection("costs").doc().set({date:x.firestore.Timestamp.fromDate(new Date),sum:+o,categoryId:j.doc("categories/".concat(c))});case 8:t(A()),t(te()),t(Pe(!1)),t(Ge()),u&&l&&t(be(l)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),t(Je("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u0442\u044b"));case 19:return e.prev=19,t(Pe(!1)),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,15,19,22]])})));return function(t,n){return e.apply(this,arguments)}}()},tt=function(e){return{setIsShowing:function(){return e(Ge())},addCosts:function(){return e(et())},init:function(){return e(Qe())},onChangeEntity:function(t){return e(Ke(t))}}},nt=Object(l.d)(Object(b.b)((function(e){var t=e.addCostsModal;return{isShowing:t.isShowing,categories:t.categories,isLoading:t.isLoading,error:t.error,entity:t.entity}}),tt))(Ne),rt=function(e){var t=e.isShowing,n=e.isLoading,o=e.entity,c=o.title,i=o.sum_limit,u=e.error,l=e.setIsShowing,s=e.onChangeEntity,d=e.addCategory,m=e.init;return Object(r.useEffect)((function(){t&&m()}),[t,m]),a.a.createElement(Fe,{isShowing:t,onCancel:l},a.a.createElement(f,{isLoading:n},a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,u&&a.a.createElement(p.Alert,{danger:!0},u),a.a.createElement(p.Card.Title,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),a.a.createElement(p.Form,null,a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),a.a.createElement(p.Form.Input,{value:c,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",onChange:function(e){var t=e.target.value;return s({title:t})}})),a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u041b\u0438\u043c\u0438\u0442 \u0442\u0440\u0430\u0442"),a.a.createElement(p.Form.Input,{value:i,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u0438\u043c\u0438\u0442 \u0442\u0440\u0430\u0442",onChange:function(e){var t=e.target.value;return s({sum_limit:t})}})))),a.a.createElement(p.Card.Footer,null,a.a.createElement(p.Button,{onClick:d,success:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e")))))},at=Symbol("SET_IS_SHOWING"),ot=function(e){return L()(e,{isShowing:{$set:!e.isShowing}})},ct=function(){return{type:at,payload:null}},it=Symbol("SET_IS_LOADING"),ut=function(e){return{type:it,payload:e}},lt=Symbol("SET_ERROR"),st=function(e,t){return L()(e,{error:{$set:t}})},dt=function(e){return{type:lt,payload:e}},ft=(n(272),function(){return function(){var e=Object(O.a)(w.a.mark((function e(t,n){var r,a,o,c,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t(ut(!0)),r=n(),a=r.addCategoryModal.entity,o=a.sum_limit,!(!(c=a.title)&&c.length<5||0!==o&&!o)){e.next=7;break}return t(dt("\n          \u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f.\n          \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.\n          ")),e.abrupt("return");case 7:return e.next=9,j.collection("categories").doc().set({title:c.toLowerCase(),sum_limit:o});case 9:i=e.sent,console.log(i),t(A()),t(ut(!1)),t(ct()),t(dt(null)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0),t(dt("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f"));case 21:return e.prev=21,t(ut(!1)),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,17,21,24]])})));return function(t,n){return e.apply(this,arguments)}}()}),mt=Symbol("SET_ENTITY"),pt=function(e,t){return L()(e,{entity:{$merge:Object(m.a)({},t)}})},gt=function(e){return{type:mt,payload:e}},ht={isShowing:!1,error:null,entity:{title:"",sum_limit:""}},yt=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(dt(null)),t(gt(ht.entity));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Et=function(e){return{setIsShowing:function(){return e(ct())},addCategory:function(t,n){return e(ft(t,n))},onChangeEntity:function(t){return e(gt(t))},init:function(){return e(yt())}}},vt=Object(l.d)(Object(b.b)((function(e){var t=e.addCategoryModal;return{isShowing:t.isShowing,entity:t.entity,error:t.error}}),Et))(rt),bt=function(e){var t=e.setIsShowingAddCostsModal,n=e.setIsShowingAddCategoryModal,r=e.setIsShowingAddIncomesModal;return a.a.createElement(p.Navbar,{expand:"lg",dark:!0,bg:"dark",mb:"3",sticky:"top"},a.a.createElement(p.Navbar.Brand,{href:"#"},"\u0424\u0438\u043d\u0430\u043d\u0441\u044b"),a.a.createElement(p.Navbar.Toggler,{target:"#navbar"}),a.a.createElement(p.Collapse,{navbar:!0,id:"navbar",justifyContent:"end"},a.a.createElement(p.BDiv,{my:"2 lg-0"},a.a.createElement(p.Button,{success:!0,mr:2,mt:2,onClick:n},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),a.a.createElement(p.Button,{success:!0,mr:2,mt:2,onClick:r},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434"),a.a.createElement(p.Button,{info:!0,mr:2,mt:2,onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u0442\u0443"))))},St=Symbol("SET_IS_SHOWING"),wt=function(e){return L()(e,{isShowing:{$set:!e.isShowing}})},Ct=function(){return{type:St,payload:null}},Ot=function(e){return{setIsShowingAddCostsModal:function(){return e(Ge())},setIsShowingAddCategoryModal:function(){return e(ct())},setIsShowingAddIncomesModal:function(){return e(Ct())}}},It=Object(l.d)(Object(b.b)(null,Ot))(bt),jt=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:0}),xt=function(e){var t=e.lossesPerMonth,n=e.incomesPerMonth,o=e.totalSum,c=e.isLoading,i=e.init,u=e.onEditWallet,l=Object(r.useMemo)((function(){return{display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:5,fontSize:15}}),[]);return Object(r.useEffect)((function(){i()}),[i]),a.a.createElement(f,{isLoading:c},a.a.createElement("h1",null,"\u041a\u043e\u0448\u0435\u043b\u0435\u043a:",a.a.createElement(g.a,{style:Object(m.a)(Object(m.a)({},l),{},{backgroundColor:"#eee",padding:10,marginLeft:5,fontSize:25}),onClick:u})),a.a.createElement("h5",null,"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:\xa0",jt.format(o),"\xa0\u20bd"),a.a.createElement("h5",null,"\u0422\u0440\u0430\u0442\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446:\xa0",jt.format(t),"\xa0\u20bd"),a.a.createElement("h5",null,"\u0414\u043e\u0445\u043e\u0434\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446:\xa0",jt.format(n),"\xa0\u20bd"))},kt=Symbol("SET_IS_SHOWING"),Lt=function(e){return L()(e,{isShowing:{$set:!e.isShowing}})},Tt=function(){return{type:kt,payload:null}},_t=function(e){return{init:function(){return e(te())},onEditWallet:function(){return e(Tt())}}},Mt=Object(l.d)(Object(b.b)((function(e){var t=e.wallet;return{lossesPerMonth:t.lossesPerMonth,incomesPerMonth:t.incomesPerMonth,totalSum:t.totalSum,isLoading:t.isLoading}}),_t))(xt),Dt=function(e){var t=e.isShowing,n=e.isLoading,o=e.error,c=e.entity.sum,i=e.init,u=e.setIsShowing,l=e.addIncomes,s=e.onChangeEntity;return Object(r.useEffect)((function(){t&&i()}),[t]),a.a.createElement(Fe,{isShowing:t,onCancel:u},a.a.createElement(f,{isLoading:n},a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,o&&a.a.createElement(p.Alert,{danger:!0},o),a.a.createElement(p.Card.Title,null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434"),a.a.createElement(p.Form,null,a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u0421\u0443\u043c\u043c\u0430"),a.a.createElement(p.Form.Input,{value:c,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:function(e){var t=e.target.value;return s({sum:t})}})))),a.a.createElement(p.Card.Footer,null,a.a.createElement(p.Button,{onClick:l,success:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434")))))},Ft=Symbol("SET_ERROR"),Nt=function(e,t){return L()(e,{error:{$set:t}})},$t=function(e){return{type:Ft,payload:e}},Rt=Symbol("SET_ENTITY"),Gt=function(e,t){return L()(e,{entity:{$merge:Object(m.a)({},t)}})},At=function(e){return{type:Rt,payload:e}},Bt={isShowing:!1,isLoading:!0,error:null,entity:{sum:""}},Pt=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t($t(null)),t(At(Bt.entity));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Yt=Symbol("SET_IS_LOADING"),Wt=function(e,t){return L()(e,{isLoading:{$set:t}})},zt=function(e){return{type:Yt,payload:e}},Ht=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(zt(!1)),t(Pt());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ut=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t(zt(!0)),r=n(),0===+(a=r.addIncomesModal.entity.sum)||+a){e.next=6;break}return t($t("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f")),e.abrupt("return");case 6:return e.next=8,j.collection("incomes").doc().set({date:x.firestore.Timestamp.fromDate(new Date),sum:+a});case 8:t(te()),t(zt(!1)),t(Ct()),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),t($t("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u0442\u044b"));case 17:return e.prev=17,t(zt(!1)),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,13,17,20]])})));return function(t,n){return e.apply(this,arguments)}}()},Jt=function(e){return{setIsShowing:function(){return e(Ct())},addIncomes:function(){return e(Ut())},init:function(){return e(Ht())},onChangeEntity:function(t){return e(At(t))}}},Zt=Object(l.d)(Object(b.b)((function(e){var t=e.addIncomesModal;return{isShowing:t.isShowing,isLoading:t.isLoading,error:t.error,entity:t.entity}}),Jt))(Dt),qt=n(62),Kt=function(e){var t=e.isShowing,n=e.isLoadingEntity,o=e.isLoadingCosts,c=e.entity,i=e.error,u=e.costs,l=e.setIsShowing,s=e.editCategory,d=e.deleteCosts,g=Object(r.useState)(c),y=Object(qt.a)(g,2),E=y[0],v=y[1];Object(r.useEffect)((function(){v(c)}),[c]);var b=Object(r.useMemo)((function(){return{display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:5,fontSize:15}}),[]),S=Object(r.useCallback)((function(e){v((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}),[]);return a.a.createElement(Fe,{isShowing:t,onCancel:l},a.a.createElement(r.Fragment,null,a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,i&&a.a.createElement(p.Alert,{danger:!0},i),a.a.createElement(f,{isLoading:n},a.a.createElement(p.Card.Title,null,'\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 "',c.title,'"'),a.a.createElement(p.Form,null,a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),a.a.createElement(p.Form.Input,{value:E.title,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",onChange:function(e){var t=e.target.value;return S({title:t})}})),a.a.createElement(p.Form.Group,null,a.a.createElement("label",null,"\u041b\u0438\u043c\u0438\u0442 \u0442\u0440\u0430\u0442"),a.a.createElement(p.Form.Input,{value:E.sum_limit,type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u0438\u043c\u0438\u0442 \u0442\u0440\u0430\u0442",onChange:function(e){var t=e.target.value;return S({sum_limit:t})}})))),a.a.createElement(f,{isLoading:o},u.length>0&&a.a.createElement(p.ListGroup,{style:{overflowY:"scroll",height:250,padding:10}},u.map((function(e){return a.a.createElement(p.ListGroup.Item,{key:e.id,display:"flex",justifyContent:"between",mb:2},a.a.createElement("div",null,a.a.createElement(p.Lead,null,"\u0421\u0443\u043c\u043c\u0430:\xa0",jt.format(e.sum),"\xa0\u20bd"),a.a.createElement(p.Lead,null,"\u0414\u0430\u0442\u0430:\xa0",e.date.toDate().toLocaleDateString("ru-RU"))),a.a.createElement(h.a,{style:Object(m.a)(Object(m.a)({},b),{},{fontSize:30,color:"red"}),onClick:function(){return d(e.id)}}))}))))),a.a.createElement(p.Card.Footer,null,a.a.createElement(p.Button,{onClick:function(){return s(E)},success:!0},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))},Vt=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n,r){var a,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=r(),o=a.editCategoryModal.entity.id,n(Ce(!0)),t.next=5,j.collection("costs").doc(e).delete();case 5:n(A()),n(te()),n(be(o)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),n(oe("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u0442\u044b"));case 14:return t.prev=14,n(Ce(!1)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})));return function(e,n){return t.apply(this,arguments)}}()},Xt=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n){var r,a,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n(Ce(!0)),r=e.id,a=e.sum_limit,!(!(o=e.title)&&o.length<5||0!==a&&!a)){t.next=6;break}return n(oe("\n          \u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f.\n          \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.\n          ")),t.abrupt("return");case 6:return t.next=8,j.collection("categories").doc(r).set({title:o.toLowerCase(),sum_limit:a});case 8:n(A()),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),n(oe("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044f"));case 15:return t.prev=15,n(Ce(!1)),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,11,15,18]])})));return function(e){return t.apply(this,arguments)}}()},Qt=function(e){return{setIsShowing:function(){return e(me())},editCategory:function(t){return e(Xt(t))},deleteCosts:function(t){return e(Vt(t))},init:function(){return e(Ie())}}},en=Object(l.d)(Object(b.b)((function(e){var t=e.editCategoryModal;return{isShowing:t.isShowing,entity:t.entity,error:t.error,isLoadingEntity:t.isLoadingEntity,isLoadingCosts:t.isLoadingCosts,costs:t.costs}}),Qt))(Kt),tn=function(e){var t=e.isShowing,n=e.isLoadingIncomes,o=e.error,c=e.incomes,i=e.setIsShowing,u=e.deleteIncomes,l=e.init;Object(r.useEffect)((function(){t&&l()}),[t,l]);var s=Object(r.useMemo)((function(){return{display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:5,fontSize:15}}),[]);return a.a.createElement(Fe,{isShowing:t,onCancel:i},a.a.createElement(r.Fragment,null,a.a.createElement(p.Card,null,a.a.createElement(p.Card.Body,null,o&&a.a.createElement(p.Alert,{danger:!0},o),a.a.createElement("h4",null,"\u0414\u043e\u0445\u043e\u0434\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446"),a.a.createElement(f,{isLoading:n},c.length>0?a.a.createElement(p.ListGroup,{style:{overflowY:"scroll",height:250,padding:10}},c.map((function(e){return a.a.createElement(p.ListGroup.Item,{key:e.id,display:"flex",justifyContent:"between",mb:2},a.a.createElement("div",null,a.a.createElement(p.Lead,null,"\u0421\u0443\u043c\u043c\u0430:\xa0",jt.format(e.sum),"\xa0\u20bd"),a.a.createElement(p.Lead,null,"\u0414\u0430\u0442\u0430:\xa0",e.date.toDate().toLocaleDateString("ru-RU"))),a.a.createElement(h.a,{style:Object(m.a)(Object(m.a)({},s),{},{fontSize:30,color:"red"}),onClick:function(){return u(e.id)}}))}))):a.a.createElement(p.Lead,null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))))))},nn=Symbol("SET_ERROR"),rn=function(e,t){return L()(e,{error:{$set:t}})},an=function(e){return{type:nn,payload:e}},on=Symbol("SET_INCOMES"),cn=function(e,t){return L()(e,{incomes:{$set:t}})},un=function(e){return{type:on,payload:e}},ln=Symbol("SET_IS_LOADING_INCOMES"),sn=function(e,t){return L()(e,{isLoadingIncomes:{$set:t}})},dn=function(e){return{type:ln,payload:e}},fn=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){var n,r,a,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(dn(!0)),n=new Date,e.next=5,j.collection("incomes").where("date",">=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),1))).where("date","<=",x.firestore.Timestamp.fromDate(new Date(n.getFullYear(),n.getMonth(),31))).get();case 5:r=e.sent,a=r.docs,o=a.map((function(e){return Object(m.a)({id:e.id},e.data())})),t(un(o)),t(an(null)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),t(an("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f."));case 16:return e.prev=16,t(dn(!1)),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(t){return e.apply(this,arguments)}}()},mn=function(){return function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(fn());case 3:t(an(null)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),t(an("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0443\u0449\u043d\u043d\u043e\u0441\u0442\u0438"));case 10:return e.prev=10,t(dn(!1)),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,6,10,13]])})));return function(t){return e.apply(this,arguments)}}()},pn=function(e){return function(){var t=Object(O.a)(w.a.mark((function t(n,r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(dn(!0)),t.next=4,j.collection("incomes").doc(e).delete();case 4:n(A()),n(te()),n(fn()),n(an(null)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),n(an("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0445\u043e\u0434\u043e\u0432"));case 14:return t.prev=14,n(dn(!1)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})));return function(e,n){return t.apply(this,arguments)}}()},gn=function(e){return{setIsShowing:function(){return e(Tt())},deleteIncomes:function(t){return e(pn(t))},init:function(){return e(mn())}}},hn=Object(l.d)(Object(b.b)((function(e){var t=e.editWalletModal;return{isShowing:t.isShowing,error:t.error,isLoadingIncomes:t.isLoadingIncomes,incomes:t.incomes}}),gn))(tn),yn=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(nt,null),a.a.createElement(vt,null),a.a.createElement(Zt,null),a.a.createElement(en,null),a.a.createElement(hn,null),a.a.createElement(It,null),a.a.createElement(p.Container,null,a.a.createElement(Mt,null),a.a.createElement(xe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var En=n(58),vn={categories:[],isLoadingCategories:!0,isLoading:!0},bn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case T:return _(e,r);case $:return R(e,r);case D:return F(e,r);default:return e}},Sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case $e:return Re(e);case Ae:return Be(e,r);case Ye:return We(e,r);case Ze:return qe(e,r);case He:return Ue(e,r);default:return e}},wn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case at:return ot(e);case mt:return pt(e,r);case lt:return st(e,r);default:return e}},Cn={entity:{totalSum:0,loss:0,income:0},isLoading:!1},On=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case B:return P(e,r);case X:return Q(e,r);case W:return z(e,r);case q:return K(e,r);case U:return J(e,r);default:return e}},In=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case St:return wt(e);case Yt:return Wt(e,r);case Rt:return Gt(e,r);case Ft:return Nt(e,r);default:return e}},jn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case de:return fe(e);case Se:return we(e,r);case ye:return Ee(e,r);case ce:return ie(e,r);case re:return ae(e,r);case pe:return ge(e,r);default:return e}},xn={isShowing:!1,isLoadingIncomes:!1,error:null,incomes:[]},kn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xn,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case kt:return Lt(e);case nn:return rn(e,r);case on:return cn(e,r);case ln:return sn(e,r);default:return e}},Ln=Object(l.c)({categories:bn,addCostsModal:Sn,addCategoryModal:wn,addIncomesModal:In,wallet:On,editCategoryModal:jn,editWalletModal:kn}),Tn=Object(l.e)(Ln,Object(l.a)(En.a));String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b.a,{store:Tn},a.a.createElement(yn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){e.exports=n(274)},69:function(e,t,n){},75:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.6171df3f.chunk.js.map