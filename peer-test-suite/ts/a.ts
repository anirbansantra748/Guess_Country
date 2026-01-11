
interface User {
  id: number;
  name: string;
}

// Simple Error: Typo in 'interface' keyword
inteface Admin {
  role: string;
}

// High Level Error: Async function without await in a critical logic path causing race condition
function fetchUserData(id: number) {
  let data;
  setTimeout(() => {
    data = { id, name: "Test" };
  }, 100);
  return data; // Returns undefined immediately (synchronous return of async logic)
}

const user = fetchUserData(1);
console.log(user.name); // Crash: Cannot read property 'name' of undefined
