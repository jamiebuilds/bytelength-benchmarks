# bytelength-benchmarks

> Benchmarks for different methods of getting the byte length of a string

- `new Blob([input]).size`
- `Buffer.byteLength(input)`
- `new TextEncoder().encode(input).byteLength`
- [JavaScript implementation](./implementation.js)

# `"Hello, World!"`

```sh
npm test
```
```txt
./benchmarks/blob.js:           202’345.0 ops/sec (±13’993.9, p=0.001, o=0/100)
./benchmarks/buffer.js:         57’434’701.2 ops/sec (±425’763.3, p=0.001, o=9/100) severe outliers=5
./benchmarks/implementation.js: 48’441’909.6 ops/sec (±397’249.6, p=0.001, o=5/100) severe outliers=2
./benchmarks/textencoder.js:    2’667’052.4 ops/sec (±564’727.5, p=0.001, o=6/100) severe outliers=2
```

# `"a".repeat(2 ** 29 - 24)`

```sh
INPUT=max npm test -- --samples 10
```
```txt
./benchmarks/blob.js:           4.8 ops/sec (±0.1, p=0.001, o=0/10)
./benchmarks/buffer.js:         54.5 ops/sec (±3.0, p=0.001, o=0/10)
./benchmarks/implementation.js: 0.7 ops/sec (±0.0, p=0.001, o=0/10)
./benchmarks/textencoder.js:    11.9 ops/sec (±1.0, p=0.001, o=0/10)
```
