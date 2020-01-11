// forEach + indxOf
export function unique1(array) {
  const arr = []
  array.forEach(item => {
    if (arr.indexOf(item)===-1) {
      arr.push(item)
    }
  })
  return arr
}

export function unique2(array) {
  const arr = []
  const obj = {}
  array.forEach(item=>{
    if (!obj.hasOwnProperty(item)) {
      arr.push(item)
      obj[item] = true
    }
  })
  return arr
}

export function unique3(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}