import{Y as B,H as w,r as N,D as h,w as P,F as R}from"./element-plus.5631ba54.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang.9d89abe1.js";import{q as L,f as $,_ as q}from"./index.deaa6db5.js";import{u as S}from"./vue-router.8e70c72f.js";import{g as V,u as H}from"./consumer.caa29973.js";import{d as C,Z as I,s as U,ao as j,o as m,c as z,U as e,L as t,u as r,a as D,R as u,S as s,M as F,K as b}from"./@vue.50ba5cf8.js";import"./@vueuse.4a91a4c7.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.44f0a9c4.js";import"./axios.71644922.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.71183d84.js";import"./pinia.5dae7c2f.js";import"./css-color-function.7ed33bcb.js";import"./color.c3c12e91.js";import"./clone.49b575c3.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.edaeeca4.js";import"./vue-clipboard3.49f35762.js";import"./clipboard.a03844cd.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";const K={class:"bg-page py-5 pl-20 mb-10"},M=D("div",{class:"mb-3 text-tx-regular"},"\u7528\u6237\u5934\u50CF",-1),O=C({name:"consumerDetail"}),Ne=C({...O,setup(Y){const E=S(),o=I({avatar:"",channel:"",createTime:"",lastLoginIp:"",lastLoginTime:"",mobile:"",nickname:"",realName:0,sex:0,sn:"",username:""}),g=U(),v=async()=>{const n=await V({id:E.query.id});Object.keys(o).forEach(a=>{o[a]=n[a]})},p=async(n,a)=>{L(n)||(await H({id:E.query.id,field:a,value:n}),$.msgSuccess("\u7F16\u8F91\u6210\u529F"),v())};return v(),(n,a)=>{const k=B,y=w,x=N,l=h,d=q,c=P,_=T,A=R,f=j("perms");return m(),z("div",null,[e(y,{class:"!border-none",shadow:"never"},{default:t(()=>[e(k,{content:"\u7528\u6237\u8BE6\u60C5",onBack:a[0]||(a[0]=i=>n.$router.back())})]),_:1}),e(y,{class:"mt-4 !border-none",header:"\u57FA\u672C\u8D44\u6599",shadow:"never"},{default:t(()=>[e(A,{ref_key:"formRef",ref:g,class:"ls-form",model:r(o),"label-width":"120px"},{default:t(()=>[D("div",K,[M,e(x,{src:r(o).avatar,size:58},null,8,["src"])]),e(l,{label:"\u7528\u6237\u7F16\u53F7\uFF1A"},{default:t(()=>[u(s(r(o).sn),1)]),_:1}),e(l,{label:"\u7528\u6237\u6635\u79F0\uFF1A"},{default:t(()=>[u(s(r(o).nickname),1)]),_:1}),e(l,{label:"\u8D26\u53F7\uFF1A"},{default:t(()=>[u(s(r(o).username)+" ",1),e(_,{class:"ml-[10px]",limit:32,onConfirm:a[1]||(a[1]=i=>p(i,"username"))},{default:t(()=>[F((m(),b(c,{type:"primary",link:""},{default:t(()=>[e(d,{name:"el-icon-EditPen"})]),_:1})),[[f,["user:edit"]]])]),_:1})]),_:1}),e(l,{label:"\u771F\u5B9E\u59D3\u540D\uFF1A"},{default:t(()=>[u(s(r(o).realName||"-")+" ",1),e(_,{class:"ml-[10px]",limit:32,onConfirm:a[2]||(a[2]=i=>p(i,"realName"))},{default:t(()=>[F((m(),b(c,{type:"primary",link:""},{default:t(()=>[e(d,{name:"el-icon-EditPen"})]),_:1})),[[f,["user:edit"]]])]),_:1})]),_:1}),e(l,{label:"\u6027\u522B\uFF1A"},{default:t(()=>[u(s(r(o).sex)+" ",1),e(_,{class:"ml-[10px]",type:"select",options:[{label:"\u672A\u77E5",value:0},{label:"\u7537",value:1},{label:"\u5973",value:2}],onConfirm:a[3]||(a[3]=i=>p(i,"sex"))},{default:t(()=>[F((m(),b(c,{type:"primary",link:""},{default:t(()=>[e(d,{name:"el-icon-EditPen"})]),_:1})),[[f,["user:edit"]]])]),_:1})]),_:1}),e(l,{label:"\u8054\u7CFB\u7535\u8BDD\uFF1A"},{default:t(()=>[u(s(r(o).mobile||"-")+" ",1),e(_,{class:"ml-[10px]",type:"number",onConfirm:a[4]||(a[4]=i=>p(i,"mobile"))},{default:t(()=>[F((m(),b(c,{type:"primary",link:""},{default:t(()=>[e(d,{name:"el-icon-EditPen"})]),_:1})),[[f,["user:edit"]]])]),_:1})]),_:1}),e(l,{label:"\u6CE8\u518C\u6765\u6E90\uFF1A"},{default:t(()=>[u(s(r(o).channel),1)]),_:1}),e(l,{label:"\u6CE8\u518C\u65F6\u95F4\uFF1A"},{default:t(()=>[u(s(r(o).createTime),1)]),_:1}),e(l,{label:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4\uFF1A"},{default:t(()=>[u(s(r(o).lastLoginTime),1)]),_:1})]),_:1},8,["model"])]),_:1})])}}});export{Ne as default};
