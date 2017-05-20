import React from 'react';
import ReactDOM from 'react-dom';


class AccInput extends React.Component{
    render(){
        const {value} = this.props;
        return(
            <div>
                <input id="numberInput" type ="number" value={value}/>
            </div>
            
        )
    }
}

export default AccInput;