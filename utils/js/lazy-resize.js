// dependencies: jquery, lodash (both default on Globe)
function setupResize() {
	$(window).on('resize', _.debounce(resize, 150));
}

function resize() {
	// do something on resize 
}