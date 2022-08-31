// @ts-check

const fs = require('fs')

const FILENAME = 'src/main.js'

// callback - style
fs.readFile(FILENAME, 'utf-8', (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})

// sync-style

try {
  const result = fs.readFileSync(FILENAME, 'utf-8')
  console.log(result)
} catch (error) {
  console.error(error)
}

// promise-style

async function main() {
  await fs.promises.readFile(FILENAME, 'utf-8')
}

main()
