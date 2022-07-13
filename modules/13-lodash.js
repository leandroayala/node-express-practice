//using lodash module
//https://www.npmjs.com/package/lodash
const _ = require('lodash')

const array = [1,[2,[3,[4]]]]

const newArray = _.flattenDeep(array)

console.log(newArray)