/*! For license information please see commons-75c63364cfec129b592e.js.LICENSE.txt */
(self.webpackChunkisitjustme=self.webpackChunkisitjustme||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},8663:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in i)i[s]&&(c+="; "+s,!0!==i[s]&&(c+="="+i[s].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(c[0]);if(s=(r.read||r)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(o[l]=s,e===l)break}catch(u){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},9735:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ye}});var r,o,i,a,c=n(7294),s=n(1597),l=n.p+"static/IsItJustMe_Logo-183ed3377131714e2502300c7a63af2e.svg",u=function(e){var t=e.simpleNav,n=e.isHero,r=e.scrollTo,o=(0,c.useState)(!1),i=o[0],a=o[1];return c.createElement(c.Fragment,null,c.createElement("nav",{className:"navbar navbar-expand-xl navbar-dark "+(n?"menu-scrolling-hero":"menu-scrolling-content")},c.createElement("div",{className:"me-auto tog-container"},c.createElement(s.Link,{className:"navbar-brand",to:"/"},c.createElement("img",{src:l,alt:"Is It Just Me? Logo"})),c.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(e){return function(e,t,n){e.preventDefault(),t(!n)}(e,a,i)},"data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},c.createElement("span",{className:"navbar-toggler-icon"}))),c.createElement("div",{className:"collapse navbar-collapse nav-collapse "+(i?"show":""),id:"navbarCollapse"},t?c.createElement("ul",{className:"navbar-nav ms-auto"},c.createElement("li",{className:"nav-item"},c.createElement(s.Link,{className:"nav-link",to:"/"},"Home"))):c.createElement("ul",{className:"navbar-nav ms-auto"},c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"about")}},"Why You'll Love It")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"howItWorks")}},"How It Works")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"whoIsThisFor")}},"Who Is This For?")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"btn",href:"https://chromewebstore.google.com/detail/is-it-just-me/imifmefbechjmgapmijpniffjpncmkge",target:"_blank",rel:"norefferer"},"Add to Chrome"))))))},p=function(){return c.createElement("footer",null,c.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Is It Just Me? is a trading name of SeeThru Networks. All Rights Reserved."),c.createElement("div",{className:"footer-links"},c.createElement(s.Link,{to:"/privacy"},"Privacy Policy"),c.createElement(s.Link,{to:"/terms"},"Terms"),c.createElement(s.Link,{to:"/web-terms"},"Web Terms")))},f=n(5697),d=n.n(f),m=n(4839),y=n.n(m),b=n(2993),h=n.n(b),v=n(6494),g=n.n(v),C="bodyAttributes",T="htmlAttributes",w="titleAttributes",k={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(k).map((function(e){return k[e]})),"charset"),E="cssText",S="href",A="http-equiv",j="innerHTML",x="itemprop",N="name",I="property",L="rel",P="src",B="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",_="encodeSpecialCharacters",H="onChangeClientState",F="titleTemplate",U=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),W=[k.NOSCRIPT,k.SCRIPT,k.STYLE],Y="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ne(e,k.TITLE),n=ne(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ne(e,M);return t||r||void 0},$=function(e){return ne(e,H)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},ee=function(e,t){return t.filter((function(e){return void 0!==e[k.BASE]})).map((function(e){return e[k.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},te=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===L&&"canonical"===e[n].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==j&&c!==E&&c!==x||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=g()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},ne=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},re=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){re(e)}),0)}),oe=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:n.g.requestAnimationFrame||re,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:n.g.cancelAnimationFrame||oe,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;fe(k.BODY,r),fe(k.HTML,o),pe(p,f);var d={baseTag:de(k.BASE,n),linkTags:de(k.LINK,i),metaTags:de(k.META,a),noscriptTags:de(k.NOSCRIPT,c),scriptTags:de(k.SCRIPT,l),styleTags:de(k.STYLE,u)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),s(e,m,y)},ue=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),fe(k.TITLE,t)},fe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},de=function(e,t){var n=document.head||document.querySelector(k.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},be=function(e,t,n){switch(e){case k.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=ye(n,r),[c.createElement(k.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=me(n),i=ue(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case C:case T:return{toComponent:function(){return ye(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===j||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:be(k.BASE,t,r),bodyAttributes:be(C,n,r),htmlAttributes:be(T,o,r),link:be(k.LINK,i,r),meta:be(k.META,a,r),noscript:be(k.NOSCRIPT,c,r),script:be(k.SCRIPT,s,r),style:be(k.STYLE,l,r),title:be(k.TITLE,{title:p,titleAttributes:f},r)}},ve=y()((function(e){return{baseTag:ee([S,B],e),bodyAttributes:Q(C,e),defer:ne(e,R),encode:ne(e,_),htmlAttributes:Q(T,e),linkTags:te(k.LINK,[L,S],e),metaTags:te(k.META,[N,O,A,I,x],e),noscriptTags:te(k.NOSCRIPT,[j],e),onChangeClientState:$(e),scriptTags:te(k.SCRIPT,[P,j],e),styleTags:te(k.STYLE,[E],e),title:Z(e),titleAttributes:Q(w,e)}}),(function(e){se&&ae(se),e.defer?se=ie((function(){le(e,(function(){se=null}))})):(le(e),se=null)}),he)((function(){return null})),ge=(o=ve,a=i=function(e){function t(){return V(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case k.SCRIPT:case k.NOSCRIPT:return{innerHTML:t};case k.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case k.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case k.BODY:return J({},o,{bodyAttributes:J({},i)});case k.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case k.LINK:case k.META:case k.NOSCRIPT:case k.SCRIPT:case k.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var Ce=n(9499),Te=function(e){var t=e.title,n=e.description,r=e.image,o=e.keywords,i=(0,Ce.useLocation)().pathname,a=(0,s.useStaticQuery)(ke).site.siteMetadata,l=a.defaultTitle,u=a.titleTemplate,p=a.defaultDescription,f=a.siteUrl,d=a.defaultImage,m=a.defaultKeywords,y=a.shortTitle,b=a.appleTouchIcon,h={title:t||l,description:n||p,image:""+f+(r||d),url:""+f+i,keywords:o||m};return c.createElement(ge,{title:h.title,titleTemplate:t?u:""},c.createElement("meta",{name:"apple-mobile-web-app-title",content:y}),c.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:b}),c.createElement("meta",{name:"application-name",content:y}),c.createElement("meta",{name:"description",content:h.description}),h.keywords&&c.createElement("meta",{name:"keywords",content:h.keywords}),c.createElement("meta",{name:"image",content:h.image}),h.url&&c.createElement("meta",{property:"og:url",content:h.url}),c.createElement("meta",{property:"og:locale",content:"en_GB"}),c.createElement("meta",{property:"og:site_name",content:l}),h.title&&c.createElement("meta",{property:"og:title",content:h.title}),h.description&&c.createElement("meta",{property:"og:description",content:h.description}),h.image&&c.createElement("meta",{property:"og:image",content:h.image}))},we=Te;Te.defaultProps={title:null,description:null,image:null,keywords:null};var ke="852177618",Oe=n(8663),Ee=n.n(Oe),Se=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r};function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}function je(e,t){return je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},je(e,t)}var xe,Ne="top",Ie="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(xe||(xe={}));var Le="hidden",Pe="byCookieValue",Be="CookieConsent",De=["children"],Me={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:Ie,visible:Pe,onAccept:function(e){},onDecline:function(){},cookieName:Be,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:xe.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,De);return c.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},Re={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},_e=function(e){return e+"-legacy"},He=function(e){var t,n;function r(){var t;return(t=e.apply(this,arguments)||this).state=Re,t.handleScroll=function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,r=document.body,o="scrollTop",i="scrollHeight";(n[o]||r[o])/((n[i]||r[i])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,je(t,n);var o=r.prototype;return o.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},o.componentWillUnmount=function(){this.removeScrollListener()},o.accept=function(e){var t;void 0===e&&(e=!1);var n=this.props,r=n.cookieName,o=n.cookieValue,i=n.hideOnAccept,a=n.onAccept;this.setCookie(r,o),a(null!=(t=e)&&t),i&&(this.setState({visible:!1}),this.removeScrollListener())},o.overlayClick=function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},o.decline=function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,r=e.hideOnDecline,o=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),o(),r&&this.setState({visible:!1})},o.setCookie=function(e,t){var n=this.props,r=n.extraCookieOptions,o=n.expires,i=n.sameSite,a=this.props.cookieSecurity;void 0===a&&(a=!window.location||"https:"===window.location.protocol);var c=Ae({expires:o},r,{sameSite:i,secure:a});i===xe.NONE&&Ee().set(_e(e),t,c),Ee().set(e,t,c)},o.getCookieValue=function(){return function(e){void 0===e&&(e=Be);var t=Ee().get(e);return void 0===t?Ee().get(_e(e)):t}(this.props.cookieName)},o.render=function(){var e=this;switch(this.props.visible){case Le:return null;case Pe:if(!this.state.visible)return null}var t=this.props,n=t.location,r=t.style,o=t.buttonStyle,i=t.declineButtonStyle,a=t.contentStyle,s=t.disableStyles,l=t.buttonText,u=t.declineButtonText,p=t.containerClasses,f=t.contentClasses,d=t.buttonClasses,m=t.buttonWrapperClasses,y=t.declineButtonClasses,b=t.buttonId,h=t.declineButtonId,v=t.disableButtonStyles,g=t.enableDeclineButton,C=t.flipButtons,T=t.ButtonComponent,w=t.overlay,k=t.overlayClasses,O=t.overlayStyle,E=t.ariaAcceptLabel,S=t.ariaDeclineLabel,A=t.customContainerAttributes,j=t.customContentAttributes,x=t.customButtonProps,N=t.customDeclineButtonProps,I=t.customButtonWrapperAttributes,L={},P={},B={},D={},M={};switch(s?(L=Object.assign({},r),P=Object.assign({},o),B=Object.assign({},i),D=Object.assign({},a),M=Object.assign({},O)):(L=Object.assign({},Ae({},this.state.style,r)),D=Object.assign({},Ae({},this.state.contentStyle,a)),M=Object.assign({},Ae({},this.state.overlayStyle,O)),v?(P=Object.assign({},o),B=Object.assign({},i)):(P=Object.assign({},Ae({},this.state.buttonStyle,o)),B=Object.assign({},Ae({},this.state.declineButtonStyle,i)))),n){case Ne:L.top="0";break;case Ie:L.bottom="0"}var R=[];return g&&R.push(c.createElement(T,Object.assign({key:"declineButton",style:B,className:y,id:h,"aria-label":S,onClick:function(){e.decline()}},N),u)),R.push(c.createElement(T,Object.assign({key:"acceptButton",style:P,className:d,id:b,"aria-label":E,onClick:function(){e.accept()}},x),l)),C&&R.reverse(),c.createElement(Se,{condition:w,wrapper:function(t){return c.createElement("div",{style:M,className:k,onClick:function(){e.overlayClick()}},t)}},c.createElement("div",Object.assign({className:""+p,style:L},A),c.createElement("div",Object.assign({style:D,className:f},j),this.props.children),c.createElement("div",Object.assign({className:""+m},I),R.map((function(e){return e})))))},r}(c.Component);He.defaultProps=Me;var Fe=He,Ue=n(9024),We=function(){var e=(0,Ce.useLocation)();return c.createElement(Fe,{disableButtonStyles:!0,buttonClasses:"cookie-button",declineButtonClasses:"cookie-button cookie-button-right",containerClasses:"cookie-banner",location:"bottom",buttonText:"Accept",enableDeclineButton:!0,declineButtonText:"Decline",cookieName:"gatsby-gdpr-google-analytics",expires:90,onAccept:function(){return(0,Ue.initializeAndTrack)(e)}},"Is It Just Me? uses essential cookies and optional Google Analytics cookies. To allow optional analytics cookies select 'Accept'. "," ",c.createElement(s.Link,{style:{color:"#0d6af6"},to:"/cookies"}," View Cookie Policy"))},Ye=function(e){var t=e.title,n=e.description,r=e.keywords,o=e.image,i=e.simpleNav,a=e.isHero,s=e.scrollTo,l=e.children;return c.createElement(c.Fragment,null,c.createElement(we,{title:t,description:n,image:o,keywords:r}),c.createElement(u,{simpleNav:i,isHero:a,scrollTo:s}),c.createElement("main",null,l,c.createElement(p,null)),c.createElement(We,null))}}}]);
//# sourceMappingURL=commons-75c63364cfec129b592e.js.map