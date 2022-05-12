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
var import_xmldom = require("xmldom");
var import_xpath = __toESM(require("xpath"));
var import_StatesMapper = require("./StatesMapper");
class KostalPikoMpPlus extends utils.Adapter {
  constructor(options = {}) {
    super(__spreadProps(__spreadValues({}, options), {
      name: "kostal-piko-mp-plus"
    }));
    this.refreshInterval = void 0;
    this.on("ready", this.onReady.bind(this));
    this.on("unload", this.onUnload.bind(this));
  }
  async onReady() {
    const states = import_StatesMapper.StatesMapper.states;
    this.setState("info.connection", false, true);
    this.log.debug("config.serverIp: " + this.config.serverIp);
    this.log.debug("config.interval: " + this.config.interval);
    const client = import_axios.default.create({
      baseURL: `${this.config.serverIp}`,
      timeout: 5e3,
      responseType: "text",
      responseEncoding: "utf8"
    });
    this.log.debug(`axios client with base url ${this.config.serverIp} created`);
    this.log.debug(`init fetch states`);
    await this.refreshMeasurements(client, states);
    this.refreshInterval = this.setInterval(async () => {
      await this.refreshMeasurements(client, states);
    }, this.config.interval);
  }
  async refreshMeasurements(client, states) {
    try {
      const { data, status } = await client.get("/measurements.xml");
      this.log.debug(`request to /measurements.xml with status ${status}`);
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
        this.log.error(`error message: ${error.message}`);
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
        if (s.type == "number") {
          value = Number(value);
        } else if (s.type == "string") {
          this.log.debug(`${s.id}:${value} - it is a string then it remains a string`);
        } else {
          this.log.error(`unknown cast type`);
        }
      }
      if (value !== void 0) {
        this.log.debug(`${s.id} has a value so we add this object with ${value} its ${typeof value}`);
        const common = {
          name: s.name,
          type: s.type,
          read: s.read,
          write: s.write,
          role: "state",
          unit: unit !== null ? unit : void 0
        };
        await this.setObjectNotExistsAsync(s.id, {
          type: "state",
          common,
          native: {}
        });
        await this.setStateAsync(s.id, { val: value, ack: true });
      } else {
        this.log.debug(`${s.id} has no value so we ignore it and we can delete it`);
        await this.delObjectAsync(s.id);
      }
    }
  }
  onUnload(callback) {
    try {
      this.clearInterval(this.refreshInterval);
      callback();
    } catch (e) {
      callback();
    }
  }
}
if (require.main !== module) {
  module.exports = (options) => new KostalPikoMpPlus(options);
} else {
  (() => new KostalPikoMpPlus())();
}
//# sourceMappingURL=main.js.map
