(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(15),l=a.n(c),r=(a(29),a.p,a(30),a(13)),s=a(4),o={baseStyles:{navbar:{textAlign:"center",backgroundColor:"#5CDB95",height:75,marginTop:0},appName:{color:"darkblue",position:"absolute",left:15,top:17,fontSize:30,fontFamily:"arial"},navLink:{textDecoration:"none",marginRight:15},navLinkContainer:{position:"absolute",right:15,top:25},landingPage:{padding:20,paddingLeft:85,display:"flex",flexWrap:"wrap",flexDirection:"row"},appBackground:{backgroundColor:"#EAE3EA",padding:5,margin:20,borderRadius:15}},productStyles:{container:{padding:20,paddingLeft:24,paddingRight:24,borderWidth:1,borderStyle:"solid",borderRadius:15,marginRight:30,marginBottom:20,backgroundColor:"snow",borderColor:"#B4DBC0"},image:{width:150,height:150,marginBottom:0,borderRadius:15},name:{fontWeight:"bold",fontSize:20,marginBottom:10,fontFamily:"arial",textAlign:"left"}},itemDetailsStyles:{container:{marginTop:60,borderRadius:15,textAlign:"left",paddingTop:35,width:"75%",paddingBottom:35,marginLeft:20,marginRight:20,paddingLeft:15,paddingRight:15,backgroundColor:"snow",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},image:{width:350,height:350,marginBottom:0,borderRadius:15,marginLeft:0,marginRight:15},text:{fontSize:16,marginBottom:5}},buttonStyles:{button:{border:1,backgroundColor:"#5CDB95",boxShadow:"none",borderRadius:15,width:"100%"}},cartReceiptStyles:{container:{marginTop:15,marginLeft:15,display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},image:{height:100,width:100},item:{paddingTop:15,padding:10,paddingBottom:15,borderRadius:15,marginBottom:20,backgroundColor:"snow",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},summary:{backgroundColor:"snow",textAlign:"left",padding:35,borderRadius:20,marginLeft:15,height:125}},summaryStyles:{container:{display:"flex",justifyContent:"space-between"},labels:{fontWeight:"bold",marginRight:50}}},d=a(5),j=a(3),b={sale:.15,tax:.0625,shipping:3,dollarSign:"$"},u={calculateSubTotal:function(e){var t=0;return Object.keys(e).forEach((function(a){var i=e[a].onSale?e[a].price-e[a].price*b.sale:e[a].price;t+=e[a].quantity*i})),t},calculateTax:function(e){return e*b.tax},calculateTotal:function(e,t){return e+t+b.shipping},calculateSalePrice:function(e){return e-b.sale*e},roundDecimal:function(e){return Number.parseFloat(e).toFixed(2)}},m=a(0);var y=function(e){var t=e.item,a=Object(j.f)(),i=Object(d.b)(),n=t.onSale?u.calculateSalePrice(t.price)+b.dollarSign:"",c=t.onSale?{textDecoration:"line-through"}:{};return Object(m.jsxs)("div",{style:o.productStyles.container,children:[Object(m.jsx)("div",{style:o.productStyles.name,children:t.name}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:t.image,style:o.productStyles.image,alt:"product-image"}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[Object(m.jsx)("div",{style:c,children:t.price+b.dollarSign}),Object(m.jsx)("div",{style:{color:"red"},children:n})]}),Object(m.jsx)("button",{style:o.buttonStyles.button,onClick:function(){a.push("/item",{params:t})},children:"More"}),Object(m.jsx)("button",{onClick:function(){i({type:"ADD",payload:t})},style:Object(s.a)({},o.buttonStyles.button),children:"Add To Cart"})]})]})},p=a.p+"static/media/shoe-blue.417d6c28.jpg",h=a.p+"static/media/shoe-purple.29ba77c6.jpg",O=a.p+"static/media/shoe-red.44269788.jpg",g=[{name:"Blue Shoe",SKU:"F213K124QD",onSale:!1,inventory:25,description:"Blue shoe with white base and black lace, comfortable to wear",image:p,price:100},{name:"Purple Shoe",SKU:"8A127JKWNA",onSale:!0,inventory:25,description:"Purple shoe with white base and white laces",image:h,price:125},{name:"Red Shoe",SKU:"Q1231S9LKM",onSale:!0,inventory:25,description:"Red shoe with white base and red laces",image:O,price:150},{name:"Nike Shoe",SKU:"HA214JKL2N",onSale:!1,inventory:25,description:"Nike shoe with white base and black lace, stylish and comfortable",image:p,price:100},{name:"Shoe",SKU:"90F992KLMN",onSale:!1,inventory:25,description:"Blue shoe with white base and black lace, every day wear, very comfortable",image:p,price:100},{name:"Regular Shoe",SKU:"A02GN781DC",onSale:!0,inventory:25,description:"Regular shoe with white base and white laces",image:h,price:125},{name:"Sports Shoe",SKU:"Q9241SFCSD",onSale:!1,inventory:25,description:"Sports shoe with white base and red laces",image:O,price:150}];var x=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){n(g)})),Object(m.jsx)("div",{style:o.baseStyles.landingPage,children:a.map((function(e){return Object(m.jsx)(y,{item:e})}))})},S={quantityMap:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}]};var v=function(e){var t=e.item,a=e.quantity,i=Object(d.b)(),n=S.quantityMap,c=t.onSale?u.calculateSalePrice(t.price)+b.dollarSign:"",l=t.onSale?{textDecoration:"line-through"}:{};return Object(m.jsxs)("div",{style:o.cartReceiptStyles.item,children:[Object(m.jsxs)("div",{style:{textAlign:"left"},children:[Object(m.jsx)("div",{style:{fontWeight:"bold"},children:t.name}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.image,style:o.cartReceiptStyles.image,alt:"product-image"})}),Object(m.jsx)("div",{style:{fontSize:12},children:t.SKU})]}),Object(m.jsxs)("div",{style:{marginLeft:10,textAlign:"left",width:"50%"},children:[Object(m.jsx)("div",{style:{marginTop:15},children:t.description}),Object(m.jsx)("div",{style:{color:"red"},children:t.onSale?"On Sale":""})]}),Object(m.jsxs)("div",{style:{marginLeft:10,textAlign:"right"},children:[Object(m.jsx)("div",{style:Object(s.a)({fontSize:25,marginTop:10},l),children:t.price+b.dollarSign}),Object(m.jsx)("div",{style:{fontSize:25,color:"red"},children:c}),Object(m.jsx)("div",{children:Object(m.jsx)("select",{value:a,onChange:function(e){i({type:"UPDATE",payload:{item:t,quantity:e.target.value}})},style:{width:50,marginTop:5},children:n.map((function(e){var t=e.label,a=e.value;return Object(m.jsx)("option",{value:a,children:t},a)}))})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{style:Object(s.a)({marginTop:t.onSale?20:55},o.buttonStyles.button),onClick:function(){i({type:"REMOVE",payload:t})},children:"Remove"})})]})]})};var f=function(e){var t=e.totalItems,a=e.subTotal,i=e.tax,n=e.total;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:o.summaryStyles.container,children:[Object(m.jsx)("div",{style:o.summaryStyles.labels,children:"Total Items:"}),Object(m.jsx)("div",{children:t})]}),Object(m.jsxs)("div",{style:o.summaryStyles.container,children:[Object(m.jsx)("div",{style:o.summaryStyles.labels,children:"Subtotal:"}),Object(m.jsx)("div",{children:b.dollarSign+u.roundDecimal(a)})]}),Object(m.jsxs)("div",{style:o.summaryStyles.container,children:[Object(m.jsx)("div",{style:o.summaryStyles.labels,children:"Tax:"}),Object(m.jsx)("div",{children:b.dollarSign+u.roundDecimal(i)})]}),Object(m.jsxs)("div",{style:o.summaryStyles.container,children:[Object(m.jsx)("div",{style:o.summaryStyles.labels,children:"Shipping:"}),Object(m.jsx)("div",{children:b.dollarSign+u.roundDecimal(b.shipping)})]}),Object(m.jsxs)("div",{style:o.summaryStyles.container,children:[Object(m.jsx)("div",{style:o.summaryStyles.labels,children:"Total:"}),Object(m.jsx)("div",{children:b.dollarSign+u.roundDecimal(n)})]})]})};var w=function(){var e=Object(j.f)(),t=Object(d.c)((function(e){return e.cartItems})),a=Object(d.c)((function(e){return e.totalItems})),n=Object(i.useState)(u.calculateSubTotal(t)),c=Object(r.a)(n,2),l=c[0],b=c[1],y=Object(i.useState)(u.calculateTax(l)),p=Object(r.a)(y,2),h=p[0],O=p[1],g=Object(i.useState)(u.calculateTotal(l,h)),x=Object(r.a)(g,2),S=x[0],w=x[1];return Object(i.useEffect)((function(){b(u.calculateSubTotal(t))}),[t]),Object(i.useEffect)((function(){O(u.calculateTax(l))}),[l]),Object(i.useEffect)((function(){w(u.calculateTotal(l,h))}),[h]),Object.keys(t).length>0?Object(m.jsxs)("div",{style:o.cartReceiptStyles.container,children:[Object(m.jsx)("div",{children:Object.keys(t).map((function(e){return Object(m.jsx)(v,{item:t[e],quantity:t[e].quantity})}))}),Object(m.jsxs)("div",{style:o.cartReceiptStyles.summary,children:[Object(m.jsx)(f,{totalItems:a,subTotal:l,tax:h,total:S}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{style:Object(s.a)({marginTop:25},o.buttonStyles.button),onClick:function(){e.push("/receipt",{params:{subTotal:l,tax:h,total:S}})},children:"Purchase"})})]})]}):Object(m.jsx)("div",{children:"No items in cart"})},T=a(10);var C=function(){var e="Cart ("+Object(d.c)((function(e){return e.totalItems}))+")";return Object(m.jsxs)("nav",{style:o.baseStyles.navbar,children:[Object(m.jsx)("div",{style:o.baseStyles.appName,children:"ShopHub"}),Object(m.jsxs)("div",{style:o.baseStyles.navLinkContainer,children:[Object(m.jsxs)(T.b,{style:o.baseStyles.navLink,to:"/cart",children:[e," "]}),Object(m.jsx)(T.b,{style:o.baseStyles.navLink,to:"/",children:"Home"})]})]})};var D=function(){var e=Object(j.g)().state.params,t=Object(d.b)(),a=e.onSale?"Sale Price: "+u.calculateSalePrice(e.price)+b.dollarSign:"",i=e.onSale?{textDecoration:"line-through"}:{};return Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsxs)("div",{style:Object(s.a)({},o.itemDetailsStyles.container),children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{fontSize:35,marginBottom:5},children:e.name}),Object(m.jsx)("img",{src:e.image,style:o.itemDetailsStyles.image,alt:"product-image"})]}),Object(m.jsxs)("div",{style:{marginTop:50},children:[Object(m.jsx)("div",{style:o.itemDetailsStyles.text,children:e.description}),Object(m.jsxs)("div",{style:o.itemDetailsStyles.text,children:["SKU: ",e.SKU]}),Object(m.jsxs)("div",{style:Object(s.a)(Object(s.a)({},o.itemDetailsStyles.text),i),children:["Price: ",e.price+b.dollarSign]}),Object(m.jsx)("div",{style:{color:"red"},children:a}),Object(m.jsxs)("div",{style:o.itemDetailsStyles.text,children:["Inventory: ",e.inventory]}),Object(m.jsx)("button",{onClick:function(){t({type:"ADD",payload:e})},style:o.buttonStyles.button,children:"Add To Cart"})]})]})})};var R=function(e){var t=e.item,a=t.onSale?u.calculateSalePrice(t.price):t.price;return Object(m.jsxs)("div",{style:o.cartReceiptStyles.item,children:[Object(m.jsxs)("div",{style:{textAlign:"left"},children:[Object(m.jsx)("div",{style:{fontWeight:"bold"},children:t.name}),Object(m.jsx)("img",{src:t.image,style:o.cartReceiptStyles.image,alt:"product-image"}),Object(m.jsx)("div",{style:{fontSize:12},children:t.SKU})]}),Object(m.jsxs)("div",{style:{textAlign:"left",width:"50%"},children:[Object(m.jsx)("div",{style:{marginTop:15},children:t.description}),Object(m.jsx)("div",{style:{color:"red"},children:t.onSale?"On Sale":""})]}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)("div",{style:{fontSize:35,marginTop:10,color:t.onSale?"red":"black"},children:b.dollarSign+a}),Object(m.jsxs)("div",{children:["Quantity: ",t.quantity]})]})]})};var k=function(){var e=Object(d.d)().getState().cartItems,t=Object(d.d)().getState().totalItems,a=Object(j.g)(),n=Object(d.b)(),c=a.state.params;return Object(i.useEffect)((function(){n({type:"CLEAR"})})),Object(m.jsxs)("div",{style:o.cartReceiptStyles.container,children:[Object(m.jsx)("div",{children:Object.keys(e).map((function(t){return Object(m.jsx)(R,{item:e[t]})}))}),Object(m.jsxs)("div",{style:o.cartReceiptStyles.summary,children:[Object(m.jsx)("div",{style:{textAlign:"center",marginBottom:15},children:"Order Summary"}),Object(m.jsx)(f,{totalItems:t,subTotal:c.subTotal,tax:c.tax,total:c.total})]})]})},I=a(12),A=a(24),K=a.n(A),E={cartItems:{},totalItems:0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if("ADD"===t.type){var a=Object(s.a)({},e.cartItems),i=e.totalItems;return void 0===a[t.payload.SKU]?a[t.payload.SKU]=Object(s.a)({quantity:1},t.payload):a[t.payload.SKU].quantity+=1,i+=1,Object(s.a)(Object(s.a)({},e),{},{cartItems:a,totalItems:i})}if("REMOVE"===t.type){var n=Object(s.a)({},e.cartItems),c=e.totalItems;return void 0!==n[t.payload.SKU]&&(c-=n[t.payload.SKU].quantity,delete n[t.payload.SKU]),Object(s.a)(Object(s.a)({},e),{},{cartItems:n,totalItems:c})}if("UPDATE"===t.type){var l=Object(s.a)({},e.cartItems),r=e.totalItems;if(void 0!==l[t.payload.item.SKU]){var o=l[t.payload.item.SKU].quantity,d=t.payload.quantity;d>o?r+=d-o:r-=o-d,l[t.payload.item.SKU].quantity=parseInt(t.payload.quantity)}return Object(s.a)(Object(s.a)({},e),{},{cartItems:l,totalItems:r})}return"CLEAR"===t.type&&(e=E),e},B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,L=Object(I.d)(U,B(Object(I.a)(K.a)));var P=function(){return Object(m.jsx)(d.a,{store:L,children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C,{}),Object(m.jsx)("div",{className:"App",style:o.baseStyles.appBackground,children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/e-commerce-storefront",component:x}),Object(m.jsx)(j.a,{exact:!0,path:"/e-commerce-storefront/cart",component:w}),Object(m.jsx)(j.a,{exact:!0,path:"/e-commerce-storefront/item",component:D}),Object(m.jsx)(j.a,{exact:!0,path:"/e-commerce-storefront/receipt",component:k}),Object(m.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(m.jsx)(j.a,{exact:!0,path:"/cart",component:w}),Object(m.jsx)(j.a,{exact:!0,path:"/item",component:D}),Object(m.jsx)(j.a,{exact:!0,path:"/receipt",component:k})]})})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),i(e),n(e),c(e),l(e)}))};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),q()}},[[41,1,2]]]);
//# sourceMappingURL=main.3ec4485f.chunk.js.map