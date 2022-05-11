import { State } from "./lib/State";

export class StatesMapper {
    static states: State[] = [
        {
            xpathValue: "/root/Device/@BusAddress",
            id: "device.busaddress",
            name: "Bus Address",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@CountryPowerLimit",
            id: "device.countrypowerlimit",
            name: "Country Power Limit",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@DateTime",
            id: "device.datetime",
            name: "Date Time",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@HmiPlatform",
            id: "device.hmiplatform",
            name: "Hmi Platform",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@IpAddress",
            id: "device.ipaddress",
            name: "Ip Address",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@ManufacturerURL",
            id: "device.manufacturerurl",
            name: "Manufacturer URL",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@MilliSeconds",
            id: "device.milliseconds",
            name: "MilliSeconds",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@Name",
            id: "device.name",
            name: "Name",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@NetBiosName",
            id: "device.netbiosname",
            name: "Net Bios Name",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@NominalPower",
            id: "device.nominalpower",
            name: "Nominal Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@OEMSerial",
            id: "device.oemserial",
            name: "OEM Serial",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@Platform",
            id: "device.platform",
            name: "Platform",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@Serial",
            id: "device.serial",
            name: "Serial",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@Type",
            id: "device.type",
            name: "Serial",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@UserPowerLimit",
            id: "device.userpowerlimit",
            name: "UserPowerLimit",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/@WebPortal",
            id: "device.webportal",
            name: "Web Portal",
            type: "string",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit",
            id: "measurements.acvoltage",
            name: "AC Voltage",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Current']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Current']/@Unit",
            id: "measurements.accurrent",
            name: "AC Current",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit",
            id: "measurements.acvoltage",
            name: "AC_Voltage",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Power']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Power']/@Unit",
            id: "measurements.acpower",
            name: "AC Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Unit",
            id: "measurements.acpowerfast",
            name: "AC Power fast",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Unit",
            id: "measurements.dcvoltage1",
            name: "DC Voltage 1",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Unit",
            id: "measurements.dcvoltage2",
            name: "DC Voltage 2",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Current1']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Current1']/@Unit",
            id: "measurements.dccurrent1",
            name: "DC Current 1",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Current2']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Current2']/@Unit",
            id: "measurements.dccurrent2",
            name: "DC Current 1",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power1']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power1']/@Unit",
            id: "measurements.dcpower2",
            name: "DC Power 1",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit",
            id: "measurements.dcpower2",
            name: "DC Power 2",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Unit",
            id: "measurements.dcpowertotal",
            name: "DC Power Total",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='Temp']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='Temp']/@Unit",
            id: "measurements.temp",
            name: "Temp",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Unit",
            id: "measurements.linkvoltage",
            name: "LINK Voltage",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='GridPower']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridPower']/@Unit",
            id: "measurements.gridpower",
            name: "Grid Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Unit",
            id: "measurements.gridconsumedpower",
            name: "Grid Consumed Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Unit",
            id: "measurements.gridinjectedpower",
            name: "Grid Injected Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Unit",
            id: "measurements.ownconsumedpower",
            name: "Own Consumed Power",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='Derating']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='Derating']/@Unit",
            id: "measurements.derating",
            name: "Derating",
            type: "number",
            read: true,
            write: false,
        },
        {
            xpathValue: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value",
            xpathUnit: "/root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit",
            id: "measurements.dcpower2",
            name: "DC Power 2",
            type: "number",
            read: true,
            write: false,
        },
    ];
}