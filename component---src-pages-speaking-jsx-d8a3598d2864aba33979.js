(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{237:function(e,t,a){"use strict";a.r(t);a(299),a(40);var n=a(0),i=a.n(n),r=a(70),o=a.n(r),A=a(241),l=a.n(A),c=a(257),p=a(240),m=a(242),d=(a(18),a(581)),s=a(256),g=function(e){var t=d.data.image;return i.a.createElement(s.a,Object.assign({},e,{image:t}))};a.d(t,"pageQuery",function(){return f});var u=p.a.section.withConfig({displayName:"speaking__Section",componentId:"sc-13hksig-0"})(["",""],"& {\n    box-sizing: border-box;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  @media (min-width: 320px) {\n    & {\n      padding-left: calc(7.14286vw - 6.85714px);\n    }\n  }\n  @media (min-width: 768px) {\n    & {\n      padding-left: 48px;\n    }\n  }\n  @media (min-width: 320px) {\n    & {\n      padding-right: calc(7.14286vw - 6.85714px);\n    }\n  }\n  @media (min-width: 768px) {\n    & {\n      padding-right: 48px;\n    }\n  }"),h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,a=e.site.siteMetadata,n=a.title,r=a.description;return i.a.createElement(m.a,null,i.a.createElement(l.a,{htmlAttributes:{lang:"en"}},i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r})),i.a.createElement(g,{title:"Public Speaking",imageCredit:i.a.createElement("span",null,i.a.createElement("a",{href:"https://twitter.com/JackHowell"},"Jack Howell")," at"," ",i.a.createElement("a",{href:"https://twitter.com/DPiPboro/status/1152660388598689793"},"DPiP"))}),i.a.createElement("section",null,t.map(function(e){var t=e.node,a=t.frontmatter,n=a.title,r=a.presentedAt,A=a.tags,l=t.html;return i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),i.a.createElement(u,null,i.a.createElement("header",null,i.a.createElement("h3",null,n)),i.a.createElement("article",{dangerouslySetInnerHTML:{__html:l}}),i.a.createElement("footer",null,i.a.createElement("p",null,"Presented at: ",r.map(function(e){var t=e.name,a=e.date,n=e.link,r=e.recording;return i.a.createElement("span",{key:t},i.a.createElement("a",{href:n},t+", "+Object(c.format)(new Date(a),"Do MMMM YYYY")),!!r&&i.a.createElement(i.a.Fragment,null," ",i.a.createElement("a",{href:r},"[View Recording]")))})),A&&i.a.createElement("p",null,"Tagged as: ",A.map(function(e,t){return[t>0&&", ",i.a.createElement(o.a,{key:e,to:"/tag/"+e.toLowerCase()},e)]})))))})),i.a.createElement("hr",{className:"endPost"}))},n}(n.Component),f=(t.default=h,"1411857404")},242:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(241),o=a.n(r),A=a(70),l=a.n(A),c=a(240),p=a(250);var m=c.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:#ddd;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),d=c.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:#ffd700 none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),s=c.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:#fff;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{background-color:#f9f9f9;border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),g=c.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:#eceeef none repeat scroll 0 0;}:checked ~ ","{left:40px;}"],d,s),u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return i.a.createElement(p.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return i.a.createElement(m,{className:"switch"},i.a.createElement(g,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),i.a.createElement(d,null),i.a.createElement(s,null))})},n}(i.a.Component),h=c.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["max-width:60em;margin:0 auto;position:sticky;z-index:100;display:block;margin-bottom:-68px;padding-top:0.5em;"]),f=c.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["border-radius:0.3em;background:hsl(240,14%,19%);padding:0.5em 0.2em 0.5em 0.7em;top:0;display:inline-block;border:1px solid var(--text-color);"]),E=Object(c.a)(l.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;margin-left:-0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),b=c.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),w=function(e){return i.a.createElement(h,null,i.a.createElement(b,null,i.a.createElement(f,null,i.a.createElement(E,{to:"/",activeClassName:"active",exact:"true"},"Home"),i.a.createElement(E,{to:"/blog/",activeClassName:"active"},"Blog Archive"),i.a.createElement(E,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),i.a.createElement(u,null)))},x=function(e){return i.a.createElement("footer",{id:"footer"})};a(251);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{htmlAttributes:{lang:"en"}}),i.a.createElement(w,null),i.a.createElement("main",null,e),i.a.createElement(x,null))},n}(i.a.Component);t.a=y},256:function(e,t,a){"use strict";a(24),a(25),a(13),a(50),a(18);var n=a(0),i=a.n(n),r=a(267),o=a.n(r),A=a(257),l=a(240),c=a(272),p=a.n(c);var m=l.a.header.withConfig({displayName:"Banner__Wrapper",componentId:"hibpma-0"})(["background:center center / cover hsl(240,100%,12%);position:relative;padding-top:calc(68px + 2em);padding-bottom:3em;margin-top:-1em;"]),d=l.a.aside.withConfig({displayName:"Banner__Overlay",componentId:"hibpma-1"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),s=l.a.figure.withConfig({displayName:"Banner__ImageContainer",componentId:"hibpma-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;margin:0;}"]),g=Object(l.a)(o.a).withConfig({displayName:"Banner__ImageWrapper",componentId:"hibpma-3"})(["height:100%;"]),u=l.a.figcaption.withConfig({displayName:"Banner__ImageCredit",componentId:"hibpma-4"})(["position:absolute;bottom:1em;right:1.6em;font-size:0.6em;color:white;z-index:2;"]);t.a=function(e){var t=e.title,a=e.date,n=e.description,r=e.image,o=e.imageCredit,l=e.imageCreditMarkdown,c=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["title","date","description","image","imageCredit","imageCreditMarkdown"]);return i.a.createElement(m,Object.assign({style:{minHeight:"320px"}},c),r&&r.childImageSharp&&i.a.createElement(s,null,i.a.createElement(g,r.childImageSharp),!!o&&i.a.createElement(u,null,"Cover image credit: ",o),!!l&&i.a.createElement(u,null,"Cover image credit:"," ",i.a.createElement(p.a,{source:l,renderers:{paragraph:function(e){var t=e.children;return i.a.createElement("span",null,t)}}}))),i.a.createElement(d,null),i.a.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative",zIndex:2}},!!t&&i.a.createElement("header",null,i.a.createElement("h1",null,t)),!!n&&i.a.createElement("div",null,i.a.createElement("h2",null,n)),!!a&&i.a.createElement("aside",null,"Published: ",Object(A.format)(new Date(a),"DD MMM YYYY"))))}},299:function(e,t,a){"use strict";a(282)("link",function(e){return function(t){return e(this,"a","href",t)}})},581:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABnTjuCkXB/8QAFxABAQEBAAAAAAAAAAAAAAAAAQIAFP/aAAgBAQABBQKSVIzFSzSbprNK/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECERIhMTL/2gAIAQEABj8CePCUWvRTVM0c2W2f/8QAGhABAQADAQEAAAAAAAAAAAAAAQARITFBUf/aAAgBAQABPyHRRHMQp8BOVBI7YgnjTs+Qr7f/2gAMAwEAAgADAAAAEFsv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAwEBPxADthf/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EKwrP//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExYZH/2gAIAQEAAT8QElcFnZevKWdCm/SOmCkSAFFxm5VRnjHIjZrU5Z//2Q==",aspectRatio:1.5003663003663004,src:"/static/430ae756814bb094c44e156aaff57e38/bc3a8/dpip-image.jpg",srcSet:"/static/430ae756814bb094c44e156aaff57e38/d278e/dpip-image.jpg 200w,\n/static/430ae756814bb094c44e156aaff57e38/8539d/dpip-image.jpg 400w,\n/static/430ae756814bb094c44e156aaff57e38/bc3a8/dpip-image.jpg 800w,\n/static/430ae756814bb094c44e156aaff57e38/81ef8/dpip-image.jpg 1200w,\n/static/430ae756814bb094c44e156aaff57e38/989b1/dpip-image.jpg 1600w,\n/static/430ae756814bb094c44e156aaff57e38/3d25e/dpip-image.jpg 2048w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-speaking-jsx-d8a3598d2864aba33979.js.map