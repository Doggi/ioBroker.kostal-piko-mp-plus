/**
 * This is a dummy TypeScript test file using chai and mocha
 *
 * It's automatically excluded from npm and its build output is excluded from both git and npm.
 * It is advised to test all your modules with accompanying *.test.ts-files
 */

import { expect } from "chai";
import { readFileSync } from "fs";
import { join } from "path";
import { DOMParser } from "xmldom";
import xpath from "xpath";

describe("module to test => function to test", () => {
    // initializing logic
    const expected = 5;

    it(`should return ${expected}`, () => {
        const result = 5;
        // assign result a value from functionToTest
        expect(result).to.equal(expected);
        // or using the should() syntax
        result.should.equal(expected);
    });
    // ... more tests => it
});

describe("StatesMapper => PIKO_3.0-2_MP_plus.xml", () => {
    const data = readFileSync(join(__dirname, "../test/test_xml_files/PIKO_3.0-2_MP_plus.xml"), "utf-8");
    const dom = new DOMParser().parseFromString(data);

    it(`should parse PIKO 3.0-2 MP plus`, () => {
        const selectedValue = xpath.select1("/root/Device/@Name", dom);
        const value = (<Attr>selectedValue).value;
        expect(value).to.equal("PIKO 3.0-2 MP plus");
    });
});

// ... more test suites => describe
