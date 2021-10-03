(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{140:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),i=(t(0),t(161)),a=["components"],c={title:"Error Guide"},s={unversionedId:"guides/extension/error-guide",id:"guides/extension/error-guide",isDocsHomePage:!1,title:"Error Guide",description:"The Error class is a metadata with no behavior. It's used to describe an error that happened during Framework work or during the validation.",source:"@site/../docs/guides/extension/error-guide.md",slug:"/guides/extension/error-guide",permalink:"/docs/guides/extension/error-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/error-guide.md",version:"current",lastUpdatedBy:"M\xedrian Bruckschen Motta Barros",lastUpdatedAt:1633242867,formattedLastUpdatedAt:"10/3/2021",sidebar:"guides",previous:{title:"Type Guide",permalink:"/docs/guides/extension/type-guide"},next:{title:"Server Guide",permalink:"/docs/guides/extension/server-guide"}},u=[{value:"Error Example",id:"error-example",children:[]}],d={toc:u};function l(e){var r=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Error class is a metadata with no behavior. It's used to describe an error that happened during Framework work or during the validation."),Object(i.b)("h2",{id:"error-example"},"Error Example"),Object(i.b)("p",null,"To create a custom error you basically just need to fill the required class fields:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import errors\n\nclass DuplicateRowError(errors.RowError):\n    code = "duplicate-row"\n    name = "Duplicate Row"\n    tags = ["#table", "#row", "#duplicate"]\n    template = "Row at position {rowPosition} is duplicated: {note}"\n    description = "The row is duplicated."\n')))}l.isMDXComponent=!0},161:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),f=n,m=l["".concat(a,".").concat(f)]||l[f]||p[f]||i;return t?o.a.createElement(m,c(c({ref:r},u),{},{components:t})):o.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);