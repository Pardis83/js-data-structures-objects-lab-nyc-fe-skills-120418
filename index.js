// Write your solution in this file!
const driver={}
  function updateDriverWithKeyAndValue(driver, key, value) {
  let copyDriver={...driver}
  copyDriver[key] = value
  return copyDriver
}
function function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) 