function formatDecimals(x, decimalPlaces) {
	decimalPlaces = decimalPlaces || 0;

	if (x === 1) {
		return '100';
	} else if (x === 0) {
		return '0';
	} else {
		return (100*x).toFixed(decimalPlaces).toString();
	}
}