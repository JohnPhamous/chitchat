var Pusher = require('pusher');
var Moniker = require('moniker');
var names = Moniker.generator([Moniker.adjective, Moniker.noun]);
const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/:message/:room/:from', (req, res) => {
    console.log('hit')
    pusher.trigger(req.params.from, req.params.from, {
      "message": req.params.message,
      "room": req.params.room,
      "from": req.params.from
    });
    res.send(req.params)
})

app.get('/api/name', (req, res) => {
    res.send(names.choose())
})

var pusher = new Pusher({
  appId: '468833',
  key: '284d7fd1588fa41cc42c',
  secret: '125e811d1b1e391df1c1',
  cluster: 'us2',
  encrypted: true
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
