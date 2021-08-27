import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs-extra');

export function simpleLog (filepath, msg) {
    fs.writeFile(filepath, msg);
};

export function simpleLogSync (filepath, msg) {
    fs.writeFileSync(filepath, msg);
};