var obj = {
    name:'John Doe',
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}
obj.greet();
//可以傳入一個屬性，並立即執行
obj.greet.call({name:'Jason Lin'});
//傳入陣列
obj.greet.apply({name:'Jason Lin'});
