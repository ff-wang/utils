//  pull(array, ...values): 
// 删除数组中与value相同的元素, 返回所有删除元素的数组
// 说明: 数组发生了改变
// 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]
export function full(array,...vlaues){
  const result = []
  array.forEach((item,index)=>{
    if(values.indexOf(item)!==-1){
      array.splice(index,1)
      result.push(item)
    }
  })
}

export function fullAll(){

}