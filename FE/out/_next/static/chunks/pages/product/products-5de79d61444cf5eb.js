(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[123],{3458:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/products",function(){return r(5089)}])},5089:function(e,n,r){"use strict";r.r(n);var t=r(7568),c=r(655),i=r(5893),d=r(8100),l=r(9669),s=r.n(l),o=r(1664),a=r.n(o),$=r(7354),h=$.TableContainer,u=$.Table,j=$.TableHead,x=$.TableRow,p=$.TableCell,f=$.TableBody,b=function(){var e,n=(e=(0,t.Z)(function(e){return(0,c.__generator)(this,function(n){switch(n.label){case 0:return[4,s().get(e).then(function(e){return e.data})];case 1:return[2,n.sent()]}})}),function(n){return e.apply(this,arguments)}),r=(0,d.ZP)("http://localhost:4000/v1/products",n),l=r.data;return r.error,(0,i.jsxs)("div",{children:[(0,i.jsx)(h,{variant:"outlined",children:(0,i.jsxs)(u,{"aria-label":"demo table",children:[(0,i.jsx)(j,{children:(0,i.jsxs)(x,{children:[(0,i.jsx)(p,{children:"Product ID"}),(0,i.jsx)(p,{children:"Product Name"}),(0,i.jsx)(p,{children:"Odometer"}),(0,i.jsx)(p,{children:"Product Style"}),(0,i.jsx)(p,{children:"Color"}),(0,i.jsx)(p,{children:"Engine Type"}),(0,i.jsx)(p,{children:"Product status"}),(0,i.jsx)(p,{children:"Price"}),(0,i.jsx)(p,{children:"Edit"}),(0,i.jsx)(p,{children:"Delete"}),(0,i.jsx)(p,{children:"Purchase"})]})}),(0,i.jsx)(f,{children:(null==l?void 0:l.data)&&l.data.map(function(e){return(0,i.jsxs)(x,{children:[(0,i.jsx)(p,{children:e._id}),(0,i.jsx)(p,{children:e.product_name}),(0,i.jsx)(p,{children:e.odometer}),(0,i.jsx)(p,{children:e.body_style}),(0,i.jsx)(p,{children:e.color}),(0,i.jsx)(p,{children:e.engine_type}),(0,i.jsx)(p,{children:e.product_status?"active":"inactive"}),(0,i.jsxs)(p,{children:[e.price,"$"]}),(0,i.jsx)(p,{onClick:function(){console.log("edit clicked")},children:(0,i.jsx)(a(),{href:"/roles/edit/".concat(e._id),children:"Edit"})}),(0,i.jsx)(p,{onClick:function(){console.log("delete clicked"),s().delete("http://localhost:4000/v1/products/".concat(e._id))},children:"Delete"}),(0,i.jsx)(p,{children:(0,i.jsx)(a(),{href:"/payment/".concat(e._id),children:"Purchase"})})]})})})]})}),(0,i.jsx)(a(),{href:"/product/add",children:(0,i.jsx)("button",{type:"button",children:"ADD PRODUCT"})}),(0,i.jsx)("div",{children:(null==l?void 0:l.data)&&l.data.map(function(e){return(0,i.jsx)("img",{src:e.imgUrl,alt:""})})})]})};n.default=b}},function(e){e.O(0,[388,255,495,798,351,410,664,354,774,888,179],function(){return e(e.s=3458)}),_N_E=e.O()}]);