(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{7051:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roles/list.roles",function(){return l(2248)}])},2248:function(e,n,l){"use strict";l.r(n);var t=l(7568),r=l(655),i=l(5893),c=l(8100),a=l(9669),o=l.n(a),s=l(1664),d=l.n(s),u=l(7354),$=u.TableContainer,h=u.Table,j=u.TableHead,x=u.TableRow,f=u.TableCell,_=u.TableBody,b=function(){var e,n=(e=(0,t.Z)(function(e){return(0,r.__generator)(this,function(n){switch(n.label){case 0:return[4,o().get(e).then(function(e){return e.data.data})];case 1:return[2,n.sent()]}})}),function(n){return e.apply(this,arguments)}),l=(0,c.ZP)("http://localhost:4000/v1/roles",n),a=l.data;return l.error,(0,i.jsx)($,{variant:"outlined",children:(0,i.jsxs)(h,{"aria-label":"demo table",children:[(0,i.jsx)(j,{children:(0,i.jsxs)(x,{children:[(0,i.jsx)(f,{children:"Role ID"}),(0,i.jsx)(f,{children:"Role Name"}),(0,i.jsx)(f,{children:"Role Status"}),(0,i.jsx)(f,{children:"Role Edit"}),(0,i.jsx)(f,{children:"Role Delete"})]})}),(0,i.jsx)(_,{children:(null==a?void 0:a.data)&&(null==a?void 0:a.data.map(function(e,n){return(0,i.jsxs)(x,{children:[(0,i.jsx)(f,{children:e._id}),(0,i.jsx)(f,{children:e.role_name}),(0,i.jsx)(f,{children:e.role_status}),(0,i.jsx)(f,{onClick:function(){console.log("edit clicked")},children:(0,i.jsx)(d(),{href:"/roles/edit/".concat(e._id),children:"Edit"})}),(0,i.jsx)(f,{onClick:function(){console.log("delete clicked")},children:"Delete"})]},n)}))})]})})};n.default=b}},function(e){e.O(0,[388,255,495,798,351,410,664,354,774,888,179],function(){return e(e.s=7051)}),_N_E=e.O()}]);