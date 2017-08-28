
(function($) {
	"use strict";	
})(jQuery);

$(window).load(function () {
	blogisotope = function () {
		var e, t = $(".blog-masonry").width(),
		n = Math.floor(t);
		if ($(".blog-masonry").hasClass("masonry-true") === true) {
			n = Math.floor(t * .3033);
			e = Math.floor(t * .04);
			if ($(window).width() < 1023) {
				if ($(window).width() < 768) {
					n = Math.floor(t * 1)
				} else {
					n = Math.floor(t * .48)
				}
			} else {
				n = Math.floor(t * .3033)
			}
		}
		return e
	};
	var r = $(".blog-masonry");
	bloggingisotope = function () {
		r.isotope({
			itemSelector: ".post-masonry",
			animationEngine: "jquery",
			masonry: {
				gutterWidth: blogisotope()
			}
		})
	};
	bloggingisotope();
	$(window).smartresize(bloggingisotope)
})


$(function () {

	'use strict';


	var $citypicker1 = $('#city-picker1');

	$citypicker1.citypicker();

	var $citypicker3 = $('#city-picker3');

	$('#reset').click(function () {
		$citypicker3.citypicker('reset');
	});

	$('#destroy').click(function () {
		$citypicker3.citypicker('destroy');
	});


});
$(function () {

    'use strict';


    var $citypicker1 = $('#city-picker1');

    $citypicker1.citypicker();

    var $citypicker3 = $('#city-picker3');

    $('#reset').click(function () {
        $citypicker3.citypicker('reset');
    });

    $('#destroy').click(function () {
        $citypicker3.citypicker('destroy');
    });
});

