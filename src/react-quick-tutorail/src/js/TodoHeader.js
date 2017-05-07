import React from 'react';
export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name,username,todoCount} = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h3>哈瞜，{username}：你有{this.props.todoCount}項未完成待辦事項</h3>
      </div>
	);
  }
}
/*================
  定義參數型別，防呆機制
  有型別錯誤的話會在console看到
=================*/
// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
  title: React.PropTypes.string,
  username: React.PropTypes.string,
  todoCount: React.PropTypes.number
};

// 2. 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
  title: '我的待辦清單',
  username: 'Guest',
  todoCount: 0
};
