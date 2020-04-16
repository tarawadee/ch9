var express = require('express');
var app = express();
app.get('/', (req, res) => {
   console.log('Hello')
    res.send('Hello')
})

app.get('/crach', (req, res) => {
    console.log('crach')
    res.send('Hello')
    prosess.exit
})
app.listen(process.env.PORT,() => console.log('Sever is running at',process.env.PORT));