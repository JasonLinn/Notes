import React from 'react';
import ReactDOM from 'react-dom';


class AccItem extends React.Component{
    constructor(props,context){
        super(props,context);
        this.returnValue = this.returnValue.bind(this);
    }
    returnValue(){
        const val = document.getElementById('numberInput').value;
        const accOpt = document.getElementById('accSelect').value;
        const {dataShow} =this.props;
        dataShow && dataShow(val,accOpt);
        console.log('a',val,accOpt);
    }
    render(){
        const {list,value,dataShow,type} = this.props;
        console.log('list123',list);
        const Elements = type.map(function(listItem){
            console.log(2222,listItem);
            return(<option key={listItem.id} value={listItem.name}>{listItem.name}</option>)
        })
        console.log(Elements);
        // const Elements = list.map((listItem)=>(
            
        //     <option key={listItem.id} value={listItem.name}>{listItem.name}</option>
        // ))
        return(
            <div>
                <select id="accSelect">
                    {Elements}
                </select>
                <input id="numberInput" type ="number" defaultValue={value}/>
                <button onClick={this.returnValue}>submit</button>
            </div>
            
        )
    }
}

export default AccItem;