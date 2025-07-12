import{S as p,i}from"./assets/vendor-DpVPnhEv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){const a=new URLSearchParams({key:"51289001-701d2fcdb5357aeffdf8b918c",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m(r){return r.hits.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:d,downloads:u})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${o}">
                    <img src="${s}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${n}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${d}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${u}</span>
                </div>
            </div>
        </li>`).join("")}const l=document.querySelector(".loader"),y=document.getElementById("searchForm"),c=document.querySelector(".gallery"),g=new p(".card .place-for-image a",{captions:!0,captionsData:"alt",captionDelay:250});function h(r){l.style.display=r}l.style.display="none";y.addEventListener("submit",v);async function v(r){r.preventDefault(),c.innerHTML="";const a=r.currentTarget.elements.searchInput.value;h("block"),f(a).then(s=>{if(s.total===0)return i.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),0;c.insertAdjacentHTML("beforeend",m(s)),g.refresh(),r.target.reset()}).catch(s=>{i.error({title:"Error",message:s.message})}).finally(()=>{toggleLoader("none")})}
//# sourceMappingURL=index.js.map
