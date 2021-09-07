const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        var result = mathOperations.sum(1, 2)
        expect(result).toBe(3);
    });
    test('subtracting 2 from 10 should return 8', () => {
        var result = mathOperations.diff(10, 2)
        expect(result).toBe(8);
    });
    test('multiplying 2 and 8 should return 16', () => {
        var result = mathOperations.product(8, 2)
        expect(result).toBe(16);
    });
    test('equality matchers', () => {
        expect(2*2).toBe(4);
        expect(4-2).not.toBe(1);
    });
    test('truthy operators', () => {
        var name = "Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull

        // name has a valid value
        expect(name).toBeTruthy()

        // fail - as null is non success
        expect(n).toBeTruthy()

        // pass - null treated as false or negative
        expect(n).toBeFalsy()
    })
    test('numeric operators', () => {
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;

        // greater than
        expect(num1).toBeGreaterThan(10)

        // less than or equal to
        expect(num2).toBeLessThanOrEqual(0)

        // greater than or equal to
        expect(num3).toBeGreaterThanOrEqual(0)
    })
});