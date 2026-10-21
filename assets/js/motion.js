/* Motion features (progressive enhancement; without JavaScript nothing changes):
   1. Playhead on every page: a red progress bar at the top of the window and a
      timecode that counts up from the page's cue as you scroll. The end of the page
      equals the page cue plus an estimated reading time (230 words per minute).
   2. career.srt on the About page: cues appear one by one as they scroll into view.
   A "Motion" button in the footer turns both off. The choice is stored in this
   browser only; the default is off when the system asks for reduced motion. */
(() => {
  const root = document.documentElement;
  const KEY = 'sokoli-motion';
  const prefersReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  let stored = null;
  try { stored = window.localStorage.getItem(KEY); } catch (e) { /* storage unavailable */ }
  let motionOn = stored ? stored === 'on' : !prefersReduced;

  /* ---------- Timecode helpers ---------- */
  const TC = /^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/;
  const parseTC = (text) => {
    const m = TC.exec((text || '').trim());
    return m ? ((+m[1] * 60 + +m[2]) * 60 + +m[3]) * 1000 + +m[4] : null;
  };
  const pad = (n, w) => String(n).padStart(w, '0');
  const formatTC = (ms) => {
    ms = Math.max(0, Math.round(ms));
    const h = Math.floor(ms / 3600000);
    const m = Math.floor(ms / 60000) % 60;
    const s = Math.floor(ms / 1000) % 60;
    return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)},${pad(ms % 1000, 3)}`;
  };

  /* ---------- Playhead ---------- */
  const headerCue = document.querySelector('.page-header .cue, .post-header .cue');
  const baseMs = (headerCue && parseTC(headerCue.textContent)) || 0;
  const main = document.getElementById('main-content');
  const words = main ? (main.textContent.match(/\S+/g) || []).length : 0;
  const durationMs = Math.max(30000, Math.round(words / 230 * 60000));

  const bar = document.createElement('div');
  bar.className = 'playhead';
  bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = '<span class="playhead-bar"></span>';
  const readout = document.createElement('div');
  readout.className = 'playhead-time';
  readout.setAttribute('aria-hidden', 'true');
  readout.textContent = formatTC(baseMs);
  document.body.append(bar, readout);
  const fill = bar.firstElementChild;

  let headerVisible = true;
  if (headerCue && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      headerVisible = entries[0].isIntersecting;
      update();
    }).observe(headerCue);
  } else {
    headerVisible = false;
  }

  let ticking = false;
  function update() {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const p = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    fill.style.transform = `scaleX(${p})`;
    bar.classList.toggle('is-idle', scrollable <= 0);
    readout.textContent = formatTC(baseMs + p * durationMs);
    readout.classList.toggle('is-visible', !headerVisible && window.scrollY > 120);
  }
  const onScroll = () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- career.srt reveal ---------- */
  const srt = document.querySelector('[data-srt]');
  let cueObserver = null;
  const cues = srt ? Array.from(srt.querySelectorAll('[data-srt-cue]')) : [];
  function startReveal() {
    if (!srt || !('IntersectionObserver' in window)) return;
    srt.classList.add('is-animated');
    cueObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-shown');
          cueObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.4 });
    cues.forEach((c) => { if (!c.classList.contains('is-shown')) cueObserver.observe(c); });
  }
  function stopReveal() {
    if (cueObserver) { cueObserver.disconnect(); cueObserver = null; }
    cues.forEach((c) => c.classList.add('is-shown'));
    if (srt) srt.classList.remove('is-animated');
  }

  /* ---------- Motion switch ---------- */
  function apply() {
    root.classList.toggle('motion-off', !motionOn);
    if (motionOn) { startReveal(); update(); } else { stopReveal(); }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(motionOn));
      toggle.textContent = `Motion: ${motionOn ? 'on' : 'off'}`;
    }
  }
  let toggle = null;
  const footerMeta = document.querySelector('.site-footer .footer-meta');
  if (footerMeta) {
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'motion-toggle';
    toggle.addEventListener('click', () => {
      motionOn = !motionOn;
      try { window.localStorage.setItem(KEY, motionOn ? 'on' : 'off'); } catch (e) { /* ignore */ }
      apply();
    });
    footerMeta.append(' ', toggle);
  }
  apply();
})();
