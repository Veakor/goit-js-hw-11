import{i,S as u}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f="42207002-bb01baf83cbb3b924a651843b",g=document.getElementById("searchInput");document.getElementById("searchButton");const d=document.getElementById("imageContainer"),a=document.getElementById("loadingIndicator");document.addEventListener("submit",t=>{t.preventDefault();const n=g.value.trim();n?(m(),h(n)):i.error({title:"Error",message:"Please enter a search term."})});function m(){a.style.display="block"}function p(){a&&(a.style.display="none")}function h(t){const n=`https://pixabay.com/api/?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;m(),fetch(n).then(r=>r.json()).then(r=>{r.hits&&r.hits.length>0?(l(),I(r.hits)):(i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),l())}).catch(r=>{i.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(r)}).finally(()=>{p()})}const y=new u(".card-link");function I(t){const n=t.map(r=>b(r)).join("");d.innerHTML=n,y.refresh()}function b(t){return`
    <div class="image-card">
      <a href="${t.largeImageURL}" class="card-link" data-lightbox="image">
        <img src="${t.webformatURL}" alt="${t.tags}" class="card-image">
      </a>
      <div class="card-details">
        <p class="card-text"><strong>Likes:</strong> ${t.likes}</p>
        <p class="card-text"><strong>Views:</strong> ${t.views}</p>
      </div>
      <div class="card-details">
        <p class="card-text"><strong>Comments:</strong> ${t.comments}</p>
        <p class="card-text"><strong>Downloads:</strong> ${t.downloads}</p>
      </div>
    </div>
  `}function l(){d.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
