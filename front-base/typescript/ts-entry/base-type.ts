// boolean
let isDone: boolean = false
// number
let countNum: number = 10
// string
let nameStr: string = 'chimy'
// Array 类型
let list: number[] = [1, 2, 3, 4]
let list2: Array<number> = [1, 2, 3, 4]

// Enum 类型
enum Direction {
	NORTH = 4,
	SOUTH,
	EAST = 'EAST',
	WEST = 'WEST',
}
let dir: Direction = Direction.NORTH
let dir2: Direction = Direction.SOUTH
let dir3: Direction = Direction.EAST
let dir4: Direction = Direction.WEST
console.log('Enum 类型--', dir, dir2, dir3, dir4)
// Enum 类型-- 0 1 2 3
// Enum 类型-- 4 5 6 7
// Enum 类型-- 4 5 EAST WEST
// Any 类型
let notSure: any = 666
notSure = 'Semlinker'
notSure = false
// Unknown 类型
let value: unknown

value = true // OK
value = 42 // OK
value = 'Hello World' // OK
value = [] // OK
value = {} // OK
value = Math.random // OK
value = null // OK
value = undefined // OK
value = new TypeError() // OK
value = Symbol('type') // OK
// Tuple 类型
let tupleType: [string, boolean]
tupleType = ['Semlinker', true]
// Void 类型
// 声明函数返回值为void
function warnUser(): void {
	console.log('This is my warning message')
}
let unusable: void = undefined
// Null 和 Undefined 类型
let u: undefined = undefined
let n: null = null
// Never 类型

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
	throw new Error(message)
}

function infiniteLoop(): never {
	while (true) {}
}
