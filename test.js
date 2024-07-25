"use strict"
let implementation = require("./implementation")
let emojis = require("./emojis")()

function testString(input) {
  let a = implementation(input)
  let b = Buffer.byteLength(input)
  let c = new Blob([input]).size
  if (a !== b || a !== c) {
    console.log(`${a} vs ${b} vs ${c} for ${input}`)
  }
}

function testCodePoint(i) {
  let input = String.fromCodePoint(i)
  let a = implementation(input)
  let b = Buffer.byteLength(input)
  let c = new Blob([input]).size
  if (a !== b || a !== c) {
    console.log(`${a} vs ${b} vs ${c} for ${i}`)
  }
}

testString("a")
testString("ab")
testString("¢")
testString("¢")
testString("👩")
testString("👩🏾‍🌾")
testString(emojis)

// Brute force test
for (let i = 0; i < 0x10ffff; i++) {
  testCodePoint(i)
}
