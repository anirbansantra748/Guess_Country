module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another.com'], // fixed: added missing trailing comma
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com', // fixed: added missing trailing comma
    SECRET_KEY: 'hardcoded_secret', // fixed: added missing trailing comma
  }
}; // fixed: added newline at end of file