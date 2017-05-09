//es6寫法
import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.js';
import InputField from './InputField.js';
import TodoList from './TodoList.js';

// 4. 將 todos 定義於上層元件中：
//    因為資料來源有可能來自伺服器等，為了開發方便，先宣告於 TodoApp 中；
//    並讓下層元件 (TodoList) 只需理會上層元件遞送的 props 即可！
// const todos = [
//   {
//     id: 0,
//     title: 'Item 1',
//     completed: false
//   },{
//     id: 1,
//     completed: true
//   },{
//     id: 2,
//     title: 'Item 3',
//     completed: false
//   },
//   // ...
// ];

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    // 4. 將 todos 搬到 state 中：
    //    放在 state 的好處是當使用 this.setState() 更新 todos 後，
    //    React 會幫你重新 render，讓使用者看到最新的畫面。
    //
    //    PS. React 的資料模型分兩種：props、state，
    //    你應該盡可能讓底層元件存取資料的方式是使用 props，
    //    所以我們將 todos 儲存在上層元件 (TodoApp) 的 state 中。
    this.state = {
      todos: [{
                id: 0,
                title: 'Item 1',
                completed: false
              },{
                id: 1,
                completed: true
              },{
                id: 2,
                title: 'Item 3',
                completed: false
              },
          ]
    };
  }
  render() {
    // 5. 從 state 中取得 todos
    const { todos } = this.state;
    
    // 5. 將待辦數量和資料分別遞給 TodoHeader 和 TodoList
    return (
      <div>
        <TodoHeader
          title="我的待辦清單"
          username="Jason"
          //這邊用es6的箭頭語法，當function內不等於true(打勾)，就表示被選
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField 
            placeholder = "新增待辦事項"
            onSubmitEditing={
            (title) => this.setState({
              todos: _createTodo(todos, title)
            })
          }
           
         />
        <TodoList 
          todos={todos} 
          // 6. 呼叫 _deleteTodo，更新 todos 狀態
          //為每一個id註冊事件
          onDeleteTodo={
            //state狀態改變時，會重新render
            (id) => this.setState({
              todos: _deleteTodo(todos, id)
            }) 
          }      
          onToggleTodo={
            (id, completed) => this.setState({
              todos: _toggleTodo(todos, id, completed)
            })
          }        
          onUpdateTodo={
            (id, title) => this.setState({
              todos: _updateTodo(todos, id, title)
            })
          }           
          />
      </div>
    );
  }
}
// 2. 將編輯邏輯抽成一個 function
const _updateTodo = (todos, id, title) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = title;
  return todos;
};
// 2. 將新增邏輯抽成一個 function
const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};
// 7. 將刪除邏輯抽成一個 function
const _deleteTodo = (todos, id) => {
  //在todo陣列中找到id等於點擊id
  const idx = todos.findIndex((todo) => todo.id === id);
  //如果不是-1，則刪除該項
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

// 6. 將切換邏輯抽成一個 function
const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};
// class TodoApp extends React.Component {
//   render() {
//     // 2. 組合元件的觀念，與架構 HTML 元素是一樣的
//     return (
//       <div>
//         <TodoHeader
//           name = "我的工作清單"
//           username = "Ken"
//           todoCount = {66}
//         />
        
//         <InputField
//           willDo = "新增待辦事項"
//         />
//         <TodoList />
//       </div>
//     );
//   }
// }
ReactDOM.render(<TodoApp />,document.getElementById('test1'));


//// 1. 在 ES6 中，propTypes 的宣告方式
TodoApp.propTypes = {
  appName: React.PropTypes.string.isRequired // 更多 Validation 和客製化方法，請見官方文件
};
TodoApp.defaultProps = {
  appName: 'Todo App'
};



// 1. 使用元素屬性，傳遞 props 給元件
ReactDOM.render(
  <TodoHeader
    todoCount = {99}
    username="Alice"
    name = "我是使用元素屬性，傳遞 props 給元件"
    todos={['Item1', 'Item2']}
  />,
  document.getElementById('test6')
);

// 2. 使用 Object spread properties（詳見[學習筆記 4]）
const props = {
  todoCount : 100,
  name:'我是Object spread properties',
  username: 'KKMan',
  todos: ['Item1', 'Item2']
};

ReactDOM.render(
  <TodoHeader {...props} />, // 與第一種方式傳遞的參數一樣
  document.getElementById('test8')
);

// 3. 使用 object rest/spread properties（詳見[學習筆記 3 & 4]）
const data = {
  todoCount : 87,
  appName: 'TodoApp',
  name:'我是rest/spread properties',
  username: 'hao123',
  todos: ['Item1', 'Item2']
};
const { appName} = data;

ReactDOM.render(
  <TodoHeader {...data} />, // 與第一種方式傳遞的參數一樣
  document.getElementById('test10')
);



// 1. 上層元件傳遞的參數，可以從 this.props 中取得
// class TodoApp extends React.Component {
//   render() {
//     // 如果你好奇 ... 表達的意思，請往[學習筆記 3]：）
//     const { appName, todos, ...rest } = this.props;

//     console.log(appName); // "TodoApp"
//     console.log(todos);   // ['Item1', 'Item2']
//     console.log(rest);    // { firstName: 'Jason', lastName: 'Chung' }

//     return <div></div>;
//   }
// }


// 3. 使用 function 建立元件時，是從參數中取得
// const TodoApp = (props) => <div></div>;

// // 4. 呈 3.，或是透過 destructuring assignment (解構賦值)，取得 props 中的值
// const TodoApp = ({ appName, todos }) => <div></div>;

/*================
Object rest properties
=================*/
const user = {
  firstName: 'Jason',
  lastName: 'Chung',
  sex: 'male',
  age: 27

};

// 如果你要取出 sex 和 age，並將它包裝成 others 物件...

// 在 ES5 中，你要這樣做：
var others = {
  sex: user.sex,
  age: user.age
};
console.log(others); // { sex: 'male', age: 27 }

// 在 ES6 中，你要這樣做：
// const { firstName, lastName,...others } = user;
// console.log(others); // { sex: 'male', age: 27 }

/*================
es5
map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。
=================*/
const inputs = [1, 2, 3];
const outputs = inputs.map((num)=> {
  return num * 3;
});

console.log(outputs); // [2, 4, 6]

/*================
es5
filter() 方法，會建立一個在指定函數下，所有能通過該函數測試之元素的新陣列。
=================*/
const inputs1 = [2, 10, 8];
const outputs1 = inputs1.filter(function(num) {
  return num < 9;
});
console.log(outputs1,'1'); // [2, 8]


/*================
[ES6] 箭頭函數 (arrow function)
=================*/
// ES5 中，定義匿名函數，及將函數賦值給變數的方法
var plus = function(x) {
  return x + 1;
};

// ES6 中，箭頭函數讓匿名函數宣告語法更簡潔
const plus1 = (x) => x + 1;

// ES6 中，箭頭函數會自動綁定 this
function Person() {
  this.text = 'hello';

  // Error: ES6 的匿名函數不會自動綁定 this，因此取不到 this.text
  // setInterval(function(x) {
  //   console.log(this.text);
  // }, 5000);

  // Correct
  // setInterval(() => console.log(this.text,'arrow'), 5000);
}

new Person();