import{a as u,S as f,i}from"./assets/vendor-CqoLp5UU.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="58404177-ccd7dae2e71366e6827e26cd9",y="https://pixabay.com/api/";function p(a){return u(y,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data.hits)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){const l=a.map(r=>`
            <li class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img
                        src="${r.webformatURL}"
                        alt="${r.tags}"
                        loading="lazy"
                    />
                </a>

                <div class="gallery-info">
                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Likes</p>
                        <p class="gallery-info-value">${r.likes}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Views</p>
                        <p class="gallery-info-value">${r.views}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Comments</p>
                        <p class="gallery-info-value">${r.comments}</p>
                    </div>

                    <div class="gallery-info-item">
                        <p class="gallery-info-title">Downloads</p>
                        <p class="gallery-info-value">${r.downloads}</p>
                    </div>
                </div>
            </li>
        `);n.innerHTML=l.join(""),g.refresh()}function h(){n.innerHTML=""}function v(){c.style.display="block"}function L(){c.style.display="none"}const w=document.querySelector(".form"),b=document.querySelector("input[name='search-text']");w.addEventListener("submit",a=>{a.preventDefault();const l=b.value.trim();if(l===""){i.warning({title:"Warning",message:"Please enter a search query!"});return}h(),v(),p(l).then(r=>{if(r.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(r)}).catch(r=>{i.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
