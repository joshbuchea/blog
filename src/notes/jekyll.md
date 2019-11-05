---
title: Jekyll
date: '2019-11-04'
---

- Filter - Remove URL protocol & trailing slash: `{{ url | remove:'http://' | split:'/' | first }}`

# Wrap N Items In A Row Tag

```md
<!-- Wraps every three items in div.row -->
<!-- Closes div.row even there is not enough items -->

{% for item in site.data.your_data %}

  {% capture modulo %}{{ forloop.index | modulo: 3 }}{% endcapture %}

  {% if modulo == '1' %}
  <div class="row">
  {% endif %}
    <div class="col-sm-4">
      {{ item.name }}
    </div>
  {% if modulo == '0' or forloop.last %}
  </div>
  {% endif %}

{% endfor %}

<!-- Output: -->
<div class="row">
  <div class="col-sm-4">
    item1
  </div>
  <div class="col-sm-4">
    item2
  </div>
  <div class="col-sm-4">
    item3
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    item4
  </div>
</div>
```
