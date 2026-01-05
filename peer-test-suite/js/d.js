// Use const since 'a' is never reassigned
const a = 10;

// Define 'jl' before using it
let jl; // To be defined elsewhere

// Remove console.log in production
for (let i = 0; i < a; i++) {
    // Indentation fixed
    if (jl) {
        console.log(jl); // Console statement removed in production
    }
}

// Add newline at end of file