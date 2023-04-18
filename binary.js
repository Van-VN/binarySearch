function findFirstOccurrence(numbers, target) {
    var low = 0;
    var high = numbers[numbers.length - 1];
    var result = -1;
    while (low < high) {
        var mid = Math.floor(numbers.length / 2);
        if (numbers[mid] === target) {
            result = mid;
            high = mid - 1;
        }
        else if (target < numbers[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    if (result === -1) {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " kh\u00F4ng t\u1ED3n t\u1EA1i trong m\u1EA3ng"));
    }
    else {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " xu\u1EA5t hi\u1EC7n \u0111\u1EA7u ti\u00EAn t\u1EA1i v\u1ECB tr\u00ED ").concat(result));
    }
}
var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
findFirstOccurrence(data, target);
