var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,l,s)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s;import{E as u,C as i,B as n,G as d,v as p,x as m,y as c,J as v,V as w,D as f,P as b}from"./vendor.5dda48dc.js";import{c as g}from"./index.f521b942.js";const x={name:"Register",setup(){const e=n("store"),p=d(),{state:m,setAlertMsg:c,loginWithDemoAccount:v}=e;let w=u(""),f=u(""),b=u(""),x=u([]);const y=()=>{!w.value||w.value.length>10?x.value.username="使用者名稱不得為空或大於8個字元":x.value.username=""},h=()=>{/^\S+@\S+\.\S+$/.test(f.value)?x.value.email="":x.value.email="請輸入正確的電子郵件地址"},k=()=>{/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(b.value)?x.value.password="":x.value.password="密碼至少需為8個英文數字"};return O=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&o(e,l,a[l]);if(s)for(var l of s(a))r.call(a,l)&&o(e,l,a[l]);return e})({},i(m)),a(O,l({register:async()=>{if(""===x.value.username&&""===x.value.email&&""===x.value.password){const e=await g(f.value,b.value,w.value);"success"===e.type?(c(e.type,e.msg),p.push({name:"login"})):c(e.type,e.msg)}else y(),h(),k()},validateName:y,validateEmail:h,validatePassword:k,loginWithDemoAccount:v,username:w,email:f,password:b,msg:x}));var O}},y={class:"w-10/12 md:w-1/2 lg:w-4/12 bg-gray-100 rounded-2xl shadow-lg shadow-indigo-500/50 mx-auto mt-28 pt-12 pb-4 relative dark:bg-gray-500"},h=c("div",{class:"w-24 h-24 bg-purple-300 opacity-90 rounded-full absolute -top-1/4 right-1/2 translate-x-1/2 dark:bg-white"},[c("span",{class:"text-5xl text-indigo-600 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"},[c("i",{class:"fas fa-user"})])],-1),k=c("h2",{class:"text-center text-xl tracking-wider mb-6 dark:text-white"}," REGISTER ",-1),O={class:"w-10/12 mx-auto relative mb-4"},P=c("label",{class:"p-2 pl-4 rounded-full absolute",for:"user_name"},[c("i",{class:"fas fa-pen text-purple-300"})],-1),j={class:"text-red-400"},A={class:"w-10/12 mx-auto relative mb-4"},E=c("label",{class:"p-2 pl-4 rounded-full absolute",for:"user_email"},[c("i",{class:"fas fa-envelope text-purple-300"})],-1),D={class:"text-red-400"},_={class:"w-10/12 mx-auto relative mb-6"},S=c("label",{class:"p-2 pl-4 rounded-full absolute",for:"user_password"},[c("i",{class:"fas fa-lock text-purple-300"})],-1),B={class:"text-red-400"},V={class:"w-8/12 md:w-2/6 lg:w-3/12 bg-gray-300 rounded-xl cursor-pointer mx-auto mb-10 -mt-2 py-2 hover:bg-gray-100"};x.render=function(e,a,l,s,t,r){return p(),m(b,null,[c("div",y,[h,k,c("div",O,[P,v(c("input",{class:"w-full pl-10 focus:border-purple-500",type:"text",name:"name",id:"user_name",autocomplete:"off",placeholder:"your name",required:"","onUpdate:modelValue":a[1]||(a[1]=e=>s.username=e),onBlur:a[2]||(a[2]=(...e)=>s.validateName&&s.validateName(...e))},null,544),[[w,s.username]]),c("span",j,f(s.msg.username),1)]),c("div",A,[E,v(c("input",{class:"w-full pl-10 focus:border-purple-500",type:"email",name:"email",id:"user_email",autocomplete:"off",placeholder:"email",required:"","onUpdate:modelValue":a[3]||(a[3]=e=>s.email=e),onBlur:a[4]||(a[4]=(...e)=>s.validateEmail&&s.validateEmail(...e))},null,544),[[w,s.email]]),c("span",D,f(s.msg.email),1)]),c("div",_,[S,v(c("input",{class:"w-full pl-10 focus:border-purple-500",type:"password",name:"password",id:"user_password",placeholder:"password",required:"","onUpdate:modelValue":a[5]||(a[5]=e=>s.password=e),onBlur:a[6]||(a[6]=(...e)=>s.validatePassword&&s.validatePassword(...e))},null,544),[[w,s.password]]),c("span",B,f(s.msg.password),1)]),c("p",{class:"underline text-gray-500 text-center cursor-pointer hover:text-blue-400 dark:text-white",onClick:a[7]||(a[7]=(...e)=>s.loginWithDemoAccount&&s.loginWithDemoAccount(...e))}," 使用測試帳號登入(demo) ")]),c("div",V,[c("p",{class:"text-center text-white font-bold dark:text-black",onClick:a[8]||(a[8]=e=>s.register())}," 註冊 ")])],64)};export{x as default};
