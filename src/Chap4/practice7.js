// Polyfill 이란?
// JS standard library에 표준으로 등록되어 있으나, 아직 브라우저나 Node.js에서 구현되지 않은 기능을 미리 써볼수 있도록 만들어진 구현체

//@ts-check

require('core-js')

const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()

console.log(flattendArray)
