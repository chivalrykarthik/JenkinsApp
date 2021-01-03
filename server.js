const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: "Welcome to jenkins build app" });
})

app.listen(3000)