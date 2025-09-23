// dynamic year
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();

// modal wiring
const map = {
  about: document.getElementById('panel-about'),
  writings: document.getElementById('panel-writings'),
  projects: document.getElementById('panel-projects'),
  labnotes: document.getElementById('panel-labnotes'),
  contact: document.getElementById('panel-contact'),
};

function openPanel(name){
  const dlg = map[name]; if(!dlg) return;
  dlg.showModal();
  const closeBtn = dlg.querySelector('[data-close]');
  if(closeBtn) closeBtn.focus();
}
function closePanel(dlg){ dlg.close(); }

// global click handlers
addEventListener('click', (e)=>{
  const openName = e.target.closest?.('[data-open]')?.getAttribute('data-open');
  if(openName){ e.preventDefault(); openPanel(openName); }
  if(e.target.matches?.('[data-close]')){ const d = e.target.closest('dialog'); if(d) closePanel(d); }
});

// close when clicking backdrop / ESC
for(const d of document.querySelectorAll('dialog')){
  d.addEventListener('click', (e)=>{ if(e.target === d) closePanel(d); });
  d.addEventListener('cancel', (e)=>{ e.preventDefault(); closePanel(d); });
}
