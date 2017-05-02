import React from 'react';
import ReactDOM from 'react-dom';


//ES6 Class
class App extends React.Component {
  constructor(props) {
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
class MyComponent extends React.Component{
    // propTypes:{
    //     name:React.PropTypes.string.isRequired,
    // },
    render(){

    }
}

//Stateless Components
const myComponent = () =>(
    <div><h1>第二種Components寫法</h1></div>
);
ReactDOM.render(
    React.DOM.h1({
        id:"My-heading",
        className:"haha",
        htmlFor:"me",
        style:{
            backgroundColor:"#fa0",
            color:"#f00"
        }
    },
    React.DOM.span(null,"I'm span "),
    React.DOM.em(null,"Hell"),
    "Hello World DOM!"),
    document.getElementById("container")
)
// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const omponent = (props) => (
	<div>Hello, {props.name}</div>
);

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
omponent.propTypes = {
	name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
omponent.defaultProps = {
	name: '',
}

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
// ReactDOM.render(<MyComponent name="Mark"/>, document.getElmentById('app'));


// var Component = React.createElement({
//     render:function(){
//         return React.DOM.span(null,"I'm span ");
//     }
// })

var hello = React.createFactory(myComponent);
ReactDOM.render(
    hello(),
    document.getElementById('test1')
)

// React.render(<Hello name = "World"/>,
// document.getElementById('container'));
const divStyle = {
    color:"#fff",
    backgroundColor:"#f00"
}

const lists = ['Javascript','Java','Node','Python'];


class hahaMessage extends React.Component{
    render(){
        return(
            <ul>
                {lists.map((result,index)=>{
                    return (<li key={index}>{result}</li>);
                })}
            </ul>
        )
    }
}
ReactDOM.render(<div style={divStyle}>divStyle</div>,document.getElementById('test4'))
ReactDOM.render(<myComponent/>,document.getElementById('test3'));
ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<hahaMessage style={{color:'#fa0',fontSize:'50px'}}/>, document.getElementById('test5'));
ReactDOM.render(<h1>JSX語法直接引用</h1>,document.getElementById('test'));


class HelloMessage extends React.Component {
	// 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
	constructor(props) {
		// 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
		super(props);
		this.state = {}
	}
	// render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
	render() {
		return (
			<div>Hello {this.props.name}</div>
		)
	}
}

// PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck
HelloMessage.defaultProps = {
 name: 'Zuck',
}

ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('test7'));