interface User {
  id: number;
  name: string;
}

interface Admin {
  role: string;
}

async function fetchUserData(id: number): Promise<User> { // fixed: added return type and async
  let data: User | undefined; // fixed: added type annotation
  await new Promise(resolve => setTimeout(resolve, 100)); // fixed: properly handle async
  data = { id, name: "Test" };
  return data;
}

const user = await fetchUserData(1); // fixed: added await
// console.log(user.name); // removed: console.log in production