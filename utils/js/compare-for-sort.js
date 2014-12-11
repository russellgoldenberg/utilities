function compareForSort(params) {
	var dir = params.direction === 'ascending' ? 1 : -1; 
	var a = params.items[0][params.property];
	var b = params.items[1][params.property];
	if(a < b) {
		return -1 * dir;
	} else if (a > b) {
		return 1 * dir;
	}
	return 0;
}

// Example
// params = { items: [*value1*, *value2*], direction: '*ascending* || *descending*', property: '*name*' }
var arr = [
	{ 'firstname': 'Colin', 'age': 27 },
	{ 'firstname': 'Mike', 'age': 17 },
	{ 'firstname': 'Russell', 'age': 28 }];

arr.sort(function(a,b) {
	return compareForSort({items: [a, b], direction: 'ascending', property: 'age' });
});