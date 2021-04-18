// 深拷贝
const deepClone = function (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}
// 数组去重
const unique = function (arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  return Array.from(new Set(arr))
}
// 根据开始结束位置查找字符
const findText = function (str, begin, end) {
  return str.substr(begin, end - begin)
}

// base64转file
const dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

// 对象根据value值排序
const objvalueSort = function (obj) {
  var keyArr = []
  var valArr = []
  for (var key in obj) {
    keyArr.push(key)
    valArr.push(obj[key])
  }
  for (var i = 0, len = valArr.length; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      var keyTemp, valTemp
      if (valArr[j] < valArr[j + 1]) {
        valTemp = valArr[j]
        valArr[j] = valArr[j + 1]
        valArr[j + 1] = valTemp
        keyTemp = keyArr[j]
        keyArr[j] = keyArr[j + 1]
        keyArr[j + 1] = keyTemp
      }
    }
  }
  var newobj = {}
  for (let i = 0; i < valArr.length; i++) {
    newobj['' + keyArr[i] + ''] = valArr[i]
  }
  return newobj
}
// 防抖
const debounce = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\*\.\$\!\^_#@&])[A-Za-z\d\*\.\$\!\^_#@&]{8,256}$/
const passwordMsg = 'At least 8 characters and should contain number, uppercase and lower case letters and some special characters of ! @ # $ ^ & * . _ '

export { deepClone, unique, objvalueSort, debounce, dataURLtoBlob, passwordReg, passwordMsg, findText }
