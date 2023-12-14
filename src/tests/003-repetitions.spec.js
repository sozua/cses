const findLongestRepetition = require('../solutions/003-repetitions')

test('ATTCGGGA case', () => {
    const expectedResult = 3
    const returnedValue = findLongestRepetition("ATTCGGGA")
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('ACCGGGTTTT case', () => {
    const expectedResult = 4
    const returnedValue = findLongestRepetition("ACCGGGTTTT")
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('AAAAAAAAAA case', () => {
    const expectedResult = 10
    const returnedValue = findLongestRepetition("AAAAAAAAAA")
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('A case', () => {
    const expectedResult = 1
    const returnedValue = findLongestRepetition("A")
    expect(returnedValue).toStrictEqual(expectedResult)
});