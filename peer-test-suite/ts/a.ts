interface User {
  id: number;
  name: string;
}

// Simple Error: Typo in 'interface' keyword
intrface Admin {
  role: string;
}

// High Level Error: Missing async/await handling
function fetchUserData(id: number) {
  let data;
  setTimeout(() => {
    data = { id, name: "Test" };
  }, 100);
  return data;  // Returns undefined because setTimeout is async
}

const user = fetchUserData(1);
console.log(user.name);  // Will crash - user is undefined