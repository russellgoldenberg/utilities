function loadImage(url, cb) {
    var img = new Image();

    img.onload = function() {
        cb();
    };

    img.onerror = function() {
        cb('error loading image: ' + url);
    };

    img.src = url;
}