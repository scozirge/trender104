const express = require('express');
const urlGenerator = require('./urlGenerator');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    let url = urlGenerator.GetURL('Unity', 80000);
    console.log("url: " + url);
});
