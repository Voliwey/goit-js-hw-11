import{S as h,i as a}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="43082908-d5bb253eb19cb17ad501330a7",g="https://pixabay.com/api/";async function L(s){const r=`${g}?key=${y}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(r)).json()).hits}const c=document.querySelector(".gallery"),d=new h(".gallery a",{captionsData:"alt",captionDelay:250});d.refresh();function b(s){c.innerHTML="",s.forEach(({largeImageURL:r,webformatURL:o,tags:i,likes:e,views:t,comments:n,downloads:m})=>{const p=`
      <li class="card">
        <a href="${r}" class="link">
          <img src="${o}" alt="${i}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${t}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${n}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${m}</p></li>
        </ul>
        </a>
        
      </li>
    `;c.insertAdjacentHTML("beforeend",p)}),d.refresh()}const $=document.querySelector(".form"),l=document.querySelector(".search-input"),u=document.querySelector(".loader");f();$.addEventListener("submit",E);async function E(s){s.preventDefault();const r=l.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search term.",position:"topCenter"});return}S();try{const o=await L(r);o.length===0?(c.innerHTML="",a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})):(b(o),l.value="")}catch(o){console.error("Error fetching images:",o),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{f()}}function S(){u.classList.remove("hidden")}function f(){u.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
