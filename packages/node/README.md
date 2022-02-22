<div align="center">

# is-railway

**Check if the current process is running inside Railway.**

[![GitHub](https://img.shields.io/github/license/1chiSensei/is-railway)](https://github.com/1chiSensei/is-railway/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/is-railway?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/is-railway)

</div>

**Table of Contents**

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Basic Usage](#basic-usage)
    -   [CLI](#cli)
-   [Contributors ✨](#contributors-%E2%9C%A8)

## Features

-   Written in Typescript
-   Offers CommonJS and ESM bundles

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.
```sh
npm install is-railway
```

Or installing as a CLI:
```sh
npm install --global is-railway
```

## Usage

**Note:** When using as a CLI, it exits with code 0 if running in Railway and 2 if not.

### Basic Usage

```javascript
const isRunning = require('is-railway');

console.log(isRunning())
```

### CLI

```sh
$ is-railway
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/1chiSensei"><img src="https://avatars.githubusercontent.com/u/75403863?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomio</b></sub></a><br /><a href="https://github.com/1chiSensei/is-railway/commits?author=1chiSensei" title="Code">💻</a> <a href="https://github.com/1chiSensei/is-railway/commits?author=1chiSensei" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
