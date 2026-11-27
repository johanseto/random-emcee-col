const readline = require("node:readline/promises")
const { getAvailableYears, getParticipants } = require("./participants")

const getRequestedYear = (args) => {
    if (args.length === 0) {
        return undefined
    }

    if (args[0] === "--year" || args[0] === "-y") {
        if (!args[1] || args.length > 2) {
            throw new Error("Uso: <comando> [--year <año>]")
        }
        return args[1]
    }

    if (args.length === 1 && /^\d{4}$/.test(args[0])) {
        return args[0]
    }

    throw new Error("Uso: <comando> [--year <año>]")
}

const runCli = async (competition, args = process.argv.slice(2)) => {
    let year = getRequestedYear(args)
    if (!year) {
        const years = getAvailableYears(competition)
        if (!process.stdin.isTTY) {
            console.log(`Años disponibles: ${years.join(", ")}`)
            console.log("Uso: <comando> --year <año>")
            return
        }

        console.log(`Años disponibles: ${years.join(", ")}`)
        const prompt = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        try {
            year = await prompt.question("Selecciona un año: ")
        } finally {
            prompt.close()
        }
    }

    const participants = getParticipants(competition, year)
    const competitionName = competition[0].toUpperCase() + competition.slice(1)
    console.log(`Participantes de Red Bull Batalla ${competitionName} ${year}:`)
    participants.forEach((participant, index) => {
        console.log(`${index + 1}. ${participant}`)
    })
}

module.exports = { runCli }
