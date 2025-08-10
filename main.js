document.getElementById('menuBtn')?.addEventListener('click', function(){
  var m = document.getElementById('navMenu');
  if(!m) return;
  if(m.style.display==='block'){ m.style.display='none'; } else { m.style.display='block'; }
});