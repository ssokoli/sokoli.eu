---
layout: page
permalink: /writing/
title: Writing
cue: "00:06:00,000"
dek: "Observations, arguments and questions from professional life."
sub: "Some questions don't end when the article is published."
---

I write about audiovisual translation and the people who practise it, the uses and limits of AI, education, language, and occasionally something completely different. Much of this writing began as a conversation on social media.

<div class="feature-grid">
  <a class="feature-card" href="/journal/">
    <span class="feature-kicker">LONGER PIECES</span>
    <h3>Journal</h3>
    <p>Posts and reflections, searchable by date, topic and keywords.</p>
  </a>
  <a class="feature-card" href="/notes/">
    <span class="feature-kicker">SHORT OBSERVATIONS</span>
    <h3>Notes</h3>
    <p>An archive of shorter posts from LinkedIn and X, organised by year.</p>
  </a>
</div>

<h2>Selected pieces</h2>

<ul class="selected-writing">
{% assign picks = site.posts | where: "featured", true | sort: "date" | reverse %}
{% for post in picks %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="writing-date">{{ post.date | date: "%Y" }}</span></li>
{% endfor %}
</ul>

The Journal and Notes preserve their original publication dates. Some older links lead to archived or external material.
