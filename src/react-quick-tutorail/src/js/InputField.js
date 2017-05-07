import React from 'react';
export default class InputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {willDo} = this.props;
    return (
      
      <div>
        <input type="text" placeholder={willDo} />
      </div>
	);
  }
}