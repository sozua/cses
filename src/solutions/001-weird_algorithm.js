var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


r.on('line', function (input) {
    const result = calculate( [Number(input)] )
    console.log(result.join(' '));
});

/**
 * @param {number[]} sequence
*/
function calculate(sequence) {
    var lastNumber = sequence[sequence.length - 1]
    if(lastNumber < 2) {
        return sequence
    }
    if(lastNumber % 2 == 0) {
        sequence.push(lastNumber / 2)
        return calculate(sequence)
    }
    sequence.push(lastNumber * 3 + 1)
    return calculate(sequence)
}

module.exports = calculate