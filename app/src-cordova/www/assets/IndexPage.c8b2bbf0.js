import{Q as m}from"./QPage.9412fb74.js";import{_ as p,az as b,J as C,c as o,M as u,O as v,R as x,$ as g,aA as r,Y as a,U as h}from"./index.dfd0e5e3.js";const w=b({name:"IndexPage",setup(){const s=C(),n=o({get:()=>s.state.settings.slogan,set:e=>{s.commit("settings/Slogan",e)}}),i=o({get:()=>s.state.fabchange.fab1}),l=o({get:()=>s.state.fabchange.fab2}),f=o({get:()=>s.state.fabchange.fab3}),c=o({get:()=>s.state.fabchange.fab4});return{fab1:i,fab2:l,fab3:f,fab4:c,slogan:n,hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass(e,t){this.hasClass(e,t)||(e.className+=" "+t)},toggleClass(e,t){this.hasClass(e,t)?this.removeClass(e,t):this.addClass(e,t)},removeClass(e,t){if(this.hasClass(e,t)){var d=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(d," ")}},toggleVc(){const e=new Date().getTime();if(e-this.lastClickTime<3e3?this.count++:this.count=0,this.lastClickTime=e,this.count>=10){let t=document.getElementById("__vconsole");this.toggleClass(t,"show"),this.count=0}}}}}),$={class:"q-mb-xl",style:{color:"#4C5875","text-align":"center"}},y=a("div",{style:{"font-weight":"bold","font-size":"50px","letter-spacing":"10px"}},"WELCOME",-1),_={style:{"font-size":"18px","letter-spacing":"2px"}},N=a("div",{class:"flex flex-center"},null,-1);function S(s,n,i,l,f,c){return u(),v(m,{class:"flex flex-center"},{default:x(()=>[g(a("div",{style:{"margin-top":"-7%"},class:"vc-tigger",onClick:n[0]||(n[0]=(...e)=>s.toggleVc&&s.toggleVc(...e))},[a("div",$,[y,a("div",_,h(s.$t("index.index_title")),1)]),N],512),[[r,!s.fab1&&!s.fab2&&!s.fab3&&!s.fab4]]),g(a("div",{style:{position:"absolute",right:"3%",bottom:"150px","font-family":"SourceHanSansCN","font-size":"16px",color:"#4C5875"}},"\u2014\u2014 \xA0\xA0 "+h(s.slogan)+" \xA0 \xA0\u2014\u2014",513),[[r,!s.fab1&&!s.fab2&&!s.fab3&&!s.fab4]])]),_:1})}var z=p(w,[["render",S]]);export{z as default};