let test = 'hot'
let food = 'chicken'
const dish = `${taste} ${food}`
// let과 const는 ES2015(ES6)에 추가된 변수 선언 키워드
// hoisting 규칙이 없고, block scoping을 지원합니다. 따라서 var보다 훨씬 예측 가능한 코드를 짤 수 있게 해줍니다

let x = 1
x = 2 //가능

const y = 1
y = 2 // 불가능

// let은 레퍼런스가 바뀔 수 있고, const는 바뀔 수 없습니다.

var x = 1
var x = 2 // 가능

let x = 1
let x = 2 // 불가능

// var과 달리 let과 const는 같은 스코프 내에서 같은 변수를 두번 이상 정의할 수 없습니다.
// var과 달리 let과 const는 변수를 정의하기 전에 사용할 수 없습니다.

var x = 1
{
  var x = 2
  console.log(x) //2
}
console.log(x) //2

const x = 1
{
  const x = 2
  console.log(x) //2
}
console.log(x) //2

// let과 const 모두 같은 scoping rule을 따릅니다.

// let과 const의 예측 가능성과 유지보수성이 var보다 훨씬 뛰어납니다.
// 가능하다면 const만 쓰고, 필요한 경우에 한해 let을 쓰고, var는 절대 쓰지 말기!
