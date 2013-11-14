$(function() {
	$('.to_tags').each(function( i, item ){
		var tags = $( item ).text().replace(/^Tags: /,'').split(', ');
		
		var h = '<ul class="tags">';
		$( tags ).each(function( i, t ){
			h += '<li><a href="#">' + t + '</a></li>';
		});
		h += '</ul><div style="clear:both;"></div>';
		
		$( item ).html('').append( $( h ) );
	});
});