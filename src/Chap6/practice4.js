// @ts-check

const os = require('os')

console.log(['arch', os.arch], ['platform', os.platform()], ['cpus', os.cpus()])
