webpackJsonp([0x6230b59aa96b],{281:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var u=a(3),d=l(u),r=a(7),n=l(r),f=a(19),s=l(f),i=function(e){var t=e.pathContext,a=e.data,l=t.tag,u=a.allMarkdownRemark,r=u.edges,n=u.totalCount,f=n+" post"+(1===n?"":"s")+' tagged with "'+l+'"';return d.default.createElement("div",{style:{padding:"1em 2em"}},d.default.createElement(s.default,{to:"/tags"},"All tags"),d.default.createElement("h1",null,f),d.default.createElement("ul",null,r.map(function(e){var t=e.node,a=t.frontmatter,l=a.path,u=a.title;return d.default.createElement("li",{key:l},d.default.createElement(s.default,{to:l},u))})))};i.propTypes={pathContext:n.default.shape({tag:n.default.string.isRequired}),data:n.default.shape({allMarkdownRemark:n.default.shape({totalCount:n.default.number.isRequired,edges:n.default.arrayOf(n.default.shape({node:n.default.shape({frontmatter:n.default.shape({path:n.default.string.isRequired,title:n.default.string.isRequired})})}).isRequired)})})},t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-list-template-js-aab22002e47a5aafe945.js.map