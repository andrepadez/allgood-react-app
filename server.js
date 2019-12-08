import path from 'path'
import express from 'express'
import serveStatic from 'serve-static'

const app = express()
const PORT = process.env.PORT || 8080

app.use(serveStatic('build/'))
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './build/index.html'))
)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

module.exports = app
