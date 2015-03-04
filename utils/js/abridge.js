// abridge({input: 'a string to truncate', charLength: 10, cleanBreak: true, ellipsis: true});
var abridge = function(params) {
	var end = params.ellipsis ? '...' : '';
	var sub = params.input.substring(0, params.charLength);
	var spaceIndex = sub.lastIndexOf(' ');
	if(params.cleanBreak && spaceIndex > -1) {
		return sub.substring(0, spaceIndex) + end;
	} else {
		return sub + end;
	}
};
