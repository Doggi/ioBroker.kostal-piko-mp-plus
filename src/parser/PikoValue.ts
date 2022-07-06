export class PikoValue {
    private _value: string | number;
    private _unit?: string;

    constructor(value: string | number, unit?: string) {
        this._value = value;
        this._unit = unit;
    }

    public get value(): string | number {
        return this._value;
    }

    public get unit(): string | undefined {
        return this._unit;
    }

    public hasUnit(): boolean {
        return this._unit != undefined;
    }
}
