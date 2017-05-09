import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader.js';


class TodoApp extends React.Component {
    render(){
        return(
            <TodoHeader
                title = "我的待辦事項zxzx"
            />
            
        )   

    }

}

ReactDOM.render(<TodoApp />,document.getElementById('test1'));