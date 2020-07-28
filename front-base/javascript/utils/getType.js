/**
 * js中可以用来判断类型的有三种
 *
 * typeof
 *
 * instanceof
 *
 * Object.prototype.toString()
 */

function getType(value) {
	console.log(typeof value)
	return typeof value
}

// String
// Number
// Boolean
// null
// undefined
// Symbol
// object
getType('a') // string
getType(32) // number
getType(true) // boolean
getType(null) // object
getType(undefined) // undefined
getType(Symbol()) // symbol
getType({}) // object
getType([]) // object
