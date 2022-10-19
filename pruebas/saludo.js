const saludo = (nombre) => {
    return `Hola ${nombre}!` // Hola Thiago!
}


function saludoHolaMundo(){
    return 'Hola, Mundo!' // Hola, Mundo!
}

module.exports = { 
    saludar: saludo,
    saludos: saludoHolaMundo
 }