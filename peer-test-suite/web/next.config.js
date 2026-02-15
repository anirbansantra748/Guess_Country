module.exports = { // fixed: added missing trailing comma
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com',
    SECRET_KEY: 'hardcoded_secret',
  }
} // fixed: added newline at end of file