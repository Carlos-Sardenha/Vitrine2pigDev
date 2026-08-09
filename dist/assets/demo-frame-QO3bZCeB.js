const L="5519999783558",h=n=>`https://wa.me/${L}?text=${encodeURIComponent(n)}`;function E({demo:n,waMessage:p,pillLabel:u="Modelo · por Carlos",pillCta:_="Quero um assim → WhatsApp",modalTitle:v="Funcionou, né?",modalText:b}){const i=h(p),o=document.createElement("div");o.className="demo-pill",o.innerHTML=`
    <button class="demo-pill__toggle" type="button" aria-expanded="false">
      <span class="demo-pill__dot" aria-hidden="true"></span>
      ${u}
    </button>
    <div class="demo-pill__menu">
      <a class="cta" href="${i}" target="_blank" rel="noopener"><span>${_}</span></a>
      <a class="cta" href="/#modelos"><span>← Ver outros modelos</span></a>
    </div>
  `,document.body.appendChild(o);const c=o.querySelector(".demo-pill__toggle");c.addEventListener("click",()=>{const e=o.classList.toggle("is-open");c.setAttribute("aria-expanded",String(e))});let d=window.scrollY,l=!1;const g=()=>{const e=window.scrollY;if(!l&&e>window.innerHeight*.5&&(l=!0),l){const a=e>d+4,f=e<d-4;a&&!o.classList.contains("is-open")?o.classList.remove("is-visible"):(f||e>window.innerHeight*.5)&&(a||o.classList.add("is-visible"))}d=e};window.addEventListener("scroll",g,{passive:!0});const t=document.createElement("div");t.className="demo-modal",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`
    <div class="demo-modal__backdrop"></div>
    <div class="demo-modal__card">
      <button class="demo-modal__close" type="button">Fechar ×</button>
      <p class="demo-modal__title">${v}</p>
      <p class="demo-modal__text"></p>
      <div class="demo-modal__actions">
        <a class="cta" href="${i}" target="_blank" rel="noopener"><span>Chamar o Carlos no WhatsApp</span></a>
        <button class="cta demo-modal__continue" type="button"><span>Continuar no modelo</span></button>
      </div>
    </div>
  `,document.body.appendChild(t);const r=t.querySelector(".demo-modal__text"),m=b||"No site de verdade, esse cliente teria acabado de chegar até você. Este é um modelo demonstrativo feito por Carlos — o seu pode ficar assim.",s=()=>t.classList.remove("is-open");return t.querySelector(".demo-modal__backdrop").addEventListener("click",s),t.querySelector(".demo-modal__close").addEventListener("click",s),t.querySelector(".demo-modal__continue").addEventListener("click",s),document.addEventListener("keydown",e=>{e.key==="Escape"&&s()}),document.querySelectorAll("[data-demo-action]").forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),r.textContent=e.dataset.demoText||m,t.classList.add("is-open")})}),document.querySelectorAll("form[data-demo-form]").forEach(e=>{e.addEventListener("submit",a=>{a.preventDefault(),r.textContent=e.dataset.demoText||m,t.classList.add("is-open")})}),{demo:n}}export{E as i};
