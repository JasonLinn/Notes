import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField.js';


class TodoItem extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state ={editable:false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }
    toggleEditMode(){
        this.setState({ editable: !this.state.editable });
    }
    render(){
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
        

    }    
    renderViewMode(){
        const {completed,title,onDelete,onToggle} = this.props;
        // 1. 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
        // 1. 當切換狀態的選擇框被點選，觸發上層元件 (TodoList) 傳遞的 onToggle callback
        return(
            <div>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange ={()=>onToggle && onToggle(!completed)}
                
                />
                <span onDoubleClick={this.toggleEditMode}>{title}</span>
                <button onClick={()=>onDelete && onDelete()}>x</button>
            </div>
        )
    }
    renderEditMode() {
    // 4. 「編輯模式」使用 InputField 元件
    const {onUpdate} = this.props;
    return (
      <InputField
        autoFocus                    // 5. autoFocus 讓使用者切換到編輯模式後，可以立即編打
        placeholder="編輯待辦事項"
        defaultValue={this.props.title}
        onBlur={this.toggleEditMode} // 8. 當使用者點擊其他地方，則切換為「瀏覽模式」
        onKeyDown={(e) => {          // 9. 當使用者按下 ESC，則切換為「瀏覽模式」
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleEditMode();
          }
        }}
        // 2. 傳遞 onSubmitEditing callback，該 callback 做兩件事情：
        //    a. 呼叫上層元件的 onUpdate callback
        //    b. 切換為「預覽模式」
        onSubmitEditing={(content) => {
            onUpdate && onUpdate(content);
            this.toggleEditMode();
        }}
      />
    );
  }


}
export default TodoItem;