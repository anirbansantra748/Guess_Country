import { expect } from 'chai';
import { describe, it } from 'mocha';

interface User {
  id: number;
  name: string;
}

interface Admin {
  role: string;
}

function fetchUserData(id: number): Promise<User> {  // Added return type Promise<User>
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Test" });
    }, 100);
  });
}

describe('User Tests', () => {
  it('should fetch user data', async () => {  // Added async to handle Promise
    const user = await fetchUserData(1);  // Using await to properly handle async
    expect(user).to.exist;
    expect(user.name).to.equal('Test');
  });
});