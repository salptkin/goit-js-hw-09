import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t=document.querySelector(".feedback-form"),n="feedback-form-state";t.addEventListener("input",m);t.addEventListener("submit",c);function m(){const e=new FormData(t),o={};e.forEach((a,r)=>{o[r]=a}),localStorage.setItem(n,JSON.stringify(o))}function c(e){e.preventDefault();const o=new FormData(e.currentTarget),a={};let r=!0;o.forEach((l,s)=>{l===""?r=!1:a[s]=l}),r?(localStorage.setItem(n,JSON.stringify(a)),console.log(a),t.reset(),localStorage.removeItem(n)):alert("Lütfen alanı boş bırakmayınız.")}window.addEventListener("load",()=>{const e=JSON.parse(localStorage.getItem(n));e&&(t.email.value=e.email,t.message.value=e.message)});
//# sourceMappingURL=form.js.map