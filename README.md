# simple-file-log
simple node.js logger. create an appending log to any file path or type

[![NPM](https://img.shields.io/npm/v/simple-file-log.svg?logo=npm&color=white&style=plastic)](https://www.npmjs.com/package/simple-file-log)
[![Downloads/week](https://img.shields.io/npm/dw/releasetrain.svg?logo=apache-rocketmq&color=gold&style=plastic)](https://www.npmjs.com/package/simple-file-log)


# Install
`npm i simple-file-log`

# Example Usage

```
// ES6 import simple log or commonjs const simpleLog = require('simple-file-log');

import { simpleLog } from 'simple-file-log';

// call simpleLog with your file path, name, and file type ie: .log, json, txt etc, followed by what you want to append to the log

simpleLog('./logs/simple-file.log', 'simple file log r0x your s0x!);
```
