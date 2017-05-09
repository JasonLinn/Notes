import React from 'react';
import ReactDOM from 'react-dom';

export default class InputField extends React.Component{

    render(){
        //在此可以先定義好this.props，也可以在裡面寫this.props.name
        const {placeholder,autoFocus,value,onBlur,onKeyDown} = this.props;
        return(
            <div>
                <input type="text" onBlur={onBlur} onKeyDown={onKeyDown} value={value}  placeholder ={placeholder}/>
            </div>

        )
    }
}
