#!/usr/bin/env node

import isRailway from '.';

process.exitCode = isRailway() ? 0 : 2;
