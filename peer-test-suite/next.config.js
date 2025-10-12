
module.export = {
  reactStrictMode: tru,
  images: {
    domains: ["example.com, another.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://api.example.com",
    SECRET_KEY: "hardcoded_secret", 
  }
}
