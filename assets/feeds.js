// ===============================
// Content Feeds (JSON + Markdown)
// ===============================
async function fetchJSON(url){
  const r = await fetch(url, { cache: 'no-store' });
  if(!r.ok) throw new Error('HTTP '+r.status);
  return r.json();
}
async function fetchText(url){
  const r = await fetch(url, { cache: 'no-store' });
  if(!r.ok) throw new Error('HTTP '+r.status);
  return r.text();
}

// Tiny Markdown → HTML (safe-ish & minimal)
function mdToHtml(md){
  // escape HTML
  md = md.replace(/[&<>]/g, function(s){ return ({"&":"&amp;","<":"&lt;",">":"&gt;"})[s]; });
  // code fences
  md = md.replace(/```([\s\S]*?)```/g, function(_m, code){ return '<pre><code>'+code+'</code></pre>'; });
  // headings
  md = md.replace(/^######\s?(.*)$/gm,'<h6>$1</h6>')
         .replace(/^#####\s?(.*)$/gm,'<h5>$1</h5>')
         .replace(/^####\s?(.*)$/gm,'<h4>$1</h4>')
         .replace(/^###\s?(.*)$/gm,'<h3>$1</h3>')
         .replace(/^##\s?(.*)$/gm,'<h2>$1</h2>')
         .replace(/^#\s?(.*)$/gm,'<h1>$1</h1>');
  // lists
  md = md.replace(/^(?:- |\* )(.*)$/gm,'<li>$1</li>');
  md = md.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, function(m){ return '<ul>'+m+'</ul>'; });
  // bold/italic
  md = md.replace(/\*\*([^*]+)\*\*/g,'<strong>$1<\/strong>')
         .replace(/\*([^*]+)\*/g,'<em>$1<\/em>');
  // inline code
  md = md.replace(/`([^`]+)`/g,'<code>$1</code>');
  // links
  md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  // paragraphs
  md = md.replace(/^(?!<h\d|<ul|<pre|<li|<\/li|<\/ul|<blockquote)([^\n][\s\S]*?)(?:\n{2,}|$)/gm, '<p>$1</p>');
  return md;
}

// Writings loader: reads ./writings/index.json and ./writings/*.md
async function loadWritings(){
  var listEl = document.getElementById('writings-list');
  var artEl = document.getElementById('writings-article');
  var searchEl = document.getElementById('writings-search');
  if(!listEl || !artEl) return;
  listEl.innerHTML = '<li class="muted">Loading…</li>';
  try{
    var items = await fetchJSON('./writings/index.json');
    var filtered = items.slice();
    function renderList(){
      listEl.innerHTML = '';
      filtered.forEach(function(it){
        var li = document.createElement('li');
        li.innerHTML = '<a href="#" data-slug="'+it.slug+'" class="pill">'+it.title+'</a><br><small class="muted">'+(it.date||'')+'</small>';
        listEl.appendChild(li);
      });
    }
    if(searchEl){
      searchEl.addEventListener('input', function(){
        var q = searchEl.value.toLowerCase();
        filtered = items.filter(function(it){ return (it.title+it.slug).toLowerCase().indexOf(q) !== -1; });
        renderList();
      });
    }
    renderList();
    // auto-open first post
    if(items[0]) openPost(items[0].slug);
    listEl.addEventListener('click', async function(e){
      var a = e.target.closest && e.target.closest('a[data-slug]');
      if(!a) return; e.preventDefault(); openPost(a.getAttribute('data-slug'));
    });
    async function openPost(slug){
      artEl.innerHTML = '<p class="muted">Loading post…</p>';
      try{
        var md = await fetchText('./writings/'+slug+'.md');
        artEl.innerHTML = mdToHtml(md);
      }catch(err){
        artEl.innerHTML = '<p class="muted">Could not load <code>'+slug+'.md</code>. Ensure it exists in <code>/writings/</code>.</p>';
      }
    }
  }catch(err){
    listEl.innerHTML = '<li class="muted">No index found. Add <code>/writings/index.json</code>.</li>';
    artEl.innerHTML = '<p class="muted">Create your first post in <code>/writings/first-post.md</code>.</p>';
  }
}

// Lab notes loader: reads ./labnotes.json
async function loadLabNotes(){
  var ul = document.getElementById('labnotes-list');
  if(!ul) return;
  ul.innerHTML = '<li class="muted">Loading…</li>';
  try{
    var notes = await fetchJSON('./labnotes.json');
    ul.innerHTML = '';
    notes.forEach(function(n){
      var li = document.createElement('li');
      li.innerHTML = '<strong>'+n.date+'</strong> — '+n.text;
      ul.appendChild(li);
    });
  }catch(err){
    ul.innerHTML = '<li class="muted">No <code>labnotes.json</code> found yet.</li>';
  }
}

// Hook panel openings → loaders (monkey-patch openPanel from app.js)
(function(){
  if(typeof openPanel !== 'function') return;
  var oldOpen = openPanel;
  openPanel = function(name){
    oldOpen(name);
    if(name==='writings') loadWritings();
    if(name==='labnotes') loadLabNotes();
  };
})();
