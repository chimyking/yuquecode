interface Person {
	name: string
	age: number
}

const sem: Person = { name: 'semlinker', age: 30 }
type Sem = typeof sem // type Sem = Person
const lolo: Sem = { name: 'lolo', age: 5 }
