module.exports = {
  images: {
    domains: ['jsonbin.io', 'tp-portfolio.appspot.com', 'firebasestorage.googleapis.com'],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,
  },
}