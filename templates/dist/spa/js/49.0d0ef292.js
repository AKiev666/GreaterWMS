(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{2874:function(t,e){},daf3:function(t,e,a){"use strict";var o=a("2874"),i=a.n(o);e["default"]=i.a},df27:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],staticClass:"shadow-24",style:{width:t.width,height:t.height}},[a("q-card-section",[a("q-input",{attrs:{dense:"",type:"text",label:t.bin_name_label,readonly:"",disabled:""},model:{value:t.bin_scan,callback:function(e){t.bin_scan=e},expression:"bin_scan"}})],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(t._s(t.bin_name_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_desc_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.pick_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.picked_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.bin_size_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.bin_property_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.create_time_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.update_time_label))])])]),a("tbody",[t._l(t.table_list,(function(e,o){return a("tr",{key:o},[a("td",{staticClass:"text-left"},[t._v(t._s(e.bin_name))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_desc))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.pick_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.picked_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.bin_size))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.bin_property))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.create_time))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.update_time))])])}))],2)])],1),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:t.barscan},on:{input:[function(e){e.target.composing||(t.barscan=e.target.value)},function(e){return t.datachange()}]}})])],1),a("q-page-sticky",{directives:[{name:"show",rawName:"v-show",value:2===t.device,expression:"device === 2"}],attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{icon:"add",direction:"up",color:"accent","vertical-actions-align":"left"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab8.top,"margin-bottom":t.fab8.bottom,"margin-left":t.fab8.left,"margin-right":t.fab8.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_locationquery"),"label-style":"background-color:transparent",to:"urovo_locationquery"}},[a("q-img",{attrs:{src:"statics/stock/stocklist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab8.top,"margin-bottom":t.fab8.bottom,"margin-left":t.fab8.left,"margin-right":t.fab8.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_locationquery"),"label-style":"background-color:transparent",to:"zebra_locationquery"}},[a("q-img",{attrs:{src:"statics/stock/stocklist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab7.top,"margin-bottom":t.fab7.bottom,"margin-left":t.fab7.left,"margin-right":t.fab7.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_goodsquery"),"label-style":"background-color:transparent",to:"urovo_goodslist"}},[a("q-img",{attrs:{src:"statics/goods/goodslist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab7.top,"margin-bottom":t.fab7.bottom,"margin-left":t.fab7.left,"margin-right":t.fab7.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_goodsquery"),"label-style":"background-color:transparent",to:"zebra_goodslist"}},[a("q-img",{attrs:{src:"statics/goods/goodslist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab6.top,"margin-bottom":t.fab6.bottom,"margin-left":t.fab6.left,"margin-right":t.fab6.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",icon:"img:statics/stock/cyclecount.png",label:t.$t("scan.scan_inventory"),"label-style":"background-color:transparent",to:"urovo_cyclecount"}},[a("q-img",{attrs:{src:"statics/stock/cyclecount.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab6.top,"margin-bottom":t.fab6.bottom,"margin-left":t.fab6.left,"margin-right":t.fab6.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",icon:"img:statics/stock/cyclecount.png",label:t.$t("scan.scan_inventory"),"label-style":"background-color:transparent",to:"zebra_cyclecount"}},[a("q-img",{attrs:{src:"statics/stock/cyclecount.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab5.top,"margin-bottom":t.fab5.bottom,"margin-left":t.fab5.left,"margin-right":t.fab5.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_movetobin"),"label-style":"background-color:transparent",to:"urovo_movetobin"}},[a("q-img",{attrs:{src:"statics/icons/movetobin.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab5.top,"margin-bottom":t.fab5.bottom,"margin-left":t.fab5.left,"margin-right":t.fab5.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_movetobin"),"label-style":"background-color:transparent",to:"zebra_movetobin"}},[a("q-img",{attrs:{src:"statics/icons/movetobin.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab4.top,"margin-bottom":t.fab4.bottom,"margin-left":t.fab4.left,"margin-right":t.fab4.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_shipping"),"label-style":"background-color:transparent",to:"urovo_shipping"}},[a("q-img",{attrs:{src:"statics/icons/car.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab4.top,"margin-bottom":t.fab4.bottom,"margin-left":t.fab4.left,"margin-right":t.fab4.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_shipping"),"label-style":"background-color:transparent",to:"zebra_shipping"}},[a("q-img",{attrs:{src:"statics/icons/car.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab3.top,"margin-bottom":t.fab3.bottom,"margin-left":t.fab3.left,"margin-right":t.fab3.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_picking"),"label-style":"background-color:transparent",to:"urovo_picking"}},[a("q-img",{attrs:{src:"statics/outbound/picked.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab3.top,"margin-bottom":t.fab3.bottom,"margin-left":t.fab3.left,"margin-right":t.fab3.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_picking"),"label-style":"background-color:transparent",to:"zebra_picking"}},[a("q-img",{attrs:{src:"statics/outbound/picked.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab2.top,"margin-bottom":t.fab2.bottom,"margin-left":t.fab2.left,"margin-right":t.fab2.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_uptobin"),"label-style":"background-color:transparent",to:"urovo_uptobin"}},[a("q-img",{attrs:{src:"statics/inbound/presortstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab2.top,"margin-bottom":t.fab2.bottom,"margin-left":t.fab2.left,"margin-right":t.fab2.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_uptobin"),"label-style":"background-color:transparent",to:"zebra_uptobin"}},[a("q-img",{attrs:{src:"statics/inbound/presortstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab1.top,"margin-bottom":t.fab1.bottom,"margin-left":t.fab1.left,"margin-right":t.fab1.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_sorting"),"label-style":"background-color:transparent",to:"urovo_sorting"}},[a("q-img",{attrs:{src:"statics/inbound/preloadstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab1.top,"margin-bottom":t.fab1.bottom,"margin-left":t.fab1.left,"margin-right":t.fab1.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_sorting"),"label-style":"background-color:transparent",to:"zebra_sorting"}},[a("q-img",{attrs:{src:"statics/inbound/preloadstock.png"}})],1)],1)],1)],1)},i=[],s=a("3004"),r=a("18d6"),n=a("0967"),l=a("09f9"),c="false";function b(t,e){var a={};a[t]=e,a.SEND_RESULT=c,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:a},(function(){}),(function(){}))}function h(){window.plugins.intentShim.unregisterBroadcastReceiver()}function g(t){}function d(t){for(var e=0;e<t.length;e++)t[e].SCANNER_NAME,e<t.length-1&&", "}function m(t){}function p(t,e){var a=t.extras["com.symbol.datawedge.data_string"];document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=a,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}var _={name:"Pagezebra_locationquery",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",separator:"cell",loading:!1,device:r["a"].getItem("device"),device_name:r["a"].getItem("device_name"),width:"",height:"",scroll_height:"",table_list:[],bin_name_label:this.$t("warehouse.view_binset.bin_name"),goods_code_label:this.$t("stock.view_stocklist.goods_code"),goods_desc_label:this.$t("stock.view_stocklist.goods_desc"),goods_qty_label:this.$t("stock.view_stocklist.onhand_stock"),pick_qty_label:this.$t("stock.view_stocklist.pick_stock"),picked_qty_label:this.$t("stock.view_stocklist.picked_stock"),bin_size_label:this.$t("warehouse.view_binset.bin_size"),bin_property_label:this.$t("warehouse.view_binset.bin_property"),create_time_label:this.$t("createtime"),update_time_label:this.$t("updatetime"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},fab:!1,touchheight:(l["a"].width-50)/5+"px",touchwidth:(l["a"].width-50)/5+"px",fab1:{top:"",bottom:"",left:"",right:""},fab2:{top:"",bottom:"",left:"",right:""},fab3:{top:"",bottom:"",left:"",right:""},fab4:{top:"",bottom:"",left:"",right:""},fab5:{top:"",bottom:"",left:"",right:""},fab6:{top:"",bottom:"",left:"",right:""},fab7:{top:"",bottom:"",left:"",right:""},fab8:{top:"",bottom:"",left:"",right:""},barscan:"",bin_scan:""}},methods:{datachange(){var t=this;console.log(t.barscan),r["a"].has("auth")&&Object(s["e"])("scanner/?bar_code="+t.barscan,{}).then((e=>{"BINSET"===e.results[0].mode?(t.bin_scan=e.results[0].code,t.getList(e.results[0].code)):t.notify({message:"Please Scan Right BarCode",icon:"close",color:"negative"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getList(t){var e=this;r["a"].has("auth")&&Object(s["e"])(e.pathname+"?bin_name="+t,{}).then((t=>{e.table_list=t.results})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},scanEvents(){var t=this;document.addEventListener("deviceready",t.onDeviceReady,!1)},onDeviceReady(){var t=this;t.receivedEvent("deviceready"),t.registerBroadcastReceiver(),t.determineVersion()},onPause:function(){h()},onResume(){var t=this;t.registerBroadcastReceiver()},receivedEvent(t){},startSoftTrigger(){b("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","START_SCANNING")},stopSoftTrigger(){b("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","STOP_SCANNING")},determineVersion(){b("com.symbol.datawedge.api.GET_VERSION_INFO","")},setDecoders(){var t={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",PARAM_LIST:{scanner_selection:"auto"}}};b("com.symbol.datawedge.api.SET_CONFIG",t)},registerBroadcastReceiver(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.greaterwms.app.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},(function(t){if(t.extras.hasOwnProperty("RESULT_INFO")){var e=t.extras.RESULT+" ("+t.extras.COMMAND.substring(t.extras.COMMAND.lastIndexOf(".")+1,t.extras.COMMAND.length)+")";g(e.toLowerCase())}if(t.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var a=t.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"],o=a.DATAWEDGE;if(o>="6.3"&&(b("com.symbol.datawedge.api.CREATE_PROFILE","wms"),b("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),b("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")),o>="6.4"){var i={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"com.greaterwms.app",ACTIVITY_LIST:["*"]}]};b("com.symbol.datawedge.api.SET_CONFIG",i);var s={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.greaterwms.app.ACTION",intent_delivery:"2"}}};b("com.symbol.datawedge.api.SET_CONFIG",s),setTimeout((function(){b("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")}),1e3)}o>="6.5"&&(c="true")}else if(t.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var r=t.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];d(r)}else if(t.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var n=t.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];m(n)}else t.extras.hasOwnProperty("RESULT_INFO")||p(t,(new Date).toLocaleString())}))}},created(){var t=this;r["a"].has("openid")?t.openid=r["a"].getItem("openid"):(t.openid="",r["a"].set("openid","")),r["a"].has("login_name")?t.login_name=r["a"].getItem("login_name"):(t.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;n["b"].is.electron?t.height=String(l["a"].height)+"px":n["b"].is.cordova?(t.device_name=r["a"].getItem("device_name"),2===r["a"].getItem("device")&&(window.plugins.insomnia.keepAwake(),"Urovo"!==r["a"].getItem("device_name")&&"Zebra Technologies"!==r["a"].getItem("device_name")||(t.fab1.top="0px",t.fab1.bottom=0-(l["a"].width-50)/5+"px",t.fab1.left=(l["a"].width-50)/6-l["a"].width/12*10+"px",t.fab1.right="0px",t.fab2.top="0px",t.fab2.bottom=0-(l["a"].width-50)/5+"px",t.fab2.left=((l["a"].width-50)/6-l["a"].width/12*10)/2+"px",t.fab2.right="0px",t.fab3.top="0px",t.fab3.bottom="0px",t.fab3.left="-0px",t.fab3.right="0px",t.fab4.top=(l["a"].width-50)/5+"px",t.fab4.bottom=0-(l["a"].width-50)/5+"px",t.fab4.left=(l["a"].width-50)/6-l["a"].width/12*10+"px",t.fab4.right="0px",t.fab5.top="0px",t.fab5.bottom=0-(l["a"].width-50)/5+"px",t.fab5.left=((l["a"].width-50)/6-l["a"].width/12*10)/2+"px",t.fab5.right="0px",t.fab6.top="0px",t.fab6.bottom="0px",t.fab6.left="0px",t.fab6.right="0px",t.fab7.top=(l["a"].width-50)/5+"px",t.fab7.bottom=0-(l["a"].width-50)/5+"px",t.fab7.left=(l["a"].width-50)/6-l["a"].width/12*10+"px",t.fab7.right="0px",t.fab8.top="0px",t.fab8.bottom=(l["a"].width-50)/8+"px",t.fab8.left=((l["a"].width-50)/6-l["a"].width/12*10)/2+"px",t.fab8.right="0px"))):t.height=l["a"].height+"px",t.width=1*l["a"].width+"px",t.height=l["a"].height-50+"px",t.scroll_height=l["a"].height-175+"px",t.barscan="",t.bin_scan="",t.scanEvents()},beforeDestroy(){var t=this;window.removeEventListener("deviceready",t.onDeviceReady,!1)}},f=_,v=a("42e1"),u=a("daf3"),w=a("9989"),x=a("f09f"),y=a("a370"),E=a("27f9"),k=a("4983"),N=a("2bb1"),T=a("eb85"),q=a("4b7e"),I=a("de5e"),C=a("c294"),A=a("72db"),R=a("068f"),S=a("eebe"),O=a.n(S),L=Object(v["a"])(f,o,i,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(L);e["default"]=L.exports;O()(L,"components",{QPage:w["a"],QCard:x["a"],QCardSection:y["a"],QInput:E["a"],QScrollArea:k["a"],QMarkupTable:N["a"],QSeparator:T["a"],QCardActions:q["a"],QPageSticky:I["a"],QFab:C["a"],QFabAction:A["a"],QImg:R["a"]})}}]);