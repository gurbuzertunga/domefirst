(()=>{"use strict";var e={28:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},379:(e,t,o)=>{var n,r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function i(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var l=e[r],c=t.base?l[0]+t.base:l[0],s=o[c]||0,d="".concat(c," ").concat(s);o[c]=s+1;var u=i(d),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:h(m,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=o.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,p=0;function h(e,t){var o,n,r;if(t.singleton){var a=p++;o=f||(f=c(t)),n=u.bind(null,o,a,!1),r=u.bind(null,o,a,!0)}else o=c(t),n=m.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=i(o[n]);a[r].references--}for(var c=l(e,t),s=0;s<o.length;s++){var d=i(o[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}o=c}}}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(379),t=o.n(e),n=o(28);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;let r=[],a=[];const i=document.getElementById("addProject"),l=document.getElementById("addProjectConfirm"),c=document.getElementById("project-list"),s=document.getElementById("project-titles"),d=document.getElementById("title"),u=document.getElementById("description"),m=document.getElementById("priority"),f=document.getElementById("date"),p=document.getElementById("submit-todo");let h,g;class v{static getToDoFromStore(){return r=null===localStorage.getItem("localToDos")?[]:JSON.parse(localStorage.getItem("localToDos")),r}static getProjectFromStore(){return a=null===localStorage.getItem("localProjects")?[]:JSON.parse(localStorage.getItem("localProjects")),a}static addToDoToStore(e){r=v.getToDoFromStore(),console.log(r),r.push(e),localStorage.setItem("localToDos",JSON.stringify(r))}static addProjectToStore(e){a=v.getProjectFromStore(),a.push(e),localStorage.setItem("localProjects",JSON.stringify(a))}static removeToDoFromStore(e){r=v.getToDoFromStore(),r.forEach((t=>{t.title===e&&r.splice(r.indexOf(t),1)})),localStorage.setItem("localToDos",JSON.stringify(r))}static removeProjectFromStore(e){a=v.getProjectFromStore(),a.forEach(((t,o)=>{t.title===e&&a.splice(o,1)})),localStorage.setItem("localProjects",JSON.stringify(a))}}class S{constructor(e="House Chores"){this.title=e}static addToDoItem(e,t,o,n,r){return{title:e,description:t,priority:o,dueDate:n,projectTitle:r}}}let y="";if(null===localStorage.getItem("localProjects")){const e=new S;a.push(e),console.log(a),v.addProjectToStore(e),h=document.createElement("li"),g=document.createElement("option"),g.setAttribute("id",a[0].title),c.appendChild(h),s.appendChild(g),h.textContent=a[0].title,g.textContent=a[0].title,y=a[0].title}for(;c.firstChild;)c.removeChild(c.firstChild);const C=document.getElementById("ongoing-todos");let E=m.options[m.selectedIndex],b=s.options[s.selectedIndex];function I(){for(;C.firstChild;)C.removeChild(C.firstChild);for(Array.from(v.getToDoFromStore()).forEach((e=>{const t=document.createElement("li");C.appendChild(t),t.textContent=e.title;const o=document.createElement("i");o.setAttribute("class","fas fa-trash"),t.appendChild(o)}));c.firstChild;)c.removeChild(c.firstChild);Array.from(v.getProjectFromStore()).forEach((e=>{if(h=document.createElement("li"),g=document.createElement("option"),g.setAttribute("id",i.value),c.appendChild(h),s.appendChild(g),h.textContent=e.title,g.textContent=e.title,y=e.title,"House Chores"!==e.title){const e=document.createElement("i");e.setAttribute("class","fas fa-trash"),h.appendChild(e)}}))}m.addEventListener("change",(()=>(E=m.options[m.selectedIndex],E.value))),s.addEventListener("change",(()=>(b=s.options[s.selectedIndex],b.value))),p.addEventListener("click",(e=>{e.preventDefault();let t=S.addToDoItem(d.value,u.value,E.value,f.value,b.value);r.push(t),console.log(r),v.addToDoToStore(t),I()})),l.addEventListener("click",(()=>{let e=new S(i.value);a.push(e),console.log(a),v.addProjectToStore(e),I()})),C.addEventListener("click",(e=>{console.log(e.target.parentElement.title);let t=e.target.parentElement.textContent;console.log(t),(e.target.className="fas fa-trash")&&(v.removeToDoFromStore(t),e.target.parentElement.remove())})),c.addEventListener("click",(e=>{"fas fa-trash"===e.target.className&&v.removeProjectFromStore(e.target.parentElement.textContent)})),I()})()})();