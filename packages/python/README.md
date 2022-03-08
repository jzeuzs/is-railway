<div align="center">

# is-railway

**Check if the current process is running inside Railway.**

[![GitHub](https://img.shields.io/github/license/1chiSensei/is-railway)](https://github.com/1chiSensei/is-railway/blob/main/LICENSE)
[![crates.io](https://img.shields.io/crates/v/is-railway?color=orange&logo=rust&style=flat-square)](https://crates.io/crates/is-railway)

</div>

**Table of Contents**

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Basic Usage](#basic-usage)
    -   [CLI](#cli)
-   [Contributors ✨](#contributors-%E2%9C%A8)

## Features

-   Written in Rust
-   Fast and lightweight
-   Uses no dependencies

## Installation

You can use the following command to install this package.
```sh
cargo install is-railway
```

Or as a dependency.
```toml
# Cargo.toml

[dependencies]
is-railway = "1.0.1"
```

## Usage

**Note:** When using as a CLI, it exits with code 0 if running in Railway and 2 if not.

### Basic Usage

```rust
use is_railway::check;

fn main() {
    let is_running_on_railway = check();

    println!("{}", is_running_on_railway);
}
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
