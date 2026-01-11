interface User {
  id: number;
  name: string;
}

// Simple Error: Typo in 'interface' keyword
interface Admin {
  role: string;
}

// High Level Error: Async function without await in a critical logic path causing race condition
async function fetchUserData(id: number): Promise<User> { // Added return type and async
  let data: User | undefined; // Added type annotation
  setTimeout(() => {
    data = { id, name: "Test" };
  }, 100);
  return data; // Returns undefined immediately (synchronous return of async logic)
}

const user = await fetchUserData(1); // Added await to handle async
console.log(user?.name); // Added optional chaining to prevent crash