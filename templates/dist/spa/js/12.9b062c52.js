(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"13c6":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[o("q-table",{staticClass:"shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[o("div",{staticClass:"flex items-center"},[o("div",{staticClass:"q-mr-md"},[e._v(e._s(e.$t("download_center.createTime")))]),o("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:e.interval},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[o("q-date",{attrs:{range:""},model:{value:e.createDate1,callback:function(t){e.createDate1=t},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:e.createDate2,callback:function(t){e.createDate2=t},expression:"createDate2"}}),o("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[o("q-btn",{attrs:{label:e.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(t){return e.reset()}}},[o("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("download_center.reset")))])],1),o("q-btn",{attrs:{label:e.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(t){return e.downloadlistData()}}},[o("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("downloadasnlisttip")))])],1)],1)],1)]},proxy:!0},{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t}},[o("q-td",{key:"goods_code",attrs:{props:t}},[e._v(e._s(t.row.goods_code))]),o("q-td",{key:"goods_desc",attrs:{props:t}},[e._v(e._s(t.row.goods_desc))]),o("q-td",{key:"goods_supplier",attrs:{props:t}},[e._v(e._s(t.row.goods_supplier))]),o("q-td",{key:"goods_weight",attrs:{props:t}},[e._v(e._s(t.row.goods_weight))]),o("q-td",{key:"goods_w",attrs:{props:t}},[e._v(e._s(t.row.goods_w))]),o("q-td",{key:"goods_d",attrs:{props:t}},[e._v(e._s(t.row.goods_d))]),o("q-td",{key:"goods_h",attrs:{props:t}},[e._v(e._s(t.row.goods_h))]),o("q-td",{key:"unit_volume",attrs:{props:t}},[e._v(e._s(t.row.unit_volume))]),o("q-td",{key:"goods_unit",attrs:{props:t}},[e._v(e._s(t.row.goods_unit))]),o("q-td",{key:"goods_class",attrs:{props:t}},[e._v(e._s(t.row.goods_class))]),o("q-td",{key:"goods_brand",attrs:{props:t}},[e._v(e._s(t.row.goods_brand))]),o("q-td",{key:"goods_color",attrs:{props:t}},[e._v(e._s(t.row.goods_color))]),o("q-td",{key:"goods_shape",attrs:{props:t}},[e._v(e._s(t.row.goods_shape))]),o("q-td",{key:"goods_specs",attrs:{props:t}},[e._v(e._s(t.row.goods_specs))]),o("q-td",{key:"goods_origin",attrs:{props:t}},[e._v(e._s(t.row.goods_origin))]),o("q-td",{key:"goods_cost",attrs:{props:t}},[e._v(e._s(t.row.goods_cost))]),o("q-td",{key:"goods_price",attrs:{props:t}},[e._v(e._s(t.row.goods_price))]),o("q-td",{key:"creater",attrs:{props:t}},[e._v(e._s(t.row.creater))]),o("q-td",{key:"create_time",attrs:{props:t}},[e._v(e._s(t.row.create_time))]),o("q-td",{key:"update_time",attrs:{props:t}},[e._v(e._s(t.row.update_time))])],1)]}}])})],1),[o("div",{staticClass:"q-pa-lg flex flex-center"},[o("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[o("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("previous")))])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[o("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("next")))])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)]],2)},a=[],i=(o("5319"),o("3004")),n=o("bd4c"),r=o("a357"),d=(o("a639"),o("18d6")),l={name:"Pageasnlist",data(){return{login_name:"",authin:"0",pathname:"goods/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"goods_code",required:!0,label:this.$t("goods.view_goodslist.goods_code"),align:"left",field:"goods_code"},{name:"goods_desc",label:this.$t("goods.view_goodslist.goods_desc"),field:"goods_desc",align:"center"},{name:"goods_supplier",label:this.$t("goods.view_goodslist.goods_supplier"),field:"goods_supplier",align:"center"},{name:"goods_weight",label:this.$t("goods.view_goodslist.goods_weight"),field:"goods_weight",align:"center"},{name:"goods_w",label:this.$t("goods.view_goodslist.goods_w"),field:"goods_w",align:"center"},{name:"goods_d",label:this.$t("goods.view_goodslist.goods_d"),field:"goods_d",align:"center"},{name:"goods_h",label:this.$t("goods.view_goodslist.goods_h"),field:"goods_h",align:"center"},{name:"unit_volume",label:this.$t("goods.view_goodslist.unit_volume"),field:"unit_volume",align:"center"},{name:"goods_unit",label:this.$t("goods.view_goodslist.goods_unit"),field:"goods_unit",align:"center"},{name:"goods_class",label:this.$t("goods.view_goodslist.goods_class"),field:"goods_class",align:"center"},{name:"goods_brand",label:this.$t("goods.view_goodslist.goods_brand"),field:"goods_brand",align:"center"},{name:"goods_color",label:this.$t("goods.view_goodslist.goods_color"),field:"goods_color",align:"center"},{name:"goods_shape",label:this.$t("goods.view_goodslist.goods_shape"),field:"goods_shape",align:"center"},{name:"goods_specs",label:this.$t("goods.view_goodslist.goods_specs"),field:"goods_specs",align:"center"},{name:"goods_origin",label:this.$t("goods.view_goodslist.goods_origin"),field:"goods_origin",align:"center"},{name:"goods_cost",label:this.$t("goods.view_goodslist.goods_cost"),field:"goods_cost",align:"center"},{name:"goods_price",label:this.$t("goods.view_goodslist.goods_price"),field:"goods_price",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",searchUrl:"",downloadUrl:"goods/file/"}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(e){e&&(e.to?(this.createDate2=`${e.from} - ${e.to}`,this.date_range=`${e.from},${e.to} 23:59:59`,this.searchUrl=this.pathname+"?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"file/?create_time__range="+this.date_range):(this.createDate2=`${e}`,this.dateArray=e.split("/"),this.searchUrl=this.pathname+"?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"file/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var e=this;Object(i["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;Object(i["e"])(e.searchUrl).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;Object(i["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;Object(i["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},downloadlistData(){var e=this;Object(i["f"])(e.downloadUrl).then((t=>{var o=Date.now(),s=n["b"].formatDate(o,"YYYYMMDDHHmmssSSS");const a=Object(r["a"])(e.pathname+"list"+s+".csv","\ufeff"+t.data,"text/csv");!0!==a&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="goods/file/",this.createDate2=""}},created(){var e=this;d["a"].has("openid")?e.openid=d["a"].getItem("openid"):(e.openid="",d["a"].set("openid","")),d["a"].has("login_name")?e.login_name=d["a"].getItem("login_name"):(e.login_name="",d["a"].set("login_name","")),d["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},_=l,c=o("42e1"),g=o("93a4"),p=o("eaac"),h=o("27f9"),m=o("0016"),u=o("7cbe"),v=o("52ee"),w=o("e7a9"),f=o("9c40"),b=o("05c0"),y=o("bd08"),q=o("db86"),$=o("eebe"),x=o.n($),k=Object(c["a"])(_,s,a,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(k);t["default"]=k.exports;x()(k,"components",{QTable:p["a"],QInput:h["a"],QIcon:m["a"],QPopupProxy:u["a"],QDate:v["a"],QBtnGroup:w["a"],QBtn:f["a"],QTooltip:b["a"],QTr:y["a"],QTd:q["a"]})},"2bbe":function(e,t){},"93a4":function(e,t,o){"use strict";var s=o("2bbe"),a=o.n(s);t["default"]=a.a}}]);