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
      b:"./src/js/c.js",
      component:"./src/js/component.js"
  },//打包的路口
    output:{
        // filename:"./dist/js/bundle.js"//打包的文件名
        // filename: './dist/js/[name]-[chunkhash].js'
        path: `${__dirname}/dist`,
        filename: '.dist/js/[name].js'
        //所有的output開頭都會被打包成這網址
        // publicPath:'http://cdn.com/'
    },
    module: {
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 
        //JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            },
        },
        ],
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
        }),
        new htmlWebpackPlugin({
            filename:'dist/component.html',
            //與根目錄的index.html產生連結
            template:'index.html',
            chunks:['component'],
            //可注入head,body,foot
            inject:'body',
            title:'this is c',
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