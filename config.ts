// TODO: Change the values to your own
const devServer = process.env.DEV_SERVER || 'http://localhost:3000'
const devApiURL = process.env.DEV_API_URL || 'http://localhost:3030'
const prodServer = process.env.SERVER || 'https://yourwebsite.com'
const prodApiURL = process.env.API_URL || 'https://yourapiservice.com'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? devServer : prodServer
export const apiURL = dev ? devApiURL : prodApiURL
