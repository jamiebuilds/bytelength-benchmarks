# bytelength-benchmarks

> Benchmarks for different methods of getting the byte length of a string

- `new Blob([input]).size`
- `Buffer.byteLength(input)`
- `new TextEncoder().encode(input).byteLength`

# `"Hello, World!"`

```sh
npm test
```
```txt
./benchmarks/blob.js:        189’870.1 ops/sec (±13’053.9, p=0.001, o=1/100)
./benchmarks/buffer.js:      55’378’294.8 ops/sec (±334’664.2, p=0.001, o=6/100) severe outliers=3
./benchmarks/textencoder.js: 2’742’465.9 ops/sec (±242’838.5, p=0.001, o=1/100)
```

# `"a".repeat(2 ** 29 - 24)`

```sh
INPUT=max npm test -- --samples 10
```
```txt
./benchmarks/blob.js:        4.4 ops/sec (±1.2, p=0.001, o=0/10)
./benchmarks/buffer.js:      53.8 ops/sec (±0.9, p=0.001, o=0/10)
./benchmarks/textencoder.js: 12.8 ops/sec (±0.2, p=0.001, o=0/10)
```
