(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1071)}])},5185:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(5893),s=t(7294),i=t(8193),a=t(5155),o=t(2585),c=t(1163);function l(){var e=function(){document.getElementById("myDropdown").classList.toggle("show")};return(0,c.useRouter)(),window.onclick=function(e){if(!e.target.matches(".dropbtn")){var r,t=document.getElementsByClassName("dropdown-content");for(r=0;r<t.length;r++){var n=t[r];n.classList.contains("show")&&n.classList.remove("show")}}},(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"headerRightSide",children:[(0,n.jsx)(i.y5j,{}),(0,n.jsx)(a.m5v,{}),(0,n.jsx)(o.kA4,{onClick:e,className:"dropbtn"})]}),(0,n.jsx)("div",{className:"dropdown",children:(0,n.jsxs)("div",{id:"myDropdown",className:"dropdown-content",children:[(0,n.jsxs)("div",{className:"dropdownTop",children:[(0,n.jsx)("a",{href:"/user/account",children:"Profile"}),(0,n.jsx)("img",{src:"../pictures/profile.png",alt:""})]}),(0,n.jsx)("a",{href:"#",children:"My listings"}),(0,n.jsx)("a",{onClick:function(){localStorage.clear(),location.reload()},children:"Sign Out"})]})})]})}var d=t(603),u=t(1953),$=t(2889),h=t(9669),f=t.n(h),m={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function x(){var e=function(e){e.preventDefault();var r=e.target[0].value,t=e.target[1].value;f().post("http://localhost:4000/v1/users/login",{email:r,password:t}).then(function(e){localStorage.setItem("user",JSON.stringify(e.data.data)),o(),location.reload()})},r=(0,d.Z)(s.useState(!1),2),t=r[0],i=r[1],a=function(){return i(!0)},o=function(){return i(!1)};return(0,c.useRouter)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"headerRightSide",children:(0,n.jsx)("button",{onClick:a,children:"Sign In"})}),(0,n.jsx)($.Z,{open:t,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,n.jsx)(u.Z,{sx:m,children:(0,n.jsx)("div",{className:"loginForm",children:(0,n.jsxs)("form",{onSubmit:e,children:[(0,n.jsx)("p",{children:"Login"}),(0,n.jsx)("input",{type:"email",name:"email",placeholder:"Email",id:"email"}),(0,n.jsx)("input",{type:"password",name:"password",placeholder:"Password",id:"password"}),(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("button",{type:"submit",children:"Log In"})}),(0,n.jsx)("p",{className:"result"})]})})})})]})}function p(){var e=(0,s.useState)(!1),r=e[0],t=e[1],i=(0,s.useState)(""),a=i[0],o=i[1];return(0,s.useEffect)(function(){localStorage.getItem("user")&&(t(!0),o(JSON.parse(localStorage.getItem("user")||"")))},[]),console.log(a),(0,n.jsx)("div",{className:"containerHeader",children:(0,n.jsxs)("div",{className:"header",children:[(0,n.jsxs)("div",{className:"headerLeftSide",children:[(0,n.jsx)("img",{src:"../pictures/logo.png",alt:""}),(0,n.jsx)("a",{href:"/auction",children:"Auction"}),(0,n.jsx)("a",{href:"/allcars",children:"All Cars"})]}),(0,n.jsx)("div",{className:"headerCenter",children:(0,n.jsx)("form",{action:"search",children:(0,n.jsx)("input",{type:"search",name:"search",id:"search",placeholder:"Search for cars(ex. BMW, Audi, Ford)"})})}),r?(0,n.jsx)(l,{}):(0,n.jsx)(x,{})]})})}},1071:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(5893),s=t(7294),i=t(5185),a=t(8193);function o(){return(0,n.jsx)("div",{className:"filterContainer",children:(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsxs)("div",{className:"filterLeftSide",children:[(0,n.jsx)("p",{children:"Auctions"}),(0,n.jsxs)("button",{children:["Years",(0,n.jsx)(a.cuw,{})]}),(0,n.jsx)("div",{id:"dropDownYear",children:(0,n.jsx)("select",{name:"years",id:"years"})}),(0,n.jsxs)("button",{children:["Transmission",(0,n.jsx)(a.cuw,{})]}),(0,n.jsxs)("button",{children:["Body Style",(0,n.jsx)(a.cuw,{})]})]}),(0,n.jsxs)("div",{className:"filterRightSide",children:[(0,n.jsx)("button",{className:"",children:"Ending soon"}),(0,n.jsx)("button",{children:"Newly listed"}),(0,n.jsx)("button",{children:"No reserve"})]})]})})}var c=t(603),l=t(9669),d=t.n(l),u=t(1664),$=t.n(u);function h(){return(0,n.jsx)("div",{className:"footerContainer",children:(0,n.jsxs)("div",{className:"footerInside",children:[(0,n.jsx)("div",{className:"footerLeftSide",children:(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("img",{src:"./pictures/logo.png",alt:""})})}),(0,n.jsxs)("div",{className:"footerCenter",children:[(0,n.jsx)("p",{children:"HOW IT WORKS"}),(0,n.jsx)("p",{children:"Buying a Car"}),(0,n.jsx)("p",{children:"Selling a Car"}),(0,n.jsx)("p",{children:"Finalzing the Sale"}),(0,n.jsx)("p",{children:"FAQs"})]}),(0,n.jsxs)("div",{className:"footerCenter",children:[(0,n.jsx)("p",{children:"SELLERS"}),(0,n.jsx)("p",{children:"Submit Your Car"}),(0,n.jsx)("p",{children:"Photography Guide"})]}),(0,n.jsxs)("div",{className:"footerCenter",children:[(0,n.jsx)("p",{children:"HELPFUL LINKS"}),(0,n.jsx)("p",{children:"Support"}),(0,n.jsx)("p",{children:"Shop C and B Merch"})]}),(0,n.jsxs)("div",{className:"footerRightSide",children:[(0,n.jsxs)("div",{className:"footerRightSideTop",children:[(0,n.jsx)(a.t0C,{}),(0,n.jsx)(a.b1v,{}),(0,n.jsx)(a.s5I,{}),(0,n.jsx)(a.JMB,{})]}),(0,n.jsxs)("div",{className:"footerRightSideBottom",children:[(0,n.jsx)("p",{children:"\xa9 Copyright 2022 LiveTime and Card Auction LLC"}),(0,n.jsx)("p",{children:"Terms of Use Privacy Policy"})]})]})]})})}function f(){var e=(0,c.Z)(s.useState(),2),r=e[0],t=e[1];return(0,s.useEffect)(function(){d().get("http://localhost:4000/v1/products").then(function(e){t(e.data.data)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"mainContainer",children:(0,n.jsx)("div",{className:"main",children:null==r?void 0:r.map(function(e,r){return(0,n.jsxs)("div",{className:"carCard",children:[(0,n.jsx)($(),{href:"/car/".concat(e._id),children:(0,n.jsx)("img",{src:e.imgUrl,alt:""})}),(0,n.jsx)("p",{children:e.product_name})]},r)})})}),(0,n.jsx)(h,{})]})}function m(){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(f,{})]})}},1163:function(e,r,t){e.exports=t(387)},5177:function(e,r,t){"use strict";t.d(r,{w_:function(){return c}});var n=t(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(s),a=function(){return(a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)},o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>r.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};function c(e){return function(r){return n.createElement(l,a({attr:a({},e.attr)},r),function e(r){return r&&r.map(function(r,t){return n.createElement(r.tag,a({key:t},r.attr),e(r.child))})}(e.child))}}function l(e){var r=function(r){var t,s=e.attr,i=e.size,c=e.title,l=o(e,["attr","size","title"]),d=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,l,{className:t,style:a(a({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return r(e)}):r(s)}},603:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,r)||function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return s}})}},function(e){e.O(0,[980,617,158,388,255,664,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);