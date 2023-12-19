const permutate = require('../solutions/005-permutations')

test('1 case', () => {
    const returnedValue = permutate(1)
    expect(returnedValue).toHaveLength(1)
});

test('5 case', () => {
    const returnedValue = permutate(5)
    expect(returnedValue).toHaveLength(5) // 2 4 1 3 5
});

test('3 case', () => {
    const expectedResult = 'NO SOLUTION'
    const returnedValue = permutate(3)
    expect(returnedValue).toStrictEqual(expectedResult)
});

test('4 case', () => {
    const returnedValue = permutate(4) // 2 4 1 3
    expect(returnedValue).toHaveLength(4)
});

test('2 case', () => {
    const expectedResult = 'NO SOLUTION'
    const returnedValue = permutate(2)
    expect(returnedValue).toStrictEqual(expectedResult)
});