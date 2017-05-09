import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.jsx';
import InputField from './InputField.jsx';
import TodoList from './TodoList.jsx';
const todosJSON = [
  {
    id: 0,
    title: 'Item 1',
    completed: false
  },{
    id: 1,
    title: 'Item 2',
    completed: false
  },{
    id: 2,
    title: 'Item 3',
    completed: true
  },
];
class TodoApp extends React.Component {
    render(){
        return(
          //要用一個大標籤刮起來
          <div>
            <TodoHeader
                title = "我的待辦事項"
                username="Jason"
                //filter符合function裡面條件的沒打勾
                number = {todosJSON.filter((todo) => !todo.completed).length}
            />
            <InputField
              placeholder = "新增待辦事項"
            />
            <TodoList todos={todosJSON} />
          </div>
        )

    }

}

ReactDOM.render(<TodoApp />,document.getElementById('test1'));

// 1. 使用元素屬性，傳遞 props 給元件
ReactDOM.render(
  <TodoHeader
    username="ken"
    todos={['Item1', 'Item2']}
  />,
  document.getElementById('test6')
);

// 2. 使用 Object """spread"""'" properties（詳見[學習筆記 4]）
const props = {
  username: 'Hello',
  number: ['Item1', 'Item2']
};

ReactDOM.render(
  <TodoHeader {...props} />, // 與第一種方式傳遞的參數一樣
  document.getElementById('test5')
);



/*======================
        箭頭函數
=======================*/
// ES5 中，定義匿名函數，及將函數賦值給變數的方法
var plus = function(x) {
  return x + 1;
};

// ES6 中，箭頭函數讓匿名函數宣告語法更簡潔
const plus1 = (x) => x + 1;

// ES6 中，箭頭函數會自動綁定 this
// function Person() {
//   this.text = 'hello';

//   // Error: ES6 的匿名函數不會自動綁定 this，因此取不到 this.text
//   setInterval(function() {
//     console.log(this.text);
//   }, 1000);

//   // Correct
//   setInterval(() => console.log(this.text), 1000);
// }

// new Person();