(this["webpackJsonptile-app"]=this["webpackJsonptile-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a(1),c=a(4),o=a.n(c),l=(a(11),a(5)),s=a(2),p=[{id:1,name:"mercia",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/tepkjhkqaqkkqav1m4x4.jpg",desc:"Wooden effect floor tile",price:10.99,perPack:10,tileArea:900,selected:"false"},{id:2,name:"slate",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/o9mavcrcthoq2ycw5gcv.jpg",desc:"Black slate effect floor tile",price:24.99,perPack:10,tileArea:2211,selected:"false"},{id:3,name:"melia",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/ul6mgp8h5zvj1zreepad.jpg",desc:"Charcoal patterned ceramic",price:28.99,perPack:10,tileArea:400,selected:"false"},{id:4,name:"york",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/jicafebrpodjmhdckzgn.jpg",desc:"white ceramic floor tile",price:10.99,perPack:10,tileArea:1800,selected:"false"},{id:5,name:"mississippi",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/repagohw7bdx09fpr2pa.jpg",desc:"grey matt porcelain tile",price:10.99,perPack:10,tileArea:1800,selected:"false"},{id:6,name:"rockford",img:"https://wickes.scene7.com/is/image/travisperkins/GPID_1100563529_00?$normal$",desc:"grey lappato glazed porcelain tile",price:22.99,perPack:10,tileArea:2025,selected:"false"},{id:7,name:"olympia",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/jqpghegqbel0aciphb61.jpg",desc:"ligh grey polished stone porcelain tile",price:24.99,perPack:10,tileArea:3600,selected:"false"},{id:8,name:"kielder",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/no6phe9ao8sfrak83p6x.jpg",desc:"light grey wood effect porcelain tile",price:11.99,perPack:10,tileArea:1350,selected:"false"},{id:9,name:"alaska",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/jvujuvdmnloctdbconvk.jpg",desc:"grey glazed porcelain tile",price:28.99,perPack:10,tileArea:1800,selected:"false"},{id:10,name:"urban",img:"https://res.cloudinary.com/powerreviews/image/upload/f_auto,q_auto,h_768,w_auto/d_portal-no-product-image_ttlfpi.svg/prod/g43dhmb93onidu732nt1.jpg",desc:"grey ceramic floor tile",price:8.99,perPack:10,tileArea:1089,selected:"false"}];var n=function(e){e.id;var t=e.tileArea,a=e.perPack,c=e.price,o=Object(i.useState)(!1),l=Object(s.a)(o,2),p=l[0],n=l[1],d=Object(i.useState)(0),u=Object(s.a)(d,2),m=u[0],j=u[1],g=Object(i.useState)(0),h=Object(s.a)(g,2),b=h[0],f=h[1],_=Object(i.useState)(0),v=Object(s.a)(_,2),O=v[0],w=v[1],k=Object(i.useState)(0),x=Object(s.a)(k,2),y=x[0],q=x[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Calculator"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=m*b,r=Math.ceil(e/t),i=Math.ceil(r/a),o=i*c;w(o),q(i)}(),n(!0)},children:[Object(r.jsx)("label",{for:"length",children:"Length cm "}),Object(r.jsx)("input",{type:"number",name:"length",id:"length",value:m,onChange:function(e){return j(e.target.value)},required:!0}),Object(r.jsx)("label",{for:"width",children:" Width cm "}),Object(r.jsx)("input",{type:"number",name:"width",id:"width",value:b,onChange:function(e){return f(e.target.value)},required:!0}),Object(r.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]}),p&&Object(r.jsxs)("p",{children:[" total cost $",O," and number of boxes required is ",y]})]})},d=function(e){var t=e.id,a=e.name,c=e.img,o=e.desc,l=e.tileArea,p=e.perPack,d=e.price,u=Object(i.useState)(!1),m=Object(s.a)(u,2),j=m[0],g=m[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("article",{className:"tile",children:[Object(r.jsx)("img",{src:c,alt:a}),Object(r.jsxs)("footer",{children:[Object(r.jsxs)("div",{className:"tile-info",children:[Object(r.jsx)("h4",{children:a}),Object(r.jsxs)("h4",{className:"tile-price",children:["$",d]})]}),Object(r.jsx)("p",{children:o}),Object(r.jsx)("button",{className:"select-btn",onClick:function(){return g(!j)},children:j?"Hide Calculator":"Show Calculator"}),j&&Object(r.jsx)(n,{tileArea:l,perPack:p,price:d},t)]})]},t)})};var u=function(){var e=Object(i.useState)(p),t=Object(s.a)(e,2),a=t[0];return t[1],Object(r.jsx)("main",{children:Object(r.jsxs)("section",{className:"container",children:[Object(r.jsxs)("h2",{children:[a.length," Tiles Available"]}),a.map((function(e){return Object(r.jsx)(d,Object(l.a)({},e),e.id)}))]})})};o.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ca915d77.chunk.js.map