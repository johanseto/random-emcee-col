const { getParticipants } = require("./participants")

const randomMsg = (year = 2026) => {
    const emcees = getParticipants("colombia", year)
    const emcee = emcees[Math.floor(Math.random() * emcees.length)]
    console.log(`El MC elegido para Red Bull Batalla Colombia ${year} es ${emcee}`)
    return emcee
}

module.exports = {
    randomMsg,
    emcees: getParticipants("colombia", 2026),
    getParticipants: (year) => getParticipants("colombia", year),
}
