const express = require(('express'))
const PORT = process.env.PORT || 8080;
const apiRoutes = require('./routers/app.routers')
const app = express()

app.use(express.json());

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