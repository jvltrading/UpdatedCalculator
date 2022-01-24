const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
  res.sendFile('C:/Users\\bbdnet2533\\Desktop\\Programming Training\\myCalculator\\public\\calculator.html');
})

app.listen(port);