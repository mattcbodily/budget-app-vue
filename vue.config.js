module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:4000',
          ws: true,
          secure: false,
          changeOrigin: true,  
        }
      }
    }
  }