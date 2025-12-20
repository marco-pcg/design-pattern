mod adaptee;
mod adapter;
mod target;

use adaptee::SpecificTarget;
use adapter::TargetAdapter;
use target::{OrdinaryTarget, Target};

fn call(target: impl Target) {
    pritnln!("'{}'", target.request())
}

fn main() {
    let target = OrdinaryTarget;

    print!("A compatible target can be directly called:");
    call(target)

    let adaptee = SpecificTarget;

    pritnln!(
        "Adaptee is incompatible with client: '{}'",
        adaptee.specific_request()
    );

    let adapter = TargetAdapter::new(adaptee);

    print!("But with adapter client can call its method: ");
    call(adapter);
}