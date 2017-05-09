import React from 'react';
import TodoItem from './TodoItem.js';
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 1. 從 props 中，取得 todos (待辦清單) 陣列
    const {todos,onDeleteTodo,onToggleTodo,onUpdateTodo } = this.props;
    /*================
    每個子元件都必須給予唯一的 key，React 根據 key 來辨認元件是屬於哪一筆資料，而確保：
    資料重新排序時，元件會跟著重新排序，而不是破壞舊元件，以新元件顯示資料
    資料被刪除時，元件會跟著刪除，而不是留給其他資料使用
    =================*/
    // 2. 將每一筆項目轉成 li 元素，並塞入對應的待辦資料
    //    PS. 務必給每筆 li 唯一 key（詳見[學習筆記 1]）
    const todoElements = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onUpdate={(title)=>onUpdateTodo && onUpdateTodo(todo.id, title)}
        />
      </li>
    ));
    return (
      <ul>{todoElements}</ul>
    // <ul>
    //   <ToDoItem
    //     title = "Item1"
    //     completed = {false}
    //   />
    //   <ToDoItem
    //     title = "Item2"
    //     completed = {false}
    //   />
    //   <ToDoItem
    //     title = "Item3"
    //     completed = {true}
    //   />
    // </ul>
	);
  }
}//component end

/*================
  定義參數型別，防呆機制
  有型別錯誤的話會在console看到
=================*/
// 1. 使用 propTypes 定義參數的型別
TodoList.propTypes = {
  todos :React.PropTypes.array
 
};

// 2. 使用 defaultProps 定義參數的預設值
TodoList.defaultProps = {
  todos :[{
    id: 0,
    title: 'Guest',
    completed: true
  }]

};
