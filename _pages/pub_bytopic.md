---
layout: page
permalink: /publicationsbytopic/
title: Publications
topics: [Data Privacy, Recommender Systems, Spatio-temporal Data Mining, Misc]
nav: false
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

<div class="publications">
{%- for y in page.topics %}
  <h3 class="pubyear">{{y}}</h3>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[topic={{y}}] %}
{% endfor %}
</div>
