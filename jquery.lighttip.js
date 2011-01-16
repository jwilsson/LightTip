/**
 * jQuery LightTip 1.0
 * http://www.jonathanwilsson.com/projects/lighttip/
 *
 * Copyright 2010 Jonathan Wilsson
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
	var LightTip = function (elem) {
		// Only create one tooltip div
		if ($('.tooltip').length <= 0) {
			$('body').append('<div class="tooltip"></div>');
		}

		var $elem = $(elem), $tooltip = $('.tooltip');

		$tooltip.hide();

		// Add the tooltip when the user hovers over the specified element
		$elem.hover(function () {
			var $this = $(this), title = $this.attr('title');

			// Clear the title attribute temporarily
			$this.data('orgTitle', title);
			$this.attr('title', '');

			// Show the tooltip
			$tooltip.html(title);
			$tooltip.show();
		}, function () {
			var $this = $(this);
			// Restore the title attribute's value
			$this.attr('title', $this.data('orgTitle'));

			// Hide the tooltip
			$tooltip.html('');
			$tooltip.hide();
		});

		// Make the tooltip follow the mouse
		$elem.bind('mousemove', function (e) {
			$tooltip.css({
				'left': e.pageX + 10,
				'position': 'absolute',
				'top': e.pageY + 10
			});
		});
	};

	$.fn.LightTip = function () {
		return this.each(function () {
			new LightTip(this);
		});
	};

}(jQuery));