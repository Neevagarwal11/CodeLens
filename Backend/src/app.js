const express = require('express');
const aiRoutes = require('./Routes/aiRoutes');
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());        //IMp for running request.body command else it will return undefined


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai', aiRoutes);


module.exports = app;