const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve(__dirname, '../dist')));
  }

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({error: err})
})

app.listen(3001, () => console.log('Server Listening to port 3001'));