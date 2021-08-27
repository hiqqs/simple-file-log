import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs-extra');

export function simpleLog (filepath, msg) {
    fs.appendFile(filepath, msg);
};

export function simpleLogSync (filepath, msg) {
    fs.appendFile(filepath, msg);
};