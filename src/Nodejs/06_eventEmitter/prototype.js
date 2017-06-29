var person ={
    firstname :'',
    lastname : '',
    greet:function(){
        return this.firstname + ' ' +this.lastname;
    }
}

//用createc會產生prototype
var john = Object.create(person);
john.firstname ='John';
john.lastname = 'Doe';
john.ha =function(){
    console.log('ha');
}

console.log(john.greet());
console.log(john.ha());
