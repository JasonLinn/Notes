function greet(callback){
    console.log('Hello!');
    // callback();
    var data ={
        name:'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('The callback was invoked');
    console.log(data);
})
greet(function(data){
    console.log('The different callback was invoked');
    console.log(data.name);
})