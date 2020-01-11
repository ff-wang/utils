export function throttle(callback,delay) {
  let pre = 0
  return function (event) {
    const current = Date.now()
    if (current - pre  > delay) { //当前时间与上一次调用时间大于delay，可执行
      callback.call(this,event) //this为事件源
      pre = current //记录此次调用的时间
    }
  }
}