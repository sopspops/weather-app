(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(12),i=n.n(r),j=(n(18),n(6)),s=n(25),o=n(26),h=n(29),l=n(30),u=n(0),b=function(e){var t=e.onSearch,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)("h1",{children:"Search Your City"})})}),Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{xs:4,className:"text-center",children:Object(u.jsx)(h.a,{placeholder:"Enter city",onChange:function(e){return i(e.target.value)},value:r})})}),Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{onClick:function(){return t(r)},children:"Check Weather"})})})]})},d=n(27),O=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),s=Object(j.a)(i,2),o=s[0],h=s[1],l=Object(c.useState)(null),u=Object(j.a)(l,2),b=u[0],d=u[1],O=Object(c.useState)(e),x=Object(j.a)(O,2),p=x[0],m=x[1];return Object(c.useEffect)((function(){p&&(d(!0),r(null),h(null),fetch(p).then((function(e){return e.json()})).then((function(e){d(!1),e.cod>=400?h(e.message):r(e)})).catch((function(e){d(!1),h(e)})))}),[p]),{data:a,error:o,isLoading:b,setUrl:m}},x=n(28),p=function(e){var t=e.dt,n=e.temp_min,c=e.temp_max,a=e.main,r=e.icon,i=new Date(t);return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Img,{variant:"top",src:"http://openweathermap.org/img/wn/".concat(r,"@2x.png")}),Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)(x.a.Title,{children:a}),Object(u.jsxs)("p",{children:[i.toLocaleDateString()," = ",i.toLocaleTimeString()]}),Object(u.jsxs)("p",{children:["Min: ",n]}),Object(u.jsxs)("p",{children:["Max: ",c]})]})]})},m=function(e){var t=e.weathers;return Object(u.jsx)(s.a,{children:t.map((function(e){var t=e.dt,n=e.main,c=e.weather;return Object(u.jsx)(o.a,{children:Object(u.jsx)(p,{temp_max:n.temp_max,temp_min:n.temp_min,dt:1e3*t,main:c[0].main,icon:c[0].icon})},t)}))})},f=function(){var e=O(),t=e.data,n=e.error,c=e.isLoading,a=e.setUrl;return Object(u.jsxs)(d.a,{className:"App",children:[Object(u.jsx)(b,{onSearch:function(e){return a("".concat("http://api.openweathermap.org/","/data/2.5/forecast?q=").concat(e,"&appid=").concat("abb7c308f96367abc3a32a4a5ccd5b1e"))}}),n?Object(u.jsxs)("h2",{children:["Error when fetching: ",n]}):!t&&c?Object(u.jsx)("h2",{children:"LOADING..."}):t?Object(u.jsx)(m,{weathers:t.list}):null]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(23);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.99ee3873.chunk.js.map