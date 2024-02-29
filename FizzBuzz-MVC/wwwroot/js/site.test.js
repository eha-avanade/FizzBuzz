const site = require('./site')

test('returns FizzBuzz', () => {
    let values = [15];
    expect(
        fizzBuzz(values)
    ).toBe("FizzBuzz")
});

test('returns Fizz', () => {
    let values = [3];
    expect(
        fizzBuzz(values)
    ).toBe("Fizz")
});

test('returns Buzz', () => {
    let values = [5];
    expect(
        fizzBuzz(values)
    ).toBe("Buzz")
});

test('returns nothing', () => {
    let values = [];
    expect(
        fizzBuzz(values)
    ).toBe("")
});