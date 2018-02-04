let app = require('express')()
let http = require('http').Server(app)

app.get('/', function(req, res) {
    res.send('Hi')
})
http.listen(3000, function() {
    console.log('Started server')
})
