// jQuery LightTip 1.0.8 | Copyright 2011 Jonathan Wilsson
(function ($) {
	$.fn.LightTip = function (options) {
		var defaults = {
			animate: true,
			attribute: "title",
			delayIn: 0,
			delayOut: 0,
			lockPosition: false,
			offsetX: 10,
			offsetY: 10,
			speed: 400
		};
		
		// If the user has supplied options let's merge them with the defaults
		if (options) {
			$.extend(defaults, options);
		}

		return this.each(function () {
			var $this = $(this), $lighttip, timer;
			
			// Fix for old "offset"-option
			if (defaults.offset) {
				defaults.offsetX = defaults.offsetY = defaults.offset;
			}
			
			// Add the tooltip when the user hovers over the specified element
			$this.bind("mouseover", function (e) {
				var text = $this.attr(defaults.attribute), id = Math.ceil(Math.random() * 9998);
				
				// Set up the LightTip element
				$lighttip = $("body").append('<div id="l-' + id + '" class="lighttip"></div>').find("#l-" + id).hide();
				
				// Clear the title attribute temporarily
				$this.data("orgTitle", $this.attr("title")).attr("title", "");

				setTimeout(function () {
					// Show the tooltip
					$lighttip.html(text).css({
						left: e.pageX + defaults.offsetX,
						position: "absolute",
						top: e.pageY + defaults.offsetY
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
				}, defaults.delayOut);
			});

			// Make the tooltip follow the mouse
			if (!defaults.lockPosition) {
				$this.bind("mousemove", function (e) {
					$lighttip.css({
						left: e.pageX + defaults.offsetX,
						position: "absolute",
						top: e.pageY + defaults.offsetY
					});
				});
			}
		});
    };
}(jQuery));