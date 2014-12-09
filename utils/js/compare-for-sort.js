function compareForSort(params) {
	var dir = params.dir === 'asc' ? 1 : -1; 
	if(params.values[0] < params.values[1]) {
		return -1 * dir;
	} else if (params.values[0] > params.values[1]) {
		return 1 * dir;
	}
	return 0;
}

// Example
// params = { values: [*value1*, *value2*], dir: '*asc* || *desc*' }
var arr = [
	{ 'name': 'Colin', 'age': 27 },
	{ 'name': 'Mike', 'age': 17 },
	{ 'name': 'Russell', 'age': 28 }];

arr.sort(function(a,b) {
	return compareForSort({dir: 'asc', values: [a.age, b.age]});
});