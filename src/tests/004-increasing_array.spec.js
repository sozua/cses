const findMinMoves = require('../solutions/004-increasing_array')

test('5 case', () => {
    const expectedResult = 5
    const returnedValue = findMinMoves(5, [3, 2, 5, 1, 7])
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('1000000000 case', () => {
    const expectedResult = 8999999991
    const returnedValue = findMinMoves(10, [1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    expect(returnedValue).toStrictEqual(expectedResult)
});