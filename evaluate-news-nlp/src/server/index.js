// import fetch from 'node-fetch';

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// Require the Aylien npm package

const app = express()
const dotenv = require('dotenv');
dotenv.config();
// const textapi = new aylien({
//     application_key: `${process.env.API_KEY}`
// });
console.log(`Your API key is ${process.env.API_KEY}`);

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// let fetch = await import('node-fetch');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

//api
let projectData = [];
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = `${process.env.API_KEY}`;
console.log(`Your API Key is ${apiKey}`);



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});


//
app.post('/api', async (req, res) => {
    projectData = req.body.url;
    try {
        const requestUrl = `${baseURL}key=${apiKey}&lang=en&url=${projectData}`;
        const response = await fetch(requestUrl);
        const urlResult = await response.json();
        console.log(urlResult);
        res.send(urlResult);
        console.log(urlResult);
    } catch (error) {
        console.log('error', error);
    }
});

