const myData={
    name:"Jason",
    msg:"哈囉",
    color:"black",
    classs:"bigger",
    books:[
        {name:"哈利波特"},
        {name:"迷霧之子"},
        {name:"權力遊戲"},
    ]
}
const vm = new Vue({
    el:"#app",
    data:myData
})