// jQuery LightTip 1.0.7 | Copyright 2011 Jonathan Wilsson
(function ($) {
	$.fn.LightTip = function (options) {
		var defaults = {
			animate: true,
			attribute: "title",
			delayIn: 0,
			delayOut: 0,
			lockPosition: false,
			offset: 10,
			speed: 400
		};

		// If the user has supplied options let's merge them with the defaults
		if (options) {
			$.extend(defaults, options);
		}

		return this.each(function () {
			var $this = $(this), $lighttip;

			// Add the tooltip when the user hovers over the specified element
			$this.bind("mouseover", function (e) {
				var text = $this.attr(defaults.attribute);

				$("body").append('<div class="lighttip"></div>');

				$lighttip = $(".lighttip").hide();

				// Clear the title attribute temporarily
				$this.data("orgTitle", $this.attr("title")).attr("title", "");

				setTimeout(function () {
					// Show the tooltip
					$lighttip.html(text).css({
						left: e.pageX + defaults.offset,
						position: "absolute",
						top: e.pageY + defaults.offset
					});

					if (defaults.animate) {
						$lighttip.stop().animate({opacity: "show"}, defaults.speed);
					} else {
						$lighttip.show();
					}
				}, defaults.delayIn);
			}).bind("mouseout", function () {
				var $elem = $(this);

				// Restore the title attribute's value
				$elem.attr("title", $elem.data("orgTitle"));

				setTimeout(function () {
					// Hide the tooltip
					if (defaults.animate) {
						$lighttip.stop().animate({opacity: "hide"}, defaults.speed, function () {
							$(this).remove();
						});
					} else {
						$lighttip.hide().remove();
					}
				}, 100 + defaults.delayOut); // Fixes an issue where LightTip would be emptied when moving the mouse between elements
			});

			// Make the tooltip follow the mouse
			if (!defaults.lockPosition) {
				$this.bind("mousemove", function (e) {
					$lighttip.css({
						left: e.pageX + defaults.offset,
						position: "absolute",
						top: e.pageY + defaults.offset
					});
				});
			}
		});
    };
}(jQuery));