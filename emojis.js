"use strict"
module.exports = () => {
  // Source: https://gist.github.com/liquidx/0eef9275131b3d27d1750ff13da5be89
  let emojis = ''
  let ranges = [
    [0x261D, 0x261D],
    [0x270A, 0x270D],
    [0x1F300, 0x1F320],
    [0x1F324, 0x1F4FF],
    [0x1F500, 0x1F53D],
    [0x1F549, 0x1F579],
    [0x1F57A, 0x1F57A],
    [0x1F590, 0x1F590],
    [0x1F595, 0x1F596],
    [0x1f600, 0x1F6D2],
    [0x1F910, 0x1F94C],
    [0x1F950, 0x1F9E6],
  ]
  for (let [min, max] of ranges) {
    for (let codePoint = min; codePoint < max; codePoint++) {
      emojis += String.fromCodePoint(codePoint)
    }
  }
  return emojis
}
