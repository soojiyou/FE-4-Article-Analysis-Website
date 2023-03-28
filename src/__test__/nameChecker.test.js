import { checkForName, validUrlChecker } from "../js/nameChecker"


describe('Testing: url pattern', () => {
    let check1 = validUrlChecker('cribe-and-beforeeach/');
    let check2 = validUrlChecker('https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest');
    test('"https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest" is valid url', () => {
        expect(check2).toBeTruthy();
    })

    test('"cribe-and-beforeeach/" is invalid url', () => {
        expect(check1).toBeFalsy();
    })
})

// valid names: "Picard","Janeway","Kirk","Archer","Georgiou"
describe('Testing: name validation', () => {
    let testname1 = "Picard";
    let testname2 = "Vicard";
    let testname3 = "Kirk";
    test('"Picard" is valid', () => {
        expect(checkForName(testname1)).toBeTruthy();
    })
    test('"Vicard" is invalid', () => {
        expect(checkForName(testname2)).toBeFalsy();
    })
    test('"Kirk" is valid', () => {
        expect(checkForName(testname3)).toBeTruthy();
    })
})


