#!/usr/bin/env node

require("../src/cli").runCli("internacional").catch((error) => {
    console.error(error.message)
    process.exitCode = 1
})
