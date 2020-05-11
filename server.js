const express = require("express");
const data = require("./data.json")

const app = express();
app.use(express.json());

const listenPort = 3000;

app.use(express.static(__dirname + '/client'));

app.use('/autocomplete', (req, res) => {
    const { keyword } = req.query;
    const hasSearchKeyword = data.autocomplete.hasOwnProperty(keyword);
    const result = hasSearchKeyword ? data.autocomplete[keyword] : []

    res.status(200).send(result);
});

app.use('/', (req, res) => {
    res.render('index.html')
})

app.listen(listenPort, "127.0.0.1", () => {
    console.log("\n\n    ready oogle server\n      - http://localhost:" + listenPort);
});