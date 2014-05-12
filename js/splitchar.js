/**
 * Splitchar.js
 * @author emisfera - Razvan B.
 */

$.fn.splitchar = function() {   
  $('.splitchar').each(function (index) {
    var characters = $(this).text().split("");
    $main = $(this);
    $main.empty();
    $.each(characters, function (i, el) {
      var type = $main.attr('class');
      $main.append("<span class='" + type + "' data-content='" + el + "'>" + el + "</span>");
    });
  });
};
