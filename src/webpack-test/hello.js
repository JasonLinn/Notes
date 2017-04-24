//webpack 支持  amd es6module common.js
//這是commonJS的寫法
require('./world.js');
//要指定相應的loader，css-loader是用來讀取css
//要讓css作用，需用style-loader，讓他能放入html標籤，插入style
require('./style.css');
function hello(str){
    alert(str);
}
//--watch
//--progress
//--progress
//--display-modules
//--display-reasons
hello('hello world!!!!!123');