import{_ as c}from"./iframe-296631b8.js";import{R as o,r as a,d as p,A as l,H as d,e as h}from"./index-ba0fa86a.js";import{c as E}from"./client-60bc1c3f.js";import"./preview-969d6cb4.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-53e146c1.js";import"./index-356e4a49.js";var n=new Map,R=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},x=async(e,t)=>{let r=await f(t);return new Promise(s=>{r.render(o.createElement(R,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},f=async e=>{let t=n.get(e);return t||(t=E.createRoot(e),n.set(e,t)),t},w={code:p,a:l,...d},y=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components};return new Promise((i,m)=>{c(()=>import("./index-9abbd0d9.js"),["./index-9abbd0d9.js","./index-f0088b9f.js","./index-ba0fa86a.js","./iframe-296631b8.js","./_commonjsHelpers-87174ba5.js","./index-d475d2ea.js","./index-53e146c1.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:u})=>x(o.createElement(y,{showException:m,key:Math.random()},o.createElement(u,{components:s},o.createElement(h,{context:e,docsParameter:t}))),r)).then(i)})},this.unmount=e=>{_(e)}}};export{S as DocsRenderer,w as defaultComponents};
//# sourceMappingURL=DocsRenderer-7FRJXR4N-15a9aafd.js.map
