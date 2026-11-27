const assert = require("node:assert/strict")
const { spawnSync } = require("node:child_process")
const path = require("node:path")
const test = require("node:test")

const { getAvailableYears, getParticipants } = require("../src/participants")

const root = path.join(__dirname, "..")

test("all available years have 16 published participants", () => {
    for (const competition of ["colombia", "internacional"]) {
        assert.deepEqual(getAvailableYears(competition), [
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
        ])

        for (const year of getAvailableYears(competition)) {
            assert.equal(getParticipants(competition, year).length, 16)
        }
    }
})

test("participants are returned for the requested year without exposing stored data", () => {
    const participants = getParticipants("colombia", 2022)
    assert.equal(participants[0], "Airon Punchline")
    participants.pop()
    assert.equal(getParticipants("colombia", 2022).length, 16)
})

test("unknown years and competitions produce useful errors", () => {
    assert.throws(() => getParticipants("colombia", 2020), /Años disponibles: 2021, 2022/)
    assert.throws(() => getParticipants("toString", 2026), /Competencia desconocida/)
    assert.throws(() => getParticipants("colombia", "toString"), /Años disponibles/)
})

test("the Colombia command lists participants for the selected year", () => {
    const result = spawnSync(
        process.execPath,
        [path.join(root, "bin/global.js"), "--year", "2021"],
        { encoding: "utf8" },
    )

    assert.equal(result.status, 0)
    assert.match(result.stdout, /Participantes de Red Bull Batalla Colombia 2021:/)
    assert.match(result.stdout, /Marithea/)
    assert.match(result.stdout, /16\. Airon/)
})

test("the international command reports unsupported years and available options", () => {
    const result = spawnSync(
        process.execPath,
        [path.join(root, "bin/international.js"), "--year", "2020"],
        { encoding: "utf8" },
    )

    assert.equal(result.status, 1)
    assert.match(result.stderr, /Años disponibles: 2021, 2022, 2023, 2024, 2025, 2026/)
})
