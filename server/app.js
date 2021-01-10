const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req, res) => {
    res.send([
        {
            name: 'Brad',
            email: 'brad@pitt.com',
            username: 'brad_p101'
        }
    ]);
});

app.get("/posts", (req, res) => {
    res.send([
        {
            title: 'Post 1 title',
            body: 'Lorem ipsum bla bla'
        },
        {
            title: 'Post 2 title',
            body: 'Lorem ipsum two - bla bla'
        }
    ]);
});

app.listen(3001, () => {
    console.log("App's running on port 3001");
});