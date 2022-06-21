const express = require('express')

// creamos la app , ejecutando express como una función
const app = express()
const port = 3000

// req= request
// res respond
app.get('/',(req, resp, next)=>{
    // resp.send('Home') escribir directamente en elhtml 
    resp.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about',(req, resp, next)=>{
    // resp.send('About') escribir directamente en el html
    resp.sendFile(`${__dirname}/views/about.html`)
})

app.listen(port, () => console.log(`This is working at the port: ${port}`))