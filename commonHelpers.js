import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="42207002-bb01baf83cbb3b924a651843b",f=document.getElementById("searchInput");document.getElementById("searchButton");const d=document.getElementById("imageContainer"),c=document.getElementById("loadingIndicator");document.addEventListener("submit",t=>{t.preventDefault();const s=f.value.trim();s?(m(),p(s)):a.error({title:"Error",message:"Please enter a search term."})});function m(){c.style.display="block"}function h(){c&&(c.style.display="none")}function p(t){const s=`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;m(),fetch(s).then(o=>o.json()).then(o=>{o.hits&&o.hits.length>0?(l(),y(o.hits)):(a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),l())}).catch(o=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(o)}).finally(()=>{h()})}function y(t){const s=t.map(n=>b(n)).join("");d.innerHTML=s,new u(".card-link").refresh()}function b(t){return`
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
