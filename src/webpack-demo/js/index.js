//es6寫法
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss';
import '../css/style.css';
import CustomButton from './a.js';

/*================
  引入其他頁的class
=================*/
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
	  <CustomButton text="567" content={<input type="radio"/>}>
	    <button> {123} </button><span><input type="text"/></span>
      </CustomButton>
	);
  }
}
ReactDOM.render(<Demo />, document.getElementById('test9'));
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
/*================
      props
=================*/
  //props 是 React 父子元件間溝通的橋樑。靜態（唯讀）。
  //父元件用屬性賦值的方式傳給子元件，子元件用 this.props 讀取。但不應於子元件內變動 （唯讀）。
  //父元件傳入的 props 改變將造成子元件重繪。
class HelloWorldComponent extends React.Component {

  render() {
    return (      
      <h1>Hello {this.props.name}</h1>      
    );
  }
}

ReactDOM.render(
  <HelloWorldComponent name="Joe Schmoe"/>,
  document.getElementById('test7')
);
/*======================
    Component的生命週期
=======================*/
class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');
    
    this.handleClick = this.handleClick.bind(this);
    //state預設值
    this.state = {
      name: 'Mark',
    }
  }
  handleClick() {
    //states 是元件內部狀態。動態（可用 setState 改值）。
    //與一般變數不同的是，它無法直接修改（初始化例外），只能用 this.setState() 修改。
    //每次使用 this.setState() 修改 state 都會造成元件重繪。
    this.setState({'name': 'Zuck'});
  }
  //元件初始化：組件被插入到ＤＯＭ節點中
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  //元件更新：如果ＤＯＭ數據更新，組建需要重新渲染
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //元件卸載：從ＤＯＭ中移除組件
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      //在es6的寫法中要呼叫this.handleClick時，在上面需綁定this.handleClick = this.handleClick.bind(this);
      //不然這裡的this會變成div
      <div onClick={this.handleClick}>Hi, {this.state.name}</div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('test1'));