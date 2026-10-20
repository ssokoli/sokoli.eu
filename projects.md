---
layout: page
permalink: /projects/
title: Projects
cue: "00:04:00,000"
dek: Twenty EU-funded and national research projects, led or joined, 2006 to today.
sub: "Most interesting ideas need more than one discipline."
---

Between 2003 and 2008 I was Project Manager at the Educational Content, Methodology and Technology Laboratory of the Hellenic Open University, working on EU-funded projects. Since 2011 I coordinate research projects at the Computer Technology Institute & Press "Diophantus" (CTI).

## Coordination

<ul class="project-list">
{% for pr in site.data.projects %}
  <li class="project-item">
    {% if pr.image %}
    <div class="project-image"><img src="{{ '/assets/projects/' | append: pr.image | relative_url }}" alt="{{ pr.name }}" loading="lazy"></div>
    {% else %}
    <div class="project-image project-image-card"><p>{{ pr.name | split: " — " | first }}</p></div>
    {% endif %}
    <div class="project-body">
      <h3 class="project-name">{% if pr.link %}<a href="{{ pr.link }}">{{ pr.name }}</a>{% else %}{{ pr.name }}{% endif %}</h3>
      <p class="project-meta">{{ pr.years }} &middot; {{ pr.role }}<br>{{ pr.funder }}</p>
      <p class="project-desc">{{ pr.desc }}</p>
    </div>
  </li>
{% endfor %}
</ul>

## Participation

<ul class="pub-list">
{% for pr in site.data.participation %}
  <li class="pub-item">
    <span class="pub-title">{% if pr.link %}<a href="{{ pr.link }}">{{ pr.name }}</a>{% else %}{{ pr.name }}{% endif %}</span>
    <span class="pub-detail">({{ pr.years }})</span> &middot; <span class="pub-authors">{{ pr.funder }}</span>
  </li>
{% endfor %}
</ul>
