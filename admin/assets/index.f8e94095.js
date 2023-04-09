import{I as J,J as O,L as Q,R as Z,M as j,N as G,C as W,D as X,w as Y,F as ee,H as te}from"./element-plus.5631ba54.js";import{f as T,_ as oe}from"./index.deaa6db5.js";import{d as N,s as F,r as g,Z as ae,f as le,n as h,ao as se,o as p,c as ne,U as e,L as t,u as n,aa as ie,R as i,a as ue,M as E,K as c,S as re,Q as L}from"./@vue.50ba5cf8.js";import{_ as pe}from"./edit.vue_vue_type_script_setup_true_lang.d39d459a.js";import{d as me,e as de}from"./department.ee320df0.js";import"./@vueuse.4a91a4c7.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.44f0a9c4.js";import"./axios.71644922.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.71183d84.js";import"./vue-router.8e70c72f.js";import"./pinia.5dae7c2f.js";import"./css-color-function.7ed33bcb.js";import"./color.c3c12e91.js";import"./clone.49b575c3.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.edaeeca4.js";import"./vue-clipboard3.49f35762.js";import"./clipboard.a03844cd.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";import"./index.73f34678.js";import"./index.vue_vue_type_style_index_0_scoped_a5e5144a_lang.cef6e99e.js";import"./useDictOptions.63522ae0.js";const ce={class:"dept-lists"},_e=N({name:"department"}),et=N({..._e,setup(fe){const B=F(),_=F(),x=F();let k=!1;const C=g(!1),b=g([]),m=ae({isStop:"",name:""}),v=g(!1),d=async()=>{C.value=!0,b.value=await me(m),C.value=!1},K=()=>{var a;(a=x.value)==null||a.resetFields(),d()},D=async a=>{var o,s;v.value=!0,await h(),a&&((o=_.value)==null||o.setFormData({pid:a})),(s=_.value)==null||s.open("add")},I=async a=>{var o,s;v.value=!0,await h(),(o=_.value)==null||o.open("edit"),(s=_.value)==null||s.getDetail(a)},M=async a=>{await T.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await de({id:a}),T.msgSuccess("\u5220\u9664\u6210\u529F"),d()},S=()=>{k=!k,R(b.value,k)},R=(a,o=!0)=>{var s;for(const u in a)(s=B.value)==null||s.toggleRowExpansion(a[u],o),a[u].children&&R(a[u].children,o)};return le(async()=>{await d(),h(()=>{S()})}),(a,o)=>{const s=W,u=X,w=J,P=O,r=Y,U=ee,V=te,A=oe,f=Q,q=Z,z=j,y=se("perms"),H=G;return p(),ne("div",ce,[e(V,{class:"!border-none",shadow:"never"},{default:t(()=>[e(U,{ref_key:"formRef",ref:x,class:"mb-[-16px]",model:n(m),inline:!0},{default:t(()=>[e(u,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:t(()=>[e(s,{class:"w-[280px]",modelValue:n(m).name,"onUpdate:modelValue":o[0]||(o[0]=l=>n(m).name=l),clearable:"",onKeyup:ie(d,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(u,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop"},{default:t(()=>[e(P,{class:"w-[280px]",modelValue:n(m).isStop,"onUpdate:modelValue":o[1]||(o[1]=l=>n(m).isStop=l)},{default:t(()=>[e(w,{label:"\u5168\u90E8",value:""}),e(w,{label:"\u6B63\u5E38",value:"0"}),e(w,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(r,{type:"primary",onClick:d},{default:t(()=>[i("\u67E5\u8BE2")]),_:1}),e(r,{onClick:K},{default:t(()=>[i("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[ue("div",null,[E((p(),c(r,{type:"primary",onClick:o[2]||(o[2]=l=>D())},{icon:t(()=>[e(A,{name:"el-icon-Plus"})]),default:t(()=>[i(" \u65B0\u589E ")]),_:1})),[[y,["system:dept:add"]]]),e(r,{onClick:S},{default:t(()=>[i(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1})]),E((p(),c(z,{ref_key:"tableRef",ref:B,class:"mt-4",size:"large",data:n(b),"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(f,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),e(f,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop","min-width":"100"},{default:t(({row:l})=>[e(q,{class:"ml-2",type:l.isStop?"danger":""},{default:t(()=>[i(re(l.isStop?"\u505C\u7528":"\u6B63\u5E38"),1)]),_:2},1032,["type"])]),_:1}),e(f,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(f,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(f,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[E((p(),c(r,{type:"primary",link:"",onClick:$=>D(l.id)},{default:t(()=>[i(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[y,["system:dept:add"]]]),E((p(),c(r,{type:"primary",link:"",onClick:$=>I(l)},{default:t(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["system:dept:edit"]]]),l.pid!==0?E((p(),c(r,{key:0,type:"danger",link:"",onClick:$=>M(l.id)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["system:dept:del"]]]):L("",!0)]),_:1})]),_:1},8,["data"])),[[H,n(C)]])]),_:1}),n(v)?(p(),c(pe,{key:0,ref_key:"editRef",ref:_,onSuccess:d,onClose:o[3]||(o[3]=l=>v.value=!1)},null,512)):L("",!0)])}}});export{et as default};
