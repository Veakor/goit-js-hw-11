import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d="42207002-bb01baf83cbb3b924a651843b",m=document.getElementById("searchInput"),u=document.getElementById("searchButton"),c=document.getElementById("imageContainer");u.addEventListener("click",()=>{const e=m.value.trim();e?g(e):a.error({title:"Error",message:"Please enter a search term."})});function g(e){const o=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(o).then(s=>s.json()).then(s=>{s.hits&&s.hits.length>0?f(s.hits):(a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),p())}).catch(s=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(s)})}function f(e){const o=e.map(n=>h(n)).join("");c.innerHTML=o,new l(".card-link").refresh()}function h(e){return`
    <div class="image-card">
      <a href="${e.largeImageURL}" class="card-link" data-lightbox="image">
        <img src="${e.webformatURL}" alt="${e.tags}" class="card-image">
      </a>
      <div class="card-details">
        <p class="card-text"><strong>Likes:</strong> ${e.likes}</p>
        <p class="card-text"><strong>Views:</strong> ${e.views}</p>
      </div>
      <div class="card-details">
        <p class="card-text"><strong>Comments:</strong> ${e.comments}</p>
        <p class="card-text"><strong>Downloads:</strong> ${e.downloads}</p>
      </div>
    </div>
  `}function p(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
