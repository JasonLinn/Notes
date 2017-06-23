(function(global,$){

    //'new' an object
    var Greetr = function (firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }

    //hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en','es'];
    var greetings = {
        en:'Hello',
        es:'Hola'
    };
    //informal greetings
    var formalGreetings = {
        en:'Greetings',
        es:'Saludos'
    };
    //formal greetings
    var logMessages = {
        en:'Logged in',
        es:'Inicio sesion'
    };
    // logger messages
    Greetr.prototype ={
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate:function(){
            if(supportedLangs.indexOf(this.language) ===-1){
                throw "Invalid language";
            }  
        },
        greeting:function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreetings:function(){
            return formalGreetings[this.language] + ',' +this.fullName();
        },
        greet:function(formal){
            var msg;
            //if undefined or null it will be coerced to 'false'
            if(formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            return this;
        },
        log:function(){
            if(console){
                console.log(logMessages[this.language]+':'+this.fullName());
            }
            return this;
        },
        setLang:function(lang){
            this.language = lang;
            this.validate();

            return this;
        },
        HTMLGreeting:function(selector,formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreetings();
            }else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }

    };
    Greetr.init = function (firstName,lastName,language){
        var _self = this;
        _self.firstName = firstName || 'Default';
        _self.lastName = lastName || 'Default';
        _self.language = language || 'en';

        // _self.validate();
    }
    Greetr.init.prototype = Greetr.prototype;
    // Greetr.init.prototype = function(){
    //     var firstName = this.firstName;
    //     return 
    // }
    global.G$ = global.Greetr = Greetr;
    
})(window,jQuery);

console.log(G$(123, 123, 123));