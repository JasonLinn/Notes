import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.jsx';
import InputField from './InputField.jsx';
import TodoList from './TodoList.jsx';
import PropTypes from 'prop-types';

/*======================
基本上，當父元素想傳值給子元素時，會設定在標籤的Attribute上。子元素就能夠透過this.props.Attribute名 
以取得父元素傳進來的值。這是一種單向的資料傳遞，也就是說，只能由父元素傳到子元素，無法由子元素傳到父元素。
但如果因為程式架構的關係，需要由子元素傳資料到父元素時，該怎麼辦呢？在React.JS的官方Sample中，有這麼一個處理方式。
''''就是由父元素設定一個function到一個Attribute上，子元素再把要傳給父元素的資料放到function的arguments。
這樣父元素的function就可以取得子元素傳進來的資料了。''''''
=======================*/
// const todosJSON = [
//   {
//     id: 0,
//     title: 'Item 1',
//     completed: false
//   },{
//     id: 1,
//     title: 'Item 2',
//     completed: false
//   },{
//     id: 2,
//     title: 'Item 3',
//     completed: true
//   },
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
      todosJSON: [
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
            ]
    };  
  }
    render(){
        //用箭頭函數可以不用宣告
        const _self = this;
        // 5. 從 state 中取得 todos
        const {todosJSON} = this.state;
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
              onSubmitEditing={
                  (title) => this.setState({
                    todosJSON: _createTodo(todosJSON, title)
                    
                  })
              }
            />
            <TodoList 
                todos={todosJSON} 
                //用一般的function上面就要宣告_self = this
                //這邊的id是從子層傳過來的
                //onDeleteTodo是一個物件(也是函數)，傳給子層
                onDeleteTodo={function (id){
                  _self.setState({
                     todosJSON: _deleteTodo(todosJSON,id)
                  })
                }}
                //用下面的箭頭函數，會綁訂父層的this，所以上面可以不用宣告
                /*onDeleteTodo={
                  (id)=>{
                    this.setState({
                      todosJSON:_deleteTodo(todosJSON,id)
                    })
                  }
                }*/
                onToggleTodo = {
                  (id,completed)=>this.setState({
                    todosJSON: _toggleTodo(todosJSON,id,completed)
                  })
                }
                // 1. 呼叫 _updateTodo，更新 todos 狀態
                onUpdateTodo={
                    (id, title) => this.setState({
                      todosJSON: _updateTodo(todosJSON, id, title)
                    })
                }                
            />
          </div>
        )

    }

}

ReactDOM.render(<TodoApp />,document.getElementById('test1'));

// 2. 將編輯邏輯抽成一個 function
const _updateTodo = (todosJSON, id, title) => {
  const target = todosJSON.find((todo) => todo.id === id);
   console.log('title',title);
  if (target) target.title = title;
  return todosJSON;
};

const _createTodo = (todosJSON, title)=>{
 
    todosJSON.push({
      id:todosJSON[todosJSON.length-1] ? todosJSON[todosJSON.length-1].id + 1 : 0 ,
      title,
      completed :false
    })
    return todosJSON;
}

const _toggleTodo = (todosJSON, id,completed) => {
  //找到從TodoList回傳的id跟totosJSON裡面的資料比對
  const target = todosJSON.find((todo)=> todo.id ===id)
  console.log(target,id);
  //如果其值相等，則將該index刪除一筆
  if (target) target.completed = completed;
  
  //回傳新的todosJSON
  return todosJSON;
};

// 7. 將刪除邏輯抽成一個 function
const _deleteTodo = (todosJSON, id) => {
  //找到從TodoList回傳的id跟totosJSON裡面的資料比對
  const idx = todosJSON.findIndex((todosJSON) => todosJSON.id === id);
  //如果其值相等，則將該index刪除一筆
  if (idx !== -1) todosJSON.splice(idx, 1);
  //回傳新的todosJSON
  return todosJSON;
};

TodoApp.propTypes = {
/*======================
    目前React.PropTypes壞掉
    用引用的PropTypes，就不會出現錯誤
=======================*/
//   title: React.PropTypes.string,
//   username: React.PropTypes.string,
//   todoCount: React.PropTypes.number
  todosJSON: PropTypes.func
};

// 2. 使用 defaultProps 定義參數的預設值
TodoApp.defaultProps = {
  todosJSON: (()=>{
      alert('onDelete Default'); return {}
    }),
//   username: '預設Guest',
//   todoCount: 0
};


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