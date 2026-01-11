const a = 10; // fixed: changed 'let' to 'const' since it's never reassigned
for (let i = 0; i < a; i++) {
    // fixed: removed console.log as it's not recommended in production
    // fixed: indented to 2 spaces
}