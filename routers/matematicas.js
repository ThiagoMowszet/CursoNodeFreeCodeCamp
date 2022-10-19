const express = require('express')
const { matematicas } = require('../datos/cursos').infoCursos
const routerMatematicas = express.Router()


routerMatematicas.get('/', (req, res) => {
    res.send(matematicas)
})


routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema
    const resultados = matematicas.filter(a => a.tema === tema)
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron temas de ${tema}`)
    }

    res.send(JSON.stringify(resultados))
})

module.exports = routerMatematicas