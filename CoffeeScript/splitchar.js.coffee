/**
 * Splitchar.js
 * @author emisfera - Razvan B.
 */

$.fn.splitchar = ->
  $(".splitchar").each ->
    $main = $(this)
    characters = $main.text().split("")
    $main.empty()
    $.each characters, (i, el) ->
      type = $main.attr("class")
      $main.append "<span class='" + type + "' data-content='" + el + "'>" + el + "</span>"
