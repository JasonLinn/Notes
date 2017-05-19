import React from 'react';
import ReactDOM from 'react-dom';
import AccItem from './AccItem.js';
import AccInput from './AccInput.js';
import AccSubmit from './AccSubmit.js';
import AccShow from './AccShow.js';
class AccApp extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state ={
            list:[{
                id:1,
                name:'吃飯',

            },{
                id:2,
                name:'房租',

            },]
        }
        this.dataShow = this.dataShow.bind(this);
    }
    dataShow(){
        alert('dataShow');
    }
    render(){
        const {list} = this.state;
        
        return(
            <div>
                <AccInput/>
                <AccItem list = {list}/>
                <AccSubmit dataShow={this.dataShow}/>
                <AccShow list ={list}/>
            </div>
            
        )
    }
}
ReactDOM.render(<AccApp/>,document.getElementById('test4'));