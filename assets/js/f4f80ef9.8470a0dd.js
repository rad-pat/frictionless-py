(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(161)),i=["components"],c={title:"Step Guide"},s={unversionedId:"guides/extension/step-guide",id:"guides/extension/step-guide",isDocsHomePage:!1,title:"Step Guide",description:"The Step concept is a part of the Transform API. You can create a custom Step to be used as part of resource or package transformation.",source:"@site/../docs/guides/extension/step-guide.md",slug:"/guides/extension/step-guide",permalink:"/docs/guides/extension/step-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/step-guide.md",version:"current",lastUpdatedBy:"M\xedrian Bruckschen Motta Barros",lastUpdatedAt:1633242867,formattedLastUpdatedAt:"10/3/2021",sidebar:"guides",previous:{title:"Check Guide",permalink:"/docs/guides/extension/check-guide"},next:{title:"Type Guide",permalink:"/docs/guides/extension/type-guide"}},u=[{value:"Step Example",id:"step-example",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Step concept is a part of the Transform API. You can create a custom Step to be used as part of resource or package transformation."),Object(a.b)("h2",{id:"step-example"},"Step Example"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This step uses PETL under the hood.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Step\n\nclass cell_set(Step):\n    code = "cell-set"\n\n    def __init__(self, descriptor=None, *, value=None, field_name=None):\n        self.setinitial("value", value)\n        self.setinitial("fieldName", field_name)\n        super().__init__(descriptor)\n\n    def transform_resource(self, resource):\n        value = self.get("value")\n        field_name = self.get("fieldName")\n        yield from resource.to_petl().update(field_name, value)\n')))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);