// 语法: var newArray = concat(oldArr, value1[, value2[, ...[, valueN]]]) 
// 功能: 将n个数组或值与当前数组合并生成一个新数组
export function concat(array,...values){
  const arr = [...array]
  values.forEach(item=>{
    if(Array.isArray(item)){
      arr.push(...item)
    }else{
      arr.push(item)
    }
  })
  return arr
}