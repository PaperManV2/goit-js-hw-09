!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=null;n.addEventListener("click",(function(){n.setAttribute("disabled",""),n.attribute,o=setInterval((function(){t="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.style.backgroundColor=t}),1e3)})),r.addEventListener("click",(function(){n.removeAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.457d5108.js.map