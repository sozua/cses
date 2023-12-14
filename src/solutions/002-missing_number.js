/**
 * https://cses.fi/problemset/task/1083/
 */

var input = ""

process.stdin.on("data", (x) => (input += x));
process.stdin.on("end", () => {
    let parsedInput = input.split("\n")
    let maxSize = parseInt(parsedInput[0])
    let numberList = parsedInput[1].split(' ').map((el) => parseInt(el))
    return calculate(maxSize, numberList)
});

/**
 * @param {[number, number[]]} params
 * @param {number} maxSize
 * @param {number[]} numberList
*/
function calculate(maxSize, numberList) {
    // O(n²)
    // for(let i = 0; i < maxSize; i++) {
    //     if(numberList.indexOf(i + 1) !== -1) {
    //         continue;
    //     }
    //     return i + 1
    // }

    // O (n log n + n) -> O (n log n)
    // const sortedList = mergeSort(numberList)
    // for (let i = 0; i < maxSize; i++) {
    //     const element = sortedList[i]
    //     if (element === i + 1) continue
    //     return i + 1
    // }

    // O(n)
    let sum = 0;
    for (let number of numberList) {
        sum += parseInt(number)
    }
    const maxSum = (maxSize * (1 + maxSize)) / 2
    console.log(maxSum - sum)
    return maxSum - sum
}

module.exports = calculate