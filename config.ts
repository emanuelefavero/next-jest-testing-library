const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'

export const apiURL = dev
  ? 'http://localhost:3030'
  : 'https://yourwebsite.com/api'
