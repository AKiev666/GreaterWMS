(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{1588:function(e,t,a){"use strict";var n=a("5da9"),i=a.n(n);t["default"]=i.a},4516:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh")},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"transportation_supplier",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.transportation_supplier"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},model:{value:e.editFormData.transportation_supplier,callback:function(t){e.$set(e.editFormData,"transportation_supplier",t)},expression:"editFormData.transportation_supplier"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"transportation_supplier",attrs:{props:t}},[e._v("\n             "+e._s(t.row.transportation_supplier)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"send_city",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.send_city"),rules:[function(t){return t&&t.length>0||e.error2}]},model:{value:e.editFormData.send_city,callback:function(t){e.$set(e.editFormData,"send_city",e._n(t))},expression:"editFormData.send_city"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"send_city",attrs:{props:t}},[e._v("\n             "+e._s(t.row.send_city)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"receiver_city",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.receiver_city"),rules:[function(t){return t&&t.length>0||e.error3}]},model:{value:e.editFormData.receiver_city,callback:function(t){e.$set(e.editFormData,"receiver_city",e._n(t))},expression:"editFormData.receiver_city"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"receiver_city",attrs:{props:t}},[e._v("\n             "+e._s(t.row.receiver_city)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"weight_fee",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.weight_fee"),rules:[function(t){return t&&t>0||e.error4}]},model:{value:e.editFormData.weight_fee,callback:function(t){e.$set(e.editFormData,"weight_fee",e._n(t))},expression:"editFormData.weight_fee"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"weight_fee",attrs:{props:t}},[e._v("\n             "+e._s(t.row.weight_fee)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"volume_fee",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.volume_fee"),rules:[function(t){return t&&t>0||e.error5}]},model:{value:e.editFormData.volume_fee,callback:function(t){e.$set(e.editFormData,"volume_fee",e._n(t))},expression:"editFormData.volume_fee"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"volume_fee",attrs:{props:t}},[e._v("\n             "+e._s(t.row.volume_fee)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"min_payment",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.min_payment"),rules:[function(t){return t&&t>0||e.error6}]},model:{value:e.editFormData.min_payment,callback:function(t){e.$set(e.editFormData,"min_payment",e._n(t))},expression:"editFormData.min_payment"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"min_payment",attrs:{props:t}},[e._v("\n             "+e._s(t.row.min_payment)+"\n           ")])]:e._e(),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),e.editMode?e.editMode?[t.row.id===e.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("confirmedit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("canceledit"))+"\n              ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return e.editData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("edit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("delete"))+"\n              ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.transportation_supplier"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.transportation_supplier,callback:function(t){e.$set(e.newFormData,"transportation_supplier",t)},expression:"newFormData.transportation_supplier"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.send_city"),rules:[function(t){return t&&t.length>0||e.error2}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.send_city,callback:function(t){e.$set(e.newFormData,"send_city",e._n(t))},expression:"newFormData.send_city"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("finance.view_freight.receiver_city"),rules:[function(t){return t&&t.length>0||e.error3}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.receiver_city,callback:function(t){e.$set(e.newFormData,"receiver_city",e._n(t))},expression:"newFormData.receiver_city"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.weight_fee"),rules:[function(t){return t&&t>0||e.error4}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.weight_fee,callback:function(t){e.$set(e.newFormData,"weight_fee",e._n(t))},expression:"newFormData.weight_fee"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.volume_fee"),rules:[function(t){return t&&t>0||e.error5}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.volume_fee,callback:function(t){e.$set(e.newFormData,"volume_fee",e._n(t))},expression:"newFormData.volume_fee"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("finance.view_freight.min_payment"),rules:[function(t){return t&&t>0||e.error6}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.min_payment,callback:function(t){e.$set(e.newFormData,"min_payment",e._n(t))},expression:"newFormData.min_payment"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       "+e._s(e.$t("deletetip"))+"\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},i=[],r=a("3004"),o=a("18d6"),s={name:"Pagefreight",data(){return{openid:"",login_name:"",authin:"0",pathname:"payment/freight/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"transportation_supplier",required:!0,label:this.$t("finance.view_freight.transportation_supplier"),align:"left",field:"transportation_supplier"},{name:"send_city",label:this.$t("finance.view_freight.send_city"),field:"send_city",align:"center"},{name:"receiver_city",label:this.$t("finance.view_freight.receiver_city"),field:"receiver_city",align:"center"},{name:"weight_fee",label:this.$t("finance.view_freight.weight_fee"),field:"weight_fee",align:"center"},{name:"volume_fee",label:this.$t("finance.view_freight.volume_fee"),field:"volume_fee",align:"center"},{name:"min_payment",label:this.$t("finance.view_freight.min_payment"),field:"min_payment",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{transportation_supplier:"",send_city:"",receiver_city:"",weight_fee:"",volume_fee:"",min_payment:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,error1:this.$t("finance.view_freight.error1"),error2:this.$t("finance.view_freight.error2"),error3:this.$t("finance.view_freight.error3"),error4:this.$t("finance.view_freight.error4"),error5:this.$t("finance.view_freight.error5"),error6:this.$t("finance.view_freight.error6")}},methods:{getList(){var e=this;o["a"].has("auth")&&Object(r["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;o["a"].has("auth")&&Object(r["e"])(e.pathname+"?receiver_city__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;o["a"].has("auth")&&Object(r["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;o["a"].has("auth")&&Object(r["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this;e.newFormData.weight_fee&&e.newFormData.volume_fee&&e.newFormData.min_payment?(e.newFormData.creater=e.login_name,0!==e.newFormData.transportation_supplier.length?Object(r["h"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})):e.$q.notify({message:e.$t("finance.view_freight.error1"),icon:"close",color:"negative"})):e.$q.notify({message:e.$t("notice.valuenullerror"),icon:"close",color:"negative"})},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={transportation_supplier:"",send_city:"",receiver_city:"",weight_fee:"",volume_fee:"",min_payment:"",creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={transportation_supplier:e.transportation_supplier,send_city:e.send_city,receiver_city:e.receiver_city,weight_fee:e.weight_fee,volume_fee:e.volume_fee,min_payment:e.min_payment,creater:t.login_name}},editDataSubmit(){var e=this;Object(r["i"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={transportation_supplier:"",send_city:"",receiver_city:"",weight_fee:"",volume_fee:"",min_payment:"",creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(r["d"])(e.pathname+e.deleteid+"/").then((t=>{e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0}},created(){var e=this;o["a"].has("openid")?e.openid=o["a"].getItem("openid"):(e.openid="",o["a"].set("openid","")),o["a"].has("login_name")?e.login_name=o["a"].getItem("login_name"):(e.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},l=s,c=a("42e1"),d=a("1588"),p=a("eaac"),u=a("e7a9"),_=a("9c40"),m=a("05c0"),f=a("2c91"),h=a("27f9"),v=a("bd08"),g=a("db86"),y=a("24e8"),w=a("f09f"),b=a("d847"),k=a("a370"),q=a("7f67"),x=a("eebe"),$=a.n(x),D=Object(c["a"])(l,n,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(D);t["default"]=D.exports;$()(D,"components",{QTable:p["a"],QBtnGroup:u["a"],QBtn:_["a"],QTooltip:m["a"],QSpace:f["a"],QInput:h["a"],QTr:v["a"],QTd:g["a"],QDialog:y["a"],QCard:w["a"],QBar:b["a"],QCardSection:k["a"]}),$()(D,"directives",{ClosePopup:q["a"]})},"5da9":function(e,t){}}]);