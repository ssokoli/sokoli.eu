---
layout: page
permalink: /talks/
title: Talks
page_class: talks-page
cue: "00:02:00,000"
dek: "Talks, keynotes, recordings and conversations, across audiovisual translation and education."
sub: "A talk is the start of a conversation, not its conclusion."
---

<p class="talks-lead">I give talks about subtitling, language, education and the changing relationship between people and technology. Here are some recordings, followed by an archive of conferences and other appearances.</p>

<section class="talks-featured" aria-labelledby="featured-talks">
  <p class="section-kicker">WATCH</p>
  <h2 id="featured-talks">Featured talks</h2>
  <div class="talks-featured-grid">
    <article class="talks-featured-item">
      <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/OkXnDoqHV_k" title="Beyond Hallucinations: The Illusion of Quality and the Role of Professional Translators" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <p class="section-kicker">ATHENS / 2026</p>
      <h3>Beyond Hallucinations: The Illusion of Quality and the Role of Professional Translators</h3>
      <p>Panhellenic Association of Translators · AI in Translation</p>
    </article>
    <article class="talks-featured-item">
      <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/gVhV15zez-8" title="Χάρτινο Σπίτι ή Τέλεια Ληστεία; Ο υποτιτλισμός της ισπανικής σειράς Casa de Papel" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <p class="section-kicker">THESSALONIKI / 2019</p>
      <h3>Χάρτινο Σπίτι ή Τέλεια Ληστεία; Ο υποτιτλισμός της ισπανικής σειράς Casa de Papel</h3>
      <p>Panhellenic Association of Translators (ΠΕΜ) · Thessaloniki International Book Fair</p>
    </article>
  </div>
</section>

<section class="talks-video-archive" aria-labelledby="more-videos">
  <p class="section-kicker">RECORDINGS</p>
  <h2 id="more-videos">Watch more</h2>
  <div class="watch-teasers talks-watch-grid">
    {% for t in site.data.talks %}
      {% if t.video and t.video != 'OkXnDoqHV_k' and t.video != 'gVhV15zez-8' %}
      <a class="watch-teaser" href="https://www.youtube.com/watch?v={{ t.video }}" target="_blank" rel="noopener noreferrer">
        <span class="watch-teaser-image"><img src="https://i.ytimg.com/vi/{{ t.video }}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy"><span class="play-glyph" aria-hidden="true">▶</span></span>
        <span class="watch-teaser-title">{{ t.title | escape }}</span>
        <span class="watch-teaser-meta">{{ t.year }} · {{ t.venue | escape }}</span>
      </a>
      {% endif %}
    {% endfor %}
    {% for t in site.data.presentations %}
      {% if t.video %}
      <a class="watch-teaser" href="https://www.youtube.com/watch?v={{ t.video }}" target="_blank" rel="noopener noreferrer">
        <span class="watch-teaser-image"><img src="https://i.ytimg.com/vi/{{ t.video }}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy"><span class="play-glyph" aria-hidden="true">▶</span></span>
        <span class="watch-teaser-title">{{ t.title | escape }}</span>
        <span class="watch-teaser-meta">{{ t.year }} · {{ t.venue | escape }}</span>
      </a>
      {% endif %}
    {% endfor %}
    {% for r in site.data.recordings %}
      <a class="watch-teaser" href="https://www.youtube.com/watch?v={{ r.video }}" target="_blank" rel="noopener noreferrer">
        <span class="watch-teaser-image"><img src="https://i.ytimg.com/vi/{{ r.video }}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy"><span class="play-glyph" aria-hidden="true">▶</span></span>
        <span class="watch-teaser-title">{{ r.title | escape }}</span>
        <span class="watch-teaser-meta">Additional recording</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="talk-event" aria-labelledby="talk-event-heading">
  <p class="section-kicker">MODERATING / 2026</p>
  <h2 id="talk-event-heading">AI ThoughtCon: The Technology</h2>
  <p>I moderated Day 3 of AI ThoughtCon 2026, which covered AI systems, automation and evaluating content quality. The event recordings are hosted by the AI Localization Think Tank. This is a moderated event, not a solo talk.</p>
  <p><a href="https://www.youtube.com/@AILocThinkTank/streams" target="_blank" rel="noopener noreferrer">Watch AI ThoughtCon recordings ↗</a> · <a href="https://www.ailocthinktank.com/aithoughtcon" target="_blank" rel="noopener noreferrer">Read the programme ↗</a></p>
</section>

<section aria-labelledby="talks-full-archive">
  <p class="section-kicker">ARCHIVE</p>
  <h2 id="talks-full-archive">Invited talks, keynotes and moderation</h2>
  <ul class="pub-list">
  {% for t in site.data.talks %}
    <li class="pub-item">
      <span class="pub-year">({{ t.year }})</span>
      <span class="pub-title">{{ t.title | escape }}</span>.
      <em class="pub-in">{{ t.venue | escape }}</em>, <span class="pub-detail">{{ t.place | escape }}, {{ t.date | escape }}</span>.
      {% if t.video %}<a class="pub-doi" href="https://www.youtube.com/watch?v={{ t.video }}" target="_blank" rel="noopener noreferrer">Watch ↗</a>{% endif %}
      {% if t.event_url %}<a class="pub-doi" href="{{ t.event_url }}" target="_blank" rel="noopener noreferrer">{{ t.event_label | default: 'Event' }} ↗</a>{% endif %}
      {% if t.read_url %}<a class="pub-doi" href="{{ t.read_url }}" target="_blank" rel="noopener noreferrer">Read ↗</a>{% endif %}
    </li>
  {% endfor %}
  </ul>

  <h2>Conference presentations</h2>
  <ul class="pub-list">
  {% for p in site.data.presentations %}
    <li class="pub-item">
      <span class="pub-authors">{{ p.authors | escape }}</span>
      <span class="pub-year">({{ p.year }})</span>
      <span class="pub-title">{{ p.title | escape }}</span>.
      <em class="pub-in">{{ p.venue | escape }}</em>, <span class="pub-detail">{{ p.place | escape }}</span>.
      {% if p.video %}<a class="pub-doi" href="https://www.youtube.com/watch?v={{ p.video }}" target="_blank" rel="noopener noreferrer">Watch ↗</a>{% endif %}
    </li>
  {% endfor %}
  </ul>
</section>

<section class="talk-event" aria-labelledby="event-links-heading">
  <p class="section-kicker">EVENT PAGES</p>
  <h2 id="event-links-heading">From the conferences</h2>
  <p>The organisers' pages for two recent events.</p>
  <div class="event-links-grid">
    <a href="https://elia-association.org/event/focus-pm-2025/" target="_blank" rel="noopener noreferrer"><strong>ELIA Focus on Project Management</strong><span>2025 · Athens · Event page ↗</span></a>
    <a href="https://www.upf.edu/en/web/rainfilmfest/participants-2025" target="_blank" rel="noopener noreferrer"><strong>+RAIN Film Festival</strong><span>2025 · Barcelona · Speakers ↗</span></a>
  </div>
</section>
