import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.jsx';
import PropTypes from 'prop-types';
class TodoList extends React.Component{
    render(){
    //在此可以先定義好this.props，也可以在裡面寫this.props.name
    const {todos,onDeleteTodo,onToggleTodo,completed,onUpdateTodo } = this.props;
    //用todos接收父層的東西
    const todoElements = todos.map((todo) => (
      //用map函數會產生一個Key
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete = {()=> onDeleteTodo && onDeleteTodo(todo.id)}
          //第一個completed是本層的變數，onToggleTodo function 則是從父層傳入的
          //但裡面的參數是子層傳給父層
          onToggle = {(completed)=> onToggleTodo && onToggleTodo(todo.id,completed) }
          onUpdate = {(content)=>onUpdateTodo && onUpdateTodo (todo.id,content)}
        />
      </li>
    ));
        return <ul>{todoElements}</ul>;
    }
}

TodoList.propTypes = {
/*======================
    目前React.PropTypes壞掉
    用引用的PropTypes，就不會出現錯誤
=======================*/
//   title: React.PropTypes.string,
//   username: React.PropTypes.string,
//   todoCount: React.PropTypes.number
  onDeleteTodo: PropTypes.func
};

// 2. 使用 defaultProps 定義參數的預設值
TodoList.defaultProps = {
  onDeleteTodo: ()=>{
      alert('onDelete Default'); return {}
    },
//   username: '預設Guest',
//   todoCount: 0
};

export default TodoList;