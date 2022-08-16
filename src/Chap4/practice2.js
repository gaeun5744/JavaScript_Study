// Spread syntax
// ES2015에서 새로 추가된 syntax입니다.
// 병합, 구조 분배 할당(destructuring) 등에 다양하게 활용할 수 있습니다.

// 예시
const personalData = {
  nickname : 'JH',
  email : 'jh12@email.com',
}

const publicData = {
  age : 22,
}

const user = {
  ...personalData,
  ...publicData,
}

// ------------------------------------------------

// 예시 2

const overrides ={
  DATABASE_HOST: 'myhost.com',
  DATABASE_PASSWORD: 'mypassword',
}

const config = {
  DATABASE_HOST: 'default.host.com',
  DATABASE_PASSWORD: '*****'
  DATABASE_USERNAME: 'myuser',
  ...overrides, // 덮어씌워짐
}

// ------------------------------------------------

const user = {
  nickname: 'JH',
  age: 22,
  email: 'jh12@example.com'
}

const {nickname, ...personalData} = user
console.log(personalData) // {age : 22, email: 'jh12@example.com'}

const pets = ['dogs', 'cat']
const predators = ['wolf', 'cougar']
const aninmals = [...pets, ...predators]
console.log(animals) // ['dog', 'cat', 'wolf', 'cougar' ]

// -----------------------------------------------

const [head, ...rest] = [1,2,3]

console.log(head) //1
console.log(rest) // [2,3]

// -----------------------------------------------


const personalData = {
  email:  'abc@def.com',
  password: '*****'
}

const publicData={
  nickname: 'foo'
}

const overrides = {
  email: 'fff@fff.com',
}

const user = {
  ...overrides,
  ...personalData,
  ...publicData,
}

console.log(user)


// 밑에 껄로도 가능

const shouldOVerride =false

const user = {

  ...{
    email: 'abcdef.com',
    password: '****',
  },
  ...{
    nickname: 'foo'
  },
  ...(shouldOVerride
    ?{
      email: 'fff@fff.com'
    } : null
  )
}

console.log(user)


// -----------------------------------------------

function foo (head, ...rest){
  console.log(head)
  console.log(rest)
}

foo(1,2,3,4)






