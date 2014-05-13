/**
 * Splitchar.js
 * @author emisfera - Razvan B.
 */

$.fn.splitchar = function () {   
  $('.splitchar').each(function (index) {
    var $main = $(this);
    var characters = $main.text().split('');
    $main.empty();
    $.each(characters, function (i, el) {
      var type = $main.attr('class');
      $main.append("<span class='" + type + "' data-content='" + el + "'>" + el + "</span>");
    });
  });
};
