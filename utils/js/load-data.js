var loadData = function() {
	$.ajax({
	url: 'http://some.thing.jsonp',
		dataType: 'jsonp',
		jsonpCallback: 'callbackFunctionName',
		error: function(xhr, status) {
			console.log(xhr, status);
		}
	});
};