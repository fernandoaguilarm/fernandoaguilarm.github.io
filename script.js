const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navLinks');
const langToggle=document.getElementById('langToggle');
const form=document.getElementById('contactForm');
const toast=document.getElementById('toast');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
let lang='es';
function applyLanguage(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-es][data-en]').forEach(el=>{el.innerHTML=el.dataset[lang]});
 langToggle.textContent=lang==='es'?'EN':'ES';
 langToggle.setAttribute('aria-label',lang==='es'?'Switch to English':'Cambiar a español');
}
langToggle.addEventListener('click',()=>{lang=lang==='es'?'en':'es';applyLanguage()});
form.addEventListener('submit',e=>{
 e.preventDefault();
 const vals={name:name.value.trim(),company:company.value.trim(),email:email.value.trim(),need:need.value,project:project.value.trim(),problem:problem.value.trim(),timeline:timeline.value};
 const subject=encodeURIComponent(lang==='es'?'Solicitud de proyecto desde mi sitio web':'Project inquiry from my website');
 const body=encodeURIComponent(`Nombre / Name: ${vals.name}\nEmpresa / Company: ${vals.company||'No indicado'}\nCorreo / Email: ${vals.email}\nNecesidad / Need: ${vals.need}\nPlazo / Timeline: ${vals.timeline}\n\nProyecto / Project:\n${vals.project}\n\nProblema principal / Main problem:\n${vals.problem||'No indicado'}`);
 toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),2500);
 setTimeout(()=>location.href='mailto:aguilarfher782@gmail.com?subject='+subject+'&body='+body,300);
});
applyLanguage();
