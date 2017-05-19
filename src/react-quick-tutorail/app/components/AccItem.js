import React from 'react';
import ReactDOM from 'react-dom';


class AccItem extends React.Component{

    render(){
        const {list} = this.props;
        console.log('list',list);
        const Elements = list.map((list)=>(
            <option key={list.id} value={list.name}>{list.name}</option>
        ))
        return(
            <div>
                <select>
                    {Elements}
                </select>
            </div>
            
        )
    }
}

export default AccItem;