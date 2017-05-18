import React from 'react';
import ReactDOM from 'react-dom';






export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        //裡面放的是這個props的小孩
        <h1>{this.props.children}{this.props.text}{this.props.content}</h1>
        
    );
  }
}
// ReactDOM.render(<CustomButton />, document.getElementById('test10'));
