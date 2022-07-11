const path = require('path')

console.log("------ path separator -----------")
console.log(path.sep)

const pathFile = path.join('/modules/','app.js')
const baseName = path.basename(pathFile)
console.log("-------- path Join method -----------")
console.log(pathFile)
console.log("Base: "+ baseName)