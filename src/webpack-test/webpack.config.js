var htmlWebpackPlugin = require('html-webpack-plugin');

//common.js
module.exports={
  
  entry:{
      main:"./src/js/main.js",
      a:"./src/js/a.js"
  },//打包的路口
    output:{
        //filename:"./dist/bundle.js"//打包的文件名
        filename: './dist/js/[name]-[chunkhash].js'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index-[hash].html',
            //與根目錄的index.html產生連結
            template:'index.html',
            inject:'head'
        })
    ]
};