var util = require('util');

function Person(){
    this.firstname ='Jason';
    this.lastname = 'Lin';
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
    //沒有加這行的話，new Policeman 之後，firstname跟lastname會undefine
    //需綁定父層並執行，用call
    Person.call(this);
    this.badgeNumber = '1234';
}

util.inherits(Policeman,Person);

var officer = new Policeman();
officer.greet();