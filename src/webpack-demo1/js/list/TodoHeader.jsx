import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TodoHeader extends React.Component{
	// 若是需要"綁定 this.方法"或是需要 "在 constructor 使用" props，定義 state，
    //就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
	// constructor(props) {
	// 	//對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，
    //     //事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。
    //     //透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
	// 	super(props);
	// 	this.state = {}
	// } 
   
    render(){
        //在此可以先定義好this.props，也可以在裡面寫this.props.name
        const {title,username,number} = this.props;
        return(
            <div>
                <h1>{title}</h1>
                <h3>哈摟，{username}:你有{number}項未完成待辦事項</h3>            
            </div>

        )
    }
}
//React提供了兩個方法定義參數
// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
/*======================
    目前React.PropTypes壞掉
    用引用的PropTypes，就不會出現錯誤
=======================*/
//   title: React.PropTypes.string,
//   username: React.PropTypes.string,
//   todoCount: React.PropTypes.number
  title: PropTypes.string,
  username: PropTypes.string,
  todoCount: PropTypes.number
};

// 2. 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
  title: '預設的待辦清單',
  username: '預設Guest',
  todoCount: 0
};

/*======================
用了上面的propTypes定義，export default要放在最後面    
=======================*/
export default TodoHeader;