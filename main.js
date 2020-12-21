(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],c=t.base?l[0]+t.base:l[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var u=i(d),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:h(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function h(e,t){var n,o,r;if(t.singleton){var a=p++;n=f||(f=c(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=c(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var c=l(e,t),s=0;s<n.length;s++){var d=i(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(28);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let r=[],a=[];const i=document.getElementById("addProject"),l=document.getElementById("addProjectConfirm"),c=document.getElementById("project-list"),s=document.getElementById("project-titles"),d=document.getElementById("title"),u=document.getElementById("description"),m=document.getElementById("priority"),f=document.getElementById("date"),p=document.getElementById("submit-todo");let h,g,v="";const C=document.createElement("table"),E=document.createElement("thead"),y=document.createElement("tr");["Title","Description","DueDate","Priority"].forEach((e=>{const t=document.createElement("th");t.textContent=e,y.appendChild(t)}));const S=document.createElement("tbody");document.body.appendChild(C),E.appendChild(y),C.appendChild(E),C.appendChild(S),C.style.display="none";class b{static getToDoFromStore(){return r=null===localStorage.getItem("localToDos")?[]:JSON.parse(localStorage.getItem("localToDos")),r}static getProjectFromStore(){return a=null===localStorage.getItem("localProjects")?[]:JSON.parse(localStorage.getItem("localProjects")),a}static addToDoToStore(e){r=b.getToDoFromStore(),r.push(e),localStorage.setItem("localToDos",JSON.stringify(r))}static addProjectToStore(e){a=b.getProjectFromStore(),a.push(e),localStorage.setItem("localProjects",JSON.stringify(a))}static removeToDoFromStore(e){r=b.getToDoFromStore(),r.forEach((t=>{t.title===e&&r.splice(r.indexOf(t),1)})),localStorage.setItem("localToDos",JSON.stringify(r))}static removeProjectFromStore(e){a=b.getProjectFromStore(),a.forEach(((t,n)=>{t.title===e&&a.splice(n,1)})),localStorage.setItem("localProjects",JSON.stringify(a))}}class x{constructor(e){this.title=e}static addToDoItem(e,t,n,o,r){return{title:e,description:t,priority:n,dueDate:o,projectTitle:r}}}let T="";if(null===localStorage.getItem("localProjects")){const e=new x("House Chores");a.push(e),b.addProjectToStore(e),h=document.createElement("li"),g=document.createElement("option"),g.setAttribute("value",a[0].title),h.textContent=a[0].title,g.textContent=a[0].title,c.appendChild(h),s.appendChild(g),T=a[0].title,s.options[s.selectedIndex].defaultSelected=!0}for(;c.firstChild;)c.removeChild(c.firstChild);const j=document.getElementById("ongoing-todos");let I=m.options[m.selectedIndex];function D(){for(;j.firstChild;)j.removeChild(j.firstChild);for(Array.from(b.getToDoFromStore()).forEach((e=>{const t=document.createElement("li"),n=document.createElement("i");n.setAttribute("class","fas fa-angle-down fa-2x"),t.textContent=e.title,t.setAttribute("id",e.title),t.setAttribute("class","flex justify-between"),t.appendChild(n),j.appendChild(t);const o=document.createElement("i");o.setAttribute("class","fas fa-trash"),t.appendChild(o)}));s.firstChild;)s.removeChild(s.firstChild);for(;c.firstChild;)c.removeChild(c.firstChild);return Array.from(b.getProjectFromStore()).forEach((e=>{if(h=document.createElement("li"),g=document.createElement("option"),h.setAttribute("id",e.title),g.setAttribute("value",e.title),h.textContent=e.title,g.textContent=e.title,"House Chores"!==e.title){const e=document.createElement("i");e.setAttribute("class","fas fa-trash"),h.appendChild(e)}c.appendChild(h),s.appendChild(g),v=s.options[s.selectedIndex],T=e.title})),w(),v}function w(){c.addEventListener("click",(e=>{for(;j.firstChild;)j.removeChild(j.firstChild);r.forEach((t=>{if(e.target.textContent===t.projectTitle){const e=document.createElement("li");j.appendChild(e),e.textContent=t.title;const n=document.createElement("i");n.setAttribute("class","fas fa-trash"),e.appendChild(n)}}))}))}m.addEventListener("change",(()=>(I=m.options[m.selectedIndex],I.value))),s.addEventListener("change",(()=>(v=s.options[s.selectedIndex],v.value))),p.addEventListener("click",(e=>{e.preventDefault();let t=x.addToDoItem(d.value,u.value,I.value,f.value,v.value);r.push(t),b.addToDoToStore(t),D()})),l.addEventListener("click",(()=>{let e=new x(i.value);a.push(e),b.addProjectToStore(e),D(),w()})),j.addEventListener("click",(e=>{let t=e.target.parentElement.textContent;"fas fa-trash"===e.target.className&&(b.removeToDoFromStore(t),e.target.parentElement.remove())})),c.addEventListener("click",(e=>{"fas fa-trash"===e.target.className&&(b.removeProjectFromStore(e.target.parentElement.textContent),b.getToDoFromStore().forEach((t=>{e.target.parentElement.textContent===t.projectTitle&&(b.removeToDoFromStore(t.title),document.getElementById(t.title).remove())})),e.target.parentElement.remove(),s.childNodes.forEach((t=>{t.textContent===e.target.parentElement.textContent&&t.remove()})))})),D(),w(),j.addEventListener("click",(e=>{const t=document.createElement("tr");if("fas fa-angle-down fa-2x"===e.target.className)r.forEach((n=>{e.target.parentElement.textContent===n.title&&[n.title,n.description,n.dueDate,n.priority].forEach((e=>{const n=document.createElement("td");n.textContent=e,t.appendChild(n),S.appendChild(t)}))})),C.style.display="block",e.target.className="fas fa-angle-up fa-2x";else if("fas fa-angle-up fa-2x"===e.target.className){for(C.style.display="none";S.firstChild;)S.removeChild(S.lastChild);e.target.className="fas fa-angle-down fa-2x"}}))})()})();