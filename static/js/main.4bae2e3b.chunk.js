(this["webpackJsonpcamicon-route-resolved-cart-wishlist-css-final"]=this["webpackJsonpcamicon-route-resolved-cart-wishlist-css-final"]||[]).push([[0],{1520:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(23),r=c.n(n),i=c(7),s=c(3);function o(e,t){switch(t.type){case"ADD_TO_CART":return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.concat(t.payload),cartQuantity:e.cartQuantity+1});case"INCREMENT":return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{qty:e.qty+1}):e})),cartQuantity:e.cartQuantity+1});case"DECREMENT":return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===t.id&&e.qty>0?Object(s.a)(Object(s.a)({},e),{},{qty:e.qty-1}):e}))});case"REMOVE_FROM_CART":return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return 0===e.qty&&e.id!==t.id}))});case"ADD_TO_WISHLIST":return Object(s.a)(Object(s.a)({},e),{},{wishList:e.wishList.concat(t.payload)});case"REMOVE_FROM_WISHLIST":return Object(s.a)(Object(s.a)({},e),{},{wishList:e.wishList.filter((function(e){return t.id!==e.id}))});case"WISHLIST_TO_CART":return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.concat(t.payload)})}}var l=c(0),d=Object(a.createContext)(),j={cartItems:[],wishList:[],cartQuantity:0};function h(e){var t=e.children,c=Object(a.useReducer)(o,j),n=Object(i.a)(c,2),r=n[0],s=r.cartItems,h=r.wishList,b=r.cartQuantity,u=n[1];return Object(l.jsx)(d.Provider,{value:{cartItems:s,wishList:h,cartQuantity:b,dataDispatch:u},children:t})}var b=function(){return Object(a.useContext)(d)};function u(e,t){switch(t.type){case"SEARCH":var c=t.payload.target.value;return console.log(c),Object(s.a)(Object(s.a)({},e),{},{productData:e.productData.filter((function(e){return e.name.includes(c)}))});case"TOGGLE_INVENTORY":return Object(s.a)(Object(s.a)({},e),{},{showInventory:!e.showInventory});case"SHOW_FAST_DELIVERY":return Object(s.a)(Object(s.a)({},e),{},{showFastDelivery:!e.showFastDelivery});case"SORT_BY":return Object(s.a)(Object(s.a)({},e),{},{sortBy:t.payload});case"CLEAR":return Object(s.a)(Object(s.a)({},e),{},{sortBy:null,showFastDelivery:!1,showInventory:!1});default:return e}}var O=c(1),m=O.createContext,x=O.useContext,p=O.useReducer,y=m(),v=function(e){var t=e.children,c=p(u,{showInventory:!0,showFastDelivery:!1,sortBy:null}),a=Object(i.a)(c,2),n=a[0],r=n.showInventory,s=n.showFastDelivery,o=n.sortBy,d=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(y.Provider,{value:{showInventory:r,sortBy:o,showFastDelivery:s,productDispatch:d},children:t})})},f=c(6),g=(c(29),c(4)),I=c.n(g),w=[{id:I.a.random.uuid(),name:"Sony Alpha a6400 Mirrorless Digital Camera",image:"https://static.bhphoto.com/images/images2500x2500/1548254228_1453771.jpg",inStock:I.a.random.boolean(),price:239e3,qty:1,rating:I.a.random.arrayElement([1,2,3,4,5]),fastDelivery:I.a.random.boolean()},{id:I.a.random.uuid(),name:"Canon EOS R Mirrorless Digital Camera",image:"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",inStock:I.a.random.boolean(),price:302e3,qty:1,rating:I.a.random.arrayElement([1,2,3,4,5]),fastDelivery:I.a.random.boolean()},{id:I.a.random.uuid(),name:"Canon Eos Rebel SL3",image:"https://1.img-dpreview.com/files/p/E~TS590x442~articles/5051107755/sl3-white-front-from-above.jpeg",inStock:I.a.random.boolean(),price:115e3,qty:1,rating:I.a.random.arrayElement([1,2,3,4,5]),fastDelivery:I.a.random.boolean()},{id:I.a.random.uuid(),name:"Nikon D35000 DSLR Camera",image:"https://cdn1.smartprix.com/rx-in35FzmKF-w1200-h1200/nikon-d3500-dslr-cam.jpg",inStock:I.a.random.boolean(),price:198e3,qty:1,rating:I.a.random.arrayElement([1,2,3,4,5]),fastDelivery:I.a.random.boolean()}],_=function(e,t){return e.find((function(e){return e.id===t}))},C=function(){var e=b(),t=e.dataDispatch,c=e.wishList,a=e.cartItems,n=x(y),r=n.showInventory,i=n.showFastDelivery,s=n.sortBy,o=n.productDispatch,d=function(e,t){var c=t.showInventory,a=t.showFastDelivery;return e.filter((function(e){var t=e.inStock;return!c||t})).filter((function(e){var t=e.fastDelivery;return!a||t}))}(function(e,t){var c=t.sortBy;return"PRICE_LOW_TO_HIGH"===c?e.sort((function(e,t){return e.price-t.price})):"PRICE_HIGH_TO_LOW"===c?e.sort((function(e,t){return t.price-e.price})):e}(w,{sortBy:s}),{showInventory:r,showFastDelivery:i});return console.log(d),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{style:{marginTop:"1rem"},placeholder:"search products by name",onChange:function(e){return o({type:"SEARCH",payload:e})}}),Object(l.jsxs)("fieldset",{className:"fieldset",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"sort",checked:"PRICE_LOW_TO_HIGH"===s,onClick:function(){return o({type:"SORT_BY",payload:"PRICE_LOW_TO_HIGH"})}}),"Price low to high"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"sort",checked:"PRICE_HIGH_TO_LOW"===s,onClick:function(){return o({type:"SORT_BY",payload:"PRICE_HIGH_TO_LOW"})}}),"Price high to low"]})]}),Object(l.jsxs)("label",{children:[" ",Object(l.jsx)("input",{type:"checkbox",checked:r,onClick:function(){return o({type:"TOGGLE_INVENTORY"})}}),"Include instock"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:i,onClick:function(){return o({type:"SHOW_FAST_DELIVERY"})}}),"Fast Delivery"]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{style:{margin:"1rem"},onClick:function(){return o({type:"CLEAR"})},children:"Clear"})}),Object(l.jsx)("h2",{children:"Products"}),Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("div",{className:"border-div shadow",children:Object(l.jsxs)("div",{className:"flexing",children:[Object(l.jsx)("h3",{className:"heading align-center",children:e.name}),Object(l.jsx)("img",{className:"img",src:e.image,alt:"productname"}),Object(l.jsxs)("p",{children:["Rs.",e.price]}),e.inStock?Object(l.jsx)("div",{children:"in stock"}):Object(l.jsx)("div",{children:"out of stock"}),e.fastDelivery?Object(l.jsx)("div",{children:"Fast Delivery"}):Object(l.jsx)("div",{children:"5 days minimum"}),Object(l.jsx)(f.b,{to:_(a,e.id)?"/cart":"/",style:{textDecoration:"none"},onClick:function(){_(a,e.id)||t({type:"ADD_TO_CART",payload:e})},children:Object(l.jsx)("button",{children:_(a,e.id)?Object(l.jsx)("div",{children:"Go to cart"}):Object(l.jsx)("div",{children:"Add to cart"})})}),Object(l.jsx)("svg",{viewBox:"0 0 24 24",style:{fill:"".concat(_(c,e.id)?"red":"black")},onClick:function(){_(c,e.id)?t({type:"REMOVE_FROM_WISHLIST",id:e.id}):t({type:"ADD_TO_WISHLIST",payload:e})},class:"icon-button",children:Object(l.jsx)("g",{children:Object(l.jsx)("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"})})})]})})}))})]})};function E(){var e=b(),t=e.cartItems,c=e.dataDispatch;var a=t.reduce((function(e,t){return e+t.price*t.qty}),0);return 0===t.length?Object(l.jsx)("h1",{children:"Cart is empty"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"This is cart"}),t.map((function(e){var t=e.name,a=e.image,n=e.price,r=e.id,i=e.qty;return Object(l.jsx)("div",{className:"border-div shadow",children:Object(l.jsxs)("div",{className:"flexing",children:[Object(l.jsx)("h3",{className:"heading align-center",children:t}),Object(l.jsx)("img",{className:"img",src:a,alt:"productname"}),Object(l.jsxs)("p",{children:["Rs.",n]}),Object(l.jsx)("button",{onClick:function(){return c({type:"INCREMENT",id:r})},children:"+"}),Object(l.jsxs)("p",{children:["Quantity:",i]}),Object(l.jsx)("button",{onClick:function(){return c({type:"DECREMENT",id:r})},children:"-"}),Object(l.jsx)("button",{className:"remove_button",onClick:function(){return c({type:"REMOVE_FROM_CART",id:r})},children:"X"})]})})})),Object(l.jsxs)("div",{style:{marginTop:"2rem"},children:["Total price is ",a]})]})}var R=function(){var e=b(),t=e.wishList,c=e.cartItems,a=e.dataDispatch;return 0===t.length?Object(l.jsx)("h1",{children:"WishList is empty"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"WishList"}),Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsxs)("div",{className:"border-div shadow flexing",children:[Object(l.jsx)("img",{className:"img",src:e.image,alt:"product-details"}),Object(l.jsx)("h3",{className:"heading",children:e.name}),Object(l.jsxs)("p",{children:["Rs.",e.price]}),Object(l.jsx)("button",{className:"remove_button",onClick:function(){return a({type:"REMOVE_FROM_WISHLIST",id:e.id})},children:"X"}),Object(l.jsxs)("button",{onClick:function(){return _(c,e.id)?null:a({type:"WISHLIST_TO_CART",payload:e})},children:["add to cart"," "]})]})}))})]})},T=function(){var e=b(),t=e.cartItems,c=e.wishList;return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{class:"Navigation-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)(f.b,{to:"/",children:Object(l.jsx)("header",{className:"Navigation-header text-decoration-none",children:"Camicon"})})}),Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"Navigation-container nav-links",children:[Object(l.jsx)(f.b,{to:"/cart",className:"text-decoration-none link",children:Object(l.jsxs)("li",{class:"cart",children:[Object(l.jsx)("svg",{style:{height:"2.5rem"},"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shopping-cart",class:"svg-inline--fa fa-shopping-cart fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(l.jsx)("path",{fill:"currentColor",d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"})}),Object(l.jsx)("span",{class:"icon-badge badge-color",children:t.length})]})}),Object(l.jsx)(f.b,{to:"/wishlist",className:"text-decoration-none link",children:Object(l.jsxs)("li",{class:"heart",children:[Object(l.jsx)("svg",{style:{height:"2.5rem"},"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"heart",class:"svg-inline--fa fa-heart fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(l.jsx)("path",{fill:"currentColor",d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"})}),Object(l.jsx)("span",{class:"icon-badge badge-color",children:c.length})]})})]})})]})})},D=c(2);function L(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(T,{}),Object(l.jsxs)(D.c,{children:[Object(l.jsx)(D.a,{exact:!0,to:"/",element:Object(l.jsx)(C,{})}),Object(l.jsx)(D.a,{exact:!0,path:"/cart",element:Object(l.jsx)(E,{})}),Object(l.jsx)(D.a,{path:"/wishlist",element:Object(l.jsx)(R,{})})]})]})}var k=document.getElementById("root");r.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)(v,{children:Object(l.jsx)(h,{children:Object(l.jsx)(L,{})})})})}),k)},29:function(e,t,c){}},[[1520,1,2]]]);
//# sourceMappingURL=main.4bae2e3b.chunk.js.map