import React from 'react';
import ReactDOM from 'react-dom';

class AccShow extends React.Component{
    render(){
        const {list,deleteAcc,total} = this.props;
        const item = list.map((item)=>(
            <li key = {item.id}>
                <span>{item.name}{item.money}元</span>
                <button onClick={()=>deleteAcc && deleteAcc(item.id)}>x</button>
                
            </li>
        ))
        return(
            <ul>
                <div>Total:{total}</div>
                <span>{item}</span>
            </ul>
        )
    }
}
export default AccShow;