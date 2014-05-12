/**
 * Splitchar.js
 * @author emisfera - Razvan B.
 */

$.fn.splitchar = function() {	
	$('.splitchar').each(function (index) {
	    var characters = $(this).text().split("");
	    $this = $(this);
	    $this.empty();
	    $.each(characters, function (i, el) {
	            if ( $this.hasClass("horizontal") ) {
		    	$this.append("<span class='horizontal' data-content='" + el + "'>" + el + "</span>");
	            }
	            else if ( $this.hasClass("horizontal-tri") ) {
		    	$this.append("<span class='horizontal-tri' data-content='" + el + "'>" + el + "</span>");
	            }
	            else if ( $this.hasClass("vertical") ) {
	            $this.append("<span class='vertical' data-content='" + el + "'>" + el + "</span>");    
	            }
	            else if ( $this.hasClass("vertical-tri") ) {
	            $this.append("<span class='vertical-tri' data-content='" + el + "'>" + el + "</span>");    
	            }
	            else {
	            $this.append("<span class='horizontal' data-content='" + el + "'>" + el + "</span>");	
	            }            
	    });
	});
};
