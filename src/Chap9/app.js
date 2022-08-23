//@ts-check

const express = require('express')

const app = express()
app.use(express.json())
app.set('views', 'src/Chap9/views')
app.set('view engine', 'pug')

const userRouter = require('./routers/user')

app.use('/users', userRouter)

app.use('/public', express.static('src/Chap9/public'))

app.use('/uploads', express.static('uploads'))

//@ts-ignore
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

module.exports = app
