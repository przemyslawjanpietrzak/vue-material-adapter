(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=n.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(e,t){t=t||{};var n,i,a,c=[],f=[],p=e.querySelectorAll(r);for(t.includeContainer&&o.call(e,r)&&(p=Array.prototype.slice.apply(p)).unshift(e),n=0;n<p.length;n++)u(i=p[n])&&(0===(a=d(i))?c.push(i):f.push({documentOrder:n,tabIndex:a,node:i}));return f.sort(l).map(function(e){return e.node}).concat(c)}function u(e){return!(!a(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||d(e)<0)}function a(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}i.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,r)&&u(e)},i.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,c)&&a(e)};var c=n.concat("iframe").join(",");function d(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function l(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=i}}]);
//# sourceMappingURL=npm.tabbable.5140f12ab39b43f2fafa.js.map