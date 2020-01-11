import call from './call'
export function bind (fn,obj,...args){
  return (...args2) =>{
    // 调用原来的函数 this指向obj
    return call(fn,obj,...args,...args2)
  }
}
