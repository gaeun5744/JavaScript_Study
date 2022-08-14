// @ts-check

// Formatting, Linting, Type checking
// Formatting : 페이지가 몇인지, 세미콜론이 붙었는지 아닌지 + Prettier
// Linting : 지키면 좋은 것들, + ESLinkt
// Type checking : TypeScript

// "prettier" : "^2.2.1"
// ^는 정확하게 같은 버전이 아니더라도 설치가 가능하게 함
// 실제 로컬 환경에서 설치되는 버전은 다를 수 있음
// 여러 사람들과 코드를 작성하게 되면 lock.json도 같이 커밋해야 서로간의 패키지 버전이 안 맞는 상황 방지 가능

// node_modules 밑의 dir들은 우리 프로젝트가 의존하고 있는 패키지들
// .bin 안의 파일들은 우리가 실행할 수 있는 binary 파일들

/* eslint-disable-next-line no-console */
// console.log(eval())

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`)
})
