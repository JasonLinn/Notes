import React from 'react';
export default class TodoItem extends React.Component {
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
}
