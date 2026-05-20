---
layout: page
permalink: /publicationsbytopic/
title: Publications
topics: [AI Security & Privacy, Data Privacy, Recommender Systems, Spatio-temporal Data Mining]
nav: false
toc:
  sidebar: left
---
<!-- _pages/publications.md -->

<p>
<a href="/publicationsbytopic/">
<button type="button" class="btn waves-effect waves-light" style="outline:none">By Topic</button>
</a> 
<a href="/publicationsbyyear/">
<button type="button" class="btn waves-effect waves-light" style="outline:none">By Year</button>
</a>
</p>

<p><sup>*</sup> equal contribution, <sup>†</sup> mentored student</p>

<div class="publications">
{%- for y in page.topics %}
  <h3 class="pubyear">{{y}}</h3>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[topic={{y}}] %}
{% endfor %}
</div>
