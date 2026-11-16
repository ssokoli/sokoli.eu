---
layout: wide
permalink: /projects/
title: Projects
cue: "00:04:00,000"
description: "Research projects coordinated by Stavroula Sokoli, among them ClipFlair and Learning via Subtitling."
---
<div class="page-content" markdown="1">

Research projects I have coordinated or taken part in since 2003. Most of them were funded by the European Union.

From 2003 to 2008 I managed projects at the Hellenic Open University. Since 2011 I have coordinated projects at the Computer Technology Institute and Press "Diophantus" (CTI).

</div>

## Projects I coordinated

<ul class="project-list">
{% for pr in site.data.projects %}
  <li class="project-item">
    {% if pr.image %}
    <div class="project-image"><img src="{{ pr.image | relative_url }}" alt="{{ pr.name }}" loading="lazy"></div>
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

## Projects I took part in

<ul class="pub-list">
{% for pr in site.data.participation %}
  <li class="pub-item">
    <span class="pub-title">{% if pr.link %}<a href="{{ pr.link }}">{{ pr.name }}</a>{% else %}{{ pr.name }}{% endif %}</span>
    <span class="pub-detail">({{ pr.years }})</span> &middot; <span class="pub-authors">{{ pr.funder }}</span>
  </li>
{% endfor %}
</ul>
