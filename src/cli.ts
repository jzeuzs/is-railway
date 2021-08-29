#!/usr/bin/env node

import isRailway from '.';
import updateNotifier from 'update-notifier';

// Disabled this rule because we cant import the package.json file because typescript complains
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

updateNotifier({ pkg }).notify();
process.exitCode = isRailway() ? 0 : 2;
