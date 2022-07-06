import { expect } from "chai";
import { PikoValue } from "./PikoValue";

describe("PikoValue testing", () => {
    it(`value as string`, () => {
        const value = new PikoValue("test string for testing");

        expect(value.value).not.undefined;
        expect(value.value).to.equal("test string for testing");
    });

    it(`value as number`, () => {
        const value = new PikoValue(132);

        expect(value.value).not.undefined;
        expect(value.value).to.equal(132);
        expect(value.value).not.to.equal("132");
    });

    it(`unit is not set`, () => {
        const value = new PikoValue(132);

        expect(value.hasUnit()).to.be.false;
        expect(value.unit).to.be.undefined;
    });

    it(`unit is set`, () => {
        const value = new PikoValue(132, "Unit");

        expect(value.hasUnit()).to.be.true;
        expect(value.unit).to.equal("Unit");
    });
});
