/*
 * Created with @iobroker/create-adapter v2.1.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from "@iobroker/adapter-core";
// Load your modules here, e.g.:
import axios, { AxiosInstance } from "axios";
import https from "https";
import { DOMParser } from "xmldom";
import xpath from "xpath";
import { State } from "./lib/State";
import { StatesMapper } from "./StatesMapper";

class KostalPikoMpPlus extends utils.Adapter {
    refreshInterval: any = undefined;
    serverIpRegex = /^[A-Za-z0-9\.]+$/;

    public constructor(options: Partial<utils.AdapterOptions> = {}) {
        super({
            ...options,
            name: "kostal-piko-mp-plus",
        });
        this.on("ready", this.onReady.bind(this));
        this.on("unload", this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    private async onReady(): Promise<void> {
        // Initialize your adapter here
        // Reset the connection indicator during startup
        this.setState("info.connection", false, true);

        // The adapters config (in the instance object everything under the attribute "native") is accessible via this.config:
        this.log.debug(`config.serverIp: ${this.config.serverProtocol}`);
        this.log.debug(`config.interval: ${this.config.serverIp}`);
        this.log.debug(`config.serverIp: ${this.config.serverPort}`);
        this.log.debug(`config.interval: ${this.config.interval}`);

        if (!this.serverIpRegex.test(this.config.serverIp)) {
            this.log.error(`Server IP/Host: ${this.config.serverIp} is invalid - example 192.168.0.1`);
            return;
        }

        const serverBaseUrl = `${this.config.serverProtocol}://${this.config.serverIp}:${this.config.serverPort}`;

        // Load states config
        const states = StatesMapper.states;
        this.generateMdStateTable(states);

        const client = axios.create({
            baseURL: `${serverBaseUrl}`,
            timeout: 5000,
            responseType: "text",
            responseEncoding: "utf8",
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        });

        this.log.info(`axios client with base url ${serverBaseUrl} created`);
        this.log.info(`init fetch states`);

        try {
            await this.refreshMeasurements(client, states);

            this.log.info(`starting auto refresh each ${this.config.interval} millis`);
            this.refreshInterval = this.setInterval(async () => {
                this.log.info(`refreshing states`);
                await this.refreshMeasurements(client, states);
            }, this.config.interval);
        } catch (error) {
            this.log.error(`set connection state to false and stop interval`);
            this.setState("info.connection", false, true);
            this.clearInterval(this.refreshInterval);
            if (axios.isAxiosError(error)) {
                this.log.error(`error message: ${error.message} - ${error.response?.data}`);
            } else {
                this.log.error(`unexpected error: ${error}`);
            }
        }
    }

    private async refreshMeasurements(client: AxiosInstance, states: State[]): Promise<void> {
        const endpoint = "/all.xml";
        const { data, status } = await client.get(endpoint);
        this.log.debug(`request to ${endpoint} with status ${status}`);
        if (status == 200) {
            this.setState("info.connection", true, true);
            const dom = new DOMParser().parseFromString(data);
            await this.updateStates(dom, states);
        } else {
            this.log.error(`unexpected status code: ${status}`);
        }
    }

    private async updateStates(dom: Document, states: State[]): Promise<void> {
        for (const s of states) {
            let selectedValue = xpath.select1(s.xpathValue, dom);

            let value: any;

            if (selectedValue !== undefined) {
                value = (<Attr>selectedValue).value;
            }

            let unit = null;
            if (s.xpathUnit !== undefined) {
                selectedValue = xpath.select1(s.xpathUnit, dom);
                unit = (<Attr>selectedValue).value;
            }

            if (value !== undefined) {
                this.log.debug(`found state ${s.id} - ${value}`);
                const common: ioBroker.StateCommon = {
                    name: s.name,
                    type: s.type ? s.type : "string",
                    read: s.read ? s.read : true,
                    write: s.write ? s.write : false,
                    role: s.role ? s.role : "state",
                    unit: unit !== null ? unit : undefined,
                };

                await this.setObjectNotExistsAsync(s.id, {
                    type: "state",
                    common: common,
                    native: {},
                });

                value = this.convertStringTo(value, common.type);

                await this.setStateAsync(s.id, { val: value, ack: true });
            } else {
                this.log.debug(`${s.id} has no value so we ignore it`);
            }
        }
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     */
    private onUnload(callback: () => void): void {
        try {
            this.setState("info.connection", false, true);
            this.clearInterval(this.refreshInterval);
            callback();
        } catch (e) {
            callback();
        }
    }

    private convertStringTo(value: string, typeString: string | undefined): any {
        this.log.debug(`try to convert ${value} to ${typeString}`);

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

    private generateMdStateTable(states: State[]): void {
        let table: string;
        table = `\n|Name|Id|Value Type|xPath|\n`;
        table = `${table}|---|---|---|---|\n`;
        states.forEach((e) => {
            table = `${table}|${e.name}|${e.id}|${e.type ? e.type : "string"}|${e.xpathValue}|\n`;
        });
        this.log.debug(`${table}`);
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new KostalPikoMpPlus(options);
} else {
    // otherwise start the instance directly
    (() => new KostalPikoMpPlus())();
}
