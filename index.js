const path = require('path')
const express = require('express')
const dontenv = require('dotenv').config();
const port = process.env.PORT || 5000
const app = express()


// set static folder 
app.use(express.static(path.join(__dirname , 'public')))
// enable BOody parser :
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port , () => {
    console.log(`server started on port ${port}`);
})

app.use('/openai' , require('./routes/openaiRoutes'));
