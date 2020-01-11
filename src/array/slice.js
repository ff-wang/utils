export function slice(array,beg,end){
  const arr = []

  // 若原数组是空数组，则返回
  if(array.length ===0){
    return arr
  }
  // 若没有传beg,end
  beg = beg || 0
  end = end || array.length

  if(beg<0){
    beg = 0
  }
  if(end > array.length){
    end = array.length
  }
  for(let index = beg; index<end;index++){
    arr.push(array[index])
  }
  return arr
}