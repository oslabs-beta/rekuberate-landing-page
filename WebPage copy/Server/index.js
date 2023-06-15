const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const userController = require('./controllers/userController')



//MongoDB stuff
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Fabrizzio:Knicksarenumber1!@cluster0.my2wym6.mongodb.net/');
mongoose.connection.once('open', () => {
    console.log('Connecting to Database')
})





app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve(__dirname, '../dist')));
  }


//app.use('/main', express.static(path.resolve(__dirname, '../frontend/main.html')))

app.get('/api', (req, res) => {
    console.log('this is from the get request')
    res.send('hello word from express!')
});

app.post('/api/signup', userController.createUser, (req, res) => {
    console.log('Next up is the user data')
    console.log(res.locals.user);
    return res.json(res.locals.true)
})

app.post("/api/login", userController.verifyUser, (req, res) => {
    console.log('We have a user');
    console.log(req.body);
    return res.send(res.locals.boolean);
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({error: err})
})

app.listen(3001, () => console.log('Server Listening to port 3001'));