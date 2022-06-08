![Logo](../admin/kostal-piko-mp-plus.png)

# ioBroker.kostal-piko-mp-plus

## Supported Values

| Name                | Id                             | Value Type | xPath Value                                                             | xPath Unit                                                             |
| ------------------- | ------------------------------ | ---------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Bus Address         | device.busaddress              | number     | /root/Device/@BusAddress                                                | -                                                                      |
| Country Power Limit | device.countrypowerlimit       | number     | /root/Device/@CountryPowerLimit                                         | -                                                                      |
| Date Time           | device.datetime                | string     | /root/Device/@DateTime                                                  | -                                                                      |
| Hmi Platform        | device.hmiplatform             | string     | /root/Device/@HmiPlatform                                               | -                                                                      |
| Ip Address          | device.ipaddress               | string     | /root/Device/@IpAddress                                                 | -                                                                      |
| Manufacturer URL    | device.manufacturerurl         | string     | /root/Device/@ManufacturerURL                                           | -                                                                      |
| MilliSeconds        | device.milliseconds            | number     | /root/Device/@MilliSeconds                                              | -                                                                      |
| Name                | device.name                    | string     | /root/Device/@Name                                                      | -                                                                      |
| Net Bios Name       | device.netbiosname             | string     | /root/Device/@NetBiosName                                               | -                                                                      |
| Nominal Power       | device.nominalpower            | number     | /root/Device/@NominalPower                                              | -                                                                      |
| OEM Serial          | device.oemserial               | number     | /root/Device/@OEMSerial                                                 | -                                                                      |
| Platform            | device.platform                | string     | /root/Device/@Platform                                                  | -                                                                      |
| Serial              | device.serial                  | string     | /root/Device/@Serial                                                    | -                                                                      |
| Serial              | device.type                    | string     | /root/Device/@Type                                                      | -                                                                      |
| UserPowerLimit      | device.userpowerlimit          | number     | /root/Device/@UserPowerLimit                                            | -                                                                      |
| Web Portal          | device.webportal               | string     | /root/Device/@WebPortal                                                 | -                                                                      |
| AC Voltage          | measurements.acvoltage         | number     | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value        | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit        |
| AC Current          | measurements.accurrent         | number     | /root/Device/Measurements/Measurement[@Type='AC_Current']/@Value        | /root/Device/Measurements/Measurement[@Type='AC_Current']/@Unit        |
| AC_Voltage          | measurements.acvoltage         | number     | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value        | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit        |
| AC Power            | measurements.acpower           | number     | /root/Device/Measurements/Measurement[@Type='AC_Power']/@Value          | /root/Device/Measurements/Measurement[@Type='AC_Power']/@Unit          |
| AC Power fast       | measurements.acpowerfast       | number     | /root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Value     | /root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Unit     |
| DC Voltage 1        | measurements.dcvoltage1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Value       | /root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Unit       |
| DC Voltage 2        | measurements.dcvoltage2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Value       | /root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Unit       |
| DC Current 1        | measurements.dccurrent1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current1']/@Value       | /root/Device/Measurements/Measurement[@Type='DC_Current1']/@Unit       |
| DC Current 2        | measurements.dccurrent2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current2']/@Value       | /root/Device/Measurements/Measurement[@Type='DC_Current2']/@Unit       |
| DC Power 1          | measurements.dcpower1          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power1']/@Value         | /root/Device/Measurements/Measurement[@Type='DC_Power1']/@Unit         |
| DC Power 2          | measurements.dcpower2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value         | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit         |
| DC Power Total      | measurements.dcpowertotal      | number     | /root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Value    | /root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Unit    |
| Temp                | measurements.temp              | number     | /root/Device/Measurements/Measurement[@Type='Temp']/@Value              | /root/Device/Measurements/Measurement[@Type='Temp']/@Unit              |
| LINK Voltage        | measurements.linkvoltage       | number     | /root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Value      | /root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Unit      |
| Grid Power          | measurements.gridpower         | number     | /root/Device/Measurements/Measurement[@Type='GridPower']/@Value         | /root/Device/Measurements/Measurement[@Type='GridPower']/@Unit         |
| Grid Consumed Power | measurements.gridconsumedpower | number     | /root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Value | /root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Unit |
| Grid Injected Power | measurements.gridinjectedpower | number     | /root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Value | /root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Unit |
| Own Consumed Power  | measurements.ownconsumedpower  | number     | /root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Value  | /root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Unit  |
| Derating            | measurements.derating          | number     | /root/Device/Measurements/Measurement[@Type='Derating']/@Value          | /root/Device/Measurements/Measurement[@Type='Derating']/@Unit          |
| DC Power 2          | measurements.dcpower2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value         | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit         |
