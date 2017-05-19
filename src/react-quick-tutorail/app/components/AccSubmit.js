import React from 'react';
import ReactDOM from 'react-dom';

class AccSubmit extends React.Component{
    
    render(){
        const {dataShow} = this.props;
        return(
            <button onClick={dataShow}>submit</button>
        )
    }
}

export default AccSubmit;