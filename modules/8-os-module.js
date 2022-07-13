//Using built-in modules from node (core)

//OS - Operacional System module 
const os = require('os');

//Information current user
const user = os.userInfo();
console.log("------- User Info ------------")
console.log(user)

//method about system uptime
console.log("------- System Uptime (Seconds) ------------")
console.log(`The system uptime is ${os.uptime}`)

//other system informations
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log("------- Operational System Informations ------------")
console.log(currentOs)