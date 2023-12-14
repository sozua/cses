const findMissingNumber = require('../solutions/002-missing_number')
const giantTestCase = require('./002-giant')

test('Missing 4 case', () => {
    const expectedResult = 4
    const returnedValue = findMissingNumber(5, [2, 3, 1, 5])
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('Missing GIANT case', () => {
    const expectedResult = 180468
    const returnedValue = findMissingNumber(200000, giantTestCase)
    expect(returnedValue).toStrictEqual(expectedResult)
});