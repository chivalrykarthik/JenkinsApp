const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: "Welcome to jenkins build app1234" });
})

app.listen(3000)