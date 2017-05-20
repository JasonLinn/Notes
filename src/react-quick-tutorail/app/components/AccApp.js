import React from 'react';
import ReactDOM from 'react-dom';
import AccItem from './AccItem.js';
import AccInput from './AccInput.js';
import AccSubmit from './AccSubmit.js';
import AccShow from './AccShow.js';
import echarts from 'echarts';
var chart0 = echarts.init(document.getElementById('test3'));

var option ={
                title : {
                    text: '生活花費',
                    subtext: 'test123',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['吃飯','房租','娛樂']
                },
                series : [
                    {
                        name: '詳細資料',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
class AccApp extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state ={
            list:[{
                id:1,
                money:80,
                name:'吃飯',

            },{
                id:2,
                money:85,
                name:'房租',

            },{
                id:3,
                money:70,
                name:'娛樂',

            }],
            type:[{
                id:1,
                name:'吃飯'
            },{
                id:2,
                name:'房租'
            },{
                id:3,
                name:'娛樂'
            }],
            
        }
        this.dataShow = this.dataShow.bind(this);
    }
    dataShow(){
        alert('dataShow');
    }
    componentDidUpdate(prevProps, prevState){
        const {list} = this.state;
        var option ={
                title : {
                    text: '生活花費',
                    subtext: 'test123',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['吃飯','房租','娛樂']
                },
                series : [
                    {
                        name: '詳細資料',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:function(){
                                var total =0;
                                list.map((listItem)=>{
                                
                                    if(listItem.name=='吃飯'){
                                        total +=parseInt(listItem.money)
                                    }
                                
                                })
                                console.log(total,'1233333')
                                return total;
                            }(), name:'吃飯'},
                            {value:function(){
                                var total =0;
                                list.map((listItem)=>{
                                
                                    if(listItem.name=='房租'){
                                        total +=parseInt(listItem.money)
                                    }
                                
                                })
                                console.log(total,'1233333')
                                return total;
                            }(), name:'房租'},
                            {value:function(){
                                var total =0;
                                list.map((listItem)=>{
                                
                                    if(listItem.name=='娛樂'){
                                        total +=parseInt(listItem.money)
                                    }
                                
                                })
                                console.log(total,'1233333')
                                return total;
                            }(), name:'娛樂'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };        
        chart0.setOption(option);        
    }
    componentDidMount(){
        const {list} = this.state;
        
        //  const data=this.state.option['series'][0].data;
        //  console.log(4444,data);
        const dataList = [{value:123, name:'吃飯'},
                            {value:function(){
                                var total =0;
                                list.map((listItem)=>{
                                
                                    if(listItem.name=='房租'){
                                        total +=parseInt(listItem.money)
                                    }
                                
                                })
                                console.log(total,'1233333')
                                return total;
                            }(), name:'房租'},
                            {value:function(){
                                var total =0;
                                list.map((listItem)=>{
                                
                                    if(listItem.name=='娛樂'){
                                        total +=parseInt(listItem.money)
                                    }
                                
                                })
                                console.log(total,'1233333')
                                return total;
                            }(), name:'娛樂'},]
        // var aaa = {data:dataList};
        // console.log('aaa',aaa);
        option['series'][0].data =dataList;
        // this.setState({option:dataList})
        chart0.setOption(option);
    }
    render(){
        const {list,type,option} = this.state;
        
        return(
            <div>
                <AccItem
                    list = {list}
                    type = {type}
                    value={0}
                    dataShow={(val,accOpt)=>this.setState({
                        list:_createAcc(list,val,accOpt)
                    })}
                />
                <AccShow 
                    list ={list}
                    deleteAcc = {(id)=>this.setState({
                        todos:_deleteAcc(list,id)
                    })}
                    total={_addAll(list,option)}
                      
                />
            </div>
            
        )
    }
}

const _addAll =(list,option)=>{
    var total=0;
    list.map( (listItem)=>{
        total += parseInt(listItem.money)
    })
    // this.setState({

    // })
    
    return total;
}
const _deleteAcc=(list,id)=>{
    const idx = list.findIndex((list)=>list.id === id);
    if(idx != -1) list.splice(idx,1);
    return list;
}
const _createAcc=(list,val,accOpt)=>{
    console.log(val,'value',accOpt);
    list.push({
        id:list[list.length - 1].id +1,
        money:val,
        name:accOpt
    })
    console.log('1111',list);
    return list;
}





ReactDOM.render(<AccApp/>,document.getElementById('test4'));