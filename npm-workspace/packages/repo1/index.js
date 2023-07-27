'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.hasIn = void 0
function hasIn(object, key) {
  return object != null && key in Object(object)
}
exports.hasIn = hasIn
console.log('success!')
