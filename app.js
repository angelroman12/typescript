function combine(input1, input2, combined) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || combined === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStingAges = combine('33', '44', 'as-number');
console.log(combinedStingAges);
var combinedNames = combine('Alex', 'Ioana', 'as-text');
console.log(combinedNames);
