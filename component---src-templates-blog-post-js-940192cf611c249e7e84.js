(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{236:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),i=a.n(n),r=a(241),o=a.n(r),l=a(350),c=a.n(l),m=a(245),d=a(240),s=a(70),p=a.n(s),u=a(247),h=a.n(u),g=a(249),f=d.a.aside.withConfig({displayName:"Tiles__ImageContainer",componentId:"sc-1pj68g6-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;"]),E=Object(d.a)(h.a).withConfig({displayName:"Tiles__Wrapper",componentId:"sc-1pj68g6-1"})(["height:100%;object-fit:cover;"]),v=d.a.section.withConfig({displayName:"Tiles__Tile",componentId:"sc-1pj68g6-2"})(["display:flex;flex:1;padding:2em;position:relative;a,a:link,a:active,a:visited,a:hover{color:#fcfcfd;}h3,p{position:relative;}"]),b=d.a.h3.withConfig({displayName:"Tiles__Title",componentId:"sc-1pj68g6-3"})(["margin-top:0;"]),y=d.a.p.withConfig({displayName:"Tiles__DateLabel",componentId:"sc-1pj68g6-4"})(["border-top:1px solid $bg;display:inline-block;"]),w=d.a.aside.withConfig({displayName:"Tiles__TileContainer",componentId:"sc-1pj68g6-5"})(["width:100%;height:calc(33vw - 2em);max-height:calc(30em / (16 / 9));display:flex;flex-direction:row;justify-content:stretch;padding-bottom:0em;background:hsl(240,100%,12%);"]),k=d.a.div.withConfig({displayName:"Tiles__Blackout",componentId:"sc-1pj68g6-6"})(["position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(240,100%,12%,0.6);"]),_=function(e){var t=e.tiles;return i.a.createElement("div",{className:"bodyContainer"},i.a.createElement(w,null,t&&t.filter(function(e){return!!e}).map(function(e,t){return i.a.createElement(v,{key:t},i.a.createElement(p.a,{to:e.frontmatter.path},e.frontmatter.image&&e.frontmatter.image.childImageSharp&&i.a.createElement(f,null,i.a.createElement(E,{sizes:e.frontmatter.image.childImageSharp.sizes})),i.a.createElement(k,null),i.a.createElement(b,null,e.frontmatter.title),i.a.createElement("p",null,e.frontmatter.description),i.a.createElement(y,null,Object(g.format)(new Date(e.frontmatter.date),"DD MMM YYYY"))))})))},x=(a(14),a(575)),C=a.n(x),I=function(e){var t=e.tags;return t?i.a.createElement("aside",null,i.a.createElement("span",{className:C.a.tagsLabel},"Tagged as:"),t.map(function(e,a){var n=e.replace(/\W/gi,"-").toLowerCase();return i.a.createElement("span",{key:e,className:C.a.tag},i.a.createElement(p.a,{to:"/tag/"+n},e),a!==t.length-1&&i.a.createElement("span",null,", "))})):i.a.createElement("aside",null)},N=d.a.aside.withConfig({displayName:"SourcePost__StyledElement",componentId:"sc-1x7vug3-0"})(["margin:1em -2em;padding:1em 2em;background:linear-gradient(90deg,#d0d0dc 0,#d0d0dc 8px,#eeeef2 0);.dark &{background:linear-gradient(90deg,#3a3a48 0,#3a3a48 8px,#3d3d4a 0);}"]),j=function(e){var t=e.url;return t?i.a.createElement(N,null,"This article was originally published at ",i.a.createElement("a",{href:t},t)):i.a.createElement(n.Fragment,null)},T=a(242);a.d(t,"pageQuery",function(){return S});var z=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark||{},t=(e||{}).frontmatter,a=(t=void 0===t?{}:t).title,n=t.tags,r=t.url,l=t.image,d=t.description,s=(e||{}).frontmatter,p=void 0===s?{}:s,u=c()(this.props,"data.site.siteMetadata.title"),h=c()(p,"image_credit"),g=this.props.pageContext,f=g.next,E=g.prev;return i.a.createElement(T.a,null,i.a.createElement(o.a,{title:a+" | "+u,htmlAttributes:{lang:"en"}},i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:"@psyked"}),i.a.createElement("meta",{name:"twitter:creator",content:p.creator}),i.a.createElement("meta",{name:"twitter:title",content:a}),i.a.createElement("meta",{name:"twitter:description",content:d}),l&&l.childImageSharp&&i.a.createElement("meta",{name:"twitter:image",content:l.childImageSharp.sizes.src})),i.a.createElement(m.a,Object.assign({},p,{imageCreditMarkdown:h,timeToRead:e.timeToRead})),i.a.createElement("div",{className:"bodyContainer"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"bodyContent"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{className:"endPost"}),i.a.createElement(j,{url:r}),i.a.createElement(I,{tags:n})))),i.a.createElement(_,{tiles:[f,E]}))},n}(i.a.Component),S=(t.default=z,"1495264103")},242:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(241),o=a.n(r),l=a(70),c=a.n(l),m=a(240),d=a(253);var s=m.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:white;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),p=m.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:goldenrod none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=m.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:white;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),h=m.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:black none repeat scroll 0 0;}:checked ~ ","{left:37px;}"],p,u),g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return i.a.createElement(d.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return i.a.createElement(s,{className:"switch"},i.a.createElement(h,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),i.a.createElement(p,null),i.a.createElement(u,null))})},n}(i.a.Component),f=m.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["display:block;background:hsl(240,14%,19%);padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),E=m.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["max-width:60em;margin:0 auto;padding:0.5em 0.2em 0.5em 0.7em;width:100%;display:block;"]),v=Object(m.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),b=m.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),y=function(e){return i.a.createElement(f,null,i.a.createElement(b,null,i.a.createElement(E,null,i.a.createElement(v,{to:"/",activeClassName:"active",exact:"true"},"Home"),i.a.createElement(v,{to:"/blog/",activeClassName:"active"},"Blog Archive"),i.a.createElement(v,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),i.a.createElement(g,null)))},w=a(255),k=m.a.aside.withConfig({displayName:"Footer__Overlay",componentId:"n5fjzj-0"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),_=m.a.li.withConfig({displayName:"Footer__TwitterLink",componentId:"n5fjzj-1"})(["background:#00acee;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),x=m.a.li.withConfig({displayName:"Footer__GitHubLink",componentId:"n5fjzj-2"})(["background:#181818;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),C=m.a.li.withConfig({displayName:"Footer__LinkedInLink",componentId:"n5fjzj-3"})(["background:#0077b5;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),I=m.a.li.withConfig({displayName:"Footer__MediumLink",componentId:"n5fjzj-4"})(["background:#37b042;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),N=m.a.li.withConfig({displayName:"Footer__InstagramLink",componentId:"n5fjzj-5"})(["background:#d6249f;background:radial-gradient( circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90% );a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),j=function(e){return i.a.createElement("footer",{id:"footer",style:{backgroundColor:e.colour||"hsla(240, 100%, 12%, 0.6)",position:"relative",padding:"1em 0 3em"}},i.a.createElement(k,null),i.a.createElement("div",{className:"bodyContainer",style:{zIndex:2,position:"relative",color:"white"}},i.a.createElement("div",{className:"bodyContent"},i.a.createElement("h3",null,"Elsewhere, on social media;"),i.a.createElement("ul",{className:"external-profiles"},i.a.createElement(_,null,i.a.createElement("a",{href:"//twitter.com/psyked"},i.a.createElement("span",null,i.a.createElement(w.e,null),"Twitter"))),i.a.createElement(N,null,i.a.createElement("a",{href:"//instagram.com/psyked"},i.a.createElement("span",null,i.a.createElement(w.b,null),"Instagram"))),i.a.createElement(x,null,i.a.createElement("a",{href:"//github.com/psyked"},i.a.createElement("span",null,i.a.createElement(w.a,null),"GitHub"))),i.a.createElement(C,null,i.a.createElement("a",{href:"//linkedin.com/in/jamesford"},i.a.createElement("span",null,i.a.createElement(w.c,null),"LinkedIn"))),i.a.createElement(I,null,i.a.createElement("a",{href:"//medium.com/@psyked"},i.a.createElement("span",null,i.a.createElement(w.d,null),"Medium")))))))};a(254);var T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.children,n=t.keyColour;return n&&n.muted&&(e=n.muted),i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{htmlAttributes:{lang:"en"}}),i.a.createElement(y,null),i.a.createElement("main",null,a),i.a.createElement(j,{colour:e}))},n}(i.a.Component);t.a=T},245:function(e,t,a){"use strict";a(24),a(25),a(13),a(50),a(18);var n=a(0),i=a.n(n),r=a(247),o=a.n(r),l=a(249),c=a(240),m=a(256),d=a.n(m);var s=c.a.header.withConfig({displayName:"Banner__Wrapper",componentId:"hibpma-0"})(["background:center center / cover hsl(240,100%,12%);position:relative;padding-top:calc(68px + 2em);padding-bottom:3em;padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),p=c.a.aside.withConfig({displayName:"Banner__Overlay",componentId:"hibpma-1"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),u=c.a.figure.withConfig({displayName:"Banner__ImageContainer",componentId:"hibpma-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;margin:0;}"]),h=Object(c.a)(o.a).withConfig({displayName:"Banner__ImageWrapper",componentId:"hibpma-3"})(["height:100%;"]),g=c.a.figcaption.withConfig({displayName:"Banner__ImageCredit",componentId:"hibpma-4"})(["position:absolute;bottom:1em;right:1.6em;font-size:0.6em;color:white;z-index:2;text-align:right;"]);t.a=function(e){var t,a=e.title,n=e.date,r=e.description,o=e.image,c=e.imageCredit,m=e.imageCreditMarkdown,f=e.timeToRead,E=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["title","date","description","image","imageCredit","imageCreditMarkdown","timeToRead"]);return o&&o.colors&&o.colors.muted&&(t=o.colors.muted),i.a.createElement(s,Object.assign({style:{minHeight:"320px",background:t}},E),o&&o.childImageSharp&&i.a.createElement(u,null,i.a.createElement(h,o.childImageSharp),!!c&&i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(g,null,"Cover image credit: ",c)),!!m&&i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(g,null,"Cover image credit:"," ",i.a.createElement(d.a,{source:m,renderers:{paragraph:function(e){var t=e.children;return i.a.createElement("span",null,t)}}})))),i.a.createElement(p,null),i.a.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative",zIndex:2}},!!a&&i.a.createElement("header",null,i.a.createElement("h1",null,a)),!!r&&i.a.createElement("div",null,i.a.createElement("h2",null,r)),!!n&&i.a.createElement("aside",null,"Published: ",Object(l.format)(new Date(n),"DD MMM YYYY")," ",!!f&&i.a.createElement(i.a.Fragment,null," | ",f," minute read"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-940192cf611c249e7e84.js.map