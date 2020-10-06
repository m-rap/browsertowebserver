let express = require('express')
let app = express()
let bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.send('<html><body><form action="/sub" method="post"><input type="text" name="apapun" /><input type="submit" value="submit" /></form></body></html>')
})

app.post('/sub', function(req, res) {
  console.log(req.body)
  res.send('thanks')
})

app.listen('80', () => { console.log('listening at 80') })
