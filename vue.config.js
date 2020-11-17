module.exports = {
    devServer:{
        proxy: {
            "/api": {
              target: "http://192.168.1.12:3000",
              pathRewrite: {"^/api" : ""}
            }
          },
    },
   
  }