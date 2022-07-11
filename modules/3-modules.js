
/* Leandro Ayala
Here i use the modules
*/

//import de module
const names = require('./4-names');
const sayHi = require('./5-utils');
const flavor = require('./6-alternative-flavor')

//require whith function declared, to execute the functions
require('./7-mind-granade');

//Show the contents of the imports
console.log(flavor);
console.log(flavor.names[1])
console.log(names);

//here i use the module util and names
sayHi('Leandro')

sayHi(names.john)

sayHi(names.maria)