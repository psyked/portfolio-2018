(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(0),o=a.n(n),r=a(70),i=a.n(r),l=a(242);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,r=a.allMarkdownRemark,c=r.edges,d=r.totalCount,m=d+" post"+(1===d?"":"s")+' tagged with "'+n+'"';return o.a.createElement(l.a,null,o.a.createElement("div",{className:"bodyContainer"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"bodyContent"},o.a.createElement(i.a,{to:"/tags"},"All tags"),o.a.createElement("h1",null,m),o.a.createElement("ul",null,c.map(function(e){var t=e.node.frontmatter,a=t.path,n=t.title;return o.a.createElement("li",{key:a},o.a.createElement(i.a,{to:a},n))}))))))};var c="1329145972"},242:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(241),i=a.n(r),l=a(70),c=a.n(l),d=a(240),m=a(251);var s=d.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:white;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),p=d.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:goldenrod none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=d.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:white;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),f=d.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:black none repeat scroll 0 0;}:checked ~ ","{left:37px;}"],p,u),h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(m.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return o.a.createElement(s,{className:"switch"},o.a.createElement(f,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),o.a.createElement(p,null),o.a.createElement(u,null))})},n}(o.a.Component),g=d.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["display:block;background:hsl(240,14%,19%);padding-left:calc((100vw - 60em) / 2);padding-right:calc((100vw - 60em) / 2);"]),v=d.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["max-width:60em;margin:0 auto;padding:0.5em 0.2em 0.5em 0.7em;width:100%;display:block;"]),k=Object(d.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),b=d.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),y=function(e){return o.a.createElement(g,null,o.a.createElement(b,null,o.a.createElement(v,null,o.a.createElement(k,{to:"/",activeClassName:"active",exact:"true"},"Home"),o.a.createElement(k,{to:"/blog/",activeClassName:"active"},"Blog Archive"),o.a.createElement(k,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),o.a.createElement(h,null)))},E=a(253),w=d.a.aside.withConfig({displayName:"Footer__Overlay",componentId:"n5fjzj-0"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:hsla(240,100%,12%,0.6);z-index:1;"]),x=d.a.li.withConfig({displayName:"Footer__TwitterLink",componentId:"n5fjzj-1"})(["background:#00acee;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),_=d.a.li.withConfig({displayName:"Footer__GitHubLink",componentId:"n5fjzj-2"})(["background:#181818;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),C=d.a.li.withConfig({displayName:"Footer__LinkedInLink",componentId:"n5fjzj-3"})(["background:#0077b5;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),N=d.a.li.withConfig({displayName:"Footer__MediumLink",componentId:"n5fjzj-4"})(["background:#37b042;a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),I=d.a.li.withConfig({displayName:"Footer__InstagramLink",componentId:"n5fjzj-5"})(["background:#d6249f;background:radial-gradient( circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90% );a,a:link,a:active,a:hover,a:visited{color:#ffffff;text-decoration:none;}a:hover{text-decoration:underline;}"]),j=function(e){return o.a.createElement("footer",{id:"footer",style:{backgroundColor:e.colour||"hsla(240, 100%, 12%, 0.6)",position:"relative",marginTop:"-1em",padding:"1em 0 3em"}},o.a.createElement(w,null),o.a.createElement("div",{className:"bodyContainer",style:{zIndex:2,position:"relative",color:"white"}},o.a.createElement("div",{className:"bodyContent"},o.a.createElement("h3",null,"Elsewhere, on social media;"),o.a.createElement("ul",{className:"external-profiles"},o.a.createElement(x,null,o.a.createElement("a",{href:"//twitter.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.e,null),"Twitter"))),o.a.createElement(I,null,o.a.createElement("a",{href:"//instagram.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.b,null),"Instagram"))),o.a.createElement(_,null,o.a.createElement("a",{href:"//github.com/psyked"},o.a.createElement("span",null,o.a.createElement(E.a,null),"GitHub"))),o.a.createElement(C,null,o.a.createElement("a",{href:"//linkedin.com/in/jamesford"},o.a.createElement("span",null,o.a.createElement(E.c,null),"LinkedIn"))),o.a.createElement(N,null,o.a.createElement("a",{href:"//medium.com/@psyked"},o.a.createElement("span",null,o.a.createElement(E.d,null),"Medium")))))))};a(252);var z=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.children,n=t.keyColour;return n&&n.muted&&(e=n.muted),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{htmlAttributes:{lang:"en"}}),o.a.createElement(y,null),o.a.createElement("main",null,a),o.a.createElement(j,{colour:e}))},n}(o.a.Component);t.a=z}}]);
//# sourceMappingURL=component---src-templates-tag-list-template-js-95527820deb1683349c1.js.map