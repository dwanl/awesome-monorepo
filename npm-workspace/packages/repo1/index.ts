export function hasIn(object: object, key: string) {
  return object != null && key in Object(object)
}
console.log('success!')
