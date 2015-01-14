var ieVersionOrLess = function(x) {
	x = x || 0;
	var htmlClasses = document.getElementsByTagName('html')[0].className;
	var matches = htmlClasses.match(/ie\d/);
	return matches ? +matches[0].substring(2,matches[0].length) <= x : false;
}