// Basic interactions: year, mobile nav, theme toggle, typewriter effect, smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const years = new Date().getFullYear();
  ['year','year-2','year-3','year-4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = years;
  });

  // Mobile nav toggles
  ['nav-toggle','nav-toggle-2','nav-toggle-3','nav-toggle-4'].forEach(id => {
    const btn = document.getElementById(id);
    if(!btn) return;
    btn.addEventListener('click', () => {
      document.getElementById('main-nav').classList.toggle('open');
    });
  });

  // Theme toggle (persist)
  const themeButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4');
  function applyTheme(theme){
    if(theme === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
  }
  const stored = localStorage.getItem('theme') || 'dark';
  applyTheme(stored);
  themeButtons.forEach(btn => btn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }));

  // Simple typewriter effect on hero subtitle
  const typeEl = document.getElementById('typewriter');
  if(typeEl){
    const text = typeEl.textContent;
    typeEl.textContent = '';
    let i = 0;
    const speed = 40;
    const run = () => {
      if(i < text.length){
        typeEl.textContent += text[i++];
        setTimeout(run, speed);
      } else {
        // done
      }
    };
    run();
  }

  // Smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Contact form fallback: if form API not available it will open mailto (default).
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      // The form is configured to mailto by default; this is a simple progressive enhancement.
      // You can integrate with Formspree, Netlify forms or a lightweight server endpoint here.
      // If you want JS-based submission, uncomment and implement the fetch to your endpoint.
    });
  }
});