console.log('aa')

class A {
	constructor() {
		console.log('a')
	}
}

class B extends A {
	constructor() {
		super()
		console.log('b')
	}
}
