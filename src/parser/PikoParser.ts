import { DOMParser } from "xmldom";
import xpath from "xpath";
import { State } from "../lib/State";
import { PikoValue } from "./PikoValue";

export class PikoParser {
    private dom: Document;

    constructor(data: string) {
        this.dom = new DOMParser().parseFromString(data);
    }

    public parse(state: State): PikoValue {
        const selectedValue = xpath.select1(state.xpathValue, this.dom);

        if (selectedValue !== undefined) {
            const value = (<Attr>selectedValue).value;

            let unit: string | undefined = undefined;
            if (state.xpathUnit !== undefined) {
                const selectedUnit = xpath.select1(state.xpathUnit, this.dom);
                if (selectedUnit !== undefined) {
                    unit = (<Attr>selectedUnit).value;
                }
            }

            const type = state.type ? state.type : "string";
            return new PikoValue(this.convertStringTo(value, type), unit);
        } else {
            throw new Error(`we dont found a value for the state ${state.id}`);
        }
    }

    private convertStringTo(value: string, typeString: string | undefined): number | string | never {
        let convertedValue: any;
        if (typeString == "number") {
            convertedValue = Number(value);
        } else if (typeString == "string") {
            convertedValue = value;
        } else {
            throw new Error(`unknown cast type - ${typeString}`);
        }
        return convertedValue;
    }
}
