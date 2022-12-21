const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors())
app.get('/hero1', function (req, res) {
  res.send({hero1: 60})
});

app.get('/hero2', function (req, res) {
  res.send('Dyroth.')
});

app.get('/hero3', function (req, res) {
  res.send('Claude.')
});

app.post("/suhu2", (req, res) => {
  var suhu = req.body.suhu;
  console.log(suhu)
  res.send("Data yang terkirim adalah "+ suhu);
});

app.listen(port, ()=>{
  console.log("App running on http://localhost:3000/")
});