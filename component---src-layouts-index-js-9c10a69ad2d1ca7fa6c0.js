webpackJsonp([0x67ef26645b2a,60335399758886],{99:function(t,e){t.exports={data:{site:{siteMetadata:{title:"John Tzanidakis",description:"Mobile & Web Developer",url:"https://www.johntzan.com",keywords:"mobile, full stack, developer, engineer, android, portfolio, personal website"}}},layoutContext:{}}},204:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(2),a=r(i),u=n(214),c=r(u),s=n(99),f=r(s);e.default=function(t){return a.default.createElement(c.default,o({},t,f.default))},t.exports=e.default},285:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,f;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=a.call(t),e=a.call(e),s(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var l=u(t),p=u(e)}catch(t){return!1}if(l.length!=p.length)return!1;for(l.sort(),p.sort(),i=l.length-1;i>=0;i--)if(l[i]!=p[i])return!1;for(i=l.length-1;i>=0;i--)if(f=l[i],!s(t[f],e[f],n))return!1;return typeof t==typeof e}var a=Array.prototype.slice,u=n(287),c=n(286),s=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},286:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},287:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},294:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},323:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(336),i=n(337),a=n(338),u=n(339),c=n(340);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},324:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(344),i=n(345),a=n(346),u=n(347),c=n(348);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},325:function(t,e,n){var r=n(165),o=n(101),i=r(o,"Map");t.exports=i},326:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(349),i=n(350),a=n(351),u=n(352),c=n(353);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},100:function(t,e,n){var r=n(101),o=r.Symbol;t.exports=o},327:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},61:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(359);t.exports=r},328:function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(331),i=n(357);t.exports=r},164:function(t,e,n){function r(t){return null==t?void 0===t?c:u:s&&s in Object(t)?i(t):a(t)}var o=n(100),i=n(334),a=n(355),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},329:function(t,e,n){function r(t){if(!a(t)||i(t))return!1;var e=o(t)?T:s;return e.test(u(t))}var o=n(361),i=n(343),a=n(166),u=n(358),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,A=l.hasOwnProperty,T=RegExp("^"+p.call(A).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},330:function(t,e,n){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(u(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var o=n(100),i=n(327),a=n(102),u=n(103),c=1/0,s=o?o.prototype:void 0,f=s?s.toString:void 0;t.exports=r},331:function(t,e,n){function r(t,e){return o(t)?t:i(t,e)?[t]:a(u(t))}var o=n(102),i=n(341),a=n(356),u=n(364);t.exports=r},332:function(t,e,n){var r=n(101),o=r["__core-js_shared__"];t.exports=o},333:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},62:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(342);t.exports=r},165:function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(329),i=n(335);t.exports=r},334:function(t,e,n){function r(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(100),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;t.exports=r},335:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},336:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(63);t.exports=r},337:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},338:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(63),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},339:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(63),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},340:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(63),i="__lodash_hash_undefined__";t.exports=r},341:function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(u.test(t)||!a.test(t)||null!=e&&t in Object(e))}var o=n(102),i=n(103),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},342:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},343:function(t,e,n){function r(t){return!!i&&i in t}var o=n(332),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},344:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},345:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}var o=n(61),i=Array.prototype,a=i.splice;t.exports=r},346:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(61);t.exports=r},347:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(61);t.exports=r},348:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(61);t.exports=r},349:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(323),i=n(324),a=n(325);t.exports=r},350:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(62);t.exports=r},351:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(62);t.exports=r},352:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(62);t.exports=r},353:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(62);t.exports=r},354:function(t,e,n){function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(363),i=500;t.exports=r},63:function(t,e,n){var r=n(165),o=r(Object,"create");t.exports=o},355:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},101:function(t,e,n){var r=n(333),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},356:function(t,e,n){var r=n(354),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=a},357:function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(103),i=1/0;t.exports=r},358:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},359:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},360:function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(328);t.exports=r},102:function(t,e){var n=Array.isArray;t.exports=n},361:function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==c||e==a||e==s}var o=n(164),i=n(166),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},166:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},362:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},103:function(t,e,n){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=n(164),i=n(362),a="[object Symbol]";t.exports=r},363:function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(326),i="Expected a function";r.Cache=o,t.exports=r},364:function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(330);t.exports=r},437:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(2),l=r(f),p=n(7),A=r(p),T=n(457),d=r(T),y=n(285),E=r(y),h=n(438),v=n(191),b=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,E.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case v.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=a,e.titleAttributes=c({},i),e));case v.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case v.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,a=i.children,u=o(i,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,a),t.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),l.default.createElement(t,i)},s(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(l.default.Component),e.propTypes={base:A.default.object,bodyAttributes:A.default.object,children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]),defaultTitle:A.default.string,defer:A.default.bool,encodeSpecialCharacters:A.default.bool,htmlAttributes:A.default.object,link:A.default.arrayOf(A.default.object),meta:A.default.arrayOf(A.default.object),noscript:A.default.arrayOf(A.default.object),onChangeClientState:A.default.func,script:A.default.arrayOf(A.default.object),style:A.default.arrayOf(A.default.object),title:A.default.string,titleAttributes:A.default.object,titleTemplate:A.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},S=function(){return null},g=(0,d.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(S),_=b(g);_.renderStatic=_.rewind,e.Helmet=_,e.default=_},191:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},438:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(2),u=r(a),c=n(5),s=r(c),f=n(191),l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=E(t,f.TAG_NAMES.TITLE),n=E(t,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=E(t,f.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},A=function(t){return E(t,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},d=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[f.TAG_NAMES.BASE]}).map(function(t){return t[f.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(t.indexOf(a)!==-1&&n[a])return e.concat(n)}return e},[])},y=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&_("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();e.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,s.default)({},r[u],o[u]);r[u]=c}return t},[]).reverse()},E=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=function(t){return{baseTag:d([f.TAG_PROPERTIES.HREF],t),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,t),defer:E(t,f.HELMET_PROPS.DEFER),encode:E(t,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,t),linkTags:y(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],t),metaTags:y(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:y(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:A(t),scriptTags:y(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],t),styleTags:y(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,t)}},v=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){v(e)},0)}}(),b=function(t){return clearTimeout(t)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:t.requestAnimationFrame||v,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:t.cancelAnimationFrame||b,_=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},m=null,R=function(t){m&&g(m),t.defer?m=S(function(){O(t,function(){m=null})}):(O(t),m=null)},O=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,p=t.title,A=t.titleAttributes;C(f.TAG_NAMES.BODY,r),C(f.TAG_NAMES.HTML,o),w(p,A);var T={baseTag:P(f.TAG_NAMES.BASE,n),linkTags:P(f.TAG_NAMES.LINK,i),metaTags:P(f.TAG_NAMES.META,a),noscriptTags:P(f.TAG_NAMES.NOSCRIPT,u),scriptTags:P(f.TAG_NAMES.SCRIPT,s),styleTags:P(f.TAG_NAMES.STYLE,l)},d={},y={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(y[t]=T[t].oldTags)}),e&&e(),c(t,d,y)},M=function(t){return Array.isArray(t)?t.join(""):t},w=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=M(t)),C(f.TAG_NAMES.TITLE,e)},C=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),o.indexOf(c)===-1&&o.push(c);var l=i.indexOf(c);l!==-1&&i.splice(l,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},P=function(t,e){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,n.isEqualNode(t)})?o.splice(a,1):i.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:i}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},x=function(t,e,n,r){var o=I(n),i=M(e);return o?"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+f.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"},L=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===f.TAG_PROPERTIES.INNER_HTML||t===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.REACT_TAG_MAP[n]||n]=t[n],e},e)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.HTML_TAG_MAP[n]||n]=t[n],e},e)},N=function(t,e,n){var r,o=(r={key:e},r[f.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,e)]},H=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=f.REACT_TAG_MAP[t]||t;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},B=function(t,e,n){switch(t){case f.TAG_NAMES.TITLE:return{toComponent:function(){return N(t,e.title,e.titleAttributes,n)},toString:function(){return x(t,e.title,e.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return H(t,e)},toString:function(){return L(t,e,n)}}}},D=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,l=t.title,p=void 0===l?"":l,A=t.titleAttributes;return{base:B(f.TAG_NAMES.BASE,e,r),bodyAttributes:B(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:B(f.ATTRIBUTE_NAMES.HTML,o,r),link:B(f.TAG_NAMES.LINK,i,r),meta:B(f.TAG_NAMES.META,a,r),noscript:B(f.TAG_NAMES.NOSCRIPT,u,r),script:B(f.TAG_NAMES.SCRIPT,c,r),style:B(f.TAG_NAMES.STYLE,s,r),title:B(f.TAG_NAMES.TITLE,{title:p,titleAttributes:A},r)}};e.convertReactPropstoHtmlAttributes=G,e.handleClientStateChange=R,e.mapStateOnServer=D,e.reducePropsToState=h,e.requestAnimationFrame=S,e.warn=_}).call(e,function(){return this}())},457:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){T=t(A.map(function(t){return t.props})),d.canUseDOM?e(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var A=[],T=void 0,d=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.peek=function(){return T},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,A=[],t},e.prototype.shouldComponentUpdate=function(t){return!l(t,this.props)},e.prototype.componentWillMount=function(){A.push(this),p()},e.prototype.componentDidUpdate=function(){p()},e.prototype.componentWillUnmount=function(){var t=A.indexOf(this);A.splice(t,1),p()},e.prototype.render=function(){return s.createElement(u,this.props)},e}(c.Component);return d.displayName="SideEffect("+r(u)+")",d.canUseDOM=f.canUseDOM,d}}var c=n(2),s=r(c),f=r(n(294)),l=r(n(474));t.exports=u},474:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var f=t[s],l=e[s];if(o=n?n.call(r,f,l,s):void 0,o===!1||void 0===o&&f!==l)return!1}return!0}},475:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACLlBMVEUAAADIy8LAvq/AvrDBv7DFyMC/v7i/vK25t67Bu6y3tKrEvrG1saexrKO4tK6sp56YnqeVl5hcd6V1f5AkVKRean8dTZ5/goQkUp2al4uBkqOXlYiurqDIy8K/va7Iy8O/va/IzMPAvq/GycLAwru/vK26ubHAuqu5tq3CvK64tKvDva62sae8t6uxrKKsq6ehn5uNl6WPkZJmf6aDhohWdaWRkIpge6Kdmo6ZoaGamIutrqDIy8HJy8DJy77IyLzFxbjBwLLIysHIyr/KzMDLzcHJyr7Kyr7GxrnCwbPHysHHyb/Awrh8fXhmaGWysqjHx7vEx7/HyMCpqKJ0Y12Hcm2YlI3Ix7vCwLO+vrbBwbi5s6yhfni9lpK9rKfJx7zBvrC4tau7t63BubKRcWufeXe/sazNysHDvrG3sqi5sqm7uLSHdG+Mc3LGvrvQzcbIw7avqqNxdYhMU3N5Z3S9o6h3eJZud5Sura6RkJUzQGouO2w+Q29MTng1RX4sPnJreZp0eYkrO2krOGY2QXU3QnU4TYstQXdRZpFWZYYvRXwjMVwtPXIrO3AxSIYlOWpDX5RBVXw4S309Q2MkNWJESmxyco5DSWQ0VI02SGwqQHIzSXw4UIefkJm1paxlbo0uTYZLWG8rQGooQHEsQnFJT2wvQm4oRHk0VpGMi4FLVWcfMVUdMVkgOWkgOWo4T3hyg5mRjoFHUmYdL1UiOWYrTIkrTYxObJursKj///+ppzglAAAAPHRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/gH+Af4CAf4B/gH+Af4B/gH+Af4B/gH+Af4B/gH98YdDpAAAAAWJLR0S5OrgWYAAAAAd0SU1FB+IFBAEBDMG1H1MAAADrSURBVBjTY2BgYJS1sbW1tbN3cJRjYgABRnknZxdXN3cPTwVmiICil7ePr59/gKcSC1iAVTkwKDgkNCw8AirAphIZFR0TGxefoMoOFuBQS0xKTklNS89Q5wQLcGlkZmXn5OblF2hygwV4tAqLiktKy8ortCECvDqVVdU1tXX1Dbp8YAF+vcam5pbWtvYOfQGwgKBBZ1d3T29f/wRDIbCAsNHESZOnTJ02fYaxCFhA1GTmrNlz5s6bv8BUDCwgbrZw0eIlS5ctX2EuARaQtFi5avWatevWb7CUAgtIW23ctHnL1m3bd1jLMDAAAI+nQ3Mp4HQAAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA1LTA0VDAxOjAxOjEyKzAyOjAw6unTdQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0wNFQwMTowMToxMiswMjowMJu0a8kAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},476:function(t,e){t.exports="data:image/png;base64,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"},480:function(t,e,n){t.exports=n.p+"static/profile.1968741c.jpg"},214:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{
default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var u=n(2),c=r(u),s=n(7),f=(r(s),n(437)),l=r(f),p=n(360),A=r(p);n(369);var T=n(480),d=r(T),y=n(475),E=r(y),h=n(476),v=r(h),b=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.render=function(){var t=(0,A.default)(this,"props.data.site.siteMetadata.title"),e=(0,A.default)(this,"props.data.site.siteMetadata.keywords"),n=(0,A.default)(this,"props.data.site.siteMetadata.url"),r=(0,A.default)(this,"props.data.site.siteMetadata.description"),o=this.props.children;return c.default.createElement("div",{className:"template-wrapper"},c.default.createElement(l.default,{title:t,meta:[{name:"description",content:r},{name:"keywords",content:e},{property:"og:url",content:n},{property:"og:image",content:d.default},{property:"og:title",content:t},{property:"og:description",content:r}],link:[{rel:"icon",type:"image/png",sizes:"16x16",href:E.default},{rel:"icon",type:"image/png",sizes:"32x32",href:v.default}]}),c.default.createElement("div",{className:"template-wrapper-children"},o()))},e}(c.default.Component);e.default=b;e.pageQuery="** extracted graphql fragment **"},369:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-js-9c10a69ad2d1ca7fa6c0.js.map