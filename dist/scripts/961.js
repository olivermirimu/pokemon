"use strict";(self.webpackChunkpokemon=self.webpackChunkpokemon||[]).push([[961],{961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),r=n(6445),l=n(603);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,c=[],s=!0,m=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=l.call(n)).done)&&(c.push(a.value),c.length!==t);s=!0);}catch(e){m=!0,r=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const s=function(e){var t=e.location,n=o((0,a.useState)({}),2),c=n[0],s=n[1],m=o((0,a.useState)(!1),2),i=m[0],u=m[1];return(0,a.useEffect)((function(){if(t.state)u(!0),s(t.state);else{var e="https://pokeapi.co/api/v2/pokemon/"+t.pathname.split("/").slice(-1).toString();(0,r.k)(e).then((function(e){u(!0),s(e)}))}}),[t]),Object.keys(c).length&&i?a.createElement("section",{className:"component-container individual-pokemon"},a.createElement("div",{className:"pokemon-image"},a.createElement("img",{src:c.sprites.front_default,alt:""})),a.createElement("div",{className:"individual-pokemon-body"},a.createElement("p",{className:"pokemon-name"},c.name),a.createElement("div",null,a.createElement("p",{className:"pokemon-bar"}),a.createElement("span",null,a.createElement("b",{className:"text-muted"},"XP: "),c.base_experience)),a.createElement("div",{className:"pokemon-images"},Object.keys(c.sprites).map((function(e){return a.createElement("img",{key:e,src:c.sprites[e],alt:""})}))),a.createElement("div",{className:"pokemon-stats"},a.createElement("p",null,a.createElement("span",null,c.height),a.createElement("span",{className:"text-muted"},"Height ")),a.createElement("p",null,a.createElement("span",null,c.weight),a.createElement("span",null,"Weight")),c.stats.map((function(e){return a.createElement("p",{key:e.stat.name},a.createElement("span",null,e.base_stat),a.createElement("span",null,e.stat.name))}))),a.createElement("p",{className:"pokemon-moves-header"},"Moves"),a.createElement("div",{className:"pokemon-moves"},c.moves.map((function(e){return a.createElement("span",{className:"pokemon-move",key:e.move.name},e.move.name)}))))):a.createElement(l.Z,null)}},6445:(e,t,n)=>{n.d(t,{T:()=>a,k:()=>r}),n(5108);var a=function(e){return fetch(e||"https://pokeapi.co/api/v2/pokemon").then((function(e){return e.json()}))},r=function(e){return fetch(e).then((function(e){return e.json()}))}}}]);