/**
 * https://cses.fi/problemset/task/1069
 */

var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


r.on('line', function (input) {
    const result = calculate( input )
    console.log(result);
});

/**
 * @param {string} sequence
 * @returns {number}
*/
function calculate(sequence) {
    let max = 0;
    let currSequenceChar = null;
    let currSequenceCount = 0;
    for (let i = 0; i < sequence.length; i++) {
        currChar = sequence[i]
        currSequenceCount = currChar === currSequenceChar ? currSequenceCount + 1 : 1
        if(currChar != currSequenceChar) {
            currSequenceChar = currChar
        }
        if(max < currSequenceCount) {
            max = currSequenceCount
        }
    } 
    return max
}

module.exports = calculate