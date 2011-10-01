// jQuery LightTip 1.0.6 | Copyright 2011 Jonathan Wilsson
(function ($) {
	$.fn.LightTip = function (options) {
		var defaults = {
			animate: true,
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
				var title = $this.attr("title");

				$("body").append('<div class="lighttip"></div>');

				$lighttip = $(".lighttip").hide();

				// Clear the title attribute temporarily
				$(this).data("orgTitle", title).attr("title", "");

				// Show the tooltip
				$lighttip.html(title)
					.css({
					    left: e.pageX + defaults.offset,
					    position: "absolute",
					    top: e.pageY + defaults.offset
					});

				if (defaults.animate) {
					$lighttip.stop().animate({opacity: "show"}, defaults.speed);
				} else {
					$lighttip.show();
				}
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
				}, 100);
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