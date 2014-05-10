/**
 * splitchar.js
 * @author emisfera - Razvan B.
 */

$.fn.splitchar = function() {
	$('.splitchar').each(function (index) {
	    var characters = $(this).text().split("");
	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	    	$this.append("<span class='splitchar' data-content='" + el + "'>" + el + "</span>");
	    });
	});
}