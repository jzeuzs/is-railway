# is-railway (Node.js)

> Check if the current process is running inside Railway

## Install

```sh
$ npm install is-railway
```

## Usage

```js
'use strict';

const isRailway = require('is-railway');

if (isRailway()) console.log('Running in railway.');
```

## CLI

```sh
$ is-railway
```

Exits with code 0 if running in Railway and 2 if not.
