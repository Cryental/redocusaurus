/*! For license information please see f0ad3fbb.29f4b5bd.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[612],{9949:function(e,t,r){"use strict";r(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},5110:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5773),o=r(7378),s=r(6112),u=r(1804);var i=function(e){var t,r,i,c,a=e.layoutProps,l=e.specProps,f=(null==(t=l.spec)||null==(r=t.info)?void 0:r.title)||"API Docs",d=(null==(i=l.spec)||null==(c=i.info)?void 0:c.description)||"Open API Reference Docs for the API";return o.createElement(s.Z,(0,n.Z)({title:f,description:d},a),o.createElement(u.Z,l))}},1804:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(808),o=r(7378),s=r(8944),u=(r(9949),r(7725)),i=r(3542);function c(e){return o.createElement("div",{className:"redocusaurus-styles"})}var a=["className","optionsOverrides"];var l=function(e){var t=e.className,r=e.optionsOverrides,l=(0,n.Z)(e,a),f=(0,i.U)(l,r),d=f.store,m=f.darkStore,p=f.lightStore,v=f.hasLogo;return o.createElement(o.Fragment,null,o.createElement(c,{lightStore:p,darkStore:m}),o.createElement("div",{className:(0,s.Z)(["redocusaurus",v&&"redocusaurus-has-logo",t])},o.createElement(u.Redoc,{store:d})))}},3542:function(e,t,r){"use strict";r.d(t,{U:function(){return f}});var n=r(7378),o=r(8948),s=r(6457),u=r(1869),i=r(5421),c=r(5409),a=r.n(c),l=(r(9949),r(7725));function f(e,t){var r=e.spec,c=e.url,f=(0,o.Z)(c,{absolute:!0}),d=(0,s.Z)(),m="dark"===(0,i.I)().colorMode,p=(0,u.usePluginData)("docusaurus-theme-redoc"),v=(0,n.useMemo)((function(){var e=p.lightTheme,n=p.darkTheme,o=p.options,s={scrollYOffset:d||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0};return{lightStore:new l.AppStore(r,f,a()(Object.assign({},o,s,{theme:e}),t)),darkStore:new l.AppStore(r,f,a()(Object.assign({},o,s,{theme:n}),t))}}),[d,r,f,p,t]);return(0,n.useMemo)((function(){var e;return Object.assign({},v,{hasLogo:!(null==(e=r.info)||!e["x-logo"]),store:d&&m?v.darkStore:v.lightStore})}),[d,m,r,v])}},6177:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isatty=void 0;t.isatty=function(){return!1}},9184:function(){},6016:function(){},3715:function(){},259:function(){},8002:function(){},7622:function(){}}]);