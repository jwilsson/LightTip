# jQuery LightTip 1.0.7
LightTip is a tiny jQuery plugin for creating tooltips on any element.

http://jonathanwilsson.com/projects/jquery-lighttip/

## Features
* Animated display of the toolip.
* Choose with attribute to pull data from.
* Control the distance between the mouse pointer and LightTip.
* Delay the viewing and hiding of LightTip.
* Lock the position of LightTip or let it follow the mouse.
* Supports HTML content in LightTip.
* Tiny, 494 bytes minified and gzipped.

### Options
* animate (Default true) boolean Whether to animate the display of LightTip.
* attribute (Default "title") string Which attribute to pull LightTip's text from.
* delayIn (Default 0) int Number of miliseconds before LightTip is shown.
* delayOut (Default 0) int Number of miliseconds before LightTip is hidden.
* lockPosition (Default false) boolean Whether to lock the position of LightTip.
* offset (Default 10) integer Offset from the mouse pointer.
* speed (Default 400) integer Animation time in milliseconds.

Minimum required jQuery version is 1.3.

## License
Free to use and abuse under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Changelog
### 1.0.7
* Added the "attribute" option to control which element to pull the text from.
* Added the "delayIn" and "delayOut" options to control any delay before showing or hiding LightTip.

### 1.0.6
* Fixed an issue where LightTip would be emptied when moving the mouse between elements which were both bound to LightTip.
* Added the "offset" option to control how far from the pointer LightTip will be.
* Stripped down the Copyright notice in the JavaScript file.

### 1.0.5
* Removed the "easing" option. Realized it was pretty unnecessary.
* Fixed an issue where LightTip was sometimes empty if hidden and displayed to fast when hovering.
* Prevented the animation to be stacked when hovering in and out several times.

### 1.0.4
* Added option "speed" to control the speed of the animation.
* Removed the animation of height. The only animation is currently opacity.
* Renamed the HTML element class to lighttip. Update your CSS.
* Added support for custom easing, for example the jQuery Easing plugin. Define your easing via the 'easing' parameter.

### 1.0.3
* Added option "animate" to allow for animated display of LightTip.

### 1.0.2
* Code optimization and cleanup.
* Added option "lockPosition" to prevent LightTip from following the mouse.

### 1.0.1
* Rewrote bits of the code to perform better.

### 1.0
* Initial release.

## Copyright
Copyright 2011 Jonathan Wilsson