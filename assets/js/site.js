/* Menu button on small screens: shows and hides the main menu. */
(() => {
  const header = document.querySelector('.site-header');
  const btn = header && header.querySelector('.nav-toggle');
  if (!btn) return;
  const set = (open) => {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) { set(false); btn.focus(); }
  });
})();

/* Running timecode: the cue's end time counts up while the page is open. */
(() => {
  const el = document.querySelector('[data-timecode]');
  if (!el) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const m = /^(\d+):(\d+):(\d+),(\d+)$/.exec((el.dataset.start || '').trim());
  const base = m ? ((+m[1] * 60 + +m[2]) * 60 + +m[3]) * 1000 + +m[4] : 0;
  const t0 = Date.now();
  const pad = (n, l) => String(n).padStart(l, '0');
  setInterval(() => {
    const ms = base + Date.now() - t0;
    el.textContent = pad(Math.floor(ms / 3600000), 2) + ':' + pad(Math.floor(ms / 60000) % 60, 2) + ':' +
      pad(Math.floor(ms / 1000) % 60, 2) + ',' + pad(ms % 1000, 3);
  }, 120);
})();

/* Email address assembled in the browser, so it is not in the page source. */
document.querySelectorAll('a[data-u][data-d]').forEach((a) => {
  const addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
  const row = a.closest('[hidden]');
  if (row) row.hidden = false;
});

/* Links to other sites, and documents such as PDFs, open in a new tab. */
document.querySelectorAll('a[href]').forEach((a) => {
  const url = new URL(a.getAttribute('href'), location.href);
  const other = /^https?:$/.test(url.protocol) && url.hostname !== location.hostname;
  const doc = /\.(pdf|docx?|pptx?|xlsx?|srt|zip)$/i.test(url.pathname);
  if (other || doc) {
    a.target = '_blank';
    a.rel = (a.rel ? a.rel + ' ' : '') + 'noopener';
  }
});
