var copyArray = function(input) {
    var output = [];
    for(var i = 0; i < input.length; i++) {
        var clone = JSON.parse(JSON.stringify(input[i]));
        output.push(clone);
    }
    return output;
}