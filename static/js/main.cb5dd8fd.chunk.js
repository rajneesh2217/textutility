(this.webpackJsonptextile=this.webpackJsonptextile||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),n=c(4),s=c.n(n),r=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.Title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active",href:"/",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark mode"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"blue":"light"),children:[Object(o.jsx)("input",{className:"form-check-input mx-3",onClick:e.blueMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable blues mode"})]})]})]})})}var b=i;function d(e){var t=Object(a.useState)("Enter text here"),c=Object(r.a)(t,2),l=c[0],n=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"blue"===e.mode?"red":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:l,onChange:function(e){n(e.target.value)},style:{backgroundColor:"blue"===e.mode?"wheat":"white",color:"blue"===e.mode?"red":"black"},id:"mybox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary",style:{color:"blue"===e.mode?"red":"black"},onClick:function(){var e=l.toUpperCase();n(e)},children:"convert to uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",style:{color:"blue"===e.mode?"red":"black"},onClick:function(){var e=l.toLowerCase();n(e)},children:"convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",style:{color:"blue"===e.mode?"red":"black"},onClick:function(){n("")},children:"Clear the text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",style:{color:"blue"===e.mode?"red":"black"},onClick:function(){n("copyText.select()")},children:"Copy to clickboard"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"blue"===e.mode?"red":"black"},children:[Object(o.jsx)("h1",{children:"your text summary"}),Object(o.jsxs)("p",{children:[l.split(" ").length," words and ",l.length," character"]}),Object(o.jsxs)("p",{children:[.008*l.split(" ").length," minuts required"]}),Object(o.jsx)("h2",{children:"priview"}),Object(o.jsx)("p",{children:l.length>0?l:"Enter something to priview it here"})]})]})}i.defaultProps={Title:"is required",about:"is required"};var m=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type,"alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),":",e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var u=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],l=t[1],n=Object(a.useState)(null),s=Object(r.a)(n,2),i=s[0],u=s[1],h=function(e,t){u({msg:e,type:t})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{Title:"textutility",mode:c,toggleMode:function(){"light"===c?(l("dark"),document.body.style.backgroundColor="gray",h("darkmade is enable","succsess"),document.title="textile is Amazing made",setInterval((function(){document.title="textile is amazing mode"}),2e3),setInterval((function(){document.title=" install textile is amazing mode"}),1500)):(l("light"),document.body.style.backgroundColor="white",h("lightmode is enable ","succsess"))},blueMode:function(){"light"===c?(l("blue"),document.body.style.backgroundColor="blue",h("bluemade is enable","succsess")):(l("light"),document.body.style.backgroundColor="white",h("lightmode is enable ","succsess"))}}),Object(o.jsx)(m,{alert:i}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{heading:"Enter the text to analyze below",mode:c})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),l(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.cb5dd8fd.chunk.js.map