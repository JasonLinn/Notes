import React from 'react';
import ReactDOM from 'react-dom';

class AccShow extends React.Component{
    render(){
        const {list} = this.props;
        const item = list.map((item)=>(
            <li key = {item.id}>
                <div>{list[0].name}</div>
            </li>
        ))
        return(
            <ul>{item}</ul>
        )
    }
}
export default AccShow;