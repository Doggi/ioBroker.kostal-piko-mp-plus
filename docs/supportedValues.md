![Logo](../admin/kostal-piko-mp-plus.png)

# ioBroker.kostal-piko-mp-plus

## Supported Values

| Name                | Id                             | Value Type | xPath                                                                   |
| ------------------- | ------------------------------ | ---------- | ----------------------------------------------------------------------- |
| Bus Address         | device.busaddress              | number     | /root/Device/@BusAddress                                                |
| Country Power Limit | device.countrypowerlimit       | number     | /root/Device/@CountryPowerLimit                                         |
| Date Time           | device.datetime                | string     | /root/Device/@DateTime                                                  |
| Hmi Platform        | device.hmiplatform             | string     | /root/Device/@HmiPlatform                                               |
| Ip Address          | device.ipaddress               | string     | /root/Device/@IpAddress                                                 |
| Manufacturer URL    | device.manufacturerurl         | string     | /root/Device/@ManufacturerURL                                           |
| MilliSeconds        | device.milliseconds            | number     | /root/Device/@MilliSeconds                                              |
| Name                | device.name                    | string     | /root/Device/@Name                                                      |
| Net Bios Name       | device.netbiosname             | string     | /root/Device/@NetBiosName                                               |
| Nominal Power       | device.nominalpower            | number     | /root/Device/@NominalPower                                              |
| OEM Serial          | device.oemserial               | number     | /root/Device/@OEMSerial                                                 |
| Platform            | device.platform                | string     | /root/Device/@Platform                                                  |
| Serial              | device.serial                  | string     | /root/Device/@Serial                                                    |
| Serial              | device.type                    | string     | /root/Device/@Type                                                      |
| UserPowerLimit      | device.userpowerlimit          | number     | /root/Device/@UserPowerLimit                                            |
| Web Portal          | device.webportal               | string     | /root/Device/@WebPortal                                                 |
| AC Voltage          | measurements.acvoltage         | number     | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value        |
| AC Current          | measurements.accurrent         | number     | /root/Device/Measurements/Measurement[@Type='AC_Current']/@Value        |
| AC_Voltage          | measurements.acvoltage         | number     | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value        |
| AC Power            | measurements.acpower           | number     | /root/Device/Measurements/Measurement[@Type='AC_Power']/@Value          |
| AC Power fast       | measurements.acpowerfast       | number     | /root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Value     |
| DC Voltage 1        | measurements.dcvoltage1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Value       |
| DC Voltage 2        | measurements.dcvoltage2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Value       |
| DC Current 1        | measurements.dccurrent1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current1']/@Value       |
| DC Current 2        | measurements.dccurrent2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current2']/@Value       |
| DC Power 1          | measurements.dcpower1          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power1']/@Value         |
| DC Power 2          | measurements.dcpower2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value         |
| DC Power Total      | measurements.dcpowertotal      | number     | /root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Value    |
| Temp                | measurements.temp              | number     | /root/Device/Measurements/Measurement[@Type='Temp']/@Value              |
| LINK Voltage        | measurements.linkvoltage       | number     | /root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Value      |
| Grid Power          | measurements.gridpower         | number     | /root/Device/Measurements/Measurement[@Type='GridPower']/@Value         |
| Grid Consumed Power | measurements.gridconsumedpower | number     | /root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Value |
| Grid Injected Power | measurements.gridinjectedpower | number     | /root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Value |
| Own Consumed Power  | measurements.ownconsumedpower  | number     | /root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Value  |
| Derating            | measurements.derating          | number     | /root/Device/Measurements/Measurement[@Type='Derating']/@Value          |
| DC Power 2          | measurements.dcpower2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value         |
