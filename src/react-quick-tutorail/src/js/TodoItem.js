import React from 'react';
import InputField from './InputField.js';

/*export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 1. 從 this.props 中，取得父元件傳遞的參數
    const {title,completed} = this.props;
    // 2. 根據父元件給的 title 和 completed 渲染畫面：
    //    好處是讓資料不會寫死在元件程式中，增加元件的重用性    
    return (
      <div>
        <input type="checkbox" checked={completed} />
        <span>{this.props.title}</span>
        <button>x</button>
      </div>
	);
  }
}*/
export default class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    // 1. 使用 class constructor (類別建構子) 初始元件狀態
    this.state = { editable: false };

    // 7. 在 ES6 component class 中，你必須手動綁定 this
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    // 6. 更新元件狀態來切換模式
    this.setState({ editable: !this.state.editable });
  }

  render() {
    // 2. 判斷目前模式為何，渲染不同的畫面
    return this.state.editable ? this.renderEditMode() : this.renderViewMode();
  }

  renderViewMode() {
    // 3. 將原本渲染「瀏覽模式」的程式，移至這裡
    
      // 1. 從 this.props 中，取得父元件傳遞的參數
      const {title,completed,onDelete,onToggle} = this.props;
      // 2. 根據父元件給的 title 和 completed 渲染畫面：
      //    好處是讓資料不會寫死在元件程式中，增加元件的重用性    
      return (
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle && onToggle(!completed)}
          />
          {/*點擊後改變模式*/}
          <span onDoubleClick={this.toggleEditMode}>{this.props.title}</span>
          <button onClick={() => onDelete && onDelete()}>x</button>
        </div>
        )
  }

  renderEditMode() {
    // 4. 「編輯模式」使用 InputField 元件
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
      // 6. 加入 onSubmitEditing callback
      onSubmitEditing={(content) => {
        onUpdate && onUpdate(content);
        this.toggleEditMode();
      }}        
      />
    );//render end
  }//end
}

// 2. 使用 defaultProps 定義參數的預設值
TodoItem.defaultProps = {
  title: 'default setting',
  onDelete:'alert(Delete)'
};

/*======================
react 有兩種資料模型：props 和 state；props 是由上層元件傳遞給下層，state 是由元件內部進行管理
你應該盡量設計 stateless 的元件，讓元件只需負責顯示上層元件傳遞的 props
如果元件內部有一些交互作用，你可以考慮將交互狀態存在 state 中
=======================*/