import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.js';
import InputField from './InputField.js';
import TodoList from './TodoList.js';
import Like from './Like.js';

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
const _deleteTodo = (todos,id)=>{
    const idx = todos.findIndex((todo)=>todo.id === id);
    if(idx !==-1) todos.splice(idx,1);
    return todos;
}
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
                        completed: true
                    }
                ]
        }
    }
    render(){
        const {todos} = this.state;
        console.log('todos',todos);
        return(
            <div>
                <TodoHeader
                    name = "Jason" 
                    //todoCount={todos.filter((todo) => !todo.completed).length}
                    todoCount ={todos.filter(function(todo){
                        return !todo.completed
                    }).length}
                    title = "你的待辦清單"
                />
                <InputField 
                    onSubmitEditing={
                        (title) => this.setState({
                        todos: _createTodo(todos, title)
                        })
                    }
                />
                <TodoList
                    todos = {todos}
                    onDeleteTodo={
                        (id) => this.setState({
                            todos: _deleteTodo(todos, id)
                        })
                    }
                    onToggleTodo={
                        (id,completed) => this.setState({
                            todos:_toggleTodo(todos,id,completed)
                        })
                    }
                    onUpdateTodo={
                        (id,title) => this.setState({
                            todos:_updateTodo(todos,id,title)
                        })
                    }
                />
                <Like 
                    /*clickLike={
                        (like)=>this.setState({
                            like:addLike(like)
                        })
                    }*/
                />
            </div>
        )

        
    }
};//component end
  function addLike(like){
        
        const newLike = like+1;
        console.log('new',newLike);
        this.setState({
                like:newLike
        })
        return like;
    }
const _updateTodo = (todos,id,title)=>{
    const target = todos.find((todo)=>todo.id ===id);
    if(target) target.title = title;
    return todos;
}
const _toggleTodo = (todos,id,completed)=>{
    const target = todos.find((todo)=>todo.id ===id);
    if(target) target.completed = completed;
    return todos;
}
const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};
ReactDOM.render(<TodoApp/>,document.getElementById('app'));