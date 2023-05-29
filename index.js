const express = require('express')
const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)


app.get('/chat' , (req , res ) => {
    res.send("Welcome to Chatting Using SOckets NodeJS")
})
