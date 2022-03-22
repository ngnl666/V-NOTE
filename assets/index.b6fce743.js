var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&n(e,a,t[a]);return e},l=(e,s)=>t(e,a(s));import{i as d,g as c,r as u,u as m,d as g,a as p,b as f,s as h,c as y,e as N,f as w,h as I,j as _,k as v,l as k,m as S,n as b,w as O,o as x,p as L,q as E,t as T,v as D,x as A,y as P,z as j,A as M,B as V,C as $,D as C,E as J,F as R,G as B,H as U,I as H,J as z,K as q,L as F,M as G,N as K}from"./vendor.5dda48dc.js";const Q=c(d({apiKey:"AIzaSyCHnkgoD0oA2_T1SYjF02smVGmkcUe9wi4",appId:"1:616137369154:web:000569f9a8cc1594566fdb",authDomain:"v-note-86a34.firebaseapp.com",measurementId:"G-EBZJJQQNLG",messagingSenderId:"616137369154",projectId:"v-note-86a34",storageBucket:"v-note-86a34.appspot.com"})),W=f(),Y=async(e,t,a)=>{try{return await y(W,e,t),await N(W.currentUser,{displayName:a}),await w(W.currentUser),{type:"success",msg:"註冊成功，請至信箱查收驗證信！"}}catch(s){return{type:"error",msg:"此信箱已被使用！"}}},Z=async(e,t)=>{try{const a=await h(W,e,t),{accessToken:s,displayName:o,email:r,emailVerified:n,uid:i}=a.user;if(localStorage.setItem("userInfo",JSON.stringify({accessToken:s,displayName:o,email:r,emailVerified:n,uid:i})),!n)return{type:"error",msg:"信箱尚未驗證！"}}catch(a){return{type:"error",msg:"帳號或密碼錯誤！"}}};let X;const ee={},te=function(e,t){if(!t||0===t.length)return e();if(void 0===X){const e=document.createElement("link").relList;X=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/V-NOTE/${e}`)in ee)return;ee[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":X,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},ae=[{path:"/",name:"Home",component:()=>te((()=>import("./Home.72ed1192.js")),["assets/Home.72ed1192.js","assets/Home.58188013.css","assets/vendor.5dda48dc.js","assets/Note.f654eeae.js","assets/Note.a59a175a.css","assets/format.31a05643.js","assets/sweetalert2.b9aa7158.js"])},{path:"/all",name:"all",component:()=>te((()=>import("./AllNote.ef54ab75.js")),["assets/AllNote.ef54ab75.js","assets/AllNote.6ab90543.css","assets/vendor.5dda48dc.js","assets/vue-loading.67b0a97d.js","assets/vue-loading.ea296743.css","assets/sweetalert2.b9aa7158.js","assets/format.31a05643.js","assets/NoteTopBar.5c7aac5e.js"]),beforeEnter:(e,t)=>{if(!ge.state.userInfo)return ge.setAlertMsg("error","請先登入後即可造訪！"),se.push({name:"login"}),!1}},{path:"/login",name:"login",component:()=>te((()=>import("./Login.d613b9fb.js")),["assets/Login.d613b9fb.js","assets/vendor.5dda48dc.js","assets/vue-loading.67b0a97d.js","assets/vue-loading.ea296743.css"])},{path:"/register",name:"register",component:()=>te((()=>import("./Register.659c245c.js")),["assets/Register.659c245c.js","assets/vendor.5dda48dc.js"])},{path:"/explore",name:"explore",component:()=>te((()=>import("./Explore.821600ee.js")),["assets/Explore.821600ee.js","assets/Explore.cfdfb04e.css","assets/vendor.5dda48dc.js","assets/vue-loading.67b0a97d.js","assets/vue-loading.ea296743.css","assets/format.31a05643.js"])},{path:"/current",name:"current",component:()=>te((()=>import("./CurrentNote.e1875a57.js")),["assets/CurrentNote.e1875a57.js","assets/CurrentNote.155f770a.css","assets/vue-loading.67b0a97d.js","assets/vue-loading.ea296743.css","assets/vendor.5dda48dc.js","assets/Note.f654eeae.js","assets/Note.a59a175a.css","assets/format.31a05643.js","assets/sweetalert2.b9aa7158.js"]),beforeEnter:(e,t)=>{"explore"===t.name&&localStorage.setItem("isShowNextPage",!1),"all"===t.name&&localStorage.setItem("isShowNextPage",!0)},children:[{path:"view/:id",component:()=>te((()=>import("./View.c0d6107b.js")),["assets/View.c0d6107b.js","assets/View.20ddc52e.css","assets/vendor.5dda48dc.js","assets/format.31a05643.js","assets/NoteTopBar.5c7aac5e.js"])}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>te((()=>import("./NotFound.c6bed3b7.js")),["assets/NotFound.c6bed3b7.js","assets/vendor.5dda48dc.js"])}],se=_({history:v(),routes:ae}),oe=k.create({baseURL:"https://v-note-mongo.herokuapp.com/api/",headers:{"Content-Type":"application/json; charset=utf-8"}}),re=S({userInfo:{},myNotes:[],shareNotes:[],selectedTags:[],likedNoteList:JSON.parse(localStorage.getItem("likedNotes"))||[],alertMsg:{type:"",msg:"",exist:!1},currNote:{},currImage:[],mode:"",isOpen:!1,isSort:!1,isEdit:!1,keyword:"",showModal:!1,loadingStatus:{isLoading:!1,fullPage:!0,blur:"25px",color:"#68d391",loader:"dots"},getLatestNote:b((()=>re.myNotes.slice().sort(((e,t)=>Date.parse(t.createdAt).valueOf()-Date.parse(e.createdAt).valueOf())).slice(0,5))),filteredNote:b((()=>re.myNotes.filter((e=>re.keyword.includes("#")&&e.tags?e.tags.includes(re.keyword.slice(1)):"★"===re.keyword?e.stared:e.title.includes(re.keyword)||e.content.includes(re.keyword))))),filteredSharedNote:b((()=>re.shareNotes.filter((e=>{const t=e.Notes[0].tags.filter((e=>-1!==re.selectedTags.indexOf(e)));return!re.selectedTags.length||!!t.length}))))});O((()=>re.myNotes),(e=>{localStorage.setItem("stared",JSON.stringify(e))}),{deep:!0}),O((()=>re.likedNoteList),(e=>{localStorage.setItem("likedNotes",JSON.stringify(re.likedNoteList))}),{deep:!0});const ne=e=>re.currNote=e,ie=(e,t)=>{re.alertMsg={type:e,msg:t,exist:!0},setTimeout((()=>re.alertMsg.exist=!1),2e3)},le=()=>re.currImage=[],de=async()=>{re.loadingStatus.isLoading=!0;const e=await(t=re.userInfo.uid,oe.get(`/note/all/${t}`).then((e=>e)).catch((e=>e)));var t;const a=JSON.parse(localStorage.getItem("stared"))||[];if(!e)return re.loadingStatus.isLoading=!1,void ie("error","取得文章列表失敗");re.myNotes=e.data,a.forEach((e=>{re.myNotes.forEach(((t,a)=>{t._id===e._id&&(e.stared?re.myNotes[a].stared=!0:re.myNotes[a].stared=!1)}))})),re.loadingStatus.isLoading=!1},ce=async e=>{const t=await(e=>oe.get(`/note/${e}`).then((e=>e)).catch((e=>e)))(e);if(!t)return re.loadingStatus.isLoading=!1,void ie("error","取得文章失敗");ne(t.data),se.push({params:{id:e}})},ue=async e=>{await(e=>oe.delete(`/publish/${e}`).then((e=>e)).catch((e=>e)))(e)},me=async e=>{await(async e=>{const t=u(Q,e);await g(t).then((()=>console.log("刪除圖片成功"))).catch((e=>console.log("刪除圖片失敗")))})(e.fileName),re.currImage.splice(re.currImage.findIndex((t=>t.fileName===e.fileName)),1)};var ge={state:x(re),addStar:(e,t)=>{re.myNotes.find((t=>t._id===e)).stared=t,t&&ie("success","文章已加入收藏")},deleteOneNote:async e=>{const t=await(a=e._id,oe.delete(`/note/${a}`).then((e=>e)).catch((e=>e)));var a;if(ue(e._id),!t)return re.loadingStatus.isLoading=!1,void ie("error","刪除文章失敗");ie("success","刪除文章成功"),e.image.forEach((e=>me(e))),de(),se.push({name:"all"})},editNote:async(e,t)=>{re.loadingStatus.isLoading=!0;if(!(await((e,t)=>oe.put(`/note/${e}`,{data:t}).then((e=>e)).catch((e=>e)))(e,t)))return re.loadingStatus.isLoading=!1,void ie("error","編輯文章失敗");re.loadingStatus.isLoading=!1,ie("success","編輯文章成功"),ce(e)},getTime:e=>`${new Date(e).toISOString().split("T")[0]} ${new Date(e).toLocaleTimeString("zh-tw")}`,getAllNote:de,getOneNote:ce,getPaginate:async e=>{re.loadingStatus.isLoading=!0;const t=await(e=>oe.get(`/publish/${e}`).then((e=>e)).catch((e=>e)))(e);if(!t.data)return ie("error","取得文章列表失敗"),void(re.loadingStatus.isLoading=!1);re.loadingStatus.isLoading=!1,re.shareNotes=[...re.shareNotes,...t.data]},likedNote:async(e,t)=>{const a=await(e=>oe.get(`/publish/note/${e}`).then((e=>e)).catch((e=>e)))(e);a.data.like+=t;const s=await((e,t)=>oe.put(`/publish/${e}`,t).then((e=>e)).catch((e=>e)))(a.data._id,{data:a.data});s?re.shareNotes.find((e=>e._id===s.data._id)).like=s.data.like:ie("error","點擊愛心失敗！")},loginWithDemoAccount:()=>{Z("e3e38888@gmail.com","asdf1234"),ie("success","登入成功！"),se.push({name:"Home"})},nextPage:(e,t)=>{const a=re.myNotes.findIndex((e=>e._id===t));a+e<0?ce(re.myNotes[re.myNotes.length-1]._id):a+e>re.myNotes.length-1?ce(re.myNotes[0]._id):ce(re.myNotes[a+e]._id)},publishNote:async e=>{re.loadingStatus.isLoading=!0;if(!(await(e=>oe.post("/publish",e).then((e=>e)).catch((e=>e)))(e)))return ie("error","分享文章失敗！"),void(re.loadingStatus.isLoading=!1);de(),re.loadingStatus.isLoading=!1},removeImg:me,removeCurrImage:le,removePublish:ue,removeShareNotes:()=>re.shareNotes=[],setAlertMsg:ie,setCurrImage:e=>re.currImage=e,setCurrNote:ne,setDarkMode:e=>{e?(re.mode="dark",document.documentElement.classList.add("dark"),document.querySelector(".controlLabel").dataset.content="🌙"):(re.mode="bright",document.documentElement.classList.remove("dark"),document.querySelector(".controlLabel").dataset.content="☀️"),localStorage.setItem("darkmode",JSON.stringify(e))},setIsEdit:e=>re.isEdit=e,setIsLoading:()=>{re.loadingStatus.isLoading=!0,setTimeout((()=>{re.loadingStatus.isLoading=!1}),700)},setIsOpen:e=>re.isOpen=e,setLikedNoteList:(e,t)=>{t?re.likedNoteList.push(e):re.likedNoteList.splice(re.likedNoteList.findIndex((t=>t===e)),1)},setKeyword:e=>re.keyword=e,setShowModal:(e,t)=>{ne(e),re.showModal=t},setSelectedTags:e=>re.selectedTags=e,sortMyNotes:e=>{e?(re.isSort=!0,re.myNotes.sort(((e,t)=>Date.parse(t.createdAt).valueOf()-Date.parse(e.createdAt).valueOf()))):(re.isSort=!1,re.myNotes.sort(((e,t)=>Date.parse(e.createdAt).valueOf()-Date.parse(t.createdAt).valueOf())))},setUserInfo:()=>{const e=JSON.parse(localStorage.getItem("userInfo"));(null==e?void 0:e.uid)?re.userInfo=e:re.userInfo=""},uploadNote:async e=>{var t;await(t=l(i({},e),{image:re.currImage}),oe.post("/note",t).then((e=>e)).catch((e=>e)))?(le(),de()):ie("error","上傳文章失敗")},uploadImg:async e=>{const t=await(async(e,t)=>{const a=u(Q,t);return await m(a,e).then((e=>e))})(e,`images/${(new Date).toISOString()}_${e.name}`),a=await(async e=>{const t=u(Q,e);return await p(t).then((e=>e)).catch((e=>console.log("獲取 url 失敗")))})(t.metadata.fullPath);re.currImage.push({fileName:t.metadata.fullPath,url:a})}};const pe={name:"NavBar"},fe=j("data-v-2e61f37a");L("data-v-2e61f37a");const he={class:"mx-auto my-8"},ye={class:"text-md text-gray-400 flex justify-center space-x-4 md:text-lg dark:text-white"},Ne=M("首頁"),we=M("我的文章"),Ie=M("探索");E();const _e=fe(((e,t,a,s,o,r)=>{const n=T("router-link");return D(),A("div",he,[P("ul",ye,[P("li",null,[P(n,{to:{name:"Home"}},{default:fe((()=>[Ne])),_:1})]),P("li",null,[P(n,{to:{name:"all"}},{default:fe((()=>[we])),_:1})]),P("li",null,[P(n,{to:{name:"explore"}},{default:fe((()=>[Ie])),_:1})])])])}));pe.render=_e,pe.__scopeId="data-v-2e61f37a";const ve={name:"AlertMsg",setup(){const e=V("store"),{state:t}=e;return i({},$(t))}},ke={class:"text-white"};ve.render=function(e,t,a,s,o,r){return D(),A("div",{class:["p-4 rounded-xl fixed right-5 bottom-5 z-50 animate-bounce",{"bg-green-200":"success"===e.alertMsg.type,"bg-red-300":"error"===e.alertMsg.type}]},[P("span",ke,C(e.alertMsg.msg),1)],2)};const Se={name:"App",components:{NavBar:pe,AlertMsg:ve},setup(){const{setDarkMode:e,state:t,setAlertMsg:a,setUserInfo:s}=ge,o=B();let r=J(JSON.parse(localStorage.getItem("darkmode"))),n=J(!1),d=J(!1);return window.addEventListener("scroll",(()=>window.pageYOffset?d.value=!1:d.value=!0)),O((()=>r.value),(t=>{e(t)})),R((()=>{s(),e(r.value)})),U("store",ge),l(i({},$(t)),{darkmode:r,dropdown:n,goTop:()=>window.scrollTo(0,"smooth"),onTop:d,showDropdown:()=>n.value=!n.value,signOut:async()=>{const e=await(async()=>{try{return await I(W),localStorage.setItem("userInfo",JSON.stringify({})),{type:"success",msg:"登出成功！"}}catch(e){return{type:"error",msg:"登出失敗！"}}})();"success"===e.type?(a(e.type,e.msg),o.push({name:"login"})):a(e.type,e.msg)}})}},be=j("data-v-69a41115");L("data-v-69a41115");const Oe={class:"flex justify-between pt-8 px-8"},xe=P("label",{class:"controlLabel after:content-[attr(data-content)]","data-content":"☀️",for:"darkmodeBtn"},null,-1),Le={class:"relative z-50"},Ee={key:0},Te={key:1},De={key:0,class:"w-48 bg-white rounded-md border-2 border-gray-100 shadow-xl absolute right-1 mt-4 py-2 animate__animated animate__fadeIn dark:bg-gray-700"},Ae=P("i",{class:"fas fa-book-open mr-2"},null,-1),Pe=M("我的文章"),je=P("hr",null,null,-1),Me=P("i",{class:"fas fa-sign-in-alt mr-2"},null,-1),Ve=M("登入"),$e=P("i",{class:"fas fa-sign-out-alt mr-2"},null,-1),Ce=M("登出"),Je=P("img",{class:"logoImg mx-auto h-44 pt-8 mb-8 md:h-auto",src:"/V-NOTE/assets/logo.03d6d6da.png",alt:"V-NOTE"},null,-1),Re=P("h1",{class:"text-3xl text-center font-black text-green-500 my-8"}," V-NOTE ",-1),Be=P("i",{class:"fas fa-rocket text-xl relative top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:text-3xl"},null,-1);E();const Ue=be(((e,t,a,s,o,r)=>{const n=T("AlertMsg"),i=T("router-link"),l=T("NavBar"),d=T("router-view");return D(),A("div",{id:"app",onClick:t[5]||(t[5]=F((e=>s.dropdown=!1),["self"]))},[e.alertMsg.exist?(D(),A(n,{key:0})):H("",!0),P("div",Oe,[P("div",null,[z(P("input",{class:"controlBtn",id:"darkmodeBtn",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>s.darkmode=e)},null,512),[[q,s.darkmode]]),xe]),P("div",Le,[P("button",{class:"border-2 rounded-2xl cursor-pointer px-4 py-2 dark:text-white",onClick:t[2]||(t[2]=(...e)=>s.showDropdown&&s.showDropdown(...e))},[e.userInfo.displayName?(D(),A("p",Ee,"歡迎回來 "+C(e.userInfo.displayName),1)):(D(),A("p",Te,"請先登入"))]),s.dropdown?(D(),A("div",De,[P(i,{class:"dropDownItem",to:{name:"all"}},{default:be((()=>[Ae,Pe])),_:1}),je,P(i,{class:"dropDownItem",to:"/login"},{default:be((()=>[Me,Ve])),_:1}),P("a",{class:"dropDownItem cursor-pointer",onClick:t[3]||(t[3]=(...e)=>s.signOut&&s.signOut(...e))},[$e,Ce])])):H("",!0)])]),Je,P(i,{class:"max-w-xl",to:"/"},{default:be((()=>[Re])),_:1}),P(l),P(d),P("div",{class:["goTop w-10 h-10 bg-gray-100 rounded-full cursor-pointer fixed bottom-3 right-5 transition duration-500 md:w-14 md:h-14",{"bg-gray-300":!s.onTop}],onClick:t[4]||(t[4]=(...e)=>s.goTop&&s.goTop(...e))},[Be],2)])}));Se.render=Ue,Se.__scopeId="data-v-69a41115";const{state:He,setIsEdit:ze,setIsOpen:qe,setUserInfo:Fe}=ge;se.beforeEach((async(e,t)=>{if(await Fe(),He.isOpen&&He.userInfo){if(!(t.params.id?confirm("文章尚未編輯完成，確定要離開嗎？"):confirm("文章尚未發布，確定要離開嗎？")))return!1}ze(!1),qe(!1)})),G(Se).use(se).use(K,k).mount("#app");export{Y as c,Z as s};
