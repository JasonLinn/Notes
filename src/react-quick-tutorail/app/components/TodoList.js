import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.js';


class InputField extends React.Component{
    render(){

        const {todos} = this.props;
        const todoElements = todos.map((todo)=>(
            //回傳給父層todo.id
            <li key = {todo.id}>
                <TodoItem 
                    title = {todo.title}
                    completed = {todo.completed}
                    onDelete = {() =>onDeleteTodo && onDeleteTodo(todo.id)}
                />
            </li>
        ))
        return(
            <ul>{todoElements}</ul>
        )
    }

}
export default InputField;