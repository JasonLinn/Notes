import React from 'react';
export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    // 1. 讓上層元件傳遞的 value，初始元件狀態
    this.state = { value: props.value || ''};
     // 2. 手動綁定 this 給 handleChange
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

    // 3. handleChange 用來傾聽 input onChange 事件，將使用者輸入的資料更新到元件狀態中
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  // 1. 傾聽使用者 keydown 事件：
  //    當使用者按下 enter (keyCode = 13) 後，
  //    呼叫上層傳遞的 onSubmitEditing callback，
  //    將資料傳遞給上層元件。
  handleKeyDown(e) {
    const {
      onKeyDown,
      onSubmitEditing
    } = this.props;
    const { value } = e.target;
    switch (e.keyCode) {
      case 13:
        // 2. 如果使用者沒有鍵入任何值（包括都是空白），則不會呼叫 callback
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        // 3. 將輸入框資料清空
        e.target.value = '';
        break;
    }
    // 4. 如果上層元件傳遞 onKeyDown callback，我們必須觸發它
    onKeyDown && onKeyDown(e);

  }
  
  render() {
    const {placeholder,autoFocus,value,onBlur,onKeyDown,onUpdate} = this.props;
    return (
      
      <div>
        <input type="text" 
            placeholder={placeholder} 
            autoFocus value={value} 
            onBlur={onBlur}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
       />
      </div>
	);
  }
}

// 6. 完成 onSubmitEditing 的 propTypes
InputField.propTypes = {
  onSubmitEditing: React.PropTypes.func
};

