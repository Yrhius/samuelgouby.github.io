"use strict";(()=>{var n=document.documentElement;function a(){n.setAttribute("data-mode","dark")}function l(){n.setAttribute("data-mode","light")}var s=localStorage.getItem("mode"),i=window.matchMedia("(prefers-color-scheme: dark)"),h=window.matchMedia("(prefers-color-scheme: light)");s==="dark"?a():s==="light"?l():i.matches?a():h.matches&&l();function m(){let o=n.getAttribute("data-mode"),c=localStorage.getItem("darkAccent"),r=localStorage.getItem("lightAccent"),e;return o==="dark"?c===null?e="#4a86e8":e=c:r===null?e="#4a86e8":e=r,e}var u=m(),d=n.style;d.setProperty("--accent",u);var g=document.querySelector("meta[name=theme-color]");g.setAttribute("content",u);document.addEventListener("DOMContentLoaded",function(){let o=document.querySelector("footer input");function c(){let t=m();d.setProperty("--accent",t),o.value=t,g.setAttribute("content",t)}o.onchange=function(){let t=o.value;d.setProperty("--accent",t),n.getAttribute("data-mode")==="dark"?localStorage.setItem("darkAccent",t):localStorage.setItem("lightAccent",t),c()},o.value=u;function r(){document.body.style.transition=document.querySelector("header").style.transition=document.querySelector("footer").style.transition="background-color .3s ease, color .3s ease"}function e(){r(),n.getAttribute("data-mode")==="light"?(a(),localStorage.setItem("mode","dark")):(l(),localStorage.setItem("mode","light")),c()}function f(){r(),i.matches?a():l(),c(),s!==null&&localStorage.removeItem("mode")}i.addEventListener("change",f),document.querySelector("footer button").addEventListener("click",e)});})();
