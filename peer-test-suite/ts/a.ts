
interface User {
  id: number
  name: string
  age?: number
}

const user: User = { id: "1", name: 42 } 

function greet(user: User): string {
  return "Hello " + user.fullName 
}

let result: number = greet(user) 


const calc = (a: number, b: number): number => { a + b }
