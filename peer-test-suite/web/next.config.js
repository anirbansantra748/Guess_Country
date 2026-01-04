module.exports = { // fixed: changed 'export' to 'exports'
  reactStrictMode: true, // fixed: changed 'tru' to 'true'
  images: {
    domains: ['example.com', 'another.com'], // fixed: changed to single quotes and added missing comma
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com', // fixed: changed to single quotes
    SECRET_KEY: 'hardcoded_secret', // fixed: changed to single quotes
  }
}; // fixed: added missing semicolon