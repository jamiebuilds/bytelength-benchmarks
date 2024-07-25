"use strict"
let input
if (process.env.INPUT === "max") {
  input = "a".repeat(2 ** 29 - 24)
} else if (process.env.INPUT === "emojis") {
  input = require("./emojis")()
} else {
  input = "Hello, World!"
}
module.exports = input
