import{S as u,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=document.querySelector("input");p.value.trim();function f(s){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"43082908-d5bb253eb19cb17ad501330a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const d=document.querySelector(".gallery"),h=document.querySelector("input");function g(s){if(s.length==0)l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const o=s.map(t=>`<li class="photos-list-item">
        <a class="photos-list-link" href="${t.largeImageURL}">
        <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <ul class="photo-information-container">
        <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${t.likes}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${t.views}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${t.comments}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${t.downloads}</p></li>
        </ul>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt"}).refresh(),h.value=""}}const y=new u(".gallery a",{});y.refresh();const L=document.querySelector(".gallery");let n;const c=document.querySelector("input"),b=document.querySelector("form"),m=document.querySelector(".loader");function w(){m.classList.remove("is-hidden")}function S(){m.classList.add("is-hidden")}c.addEventListener("input",s=>{s.preventDefault(),n=c.value.trim()});b.addEventListener("submit",s=>{s.preventDefault(),w(),n===""&&l.error({color:"yellow",message:" Please fill in the field for search",position:"topRight"}),n&&f(n).then(o=>g(o.hits)).catch(o=>{console.log(o),l.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>S()),L.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
