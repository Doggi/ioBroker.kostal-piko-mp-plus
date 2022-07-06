![Logo](admin/kostal-piko-mp-plus.png)

# ioBroker.kostal-piko-mp-plus

[![NPM version](https://img.shields.io/npm/v/iobroker.kostal-piko-mp-plus.svg)](https://www.npmjs.com/package/iobroker.kostal-piko-mp-plus)
[![Downloads](https://img.shields.io/npm/dm/iobroker.kostal-piko-mp-plus.svg)](https://www.npmjs.com/package/iobroker.kostal-piko-mp-plus)
![Number of Installations](https://iobroker.live/badges/kostal-piko-mp-plus-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/kostal-piko-mp-plus-stable.svg)
[![Dependency Status](https://img.shields.io/david/Doggi/iobroker.kostal-piko-mp-plus.svg)](https://david-dm.org/Doggi/iobroker.kostal-piko-mp-plus)
[![NPM](https://nodei.co/npm/iobroker.kostal-piko-mp-plus.png?downloads=true)](https://nodei.co/npm/iobroker.kostal-piko-mp-plus/)
![Test and Release](https://github.com/Doggi/ioBroker.kostal-piko-mp-plus/workflows/Test%20and%20Release/badge.svg)

## kostal-piko-mp-plus adapter for ioBroker

This adapter uses the XML interface of your Kostal PIKO MP PV system and provides the device information as well as the measured values.

## Installation

Please use the "adapter list" in ioBroker to install a stable version of this adapter. You can also use the CLI to install this adapter:

```
iobroker add kostal-piko-mp-plus
```

## Documentation

[🇺🇸 Documentation](./docs/en/basics.md)

[🇩🇪 Dokumentation](./docs/de/basics.md)

## Supported values

[Supported Values](./docs/supportedValues.md)

## Developer manual

The device information and measured values are provided by the XML interface `http://host/all.xml`.

[XML Data interfaces description](https://www.kostal-solar-electric.com/en-gb/products/hybrid-inverter/piko-mp-plus/-/media/document-library-folder---kse/2021/02/17/15/19/ba-protocol_piko-mp-plus_en.pdf)

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->

### **WORK IN PROGRESS**

### 0.0.4 (2022-07-06)

-   (Doggi) Retries in case of error added with setting option
-   (Doggi) set connection status to false when response code isnt 200
-   (Doggi) log message "refreshing states" now in debug log
-   (ekoschmi) adding support for Piko 1.5-1 MP Plus
-   (ekoschmi) adding Yield State (total produced)
-   (ekoschmi) resetting fail count on successful connection

### 0.0.3 (2022-06-08)

-   (Doggi) switch interval to timeout
-   (Doggi) deleting from states without values are removed

### 0.0.2 (2022-06-06)

-   (Doggi) update docs
-   (Doggi) change admin config - use now select instead of text input for protocol
-   (Doggi) change api endpoint to all.xml (before measurements.xml)
-   (Doggi) remove Adapter Check warnings
-   (dependabot[bot]) Bump typescript from 4.5.5 to 4.7.2
-   (dependabot[bot]) Bump @iobroker/adapter-react from 2.0.22 to 2.1.0
-   (dependabot[bot]) Bump ts-node from 10.7.0 to 10.8.0 (#2)
-   (dependabot[bot]) Bump @typescript-eslint/eslint-plugin from 5.22.0 to 5.27.0 (#3)
-   (Doggi) fixed state names
-   (Doggi) Settings separated
-   (Doggi) add Server Ip validation
-   (Doggi) Init refresh states
-   (Doggi) removed admin/src from npm lint command
-   (Doggi) Admin 4 UI with no support
-   (Doggi) emove admin code. because we use jsonConfig.js
-   (Doggi) move gimp file to admin folder
-   (Doggi) changed email
-   (Doggi) remove "Test the adapter manually with dev-server"
-   (Doggi) implement polling xml api & create/update state
-   (Doggi) added states mapper and state interface
-   (Doggi) add wip comment
-   (Doggi) define default values for options
-   (Doggi) add gimp logo file
-   (Doggi) change logo
-   (Doggi) add test/, src/, tsconfig.json, tsconfig.build.json, to .npmignore
-   (Doggi) add .npmignore
-   (Doggi) add options and translation
-   (dependabot[bot]) Bump @types/react-dom from 17.0.16 to 18.0.3
-   (Doggi) change repository url to https
-   (Doggi) remove get started from readme
-   (Doggi) initial release

## License

MIT License

Copyright (c) 2022 Doggi <soeren707@freenet.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
