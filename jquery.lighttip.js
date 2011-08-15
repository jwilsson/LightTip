/**
 * jQuery LightTip 1.0.4
 * http://jonathanwilsson.com/projects/lighttip/
 *
 * Copyright 2011 Jonathan Wilsson
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

    $.fn.LightTip = function (options) {
	var defaults = {
	    animate: true,
	    easing: "swing",
	    lockPosition: false,
	    speed: 400
	};
	
	if (options) {
	    $.extend(defaults, options);
	}
	
        return this.each(function () {
            // Only create one tooltip div
            if ($(".lighttip").length <= 0) {
                $("body").append('<div class="lighttip"></div>');
            }
	    
	    var $this = $(this),
		$lighttip = $(".lighttip");
	    
            $lighttip.hide();

            // Add the tooltip when the user hovers over the specified element
            $this.bind("mouseover", function (e) {
                var title = $this.attr("title");

                // Clear the title attribute temporarily
                $(this).data("orgTitle", title).attr("title", "");

                // Show the tooltip
                $lighttip.html(title)
			.css({
			    left: e.pageX ,
			    position: "absolute",
			    top: e.pageY
			});
		
		if (defaults.animate) {
		    $lighttip.animate({opacity: "show"}, defaults.speed, defaults.easing);
		} else {
		    $lighttip.show();
		}
	    }).bind("mouseout", function () {
                var $elem = $(this);
		
                // Restore the title attribute's value
                $elem.attr("title", $elem.data("orgTitle"));

                // Hide the tooltip
		if (defaults.animate) {
		    $lighttip.animate({opacity: "hide"}, defaults.speed, defaults.easing, function () {
			$(this).html(""); // Called here to prevent the content from being emptied prematurely
		    });
		} else {
		    $lighttip.hide().html("");
		}		
            });

            // Make the tooltip follow the mouse
	    if (!defaults.lockPosition) {
		$this.bind("mousemove", function (e) {
		    $lighttip.css({
			left: e.pageX + 10,
			position: "absolute",
			top: e.pageY + 10
		    });
		});
	    }
        });

    };

}(jQuery));