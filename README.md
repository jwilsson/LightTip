# jQuery LightTip 1.0.4
LightTip is a jQuery plugin which allows you to create simple little tooltips on any element.

http://jonathanwilsson.com/projects/jquery-lighttip/

## Features
* Tiny, 473 bytes minified and gzipped.
* Lock the position of the tooltip or let it follow the mouse.
* Animated display of the toolip

### Options
* animate (Default true) boolean Whether to animate the display of the tooltip
* easing (Default swing) string A easing of your choice
* lockPosition (Default false) boolean Whether to lock the position of the tooltip
* speed (Default 400) integer Animation time in milliseconds

Requires at least jQuery 1.5.

## License
Free to use and abuse under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Changelog
### 1.0.4
* Added option 'speed' to control the speed of the animation
* Removed the animation of height. The only animation is currently opacity
* Renamed the HTML element class to lighttip. Update your CSS
* Added support for custom easing, for example the jQuery Easing plugin. Define your easing via the 'easing' parameter

### 1.0.3
* Added option 'animate' to allow for animated display of the tooltip

### 1.0.2
* Code optimization and cleanup
* Added option 'lockPosition' to prevent the tooltip from following the mouse

### 1.0.1
* Rewrote bits of the code to perform better

### 1.0
* Initial release

## Copyright
Copyright 2011 Jonathan Wilsson