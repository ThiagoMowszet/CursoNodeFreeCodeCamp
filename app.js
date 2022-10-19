const express = require('express')
const app = express()

const { infoCursos } = require('./datos/cursos.js')


// Routers 

const routerProgramacion = require('./routers/programacion')
app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = require('./routers/matematicas')
app.use('/api/cursos/matematicas', routerMatematicas)


// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor')
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}...`);
})