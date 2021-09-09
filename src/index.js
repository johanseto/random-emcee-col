const messages = [
    "Token",
    "Marithea",
    "Carpediem",
    "Eleven",
    "Deko",
    "Neg",
    "Big-killa",
    "Wendigo",
    "Loquillo",
    "Alzate",
    "Airon",
    "Bless",
    "filosofo",
    "Pandora",
    "Vendetta",
    "Azrael",
    
]

//Crear function to get random messages
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = {randomMsg}