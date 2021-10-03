(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),d=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=d(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},p=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=d(t),p=n,f=b["".concat(i,".").concat(p)]||b[p]||s[p]||a;return t?c.a.createElement(f,o(o({ref:r},u),{},{components:t})):c.a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return b}));var n=t(3),c=t(8),a=(t(0),t(161)),i=["components"],o={title:"Checks Reference"},l={unversionedId:"references/checks-reference",id:"references/checks-reference",isDocsHomePage:!1,title:"Checks Reference",description:"This document provides a full reference to the Frictionless checks.",source:"@site/../docs/references/checks-reference.md",slug:"/references/checks-reference",permalink:"/docs/references/checks-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/checks-reference.md",version:"current",lastUpdatedBy:"M\xedrian Bruckschen Motta Barros",lastUpdatedAt:1633242867,formattedLastUpdatedAt:"10/3/2021",sidebar:"references",previous:{title:"Errors Reference",permalink:"/docs/references/errors-reference"},next:{title:"Steps Reference",permalink:"/docs/references/steps-reference"}},u=[{value:"baseline",id:"baseline",children:[]},{value:"duplicate_row",id:"duplicate_row",children:[]},{value:"deviated_value",id:"deviated_value",children:[]},{value:"truncated_value",id:"truncated_value",children:[]},{value:"forbidden_value",id:"forbidden_value",children:[]},{value:"sequential_value",id:"sequential_value",children:[]},{value:"row_constraint",id:"row_constraint",children:[]}],d={toc:u};function b(e){var r=e.components,t=Object(c.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document provides a full reference to the Frictionless checks."),Object(a.b)("h2",{id:"baseline"},"baseline"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"baseline")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"duplicate_row"},"duplicate_row"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"duplicate-row")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"deviated_value"},"deviated_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"deviated-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"truncated_value"},"truncated_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"truncated-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"forbidden_value"},"forbidden_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"forbidden-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"sequential_value"},"sequential_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"sequential-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"row_constraint"},"row_constraint"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"row-constraint")," ",Object(a.b)("br",null)))}b.isMDXComponent=!0}}]);