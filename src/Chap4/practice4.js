/** eslint-disable no-new */
/** eslint-disable no-console */

new Promise((resolve, reject) => {
  console.log('Inside promise')
  reject(new Error('First reject')) // promise의 값을 reject로 결정
  // 자바스크립트는 call stack이 빌때까지 실행되므로 resolve도 실행됨
  // resolve 먼저 하면 promise의 값은 resolve가 됨
  resolve('First resolve')
})
  .catch((error) => {
    console.log('error', error)
  })
  .then((value) => {
    console.log('Inside first then')
    console.log('value', value)
  })

function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

returnPromiseForTimeout()
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout
  })
  .then((value) => {
    console.log(value)
    return returnPromiseForTimeout
  })

// promise 없이 짤 경우

setTimeout(() => {
  const value = Math.random()
  console.log(value)

  setTimeout(() => {
    const value = Math.random()
    console.log(value)

    setTimeout(() => {
      const value = Math.random()
      console.log(value)

      setTimeout(() => {
        const value = Math.random()
        console.log(value)
        setTimeout(() => {
          const value = Math.random()
          console.log(value)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
