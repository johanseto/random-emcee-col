const { getParticipants } = require("./participants")

const randomMsg = (year = 2026) => {
    const emcees = getParticipants("internacional", year)
    const emcee = emcees[Math.floor(Math.random() * emcees.length)]
    console.log(`El MC elegido para Red Bull Batalla Internacional ${year} es ${emcee}`)
    return emcee
}

module.exports = {
    randomMsg,
    emcees: getParticipants("internacional", 2026),
    getParticipants: (year) => getParticipants("internacional", year),
}
