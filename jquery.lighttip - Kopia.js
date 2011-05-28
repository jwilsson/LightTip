/**
 * jQuery LightTip 1.0.2
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
	    lockPosition: false  
	};
	
	if (options) {
	    $.extend(defaults, options);
	}
	
        return this.each(function () {
            // Only create one tooltip div
            if ($('.tooltip').length <= 0) {
                $('body').append('<div class="tooltip"></div>');
            }

            var $this = $(this),
		$tooltip = $('.tooltip');

            $tooltip.hide();

            // Add the tooltip when the user hovers over the specified element
            $this.bind('mouseover', function (e) {
                var title = $this.attr('title');

                // Clear the title attribute temporarily
                $(this).data('orgTitle', title).attr('title', '');

                // Show the tooltip
                $tooltip.html(title)
			.css({
			    display: 'block',
			    left: e.pageX ,
			    position: 'absolute',
			    top: e.pageY
			});
	    });
	    
            $this.bind('mouseout', function () {
                var $elem = $(this);
		
                // Restore the title attribute's value
                $elem.attr('title', $elem.data('orgTitle'));

                // Hide the tooltip
                $tooltip.html('').hide();
            });

            // Make the tooltip follow the mouse
	    if (!defaults.lockPosition) {
		$this.bind('mousemove', function (e) {
		    $tooltip.css({
			'left': e.pageX + 10,
			'position': 'absolute',
			'top': e.pageY + 10
		    });
		});
	    }
        });

    };

}(jQuery));