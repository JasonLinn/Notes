import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoHeader extends React.Component{
	// 若是需要"綁定 this.方法"或是需要 "在 constructor 使用" props，定義 state，
    //就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
	constructor(props) {
		//對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，
        //事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。
        //透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
		super(props);
		this.state = {}
	} 
    render(){
        const {title} = this.props;
        return(
            <h1>{title}</h1>
        )
    }
}