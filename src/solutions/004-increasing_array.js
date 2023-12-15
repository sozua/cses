/**
 * https://cses.fi/problemset/task/1094/
 */

var input = ""

process.stdin.on("data", (x) => (input += x));
process.stdin.on("end", () => {
    let parsedInput = input.split("\n")
    let listSize = parseInt(parsedInput[0])
    let numberList = parsedInput[1].split(' ').map((el) => parseInt(el))
    let res = calculate(listSize, numberList)
    console.log(res)
    return res
});

/**
 * @param {number} listSiopze
 * @param {number[]} numberList
*/
function calculate(listSize, numberList) {
    let totalSum = 0;
    for (let i = 0; i < listSize; i++) {
        if(numberList[i] < numberList[i + 1]) continue;
        if(!numberList[i + 1]) break;
        const diff = (numberList[i] - numberList[i + 1])
        numberList[i + 1] = numberList[i + 1] + diff
        totalSum += diff
    }
    return totalSum
}

module.exports = calculate