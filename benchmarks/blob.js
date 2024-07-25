"use strict"
let input = require("../input")
module.exports = () => {
  return new Blob([input]).size
}
