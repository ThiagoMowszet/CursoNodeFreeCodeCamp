// Para llamar a la funcion que creamos debemos de importar el modulo que creamos en donde esta la funcion

// const saludo = require('./saludo')

const { saludos, saludar } = require('./saludo') 

//console.log(saludo.saludar('Thiago')); // Hola Thiago!

console.log(saludos()); // Hola, Mundo!
console.log(saludar('Thiago')); // Hola Thiago!

//onsole.log(process)
//console.log(process.env) // Vemos el ambiente en donde se ejecuta el proceso.
// console.log(process.argv) // Vemos los argumentos en donde se ejecuta el proceso.
//console.log(process.memoryUsage()) // Vemos la memoria que se esta utilizando. 

const os = require('os') // No esta disponible de forma global, por lo que hay que importarlo.

console.log(os.type()) // Nos retorna el tipo de sistema operativo que tengamos.
console.log(os.homedir()) // Nos retorna el directorio principal del usuario.
console.log(os.uptime()); // Nos retorna el tiempo desde que se esta ejecutando el SO.
console.log(os.userInfo()); // Nos retorna la informacion del usuario.

// Para ejecutar codigo luego de un numero especifico de milisegundos.
// 1 seg = 1000 milisegundos
//setTimeout( funcion, retraso argumento )

const mostrarTema = (tema) => {
    console.log(`Estoy aprendiendo ${tema}`);
}

// mostrarTema('Node.js')


setTimeout(mostrarTema, 10000, 'node')

const sumar = (a, b) => {
    console.log(a + b)
}

// console.log(sumar(1,2))

setTimeout(sumar, 5000, 5, 10) // luego de 5 seg, debe retornar 15

const mostrarTema2 = (tema) => {
    console.log(`Estoy aprendiendo ${tema}`); 
}

console.log('antes de setImmediate'); // 1

setImmediate(mostrarTema2, 'node') // 3

console.log('despues de setImmediate'); // 2


const mostrarTema3 = (tema) => {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema3, 5000, 'node')

const mate = (a, b, c, d) => {
    console.log(a + b * c / d) 
}


setInterval(mate, 10000, 1, 2, 3, 4)


const fs = require('fs')

fs.readFile('inde.html', 'utf-8', (err, contenido) => {
    if (err){
       throw err
    } else {
        console.log(contenido);
    } 
    console.log('Mensaje...')
})


fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err
    }
    console.log('nombre cambiado exitosamente');
})



fs.appendFile('main.html', '\n<p>Hola</p>', (err) => {
    if (err) {
        throw err
    }
    console.log('Archivo actualizado')
})

fs.writeFile('main.html', 'Contenido Nuevo', (err) => {
    if (err) {
        throw err
    }
    console.log('Contenido Reemplazado existosamente');
})

fs.unlink('pruebaunlink.html', (err) => {
    if (err) {
        throw err
    }
    console.log('Se ha eliminado el archivo correctamente');
})

const fs = require('fs')

// Lee archivos

console.log('Antes de leer el arch');


const archivo = fs.readFileSync('main.html', 'utf-8')

console.log(archivo);

console.log('despues de leer el arch');

// Cambia el nombre de archivos

console.log('Antes de cambiar  el nombre del arch');


fs.renameSync('main.html', 'index.html')


console.log('Despues de cambiar  el nombre del arch');


// Agrega contenido al final


console.log('antes de agregar contenido al arch');


fs.appendFileSync('index.html', '\n<p>Hola</p>')


console.log('despues de agregar contenido al arch');

// Reemplaza todo el contenido

console.log('antes de reemplazar el contenido del arch');


fs.writeFileSync('index.html', 'Contenido Nuevo')


console.log('despues de reemplazar el contenido del arch');

// Elimina todo el contenido

console.log('antes de eliminar todo');



fs.unlinkSync('index.html');



console.log('despues de eliminar todo');



const curso = require('./curso.json')

console.log(curso);

console.log(typeof curso);

console.log(curso.numVistas)



let infoCurso = {
    "Titulo": "Aprende Node.js",
    "numVistas": 45,
    "numLikes": 21123,
    "temas": [
        "JS",
        "Node"
    ],
    "esPublico": true
}

// Conversion de objeto JS a JSON
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(typeof infoCursoJSON);


// conversion de JSON a objeto JS
let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);


typeof infoCurso === typeof infoCursoObjeto ? console.log('a') : console.log('b');

const EventEmitter = require('events')

console.log(EventEmitter);


const promesaCumplida = true

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (promesaCumplida){
            resolve('Promesa cumplida!')
        }else{
            reject('Promesa rechazada :(')
        }
    } , 3000)
})

// miPromesa.then((valor) => {
//     console.log('Promesa cumplida!')
// })

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)


const statusPedido = () => {
    return Math.random() < 0.8
}

const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve('Pedido exitoso, tu pizza esta en camino.')
        }else{
            reject('Ocurrio un error, porfavor intente nuevamente.')
        }
    }, 3000)
})

// const manejarPedido = (mensajeConfirmado) => {
//     console.log(mensajeConfirmado);
// }

// const rechazarPedido = (mensajeError) => {
//     console.log(mensajeError)
// }

// miPedido.then(manejarPedido, rechazarPedido)

// miPedido
//     .then((mensajeConfirmado) => {
//         console.log(mensajeConfirmado)
//     })
//     .then(null, (mensajeError) => {
//         console.log(mensajeError)
//     })

miPedido
    .then((mensajeConfirmado) => {
        console.log(mensajeConfirmado)
    })
    // nos ahorramos de poner el null 
    .catch((mensajeError) => { 
        console.log(mensajeError)
    })



const manejarPedido = (mensajeConfirmado) => {
    console.log(mensajeConfirmado);
}

const mensajeError = (mensajeError) => {
    console.log(mensajeError);
}

miPedido.then(manejarPedido).catch(mensajeError)

miPedido
.then(manejarPedido)
.catch(mensajeError)




function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('Ordenando una taza con el logo de FreeCodeCamp')
            } else {
                reject('Este producto no esta disponible actualmente')
            }
        }, 2000)
    }) // Funcion asincrona (creamos la promesa dentro de la funcion)
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando Respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(() => {
            resolve('Gracias por su compra, disfruta tu producto de freecodecamp')
        }, 4000)
    })
}

// Chaining Promises
ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta Recibida');
        console.log(respuesta);
        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada)
    })
    .catch(err => {
        console.log(err);
    })


// async y await 
async function realizarPedido(producto) {
    try{
        const respuesta = await ordenarProducto(producto)
        console.log('Respuesta recibida')
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)

    } catch (err) {
        console.log(err);
    }
}

realizarPedido('taza')


const http = require('http')

const servidor = http.createServer((req, res) => {
    res.end('Hola Mundo')
})

const PORT = 5000 

servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto: ${PORT}`)
})



const miURL = new URL('http://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(miURL.hostname) // www.ejemplo.org

console.log(miURL.pathname) // /cursos/programacion

console.log(miURL.searchParams) // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }

console.log(typeof miURL.searchParams) // object

console.log(miURL.searchParams.get('ordenar')) // vistas

console.log(miURL.searchParams.get('nivel')) // 1