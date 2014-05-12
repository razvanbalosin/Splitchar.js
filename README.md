#[Splitchar.js](http://emisfera.github.io/Splitchar.js/)
###style and design the first, second or both halves of a character
=========

Splitchar is an easy to use jQuery plugin that allows you to style half of a character

##Usage
<pre class="language-markup"><code>&lt;h1 class=&quot;splitchar horizontal&quot;&gt;Splitchar&lt;/h1&gt;</code></pre>
Make sure you add the desired style after splitchar, which are: (horizontal, horizontal-tri, vertical, vertical-tri)
<pre class="language-markup"><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/splitchar.css&quot;&gt;</code></pre>
<pre class="language-markup"><code>&lt;script src=&quot;http://code.jquery.com/jquery-latest.min.js&quot;&gt;&lt;/script&gt;</code></pre>				
<pre class="language-markup"><code>&lt;script type=&quot;text/javascript&quot; src=&quot;js/splitchar.js&quot;&gt;&lt;/script&gt;</code></pre>
<pre class="language-javascript"><code>$(document).ready(function(){
    $(".splitchar").splitchar();
});</code></pre>

##Customization
<pre class="language-markup">/* Horizontal */
.horizontal { /* Base CSS - e.g font-size */ }
.horizontal:before { /* CSS for the left half */ }
.horizontal:after { /* CSS for the right half */ }

/* Horizontal Tripple */
.horizontal-tri { /* Base CSS + Middle style */ }
.horizontal-tri:before { /* CSS for the left side */ }
.horizontal-tri:after { /* CSS  for the right side */ }

/* Vertical */
.vertical { /* Base CSS */ }
.vertical:before { /* CSS for the upper half */ }
.vertical:after { /* CSS for the lower half */ }

/* Vertical Tripple */
.vertical-tri { /* Base CSS + Lower half */ }
.vertical-tri:before { /* CSS for the middle part */ }
.vertical-tri:after { /* CSS for the upper part */ }</pre>

##License
- Splitchar is licensed under the MIT License:
  - http://opensource.org/licenses/mit-license.html

##Changelog
- v1.0.0 - First Release

##Author
- Email: balosinrazvan@yahoo.com
- GitHub: https://github.com/emisfera
- Work: FrontEnd Developer

