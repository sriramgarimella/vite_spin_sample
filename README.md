# vite_spin_sample
This is a sample project to convert a Vite app to WASM campatible

## steps
1. Create a Vite basic template application
2. Installed Spin releated dependencies from https://developer.fermyon.com/spin/v2/install#:~:text=Simply%20unzip%20the%20binary%20release,the%20instructions%20for%20using%20Linux.
    2.1 Spin Tool
    2.2 Js2wasm plugin
3. create spin.toml file with the application specific details & routing
4. update package.json to add a new compilation target "spin-build"
    4.1 compile the source to create the target fuiles in dist/asset folder
    4.2 create a Target folder which holds the geneated wasm file
    4.3 run the "spin js2wasm" command with the targetted output and input files

## Expected
convert the application to webassembly which is optimized and performant to run in browser

## Problem

npm run spin-build

> vite_spin_sample@0.0.0 spin-build
> vite build && npx mkdirp Target && spin js2wasm -o target/vite_spin_sample.wasm dist/spin/application-entry.js

vite v5.2.12 building for production...
✓ 34 modules transformed.
dist/spin/index.html                0.45 kB │ gzip:  0.28 kB
dist/spin/application-asset2.css    1.39 kB │ gzip:  0.72 kB
dist/spin/application-asset.css     4.13 kB │ gzip:  2.05 kB
dist/spin/application-entry.js    143.36 kB │ gzip: 46.09 kB
✓ built in 2.80s

Starting to build Spin compatible module
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Uncaught ReferenceError: 'document' is not defined
    at <anonymous> (script.js)
    at <eval> (script.js:1)
', crates\spin-js-engine\src\lib.rs:1306:15
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
Error: the `wizer.initialize` function trapped

Caused by:
    0: error while executing at wasm backtrace:
           0: 0x1285ca - <unknown>!__rust_start_panic
           1: 0x127f4b - <unknown>!rust_panic
           2: 0x127f26 - <unknown>!std::panicking::rust_panic_with_hook::hd084a40442e42af7
           3: 0x12728c - <unknown>!std::panicking::begin_panic_handler::{{closure}}::h7b63d0dbcdd5afd8
           4: 0x1271b9 - <unknown>!std::sys_common::backtrace::__rust_end_short_backtrace::h1c8caee1545e21bb
           5: 0x12783c - <unknown>!rust_begin_unwind
           6: 0x137a00 - <unknown>!core::panicking::panic_fmt::hbc45cade774fd748
           7: 0x13e8ec - <unknown>!core::result::unwrap_failed::h75b87e1db5b0a6ed
           8: 0x36a2f - <unknown>!wizer.initialize
       note: using the `WASMTIME_BACKTRACE_DETAILS=1` environment variable may show more debugging information
    1: wasm trap: wasm `unreachable` instruction executed
Error: Couldn't create wasm from input


