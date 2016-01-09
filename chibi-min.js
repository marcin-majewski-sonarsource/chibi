/*!chibijs 3.0.2, Copyright 2012-2016 Kyle Barrow, released under MIT license */
!function(){"use strict";function e(){var e;for(h=!0,e=0;e<d.length;e+=1)d[e]();d=[]}function t(){var t;for(m=!0,h||e(),t=0;t<p.length;t+=1)p[t]();p=[]}function n(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function r(e){return e.replace(/-\w/g,function(e){return e.charAt(1).toUpperCase()})}function a(e,t){return e.currentStyle?e.currentStyle[r(t)]:v.getComputedStyle?v.getComputedStyle(e,null).getPropertyValue(t):null}function s(e,t){return encodeURIComponent(e).replace(/%20/g,"+")+"="+encodeURIComponent(t).replace(/%20/g,"+")}function o(e,t,n){try{e.style[r(t)]=n}catch(a){}}function c(e){e.style.display="","none"===a(e,"display")&&(e.style.display="block")}function i(e){var t,r,a,o="";if(e.constructor===Object){for(t in e)if(e.hasOwnProperty(t))if(e[t].constructor===Array)for(r=0;r<e[t].length;r+=1)o+="&"+s(t,e[t][r]);else o+="&"+s(t,e[t])}else n(function(e){if("FORM"===e.nodeName)for(r=0;r<e.elements.length;r+=1)if(t=e.elements[r],!t.disabled)switch(t.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":t.length>0&&(o+="&"+s(t.name,t.value));break;case"select-multiple":for(a=0;a<t.length;a+=1)t[a].selected&&(o+="&"+s(t.name,t[a].value));break;case"checkbox":case"radio":t.checked&&(o+="&"+s(t.name,t.value));break;default:o+="&"+s(t.name,t.value)}},e);return o.length>0?o.substring(1):""}function u(e,t,r){var a,s,o,c=!1;return e&&(a=e.split(/\s+/),n(function(e){for(o=0;o<a.length;o+=1)if(s=new RegExp("\\b"+a[o]+"\\b","g"),"remove"===t)e.className=e.className.replace(s,"");else if("toggle"===t)e.className=e.className.match(s)?e.className.replace(s,""):e.className+" "+a[o];else if("has"===t&&e.className.match(s)){c=!0;break}},r)),c}function l(e,t,r){var a,s;e&&n(function(n){for(a=y.createElement("div"),a.innerHTML=e;null!==(s=a.lastChild);)try{"before"===t?n.parentNode.insertBefore(s,n):"after"===t?n.parentNode.insertBefore(s,n.nextSibling):"append"===t?n.appendChild(s):"prepend"===t&&n.insertBefore(s,n.firstChild)}catch(r){break}},r)}function f(e){var t,s,E,T=[],b=!1;if(e)if(e.nodeType&&1===e.nodeType)T=[e];else if("object"==typeof e)b="number"!=typeof e.length,T=e;else if("string"==typeof e)for(y.querySelectorAll||(y.querySelectorAll=function(e){var t,n,r,s=y.getElementsByTagName("head")[0],o=[];if(t=y.createElement("STYLE"),t.type="text/css",t.styleSheet){for(t.styleSheet.cssText=e+" {a:b}",s.appendChild(t),n=y.getElementsByTagName("*"),r=0;r<n.length;r+=1)"b"===a(n[r],"a")&&o.push(n[r]);s.removeChild(t)}return o}),s=y.querySelectorAll(e),E=0;E<s.length;E+=1)T[E]=s[E];return t=b?{}:T,t.ready=function(e){if(e){if(h)return e(),t;d.push(e)}},t.loaded=function(e){if(e){if(m)return e(),t;p.push(e)}},t.each=function(e){return"function"==typeof e&&n(function(t){return e.apply(t,arguments)},T),t},t.first=function(){return f(T.shift())},t.last=function(){return f(T.pop())},t.odd=function(){var e,t=[];for(e=0;e<T.length;e+=2)t.push(T[e]);return f(t)},t.even=function(){var e,t=[];for(e=1;e<T.length;e+=2)t.push(T[e]);return f(t)},t.hide=function(){return n(function(e){e.style.display="none"},T),t},t.show=function(){return n(function(e){c(e)},T),t},t.toggle=function(){return n(function(e){"none"===a(e,"display")?c(e):e.style.display="none"},T),t},t.remove=function(){return n(function(e){try{e.parentNode.removeChild(e)}catch(t){}},T),f()},t.css=function(e,s){if(e){if(s||""===s)return n(function(t){o(t,e,s)},T),t;if(T[0]){if(T[0].style[r(e)])return T[0].style[r(e)];if(a(T[0],e))return a(T[0],e)}}},t.getClass=function(){return T[0]&&T[0].className.length>0?T[0].className.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/," "):void 0},t.setClass=function(e){return(e||""===e)&&n(function(t){t.className=e},T),t},t.addClass=function(e){return e&&n(function(t){t.className+=" "+e},T),t},t.removeClass=function(e){return u(e,"remove",T),t},t.toggleClass=function(e){return u(e,"toggle",T),t},t.hasClass=function(e){return u(e,"has",T)},t.html=function(e){return e||""===e?(n(function(t){t.innerHTML=e},T),t):T[0]?T[0].innerHTML:void 0},t.htmlBefore=function(e){return l(e,"before",T),t},t.htmlAfter=function(e){return l(e,"after",T),t},t.htmlAppend=function(e){return l(e,"append",T),t},t.htmlPrepend=function(e){return l(e,"prepend",T),t},t.attr=function(e,r){if(e){if(e=e.toLowerCase(),r||""===r)return n(function(t){"style"===e?t.style.cssText=r:"class"===e?t.className=r:t.setAttribute(e,r)},T),t;if(T[0])if("style"===e){if(T[0].style.cssText)return T[0].style.cssText}else if("class"===e){if(T[0].className)return T[0].className}else if(T[0].getAttribute(e))return T[0].getAttribute(e)}},t.val=function(e){var r,a,s;if(e||""===e)return n(function(t){switch(t.nodeName){case"SELECT":for(("string"==typeof e||"number"==typeof e)&&(e=[e]),a=0;a<t.length;a+=1)for(s=0;s<e.length;s+=1)if(t[a].selected="",t[a].value===e[s]){t[a].selected="selected";break}break;case"INPUT":case"TEXTAREA":case"BUTTON":t.value=e}},T),t;if(T[0])switch(T[0].nodeName){case"SELECT":for(r=[],a=0;a<T[0].length;a+=1)T[0][a].selected&&r.push(T[0][a].value);return r.length>1?r:r[0];case"INPUT":case"TEXTAREA":case"BUTTON":return T[0].value}},t.on=function(r,a){return(e===v||e===y)&&(T=[e]),n(function(e){y.addEventListener?e.addEventListener(r,a,!1):y.attachEvent&&(e[r+a]=function(){return a.apply(e,arguments)},e.attachEvent("on"+r,e[r+a]))},T),t},t.off=function(r,a){return(e===v||e===y)&&(T=[e]),n(function(e){y.addEventListener?e.removeEventListener(r,a,!1):y.attachEvent&&(e.detachEvent("on"+r,e[r+a]),e[r+a]=null)},T),t},t.ajax=function(e,n,r,a,s){var o,c,u=i(T),l=n?n.toUpperCase():"GET",f=new RegExp("http[s]?://(.*?)/","gi"),d=f.exec(e),p="_ts="+ +new Date,h=y.getElementsByTagName("head")[0],m="chibi"+ +new Date+(g+=1);return!u||"GET"!==l&&"DELETE"!==l||(e+=-1===e.indexOf("?")?"?"+u:"&"+u,u=null),!s&&d&&v.location.host!==d[1]?(a&&(e+=-1===e.indexOf("?")?"?"+p:"&"+p),e=e.replace("=%3F","=?"),r&&-1!==e.indexOf("=?")&&(e=e.replace("=?","="+m),v[m]=function(e){try{r(e,200)}catch(t){}v[m]=void 0}),c=document.createElement("script"),c.async=!0,c.src=e,c.onload=function(){h.removeChild(c)},h.appendChild(c)):(v.XMLHttpRequest?o=new XMLHttpRequest:v.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP")),o&&(a&&(e+=-1===e.indexOf("?")?"?"+p:"&"+p),o.open(l,e,!0),o.onreadystatechange=function(){4===o.readyState&&r&&r(o.responseText,o.status)},o.setRequestHeader("X-Requested-With","XMLHttpRequest"),("POST"===l||"PUT"===l)&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(u))),t},t.get=function(e,n,r,a){return t.ajax(e,"get",n,r,a)},t.post=function(e,n,r){return t.ajax(e,"post",n,r)},t}var d=[],p=[],h=!1,m=!1,g=0,y=document,v=window;y.addEventListener?(y.addEventListener("DOMContentLoaded",e,!1),v.addEventListener("load",t,!1)):y.attachEvent?(y.attachEvent("onreadystatechange",e),v.attachEvent("onload",t)):v.onload=t,v.$=f}();