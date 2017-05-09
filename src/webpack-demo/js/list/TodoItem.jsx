import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField.jsx';
export default class TodoItem extends React.Component{
	// 若是需要"綁定 this.方法"或是需要 "在 constructor 使用" props，定義 state，
    //就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
	constructor(props,context) {
		//對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，
        //事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。
        //透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
		super(props,context);
        //給予初始值，他的用意是當state改變時，會重新渲染
		this.state = {editable:false};
        // 7. 在 ES6 component class 中，你必須手動綁定 this
        this.toggleEditMode = this.toggleEditMode.bind(this);
	} 
    toggleEditMode() {
        // 6. 更新元件狀態來切換模式
        this.setState({ editable: !this.state.editable });
    }    
    render(){
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }
    renderViewMode(){
        //在此可以先定義好this.props，也可以在裡面寫this.props.name
        const {title,completed} = this.props;
        return(
            <div>
                <input type="checkbox" checked ={completed}/>           
                <span onDoubleClick={this.toggleEditMode}>{this.props.title}</span>
                <button>x</button>
            </div>

        )
    }
    renderEditMode(){
        const {title,completed} = this.props;
        return(
            <InputField 
                autoFocus  // 5. autoFocus 讓使用者切換到編輯模式後，可以立即編打
                placeholder = "編輯待辦事項"
                value = {title}
                onBlur={this.toggleEditMode}  // 8. 當使用者點擊其他地方，則切換為「瀏覽模式」
                onKeyDown = {(e)=>{
                    if(e.keyCode ===27){ // 9. 當使用者按下 ESC，則切換為「瀏覽模式」
                        e.preventDefault();
                        this.toggleEditMode(); 
                    }
                }

                }
            />
        )
    }
}