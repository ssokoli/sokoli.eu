---
layout: page
permalink: /talks/
title: Talks
cue: "00:02:00,000"
dek: Invited talks, keynotes, and a quarter-century of conference presentations.
sub: Twenty-five years of saying it out loud.
---

## Invited talks & keynotes

<ul class="pub-list">
{% for t in site.data.talks %}
  <li class="pub-item">
    <span class="pub-year">({{ t.year }})</span>
    <span class="pub-title">"{{ t.title }}."</span>
    <em class="pub-in">{{ t.venue }}</em>, <span class="pub-detail">{{ t.place }}, {{ t.date }}</span>.
    {% if t.video %}
    <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/{{ t.video }}" title="{{ t.title }}" loading="lazy" allowfullscreen frameborder="0"></iframe></div>
    {% endif %}
  </li>
{% endfor %}
</ul>

## Conference presentations

<ul class="pub-list">
{% for p in site.data.presentations %}
  <li class="pub-item">
    <span class="pub-authors">{{ p.authors }}</span>
    <span class="pub-year">({{ p.year }})</span>
    <span class="pub-title">"{{ p.title }}."</span>
    <em class="pub-in">{{ p.venue }}</em>, <span class="pub-detail">{{ p.place }}</span>.
    {% if p.video %}
    <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/{{ p.video }}" title="{{ p.title }}" loading="lazy" allowfullscreen frameborder="0"></iframe></div>
    {% endif %}
  </li>
{% endfor %}
</ul>

## More recordings

<ul class="pub-list">
{% for r in site.data.recordings %}
  <li class="pub-item">
    <span class="pub-title">{{ r.title }}</span>
    <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/{{ r.video }}" title="{{ r.title }}" loading="lazy" allowfullscreen frameborder="0"></iframe></div>
  </li>
{% endfor %}
</ul>
