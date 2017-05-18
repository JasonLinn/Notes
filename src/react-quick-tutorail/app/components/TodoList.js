import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.js';


class InputField extends React.Component{
    render(){

        const {todos,onDeleteTodo,onToggleTodo,onUpdateTodo} = this.props;
        const todoElements = todos.map((todo)=>(
            //回傳給父層todo.id
            <li key = {todo.id}>
                <TodoItem 
                    title = {todo.title}
                    completed = {todo.completed}
                    onDelete = {() =>onDeleteTodo && onDeleteTodo(todo.id)}
                    onToggle = {(completed)=>onToggleTodo && onToggleTodo(todo.id,completed)}
                    onUpdate = {(content)=>onUpdateTodo && onUpdateTodo(todo.id,content)}
                />
            </li>
        ))
        return(
            <ul>{todoElements}</ul>
        )
    }

}
export default InputField;