export function debounce(callback,delay) {
  return function (event) {
    if (callback.hasOwnProperty('timer')) {
      clearTimeout(callback.timer)
    }
    callback.timer = setTimeout(() => {
      callback.call(this,event) //this为事件源
      delete callback.timer
    }, delay)
  }
}