import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TodoActions } from '../actions/TodoActions';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      editing: false,
    };
  }
  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  onAdd() {
    //按下新增鈕後，觸發Action並把值傳給他(在函數裡面塞值，可以傳給父層)
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
        <h1>TodoFlux</h1>
        <div>
          <input
            value={this.state.text}
            type="text"
            placeholder="请输入代办事项"
            //觸發本身的onChange事件
            onChange={this.onChange}
          />
          <button
            //觸發本身的onAdd
            onClick={this.onAdd}
          >
            送出
          </button>
        </div>
      </div>
    );
  }
}

export default TodoHeader;