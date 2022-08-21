// Transpile이란?
// 코드를 A언어에서 B언어로 변환하는 작업을 뜻합니다.
// 자바스크립트의 경우 보통 구형 런타임(브라우저, 혹은 구버전 Node 등)에서 신규 문법적 요소(optional chainig 등)을 활용하기 위해 사용합니다.
// 즉, 신규 언어 스펙(ES6+)에서 구형 언어 스펙(ES5 등)으로 트랜스파일 할 때 주로 사용됩니다.
// 자바스크립트를 대상으로 하는 트랜스파일러는 Babel, tsc(TypeScript Compiler), ESBuild 등이 있습니다.

const objs = [
  {
    foo: {
      bar: {
        baz: 1,
      },
    },
  },
  {},
  {
    foo: {},
  },
]

console.log(
  objs.map((obj) => {
    const { foo } = obj

    if (foo) {
      const { bar } = foo
      if (bar) {
        return bar.baz
      }
    }
    return undefined
  })
)

console.log(objs.map((obj) => obj.foo?.bar?.baz))
