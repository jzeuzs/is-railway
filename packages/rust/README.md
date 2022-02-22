# is-railway (Rust)

> Check if the current process is running inside Railway

## Install

> CLI:

```sh
$ cargo install is-railway
```

> As a dependency:

```toml
# Cargo.toml

[dependencies]
is-railway = "1.0.0"
```

## Usage

```rs
use is_railway::check;

fn main() {
    let is_running = check();

    println!(is_running);
}
```

## CLI

```sh
$ is-railway
```

Exits with code 0 if running in Railway and 2 if not.
