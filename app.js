const express = require('express')

// creamos la app , ejecutando express como una función
const app = express()
const port = 3000

// hace que podamos saltar el nombre del directorio public y enlazar directamente el css sin pasar por esta carpeta
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded())

// req= request
// res respond
app.get('/',(req, res, next)=>{
    // resp.send('Home') escribir directamente en elhtml 
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about',(req, res, next)=>{
    // resp.send('About') escribir directamente en el html
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works',(req,res,next)=>{
    res.sendFile(`${__dirname}/views/works.html`)
})

app.get('/photo_gallery', (req, res, next) => {
    res.sendFile(`${__dirname}/views/photo_gallery.html`)
})

// Codigo de apuntes de la clase con julio 
// app.get("/posts/:id", (req, res, next)=>{
//     console.log(req.params)
//     const id = req.params.id
//     res.send(`welcome to post route: ${id}`)
// })

// app.get("/search", (req, res, next)=>{
//     console.log(req.query)
//     const id = req.query.id
//     res.send(`welcome to post route: ${id}`)
// })

app.listen(port, () => console.log(`This is working at the port: ${port}`))