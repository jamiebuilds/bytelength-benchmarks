"use strict"
// References:
// - https://android.googlesource.com/platform/system/core/+/5783dea0650e96f4b58997d62705f984a12b1e78/libutils/Unicode.cpp
// - https://github.com/mathiasbynens/utf8.js/blob/2ce09544b62f2a274dbcd249473c0986e3660849/utf8.js
// - https://github.com/foliojs/restructure/blob/6bf7ad9f3e9e6e0bb94f6b78681eeb4d5af5c189/src/String.js#L114
// - https://en.wikipedia.org/wiki/UTF-16
let UTF8_MAX_1_BYTE = 0x80
let UTF8_MAX_2_BYTE = 0x800
// let UTF8_MAX_3_BYTE = 0x10000
let UTF16_HIGH_SURROGATE_RANGE_MIN = 0xD800
let UTF16_HIGH_SURROGATE_RANGE_MAX = 0xDBFF
let UTF16_LOW_SURROGATE_RANGE_MIN = 0xDC00
let UTF16_LOW_SURROGATE_RANGE_MAX = 0xDFFF
function isHighSurrogate(charCode) {
  return charCode >= UTF16_HIGH_SURROGATE_RANGE_MIN && charCode <= UTF16_HIGH_SURROGATE_RANGE_MAX
}
function isLowSurrogate(charCode) {
  return charCode >= UTF16_LOW_SURROGATE_RANGE_MIN && charCode <= UTF16_LOW_SURROGATE_RANGE_MAX
}
function codePointToUtf8ByteCount(codePoint) {
  if (codePoint < UTF8_MAX_1_BYTE) return 1
  if (codePoint < UTF8_MAX_2_BYTE) return 2
  return 3
  // if (codePoint < UTF8_MAX_3_BYTE) return 3
  // return 4 // will never reach this point because we handle surrogates separately.
}
module.exports = (input) => {
  let total = 0
  let cursor = 0
  while (cursor < input.length) {
    let high = input.charCodeAt(cursor++)
    if (isHighSurrogate(high)) {
      let low = input.charCodeAt(cursor++)
      if (isLowSurrogate(low)) {
        total += 4 // surrogate pairs are always 4 bytes.
      } else {
        cursor-- // unmatched surrogate
        total += 3 // lone high surrogate is always 3 bytes.
      }
    } else {
      total += codePointToUtf8ByteCount(high)
    }
  }
  return total
}
