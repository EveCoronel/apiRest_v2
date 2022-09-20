const express = require('express')
const apiRoutes = require('./routers/app.routers')
const {engine} = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 8080;
const app = express()

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
    partialsDir: path.resolve(__dirname, './views/partials')
}))

app.set('views', './views')
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/api/', apiRoutes)

app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada')
})

const serverConnected = app.listen(PORT, () => {
    console.log(`Server is up and running`)
})
serverConnected.on('error', (error) => {
    console.log(error.message)
})