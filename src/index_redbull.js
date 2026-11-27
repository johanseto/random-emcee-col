const emcees = [
    "J1",
    "Marithea",
    "Puppy",
    "Axl Evans",
    "Coffy",
    "Coloso",
    "Horus",
    "Jazz MC",
    "Lit Ignis",
    "Pandora",
    "JM Serna",
    "Urko",
    "Visionario",
    "Fat N",
    "Hunter",
    "Airon Punchline",
]

const randomMsg = () => {
    const emcee = emcees[Math.floor(Math.random() * emcees.length)]
    console.log(`El MC elegido para Red Bull Batalla Colombia 2026 es ${emcee}`)
    return emcee
}

module.exports = { randomMsg, emcees }
