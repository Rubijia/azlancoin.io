
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-count]').forEach(el=>{
    const to = Number(el.getAttribute('data-count'))||0; let cur=0; const inc=Math.max(1,Math.round(to/120));
    const iv = setInterval(()=>{ cur+=inc; if(cur>=to){el.innerText=to.toLocaleString(); clearInterval(iv)} else el.innerText=cur.toLocaleString() },10);
  });
});
