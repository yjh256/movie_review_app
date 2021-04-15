const proxy = require('http-proxy-middleware');

module.exports = (app) => {

    app.use(
        proxy('/api', {
            target: 'https://openapi.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/'
            }
        })
    )
};