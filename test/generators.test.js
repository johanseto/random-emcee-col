const assert = require('node:assert/strict')
const test = require('node:test')

const colombia = require('../src/index_redbull.js')
const internacional = require('../src/index_redbull_internacional.js')

const verifyRandomMsg = (generator, randomValue, expected) => {
    const originalRandom = Math.random
    const originalLog = console.log
    Math.random = () => randomValue
    console.log = () => {}

    try {
        assert.equal(generator.randomMsg(), expected)
    } finally {
        Math.random = originalRandom
        console.log = originalLog
    }
}

test('Colombia generator selects from the 2026 national finalists', () => {
    assert.equal(colombia.emcees.length, 16)
    verifyRandomMsg(colombia, 0, 'J1')
    verifyRandomMsg(colombia, 0.999999, 'Airon Punchline')
})

test('international generator selects from the 2026 international finalists', () => {
    assert.equal(internacional.emcees.length, 16)
    verifyRandomMsg(internacional, 0, 'Chuty')
    verifyRandomMsg(internacional, 0.999999, 'Nekroos')
})
