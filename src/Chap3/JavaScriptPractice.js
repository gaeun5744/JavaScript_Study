// Hosting -var
// 즉, hosting 이란 변수의 선언(만)을 해당 스코프의 맨 위로 끌어올리는 것을 뜻합니다.
// var도 없다면 변수의 선언 자체가 이루어지지 않으므로 ReferenceError가 발생합니다.

const { isBreakOrContinueStatement } = require('typescript')
const { getEnvironmentData } = require('worker_threads')

console.log(x)
var x = 1

// 위의 코드는 밑과 같다

var x
console.log(x)
x = 1

function foo() {
  return 'foo'
}
console.log(foo())

// 위와 아래의 두 코드는 실행 결과가 동일
// fuction도 hosting의 대상
// 함수의 선언과 값의 초기화는 서로 다름

console.log(foo())
function foo() {
  return 'foo'
}

//----------------------------------------------------------------------------

// 코드의 어떤 식별자가 실제로 어떤 값이 가리키는지를 결정하는 것을 binding 이라고 합니다.
// 자바스크립트에서의 binding은 lexical scope를 통해 이루어집니다
// lexical scope란 간단히 말하자면 안쪽에서 바깥쪽 변수에 접근할 수 있다는 뜻입니다.
// 안에서 밖 가능, 밖에서 안 불가능

// 예시 코드 : 실행가능
function foo() {
  let x = 1
  function boor() {
    console.log(x)
  }
}

// 예시 코드 : 실행 불가

function foo() {
  var x = 'Hello'
  console.log(x)
}

console.log(x) // ReferenceError

// var은 block scoping의 대상이 아닙니다

var x = 1
if (true) {
  var x = 2
}
console.log(x) // 2

//----------------------------------------------------------------------------

// closure = function + environment
// closure은 fuction이 하나 생길때마다 하나씩 생깁니다
// environment는 함수 자신을 둘러싼, 접근할 수 있는 모든 스코프를 뜻합니다.

// closure 예시

function and(x) {
  return function print(y) {
    return x + ' and ' + y
  }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper')) // salt and pepper
console.log(saltAnd('sugar')) // salt and sugar

const waterAnd = and('salt')
console.log(waterAnd('juice')) // water and juice

// and 함수로 만들어진 saltAnd의 Closure :

// 함수 : print
// 환경 : x -> "salt"

// closure은 higher-order fuction을 만드는데 유용합니다.

// saltAnd와 waterAnd 모두 함수는 같은 print이지만, 각각 주어진 변수가 다릅니다.
// saltAnd는 x가 "salt", waterAnd는 x가 "water"로 바인딩 되어있습니다.
// 즉, 둘은 서로 다른 closure을 형성하고 있습니다.
