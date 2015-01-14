var isMobile = function() {
	return /iPad|iPod|iPhone|Android/.test(navigator.userAgent) || document.location.hash == "#ipad";
}