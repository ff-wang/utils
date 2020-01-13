// 1. difference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
// 如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]
export function difference(arr1,arr2){
  if(arr1.length===0){
    return []
  }else if(arr2.length===0){
    return [...arr1]
  }
  const arr = []
  return arr1.filter(item=>arr.indexOf(item)===-1)
}

export function differences(arr1,...arrs){
  if(arr1.length===0){
    return []
  }else if(arrs.length===0){
    return [...arr1]
  }
  return arr1.filter(item=>{
    let result = true
    for(let index=0;index < arrs.length;index++){
      const array = arrs[index]
      if(array.indexOf(item)!==-1) {//数组中有arr1中的值
        result = false
        break
      }
    }
    return result
  })
}