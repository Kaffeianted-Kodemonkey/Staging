---
layout: post
title:  "Foundational Concepts"
date:   2024-02-13 07:10:00 -0700
categories: Foundational Concepts
author: Kodemonke3
---

{% assign count = site.categories[page.categories] | size %}

<hr class="my-3" />

{% if count == 0 %}
  <h3 class="text-center">Currently writing post check back often.</h3>
  <img src="{{site.url}}/assets/images/postbuilding.jpg" class="img-responsive img-thumbnail hidden-xs hidden-sm" alt="Post Building image">
{% else %}  
  <ul>
  {% for post in site.categories[page.categories] %}
      <li>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="mb-2"><small> <u>{{ post.date | date: '%B %d, %Y' }} | {{site.author}}</u></small></p>
        {{ post.excerpt | strip_html | truncatewords:75 }}
      </li>
  {% endfor %}  
  </ul>  
{% endif %}
