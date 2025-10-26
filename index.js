import{S as h,a as g,i as n}from"./assets/vendor-GN5hr8qZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new h(".gallery a",{captionsData:"alt",captionsDelay:250});function y(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
    
    <li class="gallery-item">
    <div class="image-box">
    <a href="${o}" class="gallery-link">
        <img
        src="${i}" 
        alt="${e}" 
        class="gallery-image">
    </a>
    </div>
    <ul class="image-stats">
  <li class="image-stat-item">
    <h4>Likes</h4>
    <p>${t}</p>
  </li>
  <li class="image-stat-item">
    <h4>Views</h4>
    <p>${a}</p>
  </li>
  <li class="image-stat-item">
    <h4>Comments</h4>
    <p>${d}</p>
  </li>
  <li class="image-stat-item">
    <h4>Downloads</h4>
    <p>${f}</p>
  </li>
</ul>
</li>
    
    `).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function m(){c.classList.add("is-hidden")}const b="https://pixabay.com/api/",w="52835014-1fa6accc1c58d324fc268a772";function P(s){const r=new URLSearchParams({key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return g.get(`${b}?${r}`).then(i=>i.data).catch(i=>{console.log(i)})}const u=document.querySelector(".form");m();u.addEventListener("submit",$);function $(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}L(),S(),P(r).then(i=>{if(i.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{m(),u.reset()})}
//# sourceMappingURL=index.js.map
