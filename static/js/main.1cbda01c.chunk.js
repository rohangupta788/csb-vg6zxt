(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),s=n.n(c),l=(n(12),n(4),n(6)),i=n(2),j=n(3),u=n.n(j),b=(n(14),n(0));function o(e){for(var t=[],n=1;n<=20;n++){var r="strIngredient"+n;t[n-1]=e.meal[r]}return Object(b.jsx)("div",{id:"single-meal",children:Object(b.jsxs)("div",{className:"single-meal",children:[Object(b.jsx)("h1",{children:e.meal.strMeal}),Object(b.jsx)("img",{src:e.meal.strMealThumb,alt:e.meal.strMeal}),Object(b.jsxs)("div",{className:"single-meal-info",children:[Object(b.jsx)("p",{children:e.meal.strCategory}),Object(b.jsx)("p",{children:e.meal.strArea})]}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("p",{children:e.meal.strInstructions}),Object(b.jsx)("h2",{children:"Ingredients"}),Object(b.jsx)("ul",{children:t.map((function(e){return e?Object(b.jsx)("li",{children:e},e):null}))})]})]})})}var d=function(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"meals",id:"meals",children:e.meals.map((function(e){return Object(b.jsxs)("div",{className:"meal",onClick:function(){return c(e)},children:[Object(b.jsx)("img",{src:e.strMealThumb,alt:e.strMeal}),Object(b.jsx)("div",{className:"meal-info","data-mealid":e.idMeal,children:Object(b.jsx)("h3",{children:e.strMeal})})]})}))}),a?Object(b.jsx)(o,{meal:a}):null]})};function m(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(i.a)(c,2),j=s[0],m=s[1],h=Object(r.useState)(null),x=Object(i.a)(h,2),O=x[0],p=x[1],f=Object(r.useState)(!1),v=Object(i.a)(f,2),g=v[0],w=v[1],k=Object(r.useState)(!1),N=Object(i.a)(k,2),S=N[0],M=N[1],y=Object(r.useRef)(),C=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!=n){e.next=4;break}return alert("Please enter a search term."),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+n);case 7:return r=e.sent,e.next=10,r.json();case 10:if(null!==(c=e.sent).meals){e.next=14;break}return y.current.textContent="There are no search results. Try again!",e.abrupt("return");case 14:m(c.meals),w(!0),M(!1),a(""),y.current.textContent="Search result for '".concat(n,"':"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m([]),e.next=4,fetch("https://www.themealdb.com/api/json/v1/1/random.php"+n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,p(r.meals[0]),M(!0),w(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"Meal Finder"}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsxs)("form",{className:"flex",id:"submit",onSubmit:C,children:[Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Search for meals or keywords"}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:"Submit"})]}),Object(b.jsx)("button",{className:"random-btn",id:"random",onClick:F,children:"Random"})]}),g?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"result-heading",children:Object(b.jsx)("h2",{ref:y})}),Object(b.jsx)(d,{meals:j})]}):null,S?Object(b.jsx)(o,{meal:O}):null]})}var h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.1cbda01c.chunk.js.map