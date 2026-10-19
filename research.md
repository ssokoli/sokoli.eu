---
layout: page
permalink: /research/
title: Research
cue: "00:01:00,000"
dek: Subtitling, audiovisual translation, and AI in education.
sub: What changes when students design with AI, and what doesn't.
---

My work has two long-running strands and one newer one. Since 2025, the newer one is also the subject of my postdoctoral research at the Hellenic Open University: artificial intelligence in education and audiovisual creation (expected completion 2028).

## Subtitling and audiovisual translation

Subtitling norms, quality, and reception; language learning through subtitling. This includes the EU-funded projects **ClipFlair** and **Learning via Subtitling**, both concerned with subtitling as a pedagogical tool rather than only a professional output.

## AI in design and translation education

A within-subjects study of 22 students producing two posters each, with and without AI assistance, followed by peer evaluation. The study looks at perceived creative agency, experienced control during AI-assisted workflows, and what students choose when asked to submit their best work.

Two papers come out of this study:

- **"AI as Co-Designer or Co-Author? Creative Ownership, Agency, and Self-Efficacy in AI-Assisted Graphic Design Education,"** accepted at I-HE 2026 (The Hague, October 2026).
- A companion paper on student poster design with and without AI assistance, accepted at **EAI ArtsIT 2026**.

<!-- EDIT: add exact paper titles, co-authors, and links once accepted/published. -->

## Edited volumes

<ul class="pub-list">
  <li class="pub-item">
    <span class="pub-authors">Dore, M., Bolaños, A. & Sokoli, S. (eds)</span>
    <span class="pub-year">(2026, forthcoming)</span>
    <span class="pub-title">"Audiovisual Translation and Media Accessibility in Education."</span>
    <em class="pub-in">Peter Lang</em>.
  </li>
  <li class="pub-item">
    <span class="pub-authors">Pięta, H., Valdez, S., Menezes, R. & Sokoli, S. (eds)</span>
    <span class="pub-year">(2023)</span>
    <span class="pub-title">"Pivot Audiovisual Translation: A Burning Issue for Research and Training" (special issue).</span>
    <em class="pub-in">Perspectives: Studies in Translation Theory and Practice</em>.
  </li>
</ul>

## Publications

<ul class="pub-list">
{% for pub in site.data.publications %}
  <li class="pub-item">
    <span class="pub-authors">{{ pub.authors }}</span>
    <span class="pub-year">({{ pub.year }})</span>
    <span class="pub-title">"{{ pub.title }}."</span>
    <em class="pub-in">{{ pub.in }}</em>{% if pub.detail %}, <span class="pub-detail">{{ pub.detail }}</span>{% endif %}.
    {% if pub.doi %}<a class="pub-doi" href="https://doi.org/{{ pub.doi }}">doi:{{ pub.doi }}</a>{% elsif pub.url %}<a class="pub-doi" href="{{ pub.url }}">link</a>{% endif %}
  </li>
{% endfor %}
</ul>


[Google Scholar](https://scholar.google.com/citations?user=Q5VrkMAAAAAJ&hl=en) &middot; [ORCID](https://orcid.org/0000-0002-2970-8729)
