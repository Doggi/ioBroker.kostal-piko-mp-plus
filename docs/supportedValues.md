![Logo](../admin/kostal-piko-mp-plus.png)

# ioBroker.kostal-piko-mp-plus

## Supported Values

| Id                             | Name                | Value Type | xPath Value                                                                  | xPath Unit                                                             |
| ------------------------------ | ------------------- | ---------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| device.busaddress              | Bus Address         | number     | /root/Device/@BusAddress                                                     | -                                                                      |
| device.countrypowerlimit       | Country Power Limit | number     | /root/Device/@CountryPowerLimit                                              | -                                                                      |
| device.datetime                | Date Time           | string     | /root/Device/@DateTime                                                       | -                                                                      |
| device.hmiplatform             | Hmi Platform        | string     | /root/Device/@HmiPlatform                                                    | -                                                                      |
| device.ipaddress               | Ip Address          | string     | /root/Device/@IpAddress                                                      | -                                                                      |
| device.manufacturerurl         | Manufacturer URL    | string     | /root/Device/@ManufacturerURL                                                | -                                                                      |
| device.milliseconds            | MilliSeconds        | number     | /root/Device/@MilliSeconds                                                   | -                                                                      |
| device.name                    | Name                | string     | /root/Device/@Name                                                           | -                                                                      |
| device.netbiosname             | Net Bios Name       | string     | /root/Device/@NetBiosName                                                    | -                                                                      |
| device.nominalpower            | Nominal Power       | number     | /root/Device/@NominalPower                                                   | -                                                                      |
| device.oemserial               | OEM Serial          | number     | /root/Device/@OEMSerial                                                      | -                                                                      |
| device.platform                | Platform            | string     | /root/Device/@Platform                                                       | -                                                                      |
| device.serial                  | Serial              | string     | /root/Device/@Serial                                                         | -                                                                      |
| device.type                    | Serial              | string     | /root/Device/@Type                                                           | -                                                                      |
| device.userpowerlimit          | UserPowerLimit      | number     | /root/Device/@UserPowerLimit                                                 | -                                                                      |
| device.webportal               | Web Portal          | string     | /root/Device/@WebPortal                                                      | -                                                                      |
| yields.total                   | Total Produced      | number     | /root/Device/Yields/Yield[@Type='Produced'][@slot='total']/YieldValue/@Value | /root/Device/Yields/Yield[@Type='Produced'][@slot='total']/@Unit       |
| measurements.acvoltage         | AC Voltage          | number     | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Value             | /root/Device/Measurements/Measurement[@Type='AC_Voltage']/@Unit        |
| measurements.accurrent         | AC Current          | number     | /root/Device/Measurements/Measurement[@Type='AC_Current']/@Value             | /root/Device/Measurements/Measurement[@Type='AC_Current']/@Unit        |
| measurements.acfrequency       | AC_Frequency        | number     | /root/Device/Measurements/Measurement[@Type='AC_Frequency']/@Value           | /root/Device/Measurements/Measurement[@Type='AC_Frequency']/@Unit      |
| measurements.acpower           | AC Power            | number     | /root/Device/Measurements/Measurement[@Type='AC_Power']/@Value               | /root/Device/Measurements/Measurement[@Type='AC_Power']/@Unit          |
| measurements.acpowerfast       | AC Power fast       | number     | /root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Value          | /root/Device/Measurements/Measurement[@Type='AC_Power_fast']/@Unit     |
| measurements.dcvoltage         | DC Voltage          | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage']/@Value             | /root/Device/Measurements/Measurement[@Type='DC_Voltage']/@Unit        |
| measurements.dcvoltage1        | DC Voltage 1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Value            | /root/Device/Measurements/Measurement[@Type='DC_Voltage1']/@Unit       |
| measurements.dcvoltage2        | DC Voltage 2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Value            | /root/Device/Measurements/Measurement[@Type='DC_Voltage2']/@Unit       |
| measurements.dccurrent         | DC Current          | number     | /root/Device/Measurements/Measurement[@Type='DC_Current']/@Value             | /root/Device/Measurements/Measurement[@Type='DC_Current']/@Unit        |
| measurements.dccurrent1        | DC Current 1        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current1']/@Value            | /root/Device/Measurements/Measurement[@Type='DC_Current1']/@Unit       |
| measurements.dccurrent2        | DC Current 2        | number     | /root/Device/Measurements/Measurement[@Type='DC_Current2']/@Value            | /root/Device/Measurements/Measurement[@Type='DC_Current2']/@Unit       |
| measurements.dcpower1          | DC Power 1          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power1']/@Value              | /root/Device/Measurements/Measurement[@Type='DC_Power1']/@Unit         |
| measurements.dcpower2          | DC Power 2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value              | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit         |
| measurements.dcpowertotal      | DC Power Total      | number     | /root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Value         | /root/Device/Measurements/Measurement[@Type='DC_Power Total']/@Unit    |
| measurements.temp              | Temp                | number     | /root/Device/Measurements/Measurement[@Type='Temp']/@Value                   | /root/Device/Measurements/Measurement[@Type='Temp']/@Unit              |
| measurements.linkvoltage       | LINK Voltage        | number     | /root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Value           | /root/Device/Measurements/Measurement[@Type='LINK_Voltage']/@Unit      |
| measurements.gridpower         | Grid Power          | number     | /root/Device/Measurements/Measurement[@Type='GridPower']/@Value              | /root/Device/Measurements/Measurement[@Type='GridPower']/@Unit         |
| measurements.gridconsumedpower | Grid Consumed Power | number     | /root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Value      | /root/Device/Measurements/Measurement[@Type='GridConsumedPower']/@Unit |
| measurements.gridinjectedpower | Grid Injected Power | number     | /root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Value      | /root/Device/Measurements/Measurement[@Type='GridInjectedPower']/@Unit |
| measurements.ownconsumedpower  | Own Consumed Power  | number     | /root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Value       | /root/Device/Measurements/Measurement[@Type='OwnConsumedPower']/@Unit  |
| measurements.derating          | Derating            | number     | /root/Device/Measurements/Measurement[@Type='Derating']/@Value               | /root/Device/Measurements/Measurement[@Type='Derating']/@Unit          |
| measurements.dcpower2          | DC Power 2          | number     | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Value              | /root/Device/Measurements/Measurement[@Type='DC_Power2']/@Unit         |
