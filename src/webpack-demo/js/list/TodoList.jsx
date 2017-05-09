import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component{
    render(){
        //在此可以先定義好this.props，也可以在裡面寫this.props.name
        const {todos} = this.props;
        //用todos接收父層的東西
    const todoElements = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ));
        return <ul>{todoElements}</ul>;
    }
}