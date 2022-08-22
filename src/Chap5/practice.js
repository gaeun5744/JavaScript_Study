//@ts-check

// 프레임워크 없이 간단한 토이 프로젝트 웹서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용할 예정
 * - 인증 로직은 넣지 않습니다.
 * - RESTful API 사용
 */

const http = require('http')
const { resourceLimits } = require('worker_threads')
const { routes } = require('./api')

const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.method === req.method &&
        _route.url.test(req.url)
    )

    if (!route) {
      res.statusCode = 404
      res.end('Not found.')
      return
    }

    const result = await route.callback()
    res.statusCode = result.statusCode
    res.end(result.body)

    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.body))
    }
  }

  main()
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at port : ${PORT}`)
})
