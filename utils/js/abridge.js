// abridge({input: 'a string to truncate', charLength: 10, cleanBreak: true, ellipsis: true});
var abridge = function(params) {
	var sub = params.input.substring(0, Math.min(params.input.length, params.charLength));
	var end = params.ellipsis ? '...' : '';
	if(params.cleanBreak && sub.lastIndexOf(' ') > -1) {
		return sub.substring(0, sub.lastIndexOf(' ')) + end;
	} else {
		return sub + end;
	}
};
