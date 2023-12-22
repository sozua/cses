/**
 * https://cses.fi/problemset/task/1071
 */
var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (input) {
    const result = calculate(input)
    console.log(result);
});

function calculate() {
}

module.exports = calculate
