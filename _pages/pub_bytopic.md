---
layout: page
permalink: /publicationsbytopic/
title: Publications
topics: [Privacy Analysis, Data Privacy, Recommender Systems, Spatio-temporal Data Mining, Misc]
nav: false
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.topics %}
  <h3 class="pubyear">{{y}}</h3>
  {% bibliography -f {{ site.scholar.bibliography }} --sort_by year --order descending --query @*[type={{y}}]* %}
{% endfor %}


</div>
