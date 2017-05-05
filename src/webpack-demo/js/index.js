import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss';
import '../css/style.css';


/*======================
      Hello World
=======================*/
class App extends React.Component {
  constructor(props) {
    //super會抓到父層的construnctor，同時在construnctor裡面才能用
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*======================
    Component的生命週期
=======================*/
class MyComponent extends React.Component {
  //props 是 React 父子元件間溝通的橋樑。靜態（唯讀）。
  //父元件用屬性賦值的方式傳給子元件，子元件用 this.props 讀取。但不應於子元件內變動 （唯讀）。
  //父元件傳入的 props 改變將造成子元件重繪。
  constructor(props) {
    super(props);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: 'Mark',
    }
  }
  handleClick() {
    this.setState({'name': 'Zuck'});
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div onClick={this.handleClick}>Hi, {this.state.name}</div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('test1'));