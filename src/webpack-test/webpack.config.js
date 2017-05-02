//webpack插件 。 require是commonJS寫法
var htmlWebpackPlugin = require('html-webpack-plugin');

//common.js
module.exports={
  //想打包的文件入口，有三種打包方式1.字串2.陣列3.JSON
  //   context:,   這個城市是在根目錄運行
  entry:{
      main:"./src/js/main.js",
      a:"./src/js/a.js",
      b:"./src/js/b.js",
      b:"./src/js/c.js"
  },//打包的路口
    output:{
        // filename:"./dist/js/bundle.js"//打包的文件名
        // filename: './dist/js/[name]-[chunkhash].js'
        path: `${__dirname}/dist`,
        filename: '.dist/js/[name].js'
        //所有的output開頭都會被打包成這網址
        // publicPath:'http://cdn.com/'
    },
    plugins:[
        //new 一個plugin
        new htmlWebpackPlugin({
            filename:'dist/a.html',
            //與根目錄的index.html產生連結
            template:'index.html',
            //可注入head,body,foot
            inject:false,
            title:'this is a',
            date:new Date(),
            minify:{
                //移除註釋
                removeComments:false,
                //合併空白
                collapseWhitespace:false
            }
        }),
        new htmlWebpackPlugin({
            filename:'dist/b.html',
            //與根目錄的index.html產生連結
            template:'index.html',
            //可注入head,body,foot
            inject:false,
            title:'this is b',
            date:new Date(),
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new htmlWebpackPlugin({
            filename:'dist/c.html',
            //與根目錄的index.html產生連結
            template:'index.html',
            //可注入head,body,foot
            inject:false,
            title:'this is c',
            date:new Date(),
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        })
    ],
    devServer: {
    contentBase: './dist/',
    inline: true,
    port: 8008,
  },
};