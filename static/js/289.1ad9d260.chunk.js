(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[289],{2155:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return be}});var o=n(2791),r=n(4554),a=n(8560),i=n(9439),c=n(7665),l=n(4294),s=n(3855),d=n(4876),u=n(2286),p=n(184);function m(){var e=(0,s.v9)(u.Nh),t=(0,s.I0)(),n=(0,o.useState)(""),a=(0,i.Z)(n,2),m=a[0],v=a[1],f=(0,o.useState)(""),x=(0,i.Z)(f,2),g=x[0],h=x[1],b=(0,s.v9)(u.cS),Z={name:m,number:g};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.Z,{onSubmit:function(n){if(n.preventDefault(),b.map((function(e){return e.name.toLowerCase()})).includes(m.toLowerCase())||b.map((function(e){return e.number})).includes(g))return alert("This contact already exists"),v(""),void h("");t((0,d.uK)({token:e,contact:Z})),v(""),h("")},component:"form",sx:{display:"flex",flexDirection:"column",gap:"15px",alignItems:"center"},children:[(0,p.jsx)(c.Z,{type:"text",name:"name",placeholder:"Enter name*",label:"Name",required:!0,value:m,onChange:function(e){return v(e.target.value)},sx:{width:"400px"}}),(0,p.jsx)(c.Z,{type:"tel",name:"number",placeholder:"Enter phone number*",label:"PhoneNumber",required:!0,value:g,onChange:function(e){return h(e.target.value)},sx:{width:"400px"}}),(0,p.jsx)(l.Z,{type:"submit",variant:"contained",sx:{backgroundColor:"green",marginBottom:"50px",marginTop:"20px",width:"150px",height:"50px"},children:"Add Contact"})]})})}function v(e){var t=e.contact,n=(0,s.I0)(),o=(0,s.v9)(u.Nh);return(0,p.jsx)(l.Z,{type:"button",onClick:function(){n((0,d.GK)({token:o,id:t.id}))},variant:"contained",sx:{backgroundColor:"red",minWidth:"90px",maxHeight:"37px"},children:"Delete"})}var f=n(890),x=n(237),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,display:"flex",flexDirection:"column",gap:"15px"};function h(e){var t=e.contact,n=o.useState(!1),a=(0,i.Z)(n,2),m=a[0],v=a[1],h=o.useState(""),b=(0,i.Z)(h,2),Z=b[0],y=b[1],C=o.useState(""),k=(0,i.Z)(C,2),j=k[0],S=k[1],w=o.useState(!1),I=(0,i.Z)(w,2),z=I[0],B=I[1],R=(0,s.v9)(u.Nh),M=(0,s.I0)(),O={name:Z,number:j},N=(0,s.v9)(u.cS),A=function(){v(!1),B(!1)},T=function(e){var t=e.target,n=t.name,o=t.value;"name"===n?y(o):"number"===n&&S(o);var r=N.some((function(e){return e.name===o||e.number===o}));r&&B(!0)},D=function(e){e.preventDefault(),z?alert("This name or phone number already exists in your contacts list"):(M((0,d.mP)({token:R,id:t.id,updatedContactData:O})),A()),A()};return(0,p.jsxs)("div",{children:[(0,p.jsx)(l.Z,{onClick:function(){return v(!0)},variant:"contained",children:"Edit"}),(0,p.jsx)(x.Z,{open:m,onClose:A,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,p.jsxs)(r.Z,{sx:g,component:"form",children:[(0,p.jsx)(f.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit Contact"}),(0,p.jsx)(c.Z,{id:"outlined-basic",label:"Enter new Name",variant:"outlined",type:"text",name:"name",onChange:T,onSubmit:D}),(0,p.jsx)(c.Z,{id:"outlined-basic",label:"enter new phone",variant:"outlined",name:"number",type:"number",onChange:T}),(0,p.jsx)(l.Z,{type:"submit",variant:"contained",onClick:D,children:"Edit"}),(0,p.jsx)(l.Z,{type:"button",variant:"contained",onClick:A,children:"Close"})]})})]})}function b(e){var t=e.contact;return(0,p.jsxs)("li",{style:{fontSize:"18px",marginLeft:"15px",display:"flex",gap:"10px",justifyContent:"space-between",maxHeight:"50px"},children:[(0,p.jsxs)("span",{style:{fontWeight:"bold",minWidth:"180px"},children:[t.name,":"]})," ",(0,p.jsx)("p",{style:{minWidth:"150px",margin:"0"},children:t.number}),(0,p.jsx)(h,{contact:t}),(0,p.jsx)(v,{contact:t})]})}function Z(e){var t=e.message;return(0,p.jsx)("p",{style:{margin:"20px auto",fontWeight:"bold",fontSize:"20px"},children:t})}function y(){var e=(0,s.v9)(u.F4);return(0,p.jsx)("ul",{style:{listStyle:"none",margin:"20px auto",display:"flex",flexDirection:"column",gap:"10px",paddingLeft:0,maxWidth:"650px"},children:0===e.length?(0,p.jsx)(Z,{message:"No contacts found"}):e.map((function(e){return(0,p.jsx)(b,{contact:e},e.id)}))})}var C=n(6058);function k(){var e=(0,s.v9)(u.zK),t=(0,s.I0)();return(0,p.jsxs)(r.Z,{sx:{margin:"0 auto",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"20px"},children:[(0,p.jsx)(f.Z,{variant:"h2",sx:{fontSize:"20px",fontWeight:"bold"},children:"Search contact by name"}),(0,p.jsx)(c.Z,{type:"text",name:"filter",id:"outlined-basic",label:"Enter Name",variant:"outlined",value:e,onChange:function(e){return t((0,C.X)(e.target.value))}})]})}function j(e){var t=e.children,n=e.title;return(0,p.jsxs)("div",{style:{maxWidth:"700px",margin:"50px auto 0",border:"1px solid gray",borderRadius:"5px",boxShadow:"10px 10px 10px gray",paddingBottom:"10px"},children:[(0,p.jsx)("h1",{style:{textAlign:"center",marginBottom:"50px"},children:n}),t]})}var S=n(5861),w=n(4687),I=n.n(w),z=n(3366),B=n(7462),R=n(3733),M=n(4419),O=n(7630),N=n(1046),A=n(4036),T=n(5527),D=n(5878),F=n(1217);function G(e){return(0,F.Z)("MuiAppBar",e)}(0,D.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var W=["className","color","enableColorOnDark","position"],P=function(e,t){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t},_=(0,O.ZP)(T.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,A.Z)(n.position))],t["color".concat((0,A.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,B.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===n.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===n.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===n.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===n.position&&{position:"static"},"relative"===n.position&&{position:"relative"},!t.vars&&(0,B.Z)({},"default"===n.color&&{backgroundColor:o,color:t.palette.getContrastText(o)},n.color&&"default"!==n.color&&"inherit"!==n.color&&"transparent"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},"inherit"===n.color&&{color:"inherit"},"dark"===t.palette.mode&&!n.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===n.color&&(0,B.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,B.Z)({},"default"===n.color&&{"--AppBar-background":n.enableColorOnDark?t.vars.palette.AppBar.defaultBg:P(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":n.enableColorOnDark?t.vars.palette.text.primary:P(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},n.color&&!n.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":n.enableColorOnDark?t.vars.palette[n.color].main:P(t.vars.palette.AppBar.darkBg,t.vars.palette[n.color].main),"--AppBar-color":n.enableColorOnDark?t.vars.palette[n.color].contrastText:P(t.vars.palette.AppBar.darkColor,t.vars.palette[n.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===n.color?"inherit":"var(--AppBar-color)"},"transparent"===n.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),E=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiAppBar"}),o=n.className,r=n.color,a=void 0===r?"primary":r,i=n.enableColorOnDark,c=void 0!==i&&i,l=n.position,s=void 0===l?"fixed":l,d=(0,z.Z)(n,W),u=(0,B.Z)({},n,{color:a,position:s,enableColorOnDark:c}),m=function(e){var t=e.color,n=e.position,o=e.classes,r={root:["root","color".concat((0,A.Z)(t)),"position".concat((0,A.Z)(n))]};return(0,M.Z)(r,G,o)}(u);return(0,p.jsx)(_,(0,B.Z)({square:!0,component:"header",ownerState:u,elevation:4,className:(0,R.Z)(m.root,o,"fixed"===s&&"mui-fixed"),ref:t},d))})),L=n(4942);function q(e){return(0,F.Z)("MuiToolbar",e)}(0,D.Z)("MuiToolbar",["root","gutters","regular","dense"]);var V=["className","component","disableGutters","variant"],H=(0,O.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,B.Z)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,L.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),K=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiToolbar"}),o=n.className,r=n.component,a=void 0===r?"div":r,i=n.disableGutters,c=void 0!==i&&i,l=n.variant,s=void 0===l?"regular":l,d=(0,z.Z)(n,V),u=(0,B.Z)({},n,{component:a,disableGutters:c,variant:s}),m=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,M.Z)(n,q,t)}(u);return(0,p.jsx)(H,(0,B.Z)({as:a,className:(0,R.Z)(m.root,o),ref:t,ownerState:u},d))})),U=n(2065),X=n(335);function $(e){return(0,F.Z)("MuiIconButton",e)}var J=(0,D.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Q=["edge","children","className","color","disabled","disableFocusRipple","size"],Y=(0,O.ZP)(X.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,A.Z)(n.color))],n.edge&&t["edge".concat((0,A.Z)(n.edge))],t["size".concat((0,A.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,B.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,U.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,o=e.ownerState,r=null==(t=(n.vars||n).palette)?void 0:t[o.color];return(0,B.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,B.Z)({color:null==r?void 0:r.main},!o.disableRipple&&{"&:hover":(0,B.Z)({},r&&{backgroundColor:n.vars?"rgba(".concat(r.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,U.Fq)(r.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,L.Z)({},"&.".concat(J.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),ee=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiIconButton"}),o=n.edge,r=void 0!==o&&o,a=n.children,i=n.className,c=n.color,l=void 0===c?"default":c,s=n.disabled,d=void 0!==s&&s,u=n.disableFocusRipple,m=void 0!==u&&u,v=n.size,f=void 0===v?"medium":v,x=(0,z.Z)(n,Q),g=(0,B.Z)({},n,{edge:r,color:l,disabled:d,disableFocusRipple:m,size:f}),h=function(e){var t=e.classes,n=e.disabled,o=e.color,r=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==o&&"color".concat((0,A.Z)(o)),r&&"edge".concat((0,A.Z)(r)),"size".concat((0,A.Z)(a))]};return(0,M.Z)(i,$,t)}(g);return(0,p.jsx)(Y,(0,B.Z)({className:(0,R.Z)(h.root,i),centerRipple:!0,focusRipple:!m,disabled:d,ref:t,ownerState:g},x,{children:a}))})),te=n(9952),ne=n(3053),oe=n(9480),re=n(162),ae=n(2071);var ie=(0,D.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var ce=(0,D.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var le=(0,D.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function se(e){return(0,F.Z)("MuiMenuItem",e)}var de=(0,D.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ue=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],pe=(0,O.ZP)(X.Z,{shouldForwardProp:function(e){return(0,O.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,B.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,L.Z)(t,"&.".concat(de.selected),(0,L.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,U.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(de.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,U.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,L.Z)(t,"&.".concat(de.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,U.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,U.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,L.Z)(t,"&.".concat(de.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,L.Z)(t,"&.".concat(de.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,L.Z)(t,"& + .".concat(ie.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,L.Z)(t,"& + .".concat(ie.inset),{marginLeft:52}),(0,L.Z)(t,"& .".concat(le.root),{marginTop:0,marginBottom:0}),(0,L.Z)(t,"& .".concat(le.inset),{paddingLeft:36}),(0,L.Z)(t,"& .".concat(ce.root),{minWidth:36}),t),!o.dense&&(0,L.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,B.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,L.Z)({},"& .".concat(ce.root," svg"),{fontSize:"1.25rem"})))})),me=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,a=void 0!==r&&r,i=n.component,c=void 0===i?"li":i,l=n.dense,s=void 0!==l&&l,d=n.divider,u=void 0!==d&&d,m=n.disableGutters,v=void 0!==m&&m,f=n.focusVisibleClassName,x=n.role,g=void 0===x?"menuitem":x,h=n.tabIndex,b=n.className,Z=(0,z.Z)(n,ue),y=o.useContext(oe.Z),C=o.useMemo((function(){return{dense:s||y.dense||!1,disableGutters:v}}),[y.dense,s,v]),k=o.useRef(null);(0,re.Z)((function(){a&&k.current&&k.current.focus()}),[a]);var j,S=(0,B.Z)({},n,{dense:C.dense,divider:u,disableGutters:v}),w=function(e){var t=e.disabled,n=e.dense,o=e.divider,r=e.disableGutters,a=e.selected,i=e.classes,c={root:["root",n&&"dense",t&&"disabled",!r&&"gutters",o&&"divider",a&&"selected"]},l=(0,M.Z)(c,se,i);return(0,B.Z)({},i,l)}(n),I=(0,ae.Z)(k,t);return n.disabled||(j=void 0!==h?h:-1),(0,p.jsx)(oe.Z.Provider,{value:C,children:(0,p.jsx)(pe,(0,B.Z)({ref:I,role:g,tabIndex:j,component:c,focusVisibleClassName:(0,R.Z)(w.focusVisible,f),className:(0,R.Z)(w.root,b)},Z,{ownerState:S,classes:w}))})})),ve=n(7689),fe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function xe(e){var t=e.open,n=e.onClose,o=e.userEmail,a=e.userName;return(0,p.jsx)(x.Z,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,p.jsxs)(r.Z,{sx:fe,children:[(0,p.jsx)(f.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{textAlign:"center",fontSize:"20px",fontWeight:"bold"},children:"User Info"}),(0,p.jsxs)(f.Z,{id:"modal-modal-description",sx:{mt:2},children:[(0,p.jsx)("span",{style:{fontWeight:"bold"},children:"User email:"})," ",o]}),(0,p.jsxs)(f.Z,{children:[" ",(0,p.jsx)("span",{style:{fontWeight:"bold"},children:"Name:"})," ",a]})]})})}function ge(){var e=o.useState(null),t=(0,i.Z)(e,2),n=t[0],a=t[1],c=o.useState(!1),m=(0,i.Z)(c,2),v=m[0],x=m[1],g=(0,s.v9)(u.Nh),h=(0,s.v9)(u.vW),b=(0,s.v9)(u.bG),Z=(0,s.I0)(),y=(0,ve.s0)(),C=function(){a(null)},k=function(){var e=(0,S.Z)(I().mark((function e(){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z((0,d.PR)(g));case 2:x(!0),C();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,S.Z)(I().mark((function e(){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z((0,d.TX)(g));case 2:y("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)(r.Z,{sx:{flexGrow:1},children:(0,p.jsx)(E,{position:"static",sx:{backgroundColor:"green"},children:(0,p.jsxs)(K,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"},children:[(0,p.jsx)(ee,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},color:"inherit",children:(0,p.jsx)(te.Z,{})}),(0,p.jsx)(f.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:h}),(0,p.jsxs)(ne.Z,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:C,children:[(0,p.jsx)(me,{onClick:k,children:"My account"}),(0,p.jsx)(xe,{open:v,onClose:function(){x(!1)},userEmail:null===b||void 0===b?void 0:b.email,userName:null===b||void 0===b?void 0:b.name})]})]}),(0,p.jsx)(l.Z,{variant:"text",sx:{color:"white",fontWeight:"bold"},onClick:j,children:"LOGOUT"})]})})})}var he=n.p+"static/media/phonebook-background.fccb601f16f2d0d773b3.jpg";function be(){var e=(0,a.v9)(u.by);return(0,p.jsxs)(r.Z,{sx:{backgroundImage:"url(".concat(he,")"),height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[(0,p.jsx)(ge,{}),(0,p.jsx)(j,{title:"Phonebook",children:e?(0,p.jsx)(Z,{message:e}):(0,p.jsx)(m,{})}),(0,p.jsxs)(j,{title:"Contacts",children:[(0,p.jsx)(k,{}),e?(0,p.jsx)(Z,{message:e}):(0,p.jsx)(y,{})]})]})}},9952:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184),i=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(4454)},4454:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return s.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return f},unsupportedProp:function(){return x},useControlled:function(){return g.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return Z.Z}});var o=n(5902),r=n(4036),a=n(8949).Z,i=n(9201),c=n(3199);var l=function(e,t){return function(){return null}},s=n(9103),d=n(8301),u=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,v=n(162),f=n(8252).Z;var x=function(e,t,n,o,r){return null},g=n(5158),h=n(9683),b=n(2071),Z=n(3031),y={configure:function(e){o.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=289.1ad9d260.chunk.js.map