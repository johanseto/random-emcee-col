const emcees = [
    "Chuty",
    "Gazir",
    "El Menor",
    "Exe",
    "Bnet",
    "Teorema",
    "Larrix",
    "Almendrades",
    "Valles-T",
    "Fat Tony",
    "Reverse",
    "Fat N",
    "Androide",
    "Éxodo Lirical",
    "Rapder",
    "Nekroos",
]

const randomMsg = () => {
    const emcee = emcees[Math.floor(Math.random() * emcees.length)]
    console.log(`El MC elegido para Red Bull Batalla Internacional 2026 es ${emcee}`)
    return emcee
}

module.exports = { randomMsg, emcees }
