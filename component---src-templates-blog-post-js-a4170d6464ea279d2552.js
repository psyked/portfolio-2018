webpackJsonp([0x620f737b6699],{195:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(){return"undefined"==typeof w&&"undefined"!=typeof window&&window.IntersectionObserver&&(w=new window.IntersectionObserver(function(t){t.forEach(function(t){E.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(w.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),w}e.__esModule=!0;var o=n(48),i=r(o),s=n(69),l=r(s),u=n(68),c=r(u),f=n(166),d=r(f),p=n(165),h=r(p),m=n(3),v=r(m),y=n(7),g=r(y),b=function(t){var e=(0,h.default)({},t);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},_={},x=function(t){var e=b(t),n=e.sizes?e.sizes.src:e.resolutions.src;return!!_[n]||(_[n]=!0,!1)},w=void 0,E=[],S=function(t,e){a().observe(t),E.push([t,e])},j=null,O=function(){if(null!==j)return j;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},C=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.sizes?'sizes="'+t.sizes+'" ':"",a=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',i=t.width?'width="'+t.width+'" ':"",s=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1",u=t.transitionDelay?t.transitionDelay:"0.5s";return"<img "+i+s+e+n+o+a+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},z=function(t){var e=t.style,n=t.onLoad,r=(0,d.default)(t,["style","onLoad"]);return v.default.createElement("img",(0,h.default)({},r,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};z.propTypes={style:g.default.object,onLoad:g.default.func};var L=function(t){function e(n){(0,i.default)(this,e);var r=(0,l.default)(this,t.call(this,n)),a=!0,o=!0,s=!1,u=x(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,o=!1,s=!0),"undefined"==typeof window&&(a=!1,o=!1),r.state={isVisible:a,imgLoaded:o,IOSupported:s},r.handleRef=r.handleRef.bind(r),r}return(0,c.default)(e,t),e.prototype.handleRef=function(t){var e=this;this.state.IOSupported&&t&&S(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var t=this,e=b(this.props),n=e.title,r=e.alt,a=e.className,o=e.outerWrapperClassName,i=e.style,s=void 0===i?{}:i,l=e.imgStyle,u=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,d=e.sizes,p=e.resolutions,m=e.backgroundColor,y=e.Tag,g=void 0;g="boolean"==typeof m?"lightgray":m;var _=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,f),x=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&O()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),v.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},v.default.createElement(y,{className:(a?a:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},v.default.createElement(y,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&v.default.createElement(z,{alt:r,title:n,src:w.base64,style:_}),w.tracedSVG&&v.default.createElement(z,{alt:r,title:n,src:w.tracedSVG,style:_}),g&&v.default.createElement(y,{title:n,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&v.default.createElement(z,{alt:r,title:n,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:x,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,h.default)({alt:r,title:n},w))}})))}if(p){var E=p,S=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},s);return"inherit"===s.display&&delete S.display,E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),v.default.createElement(y,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},v.default.createElement(y,{className:(a?a:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},E.base64&&v.default.createElement(z,{alt:r,title:n,src:E.base64,style:_}),E.tracedSVG&&v.default.createElement(z,{alt:r,title:n,src:E.tracedSVG,style:_}),g&&v.default.createElement(y,{title:n,style:{backgroundColor:g,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&v.default.createElement(z,{alt:r,title:n,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:x,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,h.default)({alt:r,title:n,width:E.width,height:E.height},E))}})))}return null},e}(v.default.Component);L.defaultProps={fadeIn:!0,alt:"",Tag:"div"},L.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,placeholderStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},e.default=L},1661:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var a=n(1676),o=n(1677),i=n(1678),s=n(1679),l=n(1680);r.prototype.clear=a,r.prototype.delete=o,r.prototype.get=i,r.prototype.has=s,r.prototype.set=l,t.exports=r},1662:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var a=n(1684),o=n(1685),i=n(1686),s=n(1687),l=n(1688);r.prototype.clear=a,r.prototype.delete=o,r.prototype.get=i,r.prototype.has=s,r.prototype.set=l,t.exports=r},1663:function(t,e,n){var r=n(200),a=n(56),o=r(a,"Map");t.exports=o},1664:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var a=n(1689),o=n(1690),i=n(1691),s=n(1692),l=n(1693);r.prototype.clear=a,r.prototype.delete=o,r.prototype.get=i,r.prototype.has=s,r.prototype.set=l,t.exports=r},29:function(t,e,n){var r=n(56),a=r.Symbol;t.exports=a},125:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}t.exports=n},83:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(a(t[n][0],e))return n;return-1}var a=n(1700);t.exports=r},1667:function(t,e,n){function r(t,e){e=a(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[o(e[n++])];return n&&n==r?t:void 0}var a=n(1670),o=n(1696);t.exports=r},84:function(t,e,n){function r(t){return null==t?void 0===t?l:s:u&&u in Object(t)?o(t):i(t)}var a=n(29),o=n(128),i=n(129),s="[object Null]",l="[object Undefined]",u=a?a.toStringTag:void 0;t.exports=r},1668:function(t,e,n){function r(t){if(!i(t)||o(t))return!1;var e=a(t)?h:u;return e.test(s(t))}var a=n(1702),o=n(1683),i=n(201),s=n(1697),l=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,d=c.toString,p=f.hasOwnProperty,h=RegExp("^"+d.call(p).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},126:function(t,e,n){function r(t){if("string"==typeof t)return t;if(i(t))return o(t,r)+"";if(s(t))return c?c.call(t):"";var e=t+"";return"0"==e&&1/t==-l?"-0":e}var a=n(29),o=n(125),i=n(57),s=n(58),l=1/0,u=a?a.prototype:void 0,c=u?u.toString:void 0;t.exports=r},1670:function(t,e,n){function r(t,e){return a(t)?t:o(t,e)?[t]:i(s(t))}var a=n(57),o=n(1681),i=n(1695),s=n(87);t.exports=r},1671:function(t,e,n){var r=n(56),a=r["__core-js_shared__"];t.exports=a},127:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},85:function(t,e,n){function r(t,e){var n=t.__data__;return a(e)?n["string"==typeof e?"string":"hash"]:n.map}var a=n(1682);t.exports=r},200:function(t,e,n){function r(t,e){var n=o(t,e);return a(n)?n:void 0}var a=n(1668),o=n(1674);t.exports=r},128:function(t,e,n){function r(t){var e=i.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var a=s.call(t);return r&&(e?t[l]=n:delete t[l]),a}var a=n(29),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,l=a?a.toStringTag:void 0;t.exports=r},1674:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},1676:function(t,e,n){function r(){this.__data__=a?a(null):{},this.size=0}var a=n(86);t.exports=r},1677:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},1678:function(t,e,n){function r(t){var e=this.__data__;if(a){var n=e[t];return n===o?void 0:n}return s.call(e,t)?e[t]:void 0}var a=n(86),o="__lodash_hash_undefined__",i=Object.prototype,s=i.hasOwnProperty;t.exports=r},1679:function(t,e,n){function r(t){var e=this.__data__;return a?void 0!==e[t]:i.call(e,t)}var a=n(86),o=Object.prototype,i=o.hasOwnProperty;t.exports=r},1680:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=a&&void 0===e?o:e,this}var a=n(86),o="__lodash_hash_undefined__";t.exports=r},1681:function(t,e,n){function r(t,e){if(a(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(s.test(t)||!i.test(t)||null!=e&&t in Object(e))}var a=n(57),o=n(58),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=r},1682:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1683:function(t,e,n){function r(t){return!!o&&o in t}var a=n(1671),o=function(){var t=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},1684:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},1685:function(t,e,n){function r(t){var e=this.__data__,n=a(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():i.call(e,n,1),--this.size,!0}var a=n(83),o=Array.prototype,i=o.splice;t.exports=r},1686:function(t,e,n){function r(t){var e=this.__data__,n=a(e,t);return n<0?void 0:e[n][1]}var a=n(83);t.exports=r},1687:function(t,e,n){function r(t){return a(this.__data__,t)>-1}var a=n(83);t.exports=r},1688:function(t,e,n){function r(t,e){var n=this.__data__,r=a(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var a=n(83);t.exports=r},1689:function(t,e,n){function r(){this.size=0,this.__data__={hash:new a,map:new(i||o),string:new a}}var a=n(1661),o=n(1662),i=n(1663);t.exports=r},1690:function(t,e,n){function r(t){var e=a(this,t).delete(t);return this.size-=e?1:0,e}var a=n(85);t.exports=r},1691:function(t,e,n){function r(t){return a(this,t).get(t)}var a=n(85);t.exports=r},1692:function(t,e,n){function r(t){return a(this,t).has(t)}var a=n(85);t.exports=r},1693:function(t,e,n){function r(t,e){var n=a(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var a=n(85);t.exports=r},1694:function(t,e,n){function r(t){var e=a(t,function(t){return n.size===o&&n.clear(),t}),n=e.cache;return e}var a=n(1704),o=500;t.exports=r},86:function(t,e,n){var r=n(200),a=r(Object,"create");t.exports=a},129:function(t,e){function n(t){return a.call(t)}var r=Object.prototype,a=r.toString;t.exports=n},56:function(t,e,n){var r=n(127),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},1695:function(t,e,n){var r=n(1694),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)}),e});t.exports=i},1696:function(t,e,n){function r(t){if("string"==typeof t||a(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}var a=n(58),o=1/0;t.exports=r},1697:function(t,e){function n(t){if(null!=t){try{return a.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,a=r.toString;t.exports=n},1700:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},1701:function(t,e,n){function r(t,e,n){var r=null==t?void 0:a(t,e);return void 0===r?n:r}var a=n(1667);t.exports=r},57:function(t,e){var n=Array.isArray;t.exports=n},1702:function(t,e,n){function r(t){if(!o(t))return!1;var e=a(t);return e==s||e==l||e==i||e==u}var a=n(84),o=n(201),i="[object AsyncFunction]",s="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";t.exports=r},201:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},130:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},58:function(t,e,n){function r(t){return"symbol"==typeof t||o(t)&&a(t)==i}var a=n(84),o=n(130),i="[object Symbol]";t.exports=r},1704:function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(r.Cache||a),n}var a=n(1664),o="Expected a function";r.Cache=a,t.exports=r},87:function(t,e,n){function r(t){return null==t?"":a(t)}var a=n(126);t.exports=r},262:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(3),o=r(a),i=(n(17),n(195)),s=r(i),l=n(369),u=r(l),c=function(t){var e=t.title,n=t.lead,r=t.image;return o.default.createElement("header",{style:{background:"grey",backgroundImage:"url("+r+")",backgroundSize:"cover",backgroundPosition:"center",position:"relative"}},r&&r.childImageSharp&&o.default.createElement("aside",{className:u.default.imageContainer},o.default.createElement(s.default,{sizes:r.childImageSharp.sizes,outerWrapperClassName:u.default.wrapper,className:u.default.wrapper})),o.default.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",background:"rgba(0,0,0,.6)"}}),o.default.createElement("div",{className:"bodyContent",style:{color:"white",position:"relative"}},o.default.createElement("header",null,o.default.createElement("h1",null,e)),n&&o.default.createElement("div",null,o.default.createElement("p",null,n))))};e.default=c,t.exports=e.default},265:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(3),o=r(a),i=n(7),s=(r(i),n(371)),l=r(s),u=function(t){var e=t.url;return e?o.default.createElement("aside",{className:l.default.root},"This article was originally published at ",o.default.createElement("a",{href:e},e)):o.default.createElement("aside",null)};u.propTypes={},e.default=u,t.exports=e.default},266:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(3),o=r(a),i=n(7),s=r(i),l=n(17),u=r(l),c=n(372),f=r(c),d=function(t){var e=t.tags;return e?o.default.createElement("aside",null,o.default.createElement("span",{className:f.default.tagsLabel},"Tagged as:"),e.map(function(t,n){var r=t.replace(/\W/gi,"-").toLowerCase();return o.default.createElement("span",{key:t,className:f.default.tag},o.default.createElement(u.default,{to:"/tag/"+r},t),n!==e.length-1&&o.default.createElement("span",null,", "))})):o.default.createElement("aside",null)};d.propTypes={tags:s.default.arrayOf(s.default.string)},e.default=d,t.exports=e.default},267:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(3),o=r(a),i=n(17),s=r(i),l=n(195),u=r(l),c=n(373),f=r(c),d=function(t){var e=t.tiles;return o.default.createElement("aside",{className:"bodyContent "+f.default.tileContainer},e&&e.filter(function(t){return!!t}).map(function(t,e){return o.default.createElement("section",{key:e,className:f.default.tile},o.default.createElement(s.default,{to:t.frontmatter.path},t.frontmatter.image&&t.frontmatter.image.childImageSharp&&o.default.createElement("aside",{className:f.default.imageContainer},o.default.createElement(u.default,{sizes:t.frontmatter.image.childImageSharp.sizes,outerWrapperClassName:f.default.wrapper,className:f.default.wrapper})),o.default.createElement("div",{className:f.default.blackout}),o.default.createElement("h3",{className:f.default.link},t.frontmatter.title),o.default.createElement("p",null,t.frontmatter.description),o.default.createElement("p",null,t.frontmatter.date)))}))};e.default=d,t.exports=e.default},369:function(t,e){t.exports={image:"src-components----banner-module---image---1QG6I",imageContainer:"src-components----banner-module---imageContainer---3KrUF",wrapper:"src-components----banner-module---wrapper---1xRxG"}},371:function(t,e){t.exports={root:"src-components----sourcepost-module---root---WEjHy"}},372:function(t,e){t.exports={tagsLabel:"src-components----tags-module---tagsLabel---1AV4E",tag:"src-components----tags-module---tag---3kCeK"}},373:function(t,e){t.exports={image:"src-components----tiles-module---image---1-ejc",imageContainer:"src-components----tiles-module---imageContainer---9DUT4",wrapper:"src-components----tiles-module---wrapper---2oIOd",tile:"src-components----tiles-module---tile---2kwde",tileContainer:"src-components----tiles-module---tileContainer---3FpOW",blackout:"src-components----tiles-module---blackout---ElFOE"}},272:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var s=n(3),l=r(s),u=n(63),c=r(u),f=n(17),d=(r(f),n(1701)),p=r(d),h=n(262),m=r(h),v=n(267),y=r(v),g=n(266),b=r(g),_=n(265),x=r(_),w=function(t){function e(){return a(this,e),o(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark||{},e=t||{},n=e.frontmatter;n=void 0===n?{}:n;var r=n.title,a=n.tags,o=n.url,i=n.image,s=n.description,u=(0,p.default)(this.props,"data.site.siteMetadata.title"),f=this.props.pathContext,d=f.next,h=f.prev;return l.default.createElement("div",null,l.default.createElement(c.default,{title:r+" | "+u}),l.default.createElement(m.default,{title:r,lead:s,image:i}),l.default.createElement("div",{className:"bodyContent"},l.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.default.createElement("hr",{className:"endPost"}),l.default.createElement(x.default,{url:o}),l.default.createElement(b.default,{tags:a})),l.default.createElement(y.default,{tiles:[h,d]}))},e}(l.default.Component);e.default=w;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-a4170d6464ea279d2552.js.map