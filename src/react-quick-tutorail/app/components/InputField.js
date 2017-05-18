import React from 'react';
import ReactDOM from 'react-dom';


class InputField extends React.Component{
    constructor(props,context){
        super(props,context);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown(e){
        const {
            onKeyDown,
            onSubmitEditing
        }= this.props;
        const {value} = e.target;
        switch (e.keyCode){
            case 13:
                if(value.trim()){
                    onSubmitEditing && onSubmitEditing(value);
                }
                e.target.value = '';
                break;
        }
    }
    render(){
        const {autoFocus,placeholder,value,onBlur,onKeyDown} = this.props;
        return(
           <input
                type="text" 
                value="新增待辦清單"
                autoFocus = {autoFocus}
                placeholder = {placeholder}
                value = {value}
                onBlur = {onBlur}
                onKeyDown = {this.handleKeyDown}
                //onChange = {onType && onType(value)}
            />
        )
    }

}
export default InputField;