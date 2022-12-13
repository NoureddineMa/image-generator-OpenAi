const express = require('express')
const dontenv = require('dotenv').config();

const port = process.env.PORT || 5000

const app = express()

app.listen(port , () => {
    console.log(`server started on port ${port}`);
})

app.use('/openai' , require('./routes/openaiRoutes'));
