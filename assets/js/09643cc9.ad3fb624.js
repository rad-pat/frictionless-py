(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(161)),c=["components"],i={title:"Schemes Reference"},l={unversionedId:"references/schemes-reference",id:"references/schemes-reference",isDocsHomePage:!1,title:"Schemes Reference",description:"It's a schemes reference supported by the main Frictionless package. If you have installed external plugins, there can be more schemes available. Below we're listing a scheme group name (or a loader name) like Remote, which is used, for example, for http, https etc schemes. Options can be used for creating controls, for example, control = RemoteControl(http_timeout=1).",source:"@site/../docs/references/schemes-reference.md",slug:"/references/schemes-reference",permalink:"/docs/references/schemes-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/schemes-reference.md",version:"current",lastUpdatedBy:"M\xedrian Bruckschen Motta Barros",lastUpdatedAt:1633242867,formattedLastUpdatedAt:"10/3/2021",sidebar:"references",previous:{title:"Plugins Reference",permalink:"/docs/references/plugins-reference"},next:{title:"Formats Reference",permalink:"/docs/references/formats-reference"}},s=[{value:"Buffer",id:"buffer",children:[]},{value:"Local",id:"local",children:[]},{value:"Multipart",id:"multipart",children:[]},{value:"Remote",id:"remote",children:[{value:"Http Session",id:"http-session",children:[]},{value:"Http Preload",id:"http-preload",children:[]},{value:"Http Timeout",id:"http-timeout",children:[]}]},{value:"S3",id:"s3",children:[{value:"Endpoint Url",id:"endpoint-url",children:[]}]},{value:"Stream",id:"stream",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It's a schemes reference supported by the main Frictionless package. If you have installed external plugins, there can be more schemes available. Below we're listing a scheme group name (or a loader name) like Remote, which is used, for example, for ",Object(a.b)("inlineCode",{parentName:"p"},"http"),", ",Object(a.b)("inlineCode",{parentName:"p"},"https")," etc schemes. Options can be used for creating controls, for example, ",Object(a.b)("inlineCode",{parentName:"p"},"control = RemoteControl(http_timeout=1)"),"."),Object(a.b)("h2",{id:"buffer"},"Buffer"),Object(a.b)("p",null,"There are no options available."),Object(a.b)("h2",{id:"local"},"Local"),Object(a.b)("p",null,"There are no options available."),Object(a.b)("h2",{id:"multipart"},"Multipart"),Object(a.b)("p",null,"There are no options available."),Object(a.b)("h2",{id:"remote"},"Remote"),Object(a.b)("h3",{id:"http-session"},"Http Session"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Type: requests.Session")),Object(a.b)("p",null,"User defined http session"),Object(a.b)("h3",{id:"http-preload"},"Http Preload"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Type: bool")),Object(a.b)("p",null,"Don't use http streaming and preload all the data"),Object(a.b)("h3",{id:"http-timeout"},"Http Timeout"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Type: int")),Object(a.b)("p",null,"User defined http timeout in minutes"),Object(a.b)("h2",{id:"s3"},"S3"),Object(a.b)("h3",{id:"endpoint-url"},"Endpoint Url"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Type: string")),Object(a.b)("p",null,"Endpoint url"),Object(a.b)("h2",{id:"stream"},"Stream"),Object(a.b)("p",null,"There are no options available."))}u.isMDXComponent=!0}}]);