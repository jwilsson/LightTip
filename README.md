# jQuery LightTip 1.1.2
LightTip is a tiny jQuery plugin for creating tooltips on any element.

http://jonathanwilsson.com/projects/jquery-lighttip/

## Features
* Animated display of the toolip.
* Choose which attribute to pull data from, you can even choose another element or a string defined in your script.
* Control the distance between the mouse pointer and LightTip.
* Delay the viewing and hiding of LightTip.
* Lock the position of LightTip or let it follow the mouse.
* No CSS styles enforced, you're 100% in charge.
* Supports HTML content in LightTip.
* Tiny, 598 bytes (< 1kB) minified and gzipped.
* Trigger on different events, such as hover or focus

### Options
* animate (Default true) boolean Whether to animate the display of LightTip.
* attribute (Default "title") string Which attribute to pull LightTip's text from. Can be overridden by the "selector" or "content" options.
* content (Default "") string A string which can contain HTML and which will be used in LightTip. Will override the "attribute" and "selector" options.
* delayIn (Default 0) int Number of miliseconds before LightTip is shown.
* delayOut (Default 0) int Number of miliseconds before LightTip is hidden.
* lockPosition (Default false) boolean Whether to lock the position of LightTip. Not used if "trigger" is "focus".
* offsetX (Default 10) integer X-offset from the mouse pointer.
* offsetY (Default 10) integer Y-offset from the mouse pointer.
* selector (Default "") string Any valid jQuery selector. The matched element's HTML will be used in LightTip. Will override the "attribute" option.
* speed (Default 400) integer Animation time in milliseconds.
* trigger (Default "hover") string Event used to trigger display of LightTip, "hover" or "focus".

Minimum required jQuery version is 1.3.0.

## License
Free to use and abuse under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Changelog
### 1.1.2
* Added the "position:absolute;" declaration to the JavaScript again to make the setup of LightTip easier.
* Some code cleanup.

### 1.1.1
* Added the "trigger" option to allow for control over the triggering event.
* Fixed a bug where a "title" attribute was always needed on the element which LightTip were bound to.

### 1.1
* The old "offset" option will no longer work. From now on the "offsetX" and "offsetY" options must be used.
* Added the "content" and "selector" options to control the text in LightTip.
* Moved the "position:absolute;" CSS declaration to the .css file to avoid setting it via JavaScript. Remember to update your CSS with this rule.

### 1.0.8
* Replaced the "offset" option with the "offsetX" and "offsetY" options for better control of the offset.
* Fixed various issues with emptied tooltips and missing animations when moving the mouse between elements.

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
* Renamed the HTML element class to "lighttip". Update your CSS.
* Added support for custom easing, for example the jQuery Easing plugin. Define your easing via the "easing" parameter.

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
Copyright 2011 - 2012 Jonathan Wilsson.