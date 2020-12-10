(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),n=s(10),c=s.n(n),o=(s(18),s(2)),r=s(3),l=s(5),d=s(4),j=s(9),h=s(11),b=s.n(h),p=(s(21),s(12)),m=s.n(p),u=(s(22),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){m.a.init({duration:2e3})}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,i=this.props.data.address.city,n=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#skills",children:"Skills"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{"data-aos":"fade-right",className:"responsive-headline",children:["I'm ",e,"."]}),Object(a.jsxs)("h3",{"data-aos":"fade-left",children:["I'm a ",i," based ",Object(a.jsx)("span",{children:t})," ",s]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{"data-aos":"fade-up",className:"social",children:n})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(i.Component)),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("ul",{className:"social-links",children:e}),Object(a.jsx)("ul",{className:"copyright",children:Object(a.jsx)("li",{children:"Made with \u2764\ufe0f by Barbara Bontempo"})})]}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(i.Component),f=s.p+"static/media/resume.aec2dcd7.pdf",x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image;this.props.data.bio,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload}return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:e,alt:"Tim Baker Profile Pic"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:"Hello, my name is Barbara. I'm a full stack web developer with experience in Ruby, Ruby on Rails, Javascript, and React. I enjoy creating things that live on the internet and my goal is to always build products that provide performant, accessible, and 'easy to use', user experiences."}),Object(a.jsx)("p",{children:"Before coding I was on the track to med school and before that law school. After realizing I wasn't passionate about those fields, I found myself learning how to code. Programming allowed me to use all my knowledge from my past experiences in different fields and bring my ideas to life."}),Object(a.jsx)("p",{children:"I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Node JS, and Python."}),Object(a.jsxs)("p",{children:["When I am not coding, I find inspiration through yoga, painting, bird watching, hiking, and taking photos. I am passionate about people and hope that my work can contribute in providing for those who do not have equal resource access to technology."," "]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"columns contact-details"}),Object(a.jsx)("div",{className:"columns download",children:Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:f,className:"button",children:[Object(a.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(i.Component),v=(i.Component,i.Component,i.Component,function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsx)("div",{className:"item-wrap",children:Object(a.jsxs)("a",{href:e.url,title:e.title,children:[Object(a.jsx)("img",{alt:e.title,src:t}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("h5",{children:e.title}),Object(a.jsx)("p",{children:e.category})]})}),Object(a.jsx)("div",{className:"link-icon",children:Object(a.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(a.jsx)("section",{id:"portfolio",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:"Check Out Some of My Works."}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(i.Component)),g=s(6),w=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("section",{id:"skills",children:[Object(a.jsx)("h1",{className:"header-skills",children:"SKILLS"}),Object(a.jsxs)("div",{className:"all-skills",children:[Object(a.jsxs)("div",{className:"languages",children:[Object(a.jsx)("h3",{className:"titlo",children:"Languages"}),Object(a.jsx)(g.d,{fill:"#F7DF1E",title:"JavaScript",size:40}),Object(a.jsx)("p",{children:"JavaScript"}),Object(a.jsx)(g.i,{fill:"#CC342D",title:"Ruby",size:40}),Object(a.jsx)("p",{children:"Ruby"}),Object(a.jsx)(g.c,{fill:"#E34F26",title:"HTML5",size:40}),Object(a.jsx)("p",{children:"HTML5"}),Object(a.jsx)(g.b,{fill:"#1572B6",title:"CSS3",size:40}),Object(a.jsx)("p",{children:"CSS3"})]}),Object(a.jsxs)("div",{className:"frontend",children:[Object(a.jsx)("h3",{className:"titlo",children:"Frontend"}),Object(a.jsx)(g.h,{fill:"#61DAFB",title:"React",size:40}),Object(a.jsx)("p",{children:"React"}),Object(a.jsx)(g.j,{fill:"#DB7093",title:"styled-components",size:40}),Object(a.jsx)("p",{children:"styled-components"}),Object(a.jsx)(g.a,{fill:"#563D7C",title:"Bootstrap",size:40}),Object(a.jsx)("p",{children:"Bootstrap"})]}),Object(a.jsxs)("div",{className:"backend",children:[Object(a.jsx)("h3",{className:"titlo",children:"Backend"}),Object(a.jsx)(g.g,{fill:"#CC0000",title:"Ruby on Rails",size:50}),Object(a.jsx)("p",{children:"Ruby on Rails"})]}),Object(a.jsxs)("div",{className:"database",children:[Object(a.jsx)("h3",{className:"titlo",children:"Database"}),Object(a.jsx)(g.f,{fill:"#336791",title:"PostgreSQL",size:50}),Object(a.jsx)("p",{children:"PostgreSQL"}),Object(a.jsx)(g.e,{fill:"#4479A1",title:"MySQL",size:50}),Object(a.jsx)("p",{children:"MySQL"})]})]})]})}}]),s}(i.Component),N=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{data:this.state.resumeData.main}),Object(a.jsx)(x,{data:this.state.resumeData.main}),Object(a.jsx)(w,{}),Object(a.jsx)(v,{data:this.state.resumeData.portfolio}),Object(a.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(i.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(a.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.c2097406.chunk.js.map