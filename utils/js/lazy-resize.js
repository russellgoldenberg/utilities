// dependencies: jquery, lodash (both default on Globe)
var setupResize = function() {
	$(window).on('resize', _.debounce(resize, 150));
};

var resize = function() {
	// do something on resize 
};