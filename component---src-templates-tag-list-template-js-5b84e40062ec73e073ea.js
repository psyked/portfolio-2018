(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(0),o=a.n(n),r=a(70),i=a.n(r),l=a(242);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,r=a.allMarkdownRemark,c=r.edges,p=r.totalCount,s=p+" post"+(1===p?"":"s")+' tagged with "'+n+'"';return o.a.createElement(l.a,null,o.a.createElement("div",{className:"bodyContent"},o.a.createElement(i.a,{to:"/tags"},"All tags"),o.a.createElement("h1",null,s),o.a.createElement("ul",null,c.map(function(e){var t=e.node.frontmatter,a=t.path,n=t.title;return o.a.createElement("li",{key:a},o.a.createElement(i.a,{to:a},n))}))))};var c="1329145972"},242:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(241),i=a.n(r),l=a(70),c=a.n(l),p=a(240),s=a(250);var m=p.a.label.withConfig({displayName:"ThemeSwitch__SwitchWrapper",componentId:"sc-1gyffmx-0"})(["background-color:#ddd;border-radius:18px;cursor:pointer;display:inline-block;height:20px;padding:3px;position:relative;vertical-align:top;width:56px;box-sizing:content-box;"]),d=p.a.span.withConfig({displayName:"ThemeSwitch__Label",componentId:"sc-1gyffmx-1"})(["background:#ffd700 none repeat scroll 0 0;border-radius:inherit;display:block;font-size:10px;height:inherit;position:relative;text-transform:uppercase;transition:all 0.15s ease-out 0s;::before,::after{line-height:1;margin-top:-0.5em;position:absolute;top:50%;transition:inherit;}"]),u=p.a.span.withConfig({displayName:"ThemeSwitch__Handle",componentId:"sc-1gyffmx-2"})(["background-color:#fff;border-radius:10px;height:18px;left:4px;position:absolute;top:4px;transition:left 0.15s ease-out 0s;width:18px;::before{background-color:#f9f9f9;border-radius:6px;content:'';height:12px;left:50%;margin:-6px 0 0 -6px;position:absolute;top:50%;width:12px;}"]),h=p.a.input.withConfig({displayName:"ThemeSwitch__Input",componentId:"sc-1gyffmx-3"})(["left:0;opacity:0;position:absolute;top:0;:checked ~ ","{background:#eceeef none repeat scroll 0 0;}:checked ~ ","{left:40px;}"],d,u),g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(s.ThemeToggler,null,function(e){var t=e.theme,a=e.toggleTheme;return o.a.createElement(m,{className:"switch"},o.a.createElement(h,{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),o.a.createElement(d,null),o.a.createElement(u,null))})},n}(o.a.Component),f=p.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["max-width:60em;margin:0 auto;position:sticky;z-index:100;display:block;margin-bottom:-68px;padding-top:0.5em;"]),b=p.a.nav.withConfig({displayName:"Header__Nav",componentId:"sc-9dymkm-1"})(["border-radius:0.3em;background:hsl(240,14%,19%);padding:0.5em 0.2em 0.5em 0.7em;top:0;display:inline-block;border:1px solid var(--text-color);"]),y=Object(p.a)(c.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-2"})(["margin-right:0.5em;padding:0.4em;margin-left:-0.4em;&,a{&,:link,:active,:visited,:hover{color:hsl(240,14%,99%);}}&:last-child{margin-right:0;}&.active{border-radius:0.15em;background-color:hsl(346,88%,52%);}"]),k=p.a.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-9dymkm-3"})(["display:flex;justify-content:space-between;align-items:center;padding:0 1em;"]),x=function(e){return o.a.createElement(f,null,o.a.createElement(k,null,o.a.createElement(b,null,o.a.createElement(y,{to:"/",activeClassName:"active",exact:"true"},"Home"),o.a.createElement(y,{to:"/blog/",activeClassName:"active"},"Blog Archive"),o.a.createElement(y,{to:"/speaking/",activeClassName:"active"},"Public Speaking")),o.a.createElement(g,null)))},v=function(e){return o.a.createElement("footer",{id:"footer"})};a(251);var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{htmlAttributes:{lang:"en"}}),o.a.createElement(x,null),o.a.createElement("main",null,e),o.a.createElement(v,null))},n}(o.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-templates-tag-list-template-js-5b84e40062ec73e073ea.js.map