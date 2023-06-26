const baseUrl = process.env.NODE_ENV === "production" 
? 'https://techainer.com' 
: 'http://localhost:4001';

export default baseUrl;