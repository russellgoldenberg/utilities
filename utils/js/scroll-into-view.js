var scrollIntoView = function(params) {
	var distanceFromTop;
	var elements = [];

	var init = function() {
		distanceFromTop = getOffset();
		console.log(distanceFromTop);
		var query = document.getElementsByClassName(params.selector);
		for (var i = 0; i < query.length; i++) {
			elements.push(query[i]);
		}
		window.addEventListener('scroll', onScroll, true);
	};

	var getOffset = function() {
		if (params.offset) {
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var num = parseInt(params.offset.replace('%', '')) / 100;
			var fraction = Math.max(0, Math.min(100, num));
			return h - fraction * h;
		}
		return 0;
	};

	var onScroll = function() {
		var remove = [];
		var len = elements.length;

		for (var i = 0; i < len; i++) {
			var el = elements[i];
			var rect = el.getBoundingClientRect();
			var top = rect.top;
			var bottom = rect.bottom;

			if (top < distanceFromTop) {
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
			window.removeEventListener('scroll', onScroll, true);
		}
	};

	init();
};