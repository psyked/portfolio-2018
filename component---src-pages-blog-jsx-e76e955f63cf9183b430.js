(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});n(84),n(60),n(35),n(440),n(442);var a=n(7),r=n.n(a),o=n(0),l=n.n(o),c=n(33),i=n.n(c),u=n(191),s=n.n(u),m=n(199),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,n=e.site.siteMetadata,a=n.title,r=n.description,o=t.map(function(e){return e.node}).reduce(function(e,t,n){var a=new Date(t.frontmatter.date).getFullYear();return e[a]||(e[a]={year:a,posts:[]}),e[a].posts.push(t),e},{});return l.a.createElement(m.a,null,l.a.createElement("div",{className:"bodyContent"},l.a.createElement(s.a,null,l.a.createElement("title",null,a),l.a.createElement("meta",{name:"description",content:r})),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Recent Blog Posts")),l.a.createElement("h3",null,"Posts from 2018"),l.a.createElement("ul",null,t.filter(function(e){return!!e.node.frontmatter.date}).filter(function(e){return new Date(e.node.frontmatter.date)>new Date("2018-01-01")}).map(function(e){return l.a.createElement("li",{key:e.node.id},l.a.createElement(i.a,{to:e.node.frontmatter.path},e.node.frontmatter.title," (",e.node.frontmatter.date,")"))})),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Blog Post Archive")),l.a.createElement("aside",{className:"box"},l.a.createElement("p",null,"This is a curated collection of published articles written by myself. Some legacy blog posts that lack substantial unique content have been culled. Some articles are copies that were originally published elsewhere. Formatting may have changed and assets or external resources may have been adversely affected by the passage of time and the evolution of technology.")),Object.keys(o).filter(function(e){return parseInt(e,10)<2018}).sort(function(e,t){return t-e}).map(function(e){var t=o[e],n=t.year,a=t.posts;return l.a.createElement("section",{key:n},l.a.createElement("h3",null,"Posts from ",n),l.a.createElement("ul",{key:n},a.filter(function(e){return!!e.frontmatter.date}).filter(function(e){return new Date(e.frontmatter.date)<new Date("2018-01-01")}).map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(i.a,{to:e.frontmatter.path},e.frontmatter.title," (",e.frontmatter.date,")"))})))})))},t}(l.a.Component);t.default=f;var d="3795380931"},192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(33),l=n.n(o),c=n(208),i=n.n(c);t.a=function(e){return r.a.createElement("header",{className:i.a.root},r.a.createElement("nav",{className:"bodyContent"},r.a.createElement(l.a,{to:"/",className:i.a.menuLink,activeClassName:i.a.active,exact:!0},"Home"),r.a.createElement(l.a,{to:"/blog/",className:i.a.menuLink,activeClassName:i.a.active},"Blog Archive")))}},193:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("footer",{id:"footer"})}},199:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),l=n.n(o),c=n(4),i=n.n(c),u=n(191),s=n.n(u),m=n(192),f=n(193),d=(n(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(s.a,null),l.a.createElement(m.a,null),l.a.createElement("main",null,e),l.a.createElement(f.a,null))},t}(l.a.Component));d.propTypes={children:i.a.func},t.a=d},440:function(e,t,n){var a=n(25),r=n(34);n(441)("keys",function(){return function(e){return r(a(e))}})},441:function(e,t,n){var a=n(11),r=n(19),o=n(18);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",l)}},442:function(e,t,n){"use strict";var a=n(11),r=n(26),o=n(25),l=n(18),c=[].sort,i=[1,2,3];a(a.P+a.F*(l(function(){i.sort(void 0)})||!l(function(){i.sort(null)})||!n(443)(c)),"Array",{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),r(e))}})},443:function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-e76e955f63cf9183b430.js.map