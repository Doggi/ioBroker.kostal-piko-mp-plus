var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var utils = __toESM(require("@iobroker/adapter-core"));
var import_axios = __toESM(require("axios"));
var import_https = __toESM(require("https"));
var import_xmldom = require("xmldom");
var import_xpath = __toESM(require("xpath"));
var import_StatesMapper = require("./StatesMapper");
class KostalPikoMpPlus extends utils.Adapter {
  constructor(options = {}) {
    super(__spreadProps(__spreadValues({}, options), {
      name: "kostal-piko-mp-plus"
    }));
    this.refreshInterval = void 0;
    this.serverIpRegex = /^[A-Za-z0-9\.]+$/;
    this.on("ready", this.onReady.bind(this));
    this.on("unload", this.onUnload.bind(this));
  }
  async onReady() {
    this.setState("info.connection", false, true);
    this.log.debug(`config.serverIp: ${this.config.serverProtocol}`);
    this.log.debug(`config.interval: ${this.config.serverIp}`);
    this.log.debug(`config.serverIp: ${this.config.serverPort}`);
    this.log.debug(`config.interval: ${this.config.interval}`);
    if (!this.serverIpRegex.test(this.config.serverIp)) {
      this.log.error(`Server IP/Host: ${this.config.serverIp} is invalid - example 192.168.0.1`);
      return;
    }
    const serverBaseUrl = `${this.config.serverProtocol}://${this.config.serverIp}:${this.config.serverPort}`;
    const states = import_StatesMapper.StatesMapper.states;
    this.generateMdStateTable(states);
    const client = this.createClient(serverBaseUrl);
    this.log.info(`axios client with base url ${serverBaseUrl} created`);
    this.log.info(`init fetch states`);
    await this.refreshMeasurements(client, states);
    this.log.info(`starting auto refresh each ${this.config.interval} millis`);
    this.refreshInterval = this.setInterval(async () => {
      this.log.info(`refreshing states`);
      await this.refreshMeasurements(client, states);
    }, this.config.interval);
  }
  createClient(serverBaseUrl) {
    return import_axios.default.create({
      baseURL: `${serverBaseUrl}`,
      timeout: 5e3,
      responseType: "text",
      responseEncoding: "utf8",
      httpsAgent: new import_https.default.Agent({
        rejectUnauthorized: false
      })
    });
  }
  async refreshMeasurements(client, states) {
    var _a;
    const endpoint = "/all.xml";
    try {
      const { data, status } = await client.get(endpoint);
      this.log.debug(`request to ${endpoint} with status ${status}`);
      if (status == 200) {
        this.setState("info.connection", true, true);
        const dom = new import_xmldom.DOMParser().parseFromString(data);
        await this.updateStates(dom, states);
      } else {
        this.log.error(`unexpected status code: ${status}`);
      }
    } catch (error) {
      this.log.error(`set connection state to false and stop interval`);
      this.setState("info.connection", false, true);
      this.clearInterval(this.refreshInterval);
      if (import_axios.default.isAxiosError(error)) {
        this.log.error(`error message: ${error.message} - ${(_a = error.response) == null ? void 0 : _a.data}`);
      } else {
        this.log.error(`unexpected error: ${error}`);
      }
    }
  }
  async updateStates(dom, states) {
    for (const s of states) {
      let selectedValue = import_xpath.default.select1(s.xpathValue, dom);
      let value;
      if (selectedValue !== void 0) {
        value = selectedValue.value;
      }
      let unit = null;
      if (s.xpathUnit !== void 0) {
        selectedValue = import_xpath.default.select1(s.xpathUnit, dom);
        unit = selectedValue.value;
      }
      if (value !== void 0) {
        this.log.debug(`found state ${s.id} - ${value}`);
        const common = {
          name: s.name,
          type: s.type ? s.type : "string",
          read: s.read ? s.read : true,
          write: s.write ? s.write : false,
          role: s.role ? s.role : "state",
          unit: unit !== null ? unit : void 0
        };
        await this.setObjectNotExistsAsync(s.id, {
          type: "state",
          common,
          native: {}
        });
        value = this.convertStringTo(value, common.type);
        await this.setStateAsync(s.id, { val: value, ack: true });
      } else {
        this.log.debug(`${s.id} has no value so we ignore it`);
      }
    }
  }
  onUnload(callback) {
    try {
      this.setState("info.connection", false, true);
      this.clearInterval(this.refreshInterval);
      callback();
    } catch (e) {
      callback();
    }
  }
  convertStringTo(value, typeString) {
    this.log.debug(`try to convert ${value} to ${typeString}`);
    let convertedValue;
    if (typeString == "number") {
      convertedValue = Number(value);
    } else if (typeString == "string") {
      convertedValue = value;
    } else {
      throw new Error(`unknown cast type - ${typeString}`);
    }
    return convertedValue;
  }
  generateMdStateTable(states) {
    let table;
    table = `
|Name|Id|Value Type|xPath|
`;
    table = `${table}|---|---|---|---|
`;
    states.forEach((e) => {
      table = `${table}|${e.name}|${e.id}|${e.type ? e.type : "string"}|${e.xpathValue}|
`;
    });
    this.log.debug(`${table}`);
  }
}
if (require.main !== module) {
  module.exports = (options) => new KostalPikoMpPlus(options);
} else {
  (() => new KostalPikoMpPlus())();
}
//# sourceMappingURL=main.js.map
