var countBs = function(a) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "B")
            count++;
    }
    return count;
}
var countChar = function(a, b) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b)
            count++;
    }
    return count;
};

console.log(countBs("BIBBLE"))
console.log(countChar("BALLSBAG","L" ))