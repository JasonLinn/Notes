import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class InputField extends React.Component{
    constructor(props,context){
        super(props,context);
        // 1. 讓上層元件傳遞的 value，初始元件狀態
        this.state = { value: props.value || '' };
        console.log(this.state,'this.state')
        // 2. 手動綁定 this 給 handleChange
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    // 3. handleChange 用來傾聽 input onChange 事件，將使用者輸入的資料更新到元件狀態中
    handleChange(e) {
        //可限制只能輸入五個字(其他的字被substr)
        this.setState({ value: e.target.value.substr(0, 5) });
    }    
    // 1. 傾聽使用者 keydown 事件：
    //    當使用者按下 enter (keyCode = 13) 後，
    //    呼叫上層傳遞的 onSubmitEditing callback，
    //    將資料傳遞給上層元件。
    handleKeyDown(e){
        const {onKeyDown,onSubmitEditing} = this.props;
        const {value} = e.target;
        switch (e.keyCode){
            case 13:
            //trim()是去除空白，當裡面沒字串時，會回傳false
            // 2. 如果使用者沒有鍵入任何值（包括都是空白），則不會呼叫 callback
            if(value.trim()){
                onSubmitEditing && onSubmitEditing(value);
                console.log('itemValue:',value);
            }
            this.setState({ value: '' });
            break;
        }
        // 4. 如果上層元件傳遞 onKeyDown callback，我們必須觸發它
        onKeyDown && onKeyDown(e);
    }
    render(){
        //在此可以先定義好this.props，也可以在裡面寫this.props.name
        const {placeholder,autoFocus,defaultValue,onBlurMove} = this.props;
        return(
            <div>
                <input 
                    type="text" 
                    onBlur={onBlurMove} 
                    autoFocus 
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    //改成defaultValue將可以改變裡面的值
                    defaultValue={defaultValue}  
                    placeholder ={placeholder}
            />
            </div>

        )
    }
}
// 6. 完成 onSubmitEditing 的 propTypes
InputField.propTypes = {
  onSubmitEditing: PropTypes.func
};

export default InputField;