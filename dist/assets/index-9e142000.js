import{j as e,u as j,r as d,B as h,R as v,a as u,c as I,b as N}from"./vendor-860ffae9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const a="/pivskiCjenik/assets/paulaner-ba1104d1.png",P=[{Id:"1",Name:"Paulaner",Price:3.4,image:a},{Id:"2",Name:"Trapula",Price:3.1,image:a},{Id:"3",Name:"Mila Barilo",Price:3,image:a},{Id:"4",Name:"Hackerpschor",Price:3.8,image:a},{Id:"5",Name:"Heineken",Price:2.6,image:a},{Id:"6",Name:"Ferata",Price:3.3,image:a},{Id:"7",Name:"Barba",Price:3.3,image:a},{Id:"8",Name:"Leffe",Price:4,image:a},{Id:"9",Name:"Ožujsko",Price:2.6,image:a},{Id:"10",Name:"Karlovačko",Price:3.3,image:a},{Id:"11",Name:"Mirakul",Price:3.3,image:a},{Id:"12",Name:"Leffe",Price:4,image:a}],_="_Item_1fq7y_1",b="_itemData_1fq7y_13",y="_title_1fq7y_19",m={Item:_,itemData:b,title:y},w="_avatar_tf7w1_1",C={avatar:w},R=r=>e.jsx("img",{src:r.imageSrc,alt:"Avatar",className:C.avatar}),L=r=>e.jsxs("div",{className:m.Item,children:[e.jsx(R,{imageSrc:a}),e.jsxs("div",{className:m.itemData,children:[e.jsx("div",{className:m.title,children:r.item.Name}),e.jsxs("div",{children:[r.item.Price," €"]})]}),e.jsx("div",{})]}),S="_Container_1krij_1",A={Container:S},M=r=>e.jsx(e.Fragment,{children:e.jsx("div",{className:A.Container,children:r.items.map(n=>e.jsx(L,{item:n}))})}),O="_Container_tkrfm_1",$={Container:O},k=()=>{const r=j(),[n,l]=d.useState(""),[o,t]=d.useState(""),s=i=>{l(i.target.value)},c=i=>{t(i.target.value)},g=()=>{const x=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(n),f=/^(?=.*[A-Z])(?=.*\d).+$/.test(o);return x&&f},p=i=>{i.preventDefault(),g()?r("/"):console.log("Wrong input!")};return e.jsxs("div",{className:$.Container,children:[e.jsx("h1",{children:"Login"}),e.jsx("br",{}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mail",children:"Email:"}),e.jsx("br",{}),e.jsx("input",{type:"text",id:"mail",value:n,onChange:i=>s(i)}),e.jsx("br",{}),e.jsx("label",{htmlFor:"pass",children:"Password"}),e.jsx("br",{}),e.jsx("input",{type:"password",id:"pass",value:o,onChange:i=>c(i)})]}),e.jsx("button",{type:"submit",children:"Login"})]})]})};function F(){const[r]=d.useState(P);return r.length<1?null:e.jsx(h,{children:e.jsxs(v,{children:[e.jsx(u,{path:"/",element:e.jsxs("div",{className:"background-container",children:[e.jsx("h1",{children:"Cjenik"}),e.jsx(M,{items:r})]})}),e.jsx(u,{path:"/login",element:e.jsx(k,{})})]})})}I.createRoot(document.getElementById("root")).render(e.jsx(N.StrictMode,{children:e.jsx(F,{})}));
