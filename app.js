const express = require('express')
const app = express()

const {infoCursos} = require('./cursos.js')


// Routers 

// Programacion
const routerProgramacion = express.Router()

app.use('/api/cursos/programacion', routerProgramacion)


// Matematicas 

const routerMatematicas = express.Router()
app.use('/api/cursos/matematicas', routerMatematicas)



// Routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor')
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))    
})

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})

routerMatematicas.get('/', (req, res) => {
    res.send(infoCursos.matematicas)
})


// Parametros de Ruta

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    // Parametros Query
    console.log(req.query.ordenar);

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)))
    }


    res.send(JSON.stringify(resultados))
})


routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema
    const resultados = infoCursos.matematicas.filter(a => a.tema === tema)
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron temas de ${tema}`)
    }

    res.send(JSON.stringify(resultados))
})

// +1 parametro

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    
    const resultados = infoCursos.programacion.filter(a => a.lenguaje === lenguaje && a.nivel === nivel)
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} con el nivel ${nivel}`)
    }
})




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}...`);
})