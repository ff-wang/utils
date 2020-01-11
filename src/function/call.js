export default function call (fn,obj,...args){
  if (obj===undefined ||obj===null) {
    obj = window
  }
  //添加temfn函数
  obj.temfn = fn
  // 通过obj调用这个临时方法, 并将接收的参数传入
  const result = obj.temfn(...args)
  //删除temfn
  delete obj.temfn
  
  return result 
}