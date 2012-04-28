// jQuery LightTip 1.1.1 | Copyright 2012 Jonathan Wilsson
(function ($) {
	$.fn.LightTip = function (options) {
		var defaults = {
			animate: true,
			attribute: "title",
			content: "",
			delayIn: 0,
			delayOut: 0,
			lockPosition: false,
			offsetX: 10,
			offsetY: 10,
			selector: "",
			speed: 400,
			trigger: "hover"
		};

		// If the user has supplied options let's merge them with the defaults
		if (options) {
			$.extend(defaults, options);
		}

		return this.each(function () {
			var $this = $(this), $lighttip, eventIn, eventOut;

			eventIn = (defaults.trigger === "focus" ? "focus" : "mouseenter");
			eventOut = (defaults.trigger === "focus" ? "blur" : "mouseleave");

			// Add the tooltip when the user hovers over the specified element
			$this.bind(eventIn, function (e) {
				var text = $this.attr(defaults.attribute), id = Math.ceil(Math.random() * 9998), left, top;

				left = (eventIn === "focus" ? this.offsetLeft : e.pageX);
				top = (eventIn === "focus" ? this.offsetTop : e.pageY);

				// See which value to use for the text
				if (defaults.selector && !defaults.content) {
					text = $(defaults.selector).html();
				}

				if (defaults.content) {
					text = defaults.content;
				}

				if (!text) { // Bail if we don't have any content
					return;
				}

				// Set up the LightTip element
				$lighttip = $("body").append('<div id="l-' + id + '" class="lighttip"></div>').find("#l-" + id).hide();

				// Clear the title attribute temporarily
				if ($this.attr("title")) {
					$this.data("orgTitle", $this.attr("title")).attr("title", "");
				}

				setTimeout(function () {
					// Show the tooltip
					$lighttip.html(text).css({
						left: left + defaults.offsetX,
						top: top + defaults.offsetY
					});

					if (defaults.animate) {
						$lighttip.stop().fadeIn(defaults.speed);
					} else {
						$lighttip.show();
					}
				}, defaults.delayIn);
			}).bind(eventOut, function () {
				// Restore the title attribute's value
				$this.attr("title", $this.data("orgTitle"));

				if ($lighttip) {
					setTimeout(function () {
						// Hide the tooltip
						if (defaults.animate) {
							$lighttip.stop().fadeOut(defaults.speed, function () {
								$lighttip.remove();
							});
						} else {
							$lighttip.remove();
						}
					}, defaults.delayOut);
				}
			});

			// Let the tooltip follow the mouse
			if (!defaults.lockPosition && defaults.trigger !== "focus") {
				$this.bind("mousemove", function (e) {
					$lighttip.css({
						left: e.pageX + defaults.offsetX,
						top: e.pageY + defaults.offsetY
					});
				});
			}
		});
	};
}(jQuery));