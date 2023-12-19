/**
 * https://cses.fi/problemset/task/1070
 */
var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


r.on('line', function (input) {
    const result = permutate(parseInt(input))
    if(Array.isArray(result)) {
        console.log(result.join(' '));
        return
    }
    console.log(result);
});

/**
 * @param {number} size
 * @returns {number[]|null}
*/
function permutate(size) {
    var numberList = []
    for(var i = 2; i<=size; i+=2) {
        numberList.push(i)
    }
    var breakPoint = numberList.length
    for(var i = 1; i<=size; i+=2) {
        numberList.push(i)
    }
    if(Math.abs(Math.floor(numberList[breakPoint - 1] - numberList[breakPoint])) === 1) {
        return 'NO SOLUTION'
    }
    return numberList
}

module.exports = permutate