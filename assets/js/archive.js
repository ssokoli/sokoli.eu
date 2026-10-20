/* Progressive enhancement: show a limited number of posts and filter locally.
   Without JavaScript, the complete archive remains readable. */
(() => {
  const list = document.querySelector('[data-archive-list]');
  if (!list) return;
  const items = Array.from(list.querySelectorAll('[data-archive-item]'));
  const search = document.querySelector('[data-archive-search]');
  const year = document.querySelector('[data-archive-year]');
  const topic = document.querySelector('[data-archive-topic]');
  const status = document.querySelector('[data-archive-status]');
  const more = document.querySelector('[data-archive-more]');
  const themes = {
    screen: /subtit|caption|audiovisual|dubb|localiz|localis|translation|translator|screen translation|media accessibility/,
    ai: /\bai\b|\bartificial intelligence\b|machine translat|llm|chatgpt|generative|automation|neural|deepseek|algorithm/,
    education: /teach|learn|student|school|educat|classroom|university|pedagog|course|training/,
    work: /pay|rate|credit|right|profession|industry|working condition|client|freelanc|labor|labour|career|job|union/
  };
  const pageSize = 24;
  let shown = pageSize;
  const normalized = items.map(item => ({
    item,
    text: (item.dataset.search || item.textContent || '').toLocaleLowerCase(),
    year: item.dataset.year || ''
  }));
  function matches(entry) {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    const chosenTheme = topic?.value || '';
    return (!query || entry.text.includes(query)) &&
      (!year?.value || entry.year === year.value) &&
      (!chosenTheme || themes[chosenTheme]?.test(entry.text));
  }
  function update() {
    const found = normalized.filter(matches);
    const visible = new Set(found.slice(0, shown).map(x => x.item));
    items.forEach(item => { item.hidden = !visible.has(item); });
    if (status) status.textContent = found.length
      ? `Showing ${Math.min(found.length, shown)} of ${found.length} matching entries`
      : 'No entries match these filters.';
    if (more) more.hidden = found.length <= shown;
  }
  [search, year, topic].forEach(control => {
    if (control) control.addEventListener(control === search ? 'input' : 'change', () => {
      shown = pageSize;
      update();
    });
  });
  more?.addEventListener('click', () => { shown += pageSize; update(); });
  update();
})();
