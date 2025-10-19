import{S as d,a as p,i as a}from"./assets/vendor-GN5hr8qZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionsDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
    <div class="container">
    <li class="gallery-item">
      <a href="${n}" class="gallery-link">
        <img src="${o}" alt="${e}" class="gallery-image">
      </a>
    </li>
    <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${s}</p>
    <p class="info-item"><b>Comments</b> ${f}</p>
    <p class="info-item"><b>Downloads</b> ${m}</p>
    </div>
    </div>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function y(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const S="https://pixabay.com/api/",v="52835014-1fa6accc1c58d324fc268a772";function w(i){const r=new URLSearchParams({key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return p.get(`${S}?${r}`).then(o=>o.data).catch(o=>{console.log(o)})}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query",position:"topRight"});return}y(),b(),w(r).then(o=>{if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),u.reset()})}
//# sourceMappingURL=index.js.map
