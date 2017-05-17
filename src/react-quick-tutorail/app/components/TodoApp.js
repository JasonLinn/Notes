import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.js';
import InputField from './InputField.js';
import TodoList from './TodoList.js';

// const todos =[
//                 {
//                     id:0,
//                     title : 'Item 1',
//                     complited:false
//                 },{
//                     id:1,
//                     title : 'Item 2',
//                     complited:true
//                 },{
//                     id:2,
//                     title : 'Item 3',
//                     complited:true
//                 }
//             ]
class TodoApp extends  React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            todos: [
                    {
                        id: 0,
                        title: 'Item 1',
                        completed: false
                    },
                    {
                        id: 1,
                        title: 'Item 2',
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'Item 3',
                        completed: false
                    }
                ]
        }
    }
    render(){
        const {todos} = this.state;
        return(
            <div>
                <TodoHeader
                    name = "Jason" 
                    //todoCount = {todos.filter((todo)=>!todo.complited).length}
                    todoCount ={todos.filter(function(todo){
                        return !todo.completed
                    }).length}
                    title = "你的待辦清單"
                />
                <InputField />
                <TodoList
                    todos = {todos}
                    onDeleteTodo = {
                        (id) =>this.setState({
                            todos:_deleteTodo(todos,id)
                        })
                    }
                />
            </div>
        )

        
    }
};//component end
ReactDOM.render(<TodoApp/>,document.getElementById('app'));