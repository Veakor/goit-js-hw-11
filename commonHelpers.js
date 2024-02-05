import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g="42207002-bb01baf83cbb3b924a651843b",f=document.getElementById("searchInput");document.getElementById("searchButton");const d=document.getElementById("imageContainer"),c=document.getElementById("loadingIndicator");document.addEventListener("submit",()=>{event.preventDefault();const e=f.value.trim();e?(m(),p(e)):a.error({title:"Error",message:"Please enter a search term."})});function m(){c.style.display="block"}function h(){c&&(c.style.display="none")}function p(e){const n=`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;m(),fetch(n).then(s=>s.json()).then(s=>{s.hits&&s.hits.length>0?(l(),y(s.hits)):(a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}),l())}).catch(s=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again."}),console.error(s)}).finally(()=>{h()})}function y(e){const n=e.map(o=>b(o)).join("");d.innerHTML=n,new u(".card-link").refresh()}function b(e){return`
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
  `}function l(){d.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
