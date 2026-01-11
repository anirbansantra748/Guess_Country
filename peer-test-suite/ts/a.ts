interface User {
  id: number;
  name: string;
}

// Fixed: Corrected typo in 'interface' keyword
interface Admin {
  role: string;
}

// Fixed: Added async/await to handle asynchronous operation properly
async function fetchUserData(id: number): Promise<User> { // Added return type annotation
  let data: User | undefined; // Added type annotation
  await new Promise(resolve => setTimeout(resolve, 100)); // Properly await the timeout
  data = { id, name: "Test" };
  return data;
}

const user = await fetchUserData(1); // Added await to handle the async function
console.log(user?.name); // Added optional chaining to prevent crash if user is undefined