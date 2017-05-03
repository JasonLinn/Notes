// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, "node_modules");
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: `${__dirname}/dist/index.html`,
  inject: 'body',
});
const component = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: `${__dirname}/dist/component.html`,
  inject: 'body',    
})


const extractCss = new ExtractTextPlugin('css/index.css');
const extractSass = new ExtractTextPlugin('sass/style.scss');
module.exports ={
    entry: './js/index.js',
    output:{
        //resolve 的函式是為了不管在 Windows 或是 Unix 上都可以正確解析路徑
        path: path.resolve(__dirname, 'dist/js'),
        filename:['index.js','index.css']
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
            {
                test: /\.css$/,
                loader: extractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary 
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 8008,
  },
  // plugins 放置所使用的外掛
  plugins: [HTMLWebpackPluginConfig,component,extractCss,extractSass]
}