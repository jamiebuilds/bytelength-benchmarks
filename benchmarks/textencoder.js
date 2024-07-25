"use strict"
let input = require("../input")
let encoder = new TextEncoder()
module.exports = () => {
  return encoder.encode(input).byteLength
}
