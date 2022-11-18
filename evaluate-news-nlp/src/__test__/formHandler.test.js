import { handleSubmit, requestURL } from "../js/formHandler";
import { validUrlChecker } from "../js/nameChecker";
import fetchMock from 'fetch-mock';


const testitems1 = {
    targetId: 'name',
    url: 'https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest',
    //targetbody: { url: targetId }
};
const testitems2 = {
    targetId: 'name2',
    url: 'using-jest',
    //targetbody: { url: targetId }
};

const expectResults = {
    agreement: 'DISAGREEMENT',
    confidence: '86',
    irony: 'NONIRONIC',
    model: 'general_en',
    polarity: 'P',
    subjectivity: 'SUBJECTIVE'
}
describe('Checking: the test inputs', () => {
    test('All items in "testitems1" is an object', () => {
        expect(typeof testitems1).toBe('object');
    });
    test('All items in "testitems2" is an object', () => {
        expect(typeof testitems2).toBe('object');
    });
    test('All items in "expectResults" is an object', () => {
        expect(typeof expectResults).toBe('object');
    });
})
describe('Checking: test input url validation', () => {
    let data1 = validUrlChecker(testitems1.url);
    let data2 = validUrlChecker(testitems2.url);
    test('Target URL of testitems1 is invalid', () => {
        expect(data1).not.toBeFalsy();
    })
    test('Target URL of testitems2 is valid', () => {
        expect(data2).toBeFalsy();
    })
})

describe('Testing: "handleSubmit()"', () => {
    test('"handleSubmit()" is a valid function (True)', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
    test('"handleSubmit()" exists (True)', async () => {
        expect(handleSubmit).toBeDefined();
    });
});



describe('Testing: "requestURL()"', () => {
    test('"requestURL()" is a valid function (True)', async () => {
        expect(typeof requestURL).toBe("function");
    });
    test('"requestURL()" exists (True)', async () => {
        expect(requestURL).toBeDefined();
    });
});


