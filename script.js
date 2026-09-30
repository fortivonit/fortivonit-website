const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.target;
  const note=document.getElementById('formNote');
  const name=form.elements.name.value.trim();
  const email=form.elements.email.value.trim();
  const message=form.elements.message.value.trim();
  const subject=encodeURIComponent(`Fortivon IT Website Inquiry from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nBusiness email: ${email}\n\nInquiry:\n${message}`);
  window.location.href=`mailto:info@fortivonit.com?subject=${subject}&body=${body}`;
  note.textContent='Your email app should open with the inquiry addressed to info@fortivonit.com. If it does not, email us directly at info@fortivonit.com.';
  note.style.color='#03aee1';
});
