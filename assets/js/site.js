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
