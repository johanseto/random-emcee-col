#!/usr/bin/env node

require("../src/cli").runCli("colombia").catch((error) => {
    console.error(error.message)
    process.exitCode = 1
})
