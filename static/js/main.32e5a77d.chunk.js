(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),l=i(15),c=i.n(l),r=(i(29),i.p,i(30),i(13)),s=i(4),o={baseStyles:{navbar:{textAlign:"center",backgroundColor:"#5CDB95",height:75,marginTop:0},appName:{color:"darkblue",position:"absolute",left:15,top:17,fontSize:30,fontFamily:"arial"},navLink:{textDecoration:"none",marginRight:15},navLinkContainer:{position:"absolute",right:15,top:25},landingPage:{padding:20,paddingLeft:85,display:"flex",flexWrap:"wrap",flexDirection:"row"},appBackground:{backgroundColor:"#EAE3EA",padding:5,margin:20,borderRadius:15}},productStyles:{container:{padding:20,paddingLeft:24,paddingRight:24,borderWidth:1,borderStyle:"solid",borderRadius:15,marginRight:30,marginBottom:20,backgroundColor:"snow",borderColor:"#B4DBC0"},image:{width:150,height:150,marginBottom:0,borderRadius:15},name:{fontWeight:"bold",fontSize:20,marginBottom:10,fontFamily:"arial",textAlign:"left"}},itemDetailsStyles:{container:{marginTop:60,borderRadius:15,textAlign:"left",paddingTop:35,width:"75%",paddingBottom:35,marginLeft:20,marginRight:20,paddingLeft:15,paddingRight:15,backgroundColor:"snow",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},image:{width:350,height:350,marginBottom:0,borderRadius:15,marginLeft:0,marginRight:15},text:{fontSize:16,marginBottom:5}},buttonStyles:{button:{border:1,backgroundColor:"#5CDB95",boxShadow:"none",borderRadius:15,width:"100%"}},cartReceiptStyles:{container:{marginTop:15,marginLeft:15,display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},image:{height:100,width:100},item:{paddingTop:15,padding:10,paddingBottom:15,borderRadius:15,marginBottom:20,backgroundColor:"snow",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},summary:{backgroundColor:"snow",textAlign:"left",padding:35,borderRadius:20,marginLeft:15,height:125}},summaryStyles:{container:{display:"flex",justifyContent:"space-between"},labels:{fontWeight:"bold",marginRight:50}}},d=i(5),j=i(3),b={sale:.15,tax:.0625,shipping:3,dollarSign:"$"},u={calculateSubTotal:function(e){var t=0;return Object.keys(e).forEach((function(i){var a=e[i].onSale?e[i].price-e[i].price*b.sale:e[i].price;t+=e[i].quantity*a})),t},calculateTax:function(e){return e*b.tax},calculateTotal:function(e,t){return e+t+b.shipping},calculateSalePrice:function(e){return e-b.sale*e},roundDecimal:function(e){return Number.parseFloat(e).toFixed(2)}},y=i(0);var m=function(e){var t=e.item,i=Object(j.f)(),a=Object(d.b)(),n=t.onSale?u.calculateSalePrice(t.price)+b.dollarSign:"",l=t.onSale?{textDecoration:"line-through"}:{};return Object(y.jsxs)("div",{style:o.productStyles.container,children:[Object(y.jsx)("div",{style:o.productStyles.name,children:t.name}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:t.image,style:o.productStyles.image,alt:"product-image"}),Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[Object(y.jsx)("div",{style:l,children:t.price+b.dollarSign}),Object(y.jsx)("div",{style:{color:"red"},children:n})]}),Object(y.jsx)("button",{style:o.buttonStyles.button,onClick:function(){i.push("/item",{params:t})},children:"More"}),Object(y.jsx)("button",{onClick:function(){a({type:"ADD",payload:t})},style:Object(s.a)({},o.buttonStyles.button),children:"Add To Cart"})]})]})},p=i.p+"static/media/shoe-blue.417d6c28.jpg",h=i.p+"static/media/shoe-purple.29ba77c6.jpg",O=i.p+"static/media/shoe-red.44269788.jpg",g=[{name:"Blue Shoe",SKU:"F213K124QD",onSale:!1,inventory:25,description:"Blue shoe with white base and black lace, comfortable to wear",image:p,price:100},{name:"Purple Shoe",SKU:"8A127JKWNA",onSale:!0,inventory:25,description:"Purple shoe with white base and white laces",image:h,price:125},{name:"Red Shoe",SKU:"Q1231S9LKM",onSale:!0,inventory:25,description:"Red shoe with white base and red laces",image:O,price:150},{name:"Nike Shoe",SKU:"HA214JKL2N",onSale:!1,inventory:25,description:"Nike shoe with white base and black lace, stylish and comfortable",image:p,price:100},{name:"Shoe",SKU:"90F992KLMN",onSale:!1,inventory:25,description:"Blue shoe with white base and black lace, every day wear, very comfortable",image:p,price:100},{name:"Regular Shoe",SKU:"A02GN781DC",onSale:!0,inventory:25,description:"Regular shoe with white base and white laces",image:h,price:125},{name:"Sports Shoe",SKU:"Q9241SFCSD",onSale:!1,inventory:25,description:"Sports shoe with white base and red laces",image:O,price:150}];var x=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){n(g)})),Object(y.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:Object(y.jsx)("div",{style:o.baseStyles.landingPage,children:i.map((function(e){return Object(y.jsx)(m,{item:e})}))})})},S={quantityMap:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}]};var v=function(e){var t=e.item,i=e.quantity,a=Object(d.b)(),n=S.quantityMap,l=t.onSale?u.calculateSalePrice(t.price)+b.dollarSign:"",c=t.onSale?{textDecoration:"line-through"}:{};return Object(y.jsxs)("div",{style:o.cartReceiptStyles.item,children:[Object(y.jsxs)("div",{style:{textAlign:"left"},children:[Object(y.jsx)("div",{style:{fontWeight:"bold"},children:t.name}),Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:t.image,style:o.cartReceiptStyles.image,alt:"product-image"})}),Object(y.jsx)("div",{style:{fontSize:12},children:t.SKU})]}),Object(y.jsxs)("div",{style:{marginLeft:10,textAlign:"left",width:"50%"},children:[Object(y.jsx)("div",{style:{marginTop:15},children:t.description}),Object(y.jsx)("div",{style:{color:"red"},children:t.onSale?"On Sale":""})]}),Object(y.jsxs)("div",{style:{marginLeft:10,textAlign:"right"},children:[Object(y.jsx)("div",{style:Object(s.a)({fontSize:25,marginTop:10},c),children:t.price+b.dollarSign}),Object(y.jsx)("div",{style:{fontSize:25,color:"red"},children:l}),Object(y.jsx)("div",{children:Object(y.jsx)("select",{value:i,onChange:function(e){a({type:"UPDATE",payload:{item:t,quantity:e.target.value}})},style:{width:50,marginTop:5},children:n.map((function(e){var t=e.label,i=e.value;return Object(y.jsx)("option",{value:i,children:t},i)}))})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:Object(s.a)({marginTop:t.onSale?20:55},o.buttonStyles.button),onClick:function(){a({type:"REMOVE",payload:t})},children:"Remove"})})]})]})};var f=function(e){var t=e.totalItems,i=e.subTotal,a=e.tax,n=e.total;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{style:o.summaryStyles.container,children:[Object(y.jsx)("div",{style:o.summaryStyles.labels,children:"Total Items:"}),Object(y.jsx)("div",{children:t})]}),Object(y.jsxs)("div",{style:o.summaryStyles.container,children:[Object(y.jsx)("div",{style:o.summaryStyles.labels,children:"Subtotal:"}),Object(y.jsx)("div",{children:b.dollarSign+u.roundDecimal(i)})]}),Object(y.jsxs)("div",{style:o.summaryStyles.container,children:[Object(y.jsx)("div",{style:o.summaryStyles.labels,children:"Tax:"}),Object(y.jsx)("div",{children:b.dollarSign+u.roundDecimal(a)})]}),Object(y.jsxs)("div",{style:o.summaryStyles.container,children:[Object(y.jsx)("div",{style:o.summaryStyles.labels,children:"Shipping:"}),Object(y.jsx)("div",{children:b.dollarSign+u.roundDecimal(b.shipping)})]}),Object(y.jsxs)("div",{style:o.summaryStyles.container,children:[Object(y.jsx)("div",{style:o.summaryStyles.labels,children:"Total:"}),Object(y.jsx)("div",{children:b.dollarSign+u.roundDecimal(n)})]})]})};var w=function(){var e=Object(j.f)(),t=Object(d.c)((function(e){return e.cartItems})),i=Object(d.c)((function(e){return e.totalItems})),n=Object(a.useState)(u.calculateSubTotal(t)),l=Object(r.a)(n,2),c=l[0],b=l[1],m=Object(a.useState)(u.calculateTax(c)),p=Object(r.a)(m,2),h=p[0],O=p[1],g=Object(a.useState)(u.calculateTotal(c,h)),x=Object(r.a)(g,2),S=x[0],w=x[1];return Object(a.useEffect)((function(){b(u.calculateSubTotal(t))}),[t]),Object(a.useEffect)((function(){O(u.calculateTax(c))}),[c]),Object(a.useEffect)((function(){w(u.calculateTotal(c,h))}),[h]),Object.keys(t).length>0?Object(y.jsxs)("div",{style:o.cartReceiptStyles.container,children:[Object(y.jsx)("div",{children:Object.keys(t).map((function(e){return Object(y.jsx)(v,{item:t[e],quantity:t[e].quantity})}))}),Object(y.jsxs)("div",{style:o.cartReceiptStyles.summary,children:[Object(y.jsx)(f,{totalItems:i,subTotal:c,tax:h,total:S}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:Object(s.a)({marginTop:25},o.buttonStyles.button),onClick:function(){e.push("/receipt",{params:{subTotal:c,tax:h,total:S}})},children:"Purchase"})})]})]}):Object(y.jsx)("div",{children:"No items in cart"})},T=i(10);var C=function(){var e="Cart ("+Object(d.c)((function(e){return e.totalItems}))+")";return Object(y.jsxs)("nav",{style:o.baseStyles.navbar,children:[Object(y.jsx)("div",{style:o.baseStyles.appName,children:"ShopHub"}),Object(y.jsxs)("div",{style:o.baseStyles.navLinkContainer,children:[Object(y.jsxs)(T.b,{style:o.baseStyles.navLink,to:"/cart",children:[e," "]}),Object(y.jsx)(T.b,{style:o.baseStyles.navLink,to:"",children:"Home"})]})]})};var D=function(){var e=Object(j.g)().state.params,t=Object(d.b)(),i=e.onSale?"Sale Price: "+u.calculateSalePrice(e.price)+b.dollarSign:"",a=e.onSale?{textDecoration:"line-through"}:{};return Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(y.jsxs)("div",{style:Object(s.a)({},o.itemDetailsStyles.container),children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{fontSize:35,marginBottom:5},children:e.name}),Object(y.jsx)("img",{src:e.image,style:o.itemDetailsStyles.image,alt:"product-image"})]}),Object(y.jsxs)("div",{style:{marginTop:50},children:[Object(y.jsx)("div",{style:o.itemDetailsStyles.text,children:e.description}),Object(y.jsxs)("div",{style:o.itemDetailsStyles.text,children:["SKU: ",e.SKU]}),Object(y.jsxs)("div",{style:Object(s.a)(Object(s.a)({},o.itemDetailsStyles.text),a),children:["Price: ",e.price+b.dollarSign]}),Object(y.jsx)("div",{style:{color:"red"},children:i}),Object(y.jsxs)("div",{style:o.itemDetailsStyles.text,children:["Inventory: ",e.inventory]}),Object(y.jsx)("button",{onClick:function(){t({type:"ADD",payload:e})},style:o.buttonStyles.button,children:"Add To Cart"})]})]})})};var R=function(e){var t=e.item,i=t.onSale?u.calculateSalePrice(t.price):t.price;return Object(y.jsxs)("div",{style:o.cartReceiptStyles.item,children:[Object(y.jsxs)("div",{style:{textAlign:"left"},children:[Object(y.jsx)("div",{style:{fontWeight:"bold"},children:t.name}),Object(y.jsx)("img",{src:t.image,style:o.cartReceiptStyles.image,alt:"product-image"}),Object(y.jsx)("div",{style:{fontSize:12},children:t.SKU})]}),Object(y.jsxs)("div",{style:{textAlign:"left",width:"50%"},children:[Object(y.jsx)("div",{style:{marginTop:15},children:t.description}),Object(y.jsx)("div",{style:{color:"red"},children:t.onSale?"On Sale":""})]}),Object(y.jsxs)("div",{style:{textAlign:"right"},children:[Object(y.jsx)("div",{style:{fontSize:35,marginTop:10,color:t.onSale?"red":"black"},children:b.dollarSign+i}),Object(y.jsxs)("div",{children:["Quantity: ",t.quantity]})]})]})};var k=function(){var e=Object(d.d)().getState().cartItems,t=Object(d.d)().getState().totalItems,i=Object(j.g)(),n=Object(d.b)(),l=i.state.params;return Object(a.useEffect)((function(){n({type:"CLEAR"})})),Object(y.jsxs)("div",{style:o.cartReceiptStyles.container,children:[Object(y.jsx)("div",{children:Object.keys(e).map((function(t){return Object(y.jsx)(R,{item:e[t]})}))}),Object(y.jsxs)("div",{style:o.cartReceiptStyles.summary,children:[Object(y.jsx)("div",{style:{textAlign:"center",marginBottom:15},children:"Order Summary"}),Object(y.jsx)(f,{totalItems:t,subTotal:l.subTotal,tax:l.tax,total:l.total})]})]})},I=i(12),A=i(24),K=i.n(A),E={cartItems:{},totalItems:0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("ADD"===t.type){var i=Object(s.a)({},e.cartItems),a=e.totalItems;return void 0===i[t.payload.SKU]?i[t.payload.SKU]=Object(s.a)({quantity:1},t.payload):i[t.payload.SKU].quantity+=1,a+=1,Object(s.a)(Object(s.a)({},e),{},{cartItems:i,totalItems:a})}if("REMOVE"===t.type){var n=Object(s.a)({},e.cartItems),l=e.totalItems;return void 0!==n[t.payload.SKU]&&(l-=n[t.payload.SKU].quantity,delete n[t.payload.SKU]),Object(s.a)(Object(s.a)({},e),{},{cartItems:n,totalItems:l})}if("UPDATE"===t.type){var c=Object(s.a)({},e.cartItems),r=e.totalItems;if(void 0!==c[t.payload.item.SKU]){var o=c[t.payload.item.SKU].quantity,d=t.payload.quantity;d>o?r+=d-o:r-=o-d,c[t.payload.item.SKU].quantity=parseInt(t.payload.quantity)}return Object(s.a)(Object(s.a)({},e),{},{cartItems:c,totalItems:r})}return"CLEAR"===t.type&&(e=E),e},B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,L=Object(I.d)(U,B(Object(I.a)(K.a)));var P=function(){return Object(y.jsx)(d.a,{store:L,children:Object(y.jsxs)(T.a,{children:[Object(y.jsx)(C,{}),Object(y.jsx)("div",{className:"App",style:o.baseStyles.appBackground,children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(y.jsx)(j.a,{exact:!0,path:"/cart",component:w}),Object(y.jsx)(j.a,{exact:!0,path:"/item",component:D}),Object(y.jsx)(j.a,{exact:!0,path:"/receipt",component:k})]})})]})})},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,42)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),l(e),c(e)}))};c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),q()}},[[41,1,2]]]);
//# sourceMappingURL=main.32e5a77d.chunk.js.map