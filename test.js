import { simpleLog, simpleLogSync } from './index.js';

simpleLog('logs/simple-log.txt', 'testing simple log');
simpleLogSync('logs/simple-log-sync.txt', 'testing simple log');