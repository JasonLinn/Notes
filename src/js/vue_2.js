var outer_data ={
    shopList: ["apple","banana","papaya"],
    shopList2:[
        {
            name:"apple",
            price:1000
        },
        {
            name:"banana",
            price:500
        },
        {
            name:"papaya",
            price:800
        },
    ]
}
const vm = new Vue({
    el:"#app",
    data:outer_data
})