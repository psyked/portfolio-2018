(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(192),c=a.n(o),m=a(33),s=a.n(m),p=a(299),d=a.n(p),u=a(250),h=a.n(u),g=a(230),E=a(197),f=E.a.header.withConfig({displayName:"Banner__Wrapper",componentId:"hibpma-0"})(["background:center center / cover $border;position:relative;padding-top:2em;padding-bottom:3em;"]),b=E.a.aside.withConfig({displayName:"Banner__Overlay",componentId:"hibpma-1"})(["position:absolute;width:100%;height:100%;top:0px;left:0px;background:rgba($border,0.6);"]),v=E.a.aside.withConfig({displayName:"Banner__ImageContainer",componentId:"hibpma-2"})(["   position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;}"]),w=Object(E.a)(h.a).withConfig({displayName:"Banner__ImageWrapper",componentId:"hibpma-3"})(["height:100%;"]),y=function(e){var t=e.title,a=e.date,n=e.description,r=e.image;return l.a.createElement(f,null,r&&r.childImageSharp&&l.a.createElement(v,null,l.a.createElement(w,{sizes:r.childImageSharp.sizes})),l.a.createElement(b,null),l.a.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative"}},l.a.createElement("header",null,l.a.createElement("h1",null,t)),n&&l.a.createElement("div",null,l.a.createElement("h2",null,n)),l.a.createElement("aside",null,"Published: ",Object(g.format)(new Date(a),"DD MMM YYYY"))))},N=(a(286),a(443)),C=a.n(N),k=function(e){var t=e.tiles;return l.a.createElement("aside",{className:"bodyContent "+C.a.tileContainer},t&&t.filter(function(e){return!!e}).map(function(e,t){return l.a.createElement("section",{key:t,className:C.a.tile},l.a.createElement(s.a,{to:e.frontmatter.path},e.frontmatter.image&&e.frontmatter.image.childImageSharp&&l.a.createElement("aside",{className:C.a.imageContainer},l.a.createElement(h.a,{sizes:e.frontmatter.image.childImageSharp.sizes,outerWrapperClassName:C.a.wrapper,className:C.a.wrapper})),l.a.createElement("div",{className:C.a.blackout}),l.a.createElement("h3",{className:C.a.link},e.frontmatter.title),l.a.createElement("p",{className:C.a.description},e.frontmatter.description),l.a.createElement("p",{className:C.a.date},Object(g.format)(new Date(e.frontmatter.date),"DD MMM YYYY"))))}))},I=(a(36),a(4)),_=a.n(I),M=a(444),S=a.n(M),Y=function(e){var t=e.tags;return t?l.a.createElement("aside",null,l.a.createElement("span",{className:S.a.tagsLabel},"Tagged as:"),t.map(function(e,a){var n=e.replace(/\W/gi,"-").toLowerCase();return l.a.createElement("span",{key:e,className:S.a.tag},l.a.createElement(s.a,{to:"/tag/"+n},e),a!==t.length-1&&l.a.createElement("span",null,", "))})):l.a.createElement("aside",null)};Y.propTypes={tags:_.a.arrayOf(_.a.string)};var x=Y,z=a(445),D=a.n(z),O=function(e){var t=e.url;return t?l.a.createElement("aside",{className:D.a.root},"This article was originally published at ",l.a.createElement("a",{href:t},t)):l.a.createElement("aside",null)};O.propTypes={};var T=O,B=a(193),j=a(194),H=(a(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(c.a,{htmlAttributes:{lang:"en"}}),l.a.createElement(B.a,null),l.a.createElement("main",null,e),l.a.createElement(j.a,null))},t}(l.a.Component));H.propTypes={children:_.a.func};var L=H;a.d(t,"pageQuery",function(){return A});var W=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark||{},t=(e||{}).frontmatter,a=(t=void 0===t?{}:t).title,n=t.tags,r=t.url,i=t.image,o=t.description,m=(e||{}).frontmatter,s=void 0===m?{}:m,p=d()(this.props,"data.site.siteMetadata.title"),u=this.props.pageContext,h=u.next,g=u.prev;return l.a.createElement(L,null,l.a.createElement(c.a,{title:a+" | "+p,htmlAttributes:{lang:"en"}},l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:site",content:"@psyked"}),l.a.createElement("meta",{name:"twitter:creator",content:s.creator}),l.a.createElement("meta",{name:"twitter:title",content:a}),l.a.createElement("meta",{name:"twitter:description",content:o}),i&&i.childImageSharp&&l.a.createElement("meta",{name:"twitter:image",content:i.childImageSharp.sizes.src})),l.a.createElement(y,s),l.a.createElement("div",{className:"bodyContent"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("hr",{className:"endPost"}),l.a.createElement(T,{url:r}),l.a.createElement(x,{tags:n})),l.a.createElement(k,{tiles:[h,g]}))},t}(l.a.Component),A=(t.default=W,"32222268")},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(33),l=a.n(i),o=a(197),c=(a(203),o.a.header.withConfig({displayName:"Header",componentId:"sc-9dymkm-0"})(["background:hsl(240,14%,19%);border-bottom:1px solid hsl(240,14%,99%);padding:0.5em;position:sticky;top:0;z-index:100;"])),m=Object(o.a)(l.a).withConfig({displayName:"Header__MenuLink",componentId:"sc-9dymkm-1"})(["margin-right:0.5em;color:hsl(240,14%,99%);padding:0.4em;margin-left:-0.4em;position:relative;&.active{background-color:hsl(346,88%,52%);&::after{top:100%;left:0%;border:solid transparent;content:'';height:0;width:0;position:absolute;pointer-events:none;border-color:hsla(346,88%,52%,0);border-top-color:hsl(346,88%,52%);border-left-color:hsl(346,88%,52%);border-width:0.25em;}}"]);t.a=function(e){return r.a.createElement(c,null,r.a.createElement("nav",{className:"bodyContent"},r.a.createElement(m,{to:"/",activeClassName:"active",exact:!0},"Home"),r.a.createElement(m,{to:"/blog/",activeClassName:"active"},"Blog Archive"),r.a.createElement(m,{to:"/speaking/",activeClassName:"active"},"Public Speaking")))}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("footer",{id:"footer"})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-88d43e36130810aa9842.js.map