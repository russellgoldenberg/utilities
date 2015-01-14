var getOptimalImageSize = function(sizes) {
	var trueScreenWidth = window.screen.width * window.devicePixelRatio;
	var numSizes = sizes.length - 1;
	var best = sizes[numSizes];

	for(var i = numSizes; i > -1; i--) {
		console.log(trueScreenWidth, sizes[i]);
		if(trueScreenWidth > sizes[i]) {
			break;
		} else {
			best = sizes[i];
		}
	}

	return best;
}

// a list of image sizes (in width) available in ascending order
var sizeList = [640, 960, 1280, 1920];

var imgSize = getOptimalImageSize(sizeList);