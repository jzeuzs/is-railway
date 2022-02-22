use is_railway::check;
use std::process::exit;

fn main() {
    let is = check();

    match is {
        true => exit(0),
        false => exit(2),
    }
}
