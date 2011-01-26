/**
 * jQuery LightTip 1.0.1
 * http://jonathanwilsson.com/projects/lighttip/
 *
 * Copyright 2010 Jonathan Wilsson
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	$.fn.LightTip = function (elem) {

		return this.each(function () {
			// Only create one tooltip div
			if ($('.tooltip').length <= 0) {
				$('body').append('<div class="tooltip"></div>');
			}

			var $this = $(this), $tooltip = $('.tooltip');

			$tooltip.hide();

			// Add the tooltip when the user hovers over the specified element
			$this.hover(function () {
				var $elem = $(this), title = $this.attr('title');

				// Clear the title attribute temporarily
				$elem.data('orgTitle', title);
				$elem.attr('title', '');

				// Show the tooltip
				$tooltip.html(title);
				$tooltip.show();
			}, function () {
				var $elem = $(this);
				// Restore the title attribute's value
				$elem.attr('title', $elem.data('orgTitle'));

				// Hide the tooltip
				$tooltip.html('');
				$tooltip.hide();
			});

			// Make the tooltip follow the mouse
			$this.bind('mousemove', function (e) {
				$tooltip.css({
					'left': e.pageX + 10,
					'position': 'absolute',
					'top': e.pageY + 10
				});
			});

		});

	};

}(jQuery));