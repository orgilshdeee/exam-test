(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{1353:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auction/list.auctions",function(){return e(461)}])},461:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return E}});var i=e(7568),n=e(603),s=e(655),d=e(5893),r=e(2889),l=e(7294),c=e(8100),o=e(9669),u=e.n(o),m=e(1664),$=e.n(m),b=e(7957),x=e(1733),h=e(9874),g=e(6540),p=e(7354),j=p.TableContainer,N=p.Table,v=p.TableHead,f=p.TableRow,_=p.TableCell,w=p.TableBody,S=p.Paper,T=p.Button,y=p.Box,C=p.TextField,B=(0,h.Z)({root:{width:"100px"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,backgroundColor:"white",border:"1px solid #000",boxShadow:24,padding:"20px",borderRadius:"5px",p:4},input:{width:"100%",margin:"5px"}});function E(){var a,t=function(a){u().delete("http://localhost:4000/v1/auction/".concat(a)),alert("delete")},e=function(a){a.preventDefault(),u().post("http://localhost:4000/v1/auction",{auction_status:a.target.action_status.value,auction_description:a.target.auction_description.value,auction_item_image:a.target.auction_item_image.value,auction_name:a.target.auction_name.value,auction_seller_id:a.target.auction_seller_id.value,bidding_end_time:a.target.bidding_end_time.value,bidding_start_time:a.target.bidding_start_time.value,created_date:a.target.created_date.value,ending_bid:a.target.ending_bid.value,max_ending_bid:a.target.max_ending_bid.value,min_starting_bid:a.target.min_starting_bid.value,starting_bid:a.target.starting_bid.value,updated_date:a.target.updated_date.value}).then(function(a){200==a.status&&(alert("update"),setRegister(!1))}).catch(function(a){a&&console.error(a)})},o=(a=(0,i.Z)(function(a){return(0,s.__generator)(this,function(t){switch(t.label){case 0:return[4,u().get(a).then(function(a){return a.data.data})];case 1:return[2,t.sent()]}})}),function(t){return a.apply(this,arguments)}),m=(0,c.ZP)("http://localhost:4000/v1/auction",o),h=m.data;m.error;var p=(0,n.Z)(l.useState(!1),2),E=p[0],Z=p[1],k=function(){return Z(!0)},I=function(){return Z(!1)},A=B(),D=new Date;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j,{component:S,children:(0,d.jsxs)(N,{"aria-label":"simple table",children:[(0,d.jsx)(v,{children:(0,d.jsxs)(f,{children:[(0,d.jsx)(_,{className:A.root,children:"Action Status"}),(0,d.jsx)(_,{className:A.root,children:"Auction Description"}),(0,d.jsx)(_,{className:A.root,children:"Auction Image"}),(0,d.jsx)(_,{className:A.root,children:"Auction Name"}),(0,d.jsxs)(_,{className:A.root,children:["Auction ",(0,d.jsx)("br",{}),"Seller Id"]}),(0,d.jsx)(_,{className:A.root,children:"Bidding End Time"}),(0,d.jsx)(_,{className:A.root,children:"Bidding Start Time"}),(0,d.jsx)(_,{className:A.root,children:"Created Date"}),(0,d.jsx)(_,{className:A.root,children:"Ending Bid"}),(0,d.jsx)(_,{className:A.root,children:"Max Ending Bid"}),(0,d.jsx)(_,{className:A.root,children:"Min Starting Bid"}),(0,d.jsx)(_,{className:A.root,children:"Starting Bid"}),(0,d.jsx)(_,{className:A.root,children:"Updated Date"}),(0,d.jsx)(_,{className:A.root,children:"Edit"}),(0,d.jsx)(_,{className:A.root,children:"Delete"})]})}),(0,d.jsx)(w,{children:h&&h.map(function(a,e){return(0,d.jsxs)(f,{children:[(0,d.jsx)(_,{className:A.root,children:a.action_status}),(0,d.jsx)(_,{className:A.root,children:a.auction_description}),(0,d.jsx)(_,{className:A.root,children:a.auction_item_image}),(0,d.jsx)(_,{className:A.root,children:a.auction_name}),(0,d.jsx)(_,{className:A.root,children:a.auction_seller_id}),(0,d.jsx)(_,{className:A.root,children:a.bidding_end_time}),(0,d.jsx)(_,{className:A.root,children:a.bidding_start_time}),(0,d.jsx)(_,{className:A.root,children:a.created_date}),(0,d.jsx)(_,{className:A.root,children:a.ending_bid}),(0,d.jsx)(_,{className:A.root,children:a.max_ending_bid}),(0,d.jsx)(_,{className:A.root,children:a.min_starting_bid}),(0,d.jsx)(_,{className:A.root,children:a.starting_bid}),(0,d.jsx)(_,{className:A.root,children:a.updated_date}),(0,d.jsx)(_,{className:A.root,children:(0,d.jsx)($(),{href:"/auction/edit/".concat(a._id),children:(0,d.jsx)(b.Z,{})})}),(0,d.jsx)(_,{className:A.root,children:(0,d.jsx)(T,{onClick:function(){return t(a._id)},children:(0,d.jsx)(x.Z,{})})})]},e)})})]})}),(0,d.jsx)(T,{onClick:k,sx:{display:"flex",width:"100vw",alignItems:"center",justifyItems:"center",marginTop:"20px"},children:(0,d.jsx)(g.Z,{})}),(0,d.jsx)("div",{children:(0,d.jsx)(r.Z,{open:E,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,d.jsxs)(y,{component:"form",className:A.modal,noValidate:!0,autoComplete:"off",onSubmit:e,children:[(0,d.jsx)(C,{id:"standard-basic",label:"action status",variant:"standard",name:"action_status",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"auction description",variant:"standard",name:"auction_description",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"auction item image",variant:"standard",name:"auction_item_image",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"auction name",variant:"standard",name:"auction_name",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"auction seller id",variant:"standard",name:"auction_seller_id",className:A.input}),(0,d.jsx)(C,{label:"bidding end time",variant:"standard",name:"bidding_end_time",className:A.input,defaultValue:"00:00",type:"time",required:!0}),(0,d.jsx)(C,{id:"standard-basic",label:"bidding start time",variant:"standard",name:"bidding_start_time",className:A.input,defaultValue:"00:00",type:"time",required:!0}),(0,d.jsx)(C,{id:"standard-basic",label:"created date",variant:"standard",name:"created_date",type:"date",defaultValue:D.toISOString().slice(0,10),className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"ending bid",variant:"standard",name:"ending_bid",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"max ending bid",variant:"standard",name:"max_ending_bid",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"min starting bid",variant:"standard",name:"min_starting_bid",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"starting bid",variant:"standard",name:"starting_bid",className:A.input}),(0,d.jsx)(C,{id:"standard-basic",label:"updated date",variant:"standard",name:"updated_date",type:"date",defaultValue:D.toISOString().slice(0,10),className:A.input}),(0,d.jsx)(T,{type:"submit",children:"submit"})]})})})]})}}},function(a){a.O(0,[388,255,495,798,351,410,664,354,885,774,888,179],function(){return a(a.s=1353)}),_N_E=a.O()}]);