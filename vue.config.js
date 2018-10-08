
const path = require("path");

// vue.config.js
module.exports = {
    // options...
    outputDir: path.resolve(__dirname, "../api/wwwroot"),

    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000/api',
            changeOrigin: true,  
            pathRewrite: {
                '^/api' : ''
            }
          }
        }
    }  
  }