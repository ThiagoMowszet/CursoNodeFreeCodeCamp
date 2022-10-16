// Que | Donde | Como 

// Metodo + Path  + Como manejarlo

// Si recibes una solicitud GET en /cursos..., haz esto
// Si recibes una solicitud POST en /cursos..., haz esto
// Si recibes una solicitud GET en /ejemplo..., haz esto


const http = require('http')
const {infoCursos} = require('./cursos.js')

const servidor = http.createServer((req, res) => {

    const { method } = req

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res)
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            res.statusCode = 501
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`)
            break
    }

})


const manejarSolicitudGET = (req, res) => {
    const path = req.url

    console.log(req.url);

    console.log(res.statusCode) // 200 - OK

    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end('Bienvenidos a mi primer servidor y API, creados con Node.js')
    } else if (path === '/api/cursos') {
        return res.end(JSON.stringify(infoCursos))
    } else if (path === '/api/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion))
    } else if (path === '/api/cursos/matematicas') {
        return res.end(JSON.stringify(infoCursos.matematicas))
    } else {
        res.statusCode = 404
        res.end('El recurso solicitado no existe...')
    }

}


const manejarSolicitudPOST = (req, res) => {

    const path = req.url

    console.log(res.statusCode);

    if (path === '/api/cursos/programacion') {
        // esto es sin express (solo para fines practicos)

        let body = ''

        req.on('data', content => {
            // body = body + content.toString()
            body += content.toString()
        })


        req.on('end', () => {
            console.log(body); 
            console.log(typeof body);

            // Convertir a un objeto de JS 
            body = JSON.parse(body)


            console.log(typeof body)
            console.log(body.titulo);

            return res.end('El servidor recibio una solicitud POST para /api/cursos/programacion')
        })
        

    }

}


const PORT = 5000

servidor.listen(PORT, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${PORT}`);
})