var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var StatesMapper_exports = {};
__export(StatesMapper_exports, {
  StatesMapper: () => StatesMapper
});
module.exports = __toCommonJS(StatesMapper_exports);
class StatesMapper {
}
StatesMapper.states = [
  {
    xpathValue: "/root/Device/@BusAddress",
    id: "device.busaddress",
    name: "Bus Address",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@CountryPowerLimit",
    id: "device.countrypowerlimit",
    name: "Country Power Limit",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@DateTime",
    id: "device.datetime",
    name: "Date Time"
  },
  {
    xpathValue: "/root/Device/@HmiPlatform",
    id: "device.hmiplatform",
    name: "Hmi Platform"
  },
  {
    xpathValue: "/root/Device/@IpAddress",
    id: "device.ipaddress",
    name: "Ip Address"
  },
  {
    xpathValue: "/root/Device/@ManufacturerURL",
    id: "device.manufacturerurl",
    name: "Manufacturer URL"
  },
  {
    xpathValue: "/root/Device/@MilliSeconds",
    id: "device.milliseconds",
    name: "MilliSeconds",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@Name",
    id: "device.name",
    name: "Name"
  },
  {
    xpathValue: "/root/Device/@NetBiosName",
    id: "device.netbiosname",
    name: "Net Bios Name"
  },
  {
    xpathValue: "/root/Device/@NominalPower",
    id: "device.nominalpower",
    name: "Nominal Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@OEMSerial",
    id: "device.oemserial",
    name: "OEM Serial",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@Platform",
    id: "device.platform",
    name: "Platform"
  },
  {
    xpathValue: "/root/Device/@Serial",
    id: "device.serial",
    name: "Serial"
  },
  {
    xpathValue: "/root/Device/@Type",
    id: "device.type",
    name: "Serial"
  },
  {
    xpathValue: "/root/Device/@UserPowerLimit",
    id: "device.userpowerlimit",
    name: "UserPowerLimit",
    type: "number"
  },
  {
    xpathValue: "/root/Device/@WebPortal",
    id: "device.webportal",
    name: "Web Portal"
  },
  {
    xpathValue: "/root/Device/Yields/Yield[@Type='Produced'][@Slot='Total']/YieldValue/@Value",
    xpathUnit: "/root/Device/Yields/Yield[@Type='Produced'][@Slot='Total']/@Unit",
    id: "yields.total",
    name: "Total Produced",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit",
    id: "measurements.acvoltage",
    name: "AC Voltage",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Current']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Current']/@Unit",
    id: "measurements.accurrent",
    name: "AC Current",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Frequency']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Frequency']/@Unit",
    id: "measurements.acfrequency",
    name: "AC_Frequency",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Power']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Power']/@Unit",
    id: "measurements.acpower",
    name: "AC Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Unit",
    id: "measurements.acpowerfast",
    name: "AC Power fast",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Voltage']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Voltage']/@Unit",
    id: "measurements.dcvoltage",
    name: "DC Voltage",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Unit",
    id: "measurements.dcvoltage1",
    name: "DC Voltage 1",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Unit",
    id: "measurements.dcvoltage2",
    name: "DC Voltage 2",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Current']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Current']/@Unit",
    id: "measurements.dccurrent",
    name: "DC Current",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Current1']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Current1']/@Unit",
    id: "measurements.dccurrent1",
    name: "DC Current 1",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Current2']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Current2']/@Unit",
    id: "measurements.dccurrent2",
    name: "DC Current 2",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power1']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power1']/@Unit",
    id: "measurements.dcpower1",
    name: "DC Power 1",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit",
    id: "measurements.dcpower2",
    name: "DC Power 2",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Unit",
    id: "measurements.dcpowertotal",
    name: "DC Power Total",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='Temp']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='Temp']/@Unit",
    id: "measurements.temp",
    name: "Temp",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Unit",
    id: "measurements.linkvoltage",
    name: "LINK Voltage",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='GridPower']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridPower']/@Unit",
    id: "measurements.gridpower",
    name: "Grid Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Unit",
    id: "measurements.gridconsumedpower",
    name: "Grid Consumed Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Unit",
    id: "measurements.gridinjectedpower",
    name: "Grid Injected Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Unit",
    id: "measurements.ownconsumedpower",
    name: "Own Consumed Power",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='Derating']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='Derating']/@Unit",
    id: "measurements.derating",
    name: "Derating",
    type: "number"
  },
  {
    xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value",
    xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit",
    id: "measurements.dcpower2",
    name: "DC Power 2",
    type: "number"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StatesMapper
});
//# sourceMappingURL=StatesMapper.js.map
