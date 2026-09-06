(function(){
  var script=document.currentScript||Array.from(document.scripts).find(function(s){return /assets\/js\/shell\.js/.test(s.src)});
  var src=script?script.getAttribute('src')||'':'';
  var root=src.replace(/\/assets\/js\/shell\.js(?:\?.*)?$/,'')||'.';
  function u(path){return root+path}
  function header(){return '<header class="pf-header"><div class="container pf-nav"><a class="pf-brand" href="'+u('/index.html')+'"><strong>Ajeet Kumar</strong><span>Design leadership · UI/UX · Visual design</span></a><nav class="pf-links" aria-label="Primary navigation"><a href="'+u('/index.html')+'">Home</a><a href="'+u('/about/index.html')+'">About</a><div class="pf-work"><button type="button" aria-haspopup="true">Work</button><div class="pf-menu"><a href="'+u('/work/uiux/index.html')+'">UI/UX design <span>→</span></a><a href="'+u('/work/website/index.html')+'">Website design <span>→</span></a><a href="'+u('/work/social/index.html')+'">Social & graphics <span>→</span></a><a href="'+u('/work/print/index.html')+'">Print & brochures <span>→</span></a><a href="'+u('/work/event/index.html')+'">Event design <span>→</span></a><a href="'+u('/work/misc/index.html')+'">Other explorations <span>→</span></a><a href="'+u('/work/index.html')+'">View all work <span>→</span></a></div></div><a href="'+u('/contact/index.html')+'">Contact</a></nav><a class="pf-cta" href="'+u('/contact/index.html')+'">Let’s connect →</a><button class="pf-mobile" type="button" aria-label="Open menu">☰</button></div></header>'}
  function footer(){return '<footer class="pf-footer"><div class="container"><div class="pf-footer-grid"><div><h3>Design with purpose. Deliver with impact.</h3><p>I bring together product thinking, visual craft and design leadership to make complex ideas easier to understand—and easier to use.</p></div><div><strong>Explore</strong><a href="'+u('/work/index.html')+'">Selected work</a><a href="'+u('/about/index.html')+'">About me</a><a href="'+u('/contact/index.html')+'">Contact</a></div><div><strong>Capabilities</strong><a href="'+u('/work/uiux/index.html')+'">UI/UX design</a><a href="'+u('/work/website/index.html')+'">Website design</a><a href="'+u('/work/social/index.html')+'">Visual communication</a></div></div><small>© 2026 Ajeet Kumar · Greater Noida, India · 17+ years across digital products, brand and creative leadership.</small></div></footer>'}
  function replaceChrome(){
    var old=document.querySelector('.site-header,.top,.portfolio-header,.header-shell');
    if(old)old.outerHTML=header(); else document.body.insertAdjacentHTML('afterbegin',header());
    var oldFoot=document.querySelector('.site-footer,.portfolio-footer');
    if(oldFoot)oldFoot.outerHTML=footer(); else document.body.insertAdjacentHTML('beforeend',footer());
  }
  function trail(){
    var p=location.pathname.replace(/\/+$/,'');
    if(!/\/(work|projects)\//.test(p))return;
    if(document.querySelector('.pf-trail'))return;
    var pieces=[];var back=u('/work/index.html');
    pieces.push('<a href="'+u('/work/index.html')+'">Work</a>');
    if(/\/work\/uiux/.test(p)){pieces.push('<span>›</span><span>UI/UX design</span>');back=u('/work/index.html')}
    else if(/\/work\/website\//.test(p)){pieces.push('<span>›</span><a href="'+u('/work/website/index.html')+'">Website design</a>');var nm=document.title.split('|')[0].trim();pieces.push('<span>›</span><span>'+nm+'</span>');back=u('/work/website/index.html')}
    else if(/\/work\/website/.test(p)){pieces.push('<span>›</span><span>Website design</span>');back=u('/work/index.html')}
    else if(/\/work\/social/.test(p)){pieces.push('<span>›</span><span>Social & graphics</span>');back=u('/work/index.html')}
    else if(/\/work\/print/.test(p)){pieces.push('<span>›</span><span>Print & brochures</span>');back=u('/work/index.html')}
    else if(/\/work\/event/.test(p)){pieces.push('<span>›</span><span>Event design</span>');back=u('/work/index.html')}
    else if(/\/work\/misc/.test(p)){pieces.push('<span>›</span><span>Other explorations</span>');back=u('/work/index.html')}
    else if(/\/projects\//.test(p)){pieces.push('<span>›</span><a href="'+u('/work/uiux/index.html')+'">UI/UX design</a>');pieces.push('<span>›</span><span>'+document.title.split('|')[0].trim()+'</span>');back=u('/work/uiux/index.html')}
    var main=document.querySelector('main');if(!main)return;
    main.insertAdjacentHTML('beforebegin','<div class="pf-trail"><div class="container"><div class="pf-crumbs">'+pieces.join('')+'</div><a class="pf-back" href="'+back+'">← Back</a></div></div>');
  }
  function humanize(){
    var page=document.body.dataset.page||'';
    function text(sel,value){var n=document.querySelector(sel);if(n)n.textContent=value}
    if(page==='home'){
      text('.hero-home h1','Turning complex ideas into meaningful experiences.');
      text('.hero-bottom p','I’m Ajeet Kumar, a design manager with 17+ years across digital products, websites, brand systems and campaign design. I enjoy bringing clarity to complicated problems and helping teams turn good ideas into experiences people can actually use.');
      text('.section .eyebrow','Selected work');
      text('.section .section-title','A few projects I’m proud of');
    }
    if(page==='work'){
      text('.page-hero .eyebrow','Selected work');
      text('.page-hero h1','Design across products, brands and experiences.');
      text('.page-hero p','My work spans UI/UX, websites, campaigns, publications and event experiences. Different formats, same goal: make the message clearer and the experience stronger.');
    }
    if(page==='contact'){
      text('.contact-page h1','Have a project, role or idea worth discussing?');
      var p=document.querySelector('.contact-page h1 + p');if(p)p.textContent='I’m always happy to talk about design leadership, product experience, visual systems or a challenging brief that needs a thoughtful pair of eyes.';
    }
    if(page==='about'){
      text('.about-hero .eyebrow','About me');
      text('.about-hero h1','I’ve spent my career making complex things feel simpler—and helping design teams do their best work.');
      var ps=document.querySelectorAll('.about-hero p');
      if(ps[0])ps[0].textContent='I’m Ajeet Kumar, a Design Manager with 17+ years of experience across UI/UX, digital products, websites, brand communication, social campaigns, print and event design. My work has taken me through enterprise applications, insurance, FinTech, healthcare, travel, eCommerce and SaaS.';
      if(ps[1])ps[1].textContent='I still enjoy being close to the craft, but today a big part of my role is creating the conditions for good design: clearer briefs, stronger reviews, scalable systems, better collaboration and thoughtful mentoring.';
      text('.availability-box b','What I’m looking for');
      var ap=document.querySelector('.availability-box p');if(ap)ap.textContent='Senior design leadership opportunities where product thinking, visual quality and team development matter equally.';
      document.querySelectorAll('.timeline-row').forEach(function(row,i){var p=row.querySelector('p');if(!p)return;var copy=['Leading multidisciplinary design work across enterprise products, web experiences, brand systems, campaigns, executive communication and events—while mentoring designers and improving creative operations.','Created high-end websites, interfaces and multi-channel marketing assets for global B2B audiences, from landing pages and emailers to brochures and event graphics.','Built my foundation in web and UI design through healthcare products, icon systems, interactive presentations, CBT modules and close front-end collaboration.'];p.textContent=copy[i]||p.textContent});
      var tags=document.querySelector('.tags');if(tags)tags.innerHTML=['Figma','Adobe XD','Photoshop','Illustrator','InDesign','After Effects','FigJam','Jira','Miro','Notion','AI-assisted workflows'].map(function(x){return '<span>'+x+'</span>'}).join('');
    }
  }
  function interactions(){
    var mob=document.querySelector('.pf-mobile'),links=document.querySelector('.pf-links'),work=document.querySelector('.pf-work');
    if(mob&&links)mob.addEventListener('click',function(){links.classList.toggle('open')});
    var wb=work&&work.querySelector('button');if(wb)wb.addEventListener('click',function(){work.classList.toggle('open')});
  }
  function run(){replaceChrome();trail();humanize();interactions()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();