var outer_data ={
    shopList: ["apple","banana","papaya"],
    shopList2:[
        {
            name:"apple",
            price:1000,
            produce:"美國"
        },
        {
            name:"banana",
            price:500,
            produce:"美國"
        },
        {
            name:"papaya",
            price:800,
            produce:"美國"
        },
    ],
}
const vm = new Vue({
    el:"#app",
    data:outer_data
})