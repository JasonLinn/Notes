import React from 'react';
import ReactDOM from 'react-dom';


class TodoHeader extends React.Component{
    render(){
        const {name,todoCount,title} = this.props;
        return(
            <div>
                <h1>{title}</h1>
                <h3>您好{name}，還有{todoCount}件待辦事項</h3>
            </div>
            
        )
    }

}
export default TodoHeader;