import { assert, expect } from "chai";
import { State } from "../lib/State";
import { PikoParser } from "./PikoParser";
import { PikoValue } from "./PikoValue";

describe("Test the PikoParser class", () => {
    const fileStr = "<?xml version='1.0' encoding='UTF-8'?><root><Device Name='PIKO 3.0-2 MP plus'/></root>";
    const state: State = {
        xpathValue: "/root/Device/@Name",
        id: "device.name",
        name: "Name",
    };

    it(`create instance`, () => {
        const parser = new PikoParser(fileStr);
        expect(parser).not.undefined;
        expect(parser).instanceOf(PikoParser);
    });

    it(`parse one state with value as string and no unit`, () => {
        const parser = new PikoParser(fileStr);
        const result = parser.parse(state);

        expect(result).to.be.instanceOf(PikoValue);
        expect(result.hasUnit()).to.be.false;
        expect(result.value).to.be.equal("PIKO 3.0-2 MP plus");
    });

    it(`parse one state with value as number and no unit`, () => {
        const fileStr = "<?xml version='1.0' encoding='UTF-8'?><root><Device BusAddress='1'/></root>";
        const state: State = {
            xpathValue: "/root/Device/@BusAddress",
            id: "device.busaddress",
            name: "Bus Address",
            type: "number",
        };

        const parser = new PikoParser(fileStr);
        const result = parser.parse(state);

        expect(result).to.be.instanceOf(PikoValue);
        expect(result.hasUnit()).to.be.false;
        expect(result.value).to.be.equal(1);
    });

    it(`parse one state with value as number and a unit`, () => {
        const fileStr =
            "<?xml version='1.0' encoding='UTF-8'?><root><Device BusAddress='1'><Measurements><Measurement Value='236.0' Unit='V' Type='AC_Voltage'/></Measurements></Device></root>";
        const state: State = {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit",
            id: "measurements.acvoltage",
            name: "AC Voltage",
            type: "number",
        };

        const parser = new PikoParser(fileStr);
        const result = parser.parse(state);

        expect(result).to.be.instanceOf(PikoValue);
        expect(result.hasUnit()).to.be.true;
        expect(result.value).to.be.equal(236);
        expect(result.unit).to.be.equal("V");
    });

    it(`parse one state with value as decimal number and a unit`, () => {
        const fileStr =
            "<?xml version='1.0' encoding='UTF-8'?><root><Device BusAddress='1'><Measurements><Measurement Value='38.9' Unit='°C' Type='Temp'/></Measurements></Device></root>";
        const state: State = {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='Temp']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='Temp']/@Unit",
            id: "measurements.temp",
            name: "Temp",
            type: "number",
        };

        const parser = new PikoParser(fileStr);
        const result = parser.parse(state);

        expect(result).to.be.instanceOf(PikoValue);
        expect(result.hasUnit()).to.be.true;
        expect(result.value).to.be.equal(38.9);
        expect(result.unit).to.be.equal("°C");
    });

    it(`should throw an error with the message "we dont found a value for the state error.test"`, () => {
        const fileStr = "<?xml version='1.0' encoding='UTF-8'?>";
        const state: State = {
            xpathValue: "/error",
            id: "error.test",
            name: "Error test",
            type: "string",
        };

        const parser = new PikoParser(fileStr);
        assert.throws(() => parser.parse(state), /we dont found a value for the state error.test/);
    });

    it(`should throw an error with the message "unknown cast type - array"`, () => {
        const fileStr = "<?xml version='1.0' encoding='UTF-8'?><root><Device Name='PIKO 3.0-2 MP plus'/></root>";
        const state: State = {
            xpathValue: "/root/Device/@Name",
            id: "device.name",
            name: "Name",
            type: "array",
        };

        const parser = new PikoParser(fileStr);
        assert.throws(() => parser.parse(state), /unknown cast type - array/);
    });
});
