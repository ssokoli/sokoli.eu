/* Search and filter the publication gallery without changing the underlying bibliography. */
(() => {
  const cards = Array.from(document.querySelectorAll('[data-publication-card]'));
  if (!cards.length) return;
  const search = document.querySelector('[data-publication-search]');
  const kind = document.querySelector('[data-publication-kind]');
  const count = document.querySelector('[data-publication-count]');
  const update = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    const filter = kind?.value || '';
    let shown = 0;
    for (const card of cards) {
      const text = (card.dataset.search || '').toLocaleLowerCase();
      const visible = (!query || text.includes(query)) && (!filter || card.dataset.kind === filter);
      card.hidden = !visible;
      if (visible) shown++;
    }
    if (count) count.textContent = shown === cards.length
      ? `${cards.length} entries in the archive`
      : `${shown} of ${cards.length} entries shown`;
  };
  search?.addEventListener('input', update);
  kind?.addEventListener('change', update);
  document.querySelectorAll('.publication-visual img').forEach(img => {
    img.addEventListener('error', () => { img.hidden = true; });
    if (img.complete && img.naturalWidth === 0) img.hidden = true;
  });
  update();
})();
