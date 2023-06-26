const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://techainer-demo.com'
        : 'http://localhost:4001'

export default baseUrl
