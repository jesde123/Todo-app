const PAGE_URL = process.env.NODE_ENV === 'production'
    ? 'https://todo-list-ajve.onrender.com'
    : 'http://localhost:3003';

    module.exports = { PAGE_URL };

    const MONGO_URI = process.env.NODE_ENV === 'production'
    ? 'process.env.MONGO_URI.PROD'
    : 'process.env.MONGO_URI.TEST';

    module.exports = { PAGE_URL, MONGO_URI };