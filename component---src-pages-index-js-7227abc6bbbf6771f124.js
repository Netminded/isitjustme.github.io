/*! For license information please see component---src-pages-index-js-7227abc6bbbf6771f124.js.LICENSE.txt */
"use strict";(self.webpackChunkisitjustme=self.webpackChunkisitjustme||[]).push([[678],{8241:function(e,t){var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),m=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case l:case i:case f:case p:return e;default:switch(e=e&&e.$$typeof){case m:case c:case u:case h:case d:case s:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return y(e)===u}},6443:function(e,t,n){e.exports=n(8241)},166:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(7294),o=n(9735),a=n(1721),i=!("undefined"==typeof window||!window.document||!window.document.createElement);var l=void 0;function s(){return void 0===l&&(l=function(){if(!i)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),l}function c(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function m(e){this.target=e,this.events={}}m.prototype.getEventHandlers=function(e,t){var n,r=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]},m.prototype.handleEvent=function(e,t,n){var r=this.getEventHandlers(e,t);r.handlers=r.nextHandlers,r.handlers.forEach((function(e){e&&e(n)}))},m.prototype.add=function(e,t,n){var r=this,o=this.getEventHandlers(e,n);c(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,o.handleEvent,n)),o.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,c(o);var i=o.nextHandlers.indexOf(t);o.nextHandlers.splice(i,1),0===o.nextHandlers.length&&(r.target&&r.target.removeEventListener(e,o.handleEvent,n),o.handleEvent=void 0)}}};var u="__consolidated_events_handlers__";function f(e,t,n,r){e[u]||(e[u]=new m(e));var o=function(e){if(e)return s()?e:!!e.capture}(r);return e[u].add(t,n,o)}var p=n(6443);function d(e,t){var n,r=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof r)return r;var o=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof o?o*t:void 0}var h="above",v="inside",y="below",b="invisible";function E(e){return"string"==typeof e.type}var w;var g=[];function N(e){g.push(e),w||(w=setTimeout((function(){var e;for(w=null;e=g.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=g.indexOf(e);-1!==n&&(g.splice(n,1),!g.length&&w&&(clearTimeout(w),w=null))}}}var x="undefined"!=typeof window,O={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).refElement=function(e){n._ref=e},n}(0,a.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;x&&(this.cancelOnNextTick=N((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug;!function(e,t){if(e&&!E(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=f(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=f(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))},o.componentDidUpdate=function(){var e=this;x&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=N((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))},o.componentWillUnmount=function(){x&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},o._findScrollableAncestor=function(){var e=this.props,t=e.horizontal,r=e.scrollableAncestor;if(r)return function(e){return"window"===e?n.g.window:e}(r);for(var o=this._ref;o.parentNode;){if((o=o.parentNode)===document.body)return window;var a=window.getComputedStyle(o),i=(t?a.getPropertyValue("overflow-x"):a.getPropertyValue("overflow-y"))||a.getPropertyValue("overflow");if("auto"===i||"scroll"===i||"overlay"===i)return o}return window},o._handleScroll=function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?b:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?v:e.viewportBottom<e.waypointTop?y:e.waypointTop<e.viewportTop?h:b}(t),r=this._previousPosition,o=this.props,a=(o.debug,o.onPositionChange),i=o.onEnter,l=o.onLeave,s=o.fireOnRapidScroll;if(this._previousPosition=n,r!==n){var c={currentPosition:n,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};a.call(this,c),n===v?i.call(this,c):r===v&&l.call(this,c),s&&(r===y&&n===h||r===h&&n===y)&&(i.call(this,{currentPosition:v,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),l.call(this,{currentPosition:n,previousPosition:v,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}},o._getBounds=function(){var e,t,n=this.props,r=n.horizontal,o=(n.debug,this._ref.getBoundingClientRect()),a=o.left,i=o.top,l=o.right,s=o.bottom,c=r?a:i,m=r?l:s;this.scrollableAncestor===window?(e=r?window.innerWidth:window.innerHeight,t=0):(e=r?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=r?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var u=this.props,f=u.bottomOffset;return{waypointTop:c,waypointBottom:m,viewportTop:t+d(u.topOffset,e),viewportBottom:t+e-d(f,e)}},o.render=function(){var e=this,t=this.props.children;if(!t)return r.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(E(t)||(0,p.isForwardRef)(t)){return r.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}})}return r.cloneElement(t,{innerRef:this.refElement})},t}(r.PureComponent);k.above=h,k.below=y,k.inside=v,k.invisible=b,k.defaultProps=O,k.displayName="Waypoint";var S=n.p+"static/InstantAlerts-403e4cbb4abb382618eee8ec52360f6d.svg",j=n.p+"static/CommunitySharing-2b542e8c9345a3ad6f777e68e4667df2.svg",T=n.p+"static/PrivacySecurity-bc283e736f48493b93749cc692502a3f.svg",I=n(7286),A=n(5697),P=n.n(A);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function H(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var z=["style"];function U(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=R(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var M=!1;try{M=!0}catch(oe){}function D(e){return e&&"object"===C(e)&&e.prefix&&e.iconName&&e.icon?e:I.parse.icon?I.parse.icon(e):null===e?null:e&&"object"===C(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function G(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?W({},e,t):{}}var V={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},J=r.forwardRef((function(e,t){var n=B(B({},V),e),r=n.icon,o=n.mask,a=n.symbol,i=n.className,l=n.title,s=n.titleId,c=n.maskId,m=D(r),u=G("classes",[].concat(H(function(e){var t,n=e.beat,r=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,m=e.spinReverse,u=e.pulse,f=e.fixedWidth,p=e.inverse,d=e.border,h=e.listItem,v=e.flip,y=e.size,b=e.rotation,E=e.pull,w=(W(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":f,"fa-inverse":p,"fa-border":d,"fa-li":h,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(y),null!=y),W(t,"fa-rotate-".concat(b),null!=b&&0!==b),W(t,"fa-pull-".concat(E),null!=E),W(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(n)),H((i||"").split(" ")))),f=G("transform","string"==typeof n.transform?I.parse.transform(n.transform):n.transform),p=G("mask",D(o)),d=(0,I.icon)(m,B(B(B(B({},u),f),p),{},{symbol:a,title:l,titleId:s,maskId:c}));if(!d)return function(){var e;!M&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var h=d.abstract,v={ref:t};return Object.keys(n).forEach((function(e){V.hasOwnProperty(e)||(v[e]=n[e])})),Y(h[0],v)}));J.displayName="FontAwesomeIcon",J.propTypes={beat:P().bool,border:P().bool,beatFade:P().bool,bounce:P().bool,className:P().string,fade:P().bool,flash:P().bool,mask:P().oneOfType([P().object,P().array,P().string]),maskId:P().string,fixedWidth:P().bool,inverse:P().bool,flip:P().oneOf([!0,!1,"horizontal","vertical","both"]),icon:P().oneOfType([P().object,P().array,P().string]),listItem:P().bool,pull:P().oneOf(["right","left"]),pulse:P().bool,rotation:P().oneOf([0,90,180,270]),shake:P().bool,size:P().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P().bool,spinPulse:P().bool,spinReverse:P().bool,symbol:P().oneOfType([P().bool,P().string]),title:P().string,titleId:P().string,transform:P().oneOfType([P().string,P().object]),swapOpacity:P().bool};var Y=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=U(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[R(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,s=F(r,z);return a.attrs.style=B(B({},a.attrs.style),l),t.apply(void 0,[n.tag,B(B({},a.attrs),s)].concat(H(o)))}.bind(null,r.createElement),Z=n(3168),$=function(){return r.createElement("div",{id:"howItWorks",className:"services-container"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 text-center"},r.createElement("h2",{className:"highlight-heading"},"How It Works"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"services-panel"},r.createElement("span",{className:"panel-header"},r.createElement(J,{icon:Z.EQ8})),r.createElement("h6",null,"Install the Extension"),r.createElement("p",null,'Add "Is It Just Me?" to your Chrome browser with one click and then pin it to your toolbar.'))),r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"services-panel"},r.createElement("span",{className:"panel-header"},r.createElement(J,{icon:Z.LEG})),r.createElement("h6",null,"Monitor Your Internet Health"),r.createElement("p",null,"The browser icon will alert you with color changes when your connection weakens or fails."))),r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"services-panel"},r.createElement("span",{className:"panel-header"},r.createElement(J,{icon:Z.NdV})),r.createElement("h6",null,"Create or Join a Group"),r.createElement("p",null,"Set up a community with friends, family, or colleagues to share your Internet status and see if others are experiencing the same issues."))))))},Q=function(){return r.createElement("div",{id:"whoIsThisFor"},r.createElement("div",{className:"container whofor-container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 text-center"},r.createElement("h2",{className:"highlight-heading"},"Who Is This For?"),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-4"},r.createElement(J,{icon:Z.lNt}),r.createElement("p",{className:"text-accent"},"Home Users"),r.createElement("p",null,"Stop wondering if your Wi-Fi is down or if it's just you—ask the group!")),r.createElement("div",{className:"col-lg-4"},r.createElement(J,{icon:Z.Ans}),r.createElement("p",{className:"text-accent"},"Remote Workers"),r.createElement("p",null,"Stay connected with your team and check for outages before troubleshooting your setup.")),r.createElement("div",{className:"col-lg-4"},r.createElement(J,{icon:Z.P88}),r.createElement("p",{className:"text-accent"},"Small Offices"),r.createElement("p",null,"Collaborate with coworkers and keep an eye on your office Wi-Fi without needing to call IT right away.")))))))},K=function(){return r.createElement("div",{id:"platform",className:"container platform-container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 text-center"},r.createElement("h2",{className:"highlight-heading"},"Never Ask 'Is It Just Me?' Again"),r.createElement("p",{className:"text-accent mb-4 pb-2"},'Add the "Is It Just Me?" extension to your Chrome browser now and never guess about your Internet connection again.'),r.createElement("a",{className:"btn btn-content",href:"https://chromewebstore.google.com/detail/is-it-just-me/imifmefbechjmgapmijpniffjpncmkge",target:"_blank",rel:"noreferrer"},"Install for Free"))))},X=n(1597),q=n(4571),ee=function(){var e=(0,X.useStaticQuery)(te).site.siteMetadata.socials;return r.createElement("div",{id:"contact",className:"container contact-container"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 text-center"},r.createElement("h2",{className:"highlight-heading"},"Contact Us"))),r.createElement("div",{className:"row contact-info-main"},r.createElement("div",{className:"col-lg-4"},r.createElement("a",{href:"mailto:hello@isitjustme.online"},r.createElement("h5",null,"hello[@]isitjustme.online"))),r.createElement("div",{className:"col-lg-4 text-center social-footer"},r.createElement("a",{href:e[1].url,target:"_blank",rel:"noreferrer"},r.createElement(J,{icon:q.Xg5})),r.createElement("a",{href:e[2].url,target:"_blank",rel:"noreferrer"},r.createElement(J,{icon:q.mim}))),r.createElement("div",{className:"col-lg-4 text-end"},r.createElement("a",{className:"btn-alt",href:"https://forms.clickup.com/20532630/f/kjkcp-4832/8T1Z0BH54ZTVKJMPIB",rel:"noreferrer"},"Got Feedback?")))))},te="3259646732",ne=function(e,t){var n=document.getElementById(""+t);e.preventDefault(),n&&n.scrollIntoView({behavior:"smooth",block:"start"})},re=function(){var e=(0,r.useState)(!1),t=e[0];e[1];return r.createElement(o.Z,{isArticle:!1,isHero:t,scrollTo:ne},r.createElement("div",{className:"hero-container"},r.createElement("div",{className:"hero-container-sub"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("div",{className:"hero-content"},r.createElement("h1",null,"Is the Internet Down?",r.createElement("br",null),"Find Out Together!"),r.createElement("h3",null,"Create or join a community to monitor your Wi-Fi health instantly. Get the free Chrome extension for home and work."),r.createElement("div",{className:"hero-cta"},r.createElement("div",{className:"btn-container"},r.createElement("a",{className:"btn hero-btn-last",href:"https://chromewebstore.google.com/detail/is-it-just-me/imifmefbechjmgapmijpniffjpncmkge",target:"_blank",rel:"noreferrer"},"Add to Chrome")))),r.createElement("div",{className:"hero-image"},r.createElement("div",{className:"hero-image-container"}))))))),r.createElement("div",{id:"about",className:"about-container"},r.createElement(k,null,r.createElement("div",{className:"about-info"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-4"},r.createElement("h2",{className:"highlight-heading"},"Why You'll Love It"),r.createElement("p",null,r.createElement("span",{className:"text-accent"},"Real-Time Wi-Fi Status at a Glance:")," Your Chrome browser icon changes color from Green (Everything's great), to Amber (Issues detected), to Red (Major outage). No more guessing if it's your Wi-Fi or the Internet.")),r.createElement("div",{className:"col-lg-4"}),r.createElement("div",{className:"col-lg-4"},r.createElement("p",null,r.createElement("span",{className:"text-accent"},"Visibility of Others' Status:")," If you're online, you will be able to see if others in your group go offline. If you are offline, however, you won’t be able to tell the status of others. When delays occur, they'll be clearly visible if you're online."))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("p",null,r.createElement("span",{className:"text-accent"},"Stay Connected with Your Community:"),' By joining a group of family, friends, or coworkers, you can instantly see if others in your group are experiencing the same connection problems. It\'s like a "Wi-Fi health check" with your trusted circle.'),r.createElement("p",null,r.createElement("span",{className:"text-accent"},"Simple Setup, Zero Hassle:")," Install in seconds and start monitoring your connection right away. There's nothing to configure—just click, join or create your community, and stay informed!")))))),r.createElement("div",{className:"about-profiles"},r.createElement("div",{className:"container features-list-container"},r.createElement(k,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4"},r.createElement("div",{className:"profile-first"},r.createElement("img",{src:S,alt:"A person stood next to a list of alerts."}))),r.createElement("div",{className:"col-md-8 profile-text"},r.createElement("div",{className:"profile-text-container ms-5"},r.createElement("h5",null,"Instant Alerts"),r.createElement("p",null,"Get visual feedback when your Wi-Fi or Internet connection drops or weakens."))))),r.createElement(k,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 order-md-2"},r.createElement("div",{className:"profile-middle"},r.createElement("img",{src:j,alt:"A trio of people sharing internet status."}))),r.createElement("div",{className:"col-md-8 order-md-1 profile-text"},r.createElement("div",{className:"profile-text-container ms-5 me-5"},r.createElement("h5",null,"Community Sharing"),r.createElement("p",null,"Easily connect with others in your group to check if they're facing the same connectivity issues. While online, you'll be able to see if others in your group go offline (if you're offline, you can't see their status)."))))),r.createElement(k,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4"},r.createElement("div",{className:"profile-last"},r.createElement("img",{src:T,alt:"A person stood by a padlock symbolising privacy and security."}))),r.createElement("div",{className:"col-md-8 profile-text"},r.createElement("div",{className:"profile-text-container ms-5"},r.createElement("h5",null,"Privacy First"),r.createElement("p",null,"We don’t store any of your personal data beyond your public IP address. We don’t store any other personal information. Your group is anonymous subject to your choice of group name, and your connection is secure.")))))))),r.createElement($,null),r.createElement(Q,null),r.createElement(K,null),r.createElement(ee,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7227abc6bbbf6771f124.js.map