
document.addEventListener('DOMContentLoaded',()=>{
  // counters
  document.querySelectorAll('[data-count]').forEach(el=>{
    const to = Number(el.getAttribute('data-count'))||0; let cur=0; const inc=Math.max(1,Math.round(to/120));
    const iv = setInterval(()=>{ cur+=inc; if(cur>=to){ el.innerText = to.toLocaleString(); clearInterval(iv) } else el.innerText = cur.toLocaleString() },10);
  });
  // mobile menu toggle
  const btn = document.querySelector('#menuBtn');
  const nav = document.querySelector('#navMenu');
  if(btn && nav){
    btn.addEventListener('click', ()=>{ if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'; nav.style.flexDirection='column';}})
  }
});
