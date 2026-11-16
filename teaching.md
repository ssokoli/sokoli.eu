---
layout: page
permalink: /teaching/
title: Teaching
cue: "00:05:00,000"
description: "Courses taught by Stavroula Sokoli: Spanish at the Hellenic Open University, and subtitling in postgraduate programmes in four countries."
---

I have taught since 2000. At the Hellenic Open University I teach Spanish. In postgraduate programmes and professional courses in Greece, Spain, Italy and Argentina I have taught subtitling, audiovisual translation and translation technology.

With colleagues at UNED in Madrid I have also taken part in teaching-innovation projects, in which students learn a language by subtitling, dubbing and describing video.

<ul class="record-list">
{% for c in site.data.teaching %}
<li class="record"><span class="record-title">{{ c.title | escape }}</span><span class="record-meta">{{ c.institution | escape }}{% if c.programme %}, {{ c.programme | escape }}{% endif %} · {{ c.years }}{% if c.level %} · {{ c.level | escape }}{% endif %}</span>{% if c.subjects %}<span class="record-meta">{{ c.subjects | join: ', ' | escape }}</span>{% endif %}</li>
{% endfor %}
</ul>
