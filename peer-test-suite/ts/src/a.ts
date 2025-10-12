// ❌ Type errors and runtime issues
interface User {
  id: number
  name: string
  age?: number
}

const user: User = { id: "1", name: 42 } // ❌ Wrong types

function greet(user: User): string {
  return "Hello " + user.fullName // ❌ Property doesn't exist
}

let result: number = greet(user) // ❌ Return type mismatch

// ❌ Missing return
const calc = (a: number, b: number): number => { a + b }
