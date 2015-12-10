var scrollIntoView = function(params) {

	var elements = [];
	var query = document.getElementsByClassName(params.selector);
	for (var i = 0; i < query.length; i++) {
		elements.push(query[i]);
	}

	// height of window
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	var onScroll = function() {
		var remove = [];
		var len = elements.length;

		for (var i = 0; i < len; i++) {
			var el = elements[i];
			var rect = el.getBoundingClientRect();
			var top = rect.top;
			var bottom = rect.bottom;

			if (top < height) {
				params.func(el);
				remove.push(i);
			}
		}

		removeElements(remove);
	};

	var removeElements = function(remove) {
		var len = remove.length;
		for (var r = 0; r < len; r++) {
			elements.splice(r, 1);
			r -=1;
			len = r.length;
		}

		if (!elements.length) {
			window.removeEventListener('scroll', onScroll);
		}
	}

	window.addEventListener('scroll', onScroll);
};